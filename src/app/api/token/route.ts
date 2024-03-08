import { NextResponse } from "next/server";
import axios from "axios";

interface Token {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export async function POST(req: Request) {
  const body = await req.json();
  const chain = body.chain;
  const tokensList = await axios.get(
    "https://cloudflare-ipfs.com/ipns/tokens.uniswap.org"
  );
  const tokens: Token[] = tokensList.data.tokens;
  let ethereumTokens: Token[] = tokens.filter((token) => token.chainId === 1);
  let celoTokens: Token[] = tokens.filter((token) => token.chainId === 42220);
  let bnbTokens: Token[] = tokens.filter((token) => token.chainId === 56);
  let baseTokens: Token[] = tokens.filter((token) => token.chainId === 8453);
  let arbitrumTokens: Token[] = tokens.filter(
    (token) => token.chainId === 42161
  );
  let polygonTokens: Token[] = tokens.filter((token) => token.chainId === 137);
  ethereumTokens = ethereumTokens.map((token, index) => ({
    ...token,
    id: index + 1,
  }));
  celoTokens = celoTokens.map((token, index) => ({
    ...token,
    id: index + 1,
  }));
  bnbTokens = bnbTokens.map((token, index) => ({
    ...token,
    id: index + 1,
  }));
  baseTokens = baseTokens.map((token, index) => ({
    ...token,
    id: index + 1,
  }));
  arbitrumTokens = arbitrumTokens.map((token, index) => ({
    ...token,
    id: index + 1,
  }));
  polygonTokens = polygonTokens.map((token, index) => ({
    ...token,
    id: index + 1,
  }));
  if (chain === "ethereum") {
    return NextResponse.json({
      tokensList: ethereumTokens,
    });
  } else if (chain === "base") {
    return NextResponse.json({
      tokensList: baseTokens,
    });
  } else if (chain === "celo") {
    return NextResponse.json({
      tokensList: celoTokens,
    });
  } else if (chain === "bnb") {
    return NextResponse.json({
      tokensList: bnbTokens,
    });
  } else if (chain === "polygon") {
    return NextResponse.json({
      tokensList: polygonTokens,
    });
  } else if (chain === "arbitrum") {
    return NextResponse.json({
      tokensList: arbitrumTokens,
    });
  }
}
