
import React, { Component } from "react";
import { connect } from 'react-redux';
import ChatBot from "react-simple-chatbot";
import {
  Button,
} from "reactstrap";
import { useTranslation ,withTranslation} from 'react-i18next';

 import { GetRepoFromState } from '../../../helper/util'
 import { asyncLocalStorage } from '../../../helper/local-storage'
import { rest, addNew, addMintable, addParam, addContractFramework, addBlockchainPlatform, addNetwork, addProjectType, addWebFramework, addStandard, addCap, addRepo } from '../../../reducers/botReducers'
//

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

    const { t } = this.props;
    const createDapp = [{
      id: "200",
      message: t('chat_createDapp_step_200'),
      trigger: "201",
    },
    {
      id: "201",
      options: [{
        value: 1,
        label: t('chat_createDapp_step_201_v_1'),
        trigger: () => {
          this.state.addProjectType("token")
          return "202"
        }
      },
      {
        value: 2,
        label: t('chat_createDapp_step_201_v_2'),
        trigger: () => {
          this.state.addProjectType("VotingApp")
          return "404"
        }
      },
      {
        value: 3,
        label: t('chat_createDapp_step_201_v_3'),
        trigger: () => {
          this.state.addProjectType("supplyChainApp")
          return "404"
        }
      },
      ],
    }, {
      id: "202",
      message: t('chat_createDapp_step_202'),
      trigger: "203",
    },
    {
      id: "203",
      options: [{
        value: 1,
        label: t('chat_createDapp_step_203_v_1'),
        trigger: "230",
      },
      {
        value: 2,
        label:t('chat_createDapp_step_203_v_2'),
        trigger: "204",
      },
      {
        value: 3,
        label: t('chat_createDapp_step_203_v_3'),
        trigger: "204",
      },

      ],
    }, {
      id: "204",
      message: t('chat_createDapp_step_204'),
      trigger: "205",
    },
    {
      id: "205",
      options: [{
        value: 1,
        label: t('chat_step_Yes'),
        trigger: "240",
      },
      {
        value: 2,
        label: t('chat_step_No'),
        trigger: "206",
      },
      ],
    }, {
      id: "230",
      message: t('chat_createDapp_step_230'),
      trigger: "231",
    },
    {
      id: "231",
      options: [{
        value: 1,
        label: t('chat_createDapp_step_231_v_1'),
        trigger: () => {
          this.state.addStandard("ERC20")
          return "210"
        }
      },
      {
        value: 2,
        label:  t('chat_createDapp_step_231_v_2'),
        trigger: () => {
          this.state.addStandard("ERC721")
          return "240"
        }
      },
      {
        value: 3,
        label:  t('chat_createDapp_step_231_v_3'),
        trigger: () => {
          this.state.addStandard("ERC1155")
          return "404"
        }
      },
      ],
    }

      , {
      id: "401",
      message:  t('chat_createDapp_step_401'),
      trigger: "403",
    }
      , {
      id: "404",
      message: t('chat_createDapp_step_404'),
      trigger: "403",
    }

      ,
    {
      id: "403",
      message: t('chat_createDapp_step_403'),
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
      message: t('chat_network_step_450'),
      trigger: "451",
    },
    {
      id: "451",
      options: [{
        value: 1,
        label: t('chat_network_step_451_v_1'),
        trigger: () => {
          this.state.addBlockchainPlatform("ethereum")
          return "452"
        }
      },
      {
        value: 2,
        label: t('chat_network_step_451_v_2'),
        trigger: () => {
          this.state.addBlockchainPlatform("celo")
          return "404"
        }
      },
      {
        value: 3,
        label: t('chat_network_step_451_v_3'),
        trigger: () => {
          this.state.addBlockchainPlatform("fabric")
          return "404"
        }
      },
      {
        value: 4,
        label: t('chat_network_step_451_v_4'),
        trigger: () => {
          this.state.addBlockchainPlatform("corda")
          return "404"
        }
      },
      {
        value: 5,
        label: t('chat_network_step_451_v_5'),
        trigger: "4",
      },
      ],
    }, {
      id: "452",
      message: t('chat_network_step_452'),
      trigger: "453",
    },
    {
      id: "453",
      options: [{
        value: 1,
        label: t('chat_network_step_453_v_1'),
        trigger: () => {
          this.state.addNetwork("mainnet")
          return "455"
        }
      },
      {
        value: 2,
        label: t('chat_network_step_453_v_2'),
        trigger: () => {
          this.state.addNetwork("rinkeby")
          return "455"
        }
      },
      {
        value: 3,
        label: t('chat_network_step_453_v_3'),
        trigger: () => {
          this.state.addNetwork("ropsten")
          return "455"
        }
      },
      {
        value: 4,
        label: t('chat_network_step_453_v_4'),
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
        message: t('chat_ContractFramework_step_455'),
        trigger: "456",
      },
      {
        id: "456",
        options: [{
          value: 1,
          label: t('chat_ContractFramework_step_456_v_1'),
          trigger: () => {
            this.state.addContractFramework("truffle")
            return "460"
          }
        },
        {
          value: 2,
          label: t('chat_ContractFramework_step_456_v_2'),
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
        message: t('chat_webFramework_step_460'),
        trigger: "461",
      },
      {
        id: "461",
        options: [{
          value: 1,
          label: t('chat_webFramework_step_461_v_1'),
          trigger: () => {
            this.state.addWebFramework("react")
          return "cook"
          }
        },
        {
          value: 2,
          label: t('chat_webFramework_step_461_v_2'),
          trigger: () => {
            this.state.addWebFramework("angular")
            return "404"
          }
        },
        {
          value: 3,
          label: t('chat_webFramework_step_461_v_3'),
          trigger: () => {
            this.state.addWebFramework("reactNative")
            return "404"
          }
        },
        {
          value: 4,
          label: t('chat_webFramework_step_461_v_4'),
          trigger: () => {
            this.state.addWebFramework("js")
            return "404"
          }
        },

        ],
      }
      ];
      const networkConsultation = [    
        // network type 
        {
          id: "network_type",
          message: t('chat_decisionMaker_service_reply_networkType'),
          trigger: "109",
        },
        {
          id: "109",
          message: t('chat_decisionMaker_step_109'),
          trigger: "110",
        },
        {
          id: "110",
          options: [{
            value: 1,
            label: t('chat_step_Yes'),
            trigger: "1001",
          },
          {
            value: 2,
            label: t('chat_step_No'),
            trigger: "111",
          },
          ],
        }, {
          id: "111",
          message: t('chat_decisionMaker_step_111'),
          trigger: "112",
        },
        {
          id: "112",
          options: [{
            value: 1,
            label: t('chat_step_Yes'),
            trigger: "113",
          },
          {
            value: 2,
            label: t('chat_step_No'),
            trigger: "119",
          },
          ],
        }
    
    
          , {
          id: "113",
          message:t('chat_decisionMaker_step_113'),
          trigger: "114",
        },
        {
          id: "114",
          options: [{
            value: 1,
            label: t('chat_decisionMaker_step_114_v_1'),
            trigger: "115",
          },
          {
            value: 2,
            label: t('chat_decisionMaker_step_114_v_2'),
            trigger: "117",
          },
          ],
        }
    
          , {
          id: "115",
          message: t('chat_decisionMaker_step_115'),
          trigger: "6",
        }
    
          , {
          id: "117",
          message: t('chat_decisionMaker_step_117'),
          trigger: "116",
        }
    
    
          , {
            id: "116",
            message: t('chat_decisionMaker_step_116'),
            trigger: "116_a",
        },
        {
          id: "116_a",
          options: [{
            value: 1,
            label: t('chat_step_Yes'),
            trigger: "116_a_1",
          },
          {
            value: 2,
            label: t('chat_step_No'),
            trigger: "116_a_2",
          },
          ],
        }
    
          , {
          id: "116_a_1",
          message: t('chat_decisionMaker_step_116_answer1'),
          trigger: "119_a",
        }
          , {
          id: "116_a_2",
          message: t('chat_decisionMaker_step_116_answer2'),
          trigger: "119_a",
        },
        {
          id: "120",
          options: [{
            value: 1,
            label: t('chat_decisionMaker_step_120_v_1'),
            trigger: "113",
          },
          {
            value: 2,
            label: t('chat_decisionMaker_step_120_v_2'),
            trigger: "121",
          },
          ],
        }
    
          , {
          id: "119",
          message: t('chat_decisionMaker_step_119'),
          trigger: "120",
        },
   {
          id: "119_a",
          message: t('chat_decisionMaker_step_119'),
          trigger: "120_a",
        },
        {
          id: "120_a",
          options: [{
            value: 1,
            label: t('chat_decisionMaker_step_120_v_2'),
            trigger: "121_a",
          },
          {
            value: 2,
            label: t('chat_decisionMaker_step_120_v_1'),
            trigger: "121_b",
          },
          ],
        }
    
          , {
          id: "121",
          message:t('chat_decisionMaker_step_121'),
          trigger: "platform",
        }];
      const consultation = [{
        id: "1001",
        message: t('chat_decisionMaker_step_1001'),
        trigger: "6",
      },
      
      
      ];
    const ideaValidationConsultation = [
      // idea validation
      {
        id: "idea_validation",
        message: t('chat_decisionMaker_service_reply_idea'),
        trigger: "98",
      },
      {
        id: "98",
        message: t('chat_decisionMaker_step_98'),
        trigger: "99",
      },
      {
        id: "99",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "100",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "1001",
        },
        ],
      }, {
        id: "100",
        message: t('chat_decisionMaker_step_100'),
        trigger: "101",
      },
      {
        id: "101",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "102",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "1001",
        },
        ],
      },
      {
        id: "102",
        message: t('chat_decisionMaker_step_102'),
        trigger: "104",
      },
      {
        id: "104",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "105",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "107",
        },
        ],
      },
      {
        id: "105",
        message: t('chat_decisionMaker_step_1051'),
        trigger: "106",
      },
      {
        id: "106",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "1001",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "107",
        },
        ],
      },
      {
        id: "107",
        message: t('chat_decisionMaker_step_107'),
        trigger: "108",
      },
    
      {
        id: "108",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "1001",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "idea_reply",
        },
        ],
      },  {
        id: "idea_reply",
        message: t('chat_decisionMaker_service_reply'),
        trigger: "network_type",
      }, ]; 
    const platformConsultation = [  
      // platform
      {
      id: "121_a",
      message:t('chat_decisionMaker_step_121_a'),
      trigger: "6",
    }
      , {
      id: "121_b",
      message:t('chat_decisionMaker_step_121_b'),
      trigger: "6",
    },
    {
      id: "platform",
      message:t('chat_decisionMaker_service_reply_platform'),
      trigger: "122",
    },
    {
      id: "122",
      message:t('chat_decisionMaker_step_122'),
      trigger: "123",
    },
   
    {
      id: "123",
      options: [{
        value: 1,
        label: t('chat_decisionMaker_step_123_v_1'),
        trigger: "124",
      },
      {
        value: 2,
        label: t('chat_decisionMaker_step_123_v_2'),
        trigger: "125",
      },
      ],
    }
    ,{
      id: "124",
      message:t('chat_decisionMaker_step_124'),
      trigger: "off_chain",
    },{
      id: "125",
      message:t('chat_decisionMaker_step_125'),
      trigger: "off_chain",
    }, 
    {
      id: "155",
      message:t('chat_decisionMaker_step_155'),
      trigger: "6",
    },
   





    ];
    const walletConsultation = [// wallet support

      {
        id: "wallet",
        message:t('chat_decisionMaker_service_reply_wallet'),
        trigger: "134",
      },
      {
        id: "134",
        message:t('chat_decisionMaker_step_134'),
        trigger: "135",
      },
      {
        id: "135",
        options: [{
          value: 1,
          label: t('chat_decisionMaker_step_135_v_1'),
          trigger: "136",
        },
        {
          value: 2,
          label: t('chat_decisionMaker_step_135_v_2'),
          trigger: "141",
        },
        ],
      },
      {
        id: "136",
        message:t('chat_decisionMaker_step_136'),
        trigger: "137",
      },
      
      {
        id: "137",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "138",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "141",
        },
        ],
      },
      {
        id: "138",
        message:t('chat_decisionMaker_step_138'),
        trigger: "139",
      }
      ,
      {
        id: "139",
        message:t('chat_decisionMaker_step_139'),
        trigger: "140",
      },
      
      {
        id: "140",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "142",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "142",
        },
        ],
      },
      {
        id: "141",
        message:t('chat_decisionMaker_step_141'),
        trigger: "142",
      },
      {
        id: "142",
        message:t('chat_decisionMaker_step_142'),
        trigger: "143",
      },
      
      {
        id: "143",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "144",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "145",
        },
        ],
      }
      ,
      {
        id: "144",
        message:t('chat_decisionMaker_step_144'),
        trigger: "146",
      },{
        id: "145",
        message:t('chat_decisionMaker_step_145'),
        trigger: "146",
      },
      
      {
        id: "146",
        message:t('chat_decisionMaker_step_146'),
        trigger: "147",
      },
      
      {
        id: "147",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "148",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "txt_Cost",
        },
        ],
      },];
    const offChainConsultation = [
       // off chain data and fetching external apis
      {
        id: "off_chain",
        message:t('chat_decisionMaker_service_reply_offChain'),
        trigger: "126",
      },
      {
        id: "126",
        message:t('chat_decisionMaker_step_126'),
        trigger: "127",
      },
     
      {
        id: "127",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "128",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "129",
        },
        ],
      }
  ,
      {
        id: "128",
        message:t('chat_decisionMaker_step_128'),
        trigger: "130",
      },
      {
        id: "129",
        message:t('chat_decisionMaker_step_129'),
        trigger: "130",
      },
  
      {
        id: "130",
        message:t('chat_decisionMaker_step_130'),
        trigger: "131",
      },
      {
        id: "131",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: "132",
        },
        {
          value: 2,
          label: t('chat_step_No'),
          trigger: "133",
        },
        ],
      }
  ,
  
  {
    id: "132",
    message:t('chat_decisionMaker_step_132'),
    trigger: "wallet",
  },
  {
    id: "133",
    message:t('chat_decisionMaker_step_133'),
    trigger: "wallet",
  },];
    const txtCostConsultation = [
      {
        id: "148",
        message:t('chat_decisionMaker_step_148'),
        trigger: "txt_Cost",
      },
      // txt cost 
      
      {
        id: "txt_Cost",
        message:t('chat_decisionMaker_service_reply_txtCost'),
        trigger: "150",
      },
      {
        id: "150",
        message:t('chat_decisionMaker_step_150'),
        trigger: "151",
      },
      
      {
        id: "151",
        options: [{
          value: 1,
          label: t('chat_decisionMaker_step_151_v_1'),
          trigger: "152",
        },
        {
          value: 2,
          label: t('chat_decisionMaker_step_151_v_2'),
          trigger: "153",
        },
        {
          value: 3,
          label: t('chat_decisionMaker_step_151_v_3'),
          trigger: "154",
        },
        ],
      
      }
      , {
        id: "152",
        message:t('chat_decisionMaker_step_152'),
        trigger: "155",
      },
      {
        id: "153",
        message:t('chat_decisionMaker_step_153'),
        trigger: "155",
      },{
        id: "154",
        message:t('chat_decisionMaker_step_154'),
        trigger: "155",
      },];
    const greetings = [{
      id: "1",
      message: t('chat_greetings_step_1'),
      trigger: "2",
    },
    {
      id: "2",
      message: t('chat_greetings_step_2'),
      trigger: (data)=>{
        console.log(data,'data');
        return "3"
      }
    },
    {
      id: "3",

      options: [{
        value: 1,
        label: t('chat_greetings_step_3_v_1'),
        trigger: "200",
      },
      {
        value: 2,
        disabled:true,

        label:  t('chat_greetings_step_3_v_2'),
        trigger: "404",
      },
      {
        value: 3,
        label:  t('chat_greetings_step_3_v_3'),
        trigger: "idea_validation",
      },
      {
        value: 4,
        label:  t('chat_greetings_step_3_v_4'),
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
      message: t('chat_greetings_step_5'),
      trigger: "6",
    },
    {
      id: "6",
      message: t('chat_greetings_step_6'),
      trigger: "7",
    },
    {
      id: "cook",
      component: <CustomComponent t={t} />,
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
        label: t('chat_greetings_step_7_v_1'),
        trigger: () => {
          this.state.rest()
          return "1"
        }
      },
      {
        value: 2,
        label: t('chat_greetings_step_7_v_2'),
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
      message: t('chat_tokenERC20_step_206'),
      trigger: "207",
    },
    {
      id: "207",
      options: [{
        value: 1,
        label: t('chat_step_Yes'),
        trigger: "208",
      },
      {
        value: 2,
        label: t('chat_step_No'),
        trigger: "401",
      },
      ],
    }, {
      id: "208",
      message: t('chat_tokenERC20_step_208'),
      trigger: "209",
    },
    {
      id: "209",
      options: [{
        value: 1,
        label: t('chat_token_stan_yes'),
        trigger: () => {
          this.state.addStandard("ERC20")
          return "210"
        }
      },
      {
        value: 2,
        label: t('chat_token_stan_no'),
        trigger: "401",
      },
      ],
    }, {
      id: "210",
      message:t('chat_token_name'),
      trigger: "211",
    },
    {
      id: "211",
      validator: (value) => {
        if (!isNaN(value)) {
          return t('chat_step_text_validator');
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
      message: t('chat_token_symbol'),
      trigger: "213",
    },
    {
      id: "213",
      validator: (value) => {
        if (!isNaN(value)) {
          return t('chat_step_text_validator');
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
      message: t('chat_token_decimal'),
      trigger: "215",
    },
    {
      id: "215",
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return t('chat_step_number_validator');
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
      message: t('chat_token_cap'),
      trigger: "217",
    },
    {
      id: "217",
      options: [{
        value: 1,
        label: t('chat_step_Yes'),
        trigger: "218",
      },
      {
        value: 2,
        label: t('chat_step_No'),
        trigger: "219",
      },
      ],
    }, {
      id: "218",
      message:t('chat_token_max_cap'),
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
      message: t('chat_token_issuance'),
      trigger: "222",
    },
    {
      id: "222",
      options: [{
        value: 1,
        label: t('chat_token_mint'),
        trigger: () => {
          this.state.addMintable()
          return "450"
        }
      },
      {
        value: 2,
        label:t('chat_token_gen_transfer'),
        trigger: "404"
      },
      ],
    },
    ]
    const tokenERC721 = [
      {
        id: "240",
        message:t('chat_tokenERC721_step_240'),
        trigger: "242",
      },
      {
        id: "242",
        options: [{
          value: 1,
          label: t('chat_step_Yes'),
          trigger: () => {
            this.state.addStandard("ERC721")
            return "243"
          }
        },
        {
          value: 2,
          label: t('chat_step_no'),
          trigger: "401",
        },
        ],
      }, {
        id: "243",
        message:t('chat_token_name'),
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
        message: t('chat_token_symbol'),
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


    return [].concat(greetings, createDapp, consultation,ideaValidationConsultation, networkConsultation, platformConsultation, offChainConsultation,txtCostConsultation, walletConsultation, network, ContractFramework, tokenERC20, webFramework, tokenERC721)


  }
  render() {
    // const { completed, buffer, showProgress } = this.state;

    const steps = this.getSteps();
   // console.log(steps, 'stepssss');

    return (
      <ChatBot
        // headerTitle="Semsm Chatbot"
        steps={steps}
        botAvatar={require("../../../assets/pic/logo.svg")}
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
const semsm = connect(mapStateToProps, mapDispatchToProps)(Bot);
const SemsmBot = withTranslation()(semsm)
export default SemsmBot ;

const CustomComponent = ({t}) => (
 
  <div><Button
  className="btn btn-danger"
  href="/semsm-output"
  // onClick={(e) => e.preventDefault()}
>
  {t('chat_take_app')}                  </Button></div>
);
 