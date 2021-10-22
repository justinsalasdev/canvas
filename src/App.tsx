import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";
import Web3 from "web3";

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

  return <div>app</div>;
}

export default App;
