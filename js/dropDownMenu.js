const dropdownMenu = document.querySelector('#dropdownMenu');
const dropdownContent = document.querySelector('.dropdownMenu');

dropdownContent.addEventListener('mouseleave', function() {
    dropdownContent.classList.add('show');
});
dropdownMenu.addEventListener('mouseover', function() {
    dropdownContent.classList.remove('show');
});