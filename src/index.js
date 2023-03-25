import { SafeConnector } from '@wagmi/core/connectors/safe'
import {
    configureChains,
    createClient,
    getNetwork,
    switchNetwork,
    getContract,
    fetchSigner,
    readContract,
    writeContract,
    prepareWriteContract,
    getAccount, } from '@wagmi/core'
import { mainnet, goerli } from '@wagmi/core/chains'
import { EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'

window.w3m = {Web3Modal,EthereumClient, w3mConnectors, w3mProvider};
window.wagmi = {
    SafeConnector,
    configureChains,
    createClient,
    getNetwork,
    switchNetwork,
    getContract,
    fetchSigner,
    readContract,
    writeContract,
    prepareWriteContract,
    getAccount,
    chains: {mainnet, goerli},
};