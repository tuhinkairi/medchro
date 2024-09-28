import nodemailer from "nodemailer";
import "dotenv/config";

// Create a mail sender function
export async function sendMail(
  receiverEmail,
  nameOfReceiver,
  severity,
  bp,
  pulseRate,
  temperature
) {
  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another email service like Yahoo, Outlook
    auth: {
      user: process.env.GMAIL, // Replace with your email
      pass: process.env.GMAIL_PASSWORD, // Replace with your email password or an app-specific password
    },
  });

  // Determine the background color based on severity level
  const backgroundColor =
    severity.toLowerCase() === "chronic"
      ? "#FF6347" // Red for chronic
      : severity.toLowerCase() === "mediocre"
      ? "#FFD700" // Yellow for mediocre
      : "#4CAF50";

  // Create the email content
  const mailOptions = {
    from: process.env.GMAIL, // Replace with your email
    to: receiverEmail,
    subject: `Health Alert: ${severity} Severity`,
    html: `
      <html>
        <head>
          <style>
            /* General styles for responsive email */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: ${backgroundColor};
              color: #ffffff;
              text-align: center;
              padding: 10px 0;
            }
            .content {
              font-size: 16px;
              line-height: 1.6;
              color: #333333;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              text-align: center;
              color: #999999;
            }
            @media screen and (max-width: 600px) {
              .container {
                padding: 10px;
              }
              .content {
                font-size: 14px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Health Alert: ${severity}</h2>
            </div>
            <div class="content">
              <p>Dear ${nameOfReceiver},</p>
              <p>We have seen recently that your vitals may be reaching some concerning levels. We advise you to be careful. We value you.</p>

              <p>Severity Level: ${severity}</p>
              <p>Temperature: ${temperature}</p>
              <p>Blood Pressure: ${bp}</p>
              <p>Pulse Rate: ${pulseRate}</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
