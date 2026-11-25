/* RUINEX — JavaScript + jQuery
   Projeto acadêmico Front-End: dados fictícios, sem servidor e sem autenticação real. */
$(function () {
  "use strict";

  const STORAGE = {
    favorites: "ruinex_favorites_v1",
    posts: "ruinex_posts_v1",
    likes: "ruinex_likes_v1",
    profile: "ruinex_profile_v1",
    suggestions: "ruinex_suggestions_v1",
    comments: "ruinex_comments_v1",
    accounts: "ruinex_accounts_v2"
  };

  // Base de dados demonstrativa. Nomes, períodos e histórias são fictícios.
  const records = [
    {id:"aurora",code:"RNX-001",name:"Estação Aurora",category:"Ferrovias",region:"Centro",condition:"Comprometida",access:"Visitação externa",type:"Estação ferroviária",period:"Década de 1930 (ilustrativo)",material:"Alvenaria e estrutura metálica",purpose:"Transporte ferroviário",date:"2026-10-18",featured:1,desc:"Uma antiga estação que marcou o ritmo de uma região em expansão.",history:"A Estação Aurora é um registro inteiramente fictício, criado para demonstrar a catalogação de patrimônio ferroviário. Na narrativa do projeto, o edifício foi concebido como ponto de conexão entre pequenas comunidades e centros de comércio. Com a reorganização dos trajetos de transporte, perdeu sua função original e passou a representar uma lembrança da transformação urbana.",notes:"Narrativa histórica ilustrativa. Não corresponde a uma estação real.",image:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"},
    {id:"horizonte",code:"RNX-002",name:"Complexo Industrial Horizonte",category:"Indústrias",region:"Norte",condition:"Comprometida",access:"Não verificado",type:"Complexo fabril",period:"Meados do século XX (ilustrativo)",material:"Concreto, aço e tijolo",purpose:"Produção industrial",date:"2026-10-22",featured:1,desc:"Galpões, estruturas metálicas e vestígios de uma antiga atividade fabril.",history:"O Complexo Industrial Horizonte é fictício. Sua narrativa representa a expansão industrial de uma cidade imaginária, com galpões construídos para abrigar linhas de produção e áreas de armazenamento. Mudanças econômicas e tecnológicas levaram à desativação gradual das instalações.",notes:"Não há endereço, coordenadas ou autorização de visitação associados a este registro.",image:"https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85"},
    {id:"cine",code:"RNX-003",name:"Cine Atlas",category:"Cultura",region:"Centro",condition:"Estável",access:"Visitação externa",type:"Cinema de rua",period:"Década de 1950 (ilustrativo)",material:"Alvenaria e concreto",purpose:"Exibição cinematográfica",date:"2026-10-25",featured:1,desc:"Uma fachada de cinema que evoca a memória dos antigos encontros culturais.",history:"O Cine Atlas é uma construção narrativa fictícia. O projeto representa os cinemas de rua que funcionavam como espaços de convivência, lazer e circulação cultural. A popularização de outras formas de entretenimento alterou o papel desses edifícios nas cidades.",notes:"Ficha demonstrativa sem vínculo com estabelecimento real.",image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85"},
    {id:"mirante",code:"RNX-004",name:"Hotel Mirante",category:"Comercial",region:"Leste",condition:"Não verificado",access:"Não verificado",type:"Edifício hoteleiro",period:"Década de 1940 (ilustrativo)",material:"Concreto e revestimento mineral",purpose:"Hospedagem",date:"2026-09-30",featured:0,desc:"Edifício histórico fictício associado à memória do comércio e da hospitalidade.",history:"Na narrativa demonstrativa, o Hotel Mirante surgiu durante um período de crescimento comercial. Seus espaços teriam recebido viajantes e comerciantes, acompanhando a expansão de serviços no centro urbano imaginário.",notes:"Estado de conservação e acesso não verificados.",image:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85"},
    {id:"vale",code:"RNX-005",name:"Sanatório Vale Nebuloso",category:"Saúde",region:"Oeste",condition:"Ruínas",access:"Não verificado",type:"Edifício hospitalar",period:"Década de 1920 (ilustrativo)",material:"Alvenaria e madeira",purpose:"Atendimento hospitalar",date:"2026-09-21",featured:0,desc:"Um estudo narrativo sobre arquitetura hospitalar e memória da saúde pública.",history:"O Sanatório Vale Nebuloso é fictício e serve para ilustrar como instituições de saúde podem integrar a história social e arquitetônica de uma região. A ficha não pretende reproduzir a história de qualquer instituição real.",notes:"Não há informação verificada sobre propriedade, visitação ou condições estruturais.",image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"},
    {id:"lira",code:"RNX-006",name:"Teatro Lira",category:"Cultura",region:"Sul",condition:"Estável",access:"Acesso autorizado",type:"Teatro",period:"Década de 1910 (ilustrativo)",material:"Alvenaria e madeira",purpose:"Apresentações culturais",date:"2026-10-12",featured:1,desc:"Antigo espaço cultural fictício, dedicado à memória das artes cênicas.",history:"O Teatro Lira foi imaginado como um equipamento cultural de uma cidade fictícia. Sua história demonstra a importância dos teatros como locais de encontro, expressão artística e formação de públicos.",notes:"Acesso autorizado é apenas uma classificação demonstrativa, sem relação com local real.",image:"https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=85"},
    {id:"vila",code:"RNX-007",name:"Vila Operária Pioneira",category:"Residencial",region:"Leste",condition:"Comprometida",access:"Visitação externa",type:"Conjunto residencial",period:"Década de 1930 (ilustrativo)",material:"Tijolo e madeira",purpose:"Moradia de trabalhadores",date:"2026-08-16",featured:0,desc:"Conjunto residencial fictício que representa a formação de bairros operários.",history:"A Vila Operária Pioneira é uma narrativa fictícia sobre moradia e industrialização. O conjunto foi pensado para demonstrar como a organização do trabalho também influenciou a forma das cidades e a criação de comunidades residenciais.",notes:"Registro sem localização real.",image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85"},
    {id:"aguas",code:"RNX-008",name:"Galpão das Águas",category:"Indústrias",region:"Sul",condition:"Não verificado",access:"Não verificado",type:"Estrutura industrial",period:"Década de 1960 (ilustrativo)",material:"Aço e concreto",purpose:"Armazenamento e distribuição",date:"2026-10-28",featured:0,desc:"Estrutura fictícia ligada à infraestrutura e aos serviços urbanos.",history:"O Galpão das Águas foi criado como exemplo de registro de infraestrutura industrial. A narrativa aborda o papel de estruturas de apoio no crescimento das cidades e sua transformação após mudanças nos sistemas de distribuição.",notes:"Dados históricos, acesso e conservação não verificados.",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"}
  ];

  function readStore(key, fallback) {
    try { const value = JSON.parse(localStorage.getItem(key)); return value === null ? fallback : value; }
    catch (error) { return fallback; }
  }
  function saveStore(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (error) { notify("Não foi possível salvar neste navegador."); return false; }
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char];
    });
  }
  function notify(message) {
    const $toast = $("<div>").addClass("toast").text(message);
    $(".toast-region").append($toast);
    setTimeout(function () { $toast.fadeOut(250, function () { $(this).remove(); }); }, 3200);
  }
  function getFavorites() { return readStore(STORAGE.favorites, []); }

  function gameStateSafe(){return readStore("ruinex_game_v2",{xp:0,claimed:[],posts:0,likes:0,comments:0,favorites:0,profileComplete:false,earned:[]});}
  function awardXPSafe(event,amount,message){const g=gameStateSafe();if(g.claimed.includes(event))return;g.claimed.push(event);g.xp+=amount;saveStore("ruinex_game_v2",g);if(message)notify(message+" +"+amount+" XP");}
  function isFavorite(id) { return getFavorites().includes(id); }
  function toggleFavorite(id) {
    let favorites = getFavorites();
    favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : favorites.concat(id);
    saveStore(STORAGE.favorites, favorites);
    if(favorites.includes(id)){const g=gameStateSafe();g.favorites=favorites.length;saveStore("ruinex_game_v2",g);awardXPSafe("favorite:"+id,10,"Novo favorito!");updateMissionProgress();renderGame();}
    notify(favorites.includes(id) ? "Registro adicionado aos favoritos." : "Registro removido dos favoritos.");
    renderFeatured();
    renderCatalog();
    renderDossierFavorite(id);
  }
  function renderCard(record) {
    const favorite = isFavorite(record.id);
    return `<article class="record-card">
      <div class="record-image"><img src="${record.image}" alt="Imagem ilustrativa de ${escapeHTML(record.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/900x600/1a2420/b9f23b?text=RUINEX+ARCHIVE'"><span class="record-number">${record.code}</span></div>
      <div class="record-body"><div class="record-meta"><span>${escapeHTML(record.category)}</span><span>${escapeHTML(record.region)} / DEMO</span></div>
      <h3>${escapeHTML(record.name)}</h3><span class="tag">${escapeHTML(record.condition)}</span><p>${escapeHTML(record.desc)}</p>
      <div class="record-footer"><a href="local.html?id=${encodeURIComponent(record.id)}">Ver arquivo ↗</a><button class="favorite-btn ${favorite?"active":""}" data-favorite="${record.id}" aria-label="Favoritar ${escapeHTML(record.name)}">${favorite?"★":"☆"}</button></div></div></article>`;
  }
  function renderFeatured() {
    const $target = $("#featured-records");
    if (!$target.length) return;
    $target.html(records.filter(r => r.featured).slice(0,4).map(renderCard).join(""));
  }
  function getQueryParam(name) { return new URLSearchParams(window.location.search).get(name) || ""; }

  // Pesquisa e filtros do catálogo.
  function renderCatalog() {
    const $grid = $("#catalog-grid");
    if (!$grid.length) return;
    const query = ($("#filter-search").val() || "").toLowerCase().trim();
    const category = $("#filter-category").val() || "";
    const region = $("#filter-region").val() || "";
    const condition = $("#filter-condition").val() || "";
    const access = $("#filter-access").val() || "";
    let filtered = records.filter(r => {
      const text = [r.name,r.category,r.region,r.desc,r.history,r.type].join(" ").toLowerCase();
      return (!query || text.includes(query)) && (!category || r.category === category) &&
        (!region || r.region === region) && (!condition || r.condition === condition) && (!access || r.access === access);
    });
    const sort = $("#sort-records").val() || "featured";
    if (sort === "az") filtered.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));
    else if (sort === "category") filtered.sort((a,b)=>a.category.localeCompare(b.category,"pt-BR"));
    else if (sort === "recent") filtered.sort((a,b)=>b.date.localeCompare(a.date));
    else filtered.sort((a,b)=>b.featured-a.featured);
    $("#result-count").text(filtered.length + (filtered.length === 1 ? " registro encontrado" : " registros encontrados"));
    $grid.stop(true,true).fadeOut(100,function(){
      $grid.html(filtered.map(renderCard).join(""));
      if(filtered.length){$("#empty-state").prop("hidden",true);$grid.fadeIn(180);}
      else{$grid.hide();$("#empty-state").prop("hidden",false).hide().fadeIn(180);}
    });
  }
  function initCatalog() {
    if (!$("#catalog-grid").length) return;
    const category = getQueryParam("categoria");
    const q = getQueryParam("q");
    if(category) $("#filter-category").val(category);
    if(q) $("#filter-search").val(q);
    $("#filter-search,#filter-category,#filter-region,#filter-condition,#filter-access,#sort-records").on("input change",renderCatalog);
    $("#clear-filters").on("click",function(){
      $("#filter-search").val("");$("#filter-category,#filter-region,#filter-condition,#filter-access").val("");$("#sort-records").val("featured");renderCatalog();
    });
    $("#random-discovery").on("click",function(){
      const selected = records[Math.floor(Math.random()*records.length)];
      window.location.href="local.html?id="+encodeURIComponent(selected.id);
    });
    $(".map-pin").on("click",function(){
      const r=records.find(item=>item.id===$(this).data("record"));
      $(".map-pin").removeClass("selected");$(this).addClass("selected");
      if(r) $("#map-info").html(`<p class="eyebrow">${r.code} / REFERÊNCIA ILUSTRATIVA</p><h3>${escapeHTML(r.name)}</h3><p>${escapeHTML(r.desc)}</p><span class="tag">${escapeHTML(r.category)}</span><p><a class="text-link" href="local.html?id=${r.id}">Abrir dossiê ↗</a></p>`);
    });
    renderCatalog();
  }

  // Ficha dinâmica com abas e galeria ampliada.
  function initDossier() {
    if(!$("#dossier-content").length) return;
    const id=getQueryParam("id"), r=records.find(item=>item.id===id);
    if(!r) return;
    // Cada dossiê possui sua própria seleção visual; as galerias não reciclam
    // as mesmas duas fotografias em todos os registros.
    const galleryByRecord={
      aurora:[r.image,"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"],
      horizonte:[r.image,"https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80"],
      cine:[r.image,"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80"],
      mirante:[r.image,"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=900&q=80"],
      vale:[r.image,"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"],
      lira:[r.image,"https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=900&q=80"],
      vila:[r.image,"https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80"],
      aguas:[r.image,"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"]
    };
    const gallery=galleryByRecord[r.id] || [r.image];
    $("#dossier-content").html(`
      <div class="dossier-hero"><div><p class="eyebrow">${r.code} / ARQUIVO DEMONSTRATIVO</p><span class="tag">${escapeHTML(r.category)}</span><h1>${escapeHTML(r.name)}</h1><p>${escapeHTML(r.region)} · Registro ilustrativo · ${r.date.split("-").reverse().join("/")}</p><span class="tag">${escapeHTML(r.condition)}</span></div><div class="dossier-photo"><img src="${r.image}" alt="Imagem ilustrativa de ${escapeHTML(r.name)}" onerror="this.src='https://placehold.co/900x600/1a2420/b9f23b?text=RUINEX'"></div></div>
      <div class="dossier-content-grid"><div class="dossier-main">
        <div class="dossier-tabs"><button class="active" data-tab="history">História</button><button data-tab="features">Características</button><button data-tab="gallery">Galeria</button><button data-tab="notes">Observações</button></div>
        <div class="dossier-tabs-content" id="tab-history"><h2>Memória do lugar</h2><p>${escapeHTML(r.history)}</p></div>
        <div class="dossier-tabs-content" id="tab-features" hidden><h2>Características</h2><p>Tipologia: ${escapeHTML(r.type)}. Período: ${escapeHTML(r.period)}. Material predominante: ${escapeHTML(r.material)}. Finalidade original: ${escapeHTML(r.purpose)}.</p></div>
        <div class="dossier-tabs-content" id="tab-gallery" hidden><h2>Galeria documental</h2><p>Imagens ilustrativas para fins acadêmicos.</p><div class="gallery-grid">${gallery.map((src,i)=>`<button data-gallery="${i}" aria-label="Ampliar fotografia ${i+1}"><img src="${src}" alt="Imagem ilustrativa ${i+1} de ${escapeHTML(r.name)}"></button>`).join("")}</div></div>
        <div class="dossier-tabs-content" id="tab-notes" hidden><h2>Observações</h2><p>${escapeHTML(r.notes)}</p><p>Os dados deste registro são fictícios e não devem ser utilizados para orientar deslocamentos ou visitas.</p></div>
      </div><aside><div class="panel"><p class="eyebrow">DADOS DO REGISTRO</p><div class="spec-list">${[["Código",r.code],["Categoria",r.category],["Região",r.region],["Tipologia",r.type],["Período",r.period],["Material",r.material],["Finalidade",r.purpose],["Conservação",r.condition],["Permissão de visitação",r.access],["Propriedade","Não verificado"],["Riscos estruturais","Não verificado"],["Última atualização",r.date]].map(pair=>`<div class="spec-row"><span>${pair[0]}</span><b>${escapeHTML(pair[1])}</b></div>`).join("")}</div><button class="btn btn-outline btn-full dossier-favorite" data-favorite="${r.id}">${isFavorite(r.id)?"★ Salvo nos favoritos":"☆ Favoritar registro"}</button><button class="btn btn-ghost btn-full" id="share-record">Compartilhar link ↗</button><button class="subtle-button" id="report-record">Reportar informação desatualizada</button></div></aside></div>
      <div class="responsibility-box"><b>SEGURANÇA E RESPONSABILIDADE</b><p>Estado de conservação não indica autorização de acesso. Permissão de visitação, propriedade e riscos estruturais são informações independentes. Onde não há confirmação, exibimos “Não verificado”.</p></div>`);
    $(".dossier-tabs button").on("click",function(){
      const tab=$(this).data("tab");$(".dossier-tabs button").removeClass("active");$(this).addClass("active");
      $(".dossier-tabs-content").hide();$("#tab-"+tab).fadeIn(180);
    });
    $("#share-record").on("click",async function(){
      try{if(navigator.share) await navigator.share({title:r.name,url:location.href});else{await navigator.clipboard.writeText(location.href);notify("Link copiado.");}}catch(e){notify("Compartilhamento não concluído.");}
    });
    $("#report-record").on("click",()=>notify("Demonstração: o aviso não foi enviado a uma equipe."));
    $(document).on("click","[data-gallery]",function(){
      const index=Number($(this).data("gallery"));$("body").append(`<div class="lightbox open"><button aria-label="Fechar">×</button><img src="${gallery[index]}" alt="Imagem ampliada do registro"></div>`);
    });
  }
  function renderDossierFavorite(id) {
    const $button=$(".dossier-favorite[data-favorite='"+id+"']");
    if($button.length)$button.text(isFavorite(id)?"★ Salvo nos favoritos":"☆ Favoritar registro");
  }

  // Gamificação local: XP, níveis, missões e emblemas desbloqueados por ações reais.
  const GAME_KEY = "ruinex_game_v2";
  const LEVELS = [
    {name:"Observador",xp:0,unlock:"Perfil e catálogo"},
    {name:"Documentarista",xp:100,unlock:"Molduras de perfil"},
    {name:"Cronista urbano",xp:250,unlock:"Destaque de publicações"},
    {name:"Cartógrafo",xp:500,unlock:"Tema de perfil avançado"},
    {name:"Guardião da memória",xp:900,unlock:"Emblema lendário"}
  ];
  const MISSIONS = [
    {id:"first-post",title:"Primeiro relato",desc:"Publique seu primeiro registro na comunidade.",xp:50,done:g=>g.posts>=1,icon:"✎"},
    {id:"three-posts",title:"Voz do arquivo",desc:"Compartilhe três publicações.",xp:90,done:g=>g.posts>=3,icon:"▤"},
    {id:"first-like",title:"Reconhecimento",desc:"Curta uma publicação da comunidade.",xp:20,done:g=>g.likes>=1,icon:"♡"},
    {id:"first-comment",title:"Diálogo aberto",desc:"Faça seu primeiro comentário.",xp:30,done:g=>g.comments>=1,icon:"↗"},
    {id:"first-favorite",title:"Colecionador",desc:"Salve um local nos favoritos.",xp:25,done:g=>g.favorites>=1,icon:"☆"},
    {id:"profile-complete",title:"Identidade registrada",desc:"Personalize sua biografia no perfil.",xp:35,done:g=>g.profileComplete,icon:"◎"}
  ];
  function gameState(){return readStore(GAME_KEY,{xp:0,claimed:[],posts:0,likes:0,comments:0,favorites:0,profileComplete:false,earned:[]});}
  function saveGame(g){saveStore(GAME_KEY,g);}
  function awardXP(event,amount,message){
    const g=gameState();if(g.claimed.includes(event))return;
    g.claimed.push(event);g.xp+=amount;saveGame(g);if(message)notify(message+" +"+amount+" XP");renderGame();
  }
  function updateMissionProgress(){
    const g=gameState(),profile=activeProfile();g.favorites=getFavorites().length;g.profileComplete=!!(profile&&profile.bio&&profile.bio.trim().length>=20);
    MISSIONS.forEach(m=>{if(m.done(g)&&!g.earned.includes(m.id)){g.earned.push(m.id);g.xp+=m.xp;g.claimed.push("mission:"+m.id);notify("Missão concluída: "+m.title+" · +"+m.xp+" XP");}});saveGame(g);
  }
  function renderGame(){
    updateMissionProgress();const g=gameState();let level=LEVELS[0];LEVELS.forEach(l=>{if(g.xp>=l.xp)level=l;});
    const next=LEVELS.find(l=>l.xp>g.xp),base=level.xp,progress=next?Math.min(100,Math.round((g.xp-base)/(next.xp-base)*100)):100;
    $("body").toggleClass("ruinex-unlock-gold",g.xp>=900).toggleClass("ruinex-unlock-feature",g.xp>=500);$("#game-level-name").text(level.name);$("#game-level-number").text(LEVELS.indexOf(level)+1);$("#game-xp").text(g.xp+" XP");$("#game-next").text(next?(next.xp-g.xp)+" XP para "+next.name:"Nível máximo alcançado");$("#game-progress").css("width",progress+"%");
    $("#game-missions").html(MISSIONS.map(m=>{const done=m.done(g);return `<article class="mission-card ${done?"mission-done":""}"><span class="mission-icon">${m.icon}</span><div class="mission-copy"><b>${escapeHTML(m.title)}</b><small>${escapeHTML(m.desc)}</small></div><span class="mission-reward">${done?"✓ CONCLUÍDA":"+"+m.xp+" XP"}</span></article>`;}).join(""));
    $("#game-badges").html(LEVELS.map((l,i)=>`<div class="game-badge ${g.xp>=l.xp?"unlocked":"locked"}" title="${escapeHTML(l.unlock)}"><span>${["⌖","▧","✎","◈","✦"][i]}</span><b>${escapeHTML(l.name)}</b><small>${g.xp>=l.xp?"DESBLOQUEADO":l.xp+" XP"}</small></div>`).join(""));
    $("#profile-page").toggleClass("profile-frame-unlocked",g.xp>=100).toggleClass("profile-theme-unlocked",g.xp>=500);
    $("#game-unlock-note").text(g.xp>=500?"Tema avançado de perfil desbloqueado":g.xp>=250?"Destaque de publicações desbloqueado":g.xp>=100?"Moldura especial de perfil desbloqueada":"Continue cumprindo missões para desbloquear recursos.");
    $("#profile-game-level").text(level.name);$("#profile-game-xp").text(g.xp+" XP");$("#profile-game-progress").css("width",progress+"%");$("#profile-game-badges").html(LEVELS.map((l,i)=>`<span class="mini-game-badge ${g.xp>=l.xp?"unlocked":"locked"}" title="${l.name}">${["⌖","▧","✎","◈","✦"][i]}</span>`).join(""));
  }

  // Comunidade: feed multimídia, ações sociais e persistência local.
  const defaultPosts=[
    {id:"p1",author:"Arquivo RUINEX",tag:"NOTA EDITORIAL",date:"25 NOV 2026",title:"Documentar também é reconhecer limites",text:"Uma ficha responsável identifica o que foi confirmado e sinaliza claramente o que ainda precisa de verificação.",likes:18,media:"",mediaType:""},
    {id:"p2",author:"Núcleo de Memória",tag:"PATRIMÔNIO",date:"22 NOV 2026",title:"Detalhes que contam histórias",text:"Uma fachada, uma antiga placa ou um detalhe construtivo podem abrir caminhos para compreender a transformação de um bairro.",likes:12,media:"",mediaType:""}
  ];
  function initCommunity(){
    if(!$("#community-feed").length)return;
    const member=hasSession()?activeProfile():null;
    function mediaMarkup(p){if(!p.media)return "";return p.mediaType==="video"?`<video class="post-media" controls preload="metadata" src="${p.media}"></video>`:`<img class="post-media" src="${p.media}" alt="Imagem da publicação" loading="lazy">`;}
    function renderPosts(){
      const posts=readStore(STORAGE.posts,defaultPosts),liked=readStore(STORAGE.likes,[]),saved=readStore("ruinex_saved_posts_v1",[]),comments=readStore(STORAGE.comments,{});
      $("#community-feed").html(posts.map(p=>{const isOwn=member&&p.author===member.name;const avatar=p.avatar?`<img src="${p.avatar}" alt="" class="post-avatar-img">`:escapeHTML((p.author||"R").charAt(0).toUpperCase());return `<article class="post-card ${readStore("ruinex_featured_posts_v1",[]).includes(p.id)?"post-featured":""}" data-post-card="${escapeHTML(p.id)}"><header class="post-author"><span class="avatar post-avatar">${avatar}</span><div class="post-author-meta"><b>${escapeHTML(p.author)}</b><small>${escapeHTML(p.tag||"COMUNIDADE")} · ${escapeHTML(p.date||"AGORA")}</small></div><button class="post-more" type="button" data-post-more="${escapeHTML(p.id)}" aria-label="Mais opções">•••</button><div class="post-more-menu" id="post-menu-${escapeHTML(p.id)}" hidden><button data-copy-post="${escapeHTML(p.id)}">Copiar texto</button><button data-save-post="${escapeHTML(p.id)}">${saved.includes(p.id)?"Remover dos salvos":"Salvar publicação"}</button><button data-report-post="${escapeHTML(p.id)}">Sinalizar conteúdo</button>${isOwn?`<button data-delete-post="${escapeHTML(p.id)}">Excluir minha publicação</button>`:""}${gameState().xp>=250&&isOwn?`<button data-feature-post="${escapeHTML(p.id)}">Destacar no meu perfil</button>`:""}</div></header><div class="post-content">${p.title?`<h3>${escapeHTML(p.title)}</h3>`:""}<p>${escapeHTML(p.text)}</p></div>${mediaMarkup(p)}<div class="post-actions"><button class="${liked.includes(p.id)?"liked":""}" data-like="${escapeHTML(p.id)}">♡ <span>${Number(p.likes||0)+(liked.includes(p.id)?1:0)}</span> Curtir</button><button data-comment="${escapeHTML(p.id)}">▢ Comentar</button><button data-share-post="${escapeHTML(p.id)}">↗ Compartilhar</button></div><div class="post-social-summary">${Number(p.likes||0)+(liked.includes(p.id)?1:0)} curtidas · ${(comments[p.id]||[]).length} comentários</div><div class="comment-area" id="comments-${escapeHTML(p.id)}" hidden><div class="comment-list">${(comments[p.id]||[]).map(c=>`<p><b>${escapeHTML(c.author||"Explorador")}</b> ${escapeHTML(c.text||c)}</p>`).join("")}</div><form class="comment-form" data-comment-form="${escapeHTML(p.id)}"><input name="comment" aria-label="Comentário" maxlength="180" placeholder="Escreva um comentário..." required><button type="submit">Enviar</button></form></div></article>`;}).join(""));
    }
    if(!member){$("#community-auth-note").prop("hidden",false);$("#post-form :input").prop("disabled",true);$("#post-login-cta").prop("hidden",false);}else{$("#community-auth-note").prop("hidden",true);$("#post-form :input").prop("disabled",false);$("#post-login-cta").prop("hidden",true);const avatarMarkup=member.avatar?`<img src="${member.avatar}" alt="" class="composer-avatar-img">`:escapeHTML((member.name||"R").charAt(0).toUpperCase());$(".composer-head .avatar").html(avatarMarkup);$(".composer-head b").text("Compartilhe uma descoberta, "+member.name);}
    $("#post-form").on("submit",function(e){
      e.preventDefault();if(!member){notify("Entre na sua conta para publicar.");return;}const title=$(this).find("[name='title']").val().trim(),text=$(this).find("[name='post']").val().trim(),file=$(this).find("[name='media']")[0].files[0];if(!title||!text){notify("Adicione um título e um texto.");return;}
      const publish=media=>{const posts=readStore(STORAGE.posts,defaultPosts);posts.unshift({id:"p"+Date.now(),author:member.name,email:member.email,avatar:member.avatar||"",tag:"MEMBRO RUINEX",date:"AGORA",title,text,likes:0,media:media||"",mediaType:file?(file.type.startsWith("video/")?"video":"image"):""});if(!saveStore(STORAGE.posts,posts))return;const g=gameState();g.posts++;saveGame(g);awardXP("post:"+posts[0].id,25,"Publicação criada!");this.reset();$("#media-preview").empty();renderPosts();};
      if(file){const allowed=["image/jpeg","image/png","image/webp","video/mp4","video/webm"];if(!allowed.includes(file.type)){notify("Formato não suportado. Use PNG, JPG, WEBP, MP4 ou WEBM.");return;}if(file.size>1800*1024){notify("Arquivo acima de 1,8 MB. Reduza o tamanho para armazenamento local.");return;}const reader=new FileReader();reader.onload=()=>publish(reader.result);reader.readAsDataURL(file);}else publish("");
    });
    $(document).on("change","#post-media-input",function(){const f=this.files[0];if(!f){$("#media-preview").empty();return;}if(f.size>1800*1024){notify("O limite de mídia é 1,8 MB.");this.value="";return;}const url=URL.createObjectURL(f);$("#media-preview").html(f.type.startsWith("video/")?`<video controls src="${url}"></video>`:`<img src="${url}" alt="Prévia da publicação">`);});
    $(document).on("click","[data-like]",function(){if(!member){notify("Entre na sua conta para interagir com a comunidade.");return;}const id=$(this).data("like"),likes=readStore(STORAGE.likes,[]);saveStore(STORAGE.likes,likes.includes(id)?likes.filter(x=>x!==id):likes.concat(id));if(!likes.includes(id)){const g=gameState();g.likes++;saveGame(g);awardXP("like:"+id,5,"Interação registrada!");}renderPosts();});
    $(document).on("click","[data-comment]",function(){if(!member){notify("Entre na sua conta para comentar.");return;}$("#comments-"+$(this).data("comment")).stop(true,true).slideToggle(180);});
    $(document).on("submit","[data-comment-form]",function(e){e.preventDefault();if(!member){notify("Entre para comentar.");return;}const id=$(this).data("comment-form"),value=$(this).find("[name='comment']").val().trim();if(!value)return;const comments=readStore(STORAGE.comments,{});comments[id]=comments[id]||[];comments[id].push({author:member.name,text:value});saveStore(STORAGE.comments,comments);const g=gameState();g.comments++;saveGame(g);awardXP("comment:"+id+":"+comments[id].length,8,"Comentário publicado!");renderPosts();$("#comments-"+id).show();});
    $(document).on("click","[data-post-more]",function(){$(".post-more-menu").prop("hidden",true);$("#post-menu-"+$(this).data("post-more")).prop("hidden",false);});
    $(document).on("click","[data-save-post]",function(){const id=$(this).data("save-post"),saved=readStore("ruinex_saved_posts_v1",[]);saveStore("ruinex_saved_posts_v1",saved.includes(id)?saved.filter(x=>x!==id):saved.concat(id));notify("Preferência de publicação atualizada.");renderPosts();});
    $(document).on("click","[data-copy-post]",async function(){const id=$(this).data("copy-post"),p=readStore(STORAGE.posts,defaultPosts).find(x=>x.id===id);if(!p)return;try{await navigator.clipboard.writeText(p.title+"\n"+p.text);notify("Texto copiado.");}catch(e){notify("Cópia indisponível neste contexto do navegador.");}});
    $(document).on("click","[data-share-post]",async function(){const id=$(this).data("share-post"),p=readStore(STORAGE.posts,defaultPosts).find(x=>x.id===id);if(!p)return;try{if(navigator.share)await navigator.share({title:p.title||"RUINEX",text:p.text,url:location.href});else{await navigator.clipboard.writeText(p.title+"\n"+p.text);notify("Texto da publicação copiado.");}}catch(e){if(e.name!=="AbortError")notify("Não foi possível compartilhar agora.");}});
    $(document).on("click","[data-report-post]",()=>notify("Sinalização demonstrativa registrada apenas nesta sessão."));
    $(document).on("click","[data-feature-post]",function(){if(gameState().xp<250){notify("Alcance 250 XP para desbloquear o destaque.");return;}const id=$(this).data("feature-post"),items=readStore("ruinex_featured_posts_v1",[]);saveStore("ruinex_featured_posts_v1",items.includes(id)?items.filter(x=>x!==id):items.concat(id));renderPosts();notify("Destaque do perfil atualizado.");});
    $(document).on("click","[data-delete-post]",function(){const id=$(this).data("delete-post"),posts=readStore(STORAGE.posts,defaultPosts).filter(p=>p.id!==id);saveStore(STORAGE.posts,posts);renderPosts();notify("Sua publicação foi removida deste navegador.");});
    renderPosts();renderGame();
  }

  // Contato e sugestão de registro: validação local, sem envio externo.
  function initContact(){
    $("#contact-form").on("submit",function(e){
      e.preventDefault();const form=this,feedback=$(form).find(".form-feedback");
      if(!form.checkValidity()){form.reportValidity();feedback.text("Confira os campos obrigatórios e o formato do e-mail.");return;}
      feedback.text("Mensagem validada! Esta demonstração não transmite dados a um servidor.");notify("Validação concluída — nenhum dado foi enviado.");
      form.reset();
    });
    $("#suggest-form").on("submit",function(e){
      e.preventDefault();const form=this;if(!form.checkValidity()){form.reportValidity();return;}
      const data=Object.fromEntries(new FormData(form).entries()),items=readStore(STORAGE.suggestions,[]);items.unshift({...data,date:new Date().toISOString()});saveStore(STORAGE.suggestions,items);
      $(form).find(".form-feedback").text("Sugestão salva neste navegador. Não foi enviada para moderação.");form.reset();notify("Sugestão registrada localmente.");
    });
  }

  // Contas demonstrativas locais: senha armazenada apenas como resumo, nunca em texto puro.
  async function demoPasswordDigest(value){
    if(window.crypto && crypto.subtle && window.isSecureContext){
      const bytes=new TextEncoder().encode(value),digest=await crypto.subtle.digest("SHA-256",bytes);
      return Array.from(new Uint8Array(digest)).map(byte=>byte.toString(16).padStart(2,"0")).join("");
    }
    // Fallback didático, NÃO criptográfico. Não usar para contas reais.
    let hash=2166136261;for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619);}
    return "demo-"+(hash>>>0).toString(16);
  }
  function activeProfile(){return readStore(STORAGE.profile,null);}
  function hasSession(){return localStorage.getItem("ruinex_session_active")==="1" && !!activeProfile();}
  function updateAccountButton(){
    const $button=$(".account-open"),profile=hasSession()?activeProfile():null;
    if(!$button.length)return;
    $button.toggleClass("is-member",!!profile).html(profile?`<span class="member-button-label">${escapeHTML(profile.name||"Meu perfil")}</span> <span>↗</span>`:'Entrar <span>↗</span>');
    if(profile)$button.attr("aria-label","Abrir perfil de "+profile.name);else $button.attr("aria-label","Entrar ou criar conta");
  }
  function initAccount(){
    function openModal(){$("#account-modal").addClass("open").attr("aria-hidden","false");}
    function closeModal(){$("#account-modal").removeClass("open").attr("aria-hidden","true");}
    $(".account-open").on("click",function(){if(hasSession())window.location.href="perfil.html";else openModal();});
    $(".modal-close,.modal-backdrop").on("click",closeModal);
    $(document).on("keydown",e=>{if(e.key==="Escape")closeModal();});
    $("[data-account-tab]").on("click",function(){
      const tab=$(this).data("account-tab");$("[data-account-tab]").removeClass("active");$(this).addClass("active");
      $("#login-form").prop("hidden",tab!=="login");$("#register-form").prop("hidden",tab!=="register");
    });
    $("#register-form").on("submit",async function(e){
      e.preventDefault();if(!this.checkValidity()){this.reportValidity();return;}
      const data=Object.fromEntries(new FormData(this).entries()),email=data.email.trim().toLowerCase();
      const accounts=readStore(STORAGE.accounts,[]);
      if(accounts.some(account=>account.email===email)){notify("Este e-mail já possui um perfil local. Entre na sua conta.");return;}
      const account={name:data.name.trim(),email,passwordDigest:await demoPasswordDigest(data.password),bio:"Explorador(a) documental em formação.",avatar:"",createdAt:new Date().toISOString()};
      accounts.push(account);saveStore(STORAGE.accounts,accounts);
      const publicProfile={name:account.name,email:account.email,bio:account.bio,avatar:account.avatar,createdAt:account.createdAt};
      saveStore(STORAGE.profile,publicProfile);localStorage.setItem("ruinex_session_active","1");
      this.reset();closeModal();window.location.href="perfil.html";
    });
    $("#login-form").on("submit",async function(e){
      e.preventDefault();if(!this.checkValidity()){this.reportValidity();return;}
      const data=Object.fromEntries(new FormData(this).entries()),email=data.email.trim().toLowerCase();
      let accounts=readStore(STORAGE.accounts,[]);
      // Migração de perfil antigo da primeira versão do projeto.
      const oldProfile=readStore(STORAGE.profile,null);
      if(!accounts.length && oldProfile && oldProfile.email){accounts=[{...oldProfile,passwordDigest:null}];saveStore(STORAGE.accounts,accounts);}
      const account=accounts.find(item=>item.email===email);
      if(!account){notify("Perfil não encontrado. Crie uma conta demonstrativa.");return;}
      const digest=await demoPasswordDigest(data.password);
      if(account.passwordDigest && account.passwordDigest!==digest){notify("Senha incorreta. Confira os dados e tente novamente.");return;}
      const publicProfile={name:account.name,email:account.email,bio:account.bio||"",avatar:account.avatar||"",createdAt:account.createdAt||new Date().toISOString()};
      saveStore(STORAGE.profile,publicProfile);localStorage.setItem("ruinex_session_active","1");this.reset();closeModal();window.location.href="perfil.html";
    });
    updateAccountButton();
    if(new URLSearchParams(location.search).get("conta")==="entrar")openModal();
  }

  function initProfile(){
    if(!$("#profile-page").length)return;
    const profile=activeProfile();
    if(!hasSession()){window.location.replace("index.html?conta=entrar");return;}
    const fallbackAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85";
    let selectedAvatar=profile.avatar||fallbackAvatar;
    const avatarChoices=[
      {name:"Explorador 01",url:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=420&q=85"},
      {name:"Exploradora 02",url:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=420&q=85"},
      {name:"Explorador 03",url:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=420&q=85"},
      {name:"Exploradora 04",url:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=420&q=85"}
    ];
    function showAvatar(url){selectedAvatar=url;$("#profile-avatar-preview,#profile-avatar-large,#profile-avatar-small").attr("src",url);$("#profile-avatar-url").val(url);$(".avatar-choice").removeClass("selected").filter(`[data-avatar="${url}"]`).addClass("selected");}
    $("#profile-name").val(profile.name||"");$("#profile-email").val(profile.email||"");$("#profile-bio").val(profile.bio||"");
    $("#profile-display-name").text(profile.name||"Explorador");$("#profile-display-email").text(profile.email||"");$("#profile-avatar-preview,#profile-avatar-large,#profile-avatar-small").attr("src",selectedAvatar);$("#profile-avatar-url").val(selectedAvatar);
    $("#profile-created").text(new Date(profile.createdAt||Date.now()).toLocaleDateString("pt-BR",{month:"long",year:"numeric"}));
    $("#avatar-suggestions").html(avatarChoices.map(item=>`<button type="button" class="avatar-choice ${selectedAvatar===item.url?"selected":""}" data-avatar="${item.url}" aria-label="Escolher ${item.name}"><img src="${item.url}" alt="${item.name}" loading="lazy"><span>${item.name}</span></button>`).join(""));
    $(document).on("click",".avatar-choice",function(){showAvatar($(this).data("avatar"));notify("Avatar selecionado. Salve as alterações para aplicar.");});
    $("#avatar-upload").on("change",function(){
      const file=this.files&&this.files[0];if(!file)return;
      const validTypes=["image/png","image/jpeg","image/webp"],validExt=/\.(png|jpe?g|webp)$/i.test(file.name);
      if(!validTypes.includes(file.type)||!validExt){notify("Formato inválido. Escolha PNG, JPG ou WEBP.");this.value="";return;}
      if(file.size>8*1024*1024){notify("A imagem deve ter até 8 MB antes da otimização.");this.value="";return;}
      const reader=new FileReader();reader.onload=event=>{
        const img=new Image();img.onload=()=>{
          const canvas=document.createElement("canvas"),size=480,scale=Math.min(1,size/Math.max(img.width,img.height));canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);
          canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);
          showAvatar(canvas.toDataURL("image/webp",.82));notify("Foto preparada. Salve o perfil para armazená-la neste navegador.");
        };img.onerror=()=>notify("Não foi possível ler esta imagem.");img.src=event.target.result;
      };reader.readAsDataURL(file);
    });
    $("#profile-form").on("submit",function(e){
      e.preventDefault();if(!this.checkValidity()){this.reportValidity();return;}
      const updated={...profile,name:$("#profile-name").val().trim(),bio:$("#profile-bio").val().trim(),avatar:selectedAvatar};
      if(updated.name.length<2){notify("Informe um nome com pelo menos dois caracteres.");return;}
      if(!saveStore(STORAGE.profile,updated))return;
      const accounts=readStore(STORAGE.accounts,[]),index=accounts.findIndex(item=>item.email===updated.email);
      if(index>=0){accounts[index]={...accounts[index],name:updated.name,bio:updated.bio,avatar:updated.avatar};saveStore(STORAGE.accounts,accounts);}
      $("#profile-display-name").text(updated.name);updateMissionProgress();renderGame();notify("Perfil atualizado com sucesso.");updateAccountButton();
    });
    const favorites=getFavorites(),favoriteRecords=records.filter(record=>favorites.includes(record.id));
    $("#profile-favorite-count").text(favorites.length);renderGame();$("#profile-post-count").text(readStore(STORAGE.posts,defaultPosts).filter(post=>post.author===profile.name).length);
    $("#profile-favorites").html(favoriteRecords.length?favoriteRecords.map(renderCard).join(""):'<div class="profile-empty">Você ainda não salvou registros. Explore o atlas e adicione seus lugares favoritos.</div>');
    const posts=readStore(STORAGE.posts,defaultPosts).filter(post=>post.author===profile.name);
    $("#profile-posts").html(posts.length?posts.map(post=>`<article class="profile-post">${post.title?`<b>${escapeHTML(post.title)}</b>`:""}${escapeHTML(post.text)}${post.media?(post.mediaType==="video"?`<video class="profile-post-media" controls src="${post.media}"></video>`:`<img class="profile-post-media" src="${post.media}" alt="Mídia da publicação">`):""}<small>${escapeHTML(post.date||"PUBLICAÇÃO LOCAL")} · ${Number(post.likes||0)} curtidas</small></article>`).join(""):'<div class="profile-empty">Suas publicações aparecerão aqui quando você compartilhar uma descoberta na comunidade.</div>');
    $("#profile-logout").on("click",function(){localStorage.removeItem("ruinex_session_active");window.location.href="index.html";});
  }

  function initGlobal(){
    // Menu responsivo via jQuery.
    $(".menu-toggle").on("click",function(){
      const expanded=$(this).attr("aria-expanded")==="true";$(this).attr("aria-expanded",String(!expanded));$(".main-nav").stop(true,true).slideToggle(180).toggleClass("open");
    });
    const page=$("body").data("page");
    const $navLinks=$(".main-nav a");
    function setActiveNav(target){
      $navLinks.removeClass("active").removeAttr("aria-current");
      const $active=$navLinks.filter(`[data-page="${target}"]`).first();
      $active.addClass("active").attr("aria-current","page");
    }
    setActiveNav(page);
    if(page==="explorar" && (location.hash==="#atlas" || $("#atlas").length && window.scrollY>$("#atlas").offset().top-180)) setActiveNav("atlas");
    $(".main-nav a[data-page='atlas']").on("click",function(){
      if(page==="explorar") setActiveNav("atlas");
    });
    $(window).on("hashchange",function(){if(page==="explorar")setActiveNav(location.hash==="#atlas"?"atlas":"explorar");});
    if(page==="explorar" && $("#atlas").length){
      $(window).on("scroll.atlasNav",function(){
        // Recalcula a posição porque os cartões do catálogo são renderizados dinamicamente.
        const atlasTop=$("#atlas").offset().top;
        const inAtlas=window.scrollY+$(window).height()*.45>=atlasTop;
        setActiveNav(inAtlas?"atlas":"explorar");
      });
    }
    $(document).on("click","[data-favorite]",function(e){e.preventDefault();toggleFavorite(String($(this).data("favorite")));});
    $(".global-search").on("submit",function(e){e.preventDefault();const term=$(this).find("input[name='q']").val().trim();window.location.href="explorar.html"+(term?"?q="+encodeURIComponent(term):"");});
    $(window).on("scroll",function(){$(".back-top").toggleClass("visible",window.scrollY>450);});
    $(".back-top").on("click",()=> $("html,body").animate({scrollTop:0},450));
    // Acordeões genéricos para módulos futuros.
    $(".accordion-trigger").on("click",function(){$(this).next(".accordion-content").stop(true,true).slideToggle(220);});
    // Lanterna real: escurece o entorno e abre um foco de luz sob o ponteiro.
    const light=document.querySelector(".cursor-light"),finePointer=window.matchMedia("(pointer:fine)").matches;
    if(light && finePointer){
      let framePending=false,pointerX=window.innerWidth/2,pointerY=window.innerHeight/2;
      document.addEventListener("pointermove",function(event){
        if(event.pointerType==="touch")return;pointerX=event.clientX;pointerY=event.clientY;
        if(!framePending){framePending=true;requestAnimationFrame(function(){light.style.setProperty("--lamp-x",pointerX+"px");light.style.setProperty("--lamp-y",pointerY+"px");light.style.opacity="1";document.body.classList.add("lamp-active");framePending=false;});}
      },{passive:true});
      document.addEventListener("pointerleave",function(){light.style.opacity="0";document.body.classList.remove("lamp-active");});
      document.addEventListener("pointerenter",function(){light.style.opacity="1";document.body.classList.add("lamp-active");});
    }else if(light){light.style.display="none";}
    // Fallback de imagem para fotos externas.
    $("img").on("error",function(){if(!this.dataset.fallback){this.dataset.fallback="1";this.src="https://placehold.co/900x600/1a2420/b9f23b?text=RUINEX+ARCHIVE";}});
  }

  // Trilha original sintetizada via Web Audio API: não utiliza música protegida ou arquivo externo.
  function initSoundscape(){
    if($(".sound-dock").length)return;
    $("body").append(`<aside class="sound-dock" aria-label="Controles da trilha sonora"><button class="sound-toggle" id="sound-toggle" type="button" aria-label="Ativar trilha sonora">♫</button><span class="sound-meta"><b>AMBIÊNCIA RUINEX</b><small id="sound-status">TRILHA DESATIVADA</small></span><input class="sound-volume" id="sound-volume" type="range" min="0" max="100" value="22" aria-label="Volume da trilha sonora"></aside>`);
    let context=null,master=null,oscillators=[],noiseSource=null,started=false;
    const status=$("#sound-status"),button=$("#sound-toggle"),savedVolume=Number(localStorage.getItem("ruinex_sound_volume")||22);
    $("#sound-volume").val(savedVolume);
    function buildSound(){
      const AudioContextClass=window.AudioContext||window.webkitAudioContext;if(!AudioContextClass)throw new Error("Web Audio não disponível");
      context=new AudioContextClass();master=context.createGain();master.gain.value=0;master.connect(context.destination);
      const masterFilter=context.createBiquadFilter();masterFilter.type="lowpass";masterFilter.frequency.value=520;masterFilter.Q.value=.7;master.connect(masterFilter);masterFilter.connect(context.destination);
      [[55,"sine",.34],[82.41,"triangle",.12],[110,"sine",.055]].forEach(([frequency,type,level])=>{
        const oscillator=context.createOscillator(),gain=context.createGain(),filter=context.createBiquadFilter();oscillator.type=type;oscillator.frequency.value=frequency;filter.type="lowpass";filter.frequency.value=260;gain.gain.value=level;oscillator.connect(filter);filter.connect(gain);gain.connect(master);oscillator.start();oscillators.push(oscillator);
      });
      // Ruído filtrado muito baixo cria textura de vento distante, sem gravação externa.
      const buffer=context.createBuffer(1,context.sampleRate*3,context.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.18;
      noiseSource=context.createBufferSource();noiseSource.buffer=buffer;noiseSource.loop=true;const noiseFilter=context.createBiquadFilter(),noiseGain=context.createGain();noiseFilter.type="lowpass";noiseFilter.frequency.value=190;noiseGain.gain.value=.10;noiseSource.connect(noiseFilter);noiseFilter.connect(noiseGain);noiseGain.connect(master);noiseSource.start();
      const lfo=context.createOscillator(),lfoGain=context.createGain();lfo.frequency.value=.075;lfoGain.gain.value=42;lfo.connect(lfoGain);lfoGain.connect(masterFilter.frequency);lfo.start();oscillators.push(lfo);
    }
    async function start(){
      try{if(!context)buildSound();await context.resume();const volume=Number($("#sound-volume").val())/100;master.gain.cancelScheduledValues(context.currentTime);master.gain.setTargetAtTime(volume*.42,context.currentTime,.8);started=true;localStorage.setItem("ruinex_sound_enabled","1");button.text("Ⅱ").attr("aria-label","Pausar trilha sonora");status.text("AMBIÊNCIA EM REPRODUÇÃO");}
      catch(error){status.text("TOQUE PARA LIBERAR O ÁUDIO");button.attr("aria-label","Tentar ativar trilha sonora");}
    }
    function stop(){if(context&&master){master.gain.setTargetAtTime(0,context.currentTime,.25);}started=false;localStorage.setItem("ruinex_sound_enabled","0");button.text("♫").attr("aria-label","Ativar trilha sonora");status.text("TRILHA PAUSADA");}
    button.on("click",function(){if(started)stop();else start();});
    $("#sound-volume").on("input",function(){localStorage.setItem("ruinex_sound_volume",this.value);if(started&&master)master.gain.setTargetAtTime((Number(this.value)/100)*.42,context.currentTime,.15);});
    if(localStorage.getItem("ruinex_sound_enabled")==="1"){status.text("RETOMANDO AMBIÊNCIA...");button.attr("aria-label","Retomar trilha sonora");start();}
  }

  renderFeatured();
  initGlobal();
  initCatalog();
  initDossier();
  initCommunity();
  initContact();
  initAccount();
  initProfile();
  initSoundscape();
});
