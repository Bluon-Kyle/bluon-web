import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
//import $ from 'jquery';
const HubForm = (props) => {
    //portalid = props.portalId;
    const formid = props.formId; 

    // window.hbspt.forms.create({

    //     region: "na1",

    //     portalId: "6885872",

    //     formId: "bff42b73-2371-4b50-b95a-324b1fea5746",
    //     inlineMessage: 'You are being redirected to the Application...',
    //     onFormSubmit: function($form){

    //         var emailWeb = $form.find('input[name="FieldID"]').val();
    //         setTimeout( function() {
    //             window.location.href = "thank-you.php";
    //         }, 500 ); // Redirects to url with query string data from form fields after 1/2 second.

    //     }

    // });
    

    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '6885872',
                    formId: formid,
                    target: '#hubspotForm',
                    inlineMessage: 'You are being redirected to the Application...',
                    onFormSubmit: function(){

                        //var emailWeb = $form.find('input[name="FieldID"]').val();
                        setTimeout( function() {
                            <Link to='/ThankYou' />
                        }, 500 ); // Redirects to url with query string data from form fields after 1/2 second.

                    }
                })
            }
        });
    }, [formid]);


  return (
    
    <div className='hub'>
            <div id='hubspotForm'></div>
        
    </div>
  )
}

export default HubForm