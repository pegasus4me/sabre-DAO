import { RouterProvider, createRouter } from '@tanstack/react-router'
import dotenv from "dotenv"
dotenv.config();
// Import the generated route tree
import { routeTree } from './routeTree.gen'


const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}




function App() {
  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
