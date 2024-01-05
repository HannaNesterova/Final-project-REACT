import './items.css';

function ItemsPage({items}){

    return(
        <div className='back-items'>
            <h2>Top Selling Products</h2>
      
            <div className='filterItems'>
                <button>ALL</button>
                <button>WOMEN</button>
                <button>MEN</button>
            </div>
        <div className="all-items">
         {items.map((item => {
            const {id, category,title,price,img} = item;
            return <div className='item-box' key={id}>
                <img className="item-img" src={img} alt='foot'/>
                <span className="item-top">TOP</span>
                <p className="item-category">{category}</p>
                <p className="item-title">{title}</p>
                <p className="item-price"> $ {price}</p>
                <button className="item-btn">VIEW DETAILS</button>
                </div>
         }))}
         </div>
         </div>

    )
}

export default ItemsPage;