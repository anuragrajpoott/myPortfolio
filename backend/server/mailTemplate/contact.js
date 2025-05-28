// server/mailTemplate/contact.js

exports.contactUsEmail = (fullName, email, message) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form Confirmation</title>
  <style>
    body {
      background-color: #ffffff;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.4;
      color: #333333;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }

    .logo {
      max-width: 200px;
      margin-bottom: 20px;
    }

    .message {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .body-text {
      font-size: 16px;
      margin-bottom: 20px;
      text-align: left;
    }

    .cta {
      display: inline-block;
      padding: 12px 24px;
      background-color: #FFD60A;
      color: #000000;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      margin: 20px 0;
    }

    .support {
      font-size: 14px;
      color: #999999;
      margin-top: 20px;
      text-align: center;
    }

    .highlight {
      font-weight: bold;
    }

    /* Responsive */
    @media only screen and (max-width: 620px) {
      .container {
        padding: 10px;
      }

      .logo {
        max-width: 150px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <a href="https://your-portfolio-url.com" target="_blank" rel="noopener noreferrer">
      <img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="Portfolio Logo" />
    </a>
    <div class="message">Contact Form Confirmation</div>
    <div class="body-text">
      <p>Dear ${fullName},</p>
      <p>Thank you for contacting me. I have received your message and will respond as soon as possible.</p>
      <p>Here are the details you provided:</p>
      <ul>
        <li><span class="highlight">Name:</span> ${fullName}</li>
        <li><span class="highlight">Email:</span> ${email}</li>
        <li><span class="highlight">Message:</span> ${message}</li>
      </ul>
      <p>I appreciate your interest and will get back to you shortly.</p>
    </div>
    <a href="https://your-portfolio-url.com" class="cta" target="_blank" rel="noopener noreferrer">
      Visit My Portfolio
    </a>
    <div class="support">
      If you have any further questions or need immediate assistance, please feel free to reach out to me at
      <a href="mailto:your-email@example.com">your-email@example.com</a>. I'm here to help!
    </div>
  </div>
</body>

</html>
`;
