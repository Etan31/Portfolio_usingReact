import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/contact.css';
import massageGif from './message.gif';
import MarkIC from './imgs/optimized/mark.png';

const Contact = React.forwardRef((props, ref) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(''); // Notification message
  const [loading, setLoading] = useState(false); // Loading state

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getLastName = (fullName) => {
    const splitName = fullName.trim().split(' ');
    return splitName.length > 1 ? splitName[splitName.length - 1] : fullName; // Return last word or full name if it's a single word
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading, change button text to "Sending message..."

    const lastName = getLastName(formData.from_name); // Extract last name

    const templateParams = {
      ...formData,
      last_name: lastName  
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setLoading(false);  // Stop loading
      setNotificationMessage('Email sent successfully, Thank you!');  // Success message
      setShowNotification(true);  // Show notification
      setTimeout(() => {
        setShowNotification(false);  // Hide notification after 5 seconds
      }, 5000);
    }, (error) => {
      console.log('Failed to send email:', error.text);
      setLoading(false);  // Stop loading
      setNotificationMessage('Email sent unsuccessfully, please try again later.');  // Error message
      setShowNotification(true);  // Show notification
      setTimeout(() => {
        setShowNotification(false);  // Hide notification after 5 seconds
      }, 5000);
    });

    // Reset the form after submission
    e.target.reset();
    setFormData({
      from_name: '',
      from_email: '',
      message: ''
    });
  };

  return (
    <section className="contact" ref={ref}>
      <h2 className="numbered-heading">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-text">
          <img src={massageGif} className="message_gif" alt="contact me gif" />
          <p>
            I'm currently looking for new opportunities. Feel free to reach out if you have any questions or just want to say hi!
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="submitBtn">
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Sending message...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Notification for success or failure */}
      {showNotification && (
        <div className="notification contact-sent">
          <img src={MarkIC} className="img-notif" alt="notification mark" />
          <p className="text-notif notif-sent">{notificationMessage}</p>
        </div>
      )}
    </section>
  );
});

export default Contact;
