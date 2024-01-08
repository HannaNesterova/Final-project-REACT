import { useState } from 'react';
import './App.css';
import ContactHeader from './components/Contact_header/ContactHeader';
import Footer from './components/Footer/Footer';
import { items } from './components/Items/items';





function App() {

    const [valueOfItem, setValueOfItem] = useState('');
     console.log(valueOfItem)

     const [button, setButton] = useState('');
     console.log('button')
     
     const [filteredItems , setFilteredItems] = useState(items); 
     console.log(filteredItems)



  return (
    <div>
    <div className="app_wrapper">

      <ContactHeader valueOfItem={valueOfItem}
      setValueOfItem={setValueOfItem}
      button={button}
      setButton={setButton}
      filteredItems={filteredItems}
      setFilteredItems={setFilteredItems}


      />
    </div>
      <Footer />
    </div>
  );
}

export default App;
