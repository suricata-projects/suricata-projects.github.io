document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('theme').addEventListener('click',()=>document.body.classList.toggle('alt'));
let toastTimer;document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);const toast=document.getElementById('toast');toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}catch{window.prompt('Copy username:',btn.dataset.copy)}}));
