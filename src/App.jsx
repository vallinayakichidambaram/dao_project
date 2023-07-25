import {useAddress , ConnectWallet} from "@thirdweb-dev/react";

const App = () => {

  const address = useAddress();
  //useAddress() is a hook provided by thirdWeb

  console.log(`Wallet Connected. Address --- ${address}`)

  if(!address) {
    //Add a connect wallet button
    return(
      <div className="landing">
        <h1>Welcome to IP DAO.</h1>
        <ConnectWallet />
      </div>
    )
    
  }

  return (
    <div className="landing">
      <h1>👀Wallet Connected! Now what?!</h1>
    </div>
  );
};

export default App;
