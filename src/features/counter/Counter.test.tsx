import { render, screen } from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  it('should render', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should have an i18n header title', () => {
    render(<Counter />);
    expect(
      screen.getByRole('heading', { name: 'counter.title' })
    ).toBeInTheDocument();
  });

  it('should Decrement', () => {
    render(<Counter />);
    userEvent.click(screen.getByText('-'));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('should Increment', () => {
    render(<Counter />);
    userEvent.click(screen.getByText('+'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should incrementByAmount', () => {
    render(<Counter />);
    userEvent.click(screen.getByText('Add Amount'));
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should incrementByAmount with new number value', () => {
    render(<Counter />);
    userEvent.type(
      screen.getByRole('textbox', { name: 'Set increment amount' }),
      '4'
    );
    userEvent.click(screen.getByText('Add Amount'));
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('should incrementByAmount with new string value', () => {
    render(<Counter />);
    userEvent.type(
      screen.getByRole('textbox', { name: 'Set increment amount' }),
      'NOT-A-NUMVER'
    );
    userEvent.click(screen.getByText('Add Amount'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should Add Async', async () => {
    render(<Counter />);
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('Add Async'));
    const found = await screen.findByText('3');
    expect(found).toBeInTheDocument();
  });

  it('should Add If Odd', () => {
    render(<Counter />);
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('Add If Odd'));
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
