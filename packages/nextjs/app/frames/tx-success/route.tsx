/* eslint-disable react/jsx-key */
import Bonfire from "../../../components/assets/bonfireLogo";
import { frames } from "../frames";
import { Button } from "frames.js/next";
import { createPublicClient, http } from "viem";
import { parseAbiItem } from "viem";
import { hardhat } from "viem/chains";

export const publicClient = createPublicClient({
  chain: hardhat,
  transport: http(),
});

export const POST = frames(async ctx => {
  const state = ctx.state;
  const haiku = await fetch(`https://fworks.vercel.app/api/mongo/haiku?id=${state.id}&type=hash`);
  const hk = await haiku.json();
  const hkLength = hk.length;
  const latestHaiku = hk[hkLength - 1];
  console.log(ctx.message);

  const wagmiAbi = [
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
  ] as Abi;

  const logs = await publicClient.getContractEvents({
    address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    abi: wagmiAbi,
    eventName: "NewTrybe",
    args: {
      to: ctx.connectedAddress,
    },
  });

  console.log(logs);

  const data = await publicClient.readContract({
    address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    abi: wagmiAbi,
    functionName: "tribeStats",
    args: [logs[logs.length - 1].args.tokenId],
  });

  return {
    image: (
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          fontSize: 60,
          padding: 16,
          alignItems: "center",
          justifyContent: "center",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
        }}
      >
        <div tw="flex flex-col -top-24">
          HaiKus
          <div
            tw="flex flex-col"
            style={{
              fontSize: 20,
              bottom: 0,
              right: 0,
              position: "relative",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {" "}
            made by the Nerds
            <br />
            <div tw="flex">Transaction submitted! {ctx.message?.transactionId}</div>
          </div>
          <span style={{ fontSize: 40 }} tw="flex flex-col w-2/3 top-12 left-52 p-6">
            {data}
          </span>
        </div>
        <Bonfire />
      </div>
    ),
    buttons: [
      <Button action="link" target={`https://www.onceupon.gg/tx/${ctx.message?.transactionId}`}>
        View on block explorer
      </Button>,
      <Button action="post" target="/">
        Reset
      </Button>,
    ],
    state: ctx.state,
  };
});
