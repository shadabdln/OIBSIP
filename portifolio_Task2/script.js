//toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
// scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar link 
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');

            // active section for animation on scroll 
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
    // sticky header 
    let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

//    animation footer in scroll 
    let footer = document.querySelector('footer');
     footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= 
     document.scrollingElement.scrollHeight);
};


//    remove toggle icon and navbar when click navbar links(scroll) 
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
