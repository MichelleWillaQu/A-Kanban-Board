import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Runs after each test to clear things
afterEach(cleanup);

// Jest: 'it' is equivalent to 'test'
describe('1. Stages rendered', () => {
  it('Backlog stage', () => {
    const { getByTestId } = render(<App />);
    const stageEl = getByTestId('stage-0');
    expect(stageEl.getAttribute('name')).toBe('Backlog');
  });
  it('To do stage', () => {
    const { getByTestId } = render(<App />);
    const stageEl = getByTestId('stage-1');
    expect(stageEl.getAttribute('name')).toBe('To do');
  });
  it('Ongoing stage', () => {
    const { getByTestId } = render(<App />);
    const stageEl = getByTestId('stage-2');
    expect(stageEl.getAttribute('name')).toBe('Ongoing');
  });
  it('Done stage', () => {
    const { getByTestId } = render(<App />);
    const stageEl = getByTestId('stage-3');
    expect(stageEl.getAttribute('name')).toBe('Done');
  });
});

describe('2. Dummy tasks render', () => {
  it('shows task 1', async () => {
    const { getByTestId } = render(<App localStorage={localStorage} />);
    await (() => {
      const taskEl = getByTestId('task-task-1');
      const stageEl = getByTestId('stage-0');
      expect(taskEl).toBeInTheDocument();
      expect(stageEl).toContain(taskEl);
    });
  });
});
