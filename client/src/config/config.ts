import { createConfig, http } from 'wagmi'
import { arbitrumSepolia, arbitrum } from "wagmi/chains";
import { getDefaultConfig } from "connectkit";


export const config = createConfig(
    getDefaultConfig({
      // Your dApps chains
      chains: [arbitrumSepolia, arbitrum],
      transports: {
        // RPC URL for each chain
        [arbitrumSepolia.id]: http(
          `https://arbitrum-sepolia.infura.io/v3/${process.env.API_KEY}`,
        ),
        [arbitrum.id]: http(
          `https://arbitrum-sepolia.infura.io/v3/${process.env.API_KEY}`,
        )
      },
  
      // Required API Keys
      walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID as string,
  
      // Required App Info
      appName: "Sabre DAO",
      // Optional App Info
  
    }),
  );