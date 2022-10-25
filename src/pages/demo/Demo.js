import React from "react";
import HubspotForm from "../../components/common/HubspotForm/HubspotForm";
import "./_demo.scss";
//import img from './request-demo-bg-big.jpg';
const Demo = (props) => {
  const title = props.title;
  const desc = props.desc;
  const formId = props.formId;
  const classname = props.classN; 
  const portalId = '6885872';
  return (
    <div className="demo">
      <div className="demo-form">
        <div className="demo-form-text">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>

       <HubspotForm portalId={portalId} formId={'85050616-88e4-4c49-82e3-62df96cf221a'} navigateTo='/ThankYou' />
      </div>
      <div className="demo-img">
        <img src={require("./request-demo-bg-big.jpg")} alt="demo img" />
      </div>
    </div>
  );
};

export default Demo;
