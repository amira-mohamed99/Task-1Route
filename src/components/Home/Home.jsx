function Home() {
  return (
    <>
      <div className="container-fluid background d-flex justify-content-center align-items-center vh-100">
        <div className="text text-center text-white ">
          <img
            src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            alt="person"
            className="avatar"
          />
          <div className="position-relative mb-4 text-center">
          <p className="text-uppercase fw-bolder  about position-relative">
            start Framework
          </p>
          <div className="starabout position-relative d-inline-block">
            <i className="fa-solid fa-star text-white"></i>
          </div>
        </div>
          <p className="fs-5 my-2">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
