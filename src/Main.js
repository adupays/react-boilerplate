import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const Main = () => {
  return <main className="main-container">Your code here...</main>;
};

export default function MainErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Main {...props} />
    </ErrorBoundary>
  );
}
