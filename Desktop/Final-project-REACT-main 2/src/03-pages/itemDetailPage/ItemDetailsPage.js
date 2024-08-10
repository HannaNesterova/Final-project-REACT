import { useParams } from "react-router";
import ItemDetails from "../../06-entities/ui/ItemDetails";

function ItemDetailsPage() {
  const { title } = useParams();

  return (
    <div>
      <ItemDetails title={title} />
    </div>
  );
}

export default ItemDetailsPage;
