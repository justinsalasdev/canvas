import { dWindow } from "./types";

export default function Xdefi() {
  function connect() {
    const d_window = window as dWindow;

    if (!d_window.xfi) {
      //on try again, wait for 1s before running function again
      console.log("Failed to connect, Install Xdefi, try again");
      return;
    }

    if (!d_window.xfi?.ethereum) {
      console.log("Failed to connect, xdefi might not be your default wallet");
      console.log(d_window.xfi);
      return;
    }
    d_window.xfi.ethereum.request({ method: "eth_getAccounts" });
  }

  return (
    <div className="bg-primary">
      <button onClick={connect}>connect</button>
    </div>
  );
}
