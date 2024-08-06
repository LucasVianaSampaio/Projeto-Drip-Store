import { NavLink } from "react-router-dom";
import Logo from "../Logo";

function Header() {
  return (
    <>
      <div className="overflow-x-hidden pb-5">
        <div className="flex w-screen items-center flex-1 mt-5 justify-center">
          <Logo isHeaderImage={true}/>
          <div className="flex items-center ml-7 max-w-xl w-full h-14 bg-slate-50 rounded-lg">
            <input className="flex flex-1 outline-none h-full bg-transparent font" placeholder="Pesquisar produto..." />
            <img src="/Search.svg" alt="" />
          </div>
          <a href="#" className="ml-12 border-b text-[#474747] border-[#474747]">Cadastre-se</a>
          <button className="bg-[#C92071] text-white px-14 py-2 ml-7 rounded-lg hover:bg-[#c92058]">Entrar</button>
          <img className="ml-16" src="/carrinho_de_compras.png" alt="Carrinho de compras" />
        </div>
        <div className="flex w-screen items-center flex-1 mt-8 ml-12 gap-5">
          <NavLink to="/" style={({isActive}) => ({
            color: isActive? '#C92071' : '#474747',
            fontWeight: isActive? "bold" : "",
            borderBottom: isActive? '2px solid' : '',
          })}>
            Home
          </NavLink>
          <NavLink to="/produtos" style={({isActive}) => ({
            color: isActive? '#C92071' : '#474747',
            fontWeight: isActive? 'bold' : '',
            borderBottom: isActive? '2px solid' : '',
          })}>
            Produtos
          </NavLink>
          <NavLink to="/categorias" style={({isActive}) => ({
            color: isActive? '#C92071' : '#474747',
            fontWeight: isActive? 'bold' : '',
            borderBottom: isActive? '2px solid' : '',
          })}>
            Categorias
          </NavLink>
          <NavLink to="/pedidos" style={({isActive}) => ({
            color: isActive? '#C92071' : '#474747',
            fontWeight: isActive? 'bold' : '',
            borderBottom: isActive? '2px solid' : '',
          })}>
            Meus pedidos
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
