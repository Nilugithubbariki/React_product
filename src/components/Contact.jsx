import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section className="contact">
        <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
          <form className="contact-form form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>
            <button
              className="btn btn-primary send-button sendbtn"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i class="bi bi-geo-alt-fill">
                  {" "}
                  <span className="contact-text place">City, State</span>
                </i>
              </li>

              <li className="list-item">
                <i class="bi bi-telephone">
                  {" "}
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      6371261426/9078750351
                    </a>
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i class="bi bi-envelope">
                  {" "}
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      nilanchalabariki1999@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
            <hr />
            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
