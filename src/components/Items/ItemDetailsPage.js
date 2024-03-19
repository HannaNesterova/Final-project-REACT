
import ItemDetails from './ItemDetails';

function ItemDetailsPage({ selectedItem , handleAddToCart}) {

    return (
        <div>
            <ItemDetails selectedItem={selectedItem}  handleAddToCart={ handleAddToCart} />
        </div>
    );
}

export default ItemDetailsPage;
