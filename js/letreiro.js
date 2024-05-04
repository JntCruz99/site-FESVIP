const letreiro1 = document.getElementById('letreiro1');
const letreiro2 = document.getElementById('letreiro2');

letreiro2.style.display = 'none';
let ativado = true;

function alternarLetreiros() {
    if (ativado) {
        letreiro1.style.display = 'none';
        letreiro2.style.display = 'block';
    } else {
        letreiro1.style.display = 'block';
        letreiro2.style.display = 'none';
    }
    ativado = !ativado;
}

setInterval(alternarLetreiros, 6000);
