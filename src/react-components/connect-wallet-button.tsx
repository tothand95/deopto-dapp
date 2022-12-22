// import { Button, ButtonProps } from '@pancakeswap/uikit'
// import { WalletModalV2 } from '@pancakeswap/ui-wallets'
// import { useState } from 'react'
// import { useAuth } from 'hooks/useAuth'
// import { wallets } from 'config/wallets'
// import React from 'react'

// export const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
//   const [open, setOpen] = useState(false)
//   const { login } = useAuth()

//   const handleClick = () => {
//     setOpen(true)
//   }

//   return (
//     <>
//       <Button width="100%" onClick={handleClick} {...props}>
//         {children || 'Connect Wallet'}
//       </Button>
//       <WalletModalV2
//         docText={'Learn How to Create and Connect'}
//         docLink="https://docs.pancakeswap.finance/get-started-aptos/wallet-guide"
//         isOpen={open}
//         wallets={wallets}
//         login={login}
//         onDismiss={() => setOpen(false)}
//       />
//     </>
//   )
// }
