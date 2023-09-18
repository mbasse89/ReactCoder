import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import CartView from "../components/CartView/CartView"
import Footer from "../components/Footer/Footer"
import{
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useCartContext } from "../components/CartContext/CartContext";
 import CartItem from "../components/CartItem/CartItem";


export default function Router (){
    const { cartItemCount } = useCartContext()
    return(
        <BrowserRouter>
            <NavBar cartItemCount={cartItemCount} />
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}  />
                    <Route path='/category/:id' element={<ItemListContainer greeting="Products"/>} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cartview" element={<CartView />} />
                    {/* <Route path="/item" element={<CartItem/>} /> */}
                 </Routes>
            {/* <Footer/>    */}
        </BrowserRouter>
    )
}


 