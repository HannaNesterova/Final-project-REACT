
import Buttons from '../Buttons/Buttons';
import './items.css';



function ItemsPage({items, setFilteredItems }) {

  return (
    <div className='back-items'>

      <Buttons
        //items={items}
        setFilteredItems={setFilteredItems}
      />

      <div className="all-items">
        {items.map(item => {
                  const { id, category, title, price, img, spanSale, spanOut } = item;
                  return (
                    <div className='item-box' key={id}>
                      <img className="item-img" src={img} alt='foot' />
                      <div className='top-sale'>
                        <span className="item-top">TOP</span>
                        <span className={spanSale ? 'item-sale' : ''}>{spanSale}</span>
                        <span className={spanOut ? 'item-out' : ''}>{spanOut}</span>
                      </div>
                      <p className="item-category">{category}</p>
                      <p className="item-title">{title}</p>
                      <p className="item-price"> $ {price}</p>
                      <button className="item-btn">WANT THIS</button>
                    </div>
                  )
                })
              }
      </div>
    </div>
  );
}


export default ItemsPage;