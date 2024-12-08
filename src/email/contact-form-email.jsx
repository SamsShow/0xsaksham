const ContactFormEmail = ({ message, senderEmail }) => {
  return (
    <div>
      <h1>Message from contact form</h1>
      <p>From: {senderEmail}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default ContactFormEmail; 