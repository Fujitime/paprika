import Navbar from "./navbar";
import Footer from "./footer";
import Meta from "./meta";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      <div className="pt-16"> {/* Add padding-top to prevent content from being hidden behind the navbar */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
