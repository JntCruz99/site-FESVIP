
const toggleSwitch = document.getElementById('toggle');
const body = document.querySelector('body');
const dropDown = document.querySelector('.dropdown');

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        dropDown.classList.remove('ligthMode')
        body.classList.add('darkanimation')
        dropDown.classList.add('darkmode')
    } else {
        body.classList.remove('darkanimation')
        dropDown.classList.remove('darkmode')
        body.classList.add('ligthModeAnimation')
        dropDown.classList.add('ligthMode')
    }
});
