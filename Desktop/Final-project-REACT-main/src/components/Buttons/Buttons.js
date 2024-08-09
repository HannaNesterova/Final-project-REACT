import { items } from "../Items/items";

function Buttons ({ setFilteredItems}){

  
    const filterItems = (category) => {
        if (category === 'all') {
            setFilteredItems(items);
        } else  {
          const itemsAreFiltered = items.filter(element => element.category === category);
          setFilteredItems(itemsAreFiltered);
        }
      }


    return(
        <div>
            <h2>Top Selling Products</h2>
      <div className='filterItems'>
          <button onClick={() => filterItems('all')}>ALL</button>
          <button onClick={() => filterItems('Women')}>WOMEN</button>
          <button onClick={() => filterItems('Men')}>MEN</button>
      </div>
      
        </div>
    )
}

export default Buttons;