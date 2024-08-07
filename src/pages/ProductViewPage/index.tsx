import BuyBox from "../../components/BuyBox";
import Gallery from "../../components/Gallery";
import Layout from "../../components/layout";
import ProductListening from "../../components/Product_Listining";
import ProductOptions from "../../components/ProductOptions";
import Section from "../../components/Section";

function ProductViewPage() {
  window.scrollTo(0, 0);
  const image = [
    { src: "../public/produc-image-1.jpeg", alt: "imagem de sapato 1" },
    { src: "../public/produc-image-2.jpeg", alt: "imagem de sapato 2" },
    { src: "../public/produc-image-3.jpeg", alt: "imagem de sapato 3" },
    { src: "../public/produc-image-4.jpeg", alt: "imagem de sapato 4" },
    { src: "../public/produc-image-5.jpeg", alt: "imagem de sapato 5" },
  ];

  const products = [
    {
      id: 1,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "../productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 2,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "../productThumb.png",
      price: 49.9,
    },
    {
      id: 3,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "../productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 4,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "../productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
  ];
  return (
    <Layout>
      <div>
        <div className="mt-5 mx-auto w-full max-w-7xl flex gap-12">
          <div className="w-1/2">
            <Gallery
              height={570}
              width={700}
              radius={4}
              images={image}
              showThumbs
            />
          </div>
          <div className="w-1/2 max-w-lg break-words">
            <BuyBox
              name="Tênis Nike Revolution 6 Next Nature Masculino"
              reference={38416711}
              stars={4.7}
              rating={90}
              price="219,00"
              priceDiscount="200,00"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            >
              <div className="space-y-4">
                <ProductOptions
                  options={["39", "40", "41", "42", "43"]}
                  shape="square"
                  radius={4}
                  type="text"
                />

                <ProductOptions
                  options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
                  shape="circle"
                  radius={4}
                  type="color"
                />
              </div>
            </BuyBox>
          </div>
        </div>

        <div className="mt-16 mx-auto w-full max-w-7xl">
          <Section
            title="Produtos Relacionados "
            titleAlign="left"
            link={{ text: "Ver todos", href: "/produtos" }}
          >
            <ProductListening productList={products} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductViewPage;
