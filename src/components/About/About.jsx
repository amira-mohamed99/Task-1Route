function About() {
  return (
    <>
      <div className="container-fluid background vh-100 d-flex flex-column justify-content-center align-items-center text-white">
        <div className="position-relative mb-4 text-center">
          <p className="text-uppercase fw-bolder  about position-relative">
            about component
          </p>
          <div className="starabout position-relative d-inline-block">
            <i className="fa-solid fa-star text-white"></i>
          </div>
        </div>

        <div className="container fs-5">
          <div className="row">
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
