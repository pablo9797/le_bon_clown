import React from 'react';
import '../App.css';

function Menu (props){
    return(
        <div className ={props.menuVisible?'menu':'invisibleMenu'} onClick={props.isMenuVisible}>
            <div id= 'specialites' >
               <div id='magicien' onClick={props.getActiveId} > Magicien</div>
            </div>
            <div id= 'specialites'>
                <div id='clown' onClick={props.getActiveId}>Clown</div>
            </div>
            <div id= 'specialites'>
                <div id='jongleur' onClick={props.getActiveId}>Jongleur</div>
            </div>
            <div id= 'specialites'>
                <div id='illusioniste' onClick={props.getActiveId}>Illusioniste</div>
            </div>
            <div id= 'specialites'>
                <div id='troubadour' onClick={props.getActiveId}>Troubadour</div>
            </div>

        </div>
    )
}

export default Menu