import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartItem = items.find(item => item.id === product._id);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if(cartItem && cartItem.quantity>0){
      navigate('/cart')
    }
    else{
      dispatch(addItemToCart(product));
    }
    
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg border hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center items-center">
        <img
          className="rounded-t-lg h-52 object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="mt-2">
          <span className="text-xl font-bold text-gray-800">
            ₹{product.price}
          </span>
          {product.discount && (
            <span className="text-sm text-red-500 ml-2 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <span className="text-sm text-yellow-500">{product.rating}⭐</span>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews} reviews)
          </span>
        </div>
        <div className="mt-3">
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            disabled={!product.inStock}
          >
            {cartItem ? `Added (${cartItem.quantity})` : product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
