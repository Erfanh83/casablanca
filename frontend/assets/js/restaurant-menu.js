const MENU_DATA=[{"category_fa":"استیک","category_en":"Steak","items":[{"name_fa":"فیله مینیون","name_en":"Filet Mignon Steak","price":"1950","description":"350 گرم سر فیله گوساله، ساید سبزیجات و سیب زمینی اسلایسی، مارچوبه، سس قارچ، سس جرک، سس چمیچوری"},{"name_fa":"ریبای","name_en":"Ribeye","price":"2400","description":"600 گرم راسته گوساله با دنده، ساید سبزیجات و سیب زمینی اسلایسی، مارچوبه، سس قارچ، سس جرک، سس چمیچوری"},{"name_fa":"تی‌بن","name_en":"T_bone Steak","price":"2200","description":"450گرم ترکیب راسته و فیله گوساله، ساید سبزیجات و سیب زمینی اسلایسی، مارچوبه، سس قارچ، سس جرک، سس چمیچوری"},{"name_fa":"فیله گوساله","name_en":"Beef Tenderloin Steak","price":"1750","description":"350 گرم فیله گوساله، ساید سبزیجات و سیب زمینی اسلایسی، مارچوبه، سس قارچ، سس جرک، سس چمیچوری"},{"name_fa":"آنتروکوت","name_en":"Entrecote","price":"2100","description":"350 گرم راسته گوساله، ساید سیب زمینی، سس آنتروکوت"},{"name_fa":"راسته گوساله","name_en":"Veal Steak","price":"1700","description":"350 گرم راسته گوساله، ساید سبزیجات و سیب زمینی اسلایسی، مارچوبه، سس قارچ، سس جرک، سس چمیچوری"},{"name_fa":"چیکن","name_en":"Chicken Steak","price":"990","description":"300 گرم شنیسل مرغ، ساید سبزیجات و سیب زمینی اسلایسی، مارچوبه، سس قارچ، سس جرک، سس چمیچوری"}]},{"category_fa":"پیتزا دیترویت","category_en":"Detroit Pizza","items":[{"name_fa":"سیر و استیک","name_en":"Garlic & Steak","price":"1150","description":"راسته گوساله، خمیر تخمیری، پنیرپیتزا، زیتون سیاه، پیاز بنفش، سس آیولی"},{"name_fa":"پلد بیف","name_en":"Pulled Beef","price":"1150","description":"مغز ران گوساله، خمیر تخمیری، پنیر پیتزا، قارچ، پیاز کاراملی، سس جرک"},{"name_fa":"زبان سوجوک","name_en":"Calf tongue & Sucuk","price":"1190","description":"زبان گوساله، سوجوک، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس آیولی"},{"name_fa":"رست بیتو","name_en":"Roast Beeto","price":"1190","description":"مغز ران گوساله، خامه، قارچ، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، سس پستو"},{"name_fa":"میت ماشروم","name_en":"Meet Mashroom","price":"1090","description":"گوشت چرخ کرده گوساله، خمیر تخمیری، پنیر پیتزا، قارچ، زیتون سیاه، پیاز بنفش، سس جرک"},{"name_fa":"شکاری","name_en":"Predator","price":"980","description":"سوسیس شکاری، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس آیولی"},{"name_fa":"پانستا","name_en":"Pancetta","price":"1090","description":"بیکن پانستای اسموکی، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس بیانکا"},{"name_fa":"سالامی پپرونی","name_en":"Pepperoni Salami","price":"920","description":"سالامی تخمیری پپرونی، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، هالوپینو، سس رد بوفالو"},{"name_fa":"ترکی","name_en":"Turkey","price":"980","description":"گوشت سوییت شده بوقلمون، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس بیانکا"},{"name_fa":"چیکن پستو","name_en":"Chicken Pesto","price":"950","description":"شنیسل مرغ، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس پستو"},{"name_fa":"آلاپوک","name_en":"Ala Pok","price":"990","description":"شنیسل سوخاری، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس مارینارا"},{"name_fa":"نوستالژی","name_en":"Nostalgia","price":"900","description":"ژامبون گوشت و مرغ اسموکی، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، فلفل دلمه ای، سس مارینارا"}]},{"category_fa":"پیتزا رومانو","category_en":"Romano Pizza","items":[{"name_fa":"سیر و استیک","name_en":"","price":"1050","description":"راسته گوساله، خمیر تخمیری، پنیرپیتزا، زیتون سیاه، سس آیولی"},{"name_fa":"پولد بیف","name_en":"","price":"1050","description":"مغز ران گوساله، خمیر تخمیری، پنیر پیتزا، قارچ، زیتون سیاه، پیاز کاراملی"},{"name_fa":"زبان سوجوک","name_en":"","price":"1090","description":"زبان گوساله، سوجوک، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس آیولی"},{"name_fa":"رست بیتو کالزونه","name_en":"","price":"1090","description":"گوشت چرخ کرده گوساله، پنیر پیتزا، سس بشامل، قارچ، فلفل دلمه، سس بیانکا"},{"name_fa":"میت ماشروم","name_en":"Meet Mashroom","price":"990","description":"گوشت چرخ کرده گوساله، خمیر تخمیری، پنیر پیتزا، قارچ، زیتون سیاه، پیاز بنفش، سس جرک"},{"name_fa":"شکاری","name_en":"Predator","price":"890","description":"سوسیس شکاری، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس آیولی"},{"name_fa":"پانستا","name_en":"Pancetta","price":"990","description":"بیکن پانستای اسموکی، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس بیانکا"},{"name_fa":"سالامی پپرونی","name_en":"Pepperoni Salami","price":"820","description":"سالامی تخمیری پپرونی، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، هالوپینو، سس رد بوفالو"},{"name_fa":"ترکی","name_en":"Turkey","price":"890","description":"گوشت سوییت شده بوقلمون، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس بیانکا"},{"name_fa":"چیکن پستو","name_en":"Chicken Pesto","price":"850","description":"شنیسل مرغ، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس پستو"},{"name_fa":"آلاپوک","name_en":"Ala pok","price":"950","description":"شنیسل سوخاری، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، سس مارینارا"},{"name_fa":"نوستالژی","name_en":"Nostalgia","price":"800","description":"ژامبون گوشت و مرغ اسموکی، خمیر تخمیری، پنیر پیتزا، زیتون سیاه، قارچ، فلفل دلمه ای، سس مارینارا"},{"name_fa":"مارگاریتا","name_en":"","price":"650","description":"گوجه گیلاسی، خمیر تخمیری، پنیر پیتزا، ریحان ایتالیایی، سس مارینارا"},{"name_fa":"سبزیجات","name_en":"","price":"700","description":"مخلوط سبزیجات، خمیر تخمیری، زیتون واشری، قارچ، پنیر پیتزا، سس بیانکا"}]},{"category_fa":"پاستا","category_en":"Pasta","items":[{"name_fa":"چیکن آلفردو","name_en":"Chicken Alfredo","price":"650","description":"شنیسل مرغ، پاستای فتوچینه، پنیر پارمژان، سس آلفردو"},{"name_fa":"شریمپ آلفردو","name_en":"Shrimp Alfredo","price":"700","description":"میگو، پاستای فتوچینه، پنیر پارمژان، سس آلفردو"},{"name_fa":"استیک آلفردو","name_en":"Steak Alfredo","price":"750","description":"راسته گوساله، پاستای فتوچینه، پنیر پارمژان، سس آلفردو"},{"name_fa":"چیکن پستو","name_en":"Chicken Pesto","price":"700","description":"شنیسل مرغ، پاستای فتوچینه، پنیر پارمژان، سس پستو"},{"name_fa":"شریمپ پستو","name_en":"Shrimp Pesto","price":"750","description":"میگو، پاستای فتوچینه، پنیر پارمژان، سس پستو"},{"name_fa":"استیک پستو","name_en":"Steak pesto","price":"800","description":"راسته گوساله، پاستای فتوچینه، پنیر پارمژان، سس پستو"},{"name_fa":"چیکن چیپوتله","name_en":"Chicken Chipotle","price":"650","description":"شنیسل مرغ، پاستای فتوچینه، پنیر پارمژان، سس چیپوتله"},{"name_fa":"شریمپ چیپوتله","name_en":"Shrimp Chipotle","price":"700","description":"میگو، پاستای فتوچینه، پنیر پارمژان، سس چیپوتله"},{"name_fa":"استیک چیپوتله","name_en":"Steak Chipotle","price":"750","description":"راسته گوساله، پاستای فتوچینه، پنیر پارمژان، سس چیپوتله"},{"name_fa":"بلونز","name_en":"Bolognese","price":"800","description":"گوشت چرخ کرده گوساله، پاستای فتوچینه، پنیر پارمژان، سس مارینارا"},{"name_fa":"لازانیا","name_en":"Lasagna","price":"900","description":"گوشت چرخ کرده گوساله، پنیر پیتزا، قارچ، فلفل دلمه، سس بشامل، سس بیانکا"}]},{"category_fa":"برگر","category_en":"Burger","items":[{"name_fa":"کلاسیک برگر","name_en":"Classic Burger","price":"750","description":"گوشت گرم گوساله، کاهو فرانسوی، گوجه، خیارشور، نان مک، ساید سیب زمینی، سس زستی"},{"name_fa":"باس برگر","name_en":"Boss Burger","price":"1090","description":"گوشت گرم گوساله، راسته گوساله استیکی، پیاز و گردوی کاراملی، کاهو فرانسوی، نان مک، ساید سیب زمینی، سس جرک"},{"name_fa":"تریپل چیز برگر","name_en":"Triple Cheeseburger","price":"1050","description":"گوشت گرم گوساله، دیپ چدار، پنیر کبابی، پنیر سوخاری، پیاز سوخاری، کاهو فرانسوی، نان مک، ساید سیب زمینی، سس زستی"},{"name_fa":"مکزیکن فیوژن برگر","name_en":"Mexican Fusion","price":"990","description":"گوشت گرم گوساله، سالامی تخمیری پپرونی، چوریتسو، دیپ چدار، هالوپینو، کاهو فرانسوی، نان مک، ساید سیب زمینی، سس زستی"},{"name_fa":"پانستا برگر","name_en":"Pancetta Burger","price":"910","description":"گوشت گرم گوساله، بیکن پانستای اسموکی، پنیر سوخاری، کاهو فرانسوی، نان مک، ساید سیب زمینی، سس زستی"},{"name_fa":"گلدن کراست","name_en":"Golden Crust","price":"850","description":"گوشت گرم گوساله، پنیر گودا، دیپ چدار، پنیر پیتزا، قارچ، نان مک، ساید سیب زمینی، سس زستی"},{"name_fa":"میدنایت برگر","name_en":"Midnight Burger","price":"850","description":"گوشت گرم گوساله، سالامی پنیری، کاهو فرانسوی، نان مک، ساید سیب زمینی، سس زستی"},{"name_fa":"کریسپی چیکن برگر","name_en":"Crispy Chicken","price":"700","description":"شنیسل مرغ سوخاری، پنیر گودا، قارچ و پنیر، کاهو فرانسوی، نان مک، ساید سیب زمینی، سس زستی"}]},{"category_fa":"ساندویچ","category_en":"Sandwich","items":[{"name_fa":"استیک","name_en":"Steak","price":"880","description":"راسته گوساله، پنیر پیتزا، قارچ بلانچ شده، کاهوی فرانسوی، نان باگت فرانسوی، سس آیولی"},{"name_fa":"پلد بیف","name_en":"Pulled beef","price":"920","description":"مغز ران گوساله، پنیر پیتزا، قارچ بلانچ شده، کاهوی فرانسوی، پیاز کاراملی، نان باگت فرانسوی، سس جرک"},{"name_fa":"زبان","name_en":"Tongue","price":"900","description":"زبان گوساله، پنیر پیتزا، قارچ بلانچ شده، کاهوی فرانسوی، نان باگت فرانسوی، سس بیانکا"},{"name_fa":"پانستا","name_en":"Pancetta","price":"750","description":"بیکن پانستای اسموکی، پنیر پیتزا، قارچ بلانچ شده، کاهوی فرانسوی، نان باگت فرانسوی، سس زستی"},{"name_fa":"کراکف","name_en":"Krakov","price":"650","description":"کراکف، پنیر پیتزا، قارچ بلانچ شده، کاهوی فرانسوی، نان باگت فرانسوی، سس زستی"}]},{"category_fa":"استریپس","category_en":"Strips","items":[{"name_fa":"3 تکه نرمال","name_en":"3 Pcs Normal","price":"700","description":"فیله مرغ، سیب زمینی، نان بروچن، سس سیر"},{"name_fa":"5 تکه نرمال","name_en":"5 Pcs Normal","price":"900","description":"فیله مرغ، سیب زمینی، نان بروچن، سس سیر"},{"name_fa":"3 تکه اسپایسی","name_en":"3 Pcs Spicy","price":"750","description":"فیله مرغ اسپایسی، سیب زمینی، نان بروچن، سس سیر"},{"name_fa":"5 تکه اسپایسی","name_en":"5 Pcs Spicy","price":"950","description":"فیله مرغ اسپایسی، سیب زمینی، نان بروچن، سس سیر"}]},{"category_fa":"پیش غذا","category_en":"Appetizers","items":[{"name_fa":"فرنچ فرایز","name_en":"French Fries","price":"350","description":""},{"name_fa":"بیکن بایت","name_en":"Bacon bites","price":"480","description":"سیب زمینی اسلایسی، دیپ چدار، سالامی پنیری"},{"name_fa":"قارچ سوخاری","name_en":"Fried Mashroom","price":"450","description":"به همراه ساید سیب زمینی"},{"name_fa":"پیاز سوخاری","name_en":"Fried Onion","price":"420","description":"به همراه ساید سیب زمینی"},{"name_fa":"تریاکی وینگز","name_en":"Teriyaki Wing's","price":"490","description":""},{"name_fa":"بوفالو وینگز","name_en":"Buffalo Wings","price":"470","description":""},{"name_fa":"حمص","name_en":"Hummus","price":"420","description":""},{"name_fa":"نان سیر","name_en":"Garlic Bread","price":"510","description":""}]},{"category_fa":"سالاد","category_en":"Salad","items":[{"name_fa":"سزار","name_en":"Caesar","price":"750","description":"شنیسل سوخاری، کاهو پیچ، نان تست سوخاری، زیتون سیاه، کاهو فرانسوی، گوجه چری، پنیر پارمژان، سس سزار"},{"name_fa":"فرنچ","name_en":"French","price":"790","description":"شنیسل سوخاری، کاهو پیچ، نان تست سوخاری، زیتون سیاه، کاهو فرانسوی، میوه فصل، جوانه گندم، گوجه چری، بادام زمینی، پنیر پارمژان، سس فرنچ"},{"name_fa":"بالزامیک","name_en":"Balsamic","price":"750","description":"شنیسل سوخاری، کاهو پیچ، نان تست سوخاری، زیتون کبابی، ریحان ایتالیایی، هویج ژولین، خیار اسلایسی، گوجه چری، پنیر پارمژان، سس بالزامیک"},{"name_fa":"پستو","name_en":"Pesto","price":"800","description":"شنیسل سوخاری، کاهو پیچ، زیتون سیاه، ریحان ایتالیایی، گوجه چری، پنیر لبنه، پنیر پارمژان، سس پستو"},{"name_fa":"گاردن","name_en":"Garden","price":"820","description":"شنیسل سوخاری، کاهو پیچ، نان تست سوخاری، ریحان ایتالیایی، جعفری فری، زیتون سیاه، هویج ژولین، خیار اسلایسی، گوجه چری، جوانه گندم، مغز تخمه آفتاب گردان، پنیر پارمژان، سس گاردن"}]},{"category_fa":"ماکتیل","category_en":"Mocktails","items":[{"name_fa":"لیموناد اورجینال","name_en":"Lemonade","price":"220","description":"وج لیمو، سیروپ لیمو، سودا، یخ"},{"name_fa":"موهیتو اورجینال","name_en":"Mojito","price":"240","description":"وج لیمو، نعنا، سیروپ لیمو، سیروپ موهیتو، سودا، یخ"},{"name_fa":"پینک لیدی","name_en":"Pink Lady","price":"280","description":"آلوورا، پیناکولادا، توت فرنگی، سیروپ رزبری، سیروپ آدامس، لیمو، سودا، یخ"},{"name_fa":"اسکارلت","name_en":"Scarlet","price":"270","description":"آب آلبالوی طبیعی، آب انار طبیعی، آب زرشک طبیعی، سیروپ انار، لیمو، یخ"}]}];

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
    sec.innerHTML=`<div class="cat-head"><h2 class="cat-fa">${cat.category_fa}</h2>${cat.category_en?`<span class="cat-en">${cat.category_en}</span>`:''}<span class="cat-count">${items.length} آیتم</span></div><div class="items-grid" id="grid-${ci}">${items.map(item=>cardHTML(item,cat.category_fa)).join('')}</div>`;
    wrap.appendChild(sec);
  });
  animateCards();
  setupCatArrows();
  setTimeout(setupCatArrows,350); // re-check after fonts/layout settle
}

