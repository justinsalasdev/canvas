import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";
import EthWallet from "./components/EthWallet";
import Subscriber from "./Subscriber";

function App() {
  useEffect(() => {
    (async () => {
      const provider: any = await detectEthereumProvider();
      if (provider) {
        console.log("connected");
        const x = provider.isConnected();
        console.log("haha", x);
      }
    })();
  }, []);

  return (
    <div>
      <Subscriber />
      <EthWallet />
    </div>
  );
}

export default App;
