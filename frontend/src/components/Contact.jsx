import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="contact_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="contact_taital">Get In Touch</h1>
      </div>
    </div>
    <div className="contact_section_2">
      <div className="mail_section map_form_container">
        <form action="">
          <input
            type="text"
            className="mail_text"
            placeholder="Name"
            name="Name"
          />
          <input
            type="text"
            className="mail_text"
            placeholder="Phone Number"
            name="Phone Number"
          />
          <input
            type="text"
            className="mail_text"
            placeholder="Email"
            name="Email"
          />
          <textarea
            className="massage-bt"
            placeholder="Massage"
            rows={5}
            id="comment"
            name="Massage"
            defaultValue={""}
          />
          <div className="map_btn_main">
            <div className="send_bt">
              <a href="#">Send Now</a>
            </div>
            <div className="map_bt">
              <a href="#" id="showMap">
                Map
              </a>
            </div>
          </div>
        </form>
        <div className="map_main map_container">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
              width={600}
              height={368}
              frameBorder={0}
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
            />
            <div className="map_btn_main">
              <div className="map_bt d-flex justify-content-center w-100 map_center">
                <a href="#" id="showForm">
                  Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="location_main">
      <div className="location_text">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-phone" aria-hidden="true" />
              <span className="padding_left_15">(+71) 8522369417</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span className="padding_left_15">demo@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="social_icon">
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact