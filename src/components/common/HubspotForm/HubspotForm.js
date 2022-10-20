import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./_hubspotForm.scss";

const HubspotForm = ({ portalId, formId, className }) => {
  const navigate = useNavigate();
  const targetId = `hubspot-form-${formId}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: `#${targetId}`,
          onFormSubmit: () => {
            navigate("/ThankYou");
          },
        });
      }
    });
  }, []);

  return (
    <div className={`hubspot ${className}`}>
      <div className="hubspot-form" id={targetId}></div>
    </div>
  );
};

export default HubspotForm;
