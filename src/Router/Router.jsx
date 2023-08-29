import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import{
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function Router (){
    return(
        <BrowserRouter>
            <NavBar/>
             <Routes>
                <Route path='/' element={<ItemListContainer/>}  />
                <Route path='/category/:id' element={<ItemListContainer greeting="Products"/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>

        </BrowserRouter>
    )
}
