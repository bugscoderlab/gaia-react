function ProductCard({id, name, img, price, desc}) {
    return(<>
        <p>{name}</p>
        <div><img src={img}/></div>
        <p>{price}</p>
        <p>{desc}</p>
        <p>button id={id}</p>
    </>)
}

export default ProductCard;