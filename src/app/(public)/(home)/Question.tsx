import React from 'react';
import { InView } from 'react-intersection-observer';

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  return (
    <div className="relative w-full">
      <InView
        as="div"
        className="absolute top-0 left-0 h-full w-full"
        threshold={0.67}
        initialInView={true}
        fallbackInView={true}
        onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}
      ></InView>
  
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
