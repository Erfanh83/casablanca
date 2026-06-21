'use strict';

/* ── Gallery images ─────────────────────────────── */
const FALLBACK_IMG='assets/images/placeholder.svg';
const GALLERY_IMAGES=[
  'assets/images/gallery/g01.jpg',
  'assets/images/gallery/g02.jpg',
  'assets/images/gallery/g03.jpg',
  'assets/images/gallery/g04.jpg',
  'assets/images/gallery/g05.jpg',
  'assets/images/gallery/g06.jpg',
  'assets/images/gallery/g08.jpg',
  'assets/images/gallery/g09.jpg',
  'assets/images/gallery/g10.jpg',
  'assets/images/gallery/g12.jpg',
];

/* ── Populate gallery rail ───────────────────────── */
(function(){
  const track=document.getElementById('galTrack');
  if(!track)return;
  const eye='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>';
  track.innerHTML=GALLERY_IMAGES.map((src,i)=>`
    <button class="gtile" type="button" onclick="openViewer(${i})" aria-label="نمایش تصویر ${i+1}">
      <img src="${src}" alt="گالری کازابلانکا" loading="${i<3?'eager':'lazy'}"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"/>
      <div class="gtile-ov"></div>
      <div class="gtile-bdr"></div>
      <div class="gtile-num">${String(i+1).padStart(2,'0')} / ${String(GALLERY_IMAGES.length).padStart(2,'0')}</div>
      <div class="gtile-cap"><b>Casablanca</b><span class="gtile-eye">${eye}</span></div>
    </button>`).join('');
})();

/* ── Scroll-driven horizontal gallery (pin + translate) ── */
function initGalleryScroll(){
  const stage=document.getElementById('galStage');
  const track=document.getElementById('galTrack');
  if(!stage||!track)return;
  if(typeof gsap==='undefined'||typeof ScrollTrigger==='undefined'||window.innerWidth<=860)return;
  const nh=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nh'))||78;
  const dist=()=>Math.max(0,track.scrollWidth-window.innerWidth);
  if(dist()<=0)return;
  stage.classList.add('pinned');
  gsap.to(track,{
    x:()=>-dist(),
    ease:'none',
    scrollTrigger:{
      trigger:stage,
      start:'top '+nh+'px',
      end:()=>'+='+dist(),
      scrub:1,
      pin:true,
      anticipatePin:1,
      invalidateOnRefresh:true,
    }
  });
}

/* ── Page Loader ────────────────────────────────── */
(function(){
  const loader=document.getElementById('loader');
  if(!loader)return;
  const bar=document.getElementById('loader-bar');
  const logo=loader.querySelector('.loader-logo');

  requestAnimationFrame(()=>{ if(logo)logo.classList.add('in'); });

  let p=0;
  const iv=setInterval(()=>{
    p+=Math.random()*16;
    if(p>90){p=90;clearInterval(iv);}
    if(bar)bar.style.width=p+'%';
  },70);

  window.addEventListener('load',()=>{
    clearInterval(iv);
    if(bar){bar.style.transition='width .15s linear';bar.style.width='100%';}
    setTimeout(()=>{
      if(typeof gsap!=='undefined'){
        gsap.to(loader,{yPercent:-100,duration:.9,ease:'power4.inOut',onComplete:()=>{loader.remove();heroReveal();}});
      }else{
        loader.style.display='none';
        heroReveal();
      }
    },380);
  });
})();

/* ── Cursor ─────────────────────────────────────── */
(function(){
  const d=document.getElementById('cd'),r=document.getElementById('cr');
  if(!d||!window.matchMedia('(hover:hover)').matches)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;d.style.left=mx+'px';d.style.top=my+'px';});
  (function L(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;r.style.left=rx+'px';r.style.top=ry+'px';requestAnimationFrame(L);})();
  document.addEventListener('mouseover',e=>{
    if(e.target.closest('a,button')){r.style.width='52px';r.style.height='52px';r.style.borderColor='var(--gold)';d.style.transform='translate(-50%,-50%) scale(1.8)';}
  });
  document.addEventListener('mouseout',e=>{
    if(e.target.closest('a,button')){r.style.width='30px';r.style.height='30px';r.style.borderColor='rgba(201,168,124,.4)';d.style.transform='translate(-50%,-50%) scale(1)';}
  });
  document.addEventListener('mouseleave',()=>{d.style.opacity='0';r.style.opacity='0';});
  document.addEventListener('mouseenter',()=>{d.style.opacity='1';r.style.opacity='1';});
})();

