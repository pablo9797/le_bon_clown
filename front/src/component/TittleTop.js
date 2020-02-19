import React from 'react';
import '../App.css';



function TittleTop(props){
    return(
        <div className='tittleTop'>
            <div className='menuLogo'onClick={props.isMenuVisible}>
            <img src='https://image.shutterstock.com/image-vector/hamburger-menu-web-icon-isolated-600w-1224004093.jpg'/>
            </div>
            <div className='tittle'>
                <p>LE BON CLOWN</p>
            </div>
            <div className='logo'>
               <img  src='https://t3.ftcdn.net/jpg/00/54/27/16/240_F_54271693_Gxro4zHXwGoosrGtJkuJTuiUpEhBN8WU.jpg'/>
            </div>

        </div>
    )
}

export default TittleTop