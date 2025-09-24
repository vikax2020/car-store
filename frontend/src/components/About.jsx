import React from 'react'

const About = () => {
  return (
    <>
      <div className="about_section layout_padding">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div className="about_img">
          <img src="images/about-img.png" />
        </div>
      </div>
      <div className="col-md-6">
        <h3 className="about_taital">About Shoroom</h3>
        <p className="about_text">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitationconsectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation
        </p>
        <div className="readmore_btn">
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


    </>
  )
}

export default About