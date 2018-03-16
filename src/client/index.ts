import App from "./app";

document.onreadystatechange = () => {
    
    if (document.readyState === 'interactive' || document.readyState === 'complete') {       document.body.replaceChild(new App({path:'/'}).el, document.getElementById('pre'))         }  }