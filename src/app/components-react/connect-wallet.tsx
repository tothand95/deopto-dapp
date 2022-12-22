import React from 'react'
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { bsc, bscTestnet, mainnet } from 'wagmi/chains'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'


const { chains, provider } = configureChains(
  [bsc, mainnet, bscTestnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }), publicProvider()]
);

const { connectors } = getDefaultWallets({ appName: 'Deopto', chains });

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export const ConnectWallet = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
