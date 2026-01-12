import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error){
        return { hasError: true, error: error };
    }

    componentDidCatch(error, info){
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    render(){
        if(this.state.hasError){
            return <h2 style={{color:"red"}}>Somethng Went Wrong</h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;