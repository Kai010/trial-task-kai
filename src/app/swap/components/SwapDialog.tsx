'use client'

import { useAccount, useChainId } from "wagmi";
import {NotConnected} from "./NotConnected"
import { SwapWidget, darkTheme, lightTheme } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SwapDialog = () => {
  const router = useRouter()
  useEffect(() => {
    router.refresh()
  })
  
  let darkMode = true
  const { address, isConnected } = useAccount();
  return (
    <div className='flex items-center justify-center w-full'>
      {isConnected ? (
          <div className="Uniswap">
        <SwapWidget hideConnectionUI={true} theme={darkMode ? darkTheme : lightTheme} />
      </div>
      ) : (
        <NotConnected />
      )}
    </div>
  );
};

export default SwapDialog;