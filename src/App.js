import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = "Hola mundo!"/>
    </>
  );
}

export default App;
