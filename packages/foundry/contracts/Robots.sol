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

contract Robots is ERC721, Ownable {
    /* Errors */
    error RobotNft__CantTrainRobotIfNotOwner();
    error RobotNft__RobotHasReachedMaxGrade();

    /* Type declarations */
    struct RobotAttributes {
        string name;
        uint256 exp;
        uint256 level;
        string color;
        string style;
    }

    /* State variables */
    uint256 private s_tokenCounter;

    mapping(uint256 => RobotAttributes) private s_tokenIdToRobotAttributes;
    mapping(address => uint256[]) private s_addressToTokenIds;

    /* Events */
    event CreatedRobot(uint256 indexed tokenId);
    event IncreasedExp(uint256 indexed tokenId, uint256 indexed Exp);
    event IncreasedLv(uint256 indexed tokenId, uint256 indexed Lv);

    constructor() ERC721("RobotNft", "RBT") Ownable(msg.sender) {
        s_tokenCounter = 0;
    }

    function createRobot(
        string memory _name,
        string memory _color,
        string memory _style
    ) public {
        uint256 tokenId = s_tokenCounter;
        _safeMint(msg.sender, tokenId);

        s_addressToTokenIds[msg.sender].push(tokenId);
        s_tokenIdToRobotAttributes[tokenId] = RobotAttributes({
            name: _name,
            exp: 0,
            level: 1,
            color: _color,
            style: _style
        });

        s_tokenCounter = s_tokenCounter + 1;
        emit CreatedRobot(tokenId);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://metadata.syndicate.io/,";
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return
            string(abi.encodePacked(_baseURI(), address(this), "/", tokenId));
    }

    function trainRobot(uint256 tokenId) public {
        if (ownerOf(tokenId) != msg.sender) {
            revert RobotNft__CantTrainRobotIfNotOwner();
        }

        RobotAttributes storage robot = s_tokenIdToRobotAttributes[tokenId];
        uint256 robotExp = robot.exp;
        uint256 robotLv = robot.level;

        if (robotLv >= 3) {
            if (robotExp < 100) {
                robot.exp = robot.exp + 50;
                emit IncreasedExp(tokenId, robot.exp);
            } else {
                revert RobotNft__RobotHasReachedMaxGrade();
            }
        } else {
            if (robotExp < 50) {
                robot.exp = robot.exp + 50;
                emit IncreasedExp(tokenId, robot.exp);
            } else {
                robot.exp = 0;
                robot.level = robot.level + 1;
                emit IncreasedLv(tokenId, robot.level);
            }
        }
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
