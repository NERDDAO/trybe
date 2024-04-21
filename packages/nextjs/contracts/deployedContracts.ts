/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Trybe: {
      address: "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOfBatch",
          inputs: [
            {
              name: "accounts",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "burn",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "burnBatch",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeTribes",
          inputs: [
            {
              name: "_tokenId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "newTribe",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "exists",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFee",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isMember",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "_tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            {
              name: "tribe",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "mintBatch",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintNew",
          inputs: [
            {
              name: "_tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "returnState",
          inputs: [
            {
              name: "_id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "safeBatchTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setFee",
          inputs: [
            {
              name: "_newFee",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setURI",
          inputs: [
            {
              name: "newuri",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "tribeStats",
          inputs: [
            {
              name: "_tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string[4]",
              internalType: "string[4]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "uri",
          inputs: [
            {
              name: "_tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "NewTrybe",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tribe",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferBatch",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferSingle",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "URI",
          inputs: [
            {
              name: "value",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "id",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ERC1155InsufficientBalance",
          inputs: [
            {
              name: "sender",
              type: "address",
              internalType: "address",
            },
            {
              name: "balance",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "needed",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          type: "error",
          name: "ERC1155InvalidApprover",
          inputs: [
            {
              name: "approver",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC1155InvalidArrayLength",
          inputs: [
            {
              name: "idsLength",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "valuesLength",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          type: "error",
          name: "ERC1155InvalidOperator",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC1155InvalidReceiver",
          inputs: [
            {
              name: "receiver",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC1155InvalidSender",
          inputs: [
            {
              name: "sender",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC1155MissingApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
        },
      ],
      inheritedFunctions: {
        balanceOf:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        balanceOfBatch:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        isApprovedForAll:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        safeBatchTransferFrom:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        safeTransferFrom:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        setApprovalForAll:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        supportsInterface:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        uri: "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
        owner: "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
        renounceOwnership:
          "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
        transferOwnership:
          "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
        burn: "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155Burnable.sol",
        burnBatch:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155Burnable.sol",
        exists:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155Supply.sol",
        totalSupply:
          "lib/openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155Supply.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
