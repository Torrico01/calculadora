import React from 'react'; 
import OutputScreenRow from './display-coluna.js'; 


const OutputScreen = (props) => { 
return ( 
	<div className="screen"> 
	<OutputScreenRow value = {props.operadores}/> 
	<OutputScreenRow value = {props.resultado}/> 
	</div> 
) 
} 

export default OutputScreen; 
