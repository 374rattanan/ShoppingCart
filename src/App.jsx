import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Skin care serum',
    href: '#',
    price: '฿480',
    imageSrc: 'https://images.pexels.com/photos/8361423/pexels-photo-8361423.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

  {
    id: 2,
    name: 'Hair serum',
    href: '#',
    price: '฿350',
    imageSrc: 'https://images.pexels.com/photos/7796226/pexels-photo-7796226.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Skin care serum',
    href: '#',
    price: '฿560',
    imageSrc: 'https://images.pexels.com/photos/7797231/pexels-photo-7797231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 4,
    name: 'Skin care serum',
    href: '#',
    price: '฿350',
    imageSrc: 'https://images.pexels.com/photos/7795848/pexels-photo-7795848.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 5,
    name: 'Skin care serum',
    href: '#',
    price: '฿320',
    imageSrc: 'https://images.pexels.com/photos/7795661/pexels-photo-7795661.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 6,
    name: 'Skin care gel',
    href: '#',
    price: '฿456',
    imageSrc: 'https://images.pexels.com/photos/7796743/pexels-photo-7796743.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 7,
    name: 'Skin care serum',
    href: '#',
    price: '฿290',
    imageSrc: 'https://images.pexels.com/photos/8054409/pexels-photo-8054409.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 8,
    name: 'Facial cream',
    href: '#',
    price: '฿259',
    imageSrc: 'https://images.pexels.com/photos/7797115/pexels-photo-7797115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 9,
    name: 'Skin care serum',
    href: '#',
    price: '฿345',
    imageSrc: 'https://images.pexels.com/photos/7796453/pexels-photo-7796453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 10,
    name: 'Skin care serum',
    href: '#',
    price: '฿325',
    imageSrc: 'https://images.pexels.com/photos/4735943/pexels-photo-4735943.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 11,
    name: 'Skin care serum',
    href: '#',
    price: '฿385',
    imageSrc: 'https://images.pexels.com/photos/7796592/pexels-photo-7796592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 12,
    name: 'Slap water',
    href: '#',
    price: '฿395',
    imageSrc: 'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
];

function ProductList({ addToCart }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8"> {}
        {}
        <h1 className="text-3xl font-bold mb-4 text-center text-stone-800 ">Product skin care</h1> {}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-stone-500 text-white py-2 rounded-lg hover:bg-stone-400"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function CartPage({ cart, removeFromCart }) {
  const shippingCost = 100; // ค่าส่งสินค้า

  const calculateTotal = () => {
    const productTotal = cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('฿', ''));
      return total + price * item.quantity;
    }, 0).toFixed(2);

    const totalWithShipping = (parseFloat(productTotal) + shippingCost).toFixed(2);
    return totalWithShipping;
  };

  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="mt-2 text-sm text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="flex items-center justify-between space-x-4">
              <div className="flex items-center">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-16 w-16 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium">{item.name}</h4>
                  <p className="text-gray-700">{item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                >
                  Remove 1
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-medium">Product Total: ฿{cart.reduce((total, item) => total + parseFloat(item.price.replace('฿', '')) * item.quantity, 0).toFixed(2)}</h3>
        <h3 className="text-lg font-medium">Shipping Cost: ฿{shippingCost.toFixed(2)}</h3>
        <h3 className="text-lg font-bold">Total with Shipping: ฿{calculateTotal()}</h3>
      </div>
    </div>
  );
}


function Navbar({ cart }) {
  return (
    <nav className="bg-yellow-950 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Shop
        </Link>
        <Link to="/cart" className="text-white relative">
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-[-10px] bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);

      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === productId);
      
      if (productInCart) {
        if (productInCart.quantity === 1) {
          return prevCart.filter((item) => item.id !== productId);
        }
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart;
    });
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}
