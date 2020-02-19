import React from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import '../App.css';
import Menu from './Menu';


class MainThread extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts: [],
            activeId:'',
            
        }
    this.getTabContent=this.getTabContent.bind(this);
    this.getActiveId=this.getActiveId.bind(this);
    }
    componentDidMount () {
        this.getPosts()

    }
    getPosts(){
         axios.get('http://localhost:8001/posts')
            .then(response=> this.setState({posts:response.data}))
    }
    getActiveId(event){
        const buttonId=event.target.id;
        this.setState({activeId:buttonId})
    }
    getTabContent(){
        let posts = this.state.posts;

        if(this.state.activeId==='magicien'){
            return  posts= posts
                    .filter(post=>post.category==='Magicien')
                    .map((post)=>{
                        return<PostCard postData={post}/>
                        })}

        if(this.state.activeId==='clown'){
            return  posts= posts
                    .filter(post=>post.category==='Clown')
                    .map((post)=>{
                        return<PostCard postData={post}/>
                        })}
        
        if(this.state.activeId==='jongleur'){
            return  posts= posts
                    .filter(post=>post.category==='Jongleur')
                    .map((post)=>{
                        return<PostCard postData={post}/>
                        })}
                        
        if(this.state.activeId==='illusioniste'){
            return  posts= posts
                    .filter(post=>post.category==='Illusioniste')
                    .map((post)=>{
                        return<PostCard postData={post}/>
                        })}

        if(this.state.activeId==='troubadour'){
            return  posts= posts
                    .filter(post=>post.category==='Troubadour')
                    .map((post)=>{
                        return<PostCard postData={post}/>
                        })}

        else{
            return posts = posts
                    .map((post)=>{
                        return<PostCard postData={post}/>
                    })}

        

        }
    
      
         
    render(){

        return(
            <div>    
                <Menu
                isMenuVisible={this.props.isMenuVisible}
                menuVisible={this.props.menuVisible}
                activeId={this.state.activeId}
                getActiveId={this.getActiveId}/>
                
                <div className={this.state.menuVisible?'notMainthread':'mainThread'}>
                    <div className="annonce">
                        {this.getTabContent()}
                    </div>
                </div>
            </div>
        )
    }
}




export default MainThread;