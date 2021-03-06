var nodesjs = new NodesJs({
    id: 'nodes',
    width: window.innerWidth,
    height: window.innerHeight,
    particleSize: 2,
    lineSize: 1,
    particleColor: [255, 255, 255],
    lineColor: [255, 255, 255],
    backgroundFrom: [0, 0, 0],
    backgroundTo: [0, 0, 0],
    backgroundDuration: 4000,
    nobg: false,
    number: window.hasOwnProperty('orientation') ? 30: 100,
    speed: 20,
    pointerCircleRadius: 150
});


// Set the date we're counting down to
var countDownDate = new Date("Jul 28, 2021 12:37:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  // // Output the result in an element with id="demo"
  // document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "LAUNCH!!!";
  // }

  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo1").innerHTML = "LAUNCH!!!";
  // }
}, 1000);

var circle = document.querySelectorAll('.coin')
circle.forEach( (e, i) => {
	
	e.addEventListener('mouseenter', function(){
		this.style.transform = 'translateY(150px)'
		this.style.transition = 'all 1s ease'
		this.style.opacity = '0.5'
	})
 
	e.addEventListener('mouseleave', function(){
		this.style.transform = 'translateY(0)'
		this.style.transition = 'all 1s ease'
		this.style.opacity = '1'
	})
	
})

function myFunction() {
  var x = document.getElementById("popup");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}