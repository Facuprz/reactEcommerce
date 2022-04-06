

const Item = ({id, title, description, price, stock, image}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={image} alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>ID: {id}</p>
                <p>Descripcion: {description}</p>
                <p>Stock: {stock}</p>
                <p className="card-text">Precio: {price}</p>
                <a href="#" className="btn btn-primary">Detalles</a>
            </div>
        </div>
    );
}

export default Item;