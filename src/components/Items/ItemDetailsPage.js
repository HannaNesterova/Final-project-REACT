
import ItemDetails from './ItemDetails';

function ItemDetailsPage({ handleAddToCart}) {

    return (
        <div>
            <ItemDetails  handleAddToCart={ handleAddToCart} />
        </div>
    );
}

export default ItemDetailsPage;
