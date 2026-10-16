const projects = window.PORTFOLIO_PROJECTS;
const app = document.getElementById('app');
const header = document.getElementById('site-header');
const siteFooter = document.querySelector('.portfolio-footer');
const imageDialog = document.getElementById('image-dialog');
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const typeName = {product:'PRODUCT DEMO',video:'VIDEO WORK',image:'IMAGE WORK'};
const typeLabel = {product:'Product Demos',video:'Video Works',image:'Images'};
const count = type => projects.filter(p=>p.type===type).length;
const pad = n => String(n).padStart(2,'0');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let activeType='all', activeGroup='all';
// Reveal on arrival, then keep only visible scroll effects in the animation loop.
// Sticky cards and section containers never receive a transform.
const viewMotion=(()=>{
  let revealObserver, scrollObserver, frame=0;
  const registered=new Set(), scrolling=new Map(), visible=new Set();
  const clamp=n=>Math.max(0,Math.min(1,n));
  const enabled=()=>!reducedMotion.matches&&'IntersectionObserver' in window;
  function show(el){
    el.classList.add('is-visible');
    revealObserver?.unobserve(el);
  }
  function update(){
    frame=0;
    const height=window.innerHeight, mobile=window.innerWidth<=800;
    // Read all bounds before writing styles, avoiding repeated layout work.
    const readings=[...visible].filter(el=>el.isConnected).map(el=>({el,rect:el.getBoundingClientRect(),effect:scrolling.get(el)}));
    readings.forEach(({el,rect,effect})=>{
      if(!effect)return;
      if(effect.kind==='hero'){
        el.style.setProperty('--hero-shift',`${Math.min(rect.height*.1,Math.max(0,-rect.top)*(mobile?.10:.2)).toFixed(1)}px`);
      }else if(effect.kind==='words'){
        const progress=clamp((height*.88-rect.top)/(rect.height+height*.28));
        effect.words.forEach((word,i)=>word.style.setProperty('--word-progress',clamp(progress*(effect.words.length+3)-i).toFixed(3)));
      }else{
        const progress=clamp((height*.96-rect.top)/(height*.66+rect.height*.15));
        el.style.setProperty('--image-scale',(1+(1-progress)*(mobile?.08:.18)).toFixed(4));
      }
    });
  }
  function schedule(){if(!frame&&enabled())frame=requestAnimationFrame(update);}
  function track(el,effect){
    if(scrolling.has(el))return;
    scrolling.set(el,effect);visible.add(el);scrollObserver.observe(el);
  }
  function reveal(el,delay=0,kind='rise'){
    if(registered.has(el))return;
    registered.add(el);
    el.style.setProperty('--reveal-delay',`${delay}ms`);
    el.classList.add('motion-reveal',`motion-reveal--${kind}`);
    revealObserver.observe(el);
  }
  function clear(){
    revealObserver?.disconnect();scrollObserver?.disconnect();
    cancelAnimationFrame(frame);frame=0;
    registered.forEach(el=>{
      el.classList.remove('motion-reveal','motion-reveal--rise','motion-reveal--title','motion-reveal--fade','is-visible','featured-pending');
      el.style.removeProperty('--reveal-delay');
    });
    scrolling.forEach((effect,el)=>{
      el.style.removeProperty('--hero-shift');el.style.removeProperty('--image-scale');
      if(effect.kind==='words'){
        el.textContent=el.getAttribute('aria-label');
        el.removeAttribute('aria-label');el.classList.remove('motion-reading');
      }
      el.classList.remove('motion-hero','motion-image');
    });
    registered.clear();scrolling.clear();visible.clear();
  }
  function init(reset=true){
    if(reset)clear();
    pageDeck.refresh();
    if(!enabled())return;
    if(reset||!revealObserver){
      revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
        if(entry.isIntersecting)show(entry.target);
      }),{threshold:0,rootMargin:'0px 0px -24px 0px'});
      scrollObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting)visible.add(entry.target);
          else{
            // Commit the final state even when a fast scroll skips the viewport.
            visible.delete(entry.target);
            const effect=scrolling.get(entry.target);
            if(entry.boundingClientRect.bottom<0&&effect){
              if(effect.kind==='words')effect.words.forEach(word=>word.style.setProperty('--word-progress','1'));
              if(effect.kind==='image')entry.target.style.setProperty('--image-scale','1');
            }
          }
        });schedule();
      },{rootMargin:'120px 0px',threshold:0});
    }
    // Remove discarded catalog cards when filtering without replaying the hero.
    registered.forEach(el=>{if(!el.isConnected){revealObserver.unobserve(el);registered.delete(el);}});
    const each=(selector,fn)=>document.querySelectorAll(selector).forEach(fn);
    each('#site-header .brand,#site-header .main-nav a,#site-header .header-link,#site-header .mobile-toggle',(el,i)=>reveal(el,60+i*65));
    each('.home-hero-intro > *,.hero-signature > *,.page-hero-title > *,.hero__content--bottom > p,.hero__content--detail > *,.contact-screen > *',(el,i)=>reveal(el,180+Math.min(i,5)*95,el.matches('h1')?'title':'rise'));
    each('.section-bar',el=>reveal(el,0,'fade'));
    each('.formats-heading,.personal-bio__layout h2,.portfolio-footer h2',el=>reveal(el,0,'title'));
    each('.intro-row > h3,.intro-row > p,.intro-results dl > div,.intro-results > a,.intro-project figcaption,.format-number,.format-image,.format-copy,.group-heading,.filter-row,.group-filters,.personal-bio__layout p,.personal-bio__layout .underlined-link,.detail-intro > *,.detail-media,.back-link,.portfolio-footer__top > div > span,.portfolio-footer__top > a,.portfolio-footer__bottom',el=>reveal(el,el.matches('.format-copy')?140:0,el.matches('.detail-media')?'fade':'rise'));
    each('.work-grid',grid=>[...grid.children].forEach((el,i)=>reveal(el,Math.min(i%7,4)*65)));
    each('.featured-context > *,.featured-all > a',(el,i)=>reveal(el,Math.min(i,3)*75));
    each('.featured-card',el=>{
      if(registered.has(el))return;
      registered.add(el);el.classList.add('featured-pending');revealObserver.observe(el);
    });
    each('.hero',el=>{el.classList.add('motion-hero');track(el,{kind:'hero'});});
    each('.intro-lead',el=>{
      if(scrolling.has(el))return;
      const text=el.textContent;
      el.setAttribute('aria-label',text);el.classList.add('motion-reading');
      el.replaceChildren(...text.split(/(\s+)/).filter(Boolean).map(part=>{
        if(/^\s+$/.test(part))return document.createTextNode(part);
        const word=document.createElement('span');word.className='motion-word';word.textContent=part;word.setAttribute('aria-hidden','true');return word;
      }));
      track(el,{kind:'words',words:[...el.querySelectorAll('.motion-word')]});
    });
    each('.intro-project--portrait',el=>reveal(el,0,'fade'));
    each('.intro-project:not(.intro-project--portrait) > img',img=>{
      const clip=document.createElement('div');clip.className='motion-image-window';img.before(clip);clip.append(img);
    });
    each('.motion-image-window,.format-image',el=>{
      el.classList.add('motion-image');track(el,{kind:'image'});
    });
    schedule();
  }
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  document.addEventListener('focusin',e=>{
    // Keyboard users can always reach links before a reveal has completed.
    const target=e.target.closest('.motion-reveal,.featured-pending');
    if(target)show(target);
  });
  reducedMotion.addEventListener?.('change',()=>init());
  return {init};
})();
function animateView(reset=true){viewMotion.init(reset);}
function prepareSectionTransitions(){
  document.querySelector('.footer-transition')?.remove();
  const sections=[...app.children].filter(el=>el.matches('section'));
  const tone=el=>el.matches('.home-featured,.related-work')?'#14110d':'#0b0907';
  function edge(color){
    const el=document.createElement('div');
    el.className='section-transition';
    el.setAttribute('aria-hidden','true');
    el.style.setProperty('--edge-to',color);
    return el;
  }
  sections.forEach((section,i)=>{
    if(section.matches('.hero')){
      section.classList.add('has-section-transition');
      section.prepend(header);
      return;
    }
    const color=tone(section),surface=document.createElement('div');
    surface.className='section-surface';surface.style.setProperty('--section-bg',color);
    section.before(surface);
    // The leading edge belongs to the incoming panel. It has no flow height:
    // this whole opaque surface slides over the outgoing pinned panel.
    if(i>0)surface.append(edge(color));
    surface.append(section);
  });
  if(!app.querySelector('.hero'))app.before(header);
  siteFooter.classList.add('has-section-transition');
  const transition=edge('#080604');transition.classList.add('footer-transition');
  siteFooter.prepend(transition);
  [...app.children].filter(el=>el.matches('.hero,.section-surface,.portfolio-footer')).forEach((el,i)=>{
    el.classList.add('page-panel');el.style.setProperty('--panel-order',i+1);
  });
  pageDeck.init();
}
// Native sticky positioning keeps the last viewport of long sections readable.
// No transforms or clipping on these parents: nested portfolio stickies still work.
const pageDeck=(()=>{
  let panels=[],observer,frame=0;
  function refresh(){
    const enabled=!reducedMotion.matches&&Boolean(window.CSS?.supports?.('position','sticky'));
    app.classList.toggle('cover-scroll',enabled);
    const heights=panels.map(el=>el.getBoundingClientRect().height);
    panels.forEach((el,i)=>{
      el.style.setProperty('--panel-top',`${Math.min(0,window.innerHeight-heights[i])}px`);
    });
  }
  function schedule(){
    if(frame)return;
    frame=requestAnimationFrame(()=>{frame=0;refresh();});
  }
  function init(){
    observer?.disconnect();cancelAnimationFrame(frame);frame=0;
    panels=[...app.querySelectorAll(':scope > .page-panel')];
    if('ResizeObserver' in window){observer=new ResizeObserver(schedule);panels.forEach(el=>observer.observe(el));}
    refresh();
  }
  window.addEventListener('resize',schedule,{passive:true});
  // Images, fonts and video posters can change a panel's height after route entry.
  app.addEventListener('load',schedule,true);
  return {init,refresh};
})();
function sectionBar(number,title){return `<div class="section-bar"><span>(${number})</span><span>(${title})</span><span>© 2026</span></div>`;}
function card(p,i){
  const art=`<div class="work-card__art ${p.aspect==='portrait'?'work-card__art--portrait':''}" style="--art:url('${p.image}')"><img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" width="${p.aspect==='portrait'?540:960}" height="${p.aspect==='portrait'?960:540}" /><span class="work-card__open" aria-hidden="true">${p.type==='image'?'↗':'▶'}</span>${p.duration?`<span class="duration">${p.duration}</span>`:''}</div>`;
  const meta=`<div class="work-card__meta"><span>(${pad(i+1)})</span><span><strong>${escapeHtml(p.title)}</strong><small>${escapeHtml(p.subtitle)}</small></span><span>${typeName[p.type]}</span></div>`;
  if(p.type==='image')return `<article class="work-card work-card--image"><button type="button" data-image="${p.image}" data-title="${escapeHtml(p.title)}" aria-label="Enlarge ${escapeHtml(p.title)}">${art}</button><a href="#project/${p.id}">${meta}</a></article>`;
  return `<a class="work-card" href="#project/${p.id}" aria-label="View ${escapeHtml(p.title)}">${art}${meta}</a>`;
}
function catalogBody(){
  const filtered=projects.filter(p=>(activeType==='all'||p.type===activeType)&&(activeGroup==='all'||p.group===activeGroup));
  const groups=[...new Set(filtered.map(p=>p.group))];
  return `<p class="result-count" role="status">${filtered.length} works / ${typeLabel[activeType]||'All Work'}</p>`+groups.map((group,i)=>{
    const items=filtered.filter(p=>p.group===group),first=items[0],isImage=first.type==='image';
    return `<section class="catalog-group" aria-labelledby="group-${group}"><div class="group-heading"><div><span>(${pad(i+1)}) / ${typeName[first.type]}</span><h2 id="group-${group}">${escapeHtml(first.groupTitle)} <sup>(${pad(items.length)})</sup></h2></div><span>${isImage?'Click to enlarge':'Open a project to watch'}</span></div><div class="work-grid ${isImage?'work-grid--images':items.every(p=>p.aspect==='portrait')?'work-grid--portraits':''}">${items.map(card).join('')}</div></section>`;
  }).join('');
}
function groupFilters(){
  const groups=[...new Set(projects.filter(p=>activeType==='all'||p.type===activeType).map(p=>p.group))];
  return `<button data-group="all" class="${activeGroup==='all'?'is-active':''}" aria-pressed="${activeGroup==='all'}">All Collections</button>`+groups.map(g=>`<button data-group="${g}" class="${activeGroup===g?'is-active':''}" aria-pressed="${activeGroup===g}">${escapeHtml(projects.find(p=>p.group===g).groupTitle)}</button>`).join('');
}
function work(){
 const catalog=`<section class="catalog page-section" id="portfolio-index">${sectionBar('01','Portfolio')}<div class="filter-row" role="group" aria-label="Filter by format"><span>FILTER BY FORMAT</span><div>${['all','product','video','image'].map(t=>`<button type="button" data-filter="${t}" class="${activeType===t?'is-active':''}" aria-pressed="${activeType===t}">${typeLabel[t]||'All Work'} <small>${pad(t==='all'?projects.length:count(t))}</small></button>`).join('')}</div></div><div class="group-filters" id="group-filters" role="group" aria-label="Filter by collection">${groupFilters()}</div><div id="catalog-body">${catalogBody()}</div></section>`;
 return pageHero('Latest Portfolio', 'A collection of AI products, films, and social visuals, organized by format and series.', 'work') + catalog;
}
function pageHero(title,description,kind='about'){
 const image=kind==='work'?'./assets/portfolio-black-gold-20261015.webp':'./assets/about-leopard-profile-20261015.webp';
 return `<section class="hero hero--${kind}"><div class="hero__image" aria-hidden="true" style="background-image:url('${image}')"></div><div class="hero__content hero__content--bottom"><div class="page-hero-title"><span class="eyebrow">HOKEEM / SELECTED WORK</span><h1>${escapeHtml(title)}</h1></div><p>${escapeHtml(description)}</p></div></section>`;
}
function personalIntro(){
 return `<section class="page-section personal-intro" id="about-intro">${sectionBar('01','About Me')}<h2 class="intro-lead">I connect content insights with hands-on creation, building AI products and creator workflows while making films, images, and stories.</h2><div class="intro-layout"><figure class="intro-project intro-project--portrait"><img src="./assets/about-leopard-suit-hat-20261015.webp" alt="Hokeem’s leopard persona in a black suit, standing upright with one hand lowering a round black hat" loading="lazy" decoding="async" width="1024" height="1536"><figcaption>HOKEEM / THE PERSON BEHIND THE WORK</figcaption></figure><div class="intro-rows"><div class="intro-row"><h3>(Products)</h3><p>At Kwai, I worked on creator tools for video discovery and inspiration. At Hotcoin, I built a TradFi visual content workspace organized around 11 production modules.</p></div><div class="intro-row"><h3>(Visuals)</h3><p>My creative work spans brand films, AI short dramas, explainers, news videos, and social visuals for Hotcoin. Explore each format to see the finished work.</p></div><div class="intro-row"><h3>(In Numbers)</h3><div class="intro-results"><dl><div><dt>Product Demos</dt><dd>${pad(count('product'))}</dd></div><div><dt>Video Works</dt><dd>${pad(count('video'))}</dd></div><div><dt>Images & Visuals</dt><dd>${pad(count('image'))}</dd></div></dl><a class="underlined-link" href="#work">Explore My Work <span>↗</span></a></div></div></div></div></section>`;
}
function featuredWork(){
 const selected=projects.filter(p=>p.type==='product');
 return `<section class="page-section home-featured" id="selected-work" aria-labelledby="featured-heading">${sectionBar('02','Product Showcase')}<div class="featured-layout"><div class="featured-context"><span class="eyebrow">VIBE CODING / PRODUCT DEMOS</span><h2 id="featured-heading">Vibe-coded<br>Products</h2><p>Four products built around creator discovery, content production, and KOL collaboration.</p><a class="underlined-link" href="#work/product">Explore the Products <span>↗</span></a></div><div class="featured-stack">${selected.map((p,i)=>`<a class="featured-card" href="#project/${p.id}" style="--card-order:${i}" aria-label="Watch ${escapeHtml(p.title)} demo"><div class="featured-media" style="--featured-art:url('${p.image}')"><div class="featured-media__blur" aria-hidden="true"></div><span class="featured-media__crop"><img class="featured-media__image" src="${p.image}" alt="${escapeHtml(p.title)} product cover" loading="lazy" width="1440" height="1080"></span><span class="featured-media__open" aria-hidden="true">↗</span></div><div class="featured-meta"><span>(${pad(i+1)})</span><div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.subtitle)}</p></div><span class="featured-meta__type">PRODUCT DEMO</span></div></a>`).join('')}</div><div class="featured-all"><a class="featured-all__link" href="#work/product" aria-label="Explore all ${selected.length} product demos"><span class="featured-all__kicker">ALL PRODUCT DEMOS / ${pad(selected.length)}</span><strong>Explore All<br>Demos</strong><span class="featured-all__arrow" aria-hidden="true">↗</span></a></div></div></section>`;
}
function home(){
 const formats=[{type:'video',title:'Video Works',subtitle:'Brand Films / Short Dramas / Content',description:'Brand films, short dramas, explainers, news, rankings, tool guides, and game demos.',image:'./assets/aigc-amos-doodle-egg.webp'},{type:'image',title:'Images & Visuals',subtitle:'Hotcoin Social Visuals / Image Posts',description:'Market stories, information cards, and visual series, available as full-size images.',image:'./assets/tradfi-01.webp'}];
 const creativeCards=formats.map((f,i)=>`<article class="personal-format-card"><span class="format-number">${pad(i+1)}</span><a class="format-image" href="#work/${f.type}" aria-label="Explore ${f.title}"><img src="${f.image}" alt="${f.title} / Selected Work" loading="lazy" width="960" height="640"></a><div class="format-copy"><h3><a href="#work/${f.type}">${f.title}</a></h3><p class="format-subtitle">${f.subtitle}</p><p>${f.description}</p><a class="format-link" href="#work/${f.type}">Explore ${count(f.type)} ${f.type==='image'?'Images':'Videos'} ↗</a></div></article>`).join('');
 const musicCard=`<article class="personal-format-card personal-format-card--upcoming"><span class="format-number">03</span><div class="format-image format-image--music" role="img" aria-label="Music projects coming soon"><span class="music-wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="music-cover-note">MUSIC / NEXT CHAPTER</span></div><div class="format-copy"><h3>Music</h3><p class="format-subtitle">Original Music / Coming Soon</p><p>Music projects will be added here once the work is ready to share.</p><span class="format-link format-link--pending">Coming Soon</span></div></article>`;
 return `<section class="hero hero--home"><div class="hero__image" style="background-image:url('./assets/hero-leopard.webp')"></div><div class="home-hero-content"><div class="home-hero-intro"><span class="eyebrow">HOKEEM / VIBE CODING PRODUCTS &amp; AIGC VISUALS</span><p>Products.<br>Videos.<br>Visuals.</p><a class="underlined-link" href="#work">Explore Work <span>↗</span></a></div><div class="hero-signature"><h1>PORTFOLIO</h1></div></div></section>${personalIntro()}${featuredWork()}<section class="page-section personal-formats">${sectionBar('03','Creative Portfolio')}<h2 class="formats-heading">Films, visuals &amp; music.</h2><div class="format-list">${creativeCards}${musicCard}</div></section>`;
}
function media(p){
 if(p.type==='image')return `<button class="media-viewer media-viewer--image" type="button" data-image="${p.image}" data-title="${escapeHtml(p.title)}"><img src="${p.image}" alt="${escapeHtml(p.title)}" /><span>View full image ↗</span></button>`;
 return `<div class="video-player"><video class="inline-video" controls playsinline preload="metadata" poster="${p.image}" aria-label="${escapeHtml(p.title)}" data-aspect="${p.aspect}" data-fallback="${p.videoWebm || ''}"><source src="${p.video}" type="video/mp4">${p.videoWebm?`<source src="${p.videoWebm}" type="video/webm">`:''}Your browser does not support embedded video.</video><div class="video-player__links"><span class="video-status" role="status" aria-live="polite"></span><a href="${p.video}" target="_blank" rel="noopener noreferrer">Open video separately ↗</a></div></div>`;
}
function detail(p){
 const others=projects.filter(x=>x.id!==p.id&&x.group===p.group).slice(0,p.type==='image'?6:2);
 return `<section class="hero hero--detail"><div class="hero__image" style="background-image:url('${p.image}')"></div><div class="hero__content hero__content--detail"><span>${typeName[p.type]} / ${escapeHtml(p.groupTitle)}</span><h1>${escapeHtml(p.title)}</h1><div class="hero__detail-bottom"><span>${escapeHtml(p.source)}</span><a href="#work/${p.type}">All ${typeLabel[p.type]} ↗</a></div></div></section><section class="page-section detail-section">${sectionBar('01','Project Overview')}<div class="detail-intro"><p>${escapeHtml(p.description)}</p><dl><dt>FORMAT</dt><dd>${typeLabel[p.type]}</dd><dt>COLLECTION</dt><dd>${escapeHtml(p.groupTitle)}</dd><dt>SOURCE</dt><dd>${escapeHtml(p.source)}</dd></dl></div><div class="detail-media ${p.aspect==='portrait'?'detail-media--portrait':''}">${media(p)}</div><a class="back-link" href="#work/${p.type}">← Back to ${typeLabel[p.type]}</a></section>${others.length?`<section class="page-section related-work">${sectionBar('02','Related Work')}<div class="group-heading"><h2>Related Work</h2></div><div class="work-grid ${p.type==='image'?'work-grid--images':''}">${others.map(card).join('')}</div></section>`:''}`;
}
function about(){return pageHero('About Hokeem', 'Starting with creator needs. Turning content insights into products and ideas into finished work.')+`<section class="page-section personal-bio">${sectionBar('01','About Me')}<div class="personal-bio__layout"><h2>Content.<br>Product.<br>Visual.</h2><div><p>I’m Hokeem. I work across AI content products, creator operations, and visual storytelling, taking ideas from an initial insight to a working prototype or finished piece.</p><p>My Kwai projects explore how creators find inspiration and how operations teams discover, screen, and analyze videos. At Hotcoin, I built a TradFi visual content workspace with 11 content modules. My KOL cooperation platform explores campaign discovery and creator collaboration.</p><p>This portfolio brings together four product projects and a range of films, short dramas, explainers, tool guides, game demos, and social visuals. Each project includes its original media.</p><a class="underlined-link" href="#work">Explore My Work <span>↗</span></a></div></div></section>`;}
function contact(){return `<section class="hero hero--contact"><div class="hero__image" aria-hidden="true" style="background-image:url('./assets/contact-leopard-hat-20261015.webp')"></div><div class="contact-screen"><span>HOKEEM / CONTACT</span><h1>Let's<br>connect.</h1><div class="contact-person"><img src="./assets/denghaoqing-avatar.png" alt="Denghaoqing avatar" width="1574" height="1260"><div><span>YOU'RE REACHING</span><strong>Denghaoqing</strong></div></div><div class="contact-screen__links"><div class="contact-method"><span>WECHAT</span><strong>dhq159162</strong><button type="button" data-copy="dhq159162" aria-label="Copy WeChat ID dhq159162">Copy ID ↗</button></div><a class="contact-method" href="https://t.me/hokeemDeng" target="_blank" rel="noopener noreferrer" aria-label="Message @hokeemDeng on Telegram"><span>TELEGRAM</span><strong>@hokeemDeng</strong><em>Open Telegram ↗</em></a></div><p class="contact-feedback" role="status" aria-live="polite"></p></div></section>`;}
function route(){
 let hash;try{hash=decodeURIComponent(location.hash.slice(1))||'home';}catch{hash='home';}
 const [page,id,groupId]=hash.split('/');const p=page==='project'?projects.find(x=>x.id===id):null;
 if(page==='work'){activeType=['product','video','image'].includes(id)?id:'all';activeGroup=projects.some(x=>x.group===groupId&&(activeType==='all'||x.type===activeType))?groupId:'all';}
 if(imageDialog.open)imageDialog.close();
 app.querySelectorAll('video').forEach(video=>video.pause());
 app.innerHTML=p?detail(p):({home,work,about,contact}[page]||home)();
 app.append(siteFooter);
 prepareSectionTransitions();
 const active=p?'project':(['home','work','about','contact'].includes(page)?page:'home');
 document.body.dataset.page=active;
 header.hidden=false;
 document.querySelector('.site-footer').hidden=false;
 document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('is-active',a.dataset.nav===(p?'work':page)));
 document.title=`${p?p.title:({home:'Selected Work',work:'Portfolio',about:'About',contact:'Contact'}[page]||'Selected Work')} | HOKEEM`;
 document.querySelector('.mobile-panel')?.remove();
 window.scrollTo({top:0,behavior:'instant'});
 animateView();
}
function refreshCatalog(){
 document.getElementById('group-filters').innerHTML=groupFilters();
 document.getElementById('catalog-body').innerHTML=catalogBody();
 animateView(false);
}
function toggleMenu(){
 const existing=document.querySelector('.mobile-panel');
 if(existing){existing.remove();document.querySelectorAll('.mobile-toggle').forEach(b=>b.setAttribute('aria-expanded','false'));return;}
 const nav=document.createElement('nav');nav.className='mobile-panel';nav.setAttribute('aria-label','Mobile navigation');
 nav.innerHTML='<button type="button" data-close-menu aria-label="Close navigation">Close ×</button><a href="#home">Home <small>01</small></a><a href="#work">Portfolio <small>02</small></a><a href="#about">About <small>03</small></a><a href="#contact">Contact <small>04</small></a>';
 document.body.append(nav);nav.querySelector('button').focus();document.querySelectorAll('.mobile-toggle').forEach(b=>b.setAttribute('aria-expanded','true'));
}
app.addEventListener('playing',e=>{
 const video=e.target;
 if(!video.matches('video.inline-video'))return;
 video.classList.add('is-playing');
 video.classList.toggle('inline-video--portrait',video.dataset.aspect==='portrait');
 video.closest('.video-player').querySelector('.video-status').textContent='';
 pageDeck.refresh();
},true);
app.addEventListener('error',e=>{
 const video=e.target;
 if(!video.matches('video.inline-video'))return;
 const status=video.closest('.video-player').querySelector('.video-status');
 if(video.dataset.fallback && !video.dataset.fallbackTried){
  video.dataset.fallbackTried='true';
  status.textContent='Loading the compatible video format…';
  video.src=video.dataset.fallback;
  video.load();
 }else{
  status.textContent='Video could not load. Please reload or open it separately.';
 }
},true);
app.addEventListener('click',e=>{
 const copy=e.target.closest('[data-copy]');
 if(copy){
  const status=app.querySelector('.contact-feedback');
  if(!navigator.clipboard?.writeText){status.textContent='Select the WeChat ID above to copy it.';return;}
  navigator.clipboard.writeText(copy.dataset.copy).then(()=>{status.textContent='WeChat ID copied.';}).catch(()=>{status.textContent='Select the WeChat ID above to copy it.';});
  return;
 }
 const carouselControl=e.target.closest('[data-carousel-direction]');
 if(carouselControl){app.querySelectorAll('.fuel-carousel').forEach(el=>el.scrollBy({left:Number(carouselControl.dataset.carouselDirection)*el.clientWidth,behavior:reducedMotion.matches?'instant':'smooth'}));return;}
 const filter=e.target.closest('[data-filter]');
 if(filter){
  activeType=filter.dataset.filter;activeGroup='all';
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('is-active',b===filter);b.setAttribute('aria-pressed',String(b===filter));});
  history.replaceState(null,'',activeType==='all'?'#work':'#work/'+activeType);refreshCatalog();return;
 }
 const group=e.target.closest('[data-group]');if(group){activeGroup=group.dataset.group;history.replaceState(null,'',`#work/${activeType}${activeGroup==='all'?'':'/'+activeGroup}`);refreshCatalog();return;}
 const image=e.target.closest('[data-image]');if(image){document.getElementById('dialog-image').src=image.dataset.image;document.getElementById('dialog-image').alt=image.dataset.title;document.getElementById('dialog-caption').textContent=image.dataset.title;imageDialog.showModal();return;}
 const faq=e.target.closest('[data-faq-answer]');if(faq){
  const opened=faq.getAttribute('aria-expanded')==='true';faq.setAttribute('aria-expanded',String(!opened));faq.querySelector('.faq-answer')?.remove();if(!opened){const p=document.createElement('p');p.className='faq-answer';p.textContent=faq.dataset.faqAnswer;faq.append(p);}return;
 }
});
document.addEventListener('click',e=>{if(e.target.closest('[data-close-menu],#site-header [data-menu]'))toggleMenu();if(e.target.closest('.mobile-panel a')){document.querySelector('.mobile-panel')?.remove();document.querySelectorAll('.mobile-toggle').forEach(b=>b.setAttribute('aria-expanded','false'));}});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){document.querySelector('.mobile-panel')?.remove();document.querySelectorAll('.mobile-toggle').forEach(b=>b.setAttribute('aria-expanded','false'));}
 if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-faq-answer],[data-menu],[data-carousel-direction]')){e.preventDefault();e.target.click();}
});
document.getElementById('close-dialog').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('click',e=>{if(e.target===imageDialog)imageDialog.close();});
window.addEventListener('hashchange',route);
route();
