
import { useParams } from 'react-router';
import ItemDetails from './ItemDetails';

function ItemDetailsPage() {
    const { title } = useParams(); 

    return (
        <div>
            <ItemDetails title={title}/>
        </div>
    );
}

export default ItemDetailsPage;
