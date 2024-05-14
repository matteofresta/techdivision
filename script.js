function showContent(sectionId) {

    let sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    let activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    let listItems = document.querySelectorAll('.col-sidebar li');
    listItems.forEach(function (item) {
        item.classList.remove('active');
    });

    let listItem = document.querySelector(`[onmouseover="showContent('${sectionId}')"]`);
    listItem.classList.add('active');
}


document.addEventListener("DOMContentLoaded", function() {
    showContent('design');
});