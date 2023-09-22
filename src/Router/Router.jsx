import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import CartView from "../components/CartView/CartView"
import Order from "../components/Order/Order";
 import{
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useCartContext } from "../components/CartContext/CartContext";
import Form from "../components/Form/Form"

 

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
                    <Route path="/order" element={<Order/>} />
                    <Route path="/form" element={<Form/>}/>
                  </Routes>
         </BrowserRouter>
    )
}


 