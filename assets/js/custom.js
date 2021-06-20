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


/*=============================================
=            Sticky                     =
=============================================*/ 
$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop) {
      $('.fixme').css({
          position: 'fixed',
          top: '0',
          left: '0'
      });
  } else {
      $('.fixme').css({
          position: 'static'
      });
  }
});