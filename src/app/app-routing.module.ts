import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectWalletComponent } from './components/connect-wallet/connect-wallet.component';

const routes: Routes = [
  {
    path: '', component: ConnectWalletComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
