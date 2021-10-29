import Button from "@mui/material/Button";
import { ethers, utils } from "ethers";
import { useWallet } from "use-wallet";

export default function Ethereum() {
  const wallet = useWallet();
  console.log(wallet.connector);
  console.log(wallet.ethereum);

  const connect = (type: string) => async () => {
    try {
      await wallet.connect(type);
      if (wallet.status === "error") {
        console.log("failed to connect");
      }
    } catch (e) {
      console.log("catch", e);
    }
  };
  console.log(wallet.status);

  const signTx = async () => {
    if (!wallet.ethereum) {
      console.log("not connected!");
      return;
    }
    const provider = new ethers.providers.Web3Provider(wallet.ethereum);
    const signer = provider.getSigner();
    // const from = await signer.getAddress();
    // const txCount = await.signe

    // const tx: TransactionRequest = {
    //   to: "0xcDA0D6adCD0f1CCeA6795F9b1F23a27ae643FE7C",
    //   from: await signer.getAddress(),
    //   nonce: await signer.getTransactionCount(),
    //   value: utils.parseUnits("3000", "wei"),
    //   chainId: await signer.getChainId(),
    // };

    const domain = {
      name: "Ether Mail",
      version: "1",
      chainId: await signer.getChainId(),
      verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    };

    // The named list of all type definitions
    const types = {
      Person: [
        { name: "name", type: "string" },
        { name: "wallet", type: "address" },
      ],
      Mail: [
        { name: "from", type: "Person" },
        { name: "to", type: "Person" },
        { name: "contents", type: "string" },
      ],
    };

    // The data to sign
    const value = {
      from: {
        name: "Cow",
        wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
      },
      to: {
        name: "Bob",
        wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
      },
      contents: "Hello, Bob!",
    };

    const signedTx = await signer._signTypedData(domain, types, value);
    console.log(signedTx);
  };

  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === "connected" ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <Button onClick={() => wallet.reset()}>disconnect</Button>
          <button onClick={signTx}>signTx</button>
        </div>
      ) : (
        <div>
          Connect:
          <Button onClick={connect("injected")}>Metamask</Button>
          <Button onClick={connect("injected")}>xdefi</Button>
          <Button onClick={connect("torus")}>Torus</Button>
        </div>
      )}
    </>
  );
}
