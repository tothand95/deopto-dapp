import { Component } from '@angular/core';
import type { ComponentProps } from 'react';
import { ConnectWallet } from 'src/app/components-react/connect-wallet';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  ConnectWallet = ConnectWallet;
}
