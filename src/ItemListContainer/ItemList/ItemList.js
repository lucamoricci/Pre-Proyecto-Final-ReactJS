import { products } from "../../assets/productos"
import {Item} from "./Item/Item"



const ItemList = ({listProducts}) => {

    return(
        <>
            {listProducts.map((products, i)=> <Item key={`${products.products}-${i}`} product = {products} />)}
        </>
    )
}

export {ItemList}