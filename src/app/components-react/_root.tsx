import React from 'react';
import { bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';
import { RainbowKitProvider, connectorsForWallets, darkTheme, Theme } from '@rainbow-me/rainbowkit';
import { braveWallet, coinbaseWallet, ledgerWallet, trustWallet, metaMaskWallet, walletConnectWallet, injectedWallet, rainbowWallet, omniWallet, imTokenWallet, argentWallet } from '@rainbow-me/rainbowkit/wallets';
import { PollWrapper } from './poll-wrapper';
import { ConnectWallet } from './connect-wallet';
import merge from 'lodash.merge';

const appName = 'Deopto';

const { chains, provider, webSocketProvider } = configureChains(
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
  provider,
  webSocketProvider
});

const themeOptions: ThemeOptions = {
  borderRadius: 'large',
  fontStack: 'system',
  overlayBlur: 'small',
};

const myTheme = merge(darkTheme(themeOptions), {
  colors: {
    connectButtonText: '#ff25ff',
    accentColor: '#ff25ff'
  },
  radii: {
    actionButton: '30rem',
    connectButton: '30rem',
  },
} as Theme);

export const VoteRoot = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize='wide' theme={myTheme} chains={chains} initialChain={bsc}>
        <div className='poll-root'>
          <ConnectWallet></ConnectWallet>
          <PollWrapper></PollWrapper>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
