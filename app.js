
const CODE = "HSB2026";
let state = {
  authed: sessionStorage.getItem("hsb_auth") === "1",
  tab: "ejercicios",
  group: null,
  exercise: null,
  query: ""
};

const app = document.getElementById("app");

function countByGroup(group){
  return EXERCISES.filter(e => e.group === group).length;
}
function groups(){
  return [...new Set(EXERCISES.map(e => e.group))];
}
function catsFor(group){
  return ["Peso libre","Poleas","Máquinas"].map(cat => ({
    cat,
    items: EXERCISES.filter(e => e.group === group && e.category === cat)
  }));
}
function render(){
  if(!state.authed) return renderLogin();
  if(state.tab === "salir") return renderExit();
  app.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <div class="logo"><div class="logo-mark">HSB</div><div>Guía Oficial<br><small style="color:#aaa">Entrenamiento</small></div></div>
        <div class="tabs">
          <button class="tab ${state.tab==='ejercicios'?'active':''}" onclick="goTab('ejercicios')">Ejercicios</button>
          <button class="tab ${state.tab==='teoria'?'active':''}" onclick="goTab('teoria')">Teoría HSB</button>
          <button class="tab" onclick="logout()">Salir</button>
        </div>
      </div>
    </div>
    <div class="shell">${state.tab === "teoria" ? theory() : ejercicios()}</div>
  `;
}
function renderLogin(){
  app.innerHTML = `
    <div class="login">
      <div class="login-card">
        <div class="brand-kicker">FUERTES SIN BARRIGA</div>
        <h1>HSB | Guía Oficial de Entrenamiento</h1>
        <p>Acceso privado para clientes. Ejercicios, técnica sencilla y teoría HSB para entrenar con cabeza.</p>
        <input id="code" placeholder="Introduce el código" onkeydown="if(event.key==='Enter') checkCode()" />
        <button class="primary" onclick="checkCode()">ENTRAR</button>
        <p id="err" class="error"></p>
      </div>
    </div>
  `;
}
function checkCode(){
  const val = document.getElementById("code").value.trim();
  if(val === CODE){
    sessionStorage.setItem("hsb_auth","1");
    state.authed = true;
    render();
  } else {
    document.getElementById("err").textContent = "Código incorrecto.";
  }
}
function logout(){
  sessionStorage.removeItem("hsb_auth");
  state = {authed:false, tab:"ejercicios", group:null, exercise:null, query:""};
  render();
}
function goTab(tab){
  state.tab = tab; state.group = null; state.exercise = null; render();
}
function ejercicios(){
  if(state.exercise) return exerciseDetail(state.exercise);
  if(state.group) return groupView(state.group);
  const q = state.query.toLowerCase();
  const filtered = q ? EXERCISES.filter(e => 
    e.name.toLowerCase().includes(q) || e.group.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
  ) : [];
  return `
    <section class="hero">
      <div class="brand-kicker">BIBLIOTECA OFICIAL HSB</div>
      <h2>Ejercicios</h2>
      <p>Elige grupo muscular, entra en peso libre, poleas o máquinas y revisa la técnica antes de entrenar.</p>
      <div class="stats">
        <div class="stat"><strong>${EXERCISES.length}</strong> ejercicios cargados</div>
        <div class="stat"><strong>10</strong> grupos musculares</div>
        <div class="stat"><strong>3</strong> categorías por grupo</div>
      </div>
    </section>
    <input class="search" placeholder="Buscar ejercicio..." value="${state.query}" oninput="state.query=this.value; render()" />
    ${q ? searchResults(filtered) : groupGrid()}
  `;
}
function searchResults(items){
  return `<div class="panel"><h3>Resultados</h3>${items.slice(0,80).map(e => `
    <button class="exercise-row" onclick='openExercise(${JSON.stringify(e.name)})'>
      <strong>${e.name}</strong><br><small style="color:#aaa">${e.group} · ${e.category}</small>
    </button>`).join("") || "<p>No hay resultados.</p>"}</div>`;
}
function groupGrid(){
  return `<div class="grid">${groups().map(g => `
    <div class="group-card" onclick='openGroup(${JSON.stringify(g)})'>
      <strong>${g}</strong>
      <span>${countByGroup(g)} ejercicios</span>
    </div>`).join("")}</div>`;
}
function openGroup(g){ state.group = g; state.exercise = null; render(); }
function openExercise(name){ state.exercise = EXERCISES.find(e => e.name === name); render(); }
function groupView(g){
  return `
    <div class="breadcrumb"><button onclick="state.group=null;render()">Ejercicios</button> / ${g}</div>
    <section class="hero">
      <h2>${g}</h2>
      <p>Selecciona una categoría. Cada ejercicio está explicado de forma sencilla, directa y práctica.</p>
      ${anatomyLabels(EXERCISES.find(e=>e.group===g))}
    </section>
    <div class="cols">
      ${catsFor(g).map(c => `
        <div class="col">
          <h3>${iconCat(c.cat)} ${c.cat}</h3>
          <p>${c.items.length} ejercicios</p>
          ${c.items.map(e => `<button class="exercise-row" onclick='openExercise(${JSON.stringify(e.name)})'>${e.name}</button>`).join("")}
        </div>
      `).join("")}
    </div>
  `;
}
function iconCat(c){ return c==="Peso libre"?"🏋️":c==="Poleas"?"🔗":"⚙️"; }
function anatomyLabels(e){
  if(!e) return "";
  return `<div>${[e.primary,...e.secondary].map((m,i)=>`<span class="label"><span class="dot ${i?'orange':''}"></span>${m}</span>`).join("")}</div>`;
}
function exerciseDetail(e){
  return `
    <div class="breadcrumb"><button onclick="state.exercise=null;render()">${e.group}</button> / ${e.category} / ${e.name}</div>
    <div class="detail">
      <aside class="panel">
        <h2>${e.name}</h2>
        <p>${e.group} · ${e.category}</p>
        ${anatomySvg(e)}
        <div class="section">
          <h4>Músculos trabajados</h4>
          ${anatomyLabels(e)}
        </div>
        <div class="section">
          <h4>Material</h4>
          <p>${e.equipment}</p>
        </div>
        <div class="section">
          <h4>Calzado recomendado</h4>
          <ul>${e.shoes.map(s=>`<li>${s}</li>`).join("")}</ul>
        </div>
      </aside>
      <section class="panel">
        <h3>Técnica explicada fácil</h3>
        ${block("Preparación", e.prep)}
        ${block("Fase concéntrica", e.concentric)}
        ${block("Fase excéntrica", e.eccentric)}
        ${block("Errores frecuentes", e.errors, true)}
        ${block("Alternativas", e.alternatives)}
        <div class="section">
          <h4>Consejo HSB</h4>
          <p class="quote">${e.tip}</p>
        </div>
      </section>
    </div>
  `;
}
function block(title, arr, bad=false){
  return `<div class="section"><h4>${title}</h4><ul>${arr.map(x=>`<li>${bad?'❌ ':''}${x}</li>`).join("")}</ul></div>`;
}

function anatomySvg(e){
  const key = e.bodyKey;
  const front = e.view === "front";
  const red = "#d71920", orange="#ff9f1c", skin="#2b2b2b", stroke="#999";
  // Simplified human anatomical silhouette. Main muscle changes by key.
  const parts = {
    chest: `<ellipse cx="88" cy="98" rx="24" ry="18" fill="${red}" opacity=".9"/><ellipse cx="132" cy="98" rx="24" ry="18" fill="${red}" opacity=".9"/>`,
    shoulders: `<circle cx="58" cy="83" r="18" fill="${red}"/><circle cx="162" cy="83" r="18" fill="${red}"/>`,
    biceps: `<ellipse cx="43" cy="125" rx="11" ry="28" fill="${red}"/><ellipse cx="177" cy="125" rx="11" ry="28" fill="${red}"/>`,
    triceps: `<ellipse cx="43" cy="125" rx="11" ry="28" fill="${red}"/><ellipse cx="177" cy="125" rx="11" ry="28" fill="${red}"/>`,
    quads: `<ellipse cx="88" cy="218" rx="18" ry="42" fill="${red}"/><ellipse cx="132" cy="218" rx="18" ry="42" fill="${red}"/>`,
    abs: `<rect x="92" y="116" width="36" height="60" rx="12" fill="${red}"/>`,
    lats: `<path d="M70 90 C55 115 55 155 82 180 L98 155 L92 100 Z" fill="${red}"/><path d="M150 90 C165 115 165 155 138 180 L122 155 L128 100 Z" fill="${red}"/>`,
    hamstrings: `<ellipse cx="88" cy="220" rx="17" ry="45" fill="${red}"/><ellipse cx="132" cy="220" rx="17" ry="45" fill="${red}"/>`,
    glutes: `<ellipse cx="91" cy="176" rx="22" ry="24" fill="${red}"/><ellipse cx="129" cy="176" rx="22" ry="24" fill="${red}"/>`,
    calves: `<ellipse cx="86" cy="293" rx="14" ry="34" fill="${red}"/><ellipse cx="134" cy="293" rx="14" ry="34" fill="${red}"/>`
  };
  const secondary = e.secondary.length ? `<path d="M72 112 C88 130 132 130 148 112" stroke="${orange}" stroke-width="8" fill="none" opacity=".85"/>` : "";
  return `
  <svg class="anatomy" viewBox="0 0 220 360" aria-label="Figura anatómica">
    <rect x="0" y="0" width="220" height="360" rx="18" fill="#070707"/>
    <text x="110" y="22" text-anchor="middle" fill="#aaa" font-size="11">${front?'Vista frontal':'Vista posterior'}</text>
    <circle cx="110" cy="48" r="24" fill="${skin}" stroke="${stroke}" stroke-width="1.5"/>
    <rect x="82" y="72" width="56" height="106" rx="26" fill="${skin}" stroke="${stroke}" stroke-width="1.5"/>
    <path d="M82 86 L50 104 L38 166" stroke="${skin}" stroke-width="24" stroke-linecap="round" fill="none"/>
    <path d="M138 86 L170 104 L182 166" stroke="${skin}" stroke-width="24" stroke-linecap="round" fill="none"/>
    <path d="M86 174 L78 320" stroke="${skin}" stroke-width="26" stroke-linecap="round" fill="none"/>
    <path d="M134 174 L142 320" stroke="${skin}" stroke-width="26" stroke-linecap="round" fill="none"/>
    ${parts[key] || parts.chest}
    ${secondary}
    <text x="110" y="345" text-anchor="middle" fill="#777" font-size="10">Principal en rojo · secundarios en naranja</text>
  </svg>`;
}
function theory(){
  return `
    <section class="hero">
      <div class="brand-kicker">TEORÍA HSB</div>
      <h2>Entrenar fuerte no es entrenar a lo loco</h2>
      <p>Esta parte explica cómo usar el RIR, cómo progresar y qué hacer cuando una serie se empieza a hacer bola.</p>
    </section>
    <div class="theory-grid">
      ${theoryCard("¿Qué es el RIR?", `
        <p>Terminas una serie y te pregunto: <strong>¿cuántas repeticiones más podrías haber hecho con buena técnica?</strong></p>
        <p>La respuesta es tu RIR.</p>
        <ul>
          <li><strong>RIR 5:</strong> te quedan unas 5 repeticiones. Muy fácil.</li>
          <li><strong>RIR 4:</strong> te quedan unas 4 repeticiones.</li>
          <li><strong>RIR 3:</strong> te quedan unas 3. Moderado.</li>
          <li><strong>RIR 2:</strong> te quedan unas 2. Muy buen punto de trabajo.</li>
          <li><strong>RIR 1:</strong> te queda 1. Duro, pero controlado.</li>
          <li><strong>RIR 0:</strong> no te queda ninguna.</li>
        </ul>
      `)}
      ${theoryCard("Metáfora del RIR 0", `
        <p class="quote">Te doy 1.000€ si haces otra repetición. Lo intentas. No sale. Eso es RIR 0.</p>
        <p><strong>Fallo absoluto:</strong> te apuntan con una pistola, intentas sacar otra repetición y tampoco sale.</p>
        <p>No necesitamos vivir ahí para progresar.</p>
      `)}
      ${theoryCard("Cómo trabajamos en HSB", `
        <ul>
          <li><strong>Peso libre:</strong> normalmente RIR 2, muchas veces RIR 1, raramente RIR 0.</li>
          <li><strong>Poleas:</strong> RIR 2, RIR 1 y RIR 0 cuando está pautado.</li>
          <li><strong>Máquinas:</strong> RIR 2, RIR 1 y RIR 0 cuando está pautado.</li>
        </ul>
        <p>El peso libre castiga más la técnica cuando te pasas. En máquina y polea es más seguro apretar.</p>
      `)}
      ${theoryCard("¿Tengo que hacer todas las series igual?", `
        <p>No. El objetivo es llegar al RIR pautado, no mantener el ego.</p>
        <p class="quote">Serie 1: 100 kg x 10 RIR 1<br>Serie 2: 100 kg x 9 RIR 1<br>Serie 3: 95 kg x 10 RIR 1</p>
        <p>Esto está perfecto. Has ajustado para mantener el estímulo sin destrozar la técnica.</p>
      `)}
      ${theoryCard("¿Qué hago si voy muy fastidiado?", `
        <ul>
          <li>Baja algo el peso.</li>
          <li>Baja repeticiones.</li>
          <li>Mantén el recorrido.</li>
          <li>No hagas trampas para acabar.</li>
        </ul>
        <p>Si te quedan dos series más y ya estás en RIR 1, no conviertas el entrenamiento en una pelea absurda.</p>
      `)}
      ${theoryCard("Sobrecarga progresiva", `
        <p>Sobrecarga progresiva no es subir peso todas las semanas como un animal.</p>
        <ul>
          <li>Más peso.</li>
          <li>Más repeticiones.</li>
          <li>Mejor técnica.</li>
          <li>Más control.</li>
          <li>Más recorrido.</li>
          <li>Mismo peso con mejor sensación.</li>
        </ul>
      `)}
      ${theoryCard("¿Y si me estanco?", `
        <p>Primero no entres en pánico. Un estancamiento no significa que todo esté mal.</p>
        <ul>
          <li>Revisa si estás durmiendo peor.</li>
          <li>Revisa si estás comiendo peor.</li>
          <li>Revisa si estás haciendo demasiadas series al fallo.</li>
          <li>Revisa si tu técnica se ha deteriorado.</li>
          <li>Repite cargas una semana si hace falta.</li>
        </ul>
        <p>A veces progresar es saber no forzar cuando el cuerpo ya va justo.</p>
      `)}
      ${theoryCard("Filosofía HSB", `
        <p class="quote">No gana el que entrena más. Gana el que entrena bien durante más tiempo.</p>
        <p>Entrenar fuerte sí. Entrenar sin cabeza, no.</p>
      `)}
    </div>
  `;
}
function theoryCard(title, body){
  return `<article class="theory-card"><h3>${title}</h3>${body}</article>`;
}

render();
