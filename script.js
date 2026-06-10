
const quotes=['꾸준함이 최고의 재능이다','오늘의 노력이 내일의 실력이다','포기하지 않는 사람이 결국 이긴다'];
const q=document.getElementById('quote');
if(q) q.innerText=quotes[Math.floor(Math.random()*quotes.length)];

function saveStudy(){
 localStorage.setItem('study',document.getElementById('study').value);
 alert('저장 완료');
}
function saveGoal(){
 localStorage.setItem('goal',document.getElementById('goal').value);
 alert('목표 저장 완료');
}
let p=Number(localStorage.getItem('progress')||0);
const bar=document.getElementById('bar');
if(bar) bar.style.width=p+'%';
function completeGoal(){
 p=Math.min(100,p+20);
 localStorage.setItem('progress',p);
 document.getElementById('bar').style.width=p+'%';
 if(p===100) alert('🎉 목표 달성!');
}
