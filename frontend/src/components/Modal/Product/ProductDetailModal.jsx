import "./ProductDetailModal.css";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../../actions/cartActions";
import { closeProductModal } from '../../../actions/modalActions';

export default function ProductDetailModal() {
  const [cartQuantity, setCartQuantity] = useState(1);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal.productModal);
  const productModal = useSelector(state => state.modal.product);
  const handleAddToCart = (e) => {
    e.preventDefault();
    const quantityNumber = parseInt(cartQuantity, 10); // Parse edilen sayıyı bir değişkene atayın.
    if (!isNaN(quantityNumber) && quantityNumber > 0) { // Geçerli bir sayı olduğundan ve 0'dan büyük olduğundan emin olun.
      dispatch(addToCart(productModal, quantityNumber));
      handleCloseModal(); // Modal'ı kapat
      setCartQuantity(1);
    } else {
      console.error('Quantity is not a valid number.');
    }
  };
  const handleInputChange = (e) => {
    setCartQuantity(e.target.value);
  };
  const handleCloseModal = () => {
    dispatch(closeProductModal()); // Modalı kapat
  };
  return (
    <div id="quickview-wrapper" onClick={() => handleCloseModal()}>
      <div
        className={`modal fade overlay ${isModalOpen ? "show" : ""}`}
        id="productModal"
        role="dialog"
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div
          className="modal-dialog"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                onClick={() => handleCloseModal()}
                type="button"
                className="close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-product">
                <div className="product-images">
                  <div
                    className="main-image images"
                    style={{ textAlign: "center" }}
                  >
                    <img alt="#" src="/src/assets/img/product/2.jpg" />
                  </div>
                </div>

                <div className="product-info">
                  <h1>Aenean eu tristique</h1>
                  <div className="price-box-3">
                    <hr />
                    <div className="s-price-box">
                      <span className="new-price">$160.00</span>
                      <span className="old-price">$190.00</span>
                    </div>
                    <hr />
                  </div>
                  <a href="shop.html" className="see-all">
                    See all features
                  </a>
                  <div className="quick-add-to-cart">
                    <form method="post" className="cart" onSubmit={handleAddToCart}>
                      <div className="numbers-row">
                        <input
                          type="number"
                          min="1"
                          value={cartQuantity} // State'deki değeri input alanına ata
                          onChange={handleInputChange} // Input alanı değiştiğinde state'i güncelle
                        />
                      </div>
                      <button
                        className="single_add_to_cart_button"
                        type="submit"
                      >
                        Add to cart
                      </button>
                    </form>
                  </div>
                  <div className="quick-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at
                    libero.
                  </div>
                  <div className="social-sharing">
                    <div className="widget widget_socialsharing_widget">
                      <h3 className="widget-title-modal">Share this product</h3>
                      <ul className="social-icons">
                        <li>
                          <a
                            target="_blank"
                            title="Google +"
                            href="#"
                            className="gplus social-icon"
                          >
                            <i className="zmdi zmdi-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Twitter"
                            href="#"
                            className="twitter social-icon"
                          >
                            <i className="zmdi zmdi-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Facebook"
                            href="#"
                            className="facebook social-icon"
                          >
                            <i className="zmdi zmdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="LinkedIn"
                            href="#"
                            className="linkedin social-icon"
                          >
                            <i className="zmdi zmdi-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
