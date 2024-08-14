import "./App.css";
import ContactHeader from "../01-app/routes/ContactHeader";
import Footer from "../04-widgets/footer/Footer";

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
