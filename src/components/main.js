import React, { Component } from 'react';
import Card from './card';
// import data from './data.json';
import Spinner from './spinner';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading:true,
    };
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }
  async getData() {
    this.setState({loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8e9d91ffb0ce4b1db644620c7367b73e&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading:false});
  }
  componentDidMount() {
    this.getData();
  }
  prevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.getData();
  };
  nextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.getData();
  };
  render() {
    let { styleState } = this.props;
    return (
      <div className='container my-3' style={{ color: styleState.color }}>
        <h2 className='d-flex justify-content-center'>Top Headlines</h2>
        {this.state.loading?<Spinner />:''}
        <div className='row m-3'>
          {this.state.articles.map((element) => {
            if (element.description && element.title && element.urlToImage) {
              return (
                <div className='col-md-4 my-1'>
                  <Card
                    title={element.title}
                    desc={element.description}
                    img={element.urlToImage}
                    url={element.url}
                    author={element.author?.length < 35 ? element.author : ''}
                    date={element.publishedAt}
                    styleState={styleState}
                  />
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
        <div class='d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            class='btn btn-secondary mx-2'
            onClick={this.prevClick}
          >
            &larr; Previous
          </button>
          <button
            type='button'
            class='btn btn-secondary'
            onClick={this.nextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
