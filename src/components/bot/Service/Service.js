import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useTranslation } from 'react-i18next';

export default function Service() {
  const { t } = useTranslation();

  // const [spacing, setSpacing] = React.useState(6);

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };
const service=[
  {
  title:t('landing_feature_consultation'),
  message:"",
  src:"consult.gif",
  isOutlined: false
},
  {
  title:t('landing_feature_automation'),
  message:"",
  src:"workflow.gif",
  isOutlined: false
},
  {
  title:t('landing_feature_communication'),
  message:"",
  src:"chat.gif",
  isOutlined: true
},
  {
  title:t('landing_feature_use'),
  message:"",
  src:"rocket2.gif",

  isOutlined: true
}
,
  {
  title:t('landing_feature_deployment'),
  message:"",
  src:"configrable.gif",

  isOutlined: false,
}
// ,
//   {
//   title:"Accelerate time to value",
//   message:"",
//   src:"rocket2.gif",

//   isOutlined: false,
// }

,
  {
  title:t('landing_feature_coding'),
  message:"",
  src:"noCoding.gif",

  isOutlined: false,
}
]
  return (
    // <div>
    //      <Grid item xs={6} >

    // </Grid>
    // <Grid item xs={6}  calssName="menu_uj">
    // <Header/>
    // </Grid>
    // </div>
    <div className="section text-center">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="title">{t('landing_feature_title')}</h2>
          <h5 className="description">
    {t('landing_feature_subtitle')} </h5>
        </Col>
      </Row>
     
      <Row>
      {service.map((value) => (
            <Col md="4" key={value.src}>
              <Card className="card-profile offer-card">
              <div className="card-image">
                       <img
                      src={require(`../../../assets/pic/${value.src}`)} alt={value.title}
                      />
                    
                  </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">{value.title}</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    {value.message}
                  </p>
 
                </CardBody>
              
              </Card>
            </Col>

          ))}
   
     
      </Row>
    </Container>
  </div>

    
  );
}

