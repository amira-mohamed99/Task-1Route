import { useState } from "react";

function Contact() {

const [userName, setUserName] = useState("");
const [userAge, setUserAge] = useState("");
const [userEmail, setuserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");




  return (
    <>
      <main className="pt-5 m-5">
        <div className="position-relative mb-4 text-center pt-4">
          <p className="portfolio text-uppercase fw-bolder about position-relative">
            conatct section
          </p>
          <div className="linebg starabout position-relative d-inline-block">
            <i className=" portfolio fa-solid fa-star"></i>
          </div>
        </div>
        <form className="w-50 mx-auto pt-3">
          <div className=" position-relative my-3">
            <label for="userName" htmlFor="userName" className={`form-label ${userName? "floatingLable":""}`}>
              Username:
            </label>
            <input
              type="email"
              className="form-control p-3 border-0 border-bottom shadow-none"
              id="userName"
              placeholder="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="position-relative my-3">
            <label for="userAge" className={`form-label ${userAge? "floatingLable":""}`}>
              Age:
            </label>
            <input
              type="email"
              className="form-control p-3 border-0 border-bottom shadow-none"
              id="userAge"
              placeholder="userAge"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </div>
          <div className=" position-relative my-3">
            <label for="inputEmail1" className={`form-label ${userEmail? "floatingLable":""}`}>
              Email:
            </label>
            <input
              type="email"
              className="form-control p-3 border-0 border-bottom shadow-none"
              id="inputEmail1"
              placeholder="userEmail"
                   value={userEmail}
              onChange={(e) => setuserEmail(e.target.value)}
            />
          </div>
          <div className="my-4  position-relative">
            <label for="inputPassword1" className={`form-label ${userPassword? "floatingLable":""}`}>
              Password:
            </label>
            <input
              type="password"
              className="form-control p-3 border-0 border-bottom shadow-none"
              id="inputPassword1"
              placeholder="userPassword"
                   value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn text-white">
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}

export default Contact;
