import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
