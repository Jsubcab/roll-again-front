import React, { Component} from 'react';

import SearchCards from './SearchCards';

const API = 'http://localhost:8080/api/products';

export default class SearchTest extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          products: [],
          DataisLoaded: false
        };
      }

      async componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({ products: data,
        DataisLoaded: true }))
        .then(data => {return true; }
          );
      }

      render() {
        return (
          <SearchCards props={this.state.products}/>
        );
      }
}