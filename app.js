const password = document.getElementById('password');
const iconPass = document.getElementById('showHideIcon');

iconPass.addEventListener('click', ()=> {

    if(password.type === 'password') {
        password.setAttribute('type', 'text');
        iconPass.className = 'fas fa-eye-slash';
    } else {
        password.setAttribute('type', 'password');
        iconPass.className = 'fas fa-eye';
    }

});