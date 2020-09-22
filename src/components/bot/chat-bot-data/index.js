
import React, { Component } from "react";
import { connect } from 'react-redux';
import ChatBot from "react-simple-chatbot";
import {
  Button,
} from "reactstrap";
 import { GetRepoFromState } from '../../../helper/util'
 import { asyncLocalStorage } from '../../../helper/local-storage'
import { rest, addNew, addMintable, addParam, addContractFramework, addBlockchainPlatform, addNetwork, addProjectType, addWebFramework, addStandard, addCap, addRepo } from '../../../reducers/botReducers'
class Bot extends Component {
  constructor(props) {
    super();

    this.state = {
      ...props,
      ended: false,
      repo: false,
      // projectType: "",
      // standard: "",
      // params: [],
      // blockchainPlatform: "",
      // networkType: "",
      // contractFramework: "",
      // webFramework: ""
    };
    console.log(props, '  this.state');
  }
 async handelFinish() {

    const repo = GetRepoFromState(this.props);
    if (repo === true) {
      return "404";
    } else {
      this.setState({ repo: repo });
      // show the new view
     await asyncLocalStorage.setItem("repo",repo)
     await asyncLocalStorage.setItem("params",this.props.params)
      this.state.addRepo(repo);
      return "8";
    }

  }

  getSteps() {


    const createDapp = [{
      id: "200",
      message: "What type of project you want to build?",
      trigger: "201",
    },
    {
      id: "201",
      options: [{
        value: 1,
        label: "I want to create a token",
        trigger: () => {
          this.state.addProjectType("token")
          return "202"
        }
      },
      {
        value: 2,
        label: "I want to create a Voting app",
        trigger: () => {
          this.state.addProjectType("VotingApp")
          return "404"
        }
      },
      {
        value: 3,
        label: "I want to create a Supply chain project",
        trigger: () => {
          this.state.addProjectType("supplyChainApp")
          return "404"
        }
      },
      ],
    }, {
      id: "202",
      message: `This is my favorite part! I might need some details to give you the best result. There are many token standards; a token standard is a set of rules required to implement tokens. 
  . Do you know the standard you want to use or Would you like me to help with that? 
  `,
      trigger: "203",
    },
    {
      id: "203",
      options: [{
        value: 1,
        label: "Yes, I know ",
        trigger: "230",
      },
      {
        value: 2,
        label: " No, I have no idea ",
        trigger: "204",
      },
      {
        value: 3,
        label: " Not sure, I would  prefer getting help from you",
        trigger: "204",
      },

      ],
    }, {
      id: "204",
      message: `No worries, Is your token is a representation for a unique asset?`,
      trigger: "205",
    },
    {
      id: "205",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "240",
      },
      {
        value: 2,
        label: "No",
        trigger: "206",
      },
      ],
    }, {
      id: "230",
      message: `Great, Which standard so you want?`,
      trigger: "231",
    },
    {
      id: "231",
      options: [{
        value: 1,
        label: "ERC20",
        trigger: () => {
          this.state.addStandard("ERC20")
          return "210"
        }
      },
      {
        value: 2,
        label: "ERC721",
        trigger: () => {
          this.state.addStandard("ERC721")
          return "240"
        }
      },
      {
        value: 3,
        label: "ERC1155",
        trigger: () => {
          this.state.addStandard("ERC1155")
          return "404"
        }
      },
      ],
    }

      , {
      id: "401",
      message: "working on handling that",
      trigger: "403",
    }
      , {
      id: "404",
      message: "Under development ",
      trigger: "403",
    }

