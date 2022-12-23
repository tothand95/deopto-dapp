import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const ConnectWallet = () => {
  return (
    <ConnectButton showBalance={false}></ConnectButton>
  );
};
