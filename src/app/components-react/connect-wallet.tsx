import React from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import * as Rainbow from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { bsc, bscTestnet, mainnet } from 'wagmi/chains'

const { chains, provider } = configureChains(
  [bsc, mainnet, bscTestnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
    publicProvider()
  ]
);

const { connectors } = Rainbow.getDefaultWallets({ appName: 'Deopto', chains });

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export const ConnectWallet = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <Rainbow.RainbowKitProvider chains={chains}>
        <div>
          <Rainbow.ConnectButton />
        </div>
      </Rainbow.RainbowKitProvider>
    </WagmiConfig>
  )
}
