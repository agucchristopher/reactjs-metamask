import React, { useState } from "react";
// import './style.css'

const App = () => {
  const [accountAddress, setAccountAddress] = useState("");
  const { ethereum } = window;
  console.log(window.window);
  async function getAccount() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    const account = accounts[0];
    return account;
  }
  console.log(ethereum);
  const ConnectMeta = () => {
    if (typeof window !== "undefined") {
      getAccount().then((response) => {
        console.log(response);
        setAccountAddress(response);
      });
    }
  };

  return (
    <div className="root">
      <h1>Connect your Metamask App</h1>

      <button onClick={ConnectMeta}>
        {!!accountAddress ? accountAddress : "Connect your wallet"}
      </button>
    </div>
  );
};

export default App;
