import { useParams } from "react-router";
import ItemDetails from "../../entities/ui/ItemDetails";

function ItemDetailsPage() {
  const { title } = useParams();

  return (
    <div>
      <ItemDetails title={title} />
    </div>
  );
}

export default ItemDetailsPage;
