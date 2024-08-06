import Footer from "../Footer";
import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow mb-36 bg-[#f9f8fe]">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
