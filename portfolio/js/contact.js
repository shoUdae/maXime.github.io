/* Contact form: sends via FormSubmit (https://formsubmit.co), no backend needed.
   Falls back to a prefilled mailto link if sending fails. */
(function(){
var f=document.getElementById("cf");if(!f)return;
var s=document.getElementById("cs"),b=f.querySelector("button"),E=f.elements,TO="shivammishra070502@gmail.com";
f.addEventListener("submit",function(e){
 e.preventDefault();
 if(!f.checkValidity()){f.reportValidity();return}
 if(E._honey.value)return;
 var d={name:E.name.value.trim(),email:E.email.value.trim(),message:E.message.value.trim(),_subject:"Portfolio enquiry from "+E.name.value.trim(),_template:"table",_captcha:"false"};
 b.disabled=true;s.textContent="Sending...";
 fetch("https://formsubmit.co/ajax/"+TO,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)})
 .then(function(r){return r.json()})
 .then(function(j){if(j.success===true||j.success==="true"){f.reset();s.textContent="Thank you, your message has been sent. I'll reply by email."}else throw new Error("fail")})
 .catch(function(){var m="mailto:"+TO+"?subject="+encodeURIComponent("Portfolio enquiry from "+d.name)+"&body="+encodeURIComponent(d.message+"\n\nFrom: "+d.name+" ("+d.email+")");s.innerHTML='The form could not send right now. <a href="'+m+'">Email me directly instead</a>.'})
 .then(function(){b.disabled=false});
});
})();
