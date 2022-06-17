let nombre = document.getElementById('nombre_formulario');
let apellido = document.getElementById('apellido_formulario');
let telefono = document.getElementById('telefono_formulario');
let correo = document.getElementById('correo_formulario');
let precio = document.getElementById('precio_formulario');
let entrega = document.getElementById('entrega_formulario');
let cuotas = document.getElementById('cuotas_formulario');
let botonForm = document.getElementById('btn_formulario');



localStorage.setItem('nombre',`${nombre.value}`)
localStorage.setItem('apellido',`${apellido.value}`)
localStorage.setItem('telefono',`${telefono.value}`)
localStorage.setItem('correo',`${correo.value}`)
localStorage.setItem('precio',`${precio.value}`)
localStorage.setItem('entrega',`${entrega.value}`)
localStorage.setItem('cuotas',`${cuotas.value}`)

console.log(localStorage.getItem('nombre'))
console.log(localStorage.getItem('apellido'))
console.log(localStorage.getItem('telefono'))
console.log(localStorage.getItem('correo'))
console.log(localStorage.getItem('precio'))
console.log(localStorage.getItem('entrega'))
console.log(localStorage.getItem('cuotas'))



