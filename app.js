//Molde para los items
class Item{
    constructor(nombre,precio,imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

//Items del juego
const bolivia = new Item("Bolivia", 1 , "bolivia.png" );
const españa = new Item("España", 1 , "españa.png" );
const canada = new Item("Canadá", 1 , "canada.jpg" );

//Array para el inventario donde vamos a ir metiendo los items que compremos
const inventario = [];

//Oro del juego
let oro = 3;

//Elementos del Dom
const elOro= document.querySelector("#oro span");
elOro.innerText=oro;
const elInventario = document.getElementById("inventario");

function comprar(itemDelJuego){
    if (oro - itemDelJuego.precio >= 0){
        inventario.push(itemDelJuego);
        oro -= itemDelJuego.precio
        actualizarHTML();
    }else{
        alert(`Disculpa Viajero, no quedan pasajes suficiente para el destino ${itemDelJuego.nombre}.`);
    }
}

function vender(nombreDelItem){
    const  ItemEncontrado = inventario.find((item) => item.nombre == nombreDelItem);
        
    if (ItemEncontrado){

        oro += ItemEncontrado.precio;
        const indice = inventario.indexOf(ItemEncontrado);
        inventario.splice(indice,1);

        actualizarHTML();

    }
}


function actualizarHTML(){
    elOro.innerText= oro;
    elInventario.innerHTML="";
    for (const itemDelJuego of inventario){
        const indice = inventario.indexOf(itemDelJuego);
        const li = `
        <li onclick="vender('${itemDelJuego.nombre}')">
            <img src="img/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}" />
        </li>
        `;
        elInventario.innerHTML += li;
    }

}
