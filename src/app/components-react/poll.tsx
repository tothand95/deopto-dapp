import React from 'react';
import { BigNumber } from 'ethers';
import { useContractRead } from 'wagmi';
import deoptoAbi from 'src/assets/deopto.abi.json'

export const Poll = () => {
  const contractAddressLive = '0xF918C5f9fcee3FFE7C27612e76eB2d27AA357e90';
  const contractAddressTest = '0xfa21e1efb2dd73826c7c53fc0a0a3ab13c2de06c';

  const { data, error, isError, isLoading, status } = useContractRead({
    address: contractAddressLive,
    abi: deoptoAbi,
    functionName: 'decimals',
  });
  console.log(data);
  return (
    <>
      <div className='deopto-paragraph'>{isLoading ? 'true' : 'false'}</div>
      <div className='deopto-paragraph'>{isError ? 'true' : 'false'}</div>
      <div className='deopto-paragraph'>{status}</div>
    </>
  );
};
