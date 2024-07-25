// Ativação da classe active para os outros links do menu
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY < sections[index].offsetTop) { }

        navbarLinks.forEach((link) => link.classList.remove('active'));
        navbarLinks[index].classList.add('active');
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
});
