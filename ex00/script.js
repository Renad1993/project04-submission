const themeButton = document.getElementById("changeTheme");
const navLinks = document.querySelectorAll("nav a");
const cards = document.querySelectorAll(".skillGrid div");
const projectCards = document.querySelectorAll(".project-grid article");
const projecth3 = document.querySelectorAll(".project-grid h3");
const projectp = document.querySelectorAll(".project-grid p");
const aboutMe = document.getElementById("aboutMe");
const skillspan = document.querySelectorAll(".skillGrid span");

themeButton.addEventListener("click", function(event){

        themeButton.textContent = "☀";
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
           themeButton.textContent =  "☀";
           navLinks.forEach(function(link) {
              link.style.color = "white";
           });
           cards.forEach(function(card) {
              card.classList.toggle("dark-mode")
           });

           projectCards.forEach(function(pcard) {
              pcard.classList.toggle("dark-mode")
           });

           projecth3.forEach(function(ph3) {
              ph3.classList.toggle("dark-mode")
           });

           projectp.forEach(function(pp) {
              pp.classList.toggle("dark-mode")
           });

           aboutMe.classList.toggle("dark-mode");

           skillspan.forEach(function(skillsp) {
              skillsp.classList.toggle("dark-mode")
           });

        } else{
             themeButton.textContent = "☾";
             navLinks.forEach(function(link) {
                link.style.color = "black";
             });
             cards.forEach(function(card) {
               card.classList.toggle("dark-mode")
             });
            
             projectCards.forEach(function(pcard) {
               pcard.classList.toggle("dark-mode")
             });
             
             projecth3.forEach(function(ph3) {
                ph3.classList.toggle("dark-mode")
             });
             
             projectp.forEach(function(pp) {
               pp.classList.toggle("dark-mode")
             });

             aboutMe.classList.toggle("dark-mode");

             skillspan.forEach(function(skillsp) {
               skillsp.classList.toggle("dark-mode")
             });
        }


});


