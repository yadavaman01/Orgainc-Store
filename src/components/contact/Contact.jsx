// import { red } from "@mui/material/colors";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
        <Nav/>
      <div style={{ height: "15rem ", backgroundColor: "#f8f6f3" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            fontFamily: "Open Sans ,sans-serif",
          }}
        >
          Get In Touch
        </h1>
      </div>
      <div className="contact-head-container">
        <div className="about-head-item">
          <h3 className="about-head-item-text">+123 456 7890</h3>
          <h3>+123 456 7890</h3>
        </div>

        <div className="about-head-item">
          <h3 className="about-head-item-text">info@example.com</h3>
          <h3>support@example.com</h3>
        </div>

        <div className="about-head-item">
          <h3 className="about-head-item-text">1569 Ave, New York,</h3>
          <h3>NY 10028, USA</h3>
        </div>
      </div>
      <div style={{ margin: "3rem" }}>
        <h1 style={{ textAlign: "center" }}>Frequently Asked Question!</h1>
      </div>
      <Footer/>
    </div>
  );
};
export default Contact;