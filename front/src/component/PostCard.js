import React from 'react';
import '../App.css';


function PostCard({postData}){
    
    return(
        <div className='postCard'>
            <div className='image'>
                <img src={postData.profile_pic}/>
            </div>
            <div className='info'>
                <div className='infoUser'>
                    <div className='title'>
                        <p>{postData.title}</p>
                    </div>
                    <div className='price'>
                        <p>{postData.price} euros/heure</p>
                    </div>
                    <div className='category'>
                        <p>{postData.category}</p>
                    </div>
                    <div className='date'>
                        <p>{postData.created_at}</p>
                    </div>
                </div>
                <div className='content'>
                    <p>{postData.content}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard;