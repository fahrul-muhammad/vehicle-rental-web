import React, { Component } from "react";
import "./index.scoped.css";

// component
import Header from "../../components/navLogin";
import Footer from "../../components/footerTemp";

// image
// import vehicle from "../../img/sepeda-keren-min.jpg";

export default class index extends Component {
  render() {
    return (
      <main>
        <Header />
        <div className="back-button">
          <a href="/reservation">
            <i class="bi bi-arrow-left-circle" />
          </a>
          <h3>Payment</h3>
        </div>
        <div className="jumbotron">
          {/* <img src={vehicle} alt="vehicle" /> */}
          <div className="jumbo-tittle">
            <p>
              <strong>Fixie - Gray only</strong>
              <br />
              Yogyakarta
            </p>
            <h4> No Prepayment </h4>
          </div>
          <div className="button-container">
            <button type="button" class="btn btn-light">
              Pay before : 59:30
            </button>
          </div>
        </div>
        <div className="payment">
          <div className="left">
            <h2>Payment Code :</h2>
            <div className="code">
              <p>#FG1209878YZS</p>
              <button type="button" class="btn btn-secondary">
                Copy
              </button>
            </div>
          </div>
          <div className="right">
            <h2>Booking Code :</h2>
            <div className="code">
              <p>#FG1209878YZS</p>
              <button type="button" class="btn btn-secondary">
                Copy
              </button>
            </div>
          </div>
        </div>
        <div className="detail-order">
          <p>DETAIL ORDER</p>
          <div className="f-left">
            <p>Quantity : 2 bikes</p>
          </div>
          <div className="f-right">
            <p>
              {" "}
              <strong>Reservation Date : </strong> Jan 18 - 20 2021
            </p>
          </div>
          <div className="s-left">
            <p>Price Details : </p>
            <ul>
              <li>1 bike : Rp. 78.000 </li>
              <li>1 bike : Rp. 78.000</li>
            </ul>
          </div>
          <div className="s-right">
            <p>Identity : </p>
            <ul>
              <li>Identity : Samantha Doe (+6290987682) </li>
              <li>samanthadoe@mail.com</li>
            </ul>
          </div>
        </div>
        <div className="payment-method">
          <p>PAYMENT METHODS</p>
          <div className="second">
            <div className="btn-left">
              <button type="button" class="btn btn-warning transfer">
                TRANSFER
              </button>
            </div>
            <div className="btn-right">
              <button type="button" class="btn btn-light cash">
                CASH
              </button>
            </div>
          </div>
          <div className="third">
            <button type="button" class="btn btn-secondary finish">
              Finish Payment
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}