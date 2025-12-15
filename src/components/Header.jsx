import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";


const Header = () => {
    const [showDropdown, setShowDropdown]= useState(false);
    const {cart, removeFromCart, clearCart} = useCart();
    const itemCount=cart.reduce((acc,item)=>acc + item.qty,0);
    const total=cart.reduce((acc,item)=>acc + item.price*item.qty,0).toFixed(2);

    return(
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
                ShopMate
            </h1>
            <div className="relative">
                <button className="cursor-pointer" onClick={()=>setShowDropdown(!showDropdown)}>
                     <FaShoppingCart className="text-2xl text-gray-700"/>
                {
                    itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )
                }

                </button>
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg p-4 z-10">
                        <h2 className="font-semibold mb-2">Cart Summary</h2>
                        {cart.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty.</p>
                        ):(<>
                        <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                            {cart.map(item=>(
                              <li key={item.id} className="flex justify-between items-center py-2">
                                <div>
                                    <p className="font-semibold">
                                        {item.name} 
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       { item.qty} x ${item.price.toFixed(2)}
                                    </p>

                                </div>
                                <button onClick={()=>removeFromCart(item.id)} className="text-sm text-red-500 hover:underline">
                                    Remove
                                    
                                </button>

                              </li> 
                            ))}


                        </ul>
                        <div className="mt-4 flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>${total}</span>

                        </div>
                        <button onClick={clearCart} className="w-full mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                            Clear Cart
                        </button>
                        </>) }
                        
                    </div>
                )}
               
            </div>

        </header>

    );
}

export default Header;