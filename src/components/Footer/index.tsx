import Informations from "../Informations";
import Logo from "../Logo";

const infoFooter = [
  {
    text: "Sobre o Drip Store",
    link: "#",
  },
  {
    text: "Segurança",
    link: "#",
  },
  {
    text: "Wishist",
    link: "#",
  },
  {
    text: "Blog",
    link: "#",
  },
  {
    text: "Trabalhe conosco",
    link: "#",
  },
  {
    text: "Meus pedidos",
    link: "#",
  },
];

const categoriesFooter = [
  {
    text: "Camisetas",
    link: "#",
  },
  {
    text: "Calças",
    link: "#",
  },
  {
    text: "Bonés",
    link: "#",
  },
  {
    text: "Headphones",
    link: "#",
  },
  {
    text: "Tênis",
    link: "#",
  },
];

const contactFooter = [
  {
    text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    link: "#",
  },

  {
    text: "(85) 3051-3411",
    link: "#",
  },
];

function Footer() {
  return (
    <>
      <div className="bg-[#1F1F1F] bottom-0 w-full text-white">
        <div className="flex items-start gap-16 mb-32">
          <div className="mt-11 ml-11 space-y-10">
            <Logo isHeaderImage={false} />
            <p className="max-w-96 break-words ">
              A Drip Store é a loja definitiva para os amantes da moda urbana.
              Oferecendo uma seleção exclusiva de roupas e acessórios das marcas
              mais descoladas, a Drip Store se destaca por seu estilo autêntico
              e contemporâneo
            </p>
            <div className="flex gap-10">
              <img src="/facebookIcon.png" alt="Facebook" />
              <img src="/instagramIcon.png" alt="Instagram" />
              <img src="/twitterIcon.png" alt="Twitter" />
            </div>
          </div>

          <Informations title="Informação" informations={infoFooter} />
          <Informations title="Categorias" informations={categoriesFooter} />
          <Informations title="Categorias" informations={contactFooter} />
        </div>

        <div className="flex justify-center items-center">
          <hr className="w-11/12 border-[#474747]" />
        </div>

        <div className="flex justify-center py-8">
          <h1>@ 2024 Digital College</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
