// Function to show the sidebar
document.getElementById("showSidebarBtn").addEventListener("click", showsidebar);
document.getElementById("hideSidebarBtn").addEventListener("click", hidesidebar);

function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Initialize the slide index
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    document.getElementById("currentslide").innerHTML = slideIndex;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    document.getElementById("plusslide").innerHTML = slideIndex;
    showSlides(slideIndex);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block"; 
}


function ChangeImage(filename) {
    let img = document.querySelector("#hero-Img");
    img.setAttribute("src", filename);
}
