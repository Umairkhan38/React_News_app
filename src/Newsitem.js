import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
let {title,description,ImageUrl,newsUrl}=this.props
return (
<div className="container my-4">
    
            <div className="card shadow-sm">
        
                <img src={!ImageUrl?"http//newsapi.org/v2/top-headlines?country=us&apiKey=6d9fd8e213c644e8a1d37a752cc3ee1e":ImageUrl} alt="hello" />

                <div className="card-body">
                    <h5 className="card-text">{title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">{description}</p>
                    </div>

                        <div className="btn-group w-100 text-center my-2">
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn  btn-outline-success"><i>Read Now</i></a>
                    </div>

                </div>
            </div>
            </div>
            )}
                }
