(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const p=document.querySelector(".gallery"),u=async()=>new Promise(async o=>{try{let t=function(){const n=new Masonry(".gallery",{itemSelector:".imgContainer",isFitWidth:!0,gutter:15})};var c=t;const a=await(await fetch("https://api.unsplash.com/photos/random?client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&count=15")).json(),e=[];for(const n of a){const s=document.createElement("div"),i=document.createElement("img");i.classList.add("photo"),i.src=n.urls.small,i.alt=n.alt_description,s.classList.add("imgContainer"),s.appendChild(i),p.appendChild(s),e.push(i)}let r=0;e.forEach(n=>{n.addEventListener("load",()=>{r++,r===e.length&&(t(),o())})})}catch(l){console.log(l),o()}}),d=document.querySelector("#app"),m=document.createElement("header");m.innerHTML+=`
    <div class="header-links">
        <img class="logo" src="/LogoPinterest.svg" alt="Logo Pinterest">
        <p id='inicio'>Inicio</p>
        <p>Explorar</p>
        <p>Crear</p>
    </div>
    <input type="search" name="search" id="buscar" placeholder="Buscar">
    <div class="header-icons">
        <img src="/alert-icon.svg" alt="Alerts">
        <img src="/messages-icon.svg" alt="Messages">
        <img class="profile" src="https://alexandracriollo.com/wp-content/uploads/2020/12/10-cosas-que-revela-tu-foto-de-perfil-2-1.jpg" alt="Profile">
        <img src="/arrow-icon.svg" alt="Arrow">
    </div>
`;const h=()=>{const o=document.getElementById("inicio");console.log(o),o.addEventListener("click",()=>{p.innerHTML="",u()})},f=async o=>{const c=document.querySelector("#buscar");let l,a="";c.addEventListener("keyup",async e=>{try{if(e.key==="Enter"){if(a=e.target.value,a===""){await u(o);return}let t=[];for(let r=1;r<=3;r++){const s=await(await fetch(`https://api.unsplash.com/search/photos?query=${a}&client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&per_page=10&page=${r}`)).json();t=t.concat(s.results)}if(!o){console.error("La sección no está definida.");return}if(o.innerHTML="",t.length===0){const r=document.createElement("h2");r.textContent="No se encontraron imágenes. Prueba con otra palabra.",o.appendChild(r)}else await Promise.all(t.map(async r=>{const n=document.createElement("div");n.classList.add("imgCon");const s=new Image;s.classList.add("photo"),s.src=r.urls.small,await new Promise(i=>s.onload=i),n.appendChild(s),o.appendChild(n)})),l=new Masonry(".gallery",{itemSelector:".imgCon",ifFitWidth:!0,gutter:0})}}catch(t){console.error(t)}})},g=document.createElement("footer");g.innerHTML=`
    <ul>
        <li>
            <a href="#">Términos del servicio</a>
        </li>
        <li>
            <a href="#">App para iPhone</a>
        </li>
        <li>
            <a href="#">App para Android</a>
        </li>
        <li>
           <a href="#">Política de privacidad</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
     </li>
    </ul>
`;const y=async()=>{await u(),d.appendChild(m),h(),d.appendChild(p),d.appendChild(g),document.body.appendChild(d),f(p)};y();
