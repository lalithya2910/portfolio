
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_87pyztk",
        "template_sbtyfge",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "1j4QRdoO6Fnbm3TTU",
        }
      );

      alert("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Unable to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <p>Get In Touch</p>
        <h1>Contact <span>Me</span></h1>
        <p className="contact-description">
          Have a question, project idea, or just want to say hello?
          Feel free to get in touch with me.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            I'm always interested in learning, collaborating and
            working on interesting projects.
          </p>

          <div className="contact-item">
            <div className="contact-icon">✉</div>
            <div>
              <span>Email</span>
              <a href="mailto:vanacharlalalithya@gmail.com">
                vanacharlalalithya@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <span>Phone</span>
              <a href="tel:+919059531778">
                +91 9059531778
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <span>Location</span>
              <p>India</p>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/lalithya2910"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/lalithya-vanacharla-49a0a5331"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-form-box">
          <h2>Send Me a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
