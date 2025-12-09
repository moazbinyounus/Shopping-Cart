import ProductCard from "./ProductCard";

const ProductsList = ({products}) => {
    return (  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
        {products.map(product => (
            <ProductCard product={product} key={product.id}/>
          
        ))}

      </div>
    );
}
 
export default ProductsList;
