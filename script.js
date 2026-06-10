const quotes = [
    "성공은 매일의 작은 노력이 반복된 결과이다.",
    "포기하지 않는 사람이 결국 이긴다.",
    "오늘의 노력이 내일의 실력이다.",
    "꾸준함이 최고의 재능이다."
];

document.getElementById("quote").innerText =
quotes[Math.floor(Math.random()*quotes.length)];

function saveStudy(){
    let study = document.getElementById("studyTime").value;

    localStorage.setItem("studyTime", study);

    alert("공부시간 저장 완료!");
}

function saveGoal(){
    let goal = document.getElementById("goal").value;

    localStorage.setItem("goal", goal);

    alert("목표 저장 완료!");
}

let progress = 0;

function increaseProgress(){

    if(progress < 100){
        progress += 20;
    }

    document.getElementById("bar").style.width =
    progress + "%";

    if(progress === 100){
        alert("🎉 목표 달성 축하합니다!");
    }
}
