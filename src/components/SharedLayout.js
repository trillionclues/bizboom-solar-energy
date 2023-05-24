// elements
import Navbar from './Navbar';
import Footer from './Footer';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
