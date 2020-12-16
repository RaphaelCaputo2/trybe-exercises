import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <div>
          {list.map(element => (
            <li>{element}</li>
          ))}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  list: state.listReducer
})

export default connect(mapStateToProps)(List);