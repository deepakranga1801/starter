/*=============================================
=            Navbar color                     =
=============================================*/  

const header = document.querySelector("nav");
const sectionOne = document.querySelector(".content-slider");
  
const sectionOneOptions = {
    rootMargin: "-590px 0px 0px 0px"
};
  
const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
},
sectionOneOptions);
  
sectionOneObserver.observe(sectionOne);
