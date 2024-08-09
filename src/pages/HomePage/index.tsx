import Gallery from "../../components/Gallery";
import ProductListening from "../../components/Product_Listening";
import Section from "../../components/Section";
import Layout from "../../components/layout";

function HomePage() {
  window.scrollTo(0, 0);

  const images = [
    { src: "/sapatoBranco.png", alt: "sapato branco" },
    { src: "/sapatoBranco.png", alt: "sapato branco" },
    { src: "/sapatoBranco.png", alt: "sapato branco" },
    { src: "/sapatoBranco.png", alt: "sapato branco" },
  ];

  const productList = [
    {
      id: 1,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 2,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 3,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 4,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 5,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 6,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 7,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 8,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
  ];

  return (
    <div className="bg-slate-50">
      <Layout>
        <div className="flex bg-[#F5F5F5] items-center justify-around ">
          <div className="w-1/2  max-w-md break-words space-y-9">
            <div className="space-y-3">
              <p className="text-[#F6AA1C] font-bold">
                Melhores ofertas personalizadas
              </p>
              <h1 className="font-extrabold text-5xl">
                Queima de <br /> stoque Nike 🔥
              </h1>
              <p className="text-[#474747]">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
            </div>
            <button className="bg-[#C92071] text-white px-14 py-2 rounded-lg font-bold hover:bg-[#c92058]">
              Ver Ofertas
            </button>
          </div>
          <div className="w-1/2 ">
            <Gallery height={681} width={1440} images={images} />
          </div>
        </div>

        <div className="mt-6 mx-auto w-full max-w-7xl">
          <Section title="Coleções em destaque" titleAlign="left">
            <div className="inline-flex gap-3 mt-4">
              <div className="relative">
                <img
                  className="absolute left-7 top-4"
                  src="/desconto30Porcento.png"
                  alt=""
                />
                <img
                  className="rounded"
                  src="/collection-1.png"
                  alt="Coleção 1"
                />
                <button className="bg-white text-[#C92071] px-12 py-3 rounded-lg font-bold absolute bottom-12 left-7">
                  Comprar
                </button>
              </div>

              <div className="relative">
                <img
                  className="absolute left-7 top-4"
                  src="/desconto30Porcento.png"
                  alt=""
                />
                <img
                  className="rounded"
                  src="/collection-1.png"
                  alt="Coleção 1"
                />
                <button className="bg-white text-[#C92071] px-12 py-3 rounded-lg font-bold absolute bottom-12 left-7">
                  Comprar
                </button>
              </div>

              <div className="relative">
                <img
                  className="absolute left-7 top-4"
                  src="/desconto30Porcento.png"
                  alt=""
                />
                <img
                  className="rounded"
                  src="/collection-1.png"
                  alt="Coleção 1"
                />
                <button className="bg-white text-[#C92071] px-12 py-3 rounded-lg font-bold absolute bottom-12 left-7">
                  Comprar
                </button>
              </div>
            </div>
          </Section>
        </div>

        <div className="mt-20 mx-auto w-full max-w-7xl">
          <Section title="Coleções em destaque" titleAlign="center">
            <div className="flex justify-center gap-9 mt-5">
              <div>
                <img
                  src="./Camisetas.svg"
                  alt="Camisetas"
                  height={104}
                  width={104}
                />
                <p className="font-bold text-sm text-[#474747] text-center">
                  Camisetas
                </p>
              </div>

              <div>
                <img src="./Calças.svg" alt="Calças" />
                <p className="font-bold text-sm text-[#474747] text-center">
                  Calças
                </p>
              </div>

              <div>
                <img src="./Calças.svg" alt="Calças" />
                <p className="font-bold text-sm text-[#474747] text-center">
                  Bonés
                </p>
              </div>

              <div>
                <img src="./Headphones.svg" alt="Fones de ouvido" />
                <p className="font-bold text-sm text-[#474747] text-center">
                  Headphones
                </p>
              </div>

              <div>
                <img src="./Tenis.svg" alt="Tenis" />
                <p className="font-bold text-sm text-[#474747] text-center">
                  Tênis
                </p>
              </div>
            </div>
          </Section>
        </div>

        <div className="mt-36 mx-auto w-full max-w-7xl">
          <Section
            title="Produtos em alta"
            titleAlign="left"
            link={{ text: "Ver todos", href: "/produtos" }}
          >
            <ProductListening productList={productList} />
          </Section>
        </div>

        <div className="flex items-center mt-48 mx-auto w-full max-w-7xl">
          <div className="w-1/2">
            <img src="./sapatosJordan.png" alt="Sapatos Jordan" />
          </div>
          <div className="w-1/2 max-w-lg break-words">
            <div className="space-y-5">
              <p className="font-bold text-sm	text-[#C92071] tracking-wide	">
                Oferta especial
              </p>
              <h2 className="font-bold text-5xl text-[#474747]">
                Air Jordan edição de <br /> colecionador
              </h2>
              <p className="text-[#474747]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
            </div>
            <button className="bg-[#C92071] text-white px-14 py-2 rounded-lg font-bold tracking-wide mt-8 hover:bg-[#c92058]">
              Ver oferta
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default HomePage;
