import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

// const MyComponent = () => <h1> Webpack with React </h1>

class Text extends React.Component {
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

ReactDOM.render(<Text title="Call Alex" text="Can you call him at 3pm?" />, 
                document.getElementById('react-container'))