function saludo(cliente){
    alert('Hola ' + cliente + ', a continuación realizaremos juntos la cotización de tu vehículo.')
}
let nombre = prompt('Bienvenido, ingresa por favor tu nombre:')
saludo(nombre)

let precioAuto = prompt('Ingresa el precio del auto que deseas comprar. \n\nColoca el monto sin puntos y sin comas, solo números.')
while (precioAuto < 0){
    alert('El valor ingresado debe ser mayor a 0')
    precioAuto = prompt('Ingresa el precio del auto que deseas comprar. \n\nColoca el monto sin puntos y sin comas, solo números.')
}

let entrega = prompt('Ahora ingresa el monto que queres entregar por el vehículo. \n\nRrecorda ingresar el monto sin puntos y sin comas, solo números.')
while (entrega < 0){
    alert('El valor ingresado debe ser mayor a 0')
    precioAuto = prompt('Ingresa el precio del auto que deseas comprar. \n\nRecorda ingresar el monto sin puntos y sin comas, solo números.')
}
let resta = precioAuto - entrega
alert('El monto que resta abonar es $' + resta)

let cuotas = prompt('¿En cuantas cuotas desea pagar la diferencia? \n\nCuotas disponibles de 1 a 72')
let cuotaTotal = resta / cuotas * 1.3
for(let i=1;i<=cuotas;i++){
    console.table(`Cuota numero `+ i + `: $${cuotaTotal}`)
}

//BUSQUEDA DE VEHÍCULOS

let vehiculos = [
    {Marca: 'Fiat', 
    Modelo: 'Palio', 
    Color: 'Rojo', 
    Categoria: 'Sedan', 
    Km: 95000, 
    Fabricacion: 2013, 
    Precio: 1500000
},
    {Marca: 'Fiat', 
    Modelo: 'Cronos', 
    Color: 'Blanco', 
    Categoria: 'Sedan', 
    Km: 0, 
    Fabricacion: 2022, 
    Precio: 2900000
},
    {Marca: 'Peugeot', 
    Modelo: '408', 
    Color: 'Gris', 
    Categoria: 'Sedan', 
    Km: 83000, 
    Fabricacion: 2014, 
    Precio: 2000000
},
    {Marca: 'Jeep', 
    Modelo: 'Renegade', 
    Color: 'Blanco', 
    Categoria: 'SUV', 
    Km: 0, 
    Fabricacion: 2021, 
    Precio: 3750000
},
    {Marca: 'Toyota', 
    Modelo: 'SW4', 
    Color: 'Champagne', 
    Categoria: 'SUV', 
    Km: 111500, 
    Fabricacion: 2013, 
    Precio: 5750000
},
    {Marca: 'Suzuki', 
    Modelo: 'Vitara', 
    Color: 'Azul', 
    Categoria: 'SUV', 
    Km: 57400, 
    Fabricacion: 2017, 
    Precio: 4500000
},
    {Marca: 'Volkswagen', 
    Modelo: 'Amarok', 
    Color: 'Azul', 
    Categoria: 'Pick-up', 
    Km: 0, 
    Fabricacion: 2022, 
    Precio: 5100000
},
    {Marca: 'Chevrolet', 
    Modelo: 'S10', 
    Color: 'Blanco', 
    Categoria: 'Pick-up', 
    Km: 0, 
    Fabricacion: 2022, 
    Precio: 7999999
},
    {Marca: 'Volkswagen', 
    Modelo: 'Amarok', 
    Color: 'Blanco', 
    Categoria: 'Pick-up', 
    Km: 0, 
    Fabricacion: 2022, 
    Precio: 3000000
},
    {Marca: 'Toyota', 
    Modelo: 'Hilux', 
    Color: 'Gris', 
    Categoria: 'Pick-up', 
    Km: 178000, 
    Fabricacion: 2014, 
    Precio: 4500000
},
]

//METODO FIND
let buscar = 'Fiat'
let buscado = vehiculos.find(vehiculos => vehiculos.Marca === buscar)
console.log(buscado)
console.table(buscado)

//METODO FILTER
let filtrar = 'Toyota'
let filtrado = vehiculos.filter(vehiculos => vehiculos.Marca === filtrar)
console.log(filtrado)

//METODO SORT
let ordenado = vehiculos.sort((x,y) => x.Precio-y.Precio)
console.table(ordenado)

//METODO MAP
let listaAutos = vehiculos.map(vehiculos => vehiculos.Marca + ', ' + vehiculos.Modelo + ', ' + '$' +vehiculos.Precio)
console.table(listaAutos)