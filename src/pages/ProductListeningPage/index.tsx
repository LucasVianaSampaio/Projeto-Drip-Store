
import FilterGroup from "../../components/FilterGroup";
import ProductListening from "../../components/Product_Listining";
import Section from "../../components/Section";
import Layout from "../../components/layout";

function ProductListeningPage() {
  window.scrollTo(0, 0);
  const productList = [
    {
      id: 9,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 10,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 11,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 12,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 13,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 14,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 15,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 16,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 17,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 18,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 19,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 20,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 21,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 22,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: 23,
      product_name: "K-Swiss V8 - Masculino",
      image_src: "./productThumb.png",
      price: 200,
      priceDiscount: 149.9,
    },
  ];

  const brandOptions = [
    { text: "Adiddas", value: "opt1" },
    { text: "Calenciaga", value: "opt2" },
    { text: "K-Swiss", value: "opt3" },
    { text: "Nike", value: "opt4" },
    { text: "Puma", value: "opt5" },
  ];

  const categoryOptions = [
    { text: "Esporte e lazer", value: "opt1" },
    { text: "Casual", value: "opt2" },
    { text: "Utilitário", value: "opt3" },
    { text: "Corrida", value: "opt4" },
  ];

  const genderOptions = [
    { text: "Masculino", value: "opt1" },
    { text: "Feminino", value: "opt2" },
    { text: "Unisex", value: "opt3" },
  ];

  const statusOptions = [
    { text: "Novo", value: "new" },
    { text: "Usado", value: "used" },
  ];

  return (
    <Layout>
      <div className="mt-6 mx-auto w-full max-w-7xl flex ">
        <div className="min-w-[300px]">
          <div className="inline-flex border border-[#474747] gap-4 py-4 px-5 rounded tracking-wide text-[#474747]">
            <h2 className="font-bold">Ordenar por: </h2>
            <select>
              <option value="menor preço">Menor preço</option>
              <option value="maior preço">Maior preço</option>
            </select>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-[#474747] tracking-wide">
              Filtrar por
            </h2>
            <div className="mt-7 space-y-6">
              <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={brandOptions}
              />
              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={categoryOptions}
              />
              <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={genderOptions}
              />
              <FilterGroup
                title="Gênero"
                inputType="radio"
                options={statusOptions}
              />
            </div>
          </div>
        </div>
        <div className="ml-12">
          <Section
            title="Resultados para tênis - 389 produtos"
            titleAlign="left"
          >
            <ProductListening productList={productList} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListeningPage;
