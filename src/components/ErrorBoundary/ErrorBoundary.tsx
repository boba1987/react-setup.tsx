import React from 'react';
import styles from './ErrorBoundary.module.scss';

interface IProps {};
interface IState {
  hasError: boolean
};

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <div className={styles.ErrorBoundary}>Something went wrong..</div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
