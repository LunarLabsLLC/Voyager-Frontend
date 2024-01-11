// src/app/(public)/(home)/Question.tsx

import React from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  return (
    <div className="relative w-full">
      <div className="collapse collapse-arrow bg-base-300 bg-opacity-65 rounded-lg in-view">
        <input type="checkbox" />
        <h6 className="flex items-center collapse-title">{question}</h6>
        <div className="collapse-content flex items-start">
          <small>{answer}</small>
        </div>
      </div>
    </div>
  );
};

export default Question;
