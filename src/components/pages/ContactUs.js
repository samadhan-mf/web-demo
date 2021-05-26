import React, { useState, useRef, useEffect } from "react";
// import ContactList from "./ContactList";
import "./ContactUs.css";

function ContactUs() {
  const inputEl = useRef(null);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState();

  const handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const num = /^\d{10}$/; 
    let error;

    switch (targetName) {
      case "name":
        error = targetValue.length < 3 ? "Full Name must be 3 characters long!" : "";
        setErrMsg(error);
        break;

      case "email":
        error = validEmailRegex.test(targetValue) ? "" : "Email is not valid!";
        setErrMsg(error);
        break;

      case "phone":
        error = !num.test(targetValue) ? "Phone number must be 10 digit!" : "";
        setErrMsg(error);
        break;
      default:
        break;
    }
    setContact({ ...contact, [targetName]: targetValue });
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (e) => {
    if(contact.name !== '' && contact.email !== '' && contact.phone !== ''  ){
      console.log(contact);
    }
    else {
      setErrMsg('Fill all fields');
    }
    e.preventDefault();
    // return (
    //     <table>
    //     <tbody>
    //       <tr>
    //         <td data-column="First Name">{data.name}</td>
    //         <td data-column="Last Name">{data.email}</td>
    //         <td data-column="Job Title">{data.phone}</td>
    //         <td data-column="Twitter">{data.message}</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // )
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <h1>contact us</h1>
        </div>
        <div className="row">
          <h4>We'd love to hear from you!</h4>
        </div>
        <form>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input
                  type="text"
                  ref={inputEl}
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                {/* <label>Name</label> */}
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input
                  type="text"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {/* <label>Email</label> */}
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input
                  type="text"
                  name="phone"
                  value={contact.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                {/* <label>Phone Number</label> */}
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                ></textarea>
                {/* <label>Message</label> */}
              </div>
            </div>
            <div className="col-xs-12">
              <div className="btn-lrg submit-btn " onClick={handleSubmit}>
                Send Message
              </div>
              <div className="errorMessage">{errMsg}</div>
            </div>
          </div>
        </form>
      </div>


    </div>
  );
}

export default ContactUs;
