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
let buscar = 'Ferrari'
let buscado = vehiculos.find(vehiculos => vehiculos.Marca === buscar)
console.log(buscado)

//METODO FILTER
let filtrar = 'Toyota'
let filtrado = vehiculos.filter(vehiculos => vehiculos.Marca === filtrar)
console.log(buscado)

//METODO SORT
let ordenado = vehiculos.sort((x,y) => x.Fabricacion-y.Fabricacion)
console.table(ordenado)

//METODO MAP
let listaAutos = vehiculos.map(vehiculos => vehiculos.Marca + ', ' + vehiculos.Modelo + ', ' + '$' +vehiculos.Precio)
console.table(listaAutos)