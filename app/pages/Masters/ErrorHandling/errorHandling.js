import React, { Component,useState,useEffect ,Fragment } from 'react';
import axios from 'axios';

// import Table from './tableView';




 class ErrorHandling extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
        episodes:[],
        
             
        }
    }



 

componentDidMount(){
  this.getEpisodes()



}
 
  getEpisodes = async()=>
 {
     console.log("teja");
     
   try{
       const data=await axios.get(`https://api.github.com/user`);
       
console.log(data['data'][0].login,"dat")
    this.setState({episodes:data['data'][0].login})
       
   }
   catch(e){
       alert(e.message)
   




}}








 render(){
     return(


<Fragment>
    
<div style={{marginTop:"70px"}}>

{this.state.episodes}

</div>


</Fragment>

     )



 }



 }









export default ErrorHandling