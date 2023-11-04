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
  { path: "/description", element: <Description /> },
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
      {/* <p className="bg-green-400 text-white border-4 border-yellow-600">
        {import.meta.env.VITE_SARA}
      </p> */}

      {/* <h1 className="text-3xl">Title 1</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base">A regular para</p>
      <p className="text-sm">samll para</p>
      <p className="text-xs">one more regular para</p> */}

      {/* <p className="truncate">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eaque
        suscipit eveniet inventore assumenda, expedita adipisci molestias
        quisquam amet nesciunt quam sit laboriosam neque distinctio, repellendus
        qui exercitationem veniam pariatur eius dicta. Asperiores, dolorem
        voluptatem necessitatibus veritatis alias, blanditiis, recusandae
        perspiciatis culpa optio maxime cumque.
      </p> */}

      {/* <div className="flex min-h-screen space-x-4">
        <div className="w-1/5 bg-green-500">Sidebar</div>
        <div className="w-4/5 bg-red-500 h-5">Content</div>
      </div> */}
      {/* <button class="p-4 rounded bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:text-white">
        hello
      </button> */}

      {/* <div className="container text-white text-center mx-auto p-4 bg-blue-500">
        Hello
      </div> */}
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  );
}

export default App;
