import React, { Component,useState,useEffect ,Fragment } from 'react';
import axios from 'axios';

import Table from './tableView';




 class Main extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
        episodes:[],
        loading:false,
             
        }
    }



 

componentDidMount(){
  this.getEpisodes()



}
 
  getEpisodes = async()=>
 {
     console.log("teja");
     
   try{
       const data=await axios.get(`https://rickandmortyapi.com/api/episode/`);
       
console.log(data,"dat")
    this.setState({episodes:data.data.results,loading:true})
       
   }
   catch(e){
       console.log(e)
   




}}








 render(){
     return(


<Fragment>
    <Table loading={this.state.loading} episodes={this.state.episodes}  />



</Fragment>

     )



 }



 }









export default Main