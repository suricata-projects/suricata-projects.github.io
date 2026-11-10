document.getElementById('year').textContent=new Date().getFullYear();
const themeButton = document.getElementById('theme');
const savedTheme = (() => { try { return localStorage.getItem('suricata-theme'); } catch { return null; } })();
function setTheme(theme) {
  const light = theme === 'light';
  document.body.classList.toggle('light-mode', light);
  themeButton.setAttribute('aria-pressed', String(light));
  themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
  const label = themeButton.querySelector('span');
  if (label) label.textContent = light ? 'DARK MODE' : 'LIGHT MODE';
  try { localStorage.setItem('suricata-theme', theme); } catch {}
}
setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeButton.addEventListener('click', () => {
  setTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light');
});
let toastTimer;document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);const toast=document.getElementById('toast');toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}catch{window.prompt('Copy username:',btn.dataset.copy)}}));
