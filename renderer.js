// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

now = new Date(),hour = now.getHours() 

let HI=null;
if(hour < 3){
    HI="还不睡,等猝死呢？"
} 
if(hour < 6){
    HI="凌晨好！"
} 
else if (hour < 9){
   HI="早上好！"
} 
else if (hour < 12){
   HI="上午好！"
} 
else if (hour < 14){
   HI="中午好！"
} 
else if (hour < 17){
   HI="下午好！"
} 
else if (hour < 19){
   HI="傍晚好！"
} 
else if (hour < 22){
   HI="早点休息，别熬夜"
} 
else {
   HI="夜里好！"
} 



let myNotification = new Notification('Hi Jason', {
    body: HI
  })
  
//   myNotification.onclick = () => {
    
//   }


// sleep(1000);

setInterval(function(){
    var tim= document.getElementById("time");
    //今天时间
    var date3=new Date()
    var date2=new Date()
    date2=date2.setDate(date2.getDate()+1)
    date2=(new Date(new Date(date2).toDateString()))
   
    tim.innerText=PrefixInteger(Math.abs(parseInt((date3-date2)/1000)),5);
},100)

function PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}


const electron = require('electron')
const ipcRenderer = electron.ipcRenderer;
// oPosition1.onclick = function(){
//     oPosition1.style.display = 'none';
//     oPosition2.style.display = 'block';
//     ipcRenderer.send('open-top');
//   }
//   oPosition2.onclick = function(){
//     oPosition1.style.display = 'block';
//     oPosition2.style.display = 'none';
//     ipcRenderer.send('close-top');
//   }
  

 