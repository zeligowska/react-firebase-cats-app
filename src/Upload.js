import React, { Component } from 'react';
import { storage } from './firebase';

class Upload extends Component {

  state = {
    file: null
  }

  handleChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.file !== null) {
        const ref = storage.ref().child(`images/${this.state.file.name}`);
        ref.put(this.state.file)
        .then(snapshot => {
            console.log('File uploaded');
            console.log(snapshot);
        })
    }
  }

  render() {
    return(
      <div>
        <h2>Upload file</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="file" name="files" onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" value="Upload" />
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;