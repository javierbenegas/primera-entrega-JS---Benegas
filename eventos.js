let nombre = document.getElementById('nombre_formulario');
let apellido = document.getElementById('apellido_formulario');
let telefono = document.getElementById('telefono_formulario');
let correo = document.getElementById('correo_formulario');
let precio = document.getElementById('precio_formulario');
let entrega = document.getElementById('entrega_formulario');
let cuotas = document.getElementById('cuotas_formulario');
let botonForm = document.getElementById('btn_formulario');

let resta = precio.value - entrega.value
let cuotaAuto = resta /cuotas.value * 1.3





botonForm.addEventListener('click',()=>{
    Swal.fire({
        title: `Presupuesto confirmado ${nombre.value} ${apellido.value}`,
        text: `Esta información será enviada a su correo ${correo.value} o nos estaremos comunicando a su teléfono ${telefono.value} para un mejor asesoramiento`,
        icon: 'seccess',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        
    })

    //alert(`Bienvenido ${nombre.value} ${apellido.value}!!!\n\nEl valor de la cuota con una financiación de ${cuotas.value} meses es de $${cuotaAuto}\n\nEsta información será enviada a su correo ${correo.value} o nos estaremos comunicando a su teléfono ${telefono.value} para un mejor asesoramiento.\n\nMuchas gracias.`)
})


let formulario = document.getElementById('formSubmit');
formulario.addEventListener ('submit',validarFormulario);

function validarFormulario (e){
    e.preventDefault();
}