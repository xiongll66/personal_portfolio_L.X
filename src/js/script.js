const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}


//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;


document.addEventListener('DOMContentLoaded', () => {
  const poster = document.getElementById('posterImage');

  // Wrap poster in a link to its source
  const wrapper = document.createElement('a');
  wrapper.href = poster.src;
  wrapper.classList.add('sp-imgbox');
  
  // Insert wrapper before poster and move poster inside
  poster.parentNode.insertBefore(wrapper, poster);
  wrapper.appendChild(poster);

  // Add click listener to open modal
  wrapper.addEventListener('click', e => {
    e.preventDefault();
    const posterModal = document.getElementById('posterModal');
    const modalImg = document.getElementById('modalImg');
    posterModal.style.display = 'block';
    modalImg.src = poster.src;
    modalImg.alt = poster.alt;
    modalImg.style.transform = 'scale(1)';
  });
});

$(document).ready(function() {
    $('#posterImage').wrap('<a class="sp-imgbox" href="'+$('#posterImage').attr('src')+'"></a>');
    $('.sp-imgbox').colorbox({
        maxWidth: "90%",
        maxHeight: "90%",
        photo: true,
        opacity: 0.8,
        close: "×"
    });
});