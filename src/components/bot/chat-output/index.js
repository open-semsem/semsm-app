
import React, { Component } from "react";
import {
 Button,
 Container,
 Row,
 Col,
} from "reactstrap";
// core components
import Git from '../../../helper/git'
import { asyncLocalStorage } from '../../../helper/local-storage'

const imgUrl = require('../../../assets/pic/logo.svg');

class SemsmOutput extends Component {

 constructor(props) {
   super();

   this.state = {
     ...props,
     repo:{},
     params:[],
     isCooking: true,
     isReady: false,
     isDone: false,
     // projectType: "",
     // standard: "",
     // params: [],
     // blockchainPlatform: "",
     // networkType: "",
     // contractFramework: "",
     // webFramework: ""
   };
 
 }
componentDidMount(){
 console.log(this.state, '  this.state');
 asyncLocalStorage.getItem("repo").then(item=>{
   console.log(item,'item');
   this.setState({repo:item})
   asyncLocalStorage.getItem("params").then(item=>{
     console.log(item,'item');
     this.setState({params:item})
     console.log(this.state.repo,'this.state.repo.url');
     if(this.state.repo.url){
       this.cookingMeal();
    
     }
   })
 })

}
 async cookingMeal() {
   console.log('cooking',this.state);
   const git = new Git(this.state.repo.branch);
   await git.init();
   await git.cloneRepo(this.state.repo.url, this.state.repo.branch, true);
   this.setState({isCooking: false,
     isReady: true})
 setTimeout(() => {
   this.setState({isReady: false,
     isDone: true})
     
 }, 100);
   // All the files in the previous commit

 }
 async download() {
  // console.log('download',this.state);
  if(this.state.repo.branch){
    const git = new Git(this.state.repo.branch);
    console.log(git,'git start reading file');
    let files = await git.listFiles();
    // console.log(files)
    await git.zipFiles(files,this.state.params);
   }

 }

 render() {
   const { isReady, isDone, isCooking } = this.state;
   return (

     <div
       style={{
         backgroundImage:
           "url(" + require("assets/pic/semsm-home-cave.png") + ")",
       }}
       className="section-image"
     // data-parallax={true}
     // ref={pageHeader}
     >

       <div className="text-center">
         <Container>
           <Row>

             <Col md="1"></Col>
             <Col md="10">

               <Row className="image-popup-bg" style={{
                 backgroundImage:
                   "url(" + require("assets/pic/popup.png") + ")",
               }}>
                 <Col md="12" className="popup-img-container">
                   <img className="img-semsm-output "
                     alt="Operation"
                     src={imgUrl}

                   />
                 </Col>
                 <Col md="12" className="popup-txt-container">

                   <Row>
                     <Col md="12" className="message-output">
                       {isCooking && (
                     <div>
                           <h1 className="white-text text-center">  cooking your meal ……..  </h1>
                         <h5 className="white-text text-center">  Please waite it will take several minutes ...  </h5>

                     </div>
                       )}
                       {isReady && (
                         <h1 className="white-text text-center">   your project is ready! Yay </h1>

                       )}
                       {isDone && (
                         <h5 className="white-text text-center">
                           you can download the source code locally by clicking download button or push it to your github repo by clicking push to github button.

                         </h5>
                       )}
                       <br />


                     </Col>
                                       </Row>
                                       {isDone && (
                       <Row   className="text-center">
                         <Col md="3" > <Button  className="round-btn" onClick={()=>this.download()}> download</Button> </Col>
                         <Col md="3"  > <Button   className="round-btn" onClick={this.download}> push to Github</Button> </Col>
                         <Col md="3"  > <Button   className="round-btn" onClick={this.download}> Deploy</Button> </Col>
                         <Col md="12" className="message-output"> <a>Retry again Semsm</a> </Col>

                       </Row>
                     )}

                   <br />
                   <br />
                   <br />
                   <br />

                 </Col>


                 <Col>

                 </Col>
               </Row>
             </Col>


           </Row>
         </Container>
       </div>


     </div>

   );
 }
}



export default SemsmOutput;