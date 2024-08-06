import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListeningPage from "./pages/ProductListeningPage";
import ProductViewPage from "./pages/ProductViewPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/produtos",
    element: <ProductListeningPage/>,
  },
  {
    path: "/produtos/:id",
    element: <ProductViewPage/>
  }
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
