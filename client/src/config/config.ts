import { Config, createConfig, http } from 'wagmi'
import { arbitrumSepolia, arbitrum } from "wagmi/chains";
import { getDefaultConfig } from "connectkit";
import { Account, Chain, Client, Transport } from 'viem';

export const config = createConfig(
    getDefaultConfig({
      // Your dApps chains
      chains: [arbitrumSepolia, arbitrum],
      transports: {
        // RPC URL for each chain
        [arbitrumSepolia.id as number]: http(
          `${process.env.API_KEY as string}`,
        ),
        [arbitrum.id]: http()
      },
  
      // Required API Keys
      walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID as string,
  
      // Required App Info
      appName: "Sabre DAO",
   
      appDescription: "Your App Description",
      appUrl: "https://family.co", // your app's url
      appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    }),
  );