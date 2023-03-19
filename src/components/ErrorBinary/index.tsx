import React from "react"
import styles from './index.module.scss'

interface Props {

}
interface State {
    hasError: boolean
    error: Error
}
class ErrorBoundaries extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            hasError: false,
            error: null
        }
    }
    state: Readonly<State>
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        error.message
        alert(error.message)
        console.log(`%c${error.name}:\n${error.message}`, 'color: red;font-weight: 600')
        this.setState({ error, hasError: true })
    }
    render() {
        console.log(this.state);
        
        if (this.state.hasError) {
            return <div className={styles.container}>
                {this.state.error.message}
            </div>
        }
        return this.props.children
    }
}
export default ErrorBoundaries