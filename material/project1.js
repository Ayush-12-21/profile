function slide() {
    var signupForm = document.getElementById('signupForm');
    var loginForm = document.getElementById('loginForm');

    if (signupForm.style.left === "51%") {
        
        signupForm.style.transition = "left 0.5s ease-in-out";
        signupForm.style.left = "-30%";
        loginForm.style.transition = "left 0.5s ease-in-out";
        loginForm.style.left = "21%";
    } else {

        signupForm.style.transition = "left 0.5s ease-in-out";
        signupForm.style.left = "51%";
        loginForm.style.transition = "left 0.5s ease-in-out";
        loginForm.style.left = "110%";
    }
}