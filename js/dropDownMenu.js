const dropdownMenu = document.querySelector('#dropdownMenu');
const dropdownContent = document.querySelector('.dropdownMenu');

dropdownMenu.addEventListener('mouseleave', function() {
    dropdownContent.classList.add('show');
});