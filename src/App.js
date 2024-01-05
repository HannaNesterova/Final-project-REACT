import { useState } from 'react';
import {items} from './components/Items/items';
import './App.css';
import ContactHeader from './components/Contact_header/ContactHeader';
import Footer from './components/Footer/Footer';
import ItemsPage from './components/Items/ItemsPage';




function App() {
  const [item, setItem] = useState(items);
  console.log(item)

  return (
    <div>
    <div className="app_wrapper">
      <ContactHeader />
    </div>

    <ItemsPage items={item}/>
      <Footer />
    </div>
  );
}

export default App;