/* ── Category nav arrows (smooth horizontal navigation) ── */
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
  const seed=(item.name_en||item.name_fa||'food').replace(/\s+/g,'-').toLowerCase();
  const img=item.image_url||`https://picsum.photos/seed/${seed}-cb/400/300`;
  const bNew=item.is_new?'<span class="bdg bdg-new">جدید</span>':'';
  const bSp=item.is_special?'<span class="bdg bdg-sp">ویژه</span>':'';
  const data=JSON.stringify(item).replace(/"/g,'&quot;').replace(/'/g,"&#39;");
  const catEsc=catFa.replace(/'/g,"&#39;");
  return `<article class="item-card" onclick="openModal(${data},'${catEsc}')"><div class="item-img"><img src="${img}" alt="${item.name_fa}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${seed}2/400/300'"/>${bNew||bSp?`<div class="item-badges">${bNew}${bSp}</div>`:''}</div><div class="item-body"><h3 class="item-fa">${item.name_fa}</h3>${item.name_en?`<p class="item-en">${item.name_en}</p>`:''} ${item.description?`<p class="item-desc">${item.description}</p>`:''}</div><div class="item-foot"><span class="item-price">${price}<small>هزار تومان</small></span><span class="item-plus">+</span></div></article>`;
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
  }else{
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
  document.getElementById('m-img').src=item.image_url||`https://picsum.photos/seed/${seed}-cb/500/280`;
  document.getElementById('m-cat').innerHTML=`<span class="lbl-dot" style="width:5px;height:5px;border-radius:50%;background:var(--gold);flex-shrink:0"></span>${catName||''}`;
  document.getElementById('m-fa').textContent=item.name_fa||'';
  document.getElementById('m-en').textContent=item.name_en||'';
  document.getElementById('m-desc').textContent=item.description||'—';
  document.getElementById('m-price').textContent=parseInt(item.price||0).toLocaleString('fa-IR')+' هزار تومان';
  document.getElementById('m-badges').innerHTML=(item.is_new?'<span class="bdg bdg-new">جدید</span>':'')+(item.is_special?'<span class="bdg bdg-sp">ویژه</span>':'');
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
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
