import React from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import '../App.css';


class MainThread extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts: []
        }
    this.getTabContent=this.getTabContent.bind(this);
    }
    componentDidMount () {
        this.getPosts()

    }
    getPosts(){
         axios.get('http://localhost:8001/posts')
            .then(response=> this.setState({posts:response.data}))
    }
    getTabContent(){
        let posts = this.state.posts;
        return posts
            .map((post)=>{
                return<PostCard postData={post}/>
            })
    }
         
    render(){

        return(
            <div className='mainThread'>
                {this.getTabContent()}
            </div>
        )
    }
}




export default MainThread;