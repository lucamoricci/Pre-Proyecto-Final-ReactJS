import "./NavBar.css"
import logo from "../../assets/logo.jpg"
import CartWIdget from "../Cartwidget/CartWidget"


const NavBar = () => {
    return(
        <>
        <header>
        <img src={logo} alt= "loguito" />
        <nav>
            <a href="">Productos</a>
            <a href="">Servicios</a>
            <a href="">Acerca de nosotros</a>
            <a href="">Contacto</a>
        </nav>
        <CartWIdget/>
        </header>
        </>
    )
}

export default NavBar