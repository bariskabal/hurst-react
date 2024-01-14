import { useState } from "react";

export default function AccountDetailForm() {
  const [infoFormTab, setInfoFormTab] = useState(true);
  return (
    <div className="panel mb-2">
      <div className="my-account-menu">
        <a onClick={() => setInfoFormTab(!infoFormTab)} className={`${infoFormTab ? '' :'collapsed'}`} data-bs-toggle="collapse">
          My Personal Information
        </a>
      </div>
      <div
        id="my-info"
        className={`panel-collapse collapse ${infoFormTab ? 'show' : ''}`}
        data-bs-parent="#accordion"
      >
        <div className="panel-body">
          <div className="billing-details shop-cart-table">
            <input type="text" placeholder="Your name here..." />
            <input type="text" placeholder="Email address here..." />
            <input type="text" placeholder="Phone here..." />
            <input type="text" placeholder="Company neme here..." />
            <select className="custom-select mb-15">
              <option>Contry</option>
              <option>Bangladesh</option>
              <option>United States</option>
              <option>united Kingdom</option>
              <option>Australia</option>
              <option>Canada</option>
            </select>
            <select className="custom-select mb-15">
              <option>State</option>
              <option>Dhaka</option>
              <option>New York</option>
              <option>London</option>
              <option>Melbourne</option>
              <option>Ottawa</option>
            </select>
            <select className="custom-select mb-15">
              <option>Town / City</option>
              <option>Dhaka</option>
              <option>New York</option>
              <option>London</option>
              <option>Melbourne</option>
              <option>Ottawa</option>
            </select>
            <textarea
              placeholder="Your address here..."
              className="custom-textarea"
            ></textarea>
            <button className="border-1 filter-button w-100 p-2 mt-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
