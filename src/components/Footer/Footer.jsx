function Footer() {
  return (
    <>
      <footer className="pt-5 secondrycolor text-center text-white">
        <div className="container text-center text-white p-5">
          <div className="row">
            <div className="col-md-4">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h2>AROUND THE WEB</h2>
              <div className="icons ">
                <div className="icon">
                  <i className="fa-brands fa-facebook mx-1"></i>
                </div>
                <div className="icon">
                  <i className="fa-solid fa-x mx-1"></i>
                </div>
                <div className="icon ">
                  <i className="fa-brands fa-linkedin mx-1"></i>
                </div>
                <div className="icon">
                  <i className="fa-solid fa-globe mx-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="copy p-2">
          <p>Copyright © Your Website 2025 </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
