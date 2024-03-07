'use client'

import { useAccount } from "wagmi";
import {NotConnected} from "./NotConnected"
import { useRouter } from "next/navigation";

const SwapDialog = () => {
  const router = useRouter()
  router.refresh();
  const { address, isConnected } = useAccount();
  return (
    <div className='flex items-center justify-center w-full'>
      {isConnected ? (
        <h1 className="text-4xl">Swap</h1>
      ) : (
        <NotConnected />
      )}
    </div>
  );
};

export default SwapDialog;