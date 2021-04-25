import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './styles/contactMe.scss';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactMe() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [token, setToken] = useState("");
  const [send, setSend] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalFailed, setShowModalFailed] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [params, setParams] = useState("");
  const reCaptcha = useRef();

  const service_email = process.env.REACT_APP_SERVICE_EMAIL;
  const email_template = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const email_user_id = process.env.REACT_APP_EMAIL_USER_ID;
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  console.log(service_email, email_template, email_user_id, siteKey);

  const sendEmail = () => {

    axios.post("http://localhost:3001/",{token})
    .then(resp =>{
      // console.log(resp.data);
      if(resp.data.error){
        setMessageError("Error en la validación del ReCaptcha");
        setShowModalFailed(true);
      }else{
        setSend(resp.data.success);
      }
    })
    .catch((error)=>{
      console.log(error);
      setMessageError("Error en la petición del envio");
      setShowModalFailed(true);
    })
    .finally(() =>{
      reCaptcha.current.reset();
      setToken("");
    });

    setName("");
    setEmail("");
    setSubject("");
    setMsg("");

    setParams({
      from_name: name,
      user_email: email,
      subject,
      message: msg 
    });
  }

  useEffect(()=>{
    
    if(send) {
      // console.log(params, email, name, subject, msg);
      emailjs.send(service_email, email_template, params, email_user_id)
      .then((result) => {
        console.log(result.text);
        setShowModalSuccess(true);
      }, (error) => {
        console.log(error.text);
        setMessageError("Ha fallado el envío del correo!");
        setShowModalFailed(true);
      });

    }
    setParams("");
    setSend(false);
  }, [send])

  return(
    <div id="contact_me">
      <Snackbar open={showModalSuccess || showModalFailed} autoHideDuration={8000} onClose={()=> { setShowModalSuccess(false); setShowModalFailed(false); setMessageError("")}}>
        <div>
          {showModalSuccess ? 
            <Alert severity="success" onClose={()=> setShowModalSuccess(false)}>
              <AlertTitle>Correo enviado satisfactoriamente</AlertTitle>
                Tu correo ha sido enviado con exito, pronto será leido y recibiras una respuesta.
            </Alert> : null
          }
          {showModalFailed ? 
            <Alert severity="error" onClose={()=> {setShowModalFailed(false); setMessageError("")}}>
              <AlertTitle>Fallo en la acción del envío</AlertTitle>
                {messageError}
            </Alert> : null
          }
        </div>
      </Snackbar>
      <p className="section-title">Contacto</p>
      <div className="icon-main">
        <div className="email">
          <a className="icon-email" href="mailto:jonathanfab92@gmail.com">
            <div className="icon-float" />
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon-contact"/>
          </a>
          <a className="text" href="mailto:jonathanfab92@gmail.com">
            jonathanfab92@gmail.com
          </a>  
        </div>
        <div className="github">
          <a className="icon-github" href="https://github.com/jonfer1022" target="_blank">
            <div className="icon-float" />
            <FontAwesomeIcon icon={faGithub} size="2x" className="icon-contact"/>
          </a>
          <a className="text" href="https://github.com/jonfer1022" target="_blank">
            github.com/jonfer1022
          </a>
        </div>
        <div className="linkendln">
          <a className="icon-linkedln" href="https://www.linkedin.com/in/jonathan-fernando-amaya-benavides-472a4517b/" target="_blank">
            <div className="icon-float" />
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon-contact"/>
          </a>
          <a className="text" href="https://www.linkedin.com/in/jonathan-fernando-amaya-benavides-472a4517b/" target="_blank">
            linkedin.com/in/jonathan-fernando-amaya-benavides
          </a>
        </div>
      </div>
      <div className="contact-main">
        <div className="contact-div">
          <input value={name} type="text" placeholder="Name" required="required" className="contact-name" onChange={(e) => setName(e.target.value)}/>
          <input value={email} type="text" placeholder="Email" required="required" className="contact-email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <input value={subject} type="text" placeholder="Subject" required="required" className="contact-subj" onChange={(e) => setSubject(e.target.value)}/>
        <textarea value={msg} type="text" placeholder="Message" required="required" className="contact-msg" onChange={(e) => setMsg(e.target.value)}/>
        <button disabled = { name.length && email.length && subject.length && msg.length && token.length ? false : true} 
        className = { name.length && email.length && subject.length && msg.length && token.length? "isAble" : "isDisable"} 
        onClick ={ () => sendEmail()}>ENVIAR CORREO</button>
        <ReCAPTCHA
          className="contact-recaptcha"
          ref = {reCaptcha}
          sitekey={siteKey}
          onChange={token => setToken(token)}
          onExpired={e => setToken("")}
        />
      </div>
    </div>
  )
}

export default ContactMe;