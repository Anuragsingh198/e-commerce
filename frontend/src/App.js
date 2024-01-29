import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import HomeScreen from './screens/HomeScreen';
import Productdetails from './screens/Productdetails';
import CartScreen from './screens/cartScreen';
function App() {
  return (
    <Router>
      <Header />
      <main className='my-3' style={{ margin: '0px 80px' }}>
        <Routes>
          <Route path='/' element={<HomeScreen/>}  exact />
          <Route path='/product/:id' element={<Productdetails/>} exact/>
          <Route path='/cart/:id?' element={<CartScreen/>} exact/>
        </Routes> 
      </main>
      <Footer />
    </Router>
  ); 
}

export default App;
