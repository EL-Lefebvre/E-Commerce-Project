import React, { ErrorInfo } from "react";

type Props = {
  error?: Error;
};
type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(/*error: Error*/) {
    return { hasError: true };
  }

  log = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error(error);
    console.error(errorInfo);
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
