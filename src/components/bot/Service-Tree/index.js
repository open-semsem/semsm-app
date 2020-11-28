import React from "react";
import Tree from "react-d3-tree";
import {
  Card,

  Container,
  Row,
  Col,
} from "reactstrap";
import { withTranslation } from 'react-i18next';

const containerStyles = {
  width: '100%',
  height: '100vh',
}

class CenteredTree extends React.Component {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 6
      }
    });
  }

  render() {
    console.log(this.props, 'this.props');
    const { t } = this.props;

    const myTreeData = [
      { name: t('menu_service'),
      children:[
      {
        name: t('chat_greetings_step_3_v_3'),
        _collapsed: true,
        children: [
          {
            name: t('idea_validation'),
           
          },
          {
            name: t('select_networkType'),
           
          },
          {
            name: t('select_platform'),
           
          },
          {
            name: t('Wallets_Integration'),
           
          },
          {
            name: t('handle_offChain'),
           
          },
          {
            name: t('txtCost'),
           
          },
       
          
        ],
      },{
        name: t('chat_greetings_step_3_v_1'),
      },{
        name: t('chat_greetings_step_3_v_2'),
      },
    ]
    
    }
     
    ];
  const  nodeSize= {
    x: 300,
    y: 321,
    };
    const   nodeSvgShape= {
      shape: 'circle',
      shapeProps: {
        r: 10,
      },
    };

    const  transitionDuration= 500;
    return (
    
    
    
        <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={myTreeData}
          translate={this.state.translate}
          orientation={'vertical'}
          nodeSize={nodeSize}
          // transitionDuration={transitionDuration}
          // nodeSvgShape={nodeSvgShape}
        />
      </div>
       
   
       
    );
  }
}

const MyComponent = withTranslation()(CenteredTree)
export default MyComponent