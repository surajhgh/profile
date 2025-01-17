import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // For success/error messages

  const handleCheckboxChange = (e) => setIsAgreed(e.target.checked);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAgreed) {
      alert("You must agree to the terms and conditions to submit.");
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "surajthapa", // Replace with your EmailJS Service ID
        "template_8012awl", // Replace with your EmailJS Template ID
        {
          to_name: "suraj", // Replace with your name (optional)
          from_name: formData.name,
          message: formData.message,
          email: formData.email,
        },
        "7NyXxt-W1WUOfNOG3" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send the message. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <section className="contact-section bg-gradient-to-r from-[#2a1b3d] to-[#44318d] py-12" id="contact">
      <div className="container mx-auto text-center">
        <p className="text-4xl font-bold text-white">Contact Me</p>
        <p className="text-xl mt-2 text-white">Request Free Consultancy</p>

        <div className="mt-12 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-2xl font-semibold">My Details</p>
            <p className="mt-4 text-gray-600">
              Fill out the form and I will get back to you as soon as possible.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                required
              ></textarea>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5"
                />
                <label className="text-gray-600 text-sm ml-2">
                  I agree to the <a href="/terms">Terms and Conditions</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-md"
                disabled={!isAgreed}
              >
                Submit
              </button>
            </form>
            {status && <p className="text-center mt-4">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
