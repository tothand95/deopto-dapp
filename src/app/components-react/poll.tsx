import React, { useState } from 'react';
import { useContractRead } from 'wagmi';
import deoptoAbi from 'src/assets/deopto.abi.json'
import { contractAddressTest } from './constants';
import { LoadingIndicator } from './loading-indicator';

interface PollComponentInputs {
  pollIndex: number;
}

interface PollOption {
  name: string;
  isSelected: boolean;
}

export const Poll = ({ pollIndex }: PollComponentInputs) => {
  const [pollOptions, setPollOptions] = useState([] as PollOption[]);

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
    args: [pollIndex],
    onSuccess(data) {
      setPollOptions((data as string[]).map((item) => {
        return { name: item, isSelected: false } as PollOption;
      }) as any);
    },
  });

  function selectOption(option: PollOption) {
    let pollOptionsNew = pollOptions.map((item) => {
      item.isSelected = item.name === option.name;
      return item;
    });

    setPollOptions(pollOptionsNew);
  }

  return (
    <div className='poll-container'>
      {
        (pollTitleResult.isLoading || pollOptionsResult.isLoading) && <LoadingIndicator></LoadingIndicator>
      }
      {
        pollTitleResult.isSuccess && pollOptionsResult.isSuccess &&
        <>
          <div className='poll-title'>{pollTitleResult.data}</div>
          {
            pollOptions.map((item, index) => {
              return <div
                key={'option' + index}
                className={`poll-option ${item.isSelected ? 'poll-option-selected' : ''}`}
                onClick={() => selectOption(item)}>
                {item.name}
              </div>
            })
          }
        </>
      }
      {
        pollTitleResult.isError && pollOptionsResult.isError &&
        <div className='poll-paragraph'>
          There was an error while fetching data
        </div>
      }
    </div >
  );
};