/* ── Navbar ─────────────────────────────────────── */
(function(){
  const nav=document.getElementById('nav');
  window.addEventListener('scroll',()=>nav.classList.toggle('bg',window.scrollY>30),{passive:true});
})();

/* ── Mobile menu ────────────────────────────────── */
(function(){
  const burger=document.getElementById('nburger');
  const mmenu=document.getElementById('mmenu');
  const closeBtn=document.getElementById('mmClose');
  function openMenu(){mmenu.classList.add('open');burger.classList.add('open');document.body.style.overflow='hidden';}
  function closeMenu(){burger.classList.remove('open');mmenu.classList.remove('open');document.body.style.overflow='';}
  burger.addEventListener('click',()=>mmenu.classList.contains('open')?closeMenu():openMenu());
  closeBtn.addEventListener('click',closeMenu);
  mmenu.querySelectorAll('.mm-link,.mm-cta').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mmenu.classList.contains('open'))closeMenu();});
})();

/* ── Hero reveal (called after loader exits) ─────── */
function heroReveal(){
  if(typeof gsap==='undefined'){
    document.querySelectorAll('.h-char,.h-label,.h-tag,.h-btns,#hscroll').forEach(el=>{el.style.opacity='1';el.style.transform='none';});
    const hl=document.getElementById('hline');
    if(hl){hl.style.width='40px';hl.style.opacity='1';}
    return;
  }
  const tl=gsap.timeline({defaults:{ease:'power4.out'}});
  tl.to('.h-label',  {opacity:1,y:0,duration:.8},0)
    .to('.h-char',   {opacity:1,y:0,duration:1,stagger:.045},0.18)
    .to('#hline',    {width:40,opacity:1,duration:.7},.72)
    .to('.h-tag',    {opacity:1,y:0,duration:.85},.62)
    .to('.h-btns',   {opacity:1,y:0,duration:.8},.82)
    .to('#hscroll',  {opacity:1,duration:.6},1.05);
}

/* ── Scroll reveals ──────────────────────────────── */
function initReveal(){
  if(typeof gsap==='undefined'||typeof ScrollTrigger==='undefined'){
    document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-s').forEach(el=>{el.style.opacity='1';el.style.transform='none';});
    return;
  }
  const trig=el=>({trigger:el,start:'top 87%',once:true});
  gsap.utils.toArray('.rv').forEach(el=>{
    const d=parseFloat(el.style.getPropertyValue('--d')||0);
    gsap.to(el,{opacity:1,y:0,duration:1,delay:d,ease:'power3.out',scrollTrigger:trig(el)});
  });
  gsap.utils.toArray('.rv-l').forEach(el=>{
    gsap.to(el,{opacity:1,x:0,duration:1.1,ease:'power3.out',scrollTrigger:trig(el)});
  });
  gsap.utils.toArray('.rv-r').forEach(el=>{
    gsap.to(el,{opacity:1,x:0,duration:1.1,ease:'power3.out',scrollTrigger:trig(el)});
  });
  gsap.utils.toArray('.rv-s').forEach(el=>{
    const d=parseFloat(el.style.getPropertyValue('--d')||0);
    gsap.to(el,{opacity:1,scale:1,duration:1.1,delay:d,ease:'power3.out',scrollTrigger:trig(el)});
  });
}

