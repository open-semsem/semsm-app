import React from "react";
import Tree from "react-d3-tree";
import { withTranslation } from 'react-i18next';

const containerStyles = {
  width: '100%',
  height: '100vh',
}

class CenteredTree extends React.Component {
  state = {}

  componentDidMount() {
    document.querySelectorAll('nav')[0].classList.toggle("navbar-transparent");

    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 4
      }
    });
  }

  render() {
    console.log(this.props, 'this.props');
    const { t } = this.props;
    const ideaValidation = {
      name: t('idea_validation'),
      _collapsed: true,
      children: [
        {
          name: t('chat_decisionMaker_step_98'),

          children: [
            {
              name: t('chat_step_Yes'),
              _collapsed: true,
              children: [
                {
                  name: t('chat_decisionMaker_step_100'),

                  children: [
                    {
                      name: t('chat_step_Yes'),
                      _collapsed: true,
                      children: [
                        {
                          name: t('chat_decisionMaker_step_102'),

                          children: [
                            {
                              name: t('chat_step_Yes'),
                              _collapsed: true,
                              children: [
                                {
                                  name: t('chat_decisionMaker_step_105'),

                                  children: [
                                    {
                                      name: t('chat_step_Yes'),
                                      _collapsed: true,
                                      children: [
                                        {
                                          name: t('chat_decisionMaker_step_107'),

                                          children: [
                                            {
                                              name: t('chat_step_Yes'),
                                              _collapsed: true,
                                              children: [
                                                {
                                                  name: t('chat_decisionMaker_step_109'),

                                                  children: [
                                                    {
                                                      name: t('chat_step_Yes'),
                                                      _collapsed: true,
                                                      children: [
                                                        {
                                                          name: t('chat_decisionMaker_service_reply'),

                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: t('chat_step_No'),
                                                      _collapsed: true,
                                                      children: [
                                                        {
                                                          name: t('chat_decisionMaker_step_1001'),

                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              name: t('chat_step_No'),
                                              _collapsed: true,
                                              children: [
                                                {
                                                  name: t('chat_decisionMaker_step_1001'),

                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: t('chat_step_No'),
                                      _collapsed: true,
                                      children: [
                                        {
                                          name: t('chat_decisionMaker_step_1001'),

                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: t('chat_step_No'),
                              _collapsed: true,
                              children: [
                                {
                                  name: t('chat_decisionMaker_step_1001'),

                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: t('chat_step_No'),
                      _collapsed: true,
                      children: [
                        {
                          name: t('chat_decisionMaker_step_1001'),

                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: t('chat_step_No'),
              _collapsed: true,
              children: [
                {
                  name: t('chat_decisionMaker_step_1001'),

                },
              ],
            },
          ],
        },

      ],
    }
    const apiManagement = [
      {
        name: t('chat_decisionMaker_step_119_a'),

        children: [
          {
            name: t('chat_decisionMaker_step_120_v_1'),
            _collapsed: true,
            children: [
              {
                name: t('chat_decisionMaker_step_121_b'),

              },

            ],
          },
          {
            name: t('chat_decisionMaker_step_120_v_2'),
            _collapsed: true,
            children: [
              {
                name: t('chat_decisionMaker_step_121_a'),

              },

            ],
          },
        ],
      },
    ]
    const consensusManage = {
      name: t('chat_decisionMaker_step_113'),
      children: [
        {
          name: t('chat_decisionMaker_step_114_v_1'),
          _collapsed: true,
          children: [
            {
              name: t('chat_decisionMaker_step_115'),
              _collapsed: true,
              children: [
                {
                  name: t('chat_decisionMaker_step_119_a'),

                  children: [
                    {
                      name: t('chat_decisionMaker_step_120_v_1'),
                      _collapsed: true,
                      children: [
                        {
                          name: t('chat_decisionMaker_step_121_b'),

                        },

                      ],
                    },
                    {
                      name: t('chat_decisionMaker_step_120_v_2'),
                      _collapsed: true,
                      children: [
                        {
                          name: t('chat_decisionMaker_step_121_a'),

                        },

                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: t('chat_decisionMaker_step_114_v_2'),
          _collapsed: true,
          children: [
            {
              name: t('chat_decisionMaker_step_117'),

              children: [
                {
                  name: t('chat_decisionMaker_step_116'),

                  children: [
                    {
                      name: t('chat_step_Yes'),
                      _collapsed: true,
                      children: [
                        {
                          name: t('chat_decisionMaker_step_116_answer1'),

                          children: [
                            {
                              name: t('chat_decisionMaker_step_119_a'),

                              children: [
                                {
                                  name: t('chat_decisionMaker_step_120_v_1'),
                                  _collapsed: true,
                                  children: [
                                    {
                                      name: t('chat_decisionMaker_step_121_b'),

                                    },

                                  ],
                                },
                                {
                                  name: t('chat_decisionMaker_step_120_v_2'),
                                  _collapsed: true,
                                  children: [
                                    {
                                      name: t('chat_decisionMaker_step_121_a'),

                                    },

                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: t('chat_step_No'),
                      _collapsed: true,
                      children: [
                        {
                          name: t('chat_decisionMaker_step_116_answer2'),

                          children: [
                            {
                              name: t('chat_decisionMaker_step_119_a'),

                              children: [
                                {
                                  name: t('chat_decisionMaker_step_120_v_1'),
                                  _collapsed: true,
                                  children: [
                                    {
                                      name: t('chat_decisionMaker_step_121_b'),

                                    },

                                  ],
                                },
                                {
                                  name: t('chat_decisionMaker_step_120_v_2'),
                                  _collapsed: true,
                                  children: [
                                    {
                                      name: t('chat_decisionMaker_step_121_a'),

                                    },

                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    const selectNetwork = {
      name: t('select_networkType'),
      _collapsed: true,
      children: [
        {
          name: t('chat_decisionMaker_step_111'),
          children: [
            {
              name: t('chat_step_Yes'),
              _collapsed: true,
              children: [
                consensusManage
              ],
            },
            {
              name: t('chat_step_No'),
              _collapsed: true,
              children: [
                {
                  name: t('chat_decisionMaker_step_119'),

                  children: [
                    {
                      name: t('chat_step_No'),
                      _collapsed: true,
                      children: [
                        {
                          name: t('chat_decisionMaker_step_121'),
                        }
                      ],
                    },
                    {
                      name: t('chat_step_Yes'),
                      _collapsed: true,
                      children: [{
                        name: t('chat_decisionMaker_step_115_a'),
                        children: apiManagement
                      }]
                    },
                  ],
                },
              ],
            },

          ],
        },



      ],
    }
    const selectWallet = {
      name: t('Wallets_Integration'),
      _collapsed: true,
      
      children: [
        {
          name: t('chat_decisionMaker_step_135_v_1'),
          _collapsed: true,
          children:[{
            name: t('chat_decisionMaker_step_142'),
            children:[
              {
                name: t('chat_step_Yes'),
                _collapsed: true,
                children: [{
                  name: t('chat_decisionMaker_step_144'),
                  
                }
                ,
                {
                name: t('chat_decisionMaker_step_145'),
                
              }
              ]
              },   {
                name: t('chat_step_No'),
                _collapsed: true,
                children: [{
                  name: t('chat_decisionMaker_step_138'),
                  children: [
                    { name: t('chat_decisionMaker_step_139'),
                    children:[
                      {
                        name: t('chat_step_Yes'),
                        _collapsed: true,
                        children: [
                          {
                          name: t('chat_decisionMaker_step_141'),
                          
                        }
                      ]
                      },{
                        name: t('chat_step_No'),
                        _collapsed: true,
                        children: []
                      },
                    ] 
                  
                  
                  }
                  
                  ]
                }]
              }
            ]
          }]
       
        },
        {
          name: t('chat_decisionMaker_step_135_v_2'),
          _collapsed: true,
          children: [{
            name: t('chat_decisionMaker_step_144'),
            
          }
          ,
          {
          name: t('chat_decisionMaker_step_145'),
          
        }
        ]
        },
        {
          name: t('chat_decisionMaker_step_146'),
          _collapsed: true,
          children: [
            {
            name: t('chat_step_Yes'),
            _collapsed: true,
            children:[{name:t('chat_decisionMaker_step_148')}]}
            
                 ]
        }
      ],
    }


    const selectTxt = {
      name: t('txtCost'),
      _collapsed: true,
      children: [
        {
          name: t('chat_decisionMaker_step_151_v_1'),
          _collapsed: true,
          children: [
            {
              name: t('chat_decisionMaker_step_152'),}
          ],
        },  {
          name: t('chat_decisionMaker_step_151_v_2'),
          _collapsed: true,
          children: [
            {
              name: t('chat_decisionMaker_step_153'),}
          ],
        },  {
          name: t('chat_decisionMaker_step_151_v_3'),
          _collapsed: true,
          children: [
            {
              name: t('chat_decisionMaker_step_154'),}
          ],
        }
      ],
    }
     const selectOffChain = {
      name: t('handle_offChain'),
      _collapsed: true,
      children: [
        {
          name: t('chat_decisionMaker_step_126'),
          _collapsed: true,
          children: [
            {
              name: t('chat_step_Yes'),
              _collapsed: true,
              children: [
                { name: t('chat_decisionMaker_step_128') }
              ]
            },
            {
              name: t('chat_step_No'),
              _collapsed: true,
              children: [
                { name: t('chat_decisionMaker_step_129') }
              ]
            }
          ]
        },
        {
          name: t('chat_decisionMaker_step_130'),
          _collapsed: true,
          children: [
            {
              name: t('chat_step_Yes'),
              _collapsed: true,
              children: [
                { name: t('chat_decisionMaker_step_132') }
              ]
            },
            {
              name: t('chat_step_No'),
              _collapsed: true,
              children: [
                { name: t('chat_decisionMaker_step_133') }
              ]
            }
          ]
        }
      ]
    }
    const selectPlatform = {
      name: t('select_platform'),
      _collapsed: true,
     children:[
      {
        name: t('chat_decisionMaker_step_122_SC'),
        children: [
          {
            name: t('chat_step_Yes'),
            _collapsed: true,
            children: [
              {
                name: t('chat_decisionMaker_step_123_v_1'),
                _collapsed: true,
                children: [
                  { name: t('chat_decisionMaker_step_124') }
                ]
              },
              {
                name: t('chat_decisionMaker_step_123_v_2'),
                _collapsed: true,
                children: [
                  { name: t('chat_decisionMaker_step_125') }
                ]
              }
            ]
          },
          {
            name: t('chat_step_No'),
            _collapsed: true,
            children: [
             {name:t('chat_decisionMaker_step_125_no_sm')}
            ],
          },

        ],
      },
     ]
    }
    const myTreeData = [
      {
        name: t('menu_service'),

        children: [
          {
            name: t('chat_greetings_step_3_v_3'),
            _collapsed: true,
            children: [
              ideaValidation
              , selectNetwork, selectPlatform,
              selectWallet,
              selectOffChain,
              selectTxt,]
          }
          , {
            name: t('chat_greetings_step_3_v_1'),
          }, {
            name: t('chat_greetings_step_3_v_2'),
          },
        ]

      }

    ];



    const nodeSize = {
      x: 500,
      y: 321,
    };
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)
      } >
        <Tree
          data={myTreeData}
          translate={this.state.translate}
          orientation={'vertical'}
          nodeSize={nodeSize}
          transitionDuration={0}
        // transitionDuration={transitionDuration}
        // nodeSvgShape={nodeSvgShape}
        />
      </div >
    );
  }
}

const MyComponent = withTranslation()(CenteredTree)
export default MyComponent