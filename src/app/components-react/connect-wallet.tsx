import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const ConnectWallet = () => {
  return (
    <div className='connect-button-container'>
      <ConnectButton showBalance={false} chainStatus={'full'}></ConnectButton>
    </div>
  );
};
