import React from 'react';
import './styles/aboutMe.scss';

function AboutMe() {
  
  let flag1 = true, flag2 = true, flag3 = true;

  const scrollfunction = () =>{
    let sizeDisplay = window.innerHeight;
    let parrafo1 = document.getElementById("text1");
    let parrafo2 = document.getElementById("text2");
    let car_ed1 = document.getElementById("card-ed-1");
    let car_ed2 = document.getElementById("card-ed-2");
    let car_ed3 = document.getElementById("card-ed-3"); 
    let frontend = document.getElementById("Frontend");
    let backend = document.getElementById("Backend");
    let otros = document.getElementById("Otros");
    let card_ex1 = document.getElementById("card-ex-1");
    let card_ex2 = document.getElementById("card-ex-2");
    let card_ex3 = document.getElementById("card-ex-3"); 

    if(parrafo1.getBoundingClientRect().top < (sizeDisplay/2)){
      parrafo1.style.animation = "1.7s appear-about-text 1";
      parrafo1.style.animationFillMode = "forwards";
      parrafo2.style.animation = "1.7s appear-about-text 1";
      parrafo2.style.animationFillMode = "forwards";
    }

    if(car_ed1.getBoundingClientRect().top < (sizeDisplay/1.5)){
      car_ed1.style.animation = "1.8s appear-card-ed 1";
      car_ed1.style.animationFillMode = "forwards";
      car_ed2.style.animation = "1.8s appear-card-ed 1";
      car_ed2.style.animationDelay = "0.3s";
      car_ed2.style.animationFillMode = "forwards";
      car_ed3.style.animation = "1.8s appear-card-ed 1";
      car_ed3.style.animationDelay = "0.6s";
      car_ed3.style.animationFillMode = "forwards";
    }
    
    if(frontend.getBoundingClientRect().top < (sizeDisplay/1.5)){
      if(flag1 === true) { 
        flag1 = false;
        frontend.style.setProperty('--animation', "appear-card-sk");
      }
    }

    if(backend.getBoundingClientRect().top < (sizeDisplay/1.5)){
      if(flag2 === true) { 
        flag2 = false;
        backend.style.setProperty('--animation', "appear-card-sk");
      }
    }

    if(otros.getBoundingClientRect().top < (sizeDisplay/1.5)){
      if(flag3 === true) { 
        flag3 = false;
        otros.style.setProperty('--animation', "appear-card-sk");
      }
    }

    if(card_ex1.getBoundingClientRect().top < (sizeDisplay/1.5)){
      card_ex1.style.animation = "1.8s appear-card-ex 1";
      card_ex1.style.animationFillMode = "forwards";
    }

    if(card_ex2.getBoundingClientRect().top < (sizeDisplay/1.5)){
      card_ex2.style.animation = "1.8s appear-card-ex 1";
      card_ex2.style.animationFillMode = "forwards";
    }

    if(card_ex3.getBoundingClientRect().top < (sizeDisplay/1.5)){
      card_ex3.style.animation = "1.8s appear-card-ex 1";
      card_ex3.style.animationFillMode = "forwards";
    }

  }

  window.addEventListener("scroll", scrollfunction, false);

  return(
    <div id="about_me">
      <p className="section-title">Acerca de mi.</p>
      <div className="about-img">
        <img src="https://raw.githubusercontent.com/jonfer1022/portfolio/main/src/images/matrix1.png"/>
      </div>
      <div className="about-text">
        <p id="text1">
          Desde que era muy joven, he estado muy interesado en la tecnolog??a, la rob??tica y la computaci??n, tanto as?? que posteriormente tome la decisi??n de realizar como
          profesi??n la carrera de Ingener??a Electr??nica. Fue luego en el transcurso de la profesi??n que al recibir mis primeras clases en programaci??n y electr??nica digital
          surgi?? un interes mayor sobre el mundo de la programaci??n. La fascinaci??n que genera la ejecuci??n y el correcto funcionamiento de unas cuantas l??neas de c??digo me
          gui?? a enfocarme en la programaci??n y conseguir empleo con este enfoque.
        </p>
        <p id="text2">
          Actualmente tanto la l??gica como la creatividad me han llevado ser un desarrollador fullstack, que adem??s participo en la comunidad de desarrolladores y permanezco 
          en un constante aprendizaje de las ??ltimas tecnolog??as que son de mi interes. Por otro lado, el trabajar en equipos y conocer profesionales de los cu??les aprender y al 
          mismo tiempo compartir conocimientos me motiva m??s a instruirme m??s en el mundo de la tecnolog??a. Por ??ltimo espero continuar aprendiendo y aportando de mis conocimientos
          a la comunidad de programadores. 
        </p>
      </div>
    </div>
  )
}

export default AboutMe;