

import React, { Component } from 'react';

class ImageCard extends Component{

  constructor(props){
    super(props);

    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
    console.log("The image reference is ", this.imageRef);
    console.log("The image Reference height is ", this.imageRef.current.clientHeight);

    let height = this.imageRef.current.clientHeight;

    let spans = Math.ceil(height/200);

    this.setState({spans: spans});
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    return(
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
