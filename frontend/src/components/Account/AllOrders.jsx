import { useState } from "react";

export default function AllOrders() {

  const [ordersToggle, setOrdersToggle] = useState(false)
  return (
    <div className="panel-group" id="accordion-2">
      <div className="panel mb-2 mb-md-0">
        <div className="my-account-menu">
          <a onClick={() => setOrdersToggle(!ordersToggle)} className={`${ordersToggle ? '' :'collapsed'}`} data-bs-toggle="collapse">
            Order history and details
          </a>
        </div>
        <div
          id="my-order"
          className={`panel-collapse collapse ${ordersToggle ? 'show' :''}`}
          data-bs-parent="#accordion"
        >
          <div className="panel-body">
            <div className="our-order payment-details shop-cart-table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Product</strong>
                    </th>
                    <th className="text-end">
                      <strong>Total</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dummy Product Name x 2</td>
                    <td className="text-end">$86.00</td>
                  </tr>
                  <tr>
                    <td>Dummy Product Name x 1</td>
                    <td className="text-end">$69.00</td>
                  </tr>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="text-end">$155.00</td>
                  </tr>
                  <tr>
                    <td>Shipping and Handing</td>
                    <td className="text-end">$15.00</td>
                  </tr>
                  <tr>
                    <td>Vat</td>
                    <td className="text-end">$00.00</td>
                  </tr>
                  <tr>
                    <td>Order Total</td>
                    <td className="text-end">$170.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
