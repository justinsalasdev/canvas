import { useWallet } from "use-wallet";

export default function Ethereum() {
  const wallet = useWallet();

  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === "connected" ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect("injected")}>MetaMask</button>
          {/* <button onClick={() => wallet.connect("frame")}>Frame</button>
          <button onClick={() => wallet.connect("portis")}>Portis</button> */}
        </div>
      )}
    </>
  );
}
