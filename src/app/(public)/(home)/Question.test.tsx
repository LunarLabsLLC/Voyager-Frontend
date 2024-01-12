import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question from './Question';

describe('Question', () => {
  const question = 'Test Question';
  const answer = 'Test Answer';

  it('renders the question and answer', () => {
    const { getByText } = render(<Question question={question} answer={answer} />);
    expect(getByText(question)).toBeInTheDocument();
    expect(getByText(answer)).toBeInTheDocument();
    expect(getByText(answer)).not.toBeVisible();
  });

  it('renders the collapse arrow', () => {
    const { getByTestId } = render(<Question question={question} answer={answer} />);
    expect(getByTestId('collapse-arrow')).toBeInTheDocument();
  });

  it('expands the answer when the collapse arrow is clicked', () => {
    const { getByTestId, getByText } = render(<Question question={question} answer={answer} />);
    const collapseArrow = getByTestId('collapse-arrow');
    fireEvent.click(collapseArrow);
    expect(getByText(answer)).toBeVisible();
  });
  it('expands the answer when the collapse arrow is clicked alt', () => {
    const { getByText, getByRole } = render(<Question question={question} answer={answer} />);
    const collapseArrow = getByRole('checkbox');
    fireEvent.click(collapseArrow);
    expect(getByText(answer)).toBeVisible();
  });

  it('collapses the answer when the collapse arrow is clicked twice', () => {
    const { getByTestId, getByText } = render(<Question question={question} answer={answer} />);
    const collapseArrow = getByTestId('collapse-arrow');
    fireEvent.click(collapseArrow);
    fireEvent.click(collapseArrow);
    expect(getByText(answer)).not.toBeVisible();
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
