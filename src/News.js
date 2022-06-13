import React, { Component } from 'react'
import Newsitem from './Newsitem.js'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps={
        category:'General',
        pageSize:21,
    }

    static propTypes={
        category:PropTypes.string,
        pageSize:PropTypes.number
    }


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
this.props.setProgress(12);
let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=6d9fd8e213c644e8a1d37a752cc3ee1e&page=1&pageSize=${this.props.pageSize}`;
this.setState({loading:true})
let data=await fetch(url);
this.props.setProgress(30);
let parseData=await data.json();
this.props.setProgress(60);
    console.log(parseData);
    this.setState({articles:parseData.articles,
        totalResults:this.state.totalResults,
    loading:false});
    this.props.setProgress(100);

}

 handleNext=async()=>{

if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
    console.log("hello");
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=6d9fd8e213c644e8a1d37a752cc3ee1e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({
        page:this.state.page+1,
        articles:parseData.articles,
    loading:false});   
    }
    
    }

handlePrev=async()=>{

    console.log("hello");
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=6d9fd8e213c644e8a1d37a752cc3ee1e&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({
        page:this.state.page-1,
        articles:parseData.articles,
        loading:false})
}




render() {
    return (

<div className='container'>
    <h1 className="text-center my-3">Welcome to blistering.com!</h1><hr/>
    <h2 className="text-center text-danger">&#8680;You're Watching Latest [ {this.props.category} ] News</h2>
    <hr />
    {this.state.loading && <Spinner />}
    <div className="row" >
        {!this.state.loading&&this.state.articles?.map((element) => {
            return(
            <div className="col-md-4"  key={element.url}>
                <Newsitem title={element.title.slice(0,40)+'...'}
            description={element.description?element.description.slice(0,60)+'...':'description'}
                    ImageUrl={element.urlToImage?element.urlToImage:'url'} 
                    newsUrl={element.url?element.url:'url'} />
            </div>
        )})}
    </div>


    <div className="d-flex justify-content-between">
    <button  disabled={this.state.page<=1} onClick={this.handlePrev} type="button" className="btn btn-danger my-2">&larr; Previous</button>
    <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize||this.state.articles)} onClick={this.handleNext} type="button" className="btn btn-danger my-2">Next &rarr;</button>
    </div>

</div>



)
}
}




