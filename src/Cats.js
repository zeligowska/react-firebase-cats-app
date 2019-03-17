import React, { Component } from 'react';
import './App.css';
// import faker from 'faker';

import { db } from './firebase';

class Cats extends Component {

  state = {
    cats: []
  }

  componentDidMount() {
    // db.ref('/cats').push({ name: 'Cat3' });
    // db.ref('/cats').push({ name: 'Cat4' });
    // db.ref('/cats').push({ name: 'Kitty' });

    // If you want to add another 10 random cats uncomment below >>
    //
    // const headers = {
    //   'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
    // }

    // fetch('https://api.thecatapi.com/v1/images/search?limit=2', {headers})
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   data.forEach(e => {
    //     const cat = {
    //       name: faker.name.findName(),
    //       url: e.url
    //     }
    //     db.ref('/cats').push(cat);
    //   })
    // })

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
    const { cats } = this.state;
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

export default Cats;
