
const Item = ({product}) => {

    return (
        <>
            <h2> {product.product} </h2>
            <img src={product.image}/> 
            <p> {product.price} </p>
        </>
    )
}

export {Item}