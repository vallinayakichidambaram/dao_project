import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import dotenv from "dotenv";
dotenv.config();

if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
    console.log("private key not found")
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
    console.log("wallet address not found")
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
    console.log("alchemy url not found")
}

const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.PRIVATE_KEY,
    process.env.ALCHEMY_API_URL
);

/* console.log(sdk);
console.log(sdk.getSigner());
console.log(sdk.getSigner().getAddress()); */
(async () => {
    try {
        //const address = '0x000'
        const address = await sdk.getSigner().getAddress();
        console.log(`ThirdWeb initialised at ${address}`)
    } catch (err) {
        console.error('failed to initialise thirdweb',err);
        process.exit(1);
    }

})();

export default sdk;