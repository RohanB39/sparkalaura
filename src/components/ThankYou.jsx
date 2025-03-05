import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold text-green-900">Thank You!</h1>
      <p className="mt-2 text-gray-700">
        Your message has been successfully sent. We will get back to you soon.
      </p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
