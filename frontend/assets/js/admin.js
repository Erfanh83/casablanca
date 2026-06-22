const API = '/api';
const {createApp,ref,computed,onMounted,nextTick} = Vue;
let _loginGrace = false;

createApp({
  setup(){
    // ── Auth ──────────────────────────────────────────
    const token = ref(localStorage.getItem('cb_token')||'');
    const me    = ref(JSON.parse(localStorage.getItem('cb_user')||'{}'));
    const lf    = ref({username:'',password:''});
    const lLoading = ref(false);
    const lErr  = ref('');

    async function doLogin(){
      if(lLoading.value) return;
      const u = lf.value.username.trim();
      const p = lf.value.password;
      if(!u||!p){ lErr.value='نام کاربری و رمز عبور الزامی است'; return; }
      lLoading.value = true;
      lErr.value = '';
      try{
        const res = await fetch(`${API}/auth/login/`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({username:u,password:p})
        });
        const data = await res.json();
        if(!res.ok) throw new Error(data.error||data.detail||`خطا: ${res.status}`);
        localStorage.setItem('cb_token', data.access);
        localStorage.setItem('cb_user', JSON.stringify(data.user||{}));
        me.value  = data.user||{};
        _loginGrace = true;
        token.value = data.access;
        await nextTick();
        loadDashboard();
        setTimeout(()=>{ _loginGrace = false; }, 5000);
      }catch(e){
        lErr.value = e.message||'خطا در ورود — سرور در دسترس نیست';
      }finally{
        lLoading.value = false;
      }
    }

    async function doLogout(){
      try{ await apiFetch('/auth/logout/',{method:'POST',body:{refresh:''}}); }catch(_){}
      token.value=''; me.value={};
      localStorage.removeItem('cb_token');
      localStorage.removeItem('cb_user');
    }

    // ── Navigation ────────────────────────────────────
    const pg    = ref('dash');
    const sbOpen = ref(false);
    const pgTitle = computed(()=>({dash:'داشبورد',cafe:'منوی کافه',rest:'منوی رستوران',cats:'دسته‌بندی‌ها'})[pg.value]||'');

    function nav(p){
      pg.value=p; sbOpen.value=false;
      if(p==='cafe') loadItems('cafe');
      else if(p==='rest') loadItems('restaurant');
      else if(p==='cats') loadAllCats();
    }

    // ── Data ──────────────────────────────────────────
    const loading   = ref(false);
    const saving    = ref(false);
    const srch      = ref('');
    const activeCat = ref(null);
    const catF      = ref('all');
    const allItems  = ref([]);
    const allCats   = ref([]);
    const recentItems = ref([]);
    const stats     = ref({cafe:0,rest:0,cats:0,hidden:0});

    const pageCats = computed(()=> allCats.value.filter(c=>c.menu_type===(pg.value==='cafe'?'cafe':'restaurant')));

    const filteredItems = computed(()=>{
      let items = allItems.value;
      if(activeCat.value) items = items.filter(i=>i.category===activeCat.value);
      if(srch.value){
        const q=srch.value.trim().toLowerCase();
        items = items.filter(i=>i.name_fa.includes(srch.value)||(i.name_en||'').toLowerCase().includes(q));
      }
      return items;
    });

    const filteredCats = computed(()=>
      catF.value==='all' ? allCats.value : allCats.value.filter(c=>c.menu_type===catF.value)
    );

    async function loadDashboard(){
      loading.value=true;
      try{
        const [cafe,rest,cats] = await Promise.all([
          apiFetch('/admin/menu/cafe/'),
          apiFetch('/admin/menu/restaurant/'),
          apiFetch('/admin/categories/'),
        ]);
        allCats.value = cats;
        stats.value = {
          cafe: cafe.filter(i=>i.is_visible).length,
          rest: rest.filter(i=>i.is_visible).length,
          cats: cats.length,
          hidden: [...cafe,...rest].filter(i=>!i.is_visible).length,
        };
        recentItems.value = [...cafe,...rest].sort((a,b)=>b.id-a.id).slice(0,20);
      }catch(e){notify(e.message,'err');}
      finally{loading.value=false;}
    }

    async function loadItems(type){
      loading.value=true; srch.value='';
      try{
        const [items,cats] = await Promise.all([
          apiFetch(`/admin/menu/${type}/`),
          apiFetch(`/admin/categories/?type=${type}`),
        ]);
        allItems.value = items;
        const mtype = type==='cafe'?'cafe':'restaurant';
        allCats.value = [...allCats.value.filter(c=>c.menu_type!==mtype),...cats];
        activeCat.value = cats[0]?.id||null;
      }catch(e){notify(e.message,'err');}
      finally{loading.value=false;}
    }

    async function loadAllCats(){
      loading.value=true;
      try{ allCats.value = await apiFetch('/admin/categories/'); }
      catch(e){notify(e.message,'err');}
      finally{loading.value=false;}
    }

    // ── Item CRUD ─────────────────────────────────────
    const showItemModal = ref(false);
    const iForm = ref({});
    const dragOver = ref(false);
    const imgUploading = ref(false);

    function openAddItem(){
      iForm.value = {
        name_fa:'',name_en:'',description:'',price:'',
        category: pageCats.value[0]?.id||null,
        is_visible:true,is_new:false,is_special:false,
        image:'',previewUrl:'',fileObj:null,
      };
      showItemModal.value=true;
    }
    function openEditItem(item){
      iForm.value = {
        ...item,
        previewUrl: item.image_url||'',
        image: item.image||'',
        fileObj: null,
      };
      showItemModal.value=true;
    }

    async function saveItem(){
      if(!iForm.value.name_fa||!iForm.value.price){notify('نام و قیمت الزامی است','err');return;}
      saving.value=true;
      try{
        const isEdit = !!iForm.value.id;
        const url = isEdit
          ? `${API}/admin/menu/item/${iForm.value.id}/`
          : `${API}/admin/menu/${pg.value==='cafe'?'cafe':'restaurant'}/`;
        const method = isEdit ? 'PATCH' : 'POST';

        let res;
        if(iForm.value.fileObj){
          const fd = new FormData();
          fd.append('name_fa',   iForm.value.name_fa);
          fd.append('name_en',   iForm.value.name_en||'');
          fd.append('description', iForm.value.description||'');
          fd.append('price',     iForm.value.price);
          fd.append('category',  iForm.value.category);
          fd.append('is_visible', iForm.value.is_visible);
          fd.append('is_new',    iForm.value.is_new);
          fd.append('is_special', iForm.value.is_special);
          fd.append('image',     iForm.value.fileObj);
          res = await fetch(url,{method,headers:{'Authorization':`Bearer ${token.value}`},body:fd});
        } else {
          const payload = {
            name_fa: iForm.value.name_fa,
            name_en: iForm.value.name_en||'',
            description: iForm.value.description||'',
            price: iForm.value.price,
            category: iForm.value.category,
            is_visible: iForm.value.is_visible,
            is_new: iForm.value.is_new,
            is_special: iForm.value.is_special,
          };
          res = await fetch(url,{method,headers:{'Content-Type':'application/json','Authorization':`Bearer ${token.value}`},body:JSON.stringify(payload)});
        }

        if(res.status===401){if(!_loginGrace)doLogout();throw new Error('نشست منقضی شده — دوباره وارد شوید');}
        if(!res.ok){
          let msg=`خطا: ${res.status}`;
          try{const e=await res.json();msg=e.error||e.detail||JSON.stringify(e)||msg;}catch(_){}
          throw new Error(msg);
        }
        const saved = res.status===204 ? null : await res.json();

        if(isEdit){
          const idx = allItems.value.findIndex(i=>i.id===iForm.value.id);
          if(idx>-1) allItems.value[idx] = saved || allItems.value[idx];
          notify('آیتم ویرایش شد','ok');
        } else {
          if(saved) allItems.value.push(saved);
          notify('آیتم جدید اضافه شد','ok');
        }
        showItemModal.value=false;
      }catch(e){notify(e.message,'err');}
      finally{saving.value=false;}
    }

    async function deleteItem(item){
      if(!confirm(`آیا از حذف "${item.name_fa}" مطمئنید؟`)) return;
      try{
        await apiFetch(`/admin/menu/item/${item.id}/`,{method:'DELETE'});
        allItems.value = allItems.value.filter(i=>i.id!==item.id);
        notify('آیتم حذف شد','ok');
      }catch(e){notify(e.message,'err');}
    }

    async function toggleItem(item){
      try{
        const res = await apiFetch(`/admin/menu/item/${item.id}/toggle/`,{method:'PATCH'});
        item.is_visible = res.is_visible;
        notify(res.is_visible?'آیتم فعال شد':'آیتم مخفی شد','ok');
      }catch(e){notify(e.message,'err');}
    }

    // ── Image upload ─────────────────────────────────
    async function onFileChange(e){
      const file = e.target.files?.[0];
      if(file) await uploadFile(file);
      e.target.value='';
    }
    function onDrop(e){
      dragOver.value=false;
      const file = e.dataTransfer.files?.[0];
      if(file) uploadFile(file);
    }
    function uploadFile(file){
      if(file.size > 5*1024*1024){notify('حجم فایل بیشتر از ۵ مگابایت است','err');return;}
      iForm.value.fileObj = file;
      const reader = new FileReader();
      reader.onload = ev => { iForm.value.previewUrl = ev.target.result; };
      reader.readAsDataURL(file);
    }
    function clearImg(){
      iForm.value.previewUrl='';
      iForm.value.image='';
      iForm.value.fileObj=null;
    }

    // ── Category CRUD ─────────────────────────────────
    const showCatModal = ref(false);
    const cForm = ref({});

    function openAddCat(){
      cForm.value={name_fa:'',name_en:'',menu_type:'cafe',order:0,is_visible:true};
      showCatModal.value=true;
    }
    function openEditCat(cat){
      cForm.value={...cat};
      showCatModal.value=true;
    }
    async function saveCat(){
      if(!cForm.value.name_fa){notify('نام دسته‌بندی الزامی است','err');return;}
      saving.value=true;
      try{
        if(cForm.value.id){
          await apiFetch(`/admin/categories/${cForm.value.id}/`,{method:'PATCH',body:cForm.value});
          const idx=allCats.value.findIndex(c=>c.id===cForm.value.id);
          if(idx>-1) allCats.value[idx]={...allCats.value[idx],...cForm.value};
          notify('دسته‌بندی ویرایش شد','ok');
        }else{
          const c=await apiFetch('/admin/categories/',{method:'POST',body:cForm.value});
          allCats.value.push(c);
          notify('دسته‌بندی اضافه شد','ok');
        }
        showCatModal.value=false;
      }catch(e){notify(e.message,'err');}
      finally{saving.value=false;}
    }
    async function deleteCat(cat){
      if(!confirm(`حذف دسته‌بندی "${cat.name_fa}"؟`)) return;
      try{
        await apiFetch(`/admin/categories/${cat.id}/`,{method:'DELETE'});
        allCats.value=allCats.value.filter(c=>c.id!==cat.id);
        notify('دسته‌بندی حذف شد','ok');
      }catch(e){notify(e.message,'err');}
    }

    // ── Helpers ───────────────────────────────────────
    const notif = ref({show:false,msg:'',type:'ok'});
    let nTimer;
    function notify(msg,type='ok'){
      clearTimeout(nTimer);
      notif.value={show:true,msg,type};
      nTimer=setTimeout(()=>{notif.value.show=false;},3500);
    }
    function fmtPrice(p){
      return parseInt(p||0).toLocaleString('fa-IR')+' هزار تومان';
    }

    async function apiFetch(path,opts={}){
      const headers={'Content-Type':'application/json'};
      if(token.value) headers['Authorization']=`Bearer ${token.value}`;
      const res = await fetch(`${API}${path}`,{
        method:opts.method||'GET',
        headers,
        body:opts.body?JSON.stringify(opts.body):undefined,
      });
      if(res.status===401){if(!_loginGrace)doLogout();throw new Error('نشست منقضی شده — دوباره وارد شوید');}
      if(!res.ok){
        let msg=`خطا: ${res.status}`;
        try{const e=await res.json();msg=e.error||e.detail||msg;}catch(_){}
        throw new Error(msg);
      }
      if(res.status===204) return null;
      return res.json();
    }

    onMounted(()=>{
      if(token.value) loadDashboard();
    });

    return {
      token,me,lf,lLoading,lErr,doLogin,doLogout,
      pg,sbOpen,pgTitle,nav,
      loading,saving,srch,activeCat,catF,
      allItems,allCats,pageCats,recentItems,stats,
      filteredItems,filteredCats,
      showItemModal,iForm,dragOver,imgUploading,
      openAddItem,openEditItem,saveItem,deleteItem,toggleItem,
      onFileChange,onDrop,clearImg,
      showCatModal,cForm,openAddCat,openEditCat,saveCat,deleteCat,
      notif,fmtPrice,
    };
  }
}).mount('#app');
