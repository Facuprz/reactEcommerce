import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ id, title, brand, price, stock, image }) => {
    return (
        <Col>
            <Card className='text-center' border="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        ID: {id}
                    </Card.Text>
                    <Card.Text>
                        Marca: {brand}
                    </Card.Text>
                    <Card.Text>
                        Stock: {stock}
                    </Card.Text>
                    <Card.Text>
                        Precio: $ {price}
                    </Card.Text>
                    <Link to = {`/item/${id}`}>            
                        <Button variant="primary">Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;