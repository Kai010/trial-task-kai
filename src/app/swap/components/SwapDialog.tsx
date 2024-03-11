'use client'

import { useAccount, useChainId } from "wagmi";
import {NotConnected} from "./NotConnected"
import { SwapWidget, darkTheme, lightTheme } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

const SwapDialog = () => {

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