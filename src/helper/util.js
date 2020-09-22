// const state = {
//     // table


//     projectType: "",
//     standard: "",
//     params: [],
//     isMintable: false,
//     cap: "",
//     blockchainPlatform: "",
//     networkType: "",
//     contractFramework: "",
//     webFramework: ""
// }
const repoURL = "https://github.com/open-semsem/semsm-box"
// const branch = "react-eth-erc20"
export function GetRepoFromState(state) {
    console.log(state,'state');
    /**addBlockchainPlatform: blockchainPlatform => {…}
addCap: cap => {…}
addContractFramework: contractFramework => {…}
addMintable: () => {…}
addNetwork: networkType => {…}
addNew: step => {…}
addParam: param => {…}
addProjectType: projectType => {…}
addStandard: standard => {…}
addWebFramework: webFramework => {…}
blockchainPlatform: "ethereum"
contractFramework: "truffle"
networkType: "local"
params: (3) [{…}, {…}, {…}]
projectType: "token"
rest: () => {…}
standard: "ERC20"
webFramework: "react" */
console.log(state.projectType == "token",'if(state.projectType == "token")');
console.log(state.standard == "ERC20",'if(state.standard == "ERC20"');
console.log(state.isMintable == true ,'if(state.isMintable == true )');
console.log(state.blockchainPlatform == "ethereum",'state.blockchainPlatform == "ethereum"');
console.log(state.networkType == "local",'if(state.networkType == "local"');
console.log(state.contractFramework == "truffle",'ifstate.contractFramework == "truffle"');
console.log(state.webFramework == "react",'state.webFramework == "react"');
console.log(state.webFramework , 'state.webFramework == "react"');
    if (state.projectType == "token" && state.standard == "ERC20" && state.isMintable == true && state.blockchainPlatform == "ethereum" && state.networkType == "local" && state.contractFramework == "truffle" && state.webFramework == "react") {
        return {
            url: repoURL,
            branch: "react-eth-erc20"
        }
    } else if (state.projectType == "token" && state.standard == "ERC721" && state.isMintable == true && state.blockchainPlatform == "Ethereum" && state.networkType == "local" && state.contractFramework == "truffle" && state.webFramework == "react") {
        return {
            url: repoURL,
            branch: "react-eth-erc721"
        }
    } else{
        return true;
    }
}