"use client";

import { useState } from "react";

export default function FeedbackWidget() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!feedback.trim()) return;

    setSubmitted(true);
    setFeedback("");
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="font-semibold mb-2">Feedback</h3>

      {!submitted ? (
        <>
          <textarea
            data-testid="feedback-input"
            className="w-full border p-3 rounded-md
             bg-white dark:bg-gray-800
             text-black dark:text-white
             border-gray-300 dark:border-gray-600
             focus:outline-none focus:ring-2 focus:ring-blue-500
             transition"
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button
            data-testid="feedback-submit"
            onClick={handleSubmit}
            className="mt-3 px-4 py-2 rounded-md
             bg-blue-600 text-white
             hover:bg-blue-700
             transition"
          >
            Submit
          </button>
        </>
      ) : (
        <p
          data-testid="feedback-success-message"
          className="text-green-500"
        >
          Thank you for your feedback!
        </p>
      )}
    </div>
  );
}