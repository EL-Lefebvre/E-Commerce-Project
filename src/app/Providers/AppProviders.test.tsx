import React from 'react';
import { render, screen } from '@testing-library/react';
import AppProviders from './AppProviders';
const App = () => <h1>App</h1>;

describe('AppProviders', () => {
  it('should render', () => {
    render(
      <AppProviders>
        <App />
      </AppProviders>
    );
  });

  it('should render children', () => {
    render(
      <AppProviders>
        <App />
      </AppProviders>
    );

    expect(screen.getByRole('heading', { name: 'App' })).toBeInTheDocument();
  });
});
