const YT_PLACEHOLDER = "";
const groups = ["Pecho","Espalda","Hombro","Bíceps","Tríceps","Cuádriceps","Isquios","Glúteo","Gemelos","Abdomen"];
const types = ["Peso libre","Poleas","Máquinas"];

const seed = {
  Pecho:{
    "Peso libre":["Press banca con barra","Press inclinado con barra","Press declinado con barra","Press banca con mancuernas","Press inclinado con mancuernas","Press declinado con mancuernas","Floor press con barra","Floor press con mancuernas","Flexiones lastradas","Press banca agarre cerrado"],
    Poleas:["Cruce de poleas alto","Cruce de poleas medio","Cruce de poleas bajo","Press pecho en polea","Press unilateral en polea","Aperturas en polea baja","Aperturas en polea alta","Press inclinado en polea","Press declinado en polea","Pullover en polea para pectoral"],
    Máquinas:["Press pecho máquina","Press inclinado máquina","Press convergente pecho","Press pecho unilateral máquina","Pec deck","Aperturas máquina","Press horizontal guiado","Press Smith plano","Press Smith inclinado","Fondos asistidos enfocados a pecho"]
  },
  Espalda:{
    "Peso libre":["Remo con barra","Remo Pendlay","Remo Yates","Remo mancuerna unilateral","Remo mancuerna apoyado","Seal row","Remo en banco inclinado con mancuernas","Meadows row","Peso muerto rumano para espalda","Dominadas"],
    Poleas:["Jalón al pecho agarre ancho","Jalón neutro","Jalón supino","Jalón unilateral","Remo sentado neutro","Remo sentado abierto","Remo unilateral en polea","Pullover en polea","High row en polea","Face pull"],
    Máquinas:["Remo Hammer","High row Hammer","Pulldown convergente","Remo convergente","Remo iso-lateral","Remo pecho apoyado máquina","Máquina dorsal unilateral","Pullover máquina","Lat pulldown guiado","Remo horizontal guiado"]
  },
  Hombro:{
    "Peso libre":["Press militar con barra","Press militar con mancuernas","Press Arnold","Elevaciones laterales mancuernas","Elevaciones frontales mancuernas","Pájaros con mancuernas","Remo al mentón con barra","Press sentado mancuernas","Push press","Y raise en banco inclinado"],
    Poleas:["Elevación lateral en polea","Elevación lateral unilateral polea","Pájaros en polea","Face pull","Elevación frontal polea","Press hombro polea","Y raise polea","Remo alto polea","Rotación externa polea","Elevación lateral tumbado en polea"],
    Máquinas:["Press hombro máquina","Press hombro convergente","Elevación lateral máquina","Pájaros máquina","Deltoides posterior máquina","Press Smith hombro","Remo alto máquina","Press unilateral máquina","Elevación frontal máquina","Máquina multi-press hombro"]
  },
  Bíceps:{
    "Peso libre":["Curl barra recta","Curl barra Z","Curl mancuernas alterno","Curl martillo","Curl inclinado mancuernas","Curl concentrado","Curl spider barra Z","Curl predicador barra Z","Curl 21","Curl Zottman"],
    Poleas:["Curl polea baja barra recta","Curl polea baja barra Z","Curl cuerda martillo","Curl unilateral polea","Curl Bayesian","Curl polea alta doble","Curl predicador polea","Curl tumbado polea","Curl spider polea","Curl inverso polea"],
    Máquinas:["Curl bíceps máquina","Curl predicador máquina","Curl Scott máquina","Curl unilateral máquina","Curl martillo máquina","Curl guiado bíceps","Máquina bíceps iso-lateral","Curl sentado máquina","Curl concentrado máquina","Curl cable machine guiado"]
  },
  Tríceps:{
    "Peso libre":["Press banca agarre cerrado","Fondos entre bancos","Fondos en paralelas","Extensión francesa barra Z","Extensión francesa mancuernas","Press francés tumbado","Extensión tríceps sobre cabeza mancuerna","Patada tríceps mancuerna","JM press","Tate press"],
    Poleas:["Pushdown cuerda","Pushdown barra recta","Pushdown barra V","Extensión unilateral polea","Extensión sobre cabeza cuerda","Extensión sobre cabeza barra","Kickback en polea","Pushdown agarre inverso","Extensión cruzada polea","Pressdown unilateral supino"],
    Máquinas:["Fondos asistidos tríceps","Máquina extensión tríceps","Press tríceps máquina","Tríceps dip machine","Extensión tríceps unilateral máquina","Press cerrado máquina","Máquina triceps pushdown","Extensión sentado máquina","Máquina multipower press cerrado","Máquina convergente tríceps"]
  },
  Cuádriceps:{
    "Peso libre":["Sentadilla trasera","Sentadilla frontal","Sentadilla goblet","Zancadas caminando","Zancada atrás","Split squat","Sentadilla búlgara","Step up","Sentadilla Zercher","Sentadilla talones elevados"],
    Poleas:["Sentadilla en polea baja","Zancada en polea","Extensión rodilla polea","Split squat polea","Step back polea","Sentadilla goblet polea","Sissy squat asistida polea","Sentadilla frontal polea","Zancada lateral polea","Spanish squat polea"],
    Máquinas:["Prensa 45","Prensa horizontal","Extensión de cuádriceps","Hack squat","Sentadilla pendular","Multipower sentadilla","Multipower zancada","Prensa unilateral","Sissy squat máquina","Belt squat"]
  },
  Isquios:{
    "Peso libre":["Peso muerto rumano","Peso muerto piernas rígidas","Buenos días","Curl nórdico","Hip hinge con mancuernas","Peso muerto rumano unilateral","Sliding leg curl","Curl femoral con mancuerna","Puente femoral pies elevados","Buenos días sentado"],
    Poleas:["Pull through","Curl femoral polea tobillo","Peso muerto rumano polea","Curl femoral unilateral polea","Buenos días polea","Patada femoral polea","Hip hinge polea baja","Curl femoral de pie polea","Curl femoral tumbado polea","Pull through unilateral"],
    Máquinas:["Curl femoral tumbado","Curl femoral sentado","Curl femoral de pie","Peso muerto máquina","Glute ham raise","Buenos días máquina","Femoral unilateral máquina","Máquina posterior cadena","Nordic curl asistido","Hip extension máquina"]
  },
  Glúteo:{
    "Peso libre":["Hip thrust barra","Hip thrust mancuerna","Puente glúteo barra","Sentadilla sumo","Peso muerto sumo","Zancada larga","Búlgara enfoque glúteo","Step up alto","Peso muerto rumano","Frog pumps"],
    Poleas:["Patada glúteo polea","Abducción polea","Pull through","Hip thrust polea","Kickback diagonal polea","Zancada atrás polea","Peso muerto sumo polea","Abducción de pie polea","Extensión cadera polea","Sentadilla sumo polea"],
    Máquinas:["Hip thrust máquina","Glute drive","Abductora","Prensa pies altos","Hack squat pies altos","Patada glúteo máquina","Máquina glúteo unilateral","Extensión cadera máquina","Belt squat enfoque glúteo","Multipower hip thrust"]
  },
  Gemelos:{
    "Peso libre":["Elevación gemelo de pie con mancuernas","Gemelo unilateral mancuerna","Gemelo sentado mancuerna","Farmer walk de puntillas","Gemelo en escalón","Gemelo con barra","Gemelo burro libre","Saltos de comba","Pogo jumps","Gemelo isométrico"],
    Poleas:["Gemelo de pie polea","Gemelo unilateral polea","Gemelo sentado polea","Gemelo en escalón polea","Gemelo con cinturón polea","Gemelo inclinado polea","Gemelo rodilla flexionada polea","Gemelo de puntillas polea baja","Gemelo pausado polea","Gemelo excéntrico polea"],
    Máquinas:["Gemelo de pie máquina","Gemelo sentado máquina","Gemelo en prensa","Gemelo donkey máquina","Gemelo Hack squat","Gemelo multipower","Gemelo horizontal máquina","Gemelo unilateral máquina","Sóleo máquina","Gemelo en prensa unilateral"]
  },
  Abdomen:{
    "Peso libre":["Crunch en suelo","Plancha","Plancha lateral","Dead bug","Elevación piernas tumbado","Ab wheel","Sit up","Russian twist","Hollow hold","Mountain climbers"],
    Poleas:["Crunch en polea","Pallof press","Woodchopper alto-bajo","Woodchopper bajo-alto","Crunch unilateral polea","Rotación antirotación polea","Elevación rodillas con polea","Plancha con polea","Dead bug con polea","Press Pallof arrodillado"],
    Máquinas:["Crunch máquina","Abdominal máquina guiada","Elevación piernas silla romana","Torso rotation machine","Crunch sentado máquina","Ab coaster","Máquina oblicuos","Plancha asistida máquina","Crunch multipower","Banco abdominal regulable"]
  }
};

