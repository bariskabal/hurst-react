import Proptypes from "prop-types";

export default function AddressForm({title}) {
  return (
    <div className="billing-details pr-20">
      <h4 className="title-1 title-border text-uppercase mb-30">
        {title}
      </h4>
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
        className="custom-textarea"
        placeholder="Your address here..."
      ></textarea>
    </div>
  );
}

AddressForm.propTypes = {
    title: Proptypes.string,
  };