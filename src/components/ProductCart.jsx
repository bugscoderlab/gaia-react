import { useState } from "react"

const productList = [
    {"title": "product 1", "price": 1.50, "inCart": false},
    {"title": "product 2", "price": 3.50, "inCart": false},
    {"title": "product 3", "price": 4.50, "inCart": false},
    {"title": "product 4", "price": 6.50, "inCart": false},
    {"title": "product 5", "price": 7.50, "inCart": false},
]

function getCartTotalPrice(productList) {
    return productList
        .filter(val => val.inCart == true)
        .reduce((totalPrice, val) => totalPrice += val.price, 0)
}

function ProductCart() {
    const [product, setProduct] = useState(productList)
    const [totalPrice, setTotalPrice] = useState(getCartTotalPrice(productList))

    const addToCart = (key) => {
        const updatedProducts = product.map((val, id) => (
            id === key ? { ...val, inCart: true } : val
        ))
        
        setProduct(updatedProducts)
        setTotalPrice(getCartTotalPrice(updatedProducts))
    }

    return(<>
    Cart (Price: {totalPrice})
    <ul>
        {product
            .filter(val => val.inCart == true)
            .map((val, key) => (
            <li key={key}>
                title: {val.title} price: {val.price}
            </li>
        ))}
    </ul>
    Product
    <ul>
        {product.map((val, key) => (
            <li key={key}>
                title: {val.title} price: {val.price} <button onClick={() => addToCart(key)} value="add" />
            </li>
        ))}
    </ul>
    </>)
}

export default ProductCart