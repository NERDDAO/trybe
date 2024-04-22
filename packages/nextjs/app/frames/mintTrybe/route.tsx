import { NextRequest, NextResponse } from "next/server";
import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js";
import { Abi, encodeFunctionData } from "viem";

export async function POST(req: NextRequest): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const frameMessage = await getFrameMessage(json);
  if (!frameMessage) {
    throw new Error("No frame message");
  }
  console.log(frameMessage);
  const trybeName = frameMessage.inputText;

  const abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "tribe",
          type: "string",
        },
      ],
      name: "mint",
      outputs: [{ name: "_id", type: "uint256" }],
      stateMutability: "payable",
      type: "function",
    },
  ] as const;
  const calldata = encodeFunctionData({
    abi: abi,
    functionName: "mint",
    args: [trybeName],
  });

  const TRYBE_ADDRESS = process.env.TRYBE_CONTRACT;

  return NextResponse.json({
    chainId: "eip155:31337", // OP Mainnet 10
    method: "eth_sendTransaction",
    params: {
      abi: abi as Abi,
      to: TRYBE_ADDRESS,
      data: calldata,
      value: "100000000000000000",
    },
  });
}
