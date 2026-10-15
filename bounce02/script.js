const themeButton = document.getElementById("changeTheme");
const langButton = document.getElementById("langButton");
const navLinks = document.querySelectorAll("nav a");
const photo= document.getElementById("profileImage");
const changePhoto= document.getElementById("photoButton");
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

         langButton.style.backgroundColor="white";
         langButton.style.color="black";
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
             langButton.style.backgroundColor="black";
             langButton.style.color="white";
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

let currentLanguage="en";
const translations = {
    en: {
        navAbout: "About Me",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact Me",
        navphoto: "Change Photo",
        navpAbout: "I'm Renad Mheidat, a Computer Engineering master's graduate with an interest in IoT, cybersecurity, and web development. I enjoy learning new technologies and building practical solutions that turn ideas into real projects.",
        navName:"Name:",
        naveEmail:"Email:",
        navMessage:"Message:",
        navSubmit:"Submit",
        navHTML:"Semantic and accessible web pages",
        navCSS: "Modern layouts and responsive design",
        navJava: "Interactive and dynamic web applications",
        navGit: "Version control and collaboration",
        navP00: "Project 00 — Linux, Git & GitHub",
        navP01: "Project 01 — HTML Fundamentals",
        navP02: "Project 02 — CSS & Visual Presentation",
        navP03: "Project 03 — JavaScript & Interactivity",
        navPP00: "Practiced Linux terminal commands, file management, Git version control, GitHub repositories, and SSH authentication.",
        navPP01:"Built structured web pages using HTML5, including headings, images, links, lists, tables, forms, and semantic elements.",
        navPP02:"Designed web interfaces using Flexbox, positioning, CSS shapes, colors, the box model, animations, and transitions.",
        navPP03:"Built interactive web features using JavaScript, functions, DOM manipulation, event listeners, and dynamic user interactions.",
        navHP:"Painting",
        navHPR:"Programming"
    },

    ar: {
        navAbout: "نبذة عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "تواصل معي",
        navphoto:"تغيير الصوره",
        navpAbout: "أنا رناد مهيدات، خريجة ماجستير في هندسة الحاسوب، ولدي اهتمام بمجالات إنترنت الأشياء (IoT)، والأمن السيبراني، وتطوير الويب. أستمتع بتعلّم التقنيات الجديدة وبناء حلول عملية تحوّل الأفكار إلى مشاريع واقعية.",
        navName:"الأسم:",
        navEmail:"الإيميل:",
        navMessage:"رساله:",
        navSubmit:"إرسال",
        navHTML:"صفحات ويب دلالية وسهلة الوصول",
        navCSS:"تخطيطات حديثة وتصميم متجاوب",
        navJava:"تطبيقات ويب تفاعلية وديناميكية",
        navGit:"إدارة الإصدارات والتعاون",
        navP00: "المشروع 00 — Linux وGit وGitHub",
        navP01: "المشروع 01 — أساسيات HTML",
        navP02: "المشروع 02 — CSS والتصميم المرئي",
        navP03: "المشروع 03 — JavaScript والتفاعلية",
        navPP00: "تدربت على أوامر طرفية Linux، وإدارة الملفات، وإدارة الإصدارات باستخدام Git، ومستودعات GitHub، والمصادقة باستخدام SSH.",
        navPP01:"أنشأت صفحات ويب منظمة باستخدام HTML5، بما في ذلك العناوين والصور والروابط والقوائم والجداول والنماذج والعناصر الدلالية.",
        navPP02:"صممت واجهات ويب باستخدام Flexbox، وتحديد المواقع، وأشكال CSS، والألوان، ونموذج الصندوق، والحركات، والانتقالات.",
        navPP03:"أنشأت ميزات ويب تفاعلية باستخدام JavaScript، والدوال، والتعامل مع DOM، ومستمعات الأحداث، والتفاعلات الديناميكية مع المستخدم.",
        navHP:"الرسم",
        navHPR:"البرمجه"
    }
};

langButton.addEventListener("click", function() {

    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    document.querySelectorAll("[data-i18n]").forEach(function(element) {

        const key = element.getAttribute("data-i18n");

        element.textContent = translations[currentLanguage][key];

    });

    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
        langButton.textContent = "EN";
    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
        langButton.textContent = "AR";
    }

});
