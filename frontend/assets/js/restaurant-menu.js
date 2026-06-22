(function(){
  const d=document.getElementById('cd'),r=document.getElementById('cr');
  if(!d||!window.matchMedia('(hover:hover)').matches)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;d.style.left=mx+'px';d.style.top=my+'px';});
  (function L(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;r.style.left=rx+'px';r.style.top=ry+'px';requestAnimationFrame(L);})();
})();

(function(){
  const burger=document.getElementById('nburger');
  const mmenu=document.getElementById('mmenu');
  const closeBtn=document.getElementById('mmClose');
  function openMenu(){mmenu.classList.add('open');burger.classList.add('open');document.body.style.overflow='hidden';}
  function closeMenu(){burger.classList.remove('open');mmenu.classList.remove('open');document.body.style.overflow='';}
  burger.addEventListener('click',()=>{mmenu.classList.contains('open')?closeMenu():openMenu();});
  closeBtn.addEventListener('click',closeMenu);
  mmenu.querySelectorAll('.mm-link,.mm-cta').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mmenu.classList.contains('open'))closeMenu();});
})();

function escHtml(s){
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

document.addEventListener('error',function(e){
  const el=e.target;
  if(el.tagName!=='IMG')return;
  if(el.dataset.fallback){el.src=el.dataset.fallback;el.removeAttribute('data-fallback');}
  else if(el.dataset.hide){el.style.display='none';}
},true);

let allData=[], filtered=[];

async function fetchMenu(){
  try{
    const res=await fetch('/api/menu/restaurant/');
    if(!res.ok) throw new Error('خطا در دریافت منو');
    const data=await res.json();
    allData=data.map(cat=>({category_fa:cat.name_fa,category_en:cat.name_en||'',items:cat.items}));
    filtered=allData;
  }catch(e){console.error('خطای منو:',e);}
  finally{
    document.getElementById('loading').style.display='none';
    document.getElementById('cats-wrap').style.display='block';
    render(allData);
  }
}

function render(data){
  const wrap=document.getElementById('cats-wrap');
  const nav=document.getElementById('cat-nav-inner');
  wrap.innerHTML='';nav.innerHTML='';
  if(!data.length){wrap.innerHTML='<div class="no-res">هیچ آیتمی یافت نشد.</div>';return;}
  data.forEach((cat,ci)=>{
    const btn=document.createElement('button');
    btn.className='cat-btn'+(ci===0&&filtered===allData?' active':'');
    btn.textContent=cat.category_fa;
    btn.onclick=()=>scrollToCat(ci);
    nav.appendChild(btn);
    const sec=document.createElement('section');
    sec.className='cat-section';sec.id='cat-'+ci;
    const items=cat.items.filter(it=>it.is_visible!==false);
    sec.innerHTML=`<div class="cat-head"><h2 class="cat-fa">${escHtml(cat.category_fa)}</h2>${cat.category_en?`<span class="cat-en">${escHtml(cat.category_en)}</span>`:''}<span class="cat-count">${items.length} آیتم</span></div><div class="items-grid" id="grid-${ci}">${items.map(item=>cardHTML(item,cat.category_fa)).join('')}</div>`;
    wrap.appendChild(sec);
  });
  animateCards();
  setupCatArrows();
  setTimeout(setupCatArrows,350);
}

function setupCatArrows(){
  const navWrap=document.querySelector('.cat-nav');
  const inner=document.getElementById('cat-nav-inner');
  const prev=document.getElementById('catPrev');
  const next=document.getElementById('catNext');
  if(!navWrap||!inner||!prev||!next)return;
  const step=()=>Math.max(180,inner.clientWidth*0.7);
  if(!setupCatArrows._wired){
    next.addEventListener('click',()=>inner.scrollBy({left:-step(),behavior:'smooth'}));
    prev.addEventListener('click',()=>inner.scrollBy({left:step(),behavior:'smooth'}));
    window.addEventListener('resize',()=>setupCatArrows(),{passive:true});
    setupCatArrows._wired=true;
  }
  navWrap.classList.toggle('show-arrows',inner.scrollWidth-inner.clientWidth>8);
}

function cardHTML(item,catFa){
  const price=parseInt(item.price||0).toLocaleString('fa-IR');
  const seed=escHtml((item.name_en||item.name_fa||'food').replace(/\s+/g,'-').toLowerCase());
  const img=escHtml(item.image_url||`https://picsum.photos/seed/${seed}-cb/400/300`);
  const bNew=item.is_new?'<span class="bdg bdg-new">جدید</span>':'';
  const bSp=item.is_special?'<span class="bdg bdg-sp">ویژه</span>':'';
  const itemData=encodeURIComponent(JSON.stringify(item));
  const catData=encodeURIComponent(catFa);
  return `<article class="item-card" data-item="${itemData}" data-cat="${catData}"><div class="item-img"><img src="${img}" alt="${escHtml(item.name_fa)}" loading="lazy" data-fallback="https://picsum.photos/seed/${seed}2/400/300"/>${bNew||bSp?`<div class="item-badges">${bNew}${bSp}</div>`:''}</div><div class="item-body"><h3 class="item-fa">${escHtml(item.name_fa)}</h3>${item.name_en?`<p class="item-en">${escHtml(item.name_en)}</p>`:''} ${item.description?`<p class="item-desc">${escHtml(item.description)}</p>`:''}</div><div class="item-foot"><span class="item-price">${price}<small>هزار تومان</small></span><span class="item-plus">+</span></div></article>`;
}

function animateCards(){
  if(typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined'){
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.item-card').forEach((c,i)=>{
      gsap.fromTo(c,
        {opacity:0,y:28,scale:.97},
        {opacity:1,y:0,scale:1,duration:.7,delay:(i%6)*.06,ease:'power3.out',
         scrollTrigger:{trigger:c,start:'top 90%',once:true}});
    });
  } else {
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='none';io.unobserve(e.target);}});
    },{threshold:.08});
    document.querySelectorAll('.item-card').forEach((c,i)=>{
      c.style.opacity='0';c.style.transform='translateY(24px)';
      c.style.transition=`opacity .5s ${(i%6)*.05}s,transform .5s ${(i%6)*.05}s cubic-bezier(.16,1,.3,1)`;
      io.observe(c);
    });
  }
}

