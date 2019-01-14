import React, { Component } from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
// Redirect,
// import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Admin.css';
import Article from '../../components/Article/Article';

class Admin extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        const Articles = this.state.articles.map(article => {
            return  (
            <Article
              key={article.title}
              title={article.title}
              content={article.content} />
            );
          });
            return (
                <Aux>
                    <h1>Test Admin</h1>
                    {Articles}
                </Aux>
            );
    }
}

export default withRouter(Admin);