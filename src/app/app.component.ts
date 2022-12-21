import { Component } from "@angular/core";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "./web3RPC";
const clientId = "YOUR_WEB3AUTH_CLIENT_ID"; // get from https://dashboard.web3auth.io

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "angular-app";
    web3auth: Web3Auth | null = null;
    provider: SafeEventEmitterProvider | null = null;
    isModalLoaded = false;

    async ngOnInit() {
      this.web3auth = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x38",
          rpcTarget: "https://bsc-dataseed.binance.org/", // This is the public RPC we have added, please pass on your own endpoint while creating an app
        },
      });
      const web3auth = this.web3auth;


      await web3auth.initModal();
      if (web3auth.provider) {
        this.provider = web3auth.provider;
      }
      this.isModalLoaded = true;
    }

    login = async () => {
    if (!this.web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3auth = this.web3auth;
    this.provider = await web3auth.connect();
    console.log("logged in");
    };

    getUserInfo = async () => {
      if (!this.web3auth) {
        console.log("web3auth not initialized yet");
        return;
      }
      const user = await this.web3auth.getUserInfo();
      console.log(user);
    };

    logout = async () => {
      if (!this.web3auth) {
        console.log("web3auth not initialized yet");
        return;
      }
      await this.web3auth.logout();
      this.provider = null;
      console.log("logged out");
    };

    getChainId = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const chainId = await rpc.getChainId();
      console.log(chainId);
    };
    getAccounts = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const address = await rpc.getAccounts();
      console.log(address);
    };

    getBalance = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const balance = await rpc.getBalance();
      console.log(balance);
    };

    sendTransaction = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const receipt = await rpc.sendTransaction();
      console.log(receipt);
    };

    signMessage = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const signedMessage = await rpc.signMessage();
      console.log(signedMessage);
    };

    getPrivateKey = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const privateKey = await rpc.getPrivateKey();
      console.log(privateKey);
    };
}