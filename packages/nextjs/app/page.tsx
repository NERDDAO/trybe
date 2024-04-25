import { FrameContext, FrameUI, fallbackFrameContext } from "@frames.js/render";
import { FarcasterSigner, signFrameAction } from "@frames.js/render/farcaster";
import { FrameImageNext } from "@frames.js/render/next";
import { useFrame } from "@frames.js/render/use-frame";
import { FrameButton } from "frames.js";
import { fetchMetadata } from "frames.js/next";
import type { NextPage } from "next";

export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL("/frames", process.env.VERCEL_URL ? `https://{process.env.VERCEL_URL}` : "http://localhost:3000"),
    ),
  };
}

const Home: NextPage = () => {
  return <></>;
};

export default Home;
