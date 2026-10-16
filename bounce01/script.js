const themeButton = document.getElementById("changeTheme");
const navLinks = document.querySelectorAll("nav a");
const photo= document.getElementById("profileImage");
const changePhoto= document.getElementById("photoButton");

themeButton.addEventListener("click", function(event){

       if(document.body.classList.contains("dark-mode")){
          themeButton.textContent = "☾";
          document.body.classList.toggle("dark-mode");
        } else{
            themeButton.textContent = "☀";
            document.body.classList.toggle("dark-mode");
        }
});

changePhoto.addEventListener("click", function(event){
    photo.classList.add("fade");
    setTimeout(function() {
        if(photo.src.includes("profile.jpg")){
            photo.src="assets/image.png";
            photo.alt="Wep development and cypersecurity";
        }else{
            photo.src = "assets/profile.jpg";
            photo.alt = "Profile Photo";
        }
        photo.classList.remove("fade");
    }, 500);
});
