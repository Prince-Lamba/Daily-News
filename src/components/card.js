import React, { Component } from 'react';

export class Card extends Component {
  render() {
    let { title, desc, img, url, author, styleState} = this.props;

    return (
      <div className={`card mx-1 bg-${styleState.type}`} style={{color: styleState.color}}>
        <img src={img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{desc}</p>

          <div class="d-flex justify-content-between">
            <a href={url} className='btn btn-sm btn-primary'>
              Read More
            </a>
          <figcaption class="blockquote-footer my-1">
             {author}
          </figcaption>
          </div>
          </div>
        </div>
    );
  }
}

export default Card;
