window.addEventListener("load", () => {
    console.log("Portfolio Website Loaded Successfully");
});



/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({
                behavior: "smooth"
            });

    });

});

/* Scroll Animation */
const cards = document.querySelectorAll(
    ".card, .course-card, .gallery-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);

});