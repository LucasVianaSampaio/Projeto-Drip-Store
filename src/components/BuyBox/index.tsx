type BuyBoxProps = {
  name: string;
  reference: number;
  stars: string;
  rating: number;
  price: string;
  priceDiscount?: string;
  description: string;
  children: React.ReactNode;
};

const BuyBox: React.FC<BuyBoxProps> = ({
  children,
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
}) => {
  return (
    <div className="flex-col">
      <h1 className="font-bold text-3xl	tracking-wide">{name}</h1>
      <p className="text-xs	text-[#666666] tracking-wider font-medium my-2">
        Casual | Nike | Ref:{reference}
      </p>
      <div className="inline-flex gap-3">
        <img src="../../public/Stars.svg" alt="total de estrelas" />
        <div className="bg-[#F6AA1C] px-4 py-1 rounded inline-flex items-center gap-1">
          <p className="font-black text-white text-sm tracking-wide">{stars}</p>
          <img className="w-4 h-4" src="../../public/Star.svg" alt="estrela" />
        </div>
        <p className="font-medium	text-[#8F8F8F] tracking-wide	">
          ({rating} avaliações)
        </p>
      </div>
      <div className=" items-baseline gap-1 my-4">
        {priceDiscount ? (
          <div className="inline-flex items-baseline gap-1">
            <p className="tracking-wide	text-[#474747]">R$</p>
            <p className="font-bold	text-3xl tracking-wide text-[#474747]">
              {priceDiscount}
            </p>
            <p className="text-[#CCCCCC] line-through">{price}</p>
          </div>
        ) : (
          <div className="inline-flex items-baseline gap-1">
            <p className="tracking-wide	text-[#474747]">R$</p>
            <p className="font-bold	text-3xl tracking-wide text-[#474747]">
              {price}
            </p>
          </div>
        )}
      </div>

      <div className="my-5">
        <p className="font-bold text-[#8F8F8F] tracking-wide">
          Descrição do produto
        </p>
        <p className="text-[#474747] tracking-wide">{description}</p>
      </div>

      {children}

      <button className="bg-[#FFB31F] px-20 py-4 font-bold text-[#F5F5F5] tracking-wider rounded	mt-6">
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;
