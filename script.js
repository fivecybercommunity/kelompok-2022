let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

// TITLE TYPING ANIMATION
/* ********************************************************* */
var i = 0, j = 0;
var txt1 = '> FIVE  CYBER    COMMUNITY';
var txt2 = 'One step closer into technological singularity';
var speed = 200;
var speed2 = 200;
var good = false;

function typeWriter(){
	typeWriter1();
    setTimeout(typeWriter2, 2750);
}

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementsByClassName("sec judul h1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}

function typeWriter2(){
	if (j < txt2.length && !good) {
		document.getElementById("sec judul p").innerHTML += txt2.charAt(j);
    	j++;
    	setTimeout(typeWriter2, speed);
  	}
}
/* ********************************************************* */

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
})