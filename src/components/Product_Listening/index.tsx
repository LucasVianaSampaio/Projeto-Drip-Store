import { Link } from "react-router-dom";
import ProductCard from "../Product_Card";

interface Product {
  id: number;
  image_src: string;
  product_name: string;
  price: number;
  priceDiscount?: number;
}

interface ProductListeningProps {
  productList: Product[];
}

function ProductListening({ productList }: ProductListeningProps) {
  return (
    <div className="inline-flex flex-wrap gap-2">
      {productList.map((product, index) => (
        <Link to={`/produtos/${product.id}`}>
          <ProductCard
            key={index}
            image_src={product.image_src}
            price={product.price}
            product_name={product.product_name}
            priceDiscount={product.priceDiscount}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductListening;
