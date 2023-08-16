// Get a reference to the audio element
var audio = document.getElementById("myAudio");

// Play the audio
function playAudio() {
  audio.play();
}

// Pause the audio
function pauseAudio() {
  audio.pause();
}
// Play button event listener
document.getElementById("playButton").addEventListener("click", playAudio);

// Pause button event listener
document.getElementById("pauseButton").addEventListener("click", pauseAudio);

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
  
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/////////////////// scroll for navbar
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const anchorLinks = document.querySelectorAll("#navbar a");
  const listItems = document.querySelectorAll("#navbar li");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    for (var i = 0; i < listItems.length; i++) {
      anchorLinks[i].style.color = "white";
  }
  

  } else {
    navbar.style.backgroundColor = 'transparent';
    for (var i = 0; i < listItems.length; i++) {
      anchorLinks[i].style.color = "#990011";
  }
   }
   
});
