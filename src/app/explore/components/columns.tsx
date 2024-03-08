"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Token = {
  id: string;
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const columns: ColumnDef<Token>[] = [
  {
    accessorKey: "id",
    header: () => <div className="mx-4 text-sm">#</div>,
    cell: ({ row }) => {
      const id: string = row.getValue("id")
      return <div className="mx-4 text-sm font-semibold">{id}</div>
    },
  },
  {
    accessorKey: "logoURI",
    header:  () => <div className="mx-4 text-sm">Icon</div>,
    cell: ({ row }) => {
      const uri: string = row.getValue("logoURI")
      return <Image className="mx-4 rounded-full" height='25' width='25' src={uri} alt="logo"></Image>
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="mx-4 text-sm">Name</div>,
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      return <div className="mx-4 text-sm font-semibold">{name}</div>
    },
    
  },
  {
    accessorKey: "symbol",
    header: () => <div className="mx-4 text-sm">Symbol</div>,
    cell: ({ row }) => {
      const symbol: string = row.getValue("symbol");
      return <div className="mx-4 text-sm font-semibold">{symbol}</div>
    },
  },
  {
    accessorKey: "address",
    header: () => <div className="mx-4 text-sm">Address</div>,
    cell: ({ row }) => {
      const address: string = row.getValue("address");
      return <div className="mx-4 text-sm font-semibold">{address}</div>
    },
  },
  {
    accessorKey: "decimals",
    header: () => <div className="mx-4 text-sm">Decimals</div>,
    cell: ({ row }) => {
      const decimals: string = row.getValue("decimals");
      return <div className="mx-4 text-sm font-semibold">{decimals}</div>
    },
  },

]
