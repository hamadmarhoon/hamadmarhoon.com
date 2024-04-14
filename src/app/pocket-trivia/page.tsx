import "./page.css";

import localFont from "next/font/local";

const Satoshi = localFont({
  src: [
    { path: "../../fonts/Satoshi-Regular.otf", weight: "400" },
    { path: "../../fonts/Satoshi-Medium.otf", weight: "500" },
    { path: "../../fonts/Satoshi-Bold.otf", weight: "700" },
  ],
});

export default function PocketTrivia() {
  return (
    <div className={`container ${Satoshi.className}`}>
      <div className="content">
        <p className="title">Pocket Trivia</p>
        <p className="header">About the app</p>
        <p className="text">
          Pocket Trivia is a minimal and fun trivia game, with various
          categories and thousands of questions.
        </p>
        <p className="header">Download</p>
        <p className="text">Links coming soon, for Android and iOS! </p>
        <p className="header">Credits</p>
        <p className="text">
          Questions sourced from{" "}
          <a href="https://opentdb.com/" target="_blank">
            Open Trivia Database
          </a>
          .
        </p>
        <p className="header">Privacy Policy</p>
        <p className="text">
          View the privacy policy{" "}
          <a href="/pocket-trivia/privacy-policy">here</a>.
          <br />
          TL;DR - No personal data is collected.
        </p>
        <p className="header">Contact</p>
        <p className="text">
          Contact me at{" "}
          <a href="mailto:hamadmarhoon@icloud.com">hamadmarhoon@icloud.com</a>{" "}
          for any inquiries or feedback.
        </p>
      </div>
    </div>
  );
}
