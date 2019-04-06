import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import faker from 'faker';

import { db } from '../../firebase';
import { populateCats } from '../actions'

class Cats extends Component {

  componentDidMount() {

    // Now we are not using firebase, we can see random cats straight from the api
    
    const headers = {
      'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
    };
    fetch('https://api.thecatapi.com/v1/images/search?limit=10', {headers})
    .then(response => response.json())
    .then(data => {
      const cats = [];
      console.log(data);
      data.forEach(e => {
        const cat = {
          name: faker.name.findName(),
          url: e.url
        };
        cats.push(cat);
        // db.ref('/cats').push(cat);
      });
      this.props.populateCats(cats);
    });

    db.ref('/cats/').orderByChild('name').on('value', (snapshot) => {
      const cats = [];
      Object.entries(snapshot.val()).forEach(e => {
        const cat = {
          id: e[0],
          ...e[1]
        }
        cats.push(cat);
      })
      this.setState({ cats });
    })
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
                <img src={cat.url} alt="" />
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
  populateCats: (data) => dispatch(populateCats(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
