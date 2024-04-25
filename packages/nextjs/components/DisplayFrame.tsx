"use client";

import { FrameContext, FrameUI, fallbackFrameContext } from "@frames.js/render";
import { FarcasterSigner, signFrameAction } from "@frames.js/render/farcaster";
import { FrameImageNext } from "@frames.js/render/next";
import { useFrame } from "@frames.js/render/use-frame";
import { FrameButton } from "frames.js";

export default function DisplayFrame() {
  // TODO: replace with your farcaster signer
  const farcasterSigner: FarcasterSigner = {
    fid: 1,
    status: "approved",
    publicKey: "0x00000000000000000000000000000000000000000000000000000000000000000",
    privateKey: "0x00000000000000000000000000000000000000000000000000000000000000000",
  };

  const frameState = useFrame({
    // replace with your frame url
    homeframeUrl: "http://localhost:3000/frames",
    // corresponds to the name of the route for POST in step 3
    frameActionProxy: "/frames",
    // corresponds to the name of the route for GET in step 3
    frameGetProxy: "/frames",
    frameContext: fallbackFrameContext,
    // map to your identity if you have one
    signerState: {
      hasSigner: true,
      signer: farcasterSigner,
      onSignerlessFramePress: () => {
        // Implement me
        alert("A frame button was pressed without a signer. Perhaps you want to prompt a login");
      },
      signFrameAction: signFrameAction,
    },
  });

  return (
    <div className="w-[400px] h-[600px]">
      Something something
      <FrameUI frameState={frameState} theme={{}} FrameImage={FrameImageNext} />
    </div>
  );
}
