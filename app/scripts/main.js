import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/menu'
import Home from './components/home'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Home />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
