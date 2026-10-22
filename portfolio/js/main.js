(function(){
var CATS=[["all","All Projects"],["shopify","Shopify & E-commerce"],["wordpress","WordPress Development"],["fullstack","Full-Stack Applications"],["other","Other Web Development"]];
var $=function(i){return document.getElementById(i)},cur="all";
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function tags(a){return a.length?'<div class="tags">'+a.map(function(t){return"<span>"+esc(t)+"</span>"}).join("")+"</div>":""}
function label(c){return CATS.filter(function(x){return x[0]==c})[0][1]}
function hue(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%360;return h}
function render(){
 $("grid").innerHTML=PROJECTS.filter(function(p){return cur=="all"||p.cat==cur}).map(function(p){
  return'<button class="card" type="button" data-id="'+p.id+'"><span class="thumb" aria-hidden="true" style="--h:'+hue(p.name)+'">'+esc(p.name.replace(/[^A-Za-z0-9 ]/g,"").split(" ").map(function(w){return w[0]}).join("").slice(0,3))+'</span><span class="cb"><span class="cat">'+label(p.cat)+"</span><h3>"+esc(p.name)+"</h3><p>"+esc(p.desc)+"</p>"+tags(p.tech.slice(0,4))+'<span class="more">Details</span></span></button>'}).join("");
 [].forEach.call($("filters").children,function(b){b.setAttribute("aria-pressed",b.dataset.c==cur)})}
$("filters").innerHTML=CATS.map(function(c){return'<button type="button" data-c="'+c[0]+'">'+c[1]+"</button>"}).join("");
$("filters").onclick=function(e){var b=e.target.closest("button");if(b){cur=b.dataset.c;render()}};
$("grid").onclick=function(e){var b=e.target.closest(".card");if(!b)return;var p=PROJECTS.filter(function(x){return x.id==b.dataset.id})[0];
 $("dbody").innerHTML='<p class="cat">'+label(p.cat)+'</p><h3 id="dtitle">'+esc(p.name)+"</h3><p class=\"mute\">"+esc(p.desc)+"</p><h4>Work</h4><ul>"+p.work.map(function(w){return"<li>"+esc(w)+"</li>"}).join("")+"</ul>"+tags(p.tech)+(p.url?'<a class="btn" href="'+p.url+'" target="_blank" rel="noopener">Visit website</a> ':"")+(p.repo?'<a class="btn ghost" href="'+p.repo+'" target="_blank" rel="noopener">Source code</a>':"");
 $("dlg").showModal()};
$("dx").onclick=function(){$("dlg").close()};$("dlg").addEventListener("click",function(e){if(e.target==this)this.close()});
$("skillGrid").innerHTML=Object.keys(SKILLS).map(function(k){return"<div><h3>"+k+"</h3>"+tags(SKILLS[k])+"</div>"}).join("");
$("menu").onclick=function(){var o=$("nav").classList.toggle("open");this.setAttribute("aria-expanded",o)};
$("nav").onclick=function(e){if(e.target.tagName=="A"){$("nav").classList.remove("open");$("menu").setAttribute("aria-expanded","false")}};
$("yr").textContent=new Date().getFullYear();
var rv=document.querySelectorAll(".rv");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.08});[].forEach.call(rv,function(n){io.observe(n)})}else[].forEach.call(rv,function(n){n.classList.add("in")});
render();
})();
