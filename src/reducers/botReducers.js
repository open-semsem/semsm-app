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
//   standard: "",
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
    isMintable: false,
    cap: "",
    blockchainPlatform: "",
    networkType: "",
    contractFramework: "",
    webFramework: ""
  },
  action
) {
  console.log(action, 'action.projectType');

  switch (action.type) {
    // Sidebar

    case REST:
      return {
        projectType: "",
          standered: "",
          params: [],
          blockchainPlatform: "",
          networkType: "",
          contractFramework: "",
          webFramework: ""
      }

      case ADD_PROJECT_TYPE:
        console.log(action.projectType, 'action.projectType');
        console.log(state, 'state state');

        return {
          ...state,
          projectType: action.projectType
        };
      case ADD_STANDARD:
        return {
          ...state,
          standard: action.standard
        };

      case ADD_PARAM:
        return {
          ...state,
          params: state.params.concat(action.param)
        };
      case ADD_BLOCKCHAIN:
        return {
          ...state,
          blockchainPlatform: action.blockchainPlatform
        };
      case ADD_NETWORK:
        return {
          ...state,
          networkType: action.networkType
        };
      case ADD_CONTRACT_FRAMEWORK:
        return {
          ...state,
          contractFramework: action.contractFramework
        };
      case ADD_CAP:
        return {
          ...state,
          cap: action.cap
        };
      case ADD_WEB_FRAMEWORK:
        return {
          ...state,
          webFramework: action.webFramework
        };
      case ADD_MINTABLE:
        return {
          ...state,
          isMintable: true,
        };
      default:
        break;
  }
  return state;
}