import WeaveDB from "weavedb-sdk";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";

import { mainnet, arbitrum } from "viem/chains";

// 1. Define constants
const projectId = "a59dac2ed3c470f209ef860514b8491a";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });
// let db;

// async function init() {
//   db = new WeaveDB({
//     contractTxId: "pLV6SUj9vKnxDm6vqSt9kBwToLtF-XTpjmIXx8fgTSA",
//   });
//   await db.init();
// }

// window.onload = async () => {
//   init();
// };

document.querySelector("#button").addEventListener("click", async () => {
  const db = new WeaveDB({
    contractTxId: "pLV6SUj9vKnxDm6vqSt9kBwToLtF-XTpjmIXx8fgTSA",
  });
  await db.init();

  const collection_name = "people";

  const personData = { name: "Bob", age: 20 };
  const tx = await db.add(personData, collection_name);

  console.log({
    tx,
    personData,
  });

  const result = await db.get(collection_name);

  console.log({
    result,
  });
});
