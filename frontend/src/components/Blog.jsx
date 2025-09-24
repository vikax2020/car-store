import React from 'react'

const Blog = () => {
  return (
    <div>
        <div className="blog_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="blog_taital">FEATURED VEHICLES</h1>
      </div>
    </div>
    <div className="blog_section_2">
      <div className="row">
        <div className="col-md-4">
          <div className="blog_img">
            <img src="images/img-4.png" />
          </div>
          <div className="btn_main">
            <div className="date_text">
              <a href="#">Price $ 40000.0</a>
            </div>
          </div>
          <div className="blog_box">
            <h3 className="blog_text">Voluptate</h3>
            <p className="lorem_text">
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum{" "}
            </p>
          </div>
          <div className="read_bt">
            <a href="#">
              Read More
              <span className="arrow_icon">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog_img">
            <img src="images/img-5.png" />
          </div>
          <div className="btn_main">
            <div className="date_text active">
              <a href="#">Price $ 40000.0</a>
            </div>
          </div>
          <div className="blog_box">
            <h3 className="blog_text">Voluptate</h3>
            <p className="lorem_text">
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum{" "}
            </p>
          </div>
          <div className="read_bt active">
            <a href="#">
              Read More
              <span className="arrow_icon">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog_img">
            <img src="images/img-6.png" />
          </div>
          <div className="btn_main">
            <div className="date_text">
              <a href="#">Price $ 40000.0</a>
            </div>
          </div>
          <div className="blog_box">
            <h3 className="blog_text">Voluptate</h3>
            <p className="lorem_text">
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum{" "}
            </p>
          </div>
          <div className="read_bt">
            <a href="#">
              Read More
              <span className="arrow_icon">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Blog