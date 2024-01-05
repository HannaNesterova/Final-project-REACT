

function Buttons ({filterItems}){

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