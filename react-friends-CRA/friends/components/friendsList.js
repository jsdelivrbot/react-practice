import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    
  }
  render() {
    return (
      <div>
    <form className="form-inline searchForm" role="form">
        <div className="form-group">

            <input className="form-control" placeholder="Search For Friends" />

            <select className="input-medium">
                <option>Name</option>
                <option>#Friends</option>
            </select>

            <select className="input-medium">
                <option>Descending</option>
                <option>Ascending</option>
            </select>

        </div>
    </form>

    <ul>
    </ul>
</div>
    )
  }
}

export default App;
