import ProductsListItem from "./ProductsListItem";

export default function ProductsList() {
  
  return (
    <div className="tab-pane active" id="list-view">
      <div className="row shop-list">
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
      </div>
    </div>
  );
}
