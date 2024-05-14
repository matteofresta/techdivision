function showContent(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.style.display = 'none';

    });

    // Show the selected section
    let activeSection = document.getElementById(sectionId);
    activeSection.style.transition = '.5s ease';
    activeSection.style.display = 'flex';
}