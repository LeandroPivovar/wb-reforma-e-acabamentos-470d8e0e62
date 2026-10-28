(() => {
 'use strict';
 const menu=document.querySelector('.menu'),nav=document.getElementById('navigation');
 function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');}
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
 window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
 const vehicle=document.getElementById('vehicle'),preview=document.getElementById('message-preview'),link=document.getElementById('message-link');
 function updateMessage(){const subject=document.querySelector('input[name="assunto"]:checked').value;const model=vehicle.value.trim();const text='Olá, WB Reforma e Acabamentos! Quero conversar sobre '+subject+'.'+(model?'\nAmbiente: '+model+'.':'');preview.textContent=text;link.href='https://wa.me/5549991426682?text='+encodeURIComponent(text);}
 document.querySelectorAll('input[name="assunto"]').forEach(el=>el.addEventListener('change',updateMessage));vehicle.addEventListener('input',updateMessage);updateMessage();
 document.querySelectorAll('[data-subject]').forEach(el=>el.addEventListener('click',()=>{const value=el.getAttribute('data-subject');document.querySelectorAll('input[name="assunto"]').forEach(input=>{input.checked=input.value===value;});updateMessage();}));
 document.getElementById('year').textContent=String(new Date().getFullYear());
 if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('entered');observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.motion').forEach(el=>observer.observe(el));}
})();
