import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'


class Image extends React.Component {
    render(){
        return (
            <div>
                <h1>Webpack</h1>
                <div id="imageDiv">
                    <div id="image"></div>
                  
                </div>
                   

            </div>
        )
    }
}

ReactDOM.render(<Image />, document.getElementById('react-container'))