import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();


export function ProductProvider({ children })   {

  const [products,setProducts] = useState([]);
  const [lodading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    // Fetch products from an API or define them statically
    const fetchProducts = async () => {
      try {
        // Simulate API call
        const res = await fetch('/api/products') 
        if(!res.ok)
          throw new Error('Failed to fetch products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
        
      } catch (err) {
        setError(err.message);
        
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return(
    <ProductContext.Provider value={{products,lodading,error}}>
        {children}

    </ProductContext.Provider>
  )


  
}
