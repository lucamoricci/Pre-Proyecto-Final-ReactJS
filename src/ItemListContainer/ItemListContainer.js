import React from "react"
import {useState, useEffect} from "react"
import { products } from "../assets/productos"
import { CustomFetch } from "../Components/utils/CustomFetch"
import { ItemList } from "./ItemList/ItemList"



const ItemListContainer = ({greeting}) => {


    const [listProducts, setListProducts] = useState([])

    useEffect (() =>{
        CustomFetch(products)
            .then(res => setListProducts(res))
    }, [])



    return(
        <>
        <h1>{greeting}</h1>
        <ItemList listProducts={listProducts} />


        </>
    )
}

export default ItemListContainer