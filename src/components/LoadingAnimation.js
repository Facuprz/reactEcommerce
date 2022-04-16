import { Spinner } from "react-bootstrap";

const LoadingAnimation = () => {
    return (
        <div className="text-center p-5">
            <Spinner animation="border" role="status" style={{ width: '3rem' , height: '3rem'}}>
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </div>
    )
}

export default LoadingAnimation;