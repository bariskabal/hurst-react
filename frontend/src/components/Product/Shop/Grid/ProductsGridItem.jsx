export default function ProductsGridItems() {
    return(
        <div className="col-lg-4 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <span className="pro-label new-label">new</span>
              <span className="pro-price-2">$ 56.20</span>
              <a href="single-product.html">
                <img src="img/product/6.jpg" alt="" />
              </a>
            </div>
            <div className="product-info clearfix text-center">
              <div className="fix">
                <h4 className="post-title">
                  <a href="#">dummy Product name</a>
                </h4>
              </div>
              <div className="fix">
                <span className="pro-rating">
                  <a href="#">
                    <i className="zmdi zmdi-star"></i>
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-star"></i>
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-star"></i>
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-star-half"></i>
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-star-half"></i>
                  </a>
                </span>
              </div>
              <div className="product-action clearfix">
                <a
                  href="wishlist.html"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Wishlist"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                  title="Quick View"
                >
                  <i className="zmdi zmdi-zoom-in"></i>
                </a>
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Compare"
                >
                  <i className="zmdi zmdi-refresh"></i>
                </a>
                <a
                  href="cart.html"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Add To Cart"
                >
                  <i className="zmdi zmdi-shopping-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}