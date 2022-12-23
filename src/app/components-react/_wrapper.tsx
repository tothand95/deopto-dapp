import React from 'react';
import { bsc } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';
import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { braveWallet, coinbaseWallet, ledgerWallet, trustWallet, metaMaskWallet, walletConnectWallet, injectedWallet, rainbowWallet, omniWallet, imTokenWallet, argentWallet } from '@rainbow-me/rainbowkit/wallets';
import { ConnectWallet } from './connect-wallet';

const appName = 'Deopto';

const { chains, provider } = configureChains(
  [bsc],
  [publicProvider()]
);

const connectors = connectorsForWallets([
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

export const VoteWrapper = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        initialChain={bsc}
        modalSize='wide'
        theme={darkTheme(themeOptions)}
      >
        <ConnectWallet></ConnectWallet>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
