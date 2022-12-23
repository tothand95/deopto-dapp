import React from 'react';
import { useContractRead } from 'wagmi';

export const ConnectWallet = () => {
  const { data, isError, isLoading } = useContractRead({
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    abi: wagmigotchiABI,
    functionName: 'getHunger',
  });

  
  return (
    <>
    </>
  );
};
