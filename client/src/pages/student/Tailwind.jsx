import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Tailwind = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is Tailwind CSS?",
      options: ["A CSS framework", "A JavaScript library", "A frontend tool"],
      correct: "A CSS framework",
    },
    {
      id: 2,
      question: "Which class is used to apply a red text color in Tailwind?",
      options: ["text-red", "text-red-500", "color-red"],
      correct: "text-red-500",
    },
    {
      id: 3,
      question: "Which utility class in Tailwind sets the width of an element?",
      options: ["w-", "width-", "w-full"],
      correct: "w-",
    },
    {
      id: 4,
      question: "How do you apply margin to all sides in Tailwind?",
      options: ["m-4", "p-4", "mt-4"],
      correct: "m-4",
    },
    {
      id: 5,
      question: "What class in Tailwind is used to make an element responsive?",
      options: ["sm:", "lg:", "xl:"],
      correct: "sm:",
    },
  ];

  const handleAnswerChange = (answer) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="lg:p-24 mt-24 m-5 ">
      <h1 className="font-bold text-xl mb-4 ">Master Complete Tailwind CSS </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Video Section */}
        <div className="flex-1">
          <iframe
            className="w-full h-[315px] md:rounded-lg"
            src="https://www.youtube.com/embed/lCxcTsOHrjo?si=sOSwAUK-vLarnNp7"
            title="Tailwind CSS Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="mt-4 text-lg">
            This video provides a comprehensive guide to mastering Tailwind CSS,
            perfect for anyone who wants to build modern, responsive websites
            with ease.
          </p>
          <span className="text-gray-500 mt-4">
            Copyright Notice: This video is fully owned by the copyright holder.
            All rights reserved. The content is provided for educational
            purposes only. Please respect the intellectual property rights of
            the creators. If you enjoyed the video, make sure to subscribe to
            the channel for more updates and similar content. Thank you for
            supporting the original creators!
          </span>
        </div>

        {/* Quiz Section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Tailwind CSS Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResults && (
              <div>
                <p className="font-medium mb-4">
                  {questions[currentQuestion].id}.{" "}
                  {questions[currentQuestion].question}
                </p>
                <RadioGroup
                  className="space-y-4"
                  onValueChange={handleAnswerChange}
                  value={answers[currentQuestion] || ""}
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option}
                        id={`option-${option}`}
                        className="cursor-pointer"
                      />
                      <label htmlFor={`option-${option}`} className="text-lg">
                        {option}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="mt-6 flex justify-between">
                  <Button
                    variant="secondary"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  {currentQuestion === questions.length - 1 ? (
                    <Button onClick={handleSubmit}>Submit</Button>
                  ) : (
                    <Button onClick={handleNext}>Next</Button>
                  )}
                </div>
              </div>
            )}
            {showResults && (
              <div>
                <h3 className="font-bold text-lg mb-2">Quiz Results</h3>
                {questions.map((q, index) => (
                  <p
                    key={q.id}
                    className={`mb-2 ${
                      answers[index] === q.correct
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {index + 1}. {q.question} -{" "}
                    {answers[index] === q.correct
                      ? "Correct!"
                      : `Wrong! Correct answer: ${q.correct}`}
                  </p>
                ))}
                <p className="mt-4 text-lg font-medium">
                  You scored{" "}
                  {
                    Object.values(answers).filter(
                      (answer, index) => answer === questions[index].correct
                    ).length
                  }{" "}
                  out of {questions.length}!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tailwind;
