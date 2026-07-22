// =============================
// Welcome Message
// =============================

window.onload = function () {
    console.log("Welcome to CoolFix AC Services");
};


// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        if (this.hash !== "") {

            e.preventDefault();

            const id = this.hash;

            document.querySelector(id).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =============================
// Service Booking Button
// =============================

let bookButtons = document.querySelectorAll(".btn");

bookButtons.forEach(button => {

    button.addEventListener("click", function () {

        if (this.innerText.includes("Book")) {

            alert("Thank you!\n\nYour AC service request has been received.");

        }

    });

});


// =============================
// Counter Animation
// =============================

const counters = document.querySelectorAll(".count-box h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 100;

    function updateCounter() {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});


// =============================
// Scroll Animation
// =============================

const cards = document.querySelectorAll(".card, .why-box");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if (position < screen - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = ".6s";

});


// =============================
// Back To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "18px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// =============================
// Floating WhatsApp Button
// =============================

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/919876543210";

whatsapp.target = "_blank";

whatsapp.innerHTML = "💬";

document.body.appendChild(whatsapp);

whatsapp.style.position = "fixed";
whatsapp.style.bottom = "90px";
whatsapp.style.right = "20px";
whatsapp.style.width = "60px";
whatsapp.style.height = "60px";
whatsapp.style.background = "#25D366";
whatsapp.style.color = "white";
whatsapp.style.borderRadius = "50%";
whatsapp.style.display = "flex";
whatsapp.style.justifyContent = "center";
whatsapp.style.alignItems = "center";
whatsapp.style.fontSize = "30px";
whatsapp.style.textDecoration = "none";
whatsapp.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("themeToggle");

if(themeBtn){

    // Load saved theme
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = "☀️";
    }

    themeBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            themeBtn.innerHTML = "☀️";
            localStorage.setItem("theme","dark");
        }else{
            themeBtn.innerHTML = "🌙";
            localStorage.setItem("theme","light");
        }

    });

}