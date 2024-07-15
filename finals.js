document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function activateSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        targetSection.classList.add('active');

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            activateSection(targetId);
        });
    });

    const initialSectionId = window.location.hash.substring(1) || 'home';
    activateSection(initialSectionId);
});
