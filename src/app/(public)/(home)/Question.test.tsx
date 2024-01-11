import React from 'react';
import { render } from '@testing-library/react';
import Question from './Question';
import { render } from '@testing-library/react';
import Question from './Question';

describe('Question component', () => {
  it('should render the question and answer', () => {
    const question = 'What is the capital of France?';
    const answer = 'Paris';

    const { getByText } = render(<Question question={question} answer={answer} />);

    expect(getByText(question)).toBeInTheDocument();
    expect(getByText(answer)).toBeInTheDocument();
  });

  // Add more test cases to cover different scenarios and edge cases
});
