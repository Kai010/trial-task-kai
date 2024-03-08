'use client'

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Token } from "./components/columns";
import axios from 'axios'

const Page = () => {
  const [selectedChain, setChain] = useState('ethereum')
  const [tokensList, setTokensList] = useState<Token[]>([]);
  const { status } = useSession()
  const handleItemClick = async(itemName: string) => {
   setChain(itemName);
  };
  useEffect(() => {
    const fetchChains = async() => {
      try {
        const response = await axios.post('/api/token',{chain: selectedChain})
        setTokensList(response.data.tokensList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchChains();
  },[selectedChain])

  return (
    <div className="w-5/6">
      {
  status === 'authenticated' ? (
      <div className="flex justify-end">
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
        <Button variant="outline">Chains</Button>
      </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => handleItemClick('ethereum')}>Ethereum</DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleItemClick('polygon')}>Polygon</DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleItemClick('bnb')}>BNB</DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleItemClick('celo')}>Celo</DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleItemClick('base')}>Base</DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleItemClick('arbitrum')}>Arbitrum</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  </div>) : (<div></div>)
}
  {
  status === 'authenticated' ? (
    
    tokensList.length === 0 ? <div /> : <DataTable columns={columns} data={tokensList} />
  ) : (
    <div className="flex justify-center items-center gap-4">
      <div className="text-3xl"> Please Sign In first </div>
      <Link className={buttonVariants()} href='/sign-in'>
        Sign in
      </Link>
    </div>
    )
  }
  </div>
  ); 
};

export default Page;