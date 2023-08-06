'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


/**KB-tool */

var inputField = document.getElementById("inputIds");
inputField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        copyIds();
    }
});

function copyIds() {
    var input = inputField.value;
    var ids = input.split(" ");
    var count = ids.length;
    document.getElementById("count").innerHTML = "Count: " + count;
    document.getElementById("output").innerHTML = count + ":" + ids.join(",");
    var temp = document.createElement("textarea");
    temp.value = count + ":" + ids.join(",");
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    
}

function resetIds() {
    inputField.value = "";
    document.getElementById("count").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}



function copyOutput() {
    const output = document.getElementById("output").innerText;
    navigator.clipboard.writeText(output);
  }

  function reset() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerText = "";
  }



  
  function search() {
    var companyName = document.getElementById("companyName").value;
    var searchType = document.querySelector('input[name="searchType"]:checked').value;
    var query = searchType === "site" ? "site: " + companyName : companyName + " zauba";
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query));
  }

  function resetForm() {
    document.getElementById("companyName").value = "";
    document.querySelector('input[name="searchType"][value="site"]').checked = true;
  }

  function copyToClipboard(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    button.classList.add('copied');
    setTimeout(() => {
      button.classList.remove('copied');
    }, 1000);
    const copiedMessage = button.querySelector('.copied-message');
    copiedMessage.classList.add('show');
    setTimeout(() => {
      copiedMessage.classList.remove('show');
    }, 2000);
  }