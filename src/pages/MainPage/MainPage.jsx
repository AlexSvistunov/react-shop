import { useEffect, useState } from "react";
import './MainPage.css'

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("https://shop-frontent.ru/wp-json/wp/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })

      .catch((error) => console.log(error));
  }, []);

  const addToCart = (productId) => {
    setCart([...cart, productId])

  }

  console.log(cart)
  return (
    <div className="main-page">
      <h1>Our products</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-item">
              <h3>{product.title === 'Xiaomi Робот пылесос Vacuum Mop 3C моющий CN' ? 'Xiaomi Робот пылесос' : product.title}</h3>
              <img src={product.image} alt={product.title} />
              <button onClick={() => addToCart(product.id)}>Добавить в корзину</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
