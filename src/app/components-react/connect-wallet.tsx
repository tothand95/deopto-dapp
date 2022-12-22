import React from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import * as Rainbow from '@rainbow-me/rainbowkit';
import { braveWallet, coinbaseWallet, ledgerWallet, trustWallet, metaMaskWallet, walletConnectWallet, injectedWallet, rainbowWallet, omniWallet, imTokenWallet, argentWallet } from '@rainbow-me/rainbowkit/wallets';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { bsc } from 'wagmi/chains'
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';

const { chains, provider } = configureChains(
  [bsc],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
    publicProvider(),
  ]
);
const appName = 'Deopto';
// const { connectors } = Rainbow.getDefaultWallets({ appName: 'Deopto', chains });
const connectors = Rainbow.connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ appName, chains }),
      trustWallet({ chains }),
      walletConnectWallet({ chains })
    ]
  },
  {
    groupName: "More",
    wallets: [
      braveWallet({ chains }),
      ledgerWallet({ chains }),
      rainbowWallet({ chains }),
      omniWallet({ chains }),
      imTokenWallet({ chains }),
      argentWallet({ chains })
    ]
  }
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const themeOptions: ThemeOptions = {
  borderRadius: 'large',
  fontStack: 'system',
  overlayBlur: 'small'
};

export const ConnectWallet = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <Rainbow.RainbowKitProvider
        chains={chains}
        initialChain={bsc}
        modalSize='wide'
        theme={Rainbow.darkTheme(themeOptions)}
      >
        <Rainbow.ConnectButton
          showBalance={false}

        />
      </Rainbow.RainbowKitProvider>
    </WagmiConfig>
  )
}
