import logo from './logo.svg';
import './App.css';
import { provider, signer} from './web3.js';
import { ethers } from "ethers";
import {contract} from './lottery.js'
import { useState, useEffect } from "react";


function App ()  {

  const [hasRun, setHasRun] = useState(false); // State to track if the code has already run

  useEffect(() => {
    if (!hasRun) {
      // Code you want to run only once
      contract.connect(signer).enter({ gasLimit: 3000000, value: 1 });
   // (contract.players([1])).then(console.log)
      //contract.connect(signer).winner().then();
      //contract.winner1().then(console.log)
      console.log("123")
      setHasRun(true); // Marking that the code has run
    }
    
  },[]); // Empty dependency array ensures the effect runs only once
  
  // const acc=signer.getAddress()
  // const balance =  signer.getBalance()
  //  console.log(balance)
  //  balance.then(console.log)
  

  

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
