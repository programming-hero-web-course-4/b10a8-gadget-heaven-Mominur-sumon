import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [Cards, setCards] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [purchased, setPurchased] = useState([]);

  return (
    <AppContext.Provider value={{ Cards, setCards, wishList, setWishList,purchased, setPurchased }}>
      {children}
    </AppContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>

      <RouterProvider router={router}>

      </RouterProvider>

    </AppProvider>
  </StrictMode>,
)