/* ── Scrubbed parallax on story image + features ── */
function initScrubParallax(){
  if(typeof gsap==='undefined'||typeof ScrollTrigger==='undefined')return;

  gsap.to('#storyVisual',{
    y:50,ease:'none',
    scrollTrigger:{trigger:'#story',start:'top bottom',end:'bottom top',scrub:1.8}
  });

  const ftImg=document.querySelector('.ft-img img');
  if(ftImg){
    gsap.to(ftImg,{
      yPercent:-8,ease:'none',
      scrollTrigger:{trigger:'#features',start:'top bottom',end:'bottom top',scrub:1.5}
    });
  }
}

/* ── Per-word 3D cascade reveal for display headings ── */
function initHeadingReveal(){
  const heads=document.querySelectorAll('.reveal-h');
  if(!heads.length)return;

  heads.forEach(h=>{
    const counter={i:0};
    const wrap=(node,parent)=>{
      if(node.nodeType===3){ // text node → split into words
        node.textContent.split(/(\s+)/).forEach(tok=>{
          if(tok==='')return;
          if(/^\s+$/.test(tok)){parent.appendChild(document.createTextNode(tok));return;}
          const outer=document.createElement('span');outer.className='rw';
          const inner=document.createElement('span');inner.className='rw-i';
          inner.style.setProperty('--i',counter.i++);
          inner.textContent=tok;
          outer.appendChild(inner);parent.appendChild(outer);
        });
      }else if(node.nodeType===1){ // element (e.g. <em>) → recurse, keep wrapper
        const clone=node.cloneNode(false);
        parent.appendChild(clone);
        Array.from(node.childNodes).forEach(c=>wrap(c,clone));
      }
    };
    const frag=document.createDocumentFragment();
    Array.from(h.childNodes).forEach(n=>wrap(n,frag));
    h.innerHTML='';
    h.appendChild(frag);
  });

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
    });
  },{threshold:.3});
  heads.forEach(h=>io.observe(h));
}

/* ── Counters ────────────────────────────────────── */
function initCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=parseInt(el.dataset.count);
    const io=new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting)return;
      io.disconnect();
      let start=null;
      (function step(ts){
        if(!start)start=ts;
        const p=Math.min((ts-start)/1800,1);
        el.textContent=Math.floor((1-Math.pow(1-p,3))*target).toLocaleString('fa-IR');
        if(p<1)requestAnimationFrame(step);
        else el.textContent=target.toLocaleString('fa-IR');
      })(performance.now());
    },{threshold:.5});
    io.observe(el);
  });
}

/* ── Ring parallax (RAF-throttled) ──────────────── */
function initParallax(){
  const rings=document.querySelectorAll('.h-ring');
  let ticking=false,sy=0;
  window.addEventListener('scroll',()=>{
    sy=window.scrollY;
    if(!ticking){
      requestAnimationFrame(()=>{
        rings.forEach((r,i)=>r.style.transform=`translate(-50%,calc(-50% + ${sy*(0.04+i*.04)}px))`);
        ticking=false;
      });
      ticking=true;
    }
  },{passive:true});
}

/* ── Story cinematic video ───────────────────────── */
function initStoryVideo(){
  const wrap=document.getElementById('storyVisual');
  const video=document.getElementById('storyVideo');
  if(!wrap||!video)return;
  video.play().catch(()=>{});
  if(window.matchMedia('(hover:hover)').matches){
    wrap.addEventListener('mousemove',e=>{
      const rect=wrap.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      wrap.style.transform=`perspective(1000px) rotateY(${x*7}deg) rotateX(${-y*7}deg)`;
    });
    wrap.addEventListener('mouseleave',()=>{wrap.style.transform='perspective(1000px) rotateY(0) rotateX(0)';});
  }
}

/* ── Magnetic menu cards ─────────────────────────── */
function initMagneticCards(){
  document.querySelectorAll('.mc-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const rect=card.getBoundingClientRect();
      const x=((e.clientX-rect.left)/rect.width-.5)*14;
      const y=((e.clientY-rect.top)/rect.height-.5)*9;
      card.style.transform=`perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.01)`;
    });
    card.addEventListener('mouseleave',()=>{card.style.transform='';});
  });
}

