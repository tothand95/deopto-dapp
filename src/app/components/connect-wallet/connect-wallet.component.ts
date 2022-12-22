import { Component } from '@angular/core';
import { ConnectWallet } from 'src/app/components-react/connect-wallet';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.scss']
})
export class ConnectWalletComponent {
  ConnectWallet = ConnectWallet;
}
