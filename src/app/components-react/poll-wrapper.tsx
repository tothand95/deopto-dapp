import React from 'react';
import { BigNumber } from 'ethers';
import { useContractRead } from 'wagmi';
import deoptoAbi from 'src/assets/deopto.abi.json'
import { LoadingIndicator } from './loading-indicator';
import { contractAddressTest } from './constants';
import { Poll } from './poll';

export const PollWrapper = () => {

  const { data, isLoading, isSuccess, isError, error } = useContractRead({
    address: contractAddressTest,
    abi: deoptoAbi,
    functionName: 'getCurrentPollIndex',
  });

  return (
    <>
      {
        isLoading &&
        <div className='deopto-paragraph'>
          Getting current poll data from Smart Contract
          <LoadingIndicator></LoadingIndicator>
        </div>
      }
      {
        isSuccess &&
        <Poll pollIndex={(data as BigNumber).toNumber()}></Poll>
      }
      {
        isError &&
        <div className='deopto-paragraph'>
          There was an error while fetching data
          {error}
        </div>
      }
    </>
  );
};
