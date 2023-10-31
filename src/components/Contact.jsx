import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Import the icons

const Contact = () => {
  const address = "Singapore";
  const email = "kavibharathi.s2015@outlook.com";

  return (
    <section className="contact" id="contact">
      <div >
        <h2>Contact</h2>
        <div className="header-line"></div>
        <div className="contact-info">
          <p>
            <FaMapMarkerAlt className="icon"/> <strong>Address:</strong> {address}
          </p>
          <p>
            <FaEnvelope className="icon" />
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
