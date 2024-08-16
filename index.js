

function menuBtn(){
document.getElementById("one").style . transform = "rotate(45deg)";
document.getElementById("one").style . transitionDuration = "2s";
document.getElementById("one").style . backgroundColor = "white";

document.getElementById("two").style . display = "none";
document.getElementById("two").style . transitionDuration = "2s";

document.getElementById("three").style . transform = "rotate(135deg)";
document.getElementById("three").style . transitionDuration = "2s";
document.getElementById("three").style . backgroundColor = "white";
   


const menuContent = document.querySelector('.nav');


       if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        // Hide menu content
        menuContent.style.display = 'block';


menuContent.style.transform= "translate(-1px, 0px)";


menuContent.style.transform = transitionDuration = "2s";

        setTimeout(function() {
            menuContent.style.right = '0';
        }, 10); // Small delay to allow the display change to take effect
    } else {
        menuContent.style.right = '-250px';
menuContent.style.transform= "translate(0px, 1px)";


menuContent.style.transform = transitionDuration = "2s";
        setTimeout(function() {
            menuContent.style.display = 'none';

document.getElementById("one").style . transform = "rotate(180deg)";
document.getElementById("one").style . transitionDuration = "2s";
document.getElementById("one").style . backgroundColor = "#DE4A00";




document.getElementById("two").style . display = "block";
document.getElementById("two").style . transitionDuration = "2s";
document.getElementById("two").style . backgroundColor = "#DE4A00";




document.getElementById("three").style . transform = "rotate(180deg)";
document.getElementById("three").style . transitionDuration = "2s";
document.getElementById("three").style . backgroundColor = "#DE4A00";


document.querySelector('.show').display.style="block";
        } ,300); 

    }
}


// Helper function to determine the greeting based on the time of day
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

function mail() {
  const greeting = getGreeting();
  alert(`${greeting}, it's Kingsley Effiong. Drop your message, and during the day I'll get in touch with you.`);

  document.getElementById('modal').style.display = 'block';
  document.getElementById('mail').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function collabo() {
  const greeting = getGreeting();
  alert(`${greeting}, it's Kingsley Effiong. Let's collaborate together... during the day I'll get in touch with you.`);

  document.getElementById('modal').style.display = 'block';
  document.getElementById('mail').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function hi() {
  const userName = prompt("Hey there, what's your name?");
  const greeting = getGreeting();
  alert(`${greeting}, ${userName}. Drop your message, let's share ideas together... During the day, I'll get in touch with you.`);

  document.getElementById('modal').style.display = 'block';
  document.getElementById('mail').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function brand() {
  const greeting = getGreeting();
  alert(`${greeting}, it's Kingsley Effiong. I'm glad you like my brand. Drop your message, let's link up together for more brands... during the day I'll get in touch with you.`);

  document.getElementById('modal').style.display = 'block';
  document.getElementById('mail').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('app').classList.remove('blur');
}