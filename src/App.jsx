import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Route";
import { useEffect } from "react";
import { fetchProducts } from "./features/productsSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthStatus } from "./selectors/authSelectors.jsx";
import { selectProductsStatus } from "./selectors/ProductsSelectors.jsx";

function App() {
    const dispatch = useDispatch();
    const ProductsStatus = useSelector(selectProductsStatus);
    useEffect(() => {
        if (ProductsStatus === "idle") {
            dispatch(fetchProducts());
        }
    }, [ProductsStatus, dispatch]);

    return (
        <>
            <RouterProvider router={Router} />
        </>
    );
}

export default App;