const defaultTechnique = {
  setup:["Coloca el cuerpo estable antes de empezar.","Ajusta el banco, la polea o la máquina para que el movimiento salga cómodo y controlado.","Apoya bien los pies y no empieces la serie hasta sentirte firme."],
  execution:["Haz la primera repetición más lenta para encontrar la trayectoria.","Controla la bajada.","Aprieta fuerte en la parte de trabajo sin hacer rebotes.","Mantén la técnica igual desde la primera hasta la última repetición."],
  errors:["Mover el cuerpo para sacar repeticiones.","Acortar el recorrido sin motivo.","Ir demasiado rápido.","Cambiar la postura a mitad de serie."],
  shoes:"Zapatilla plana o estable. Evita running con mucha amortiguación si necesitas estabilidad."
};
const details = {
  "Press banca con barra":{setup:["Coloca el banco centrado bajo la barra.","Los ojos deben quedar aproximadamente debajo de la barra.","Apoya los pies firmes en el suelo.","Junta ligeramente los omóplatos y saca pecho."],execution:["Saca la barra con control.","Baja hacia la zona media-baja del pecho.","Toca suave, sin rebotar.","Empuja manteniendo pies, glúteos y espalda estables."],errors:["Rebotar la barra en el pecho.","Levantar el culo del banco.","Mover los pies durante la serie.","Abrir demasiado los codos."],shoes:"Zapatilla plana: Converse, Vans, barefoot o similar."},
  "Jalón al pecho agarre ancho":{setup:["Siéntate con los muslos bien sujetos.","Agarra la barra algo más abierto que los hombros.","Saca pecho y deja los hombros lejos de las orejas."],execution:["Lleva los codos hacia abajo y atrás.","Baja la barra hacia la parte alta del pecho.","Controla la subida sin soltar de golpe.","Mantén el torso estable."],errors:["Tirar con balanceo.","Bajar la barra detrás de la nuca.","Encoger los hombros.","Convertirlo en un ejercicio de bíceps."],shoes:"Calzado cómodo y estable. Aquí no es tan importante como en sentadilla o peso muerto."},
  "Remo con barra":{setup:["Pies a la anchura de las caderas.","Rodillas ligeramente flexionadas.","Inclina el torso y mantén la espalda firme.","Agarra la barra con las manos algo más abiertas que los hombros."],execution:["Lleva los codos hacia atrás.","Acerca la barra al abdomen.","Aprieta la espalda arriba.","Baja controlado sin perder la posición."],errors:["Redondear la espalda.","Dar tirones con la cadera.","Subir demasiado el torso.","Encoger los hombros."],shoes:"Zapatilla plana o barefoot para sentir el suelo y no perder estabilidad."},
  "Sentadilla trasera":{setup:["Coloca la barra sobre la parte alta de la espalda, no sobre el cuello.","Pies algo más abiertos que las caderas.","Puntas ligeramente hacia fuera.","Aprieta abdomen antes de bajar."],execution:["Baja controlado.","Mantén el peso repartido por todo el pie.","No dejes que las rodillas se hundan hacia dentro.","Sube empujando fuerte el suelo."],errors:["Talones que se levantan.","Rodillas que se meten hacia dentro.","Perder tensión abdominal.","Bajar sin control."],shoes:"Plana, barefoot o halterofilia si te ayuda a mejorar profundidad y estabilidad."},
  "Hip thrust barra":{setup:["Apoya la parte alta de la espalda en el banco.","Coloca la barra sobre la cadera con protección.","Pies firmes, aproximadamente debajo de las rodillas al subir.","Mete ligeramente la barbilla."],execution:["Empuja la cadera hacia arriba.","Aprieta glúteo arriba sin arquear la espalda.","Baja controlado.","Mantén los pies quietos."],errors:["Arquear la zona lumbar.","Poner los pies demasiado lejos.","Subir con impulso.","No bloquear bien arriba."],shoes:"Zapatilla plana y estable. Evita running blanda."}
};

