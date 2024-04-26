// Layout of Contract:
// version
// imports
// errors
// interfaces, libraries, contracts
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

import "./ITrybe.sol";

contract Robots is ERC721, Ownable {
    /* Errors */
    error RobotNft__CantTrainRobotIfNotGM();
    error RobotNft__RobotHasReachedMaxGrade();

    /* Type declarations */

    struct Stats {
        uint256 HP;
        uint256 ATK;
        uint256 DEF;
    }

    struct Location {
        uint256 x;
        uint256 y;
        string pointOfInterest;
    }

    struct RobotAttributes {
        string name;
        string trybe;
        uint256 exp;
        uint256 level;
        Location location;
        Stats stats;
        string[4] inventory;
    }

    /* State variables */
    uint256 private s_tokenCounter;
    address public trybeContract;
    address public gameMaster;

    mapping(uint256 => RobotAttributes) private s_tokenIdToRobotAttributes;
    mapping(address => uint256[]) private s_addressToTokenIds;
    mapping(uint256 => bool) private s_tokenIdIsPlaying;

    /* Events */
    event CreatedRobot(uint256 indexed tokenId);
    event IncreasedExp(uint256 indexed tokenId, uint256 indexed Exp);
    event IncreasedLv(uint256 indexed tokenId, uint256 indexed Lv);

    constructor(
        address _trybeContract
    ) ERC721("RobotNft", "RBT") Ownable(msg.sender) {
        s_tokenCounter = 0;
        trybeContract = _trybeContract;
        gameMaster = msg.sender;
    }

    ITrybe Trybe = ITrybe(trybeContract);

    function createRobot(uint256 _id, string memory _name) public {
        uint256 tokenId = s_tokenCounter;

        require(
            Trybe.isMember(msg.sender, _id),
            "You are not a member of the Trybe"
        );

        _safeMint(msg.sender, tokenId);

        s_addressToTokenIds[msg.sender].push(tokenId);
        s_tokenIdToRobotAttributes[tokenId] = RobotAttributes({
            name: _name,
            trybe: Trybe.tribeStats(_id)[0],
            exp: 0,
            level: 1,
            location: Location({x: 0, y: 0, pointOfInterest: "base"}),
            stats: Stats({HP: 100, ATK: 10, DEF: 10}),
            inventory: ["", "", "", ""]
        });

        s_tokenCounter = s_tokenCounter + 1;
        emit CreatedRobot(tokenId);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://metadata.syndicate.io/,";
    }

    function setGameMaster(address _addr) public onlyOwner {
        gameMaster = _addr;
    }

    function play(uint256 tokenId) public {
        if (ownerOf(tokenId) != msg.sender) {
            revert RobotNft__CantTrainRobotIfNotGM();
        }
        s_tokenIdIsPlaying[tokenId] = true;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return
            string(abi.encodePacked(_baseURI(), address(this), "/", tokenId));
    }

    function trainRobot(
        uint256 tokenId,
        uint256 tokensEarned,
        Location memory location
    ) public {
        if (gameMaster != msg.sender) {
            revert RobotNft__CantTrainRobotIfNotGM();
        }
        require(s_tokenIdIsPlaying[tokenId] == true, "Robot is not playing");

        RobotAttributes storage robot = s_tokenIdToRobotAttributes[tokenId];
        uint256 robotExp = robot.exp;
        uint256 robotLv = robot.level;

        require(robot.stats.HP > 0);
        // update location and health if alive
        robot.location = location;
        robot.stats.HP = robot.stats.HP - 1;

        if (robotExp < 100 * robotLv) {
            robot.exp = robot.exp + tokensEarned;
            emit IncreasedExp(tokenId, robot.exp);
        } else {
            robot.exp = 0;
            robot.level = robot.level + 1;
            emit IncreasedLv(tokenId, robot.level);
        }
        // mint rate * level of ERC20 token
        s_tokenIdIsPlaying[tokenId] = false;
    }

    /* Getter functions */
    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function getRobotAttributes(
        uint256 tokenId
    ) public view returns (RobotAttributes memory) {
        return s_tokenIdToRobotAttributes[tokenId];
    }

    function getAddressToTokenIds(
        address player
    ) public view returns (uint256[] memory) {
        return s_addressToTokenIds[player];
    }
}
