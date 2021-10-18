import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className="my-4">
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '89%', zIndex: '1'}}>
                        {source}  
                    </span>
                    <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/nasa_lucy-647x363.jpeg?PMIBD6_dXSjkVEIDBAIs4ge8XAKO0qWe":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem