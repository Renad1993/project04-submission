const themeButton = document.getElementById("changeTheme");

themeButton.addEventListener("click", function(event){

         if(document.body.classList.contains("dark-mode")){
          themeButton.textContent = "☾";
          document.body.classList.toggle("dark-mode");
         } else{
            themeButton.textContent = "☀";
            document.body.classList.toggle("dark-mode");
         }

});


