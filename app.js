const projects = window.PORTFOLIO_PROJECTS;
const app = document.getElementById('app');
const header = document.getElementById('site-header');
const siteFooter = document.querySelector('.portfolio-footer');
const imageDialog = document.getElementById('image-dialog');
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const typeName = {product:'PRODUCT DEMO',video:'VIDEO',image:'IMAGE',game:'GAME'};
const portfolioTypes=['product','video','image','game'];
const typeLabel = {product:'Product Demos',video:'Videos',image:'Images',game:'Games'};
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
    each('.intro-row > h3,.intro-row > p,.intro-results dl > div,.intro-results > a,.experience-heading,.experience-row,.experience-footer,.intro-project figcaption,.format-number,.format-image,.format-copy,.group-heading,.filter-row,.group-filters,.personal-bio__layout p,.personal-bio__layout .underlined-link,.detail-intro > *,.detail-media,.back-link,.portfolio-footer__top > div > span,.portfolio-footer__top > a,.portfolio-footer__bottom',el=>reveal(el,el.matches('.format-copy')?140:0,el.matches('.detail-media')?'fade':'rise'));
    each('.work-grid',grid=>[...grid.children].forEach((el,i)=>reveal(el,Math.min(i%7,4)*65)));
    each('.career-section__heading,.career-entry,.career-education,.career-highlights > li,.career-practice__grid > div,.career-practice > a',el=>reveal(el,0));
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
 const board=(items,kind)=>`<div class="work-grid portfolio-board portfolio-board--${kind} ${kind==='image'?'work-grid--images':''}">${items.map(card).join('')}</div>`;
 return `<p class="result-count" role="status">${pad(filtered.length)} works / ${typeLabel[activeType]||'All Portfolio'}</p>`+portfolioTypes.filter(type=>filtered.some(p=>p.type===type)).map(type=>{
  const items=filtered.filter(p=>p.type===type);
  const content=type==='video'?[...new Set(items.map(p=>p.group))].map(group=>{
   const series=items.filter(p=>p.group===group);
   return `<section class="portfolio-series" aria-labelledby="series-${group}"><div class="portfolio-series__heading"><h3 id="series-${group}">${escapeHtml(series[0].groupTitle)}</h3><span>${pad(series.length)} CASES</span></div>${board(series,group==='short-drama'?'shorts':'video')}</section>`;
  }).join(''):board(items,type);
  return `<section class="portfolio-format portfolio-format--${type}" id="portfolio-${type}" aria-labelledby="format-${type}"><div class="portfolio-format__heading"><h2 id="format-${type}"><span>(${pad(portfolioTypes.indexOf(type)+1)}) /</span> ${typeName[type]}</h2><span>${pad(items.length)} WORKS</span></div>${content}</section>`;
 }).join('');
}
function groupFilters(){
 if(activeType!=='video')return '';
 const groups=[...new Set(projects.filter(p=>p.type==='video').map(p=>p.group))];
 return '<span class="group-filters__label">VIDEO SERIES</span>'+[`<button type="button" data-group="all" class="${activeGroup==='all'?'is-active':''}" aria-pressed="${activeGroup==='all'}">All Series</button>`,...groups.map(g=>`<button type="button" data-group="${g}" class="${activeGroup===g?'is-active':''}" aria-pressed="${activeGroup===g}">${escapeHtml(projects.find(p=>p.group===g).groupTitle)}</button>`)].join('');
}
function work(){
 const catalog=`<section class="catalog page-section" id="portfolio-index">${sectionBar('01','Portfolio')}<div class="filter-row" role="group" aria-label="Filter by format"><span>EXPLORE BY FORMAT</span><div>${['all',...portfolioTypes].map(t=>`<button type="button" data-filter="${t}" class="${activeType===t?'is-active':''}" aria-pressed="${activeType===t}">${t==='all'?'ALL':typeName[t]} <small>${pad(t==='all'?projects.length:count(t))}</small></button>`).join('')}</div></div><div class="group-filters" id="group-filters" role="group" aria-label="Filter video series" ${activeType==='video'?'':'hidden'}>${groupFilters()}</div><div id="catalog-body">${catalogBody()}</div></section>`;
 return pageHero('ALL Portfolio', 'A collection of AI products, films, and social visuals', 'work') + catalog;
}
function brandCover(kind){
 const url=(size,format)=>`url('./assets/leopard-${kind}-${size}-20261018.${format}')`;
 const style=`--cover-webp:${url('desktop','webp')};--cover-avif:${url('desktop','avif')};--cover-webp-mobile:${url('mobile','webp')};--cover-avif-mobile:${url('mobile','avif')}`;
 return `<div class="hero__image brand-cover" aria-hidden="true" style="${style}"></div>`;
}
function pageHero(title,description,kind='about'){
 return `<section class="hero hero--${kind}">${brandCover(kind)}<div class="hero__content hero__content--bottom"><div class="page-hero-title"><span class="eyebrow">HOKEEM / SELECTED WORK</span><h1>${escapeHtml(title)}</h1></div><p>${escapeHtml(description)}</p></div></section>`;
}
const career = window.HOKEEM_CAREER;
const lifePrinciple='Humanity writes its endless story, and calls it the world. With the life I’m given, I hope to add stories only I could tell, and to love people by name. All else may fade.';
const homebarNames={fuqi:'future homebar',yeluzi:'yeluzi homebar',yunv:'yunvhomebar'};
const experienceTypes={
 physical:{label:'BRICK & MORTAR',title:'Brick-and-mortar business'},
 internet:{label:'INTERNET',title:'Internet company'},
 investment:{label:'INVESTMENT',title:'Investment company'},
 ai:{label:'AI',title:'AI company'},
 advertising:{label:'ADVERTISING',title:'Advertising company'},
 web3:{label:'WEB3',title:'Web3 company'},
 community:{label:'COMMUNITY',title:'Community'}
};
const brandTypes=Object.fromEntries(career.timeline.flatMap(entry=>entry.brands.map(id=>[id,entry.type])));
function experienceBadge(type){
 const badge=experienceTypes[type];
 return badge?`<span class="experience-badge" data-type="${type}" title="${badge.title}">${badge.label}</span>`:'';
}
function brandTile(id, name, extraClass=''){
 return `<div class="experience-logo ${extraClass}"><img src="./assets/brand-${id}-black-20261018.webp" alt="${escapeHtml(name)} logo" loading="lazy" decoding="async" width="480" height="300"></div>`;
}
function experienceList(){
 const years=[...new Set(career.timeline.map(entry=>entry.start.slice(0,4)))].sort();
 const rows=years.map(year=>{
  const entries=career.timeline.filter(entry=>entry.start.startsWith(year));
  const brands=entries.flatMap(entry=>entry.brands.map(id=>({id,name:homebarNames[id]||entry.name,role:entry.role,start:entry.start,type:entry.type})));
  return `<li class="experience-row experience-row--year" data-year="${year}"><h4 class="experience-year">${year}</h4><ul class="experience-year__brands" tabindex="0" aria-label="${year} companies and projects">${brands.map(brand=>`<li class="experience-brand" data-brand="${brand.id}" data-start="${brand.start}" title="${escapeHtml(brand.name+' · '+brand.role)}"><figure>${brandTile(brand.id,brand.name)}<figcaption><span class="experience-brand__name">${escapeHtml(brand.name)}</span>${experienceBadge(brand.type)}</figcaption></figure></li>`).join('')}</ul></li>`;
 }).join('');
 return `<div class="intro-experience" aria-labelledby="experience-title"><div class="experience-heading"><h3 id="experience-title">(Experience)</h3><span>COMPANIES, PROJECTS &amp; COMMUNITIES</span></div><ul class="experience-list">${rows}</ul><div class="experience-footer"><a class="underlined-link" href="#about">Explore My Work <span>↗</span></a></div></div>`;
}
function personalIntro(){
 return `<section class="page-section personal-intro" id="about-intro">${sectionBar('01','About Me')}<h2 class="intro-lead">${escapeHtml(lifePrinciple)}</h2><div class="intro-layout"><figure class="intro-project intro-project--portrait"><img src="./assets/hokeem-portrait-light-20261018.webp" alt="Hokeem’s leopard persona in a black suit, standing upright with one hand lowering a round black hat" loading="lazy" decoding="async" width="720" height="1080"><figcaption>HOKEEM / THE PERSON BEHIND THE WORK</figcaption></figure>${experienceList()}</div></section>`;
}
function featuredWork(){
 const selected=projects.filter(p=>p.type==='product');
 return `<section class="page-section home-featured" id="selected-work" aria-labelledby="featured-heading">${sectionBar('02','Product Showcase')}<div class="featured-layout"><div class="featured-context"><span class="eyebrow">VIBE CODING / PRODUCT DEMOS</span><h2 id="featured-heading">Vibe-coded<br>Products</h2><p>Four products built around creator discovery, content production, and KOL collaboration.</p><a class="underlined-link" href="#work/product">Explore the Products <span>↗</span></a></div><div class="featured-stack">${selected.map((p,i)=>`<a class="featured-card" href="#project/${p.id}" style="--card-order:${i}" aria-label="Watch ${escapeHtml(p.title)} demo"><div class="featured-media" style="--featured-art:url('${p.image}')"><div class="featured-media__blur" aria-hidden="true"></div><span class="featured-media__crop"><img class="featured-media__image" src="${p.image}" alt="${escapeHtml(p.title)} product cover" loading="lazy" width="1440" height="1080"></span><span class="featured-media__open" aria-hidden="true">↗</span></div><div class="featured-meta"><span>(${pad(i+1)})</span><div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.subtitle)}</p></div><span class="featured-meta__type">PRODUCT DEMO</span></div></a>`).join('')}</div><div class="featured-all"><a class="featured-all__link" href="#work/product" aria-label="Explore all ${selected.length} product demos"><span class="featured-all__kicker">ALL PRODUCT DEMOS / ${pad(selected.length)}</span><strong>Explore All<br>Demos</strong><span class="featured-all__arrow" aria-hidden="true">↗</span></a></div></div></section>`;
}
function home(){
 const formats=[{type:'video',title:'Video Works',subtitle:'AI Visual Films / Short Dramas / Hypit',description:'AI visual films, short dramas, and production cases made with Hypit.',image:'./assets/aigc-amos-doodle-egg.webp'},{type:'image',title:'Images & Visuals',subtitle:'Editorial / Brand / Social',description:'Market stories, information cards, and visual series, available as full-size images.',image:'./assets/tradfi-01.webp'}];
 const creativeCards=formats.map((f,i)=>`<article class="personal-format-card"><span class="format-number">${pad(i+1)}</span><a class="format-image" href="#work/${f.type}" aria-label="Explore ${f.title}"><img src="${f.image}" alt="${f.title} / Selected Work" loading="lazy" width="960" height="640"></a><div class="format-copy"><h3><a href="#work/${f.type}">${f.title}</a></h3><p class="format-subtitle">${f.subtitle}</p><p>${f.description}</p><a class="format-link" href="#work/${f.type}">Explore ${count(f.type)} ${f.type==='image'?'Images':'Videos'} ↗</a></div></article>`).join('');
 const musicCard=`<article class="personal-format-card personal-format-card--upcoming"><span class="format-number">03</span><div class="format-image format-image--music" role="img" aria-label="Music projects coming soon"><span class="music-wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="music-cover-note">MUSIC / NEXT CHAPTER</span></div><div class="format-copy"><h3>Music</h3><p class="format-subtitle">Original Music / Coming Soon</p><p>Music projects will be added here once the work is ready to share.</p><span class="format-link format-link--pending">Coming Soon</span></div></article>`;
 return `<section class="hero hero--home">${brandCover('home')}<div class="home-hero-content"><div class="home-hero-intro"><span class="eyebrow">HOKEEM / VIBE CODING PRODUCTS &amp; AIGC VISUALS</span><p>Products.<br>Videos.<br>Visuals.</p><a class="underlined-link" href="#work">Explore Work <span>↗</span></a></div><div class="hero-signature"><h1>PORTFOLIO</h1></div></div></section>${personalIntro()}${featuredWork()}<section class="page-section personal-formats">${sectionBar('03','Creative Portfolio')}<h2 class="formats-heading">Films, visuals &amp; music.</h2><div class="format-list">${creativeCards}${musicCard}</div></section>`;
}
function media(p){
 if(p.type==='image')return `<button class="media-viewer media-viewer--image" type="button" data-image="${p.image}" data-title="${escapeHtml(p.title)}"><img src="${p.image}" alt="${escapeHtml(p.title)}" /><span>View full image ↗</span></button>`;
 return `<div class="video-player"><video class="inline-video" controls playsinline preload="metadata" poster="${p.image}" aria-label="${escapeHtml(p.title)}" data-aspect="${p.aspect}" data-fallback="${p.videoWebm || ''}"><source src="${p.video}" type="video/mp4">${p.videoWebm?`<source src="${p.videoWebm}" type="video/webm">`:''}Your browser does not support embedded video.</video><div class="video-player__links"><span class="video-status" role="status" aria-live="polite"></span><a href="${p.video}" target="_blank" rel="noopener noreferrer">Open video separately ↗</a></div></div>`;
}
function detail(p){
 const others=projects.filter(x=>x.id!==p.id&&x.group===p.group).slice(0,p.type==='image'?6:2);
 return `<section class="hero hero--detail"><div class="hero__image" style="background-image:url('${p.image}')"></div><div class="hero__content hero__content--detail"><span>${typeName[p.type]} / ${escapeHtml(p.groupTitle)}</span><h1>${escapeHtml(p.title)}</h1><div class="hero__detail-bottom"><span>${escapeHtml(p.source)}</span><a href="#work/${p.type}">All ${typeLabel[p.type]} ↗</a></div></div></section><section class="page-section detail-section">${sectionBar('01','Project Overview')}<div class="detail-intro"><p>${escapeHtml(p.description)}</p><dl><dt>FORMAT</dt><dd>${typeLabel[p.type]}</dd><dt>COLLECTION</dt><dd>${escapeHtml(p.groupTitle)}</dd><dt>SOURCE</dt><dd>${escapeHtml(p.source)}</dd></dl></div><div class="detail-media ${p.aspect==='portrait'?'detail-media--portrait':''}">${media(p)}</div><a class="back-link" href="#work/${p.type}">← Back to ${typeLabel[p.type]}</a></section>${others.length?`<section class="page-section related-work">${sectionBar('02','Related Work')}<div class="group-heading"><h2>Related Work</h2></div><div class="work-grid ${p.type==='image'?'work-grid--images':''}">${others.map(card).join('')}</div></section>`:''}`;
}
function careerArticle(entry){
 const name=entry.name,brands=entry.brands;
 return `<li class="career-entry" data-start="${entry.start}"><div class="career-entry__date">${escapeHtml(entry.dates)}</div><div class="career-entry__copy"><h3>${escapeHtml(name)}</h3><p class="career-entry__role">${escapeHtml(entry.role)}</p><p class="career-entry__summary">${escapeHtml(entry.summary)}</p></div>${brands.length?`<div class="career-entry__brands${brands.length>1?' career-entry__brands--multiple':''}">${brands.map(id=>`<div class="career-brand">${brandTile(id,brands.length>1?(homebarNames[id]||name):name)}${experienceBadge(brandTypes[id])}</div>`).join('')}</div>`:''}</li>`;
}
function about(){
 const records=[...career.roles.map(entry=>({...entry,name:entry.company,brands:[entry.brand]})),...career.projects];
 // Match the selected homepage chapters in the exact order supplied by the user.
 const entries=career.timeline.map(chapter=>{
  const record=records.find(entry=>entry.start===chapter.start&&entry.brands.includes(chapter.brands[0]));
  if(!record)throw new Error('Missing experience: '+chapter.name);
  return record;
 });
 const years=[...new Set(entries.map(entry=>entry.start.slice(0,4)))];
 const chronology=years.map(year=>`<section class="career-year" data-year="${year}" aria-labelledby="career-year-${year}"><h2 class="career-year__title" id="career-year-${year}">${year}</h2><ul class="career-list">${entries.filter(entry=>entry.start.startsWith(year)).map(careerArticle).join('')}</ul></section>`).join('');
 return pageHero('About Hokeem', 'Who I am, and what I’ve done.')+`
 <section class="page-section personal-bio">${sectionBar('01','About Me')}
  <div class="personal-bio__layout"><h2>My Guiding <br>Principles</h2><div><p>${escapeHtml(lifePrinciple)}</p><a class="underlined-link" href="#work">View My Portfolio <span>↗</span></a></div></div>
 </section>
 <section class="page-section career-section career-compact" id="career-experience">${sectionBar('02','Life & Work')}${chronology}</section>`;
}
function contact(){return `<section class="hero hero--contact">${brandCover('contact')}<div class="contact-screen"><span>HOKEEM / CONTACT</span><h1>Let's<br>connect.</h1><div class="contact-person"><img src="./assets/hokeem-avatar-light-20261018.webp" alt="Denghaoqing avatar" width="192" height="154"><div><span>YOU'RE REACHING</span><strong>Denghaoqing</strong></div></div><div class="contact-screen__links"><div class="contact-method"><span>WECHAT</span><strong>dhq159162</strong><button type="button" data-copy="dhq159162" aria-label="Copy WeChat ID dhq159162">Copy ID ↗</button></div><a class="contact-method" href="https://t.me/hokeemDeng" target="_blank" rel="noopener noreferrer" aria-label="Message @hokeemDeng on Telegram"><span>TELEGRAM</span><strong>@hokeemDeng</strong><em>Open Telegram ↗</em></a></div><p class="contact-feedback" role="status" aria-live="polite"></p></div></section>`;}
function route(){
 let hash;try{hash=decodeURIComponent(location.hash.slice(1))||'home';}catch{hash='home';}
 let [page,id,groupId]=hash.split('/');
 if(page==='work'){
  const aliases={'aigc-brand-films':'ai-visual-films','aigc-visual-films':'ai-visual-films','ranking-video':'hypit-production','tool-video':'hypit-production','hotcoin-x-social':'selected-images','image-post':'selected-images'};
  if(id==='video'&&groupId==='game-video'){id='game';groupId='games';}
  groupId=aliases[groupId]||groupId;
 }
 const p=page==='project'?projects.find(x=>x.id===id):null;
 if(page==='work'){activeType=portfolioTypes.includes(id)?id:'all';activeGroup=projects.some(x=>x.group===groupId&&(activeType==='all'||x.type===activeType))?groupId:'all';}
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
 document.getElementById('group-filters').hidden=activeType!=='video';
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
