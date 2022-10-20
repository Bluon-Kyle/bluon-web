import React from "react";
import HubForm from "../../components/common/HubspotForm/HubspotForm";
import "./_demo.scss";
//import img from './request-demo-bg-big.jpg';
const Demo = (props) => {
  const title = props.title;
  const desc = props.desc;
  const formId = props.formId;
  return (
    <div className="demo">
      <div className="demo-form">
        <h1>{title}</h1>
        <p>{desc}</p>

        <HubForm className="demo-form-inner" formId={formId} />
      </div>
      <div className="demo-img">
        <img src={require("./request-demo-bg-big.jpg")} alt="demo img" />
      </div>
    </div>
  );
};

export default Demo;
