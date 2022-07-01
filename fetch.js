const lista = document.querySelector('#listado')

fetch('/catalogo.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h3>${producto.nombre}</h3>
                <h4>${producto.precio}</h4>
                <h4>Modelo: ${producto.modelo}</h4>
                <h4>Kilometros: ${producto.km}</h4>
                <hr/>
            `
   
            lista.append(li)
        })
    })