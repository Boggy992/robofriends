import React,{ Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, info) {
        this.setState({ hasError: true }) 
    }
    
    render() {
        if(this.state.hasError) {
            return <h1>Ooopsss...<br></br>Something<br></br>is<br></br>wrong</h1>     
        }
        return this.props.children  
    }
    
}

export default ErrorBoundry