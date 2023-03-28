let banar = document.getElementById('banar');
let openNav = document.getElementById('open');
let exitNav = document.getElementById('exit')

openNav.onclick = ()=>{
    banar.style.transform = 'scale(1)'
}
exitNav.onclick = () => {
    banar.style.transform = 'scale(0)'
}