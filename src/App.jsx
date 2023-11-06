import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Description from "./pages/Description";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import { AuthorizeUser } from "./middleware/Auth";

// root routes
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/description/:id", element: <Description /> },
  {
    path: "/dashboard",
    element: (
      <AuthorizeUser>
        <Dashboard />
      </AuthorizeUser>
    ),
  },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  );
}

export default App;
