var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// c.fillStyle="#333"
// c.fillRect(100,100,100,100)
// console.log(canvas);

// //Line

// c.beginPath()
// c.moveTo(50,400)
// c.lineTo(300,100)
// c.lineTo(400,400)
// c.strokeStyle="#eee"
// c.stroke()

// //circle
// for (var i=0; i<200;i++){
//     var x=Math.random() * window.innerWidth
//     var y= Math.random() * window.innerHeight
//     c.beginPath()
//     c.arc(x,y,30,0,Math.PI*2,false)
    
//     c.strokeStyle="#555"
//     c.stroke()
// }


var x=200
var dx=10
var y=300
var dy=10
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.beginPath()
    c.arc(x,y,30,0,Math.PI*2,false)
    c.strokeStyle='#fff'
    c.stroke()
    if(x>innerWidth || x<0){
        dx=-dx
    }
    if(y>innerHeight || y<0){
        dy=-dy
    }
    x+=dx
    y+=dy
}
animate()
