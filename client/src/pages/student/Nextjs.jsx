import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Nextjs = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 1, question: 'What is Next.js?', options: ['A React framework', 'A JavaScript library', 'A CSS framework'], correct: 'A React framework' },
    { id: 2, question: 'Which file is the entry point in a Next.js app?', options: ['index.js', 'pages/index.js', 'main.js'], correct: 'pages/index.js' },
    { id: 3, question: 'How do you create a dynamic route in Next.js?', options: ['pages/[param].js', 'pages/dynamic/[param].js', 'pages/:param.js'], correct: 'pages/[param].js' },
    { id: 4, question: 'What is the main use of `getServerSideProps` in Next.js?', options: ['Data fetching at build time', 'Data fetching on the server before rendering', 'Static page generation'], correct: 'Data fetching on the server before rendering' },
    { id: 5, question: 'Which component is used to define a layout in Next.js?', options: ['Layout.js', 'App.js', 'pages/_app.js'], correct: 'pages/_app.js' },
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
      <h1 className="font-bold text-2xl mb-4">Complete Next.js 2024</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Video Section */}
        <div className="flex-1">
          <iframe
            className="w-full h-[315px] md:rounded-lg"
            src="https://www.youtube.com/embed/mTz0GXj8NN0"
            title="Next.js Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="mt-4 text-lg">
            This video provides an in-depth guide to Next.js, a React framework that enables fast and scalable web applications.
          </p>
          <span className='text-gray-500 mt-4'>
          Copyright Notice:
This video is fully owned by the copyright holder. All rights reserved. The content is provided for educational purposes only. Please respect the intellectual property rights of the creators.

If you enjoyed the video, make sure to subscribe to the channel for more updates and similar content. Thank you for supporting the original creators!
          </span>
        </div>

        {/* Quiz Section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Next.js Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResults && (
              <div>
                <p className="font-medium mb-4">
                  {questions[currentQuestion].id}. {questions[currentQuestion].question}
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
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {index + 1}. {q.question} -{' '}
                    {answers[index] === q.correct
                      ? 'Correct!'
                      : `Wrong! Correct answer: ${q.correct}`}
                  </p>
                ))}
                <p className="mt-4 text-lg font-medium">
                  You scored {Object.values(answers).filter(
                    (answer, index) => answer === questions[index].correct
                  ).length}{' '}
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

export default Nextjs;