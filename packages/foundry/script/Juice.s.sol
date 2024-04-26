pragma solidity 0.8.20;

import "../contracts/Juice.sol";
import "forge-std/Script.sol";
import {console} from "forge-std/console.sol";

contract JuiceScript is Script {
    function run() external {
        console.log("Deploying Bytecode20...");
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        uint256 _totalSupply = 1_000_000;
        string memory _name = "NAME";
        string memory _symbol = "TICKER";
        uint8 _buyTotalFees = 10;
        uint8 _sellTotalFees = 10;
        address _treasuryWallet = address(0);
        address _airdropper = address(0);
        uint256 _percentageToAirdropper = 0;
        address _weth = address(0);
        address _uniswapV2RouterAddress = address(0);

        address bytecode20Address = address(
            new Juice(
                _name,
                _symbol,
                _totalSupply,
                _airdropper,
                _buyTotalFees,
                _sellTotalFees,
                _treasuryWallet,
                _airdropper,
                _percentageToAirdropper,
                _weth,
                _uniswapV2RouterAddress
            )
        );
        console.log("Bytecode20 deployed at address: %s", bytecode20Address);
        vm.stopBroadcast();
    }
}

/*
       string memory _name,
        string memory _symbol,
        uint256 _totalSupply,
        address _lpTokenRecipient,
        uint8 _buyTotalFees,
        uint8 _sellTotalFees,
        address _treasuryWallet,
        address _airdropper,
        uint256 _percentageToAirdropper,
        address _weth,
        address _uniswapV2RouterAddress
        */