/* ── Lightbox ────────────────────────────────────── */
const lb=document.getElementById('lightbox');
const lbGrid=document.getElementById('lbGrid');
let lbBuilt=false;

function buildLightbox(){
  if(lbBuilt)return;
  lbBuilt=true;
  lbGrid.innerHTML=GALLERY_IMAGES.map((src,i)=>`
    <div class="lb-item" style="transition-delay:${i*.04}s" onclick="openViewer(${i})">
      <img src="${src}" alt="گالری کازابلانکا" loading="lazy"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"/>
    </div>`).join('');
  lbGrid.querySelectorAll('.lb-item').forEach(item=>{
    item.addEventListener('mousemove',e=>{
      const rect=item.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      item.style.transform=`scale(1.03) perspective(600px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`;
    });
    item.addEventListener('mouseleave',()=>{item.style.transform='';});
  });
}

function openLightbox(){
  buildLightbox();
  void lb.offsetHeight; // force reflow so CSS transitions fire
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  lb.classList.remove('open');
  if(!viewer.classList.contains('open'))document.body.style.overflow='';
}
document.getElementById('lbClose').addEventListener('click',closeLightbox);
window.openLightbox=openLightbox;

/* ── Single image viewer ─────────────────────────── */
const viewer=document.getElementById('viewer');
const vwImg=document.getElementById('vwImg');
const vwCounter=document.getElementById('vwCounter');
let currentIdx=0;

function openViewer(idx){
  currentIdx=idx;updateViewer();
  viewer.classList.add('open');document.body.style.overflow='hidden';
}
function updateViewer(){
  vwImg.src=GALLERY_IMAGES[currentIdx];
  vwImg.onerror=function(){this.onerror=null;this.src=FALLBACK_IMG;};
  vwCounter.textContent=`${String(currentIdx+1).padStart(2,'0')} / ${String(GALLERY_IMAGES.length).padStart(2,'0')}`;
}
function closeViewer(){
  viewer.classList.remove('open');
  if(!lb.classList.contains('open'))document.body.style.overflow='';
}
function nextImg(){currentIdx=(currentIdx+1)%GALLERY_IMAGES.length;updateViewer();}
function prevImg(){currentIdx=(currentIdx-1+GALLERY_IMAGES.length)%GALLERY_IMAGES.length;updateViewer();}

document.getElementById('vwClose').addEventListener('click',closeViewer);
document.getElementById('vwNext').addEventListener('click',nextImg);
document.getElementById('vwPrev').addEventListener('click',prevImg);
document.addEventListener('keydown',e=>{
  if(viewer.classList.contains('open')){
    if(e.key==='Escape')closeViewer();
    if(e.key==='ArrowLeft')nextImg();
    if(e.key==='ArrowRight')prevImg();
  }else if(lb.classList.contains('open')&&e.key==='Escape')closeLightbox();
});
window.openViewer=openViewer;

/* ── Lenis smooth scroll ─────────────────────────── */
function initLenis(){
  if(typeof Lenis==='undefined')return;
  const lenis=new Lenis({
    duration:1.4,
    easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),
    smoothTouch:false,
    touchMultiplier:2,
  });
  if(typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined'){
    gsap.ticker.add(t=>lenis.raf(t*1000));
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);
  }else{
    (function raf(t){lenis.raf(t);requestAnimationFrame(raf);})(performance.now());
  }
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const target=document.querySelector(a.getAttribute('href'));
      if(target){e.preventDefault();lenis.scrollTo(target,{offset:-78,duration:1.6});}
    });
  });
  window._lenis=lenis;
}

/* ── Boot ────────────────────────────────────────── */
window.addEventListener('load',()=>{
  const v=document.getElementById('hero-video');
  if(v)v.play().catch(()=>{});

  initCounters();
  initParallax();
  initStoryVideo();
  initMagneticCards();
  initHeadingReveal();

  if(typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined'){
    gsap.registerPlugin(ScrollTrigger);
    initReveal();
    initScrubParallax();
    initGalleryScroll();
  }

  initLenis();
});
