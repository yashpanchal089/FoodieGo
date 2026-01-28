import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <div className="container mt-4">
      
      <div className="container mt-4">
        <main>
          <div className="row g-5">
            {" "}
            <div className="col-md-5 col-lg-4 order-md-last">
              {" "}
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                {" "}
                <span className="text-primary">Your cart</span>{" "}
                <span className="badge bg-primary rounded-pill">3</span>{" "}
              </h4>{" "}
              <ul className="list-group mb-3">
                {" "}
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  {" "}
                  <div>
                    {" "}
                    <h6 className="my-0">Product name</h6>{" "}
                    <small className="text-body-secondary">
                      Brief description
                    </small>{" "}
                  </div>{" "}
                  <span className="text-body-secondary">$12</span>{" "}
                </li>{" "}
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  {" "}
                  <div>
                    {" "}
                    <h6 className="my-0">Second product</h6>{" "}
                    <small className="text-body-secondary">
                      Brief description
                    </small>{" "}
                  </div>{" "}
                  <span className="text-body-secondary">$8</span>{" "}
                </li>{" "}
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  {" "}
                  <div>
                    {" "}
                    <h6 className="my-0">Third item</h6>{" "}
                    <small className="text-body-secondary">
                      Brief description
                    </small>{" "}
                  </div>{" "}
                  <span className="text-body-secondary">$5</span>{" "}
                </li>{" "}
                <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                  {" "}
                  <div className="text-success">
                    {" "}
                    <h6 className="my-0">Promo code</h6>{" "}
                    <small>EXAMPLECODE</small>{" "}
                  </div>{" "}
                  <span className="text-success">−$5</span>{" "}
                </li>{" "}
                <li className="list-group-item d-flex justify-content-between">
                  {" "}
                  <span>Total (USD)</span> <strong>$20</strong>{" "}
                </li>{" "}
              </ul>{" "}
              
            </div>{" "}
            <div className="col-md-7 col-lg-8">
              {" "}
              <h4 className="mb-3">Billing address</h4>{" "}
              <form className="needs-validation" novalidate>
                {" "}
                <div className="row g-3">
                  {" "}
                  <div className="col-sm-6">
                    {" "}
                    <label for="firstName" className="form-label">
                      First name
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />{" "}
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>{" "}
                  </div>{" "}
                  <div className="col-sm-6">
                    {" "}
                    <label for="lastName" className="form-label">
                      Last name
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />{" "}
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>{" "}
                  </div>{" "}
                  <div className="col-12">
                    {" "}
                    <label for="username" className="form-label">
                      Username
                    </label>{" "}
                    <div className="input-group has-validation">
                      {" "}
                      <span className="input-group-text">@</span>{" "}
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required
                      />{" "}
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-12">
                    {" "}
                    <label for="email" className="form-label">
                      Email{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>{" "}
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />{" "}
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>{" "}
                  </div>{" "}
                  <div className="col-12">
                    {" "}
                    <label for="address" className="form-label">
                      Address
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />{" "}
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>{" "}
                  </div>{" "}
                  <div className="col-12">
                    {" "}
                    <label for="address2" className="form-label">
                      Address 2{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />{" "}
                  </div>{" "}
                  <div className="col-md-5">
                    {" "}
                    <label for="country" className="form-label">
                      Country
                    </label>{" "}
                    <select className="form-select" id="country" required>
                      {" "}
                      <option value="">Choose...</option>{" "}
                      <option>United States</option>{" "}
                    </select>{" "}
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>{" "}
                  </div>{" "}
                  <div className="col-md-4">
                    {" "}
                    <label for="state" className="form-label">
                      State
                    </label>{" "}
                    <select className="form-select" id="state" required>
                      {" "}
                      <option value="">Choose...</option>{" "}
                      <option>California</option>{" "}
                    </select>{" "}
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>{" "}
                  </div>{" "}
                  <div className="col-md-3">
                    {" "}
                    <label for="zip" className="form-label">
                      Zip
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />{" "}
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <hr className="my-4" />{" "}
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Continue to checkout
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlaceOrder;
