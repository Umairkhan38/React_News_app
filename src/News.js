import React, { Component } from 'react'
import Newsitem from './Newsitem.js'

export default class News extends Component {
    constructor() {
        super();
        console.log("Iam A Constructor Here");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

async componentDidMount(){

    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=6d9fd8e213c644e8a1d37a752cc3ee1e&pagesize=21";

    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,
        totalResults:this.state.totalResults});

}

 handleNext=async()=>{

    if(this.state.page+1 >Math.ceil(this.totalResults/21)){

    }
    else{

    console.log("hello");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6d9fd8e213c644e8a1d37a752cc3ee1e&page=${this.state.page+1}&pagesize=21`;

    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({
        page:this.state.page+1,
        articles:parseData.articles});

    }
    }

handlePrev=async()=>{

    console.log("hello");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6d9fd8e213c644e8a1d37a752cc3ee1e&page=${this.state.page-1}&pagesize=21`;

    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({
        page:this.state.page-1,
        articles:parseData.articles});

}




    render() {
        return (

            <div className='container'>
                <h1 className="text-center my-3">Welcome to blistering.com!</h1>
                <hr />
                <div className="row" >
                    {this.state.articles.map((element) => {
                        return(
                        <div className="col-md-4"  key={element.url}>
                            <Newsitem title={element.title.slice(0,35)}
                            description={element.description.slice(0,85)}
                                ImageUrl={element.urlToImage} 
                                newsUrl={element.url} />
                        </div>
                    )})}
                </div>


                <div className="d-flex justify-content-between">
                <button  disabled={this.state.page<=1} onClick={this.handlePrev} type="button" className="btn btn-danger my-2">&larr; Previous</button>
                <button disbaled={this.state.page>=2} onClick={this.handleNext} type="button" className="btn btn-danger my-2">Next &rarr;</button>
                </div>

            </div>



        )
    }
}




