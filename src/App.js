import './App.css';
import Header from './Header/Header'
import Body from './Body/Body'
import Products from './Products'
import Footer from './Footer/Footer'
import Blog from  './Body/Blog'
import Marques from './Body/Marques'
import Categories from './Body/Categories'
function App() {
  return (
       <div className="app">
          <Header/>
          <Body/>
          <Products/>
          <Categories/>
          <Blog/>
          <Marques/>
          <Footer/>
       </div>
  );
}
export default App;
