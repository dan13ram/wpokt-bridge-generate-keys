import { KeyManager } from "@pokt-foundation/pocketjs-signer";
import { generatePrivateKey, privateKeyToAddress } from "viem/accounts";
import { writeFileSync, ensureDirSync } from "fs-extra";

const main = async () => {
  console.log("Generating Keys...");
  console.log("...");
  console.log("Generating Ethereum Key...");
  const ethereumKey = generatePrivateKey();
  console.log("Ethereum Private Key: ", ethereumKey.split("0x")[1]);
  const ethereumAddress = privateKeyToAddress(ethereumKey);
  console.log("Ethereum Public Key: ", ethereumAddress);
  console.log("Ethereum Address: ", ethereumAddress);
  console.log("...");
  console.log("Generating Pocket Key...");
  const pocketSigner = await KeyManager.createRandom();
  const pocketKey = pocketSigner.getPrivateKey();
  console.log("Pocket Private Key: ", pocketKey);
  const pocketPublicKey = pocketSigner.getPublicKey();
  console.log("Pocket Public Key: ", pocketPublicKey);
  const pocketAddress = pocketSigner.getAddress();
  console.log("Pocket Address: ", pocketAddress);
  console.log("...");

  const keys = {
    ethereum: {
      privateKey: ethereumKey,
      publicKey: ethereumAddress,
      address: ethereumAddress,
    },

    pocket: {
      privateKey: pocketKey,
      publicKey: pocketPublicKey,
      address: pocketAddress,
    },
  };

  const keysJson = JSON.stringify(keys, null, 2);

  ensureDirSync("./keys");

  const fileNameWithTimeStamp = `./keys/keys-${Date.now()}.json`;

  writeFileSync(fileNameWithTimeStamp, keysJson);

  console.log("Keys Generated Successfully!");
  console.log("Keys saved in: ", fileNameWithTimeStamp);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
