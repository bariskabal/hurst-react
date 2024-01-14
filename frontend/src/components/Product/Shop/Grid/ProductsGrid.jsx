import ProductsGridItems from "./ProductsGridItem";

export default function ProductsGrid() {
  return (
    <div className="tab-pane active" id="grid-view">
      <div className="row">
        <ProductsGridItems />
        <ProductsGridItems />
        <ProductsGridItems />
        <ProductsGridItems />
        <ProductsGridItems />
        <ProductsGridItems />
        <ProductsGridItems />
        <ProductsGridItems />
        <ProductsGridItems />
      </div>
    </div>
  );
}
