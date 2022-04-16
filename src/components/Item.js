import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ id, title, brand, price, stock, image }) => {
    return (
        <Col>
            <Card className='text-center' border="dark">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {brand}
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    <Link to = {`/item/${id}`}>            
                        <Button variant="primary" size="lg">Detalles</Button>
                    </Link>
                    <Card.Text>
                        Stock: {stock} unidades
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;