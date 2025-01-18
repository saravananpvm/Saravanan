// Smooth Scrolling  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
    anchor.addEventListener("click", function (e) {  
        e.preventDefault();  
        document.querySelector(this.getAttribute("href")).scrollIntoView({  
            behavior: "smooth"  
        });  
    });  
});  

// Dynamic Date in Footer  
document.querySelector("footer p").innerHTML = `© ${new Date().getFullYear()} Saravanan | All Rights Reserved`;