      ,
    {
      id: "403",
      message: "Thanks for your interest, please leave your email and I'll get back to you when we support this feature.",
      trigger: "6",
    },
    {
      id: "300",
      user: true,
      end: true,
    }
    ];
    const network = [{
      id: "450",
      message: `Do you want to deploy it in Etherem blockchain or another network? `,
      trigger: "451",
    },
    {
      id: "451",
      options: [{
        value: 1,
        label: " Ethereum",
        trigger: () => {
          this.state.addBlockchainPlatform("ethereum")
          return "452"
        }
      },
      {
        value: 2,
        label: "Celo",
        trigger: () => {
          this.state.addBlockchainPlatform("celo")
          return "404"
        }
      },
      {
        value: 3,
        label: "Hyperledger fabric",
        trigger: () => {
          this.state.addBlockchainPlatform("fabric")
          return "404"
        }
      },
      {
        value: 4,
        label: "Corda",
        trigger: () => {
          this.state.addBlockchainPlatform("corda")
          return "404"
        }
      },
      {
        value: 5,
        label: "Other",
        trigger: "4",
      },
      ],
    }, {
      id: "452",
      message: `which Ethereum of network?
  `,
      trigger: "453",
    },
    {
      id: "453",
      options: [{
        value: 1,
        label: "  Mainnet",
        trigger: () => {
          this.state.addNetwork("mainnet")
          return "455"
        }
      },
      {
        value: 2,
        label: " Rinkeby ",
        trigger: () => {
          this.state.addNetwork("rinkeby")
          return "455"
        }
      },
      {
        value: 3,
        label: "Ropsten",
        trigger: () => {
          this.state.addNetwork("ropsten")
          return "455"
        }
      },
      {
        value: 4,
        label: "local",
        trigger: () => {
          this.state.addNetwork("local")
          return "455"
        }
      },

      ],
    }

    ];
    const ContractFramework =
      [{
        id: "455",
        message: "Please select your preferred web framework",
        trigger: "456",
      },
      {
        id: "456",
        options: [{
          value: 1,
          label: "Truffle",
          trigger: () => {
            this.state.addContractFramework("truffle")
            return "460"
          }
        },
        {
          value: 2,
          label: "Embark",
          trigger: () => {
            this.state.addWebFramework("embark")
            return "404"
          }
        },

        ],
      },
      ];
    const webFramework =
      [{
        id: "460",
        message: "Please select your preferred web framework",
        trigger: "461",
      },
      {
        id: "461",
        options: [{
          value: 1,
          label: "React",
          trigger: () => {
            this.state.addWebFramework("react")
          return "cook"
          }
        },
        {
          value: 2,
          label: "Angular",
          trigger: () => {
            this.state.addWebFramework("angular")
            return "404"
          }
        },
        {
          value: 3,
          label: "React Native",
          trigger: () => {
            this.state.addWebFramework("reactNative")
            return "404"
          }
        },
        {
          value: 4,
          label: "Java script with basic html",
          trigger: () => {
            this.state.addWebFramework("js")
            return "404"
          }
        },

        ],
      }
      ];
    const decisionMaker = [{
      id: "1001",
      message: "You don't need blockchain",
      trigger: "6",
    },
    {
      id: "98",
      message: "Did you need a database?",
      trigger: "99",
    },
    {
      id: "99",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "100",
      },
      {
        value: 2,
        label: "No",
        trigger: "1001",
      },
      ],
    }, {
      id: "100",
      message: "Does it require shared write access ",
      trigger: "101",
    },
    {
      id: "101",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "102",
      },
      {
        value: 2,
        label: "No",
        trigger: "1001",
      },
      ],
    },
    {
      id: "102",
      message: "Are writers known and trusted ? ",
      trigger: "104",
    },
    {
      id: "104",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "105",
      },
      {
        value: 2,
        label: "No",
        trigger: "107",
      },
      ],
    },
    {
      id: "105",
      message: "Are writers interests unified?",
      trigger: "106",
    },
    {
      id: "106",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "1001",
      },
      {
        value: 2,
        label: "No",
        trigger: "107",
      },
      ],
    },
    {
      id: "107",
      message: "Do you need/want to use a trusted third party?",
      trigger: "108",
    },
    {
      id: "108",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "1001",
      },
      {
        value: 2,
        label: "No",
        trigger: "109",
      },
      ],
    }, {
      id: "109",
      message: "Should the record of transactions be mutable?",
      trigger: "110",
    },
    {
      id: "110",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "1001",
      },
      {
        value: 2,
        label: "No",
        trigger: "111",
      },
      ],
    }, {
      id: "111",
      message: "Do you need a control functionality?",
      trigger: "112",
    },
    {
      id: "112",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "113",
      },
      {
        value: 2,
        label: "No",
        trigger: "119",
      },
      ],
    }


      , {
      id: "113",
      message: "Where is the consensus determined?",
      trigger: "114",
    },
    {
      id: "114",
      options: [{
        value: 1,
        label: "Intra firm",
        trigger: "115",
      },
      {
        value: 2,
        label: "Inter firm",
        trigger: "117",
      },
      ],
    }

      , {
      id: "115",
      message: "Use a private blockchain",
      trigger: "6",
    }

      , {
      id: "117",
      message: "Use a hybrid blockchain",
      trigger: "6",
    }


      , {
      id: "119",
      message: "Do you want your transaction to be private or public?",
      trigger: "120",
    },
    {
      id: "120",
      options: [{
        value: 1,
        label: "Private",
        trigger: "113",
      },
      {
        value: 2,
        label: "Public",
        trigger: "121",
      },
      ],
    }

      , {
      id: "121",
      message: "Use a public blockchain",
      trigger: "6",
    }
    ];
    const greetings = [{
      id: "1",
      message: "Hey there, my name is Semsm & I’m here to help you.",
      trigger: "2",
    },
    {
      id: "2",
      message: "How can I help?",
      trigger: (data)=>{
        console.log(data,'data');
        return "3"
      }
    },
    {
      id: "3",

      options: [{
        value: 1,
        label: "I want to build a blockchain project",
        trigger: "200",
      },
      {
        value: 2,
        disabled:true,

        label: "I want to Learn more about blockchain",
        trigger: "404",
      },
      {
        value: 3,
        label: "I want to know what is the best blockchain network that suits my project",
        trigger: "98",
      },
      {
        value: 4,
        label: "No, I have some feedback to leave you",
        trigger: "4",
      },
      ],
    },
    {
      id: "4",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message: "Thanks for the feedback, please leave your email and I'll get back to you on that.",
      trigger: "6",
    },
    {
      id: "6",
      message: "Would you like to restart our discussion or end it ? ",
      trigger: "7",
    },
    {
      id: "cook",
      component: <CustomComponent />,
      trigger: ()=>{
        this.handelFinish();
        return "8"
      },
    },
    // end
    {
      id: "7",

      options: [{
        value: 1,
        label: "Restart",
        trigger: () => {
          this.state.rest()
          return "1"
        }
      },
      {
        value: 2,
        label: "End",
        trigger: "8"

        ,
      },

      ],
    },
    {
      id: "8",
      user: true,
      end: true
    }
    ];


    const tokenERC20 = [{
      id: "206",
      message: ` Do you want it to work as a balance?`,
      trigger: "207",
    },
    {
      id: "207",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "208",
      },
      {
        value: 2,
        label: "No",
        trigger: "401",
      },
      ],
    }, {
      id: "208",
      message: `Well, the standard would be ERC20, you can read more about the standard though this link https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/
  `,
      trigger: "209",
    },
    {
      id: "209",
      options: [{
        value: 1,
        label: "Yes, it's ERC20",
        trigger: () => {
          this.state.addStandard("ERC20")
          return "210"
        }
      },
      {
        value: 2,
        label: "No, it is not",
        trigger: "401",
      },
      ],
    }, {
      id: "210",
      message: `Would you please specify your token name?
  `,
      trigger: "211",
    },
    {
      id: "211",
      validator: (value) => {
        if (!isNaN(value)) {
          return 'value must be a text';
        }

        return true;
      },
      user: true,
      trigger: ({ value }) => {
        console.log(value, 'input');
        this.state.addParam({ name: value })
        return "212"
      }

    }, {
      id: "212",
      message: `Would you please specify your token symbol?
  `,
      trigger: "213",
    },
    {
      id: "213",
      validator: (value) => {
        if (!isNaN(value)) {
          return 'value must be a text';
        }

        return true;
      },
      user: true,
      trigger: ({ value }) => {
        console.log(value, 'input');
        this.state.addParam({ symbol: value })
        return "214"
      }

    }, {
      id: "214",
      message: `Would you please specify your token  decimal? The default is 18
  `,
      trigger: "215",
    },
    {
      id: "215",

      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        }

        return true;
      },
      trigger: ({ value }) => {
        console.log(value, 'input');
        this.state.addParam({ decimals: value })
        return "216"
      }

    }, {
      id: "216",
      message: `Would you like to limit the issued token by a max cap?`,
      trigger: "217",
    },
    {
      id: "217",
      options: [{
        value: 1,
        label: "Yes",
        trigger: "218",
      },
      {
        value: 2,
        label: "No",
        trigger: "219",
      },
      ],
    }, {
      id: "218",
      message: `Would you please specify your Max Cap?
  `,
      trigger: "221",
    },
    {
      id: "221",

      user: true,
      trigger: ({ value }) => {
        console.log(value, 'input');
        this.state.addCap(value)
        return "219"
      }

    }, {
      id: "219",
      message: `How is the tokens issuance ?`,
      trigger: "222",
    },
    {
      id: "222",
      options: [{
        value: 1,
        label: "Generate token by calling mint function ",
        trigger: () => {
          this.state.addMintable()
          return "450"
        }
      },
      {
        value: 2,
        label: "Issue all tokens in contract creation and then transfer from contract owner account ",
        trigger: "404"
      },
      ],
    },
    ]
    const tokenERC721 = [
      {
        id: "240",
        message: `Well, the standard would be ER721, you can read more about the standard though this link https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/
  `,
        trigger: "242",
      },
      {
        id: "242",
        options: [{
          value: 1,
          label: "Yes, it's ERC721",
          trigger: () => {
            this.state.addStandard("ERC721")
            return "243"
          }
        },
        {
          value: 2,
          label: "No, it is not",
          trigger: "401",
        },
        ],
      }, {
        id: "243",
        message: `Would you please specify your token name?
  `,
        trigger: "244",
      },
      {
        id: "244",

        user: true,
        trigger: ({ value }) => {
          console.log(value, 'input');
          this.state.addParam({ name: value })
          return "245"
        }

      }, {
        id: "245",
        message: `Would you please specify your token symbol?
  `,
        trigger: "246",
      },
      {
        id: "246",

        user: true,
        trigger: ({ value }) => {
          console.log(value, 'input');
          this.state.addParam({ decimal: value })
          return "216"
        }

      }
    ]


    return [].concat(greetings, createDapp, decisionMaker, network, ContractFramework, tokenERC20, webFramework, tokenERC721)


  }
  render() {
    // const { completed, buffer, showProgress } = this.state;

    const steps = this.getSteps();
   // console.log(steps, 'stepssss');

    return (
      <ChatBot
        // headerTitle="Semsm Chatbot"
        steps={steps}
        botAvatar={require("assets/pic/logo.svg")}
      // floating
      />

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRepo: repo => dispatch(addRepo(repo)),
    addNew: step => dispatch(addNew(step)),
    addParam: param => dispatch(addParam(param)),
    addProjectType: projectType => dispatch(addProjectType(projectType)),
    addStandard: standard => dispatch(addStandard(standard)),
    addBlockchainPlatform: blockchainPlatform => dispatch(addBlockchainPlatform(blockchainPlatform)),
    addNetwork: networkType => dispatch(addNetwork(networkType)),
    addMintable: () => dispatch(addMintable()),
    addCap: cap => dispatch(addCap(cap)),
    addContractFramework: contractFramework => dispatch(addContractFramework(contractFramework)),
    addWebFramework: webFramework => dispatch(addWebFramework(webFramework)),
    rest: () => dispatch(rest()),

  };
}
const mapStateToProps = state => {
  console.log(state, 'state');

  return {
    projectType: state.botReducers.projectType,
    standard: state.botReducers.standard,
    params: state.botReducers.params,
    blockchainPlatform: state.botReducers.blockchainPlatform,
    networkType: state.botReducers.networkType,
    contractFramework: state.botReducers.contractFramework,
    webFramework: state.botReducers.webFramework,
    isMintable: state.botReducers.isMintable,
    cap: state.botReducers.cap
  };
};
const SemsmBot = connect(mapStateToProps, mapDispatchToProps)(Bot);

export default SemsmBot;

const CustomComponent = () => (
  <div><Button
  className="btn btn-danger"
  href="/semsm-output"
  // onClick={(e) => e.preventDefault()}
>
  take your app                  </Button></div>
);