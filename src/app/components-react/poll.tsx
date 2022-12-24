import React from 'react';
import { useContractRead } from 'wagmi';
import deoptoAbi from 'src/assets/deopto.abi.json'
import { contractAddressTest } from './constants';
import { LoadingIndicator } from './loading-indicator';

interface PollComponentInputs {
  pollIndex: number;
}

export const Poll = ({ pollIndex }: PollComponentInputs) => {

  const pollTitleResult = useContractRead({
    address: contractAddressTest,
    abi: deoptoAbi,
    functionName: 'getPollTitle',
    args: [pollIndex]
  });

  const pollOptionsResult = useContractRead({
    address: contractAddressTest,
    abi: deoptoAbi,
    functionName: 'getPollOptions',
    args: [pollIndex]
  });

  return (
    <div className='poll-container'>
      {
        (pollTitleResult.isLoading || pollOptionsResult.isLoading) && <LoadingIndicator></LoadingIndicator>
      }
      {
        pollTitleResult.isSuccess && pollOptionsResult.isSuccess &&
        <div>
          <div className='poll-title'>{pollTitleResult.data}</div>
          {
            (pollOptionsResult.data as string[]).map((item) => {
              return <div>{item}</div>
            })
          }
        </div>
      }
      {
        pollTitleResult.isError && pollOptionsResult.isError &&
        <div className='poll-paragraph'>
          There was an error while fetching data
        </div>
      }
    </div>
  );
};
