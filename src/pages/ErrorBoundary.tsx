import { Button, Result } from "antd"
import React, { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
  children?: ReactNode
}
type State = {
  error?: Error
  errorInfo?: Error
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({ error: error, errorInfo: errorInfo })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Result
          status="warning"
          title="There are some problems with your page."
          extra={
            <Link to={-1 as unknown} replace={true}>
              <Button type="primary">Back</Button>
            </Link>
          }
        />
      )
    }
    return this.props.children
  }
}
