!function(){var t=document.querySelector(".date__day"),e=document.querySelector(".date"),o=document.querySelector(".date__month"),r=document.querySelector(".date__year"),n=document.querySelector(".digital__clock"),c=document.querySelector(".clock__seconds__arrow"),a=document.querySelector(".clock__minutes__arrow"),u=document.querySelector(".clock__hours__arrow"),d=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],_=["Неділя","Понеділок","Вівторок","Середа","Четверг","П'ятниця","Субота"];setInterval((function(){var l=new Date,S=_[l.getDay()],g=l.getDate(),s=d[l.getMonth()],y=l.getFullYear(),m=l.getHours(),i=l.getMinutes(),q=l.getSeconds(),f=6*q,x=6*i,C=30*m+.5*i,k="".concat(m.toString().padStart(2,"0")," : ").concat(i.toString().padStart(2,"0")," : ").concat(q.toString().padStart(2,"0"));t.textContent=S,e.textContent=g,o.textContent=s,r.textContent=y,n.textContent="Поточний час :   ".concat(k),c.style.transform="rotate(".concat(f,"deg)"),a.style.transform="rotate(".concat(x,"deg)"),u.style.transform="rotate(".concat(C,"deg)")}),1e3)}();
//# sourceMappingURL=04-clock.f2acc840.js.map