import React from "react";
import HubspotForm from "../../components/common/HubspotForm/HubspotForm";
import "./_demo.scss";
//import img from './request-demo-bg-big.jpg';
const Demo = (props) => {
  const title = props.title;
  const desc = props.desc;
  const formId = props.formId;
  // const classname = props.classN; 
  const portalId = '6885872';
  return (
    <div className="demo">
      <div className="demo-form">
        <div className="demo-form-text">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>

       <HubspotForm portalId={portalId} formId={formId} navigateTo='/ThankYou' />
      </div>
      <div className="demo-img">
        <img src={require("./request-demo-bg-big.jpg")} alt="demo img" />
      </div>
    </div>
  );
};

export default Demo;
