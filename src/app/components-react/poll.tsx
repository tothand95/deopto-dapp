import React, { useCallback, useState } from 'react';
import { ConnectorNotFoundError, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
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
  const [voteTransactionError, setVoteTransactionError] = useState('');
  const [voteTransactionSuccess, setVoteTransactionSuccess] = useState('');

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
    console.log(pollOptions);

    setPollOptions(pollOptionsNew);
  }

  const sendVoteResult = useContractWrite({
    address: contractAddressTest,
    abi: deoptoAbi,
    functionName: 'vote',
    mode: 'recklesslyUnprepared',
    args: [pollOptions.filter(item => item.isSelected).pop()?.name],
    onSuccess(_data) {
      setVoteTransactionSuccess('Thank you for participating! Your Voting Power will be calculated when the poll ends.');
    },
    onError(error: any) {
      if (error.reason) {
        console.log(error);
        setVoteTransactionError(error.reason);
      }
      if (error instanceof ConnectorNotFoundError) {
        setVoteTransactionError('You have to connect your wallet first to vote!\nPlease use the "Connect Wallet" button on top.');
      }
    }
  });

  const sendVoteRequest = () => {
    setVoteTransactionError('');
    setVoteTransactionSuccess('');
    if (pollOptions.filter(item => item.isSelected).length === 1) {
      (sendVoteResult as any).write();
    }
  };

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
          <div className='vote-button-container'>
            <button className='deopto-button' onClick={sendVoteRequest}>Send vote!</button>
          </div>
        </>
      }
      {
        pollTitleResult.isError && pollOptionsResult.isError &&
        <div className='poll-paragraph'>
          There was an error while fetching data
        </div>
      }
      {
        voteTransactionError &&
        <div className='poll-notification-error'>
          <div className='poll-notification-header'> ⬛ Error ⬛ </div>
          <div>{voteTransactionError}</div>
        </div>
      }
      {
        voteTransactionSuccess &&
        <div className='poll-notification-success'>
          <div className='poll-notification-header'> ⬛ Success ⬛ </div>
          <div>{voteTransactionSuccess}</div>
        </div>
      }
    </div >
  );
};
