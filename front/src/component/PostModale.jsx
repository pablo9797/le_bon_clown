import React from 'react';
import '../App.css';

function postModale (props){
    return(
        <div className={props.postModaleVisible? "postModale":"noPostModale"}>
            <div className= 'entete'>
                Postez votre annonce
            </div>
            <div className = 'postContent'>
                <div className= 'categorys'>
                    Clown
                    <input 
                        type='radio'
                        name='clown'/>
                    Magicien
                    <input 
                        type='radio'
                        name='magicien'/>
                    Jongleur    
                    <input 
                        type='radio'
                        name='jongleur'/>
                    Illusioniste    
                    <input 
                        type='radio'
                        name='illusioniste'/>
                    Troubadour   
                    <input 
                        type='radio'
                        name='troubadour'/>
                        
                </div>
                < div className = 'tittle'>
                    <textarea
                        id='postTittle'
                        name='tittle'
                        placeholder='Entrez votre titre'></textarea>
                </div>
                <div className= 'content'>
                    <textarea
                        id='postTexte'
                        name='texte'
                        placeholder='Entrez votre annonce'></textarea>

                </div>
            
            </div>
        </div>
    )

}


export default postModale;