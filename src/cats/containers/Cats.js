import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import { fetchCats } from '../actions'

class Cats extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }


  render() {
    const { cats } = this.props;
    return (
      <div>
        <div>
          {cats.map(cat => (
            <div key={cat.id}>
              <div>
                {cat.name}
              </div>
              <div>
                <img src={cat.url} alt="" width='800px' height='auto' />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats.list
})

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
