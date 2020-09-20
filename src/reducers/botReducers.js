// Sidebar
export const ADD_NEW_STEP = 'ADD_NEW_STEP';
export const ADD_CAP = 'ADD_CAP';
export const ADD_MINTABLE = 'ADD_MINTABLE';
export const ADD_PARAM = 'ADD_PARAM';
export const ADD_PROJECT_TYPE = 'ADD_PROJECT_TYPE';
export const ADD_STANDARD = 'ADD_STANDARD';
export const ADD_BLOCKCHAIN = 'ADD_BLOCKCHAIN';
export const ADD_NETWORK = 'ADD_NETWORK';
export const ADD_CONTRACT_FRAMEWORK = 'ADD_CONTRACT_FRAMEWORK';
export const ADD_WEB_FRAMEWORK = 'ADD_WEB_FRAMEWORK';
export const REST = 'REST';


export const addNew = step => ({
  type: ADD_NEW_STEP,
  step
});
export const addMintable = () => ({
  type: ADD_MINTABLE
  
});
export const addCap = cap => ({
  type: ADD_CAP,
  cap
});
export const addParam = param => ({
  type: ADD_PARAM,
  param
});
export const addProjectType = projectType => ({
  type: ADD_PROJECT_TYPE,
  projectType
});
export const addStandard = standard => ({
  type: ADD_STANDARD,
  standard
});
export const addBlockchainPlatform = blockchainPlatform => ({
  type: ADD_BLOCKCHAIN,
  blockchainPlatform
});
export const addNetwork = networkType => ({
  type: ADD_NETWORK,
  networkType
});
export const addContractFramework = contractFramework => ({
  type: ADD_CONTRACT_FRAMEWORK,
  contractFramework
});
export const addWebFramework = webFramework => ({
  type: ADD_WEB_FRAMEWORK,
  webFramework
});

export const rest = () => ({
  type: REST

});

// const projectType = {

//   type: "",
//   slandered: "",
//   params: [],
//   blockchainPlatform: "",
//   NetworkType: "",
//   contractFramework: "",
//   webFramework: ""
// };

export default function reducer(
  state = {
    // table


    projectType: "",
    standard: "",
    params: [],
    isMintable:false,
    cap:"",
    blockchainPlatform: "",
    networkType: "",
    contractFramework: "",
    webFramework: ""
  },
  action
) {
  switch (action.type) {
    // Sidebar


    case REST:
      return {
        projectType: "",
          slandered: "",
          params: [],
          blockchainPlatform: "",
          networkType: "",
          contractFramework: "",
          webFramework: ""
      }

      case addProjectType:
        return {
          ...state,
          projectType: action.projectType
        };
      case addStandard:
        return {
          ...state,
          standard: action.standard
        };

      case addParam:
        return {
          ...state,
          params: state.params.push(action.param)
        };
      case addBlockchainPlatform:
        return {
          ...state,
          blockchainPlatform: action.blockchainPlatform
        };
      case addNetwork:
        return {
          ...state,
          networkType: action.networkType
        };
      case addContractFramework:
        return {
          ...state,
          contractFramework: action.contractFramework
        };
      case addCap:
        return {
          ...state,
          cap: action.cap
        };
      case addMintable:
        return {
          ...state,
          cap: action.cap
        };
      case addWebFramework:
        return {
          ...state,
          isMintable: true,
        };
      default:
        break;
  }
  return state;
}