/* =========================
   冯成锦 ❤ 方星懿 一周年纪念
   Premium Love Website JS
========================= */



// =========================
// 音乐控制
// =========================


const music =
document.getElementById("music");


const musicBtn =
document.getElementById("musicBtn");


let playing=false;



musicBtn.onclick=function(){


    if(!playing){

        music.play();

        musicBtn.innerHTML="❚❚";

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML="♫";

        playing=false;

    }


};






// =========================
// 鼠标光效
// =========================


const cursor =
document.getElementById("cursor");


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left=
e.clientX+"px";


cursor.style.top=
e.clientY+"px";


});







// =========================
// 恋爱计时器
// 开始日期
// =========================


const startDate =
new Date("2025-07-27 00:00:00");



function updateTime(){


const now =
new Date();



const diff =
now-startDate;



const seconds =
Math.floor(diff/1000);



const days =
Math.floor(seconds/86400);



const hours =
Math.floor(
(seconds%86400)/3600
);



const minutes =
Math.floor(
(seconds%3600)/60
);



const sec =
seconds%60;



document.getElementById("days")
.innerHTML=days;



document.getElementById("hours")
.innerHTML=hours;



document.getElementById("minutes")
.innerHTML=minutes;



document.getElementById("seconds")
.innerHTML=sec;


}



setInterval(
updateTime,
1000
);


updateTime();







// =========================
// 情书打开
// =========================


const envelope =
document.getElementById(
"openLetter"
);


const letter =
document.getElementById(
"letter"
);



envelope.onclick=function(){


letter.classList.add(
"show"
);


envelope.style.display=
"none";


};









// =========================
// 滚动显示动画
// =========================



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.style.opacity=1;


entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:0.2

}

);





document
.querySelectorAll(
"section"
)
.forEach(
(section)=>{


section.style.opacity=0;

section.style.transform=
"translateY(80px)";

section.style.transition=
"1.5s ease";


observer.observe(section);


});








// =========================
// 星空粒子
// =========================



const ending =
document.querySelector(
".ending"
);



for(let i=0;i<120;i++){


let star =
document.createElement(
"div"
);


star.className="star";



star.style.position=
"absolute";


star.style.width=
Math.random()*3+"px";


star.style.height=
star.style.width;


star.style.background=
"white";


star.style.borderRadius=
"50%";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";


star.style.opacity=
Math.random();



star.style.animation=
"twinkle "
+
(2+Math.random()*3)
+
"s infinite";



ending.appendChild(star);


}








// =========================
// 星空闪烁 CSS动态添加
// =========================


const style =
document.createElement(
"style"
);


style.innerHTML=`

@keyframes twinkle{

0%,100%{

opacity:.2;

transform:scale(1);

}


50%{

opacity:1;

transform:scale(2);

}

}

`;


document.head.appendChild(style);








// =========================
// 烟花系统
// =========================


const canvas =
document.getElementById(
"firework"
);



const ctx =
canvas.getContext(
"2d"
);



function resize(){

canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;


}



resize();


window.onresize=
resize;






let particles=[];



function createFirework(){



let x =
Math.random()*canvas.width;


let y =
Math.random()*canvas.height/2;



for(
let i=0;
i<80;
i++
){


particles.push({


x:x,

y:y,


speed:
Math.random()*5+2,


angle:
Math.random()*Math.PI*2,


life:100


});


}



}




function animateFirework(){



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach(
(p,index)=>{


p.x +=
Math.cos(p.angle)
*
p.speed;



p.y +=
Math.sin(p.angle)
*
p.speed;



p.life--;



ctx.beginPath();


ctx.arc(
p.x,
p.y,
2,
0,
Math.PI*2
);



ctx.fillStyle=
"rgba(255,215,120,"
+
p.life/100
+
")";



ctx.fill();



if(p.life<=0){

particles.splice(index,1);

}


});



requestAnimationFrame(
animateFirework
);


}



animateFirework();






// =========================
// 一周年进入结尾时烟花
// =========================


const endingObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){



setInterval(
createFirework,
1500
);



}


});


}
);



endingObserver.observe(
document.querySelector(".ending")
);







// =========================
// 图片点击放大
// =========================



document
.querySelectorAll(".photo img")
.forEach(
(img)=>{


img.onclick=function(){


this.classList.toggle(
"zoom"
);


}


});






// =========================
// 页面加载动画
// =========================



window.onload=function(){


setTimeout(()=>{


document.body.style.opacity=1;


},500);


};