function scrollToCat(idx){
  const el=document.getElementById('cat-'+idx);if(!el)return;
  const target=el.getBoundingClientRect().top+window.scrollY-130;
  if(window._lenis)window._lenis.scrollTo(target,{duration:1.4});
  else window.scrollTo({top:target,behavior:'smooth'});
  setActiveBtn(idx);
}
function setActiveBtn(idx){document.querySelectorAll('.cat-btn').forEach((b,i)=>b.classList.toggle('active',i===idx));}

(function(){
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const idx=parseInt(e.target.id.replace('cat-',''));if(!isNaN(idx))setActiveBtn(idx);}});},{rootMargin:'-35% 0px -60% 0px'});
  setTimeout(()=>{document.querySelectorAll('.cat-section').forEach(s=>io.observe(s));},600);
})();

(function(){
  const inp=document.getElementById('search-inp');
  const clr=document.getElementById('search-clear');
  inp.addEventListener('input',()=>{
    const q=inp.value.trim();clr.style.display=q?'block':'none';
    if(!q){filtered=allData;render(allData);return;}
    const ql=q.toLowerCase();
    filtered=allData.map(cat=>({...cat,items:cat.items.filter(it=>it.name_fa.includes(q)||(it.name_en||'').toLowerCase().includes(ql)||(it.description||'').includes(q))})).filter(c=>c.items.length);
    render(filtered);
  });
  clr.addEventListener('click',()=>{inp.value='';clr.style.display='none';filtered=allData;render(allData);inp.focus();});
})();

function openModal(item,catName){
  const modal=document.getElementById('modal');
  const seed=(item.name_en||item.name_fa||'food').replace(/\s+/g,'-').toLowerCase();
  const mImg=document.getElementById('m-img');
  const mUrl=item.image_url||`https://picsum.photos/seed/${seed}-cb/500/280`;
  mImg.src=mUrl;
  mImg.parentElement.style.setProperty('--mimg',`url("${mUrl.replace(/"/g,'%22')}")`);
  document.getElementById('m-cat').innerHTML=`<span class="lbl-dot" style="width:5px;height:5px;border-radius:50%;background:var(--gold);flex-shrink:0"></span>${escHtml(catName||'')}`;
  document.getElementById('m-fa').textContent=item.name_fa||'';
  document.getElementById('m-en').textContent=item.name_en||'';
  document.getElementById('m-desc').textContent=item.description||'—';
  document.getElementById('m-price').textContent=parseInt(item.price||0).toLocaleString('fa-IR')+' هزار تومان';
  document.getElementById('m-badges').innerHTML=(item.is_new?'<span class="bdg bdg-new">جدید</span>':'')+(item.is_special?'<span class="bdg bdg-sp">ویژه</span>':'');
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}

document.getElementById('cats-wrap').addEventListener('click',function(e){
  const card=e.target.closest('.item-card');
  if(!card)return;
  try{
    const item=JSON.parse(decodeURIComponent(card.dataset.item));
    const cat=decodeURIComponent(card.dataset.cat);
    openModal(item,cat);
  }catch(_){}
});

document.getElementById('modal-ov').onclick=closeModal;
document.getElementById('modal-close').onclick=closeModal;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
function closeModal(){document.getElementById('modal').classList.remove('open');document.getElementById('modal').setAttribute('aria-hidden','true');document.body.style.overflow='';}

const btt=document.getElementById('btt');
window.addEventListener('scroll',()=>btt.classList.toggle('show',window.scrollY>400),{passive:true});
btt.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

document.addEventListener('DOMContentLoaded',()=>{
  fetchMenu();

  if(typeof Lenis!=='undefined'){
    const lenis=new Lenis({duration:1.3,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothTouch:false});
    if(typeof gsap!=='undefined'){
      gsap.ticker.add(t=>lenis.raf(t*1000));
      gsap.ticker.lagSmoothing(0);
    }else{
      (function raf(t){lenis.raf(t);requestAnimationFrame(raf);})(performance.now());
    }
    window._lenis=lenis;
  }

  if(typeof gsap!=='undefined'){
    gsap.from('.mh-lbl',{opacity:0,y:20,duration:.8,ease:'power3.out',delay:.15});
    gsap.from('.mh-title',{opacity:0,y:40,duration:1,ease:'power4.out',delay:.3});
    gsap.from('.mh-sub',{opacity:0,y:20,duration:.8,ease:'power3.out',delay:.55});
  }

  const nav=document.getElementById('nav');
  let lastY=0;
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    if(y>lastY+8&&y>140){nav.style.transform='translateY(-100%)';document.body.classList.add('nav-up');}
    else if(y<lastY-8){nav.style.transform='translateY(0)';document.body.classList.remove('nav-up');}
    lastY=y;
  },{passive:true});
});
