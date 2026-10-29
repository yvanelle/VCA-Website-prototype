
"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "What should you confirm when checking in a patient?",
    options: [
      "Their social media password",
      "Their name and appointment information",
      "Their personal bank password",
    ],
    correct: 1,
  },
  {
    question: "How should patient information be handled?",
    options: [
      "Shared publicly",
      "Kept confidential",
      "Posted on social media",
    ],
    correct: 1,
  },
  {
    question: "What should you do if a patient asks for medical advice?",
    options: [
      "Give your own diagnosis",
      "Ignore their question",
      "Refer them to an authorized healthcare professional",
    ],
    correct: 2,
  },
];

export default function MedicalOfficeCourse() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every(
    (_, index) => answers[index] !== undefined
  );

  const score = questions.filter(
    (q, index) => answers[index] === q.correct
  ).length;

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <header className="border-b bg-white px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="text-3xl font-black text-blue-950">
            VCA
          </h1>

          <Link
            href="/dashboard"
            className="text-sm font-semibold text-blue-800 hover:underline"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">

        <div className="rounded-2xl bg-blue-950 p-8 text-white">
          <p className="text-sm text-blue-200">
            Health Administration
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Medical Office Assistant
          </h2>

          <p className="mt-4 text-blue-100">
            Sample Lesson: Patient Reception Basics
          </p>

          <p className="mt-4 text-xs text-blue-200">
            Demonstration content only. Not an accredited course.
          </p>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-950">
            Lesson 1: Welcoming Patients
          </h3>

          <p className="mt-5 leading-8 text-slate-700">
            Medical office assistants help create a welcoming
            and organized environment for patients.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            During patient check-in, an assistant may confirm
            appointment details, direct visitors to the
            appropriate location, and handle information
            confidentially.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Questions requiring medical judgment should be
            referred to an authorized healthcare professional.
          </p>

          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <h4 className="font-bold text-blue-950">
              Learning Objectives
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-700">
              Understand basic patient reception,
              confidentiality, and professional communication.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-950">
            Knowledge Check
          </h3>

          <p className="mt-3 text-slate-600">
            Answer these three questions to test your knowledge.
          </p>

          <div className="mt-8 space-y-8">
            {questions.map((q, questionIndex) => (
              <div key={questionIndex}>

                <h4 className="font-semibold">
                  {questionIndex + 1}. {q.question}
                </h4>

                <div className="mt-4 space-y-3">
                  {q.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      type="button"
                      disabled={submitted}
                      aria-pressed={
                        answers[questionIndex] === optionIndex
                      }
                      onClick={() =>
                        setAnswers((previous) => ({
                          ...previous,
                          [questionIndex]: optionIndex,
                        }))
                      }
                      className={`w-full rounded-lg border p-4 text-left transition
                        ${
                          answers[questionIndex] === optionIndex
                            ? "border-blue-700 bg-blue-50"
                            : "border-slate-200 hover:bg-slate-50"
                        }
                      `}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {!submitted ? (
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className="mt-10 w-full rounded-lg bg-blue-900 px-6 py-4 font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-10 rounded-xl bg-blue-50 p-6 text-center">
              <h4 className="text-2xl font-bold text-blue-950">
                Quiz Completed!
              </h4>

              <p className="mt-4 text-4xl font-bold text-blue-800">
                {score} / {questions.length}
              </p>

              <p className="mt-3 text-slate-600">
                {score === questions.length
                  ? "Excellent work!"
                  : "Good effort! Review the lesson and try again."}
              </p>

              <button
                type="button"
                onClick={resetQuiz}
                className="mt-6 rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Try Again
              </button>
            </div>
          )}
        </section>

        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="font-semibold text-blue-800 hover:underline"
          >
            Return to Dashboard
          </Link>
        </div>

      </div>
    </main>
  );
}