function makeExercises(){
  const arr=[];
  for(const g of groups){
    for(const t of types){
      for(const name of seed[g][t]){
        arr.push({name, group:g, type:t, video:YT_PLACEHOLDER, ...defaultTechnique, ...(details[name]||{})});
      }
    }
  }
  return arr;
}
const exercises = makeExercises();
let state={view:'home', group:'Todos', type:'Todos', query:'', selected:null};

function bodySvg(group){
 const front = group!=="Espalda";
 const muscleMap={Pecho:'<ellipse class="muscle" cx="90" cy="125" rx="34" ry="24"/><ellipse class="muscle" cx="140" cy="125" rx="34" ry="24"/>',Espalda:'<path class="muscle" d="M82 118 C70 155 66 190 84 220 C98 188 105 158 105 124Z"/><path class="muscle" d="M148 118 C160 155 164 190 146 220 C132 188 125 158 125 124Z"/>',Hombro:'<circle class="muscle" cx="62" cy="112" r="20"/><circle class="muscle" cx="168" cy="112" r="20"/>',Bíceps:'<ellipse class="muscle" cx="50" cy="155" rx="11" ry="34"/><ellipse class="muscle" cx="180" cy="155" rx="11" ry="34"/>',Tríceps:'<ellipse class="muscle" cx="50" cy="155" rx="11" ry="34"/><ellipse class="muscle" cx="180" cy="155" rx="11" ry="34"/>',Cuádriceps:'<ellipse class="muscle" cx="93" cy="285" rx="17" ry="50"/><ellipse class="muscle" cx="137" cy="285" rx="17" ry="50"/>',Isquios:'<ellipse class="muscle" cx="93" cy="285" rx="17" ry="50"/><ellipse class="muscle" cx="137" cy="285" rx="17" ry="50"/>',Glúteo:'<ellipse class="muscle" cx="92" cy="230" rx="23" ry="22"/><ellipse class="muscle" cx="138" cy="230" rx="23" ry="22"/>',Gemelos:'<ellipse class="muscle" cx="94" cy="365" rx="14" ry="38"/><ellipse class="muscle" cx="136" cy="365" rx="14" ry="38"/>',Abdomen:'<rect class="muscle" x="92" y="145" width="46" height="82" rx="18"/>'};
 return `<svg class="body-svg" viewBox="0 0 230 430" role="img" aria-label="Anatomía ${group}">
  <circle class="body-stroke" cx="115" cy="48" r="31"/>
  ${front?'<path class="body-stroke" d="M106 42 Q115 52 124 42"/><path class="body-stroke" d="M106 61 Q115 67 124 61"/><circle cx="107" cy="49" r="2" fill="#f1f1f1"/><circle cx="123" cy="49" r="2" fill="#f1f1f1"/>':'<path class="body-stroke" d="M96 55 Q115 70 134 55"/>'}
  <path class="body-stroke" d="M83 88 Q115 103 147 88"/>
  <path class="body-stroke" d="M75 104 L55 210"/><path class="body-stroke" d="M155 104 L175 210"/>
  <path class="body-stroke" d="M78 105 Q115 95 152 105 L150 225 Q115 245 80 225 Z"/>
  <path class="body-stroke" d="M92 228 L88 405"/><path class="body-stroke" d="M138 228 L142 405"/>
  <path class="body-stroke" d="M82 405 L105 405"/><path class="body-stroke" d="M128 405 L151 405"/>
  ${muscleMap[group]||''}
 </svg>`;
}
function filtered(){return exercises.filter(e=>(state.group==='Todos'||e.group===state.group)&&(state.type==='Todos'||e.type===state.type)&&(!state.query||`${e.name} ${e.group} ${e.type}`.toLowerCase().includes(state.query.toLowerCase())))}
function render(){
 const app=document.getElementById('app');
 app.innerHTML=`<div class="app"><div class="top"><div class="brand"><div class="logo">APP <span>HSB</span></div><div class="pill">Guía viva de ejercicios</div></div></div>${viewHtml()}</div><nav class="bottom-nav"><div class="bottom-inner"><button class="navbtn ${state.view==='home'?'active':''}" onclick="go('home')">Inicio</button><button class="navbtn ${state.view==='exercises'?'active':''}" onclick="go('exercises')">Ejercicios</button><button class="navbtn ${state.view==='formation'?'active':''}" onclick="go('formation')">Formación</button></div></nav>`;
}
function viewHtml(){if(state.view==='detail')return detailHtml(); if(state.view==='formation')return formationHtml(); if(state.view==='exercises')return exercisesHtml(); return homeHtml();}
function homeHtml(){return `<section class="hero"><h1>Guía de ejercicios HSB</h1><p><strong>Una base cerrada para clientes.</strong> Entran, buscan el ejercicio, revisan técnica, calzado, errores y vídeos formativos. No guardan datos, no modifican nada y siempre ven la última versión publicada.</p><div class="notice">Enfoque: <strong>peso libre, poleas y máquinas</strong>. Nada de registros, progresos ni base de datos externa.</div><div class="grid"><div class="card"><h3>📚 Ejercicios</h3><p>Biblioteca organizada por músculo y tipo de material.</p><button class="btn red" onclick="go('exercises')">Ver biblioteca</button></div><div class="card"><h3>📖 Formación</h3><p>RIR, fallo técnico, fatiga, calzado y vídeos formativos.</p><button class="btn" onclick="go('formation')">Ver formación</button></div><div class="card"><h3>🔒 Solo lectura</h3><p>El cliente no puede editar nada. Contenido cerrado para clientes. Solo tú actualizas la guía.</p></div></div></section>`}
function exercisesHtml(){const list=filtered();return `<section><div class="section-title"><h2>Biblioteca de ejercicios</h2><span class="muted">${list.length} ejercicios disponibles</span></div><input class="search" placeholder="Buscar ejercicio..." value="${state.query}" oninput="state.query=this.value;render()"/><div class="tabs"><button class="tab ${state.group==='Todos'?'active':''}" onclick="setGroup('Todos')">Todos</button>${groups.map(g=>`<button class="tab ${state.group===g?'active':''}" onclick="setGroup('${g}')">${g}</button>`).join('')}</div><div class="tabs"><button class="tab ${state.type==='Todos'?'active':''}" onclick="setType('Todos')">Todos</button>${types.map(t=>`<button class="tab ${state.type===t?'active':''}" onclick="setType('${t}')">${t}</button>`).join('')}</div><div class="exercise-list">${list.map((e,i)=>`<div class="card exercise" onclick="openExercise('${e.name.replaceAll("'","\\'")}')"><h3>${e.name}</h3><div class="meta"><span class="tag red">${e.group}</span><span class="tag">${e.type}</span></div></div>`).join('')}</div></section>`}
function detailHtml(){const e=state.selected;return `<section><button class="btn back" onclick="go('exercises')">← Volver</button><div class="section-title"><h2>${e.name}</h2><span class="muted">${e.group} · ${e.type}</span></div><div class="detail-grid"><div class="anatomy">${bodySvg(e.group)}</div><div class="card"><div class="meta"><span class="tag red">Principal: ${e.group}</span><span class="tag">${e.type}</span></div>${e.video ? `<a class="video-link" href="${e.video}" target="_blank" rel="noopener">▶ Ver ejercicio</a>` : `<div class="video-pending">▶ Vídeo pendiente de añadir</div>`}<div class="content-block"><h4>Calzado recomendado</h4><p>${e.shoes}</p></div><div class="content-block"><h4>Colocación</h4><ul>${e.setup.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="content-block"><h4>Ejecución</h4><ol>${e.execution.map(x=>`<li>${x}</li>`).join('')}</ol></div><div class="content-block"><h4>Errores frecuentes</h4><ul>${e.errors.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="content-block"><h4>Consejo HSB</h4><p>No necesitas hacer el ejercicio perfecto desde el primer día. Necesitas repetirlo bien, progresar y no convertir cada serie en una pelea absurda contra el peso.</p></div></div></div></section>`}
function formationHtml(){return `<section class="formation active"><div class="section-title"><h2>Formación HSB</h2><span class="muted">Vídeos y conceptos clave</span></div><div class="card lesson"><h3>¿Qué es el RIR?</h3><p>RIR significa repeticiones en reserva. Dicho simple: terminas una serie y te preguntas cuántas repeticiones más podrías haber hecho con buena técnica.</p><p>Si podrías haber hecho 2 más, es RIR 2. Si podrías haber hecho 1 más, es RIR 1. Si no podrías haber hecho ninguna más, es RIR 0.</p></div><div class="card lesson"><h3>La metáfora del fallo</h3><p>Imagina que terminas una serie y alguien te dice: “te doy 1.000€ si sacas otra repetición”. Lo intentas, aprietas, empujas… y no sale. Eso sería RIR 0.</p><p>Ahora imagina algo más extremo: te apuntan con una pistola y aun así no puedes sacar otra repetición. Eso es fallo absoluto. Y no, no necesitamos entrenar así para progresar.</p></div><div class="card lesson"><h3>Cómo trabajamos en HSB</h3><p><strong>Peso libre:</strong> normalmente RIR 2 o RIR 1. En ejercicios exigentes, como mucho RIR 1. Ir a RIR 0 con peso libre suele estar fuera de lugar por riesgo, fatiga y pérdida de técnica.</p><p><strong>Máquinas y poleas:</strong> aquí sí se puede pautar RIR 1 o incluso RIR 0 en algunos casos, porque el entorno es más estable y el riesgo suele ser menor.</p></div><div class="card lesson"><h3>Fallo técnico</h3><p>El fallo técnico ocurre cuando todavía podrías mover el peso, pero ya no puedes hacerlo con una técnica aceptable. Por ejemplo: empiezas a balancearte, acortas recorrido, pierdes postura o haces trampas evidentes.</p></div><div class="card lesson"><h3>Cómo saber si estás fatigado</h3><p>Señales habituales: pierdes fuerza varios entrenos seguidos, duermes peor, tienes más apatía, te cuesta calentar, las cargas normales pesan mucho más y recuperas peor.</p></div><div class="card lesson"><h3>Vídeos formativos</h3><p>Este apartado queda preparado para incluir vídeos formativos directos de HSB: RIR, técnica, calzado, progresión, errores frecuentes o explicación de ejercicios.</p><div class="video-pending">▶ Vídeo formativo pendiente</div></div></section>`}
function go(v){state.view=v; if(v!=='detail') state.selected=null; render(); window.scrollTo(0,0)}
function setGroup(g){state.group=g;render()} function setType(t){state.type=t;render()}
function openExercise(name){state.selected=exercises.find(e=>e.name===name);state.view='detail';render();window.scrollTo(0,0)}
render();
