import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemCount from "./ItemCount"




const App = () =>{


const mensaje = "Bienvenidos a TECNOPOLIS"

const onAdd = (contador) => {
  alert("Se agrego al carrito con exito");
  console.log(contador)



}

  return (
  <>
  <NavBar />
  <ItemListContainer greeting={mensaje} />
  <ItemCount stock={30} onAdd={onAdd} initial={0} />
  </>
  )
}


export default App;
