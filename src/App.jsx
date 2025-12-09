import { useState,useEffect } from "react";
import ProductsList from "./components/ProductsList";

const App = () => {
  const [products,setProducts] = useState([]);
  const [lodading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    // Fetch products from an API or define them statically
    const fetchProducts = async () => {
      try {
        // Simulate API call
        const res = await fetch('http://localhost:8000/products') 
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

  return (  
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
      {lodading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ProductsList products={products}/>
      

      
    </div>
  );
}
 
export default App;