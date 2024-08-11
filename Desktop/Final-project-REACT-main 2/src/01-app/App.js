import "./App.css";
import ContactHeader from "../01-app/routes/ContactHeader";
import Footer from "../03-pages/footer/Footer";

function App() {
  return (
    <div>
      <div className="app_wrapper">
        <ContactHeader />
      </div>
      <Footer />
    </div>
  );
}

export default App;
