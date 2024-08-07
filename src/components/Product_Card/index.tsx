interface ProductCardProps {
  image_src: string;
  product_name: string;
  price: number;
  priceDiscount?: number;
}

function ProductCard({
  image_src,
  product_name,
  price,
  priceDiscount,
}: ProductCardProps) {
  return (
    <>
      <div className="items-center">
        <img width={292} height={321} src={image_src} alt={product_name} />
        <p className="text-[#1F1F1F] text-2xl	">{product_name}</p>
        {priceDiscount ? (
          <div className="inline-flex gap-2">
            <p className="text-[#8F8F8F] text-2xl line-through">${price}</p>
            <p className="text-[#1F1F1F] text-2xl font-bold">
              ${priceDiscount}
            </p>
          </div>
        ) : (
          <p className="text-[#474747] text-2xl">${price}</p>
        )}
      </div>
    </>
  );
}

export default ProductCard;
