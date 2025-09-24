import React from 'react'
import About from './About'
import Models from './Models'
import Blog from './Blog'
import Price from './Price'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <div className="banner_section layout_padding">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div id="banner_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner_taital_main">
                <h1 className="banner_taital">
                  New
                  <br /> Model Cars
                </h1>
                <p className="banner_text">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  uolore magna aliqua. Ut enim ad minim veniam, quis non
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    className="update_mail"
                    placeholder="Search here"
                    name="Search here"
                  />
                  <div className="subscribe_bt">
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_taital_main">
                <h1 className="banner_taital">
                  New
                  <br /> Model Cars
                </h1>
                <p className="banner_text">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  uolore magna aliqua. Ut enim ad minim veniam, quis non
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    className="update_mail"
                    placeholder="Search here"
                    name="Search here"
                  />
                  <div className="subscribe_bt">
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_taital_main">
                <h1 className="banner_taital">
                  New
                  <br /> Model Cars
                </h1>
                <p className="banner_text">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  uolore magna aliqua. Ut enim ad minim veniam, quis non
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    className="update_mail"
                    placeholder="Search here"
                    name="Search here"
                  />
                  <div className="subscribe_bt">
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#banner_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="carousel-control-next"
            href="#banner_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
      <div className="col-md-6 padding_right0">
        <div className="banner_img">
          <img src="images/banner-img.png" />
        </div>
      </div>
    </div>
  </div>
</div>
 <About/>
 <Models/>
 <Blog/>
 <Price/>
 <Contact/>
 

    </>
  )
}

export default Home