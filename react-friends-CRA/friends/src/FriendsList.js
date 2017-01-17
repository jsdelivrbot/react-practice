import React, {Component} from 'react';


class FriendsList extends Component {

  handleChange(field, event) {
    this.setState( { [field]: event.target.value })
  }

  constructor(props) {
    super(props);

    this.state = {
      searcText: ""
      , orderBy: "name"
      , order: "ascending"
    };
  }
  render() {
    return (
      <div>
    <form className="form-inline searchForm" role="form">
        <div className="form-group">

            <input className="form-control"
            onChange={ this.handleChange.bind( this, "searchText" )}
            placeholder="Search For Friends"
            value={this.state.searchText}
            />

            <select className="input-medium"
              onChange={this.handleChange.bind(this, "orderBy")}
              value={ this.state.orderBy}
            >
                <option>Name</option>
                <option>#Friends</option>
            </select>

            <select className="input-medium"
            onChange={this.handleChange.bind(this, "order")}
              value={ this.state.order}
            >
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

export default FriendsList;
