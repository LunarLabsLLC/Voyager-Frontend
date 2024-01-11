// src/app/(public)/(home)/Question.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Question from './Question';

describe('Question', () => {
  it('renders the question and answer', () => {
    const question = 'What is the meaning of life?';
    const answer = '42';

    const { getByText } = render(<Question question={question} answer={answer} />);

    expect(getByText(question)).toBeInTheDocument();
    expect(getByText(answer)).toBeInTheDocument();
  });

  it('expands the answer when the collapse arrow is clicked', () => {
    const question = 'What is the capital of France?';
    const answer = 'Paris';

    const { getByText, getByRole } = render(<Question question={question} answer={answer} />);

    const collapseArrow = getByRole('checkbox');
    fireEvent.click(collapseArrow);

    expect(getByText(answer)).toBeVisible();
  });

  it('handles different input values correctly', () => {
    const question = 'What is your favorite color?';
    const answer = 'Blue';

    const { getByText } = render(<Question question={question} answer={answer} />);

    expect(getByText(answer)).toBeInTheDocument();

    const newAnswer = 'Red';
    render(<Question question={question} answer={newAnswer} />);

    expect(getByText(newAnswer)).toBeInTheDocument();
    expect(getByText(answer)).not.toBeInTheDocument();
  });
});
