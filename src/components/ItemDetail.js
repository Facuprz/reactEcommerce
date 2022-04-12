import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {

    // const [itemCount, setItemCount] = useState()

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
    }

    return (
        <Container>
            <Card className="text-center">
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Title>Descripcion</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Stock: {item.stock}
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default ItemDetail;