/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if(toggle && navbar){
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('expander')

      bodypadding.classList.toggle('body-pd')
      
    })
  }
}
showMenu('nav-toggle','navbar','body-pd')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/ 
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++){
  linkCollapse[i].addEventListener('click', function(){
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}

/*===== CONTADOR DE CARACTERES  =====*/
var passwordInput = document.getElementById('exampleInputPassword1');
var passwordIcon = document.getElementById('passwordIcon');
var eyeIcon = document.createElement('i'); // Crea el ícono del ojo

// Agrega el ícono del ojo al documento
eyeIcon.className = 'fas fa-eye eye-icon';
document.querySelector('.form-group').appendChild(eyeIcon);

passwordInput.addEventListener('input', updatePassword);
passwordInput.addEventListener('focus', updateOutline);
passwordInput.addEventListener('blur', resetOutline);

eyeIcon.addEventListener('click', togglePasswordVisibility);

function updatePassword() {
    var passwordLength = passwordInput.value.length;

    // Elimina el contenido existente
    passwordIcon.innerHTML = '';

    // Aplica estilos y muestra el ícono según el rango de caracteres
    if (passwordLength >= 0 && passwordLength < 8) {
        applyStyles('3px solid green');
        passwordIcon.innerHTML = '<i class="fas fa-times"></i>';
    } else if (passwordLength >= 8 && passwordLength < 13) {
        applyStyles('3px solid yellow');
        passwordIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
    } else if (passwordLength >= 13) {
        applyStyles('3px solid red');
        passwordIcon.innerHTML = '<i class="fas fa-check"></i>';
    }

    // Actualiza el contenido del span
    document.getElementById('passwordLength').textContent = passwordLength;
}

function applyStyles(border) {
    // Aplica estilos al cuadro de contraseña
    passwordInput.style.border = border;
    passwordInput.style.boxShadow = '0 0 5px ' + border;
}

function updateOutline() {
    // Obtiene el color del borde actual y aplica el mismo color al contorno al obtener el enfoque
    var borderColor = getComputedStyle(passwordInput).borderColor;
    applyStyles(borderColor);
}

function resetOutline() {
    // Restablece los estilos cuando el cuadro de contraseña pierde el foco
    applyStyles('');
}

function togglePasswordVisibility() {
    // Alterna entre el tipo de input password y text para mostrar u ocultar la contraseña
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        eyeIcon.className = 'fas fa-eye';
    }
}


/*===== DUPLICADO =====*/

