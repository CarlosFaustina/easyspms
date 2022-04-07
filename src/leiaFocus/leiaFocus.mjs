export default function leiaFocus(self, destroy) {

  var divMascara = document.createElement("DIV");
  divMascara.id = "divMascara";
  divMascara.className = "divMascara";

  var divMascara2 = document.createElement("DIV");
  divMascara2.id = "divMascara2";
  divMascara2.className = "divMascara2";

  document.getElementsByTagName("body")[0].appendChild(divFocus);
  document.getElementsByTagName("body")[0].appendChild(divMascara);
  document.getElementsByTagName("body")[0].appendChild(divMascara2);



  document.getElementById("divMascara2").style.transitionDuration = "1s";
  document.getElementById("divMascara").style.transitionDuration = "1s";
  
  document.getElementById("divMascara").style.background = "rgb(95, 95, 95)";
  document.getElementById("divMascara2").style.background = "rgb(95, 95, 95)";

  document.getElementById("divMascara").style.zIndex = "22222";
  document.getElementById("divMascara2").style.zIndex = "22222";

  document.getElementById("divMascara").style.borderBottomLeftRadius =
    10 + "px";
  document.getElementById("divMascara").style.borderBottomRightRadius =
    10 + "px";
  document.getElementById("divMascara2").style.borderTopLeftRadius = 10 + "px";
  document.getElementById("divMascara2").style.borderTopRightRadius = 10 + "px";

  document.getElementById("divMascara").style.width = "100%";
  document.getElementById("divMascara2").style.width = "100%";
  document.getElementById("divMascara").style.width = "100%";

  document.getElementById("divMascara").style.top = "0";
  document.getElementById("divMascara").style.left = "0";
  document.getElementById("divMascara2").style.left = "0";

  document.getElementById("divMascara2").style.display = "flex";
  document.getElementById("divMascara2").style.flexFlow = "wrap";
  document.getElementById("divMascara2").style.position = "fixed";

  document.getElementById("divMascara").style.display = "flex";
  document.getElementById("divMascara").style.flexFlow = "wrap";
  document.getElementById("divMascara").style.position = "fixed";

  document.getElementById("divMascara").style.cursor = "mouse";

  document.getElementById("divMascara").style.height = "42%";
  document.getElementById("divMascara2").style.top = "58%";
  document.getElementById("divMascara2").style.height = "100%";

  // const cursor = document.querySelector(".divMascara");
  document.getElementById("divMascara").style.opacity = "75%";
  document.getElementById("divMascara2").style.opacity = "75%";
  window.addEventListener("mousemove", (e) => {

     document.getElementById("divMascara").style.transition = "50ms";
     document.getElementById("divMascara2").style.transition = "20ms";


    document.getElementById("divMascara").style.height = e.y - 60 + "px";
    document.getElementById("divMascara2").style.top = e.y + 75 + "px";
  });

  ///

  if (destroy) {
   
    
    document.getElementById("divMascara").style.opacity = "15%";
    document.getElementById("divMascara2").style.opacity = "15%";
    document.getElementById("divMascara").style.height = "50%";
    document.getElementById("divMascara2").style.top = "50%";
    
    document.querySelector('._access-menu [data-access-action="leiaFocus"]').classList.remove("active");
    self.initialValues.leiaFocus = false;
    self.sessionState.leiaFocus = false;
    self.onChange(true);

    document.getElementById("divMascara").style.visibility = "hidden";
    document.getElementById("divMascara2").style.visibility = "hidden";
    window.removeEventListener("mousemove",addEventListener); //gere o erro. 
    
    document.getElementById("divMascara").remove(); 
    document.getElementById("divMascara2").remove(); 

    divMascara.parentElement.removeChild(divMascara);
    divMascara2.parentElement.removeChild(divMascara2);
    
    
    window.removeEventListener("mousemove",e); //gere o erro. 
    return;
     
  }

  document.getElementById("divMascara").style.visibility = "visible";
  document.getElementById("divMascara2").style.visibility = "visible";

  document.querySelector('._access-menu [data-access-action="leiaFocus"]').classList.toggle("active");
  self.initialValues.leiaFocus = !self.initialValues.leiaFocus;
  self.sessionState.leiaFocus = self.initialValues.leiaFocus;

  if (!self.initialValues.leiaFocus) {

    
    document.getElementById("divMascara").style.opacity = "15%";
    document.getElementById("divMascara2").style.opacity = "15%";
    document.getElementById("divMascara").style.height = "50%";
    document.getElementById("divMascara2").style.top = "50%";
    
    document.querySelector('._access-menu [data-access-action="leiaFocus"]').classList.remove("active");
    self.initialValues.leiaFocus = false;
    self.sessionState.leiaFocus = false;
    self.onChange(true);

    document.getElementById("divMascara").style.visibility = "hidden";
    document.getElementById("divMascara2").style.visibility = "hidden";
    
    document.getElementById("divMascara").remove(); 
    document.getElementById("divMascara2").remove(); 

    divMascara.parentElement.removeChild(divMascara);
    divMascara2.parentElement.removeChild(divMascara2);


    
    return;
  }
  self.onChange(true);
}
