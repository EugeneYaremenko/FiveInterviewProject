import { ErrorInfo, PureComponent, ReactNode } from "react";
import { notify } from "./notify";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errInfo: any;
}

class ErrorBoundary extends PureComponent<Props, State> {
  state: State = {
    hasError: false,
    errInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);

    return this.setState({ hasError: true, errInfo: error });
  }

  render() {
    if (this.state.hasError) {
      return notify(this.state.errInfo.toString(), "error");
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
