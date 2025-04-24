import { ethers } from 'ethers';
export const createNewWallet = () =>{
    const randomWallet = ethers.Wallet.createRandom();
    
    const walletDetails = {
        address : randomWallet.address,
        privateKey : randomWallet.privateKey,
        mnemonic : randomWallet.mnemonic.phrase,
    };

    return walletDetails;

}