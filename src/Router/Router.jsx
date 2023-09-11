import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import Footer from "../components/Footer/Footer"
import{
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useCartContext } from "../components/CartContext/CartContext";


export default function Router (){
    const { cartItemCount } = useCartContext()
    return(
        <BrowserRouter>
            <NavBar cartItemCount={cartItemCount} />
                {/* <NavBar/> */}
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}  />
                    <Route path='/category/:id' element={<ItemListContainer greeting="Products"/>} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                </Routes>
            <Footer/>   
        </BrowserRouter>
    )
}


 