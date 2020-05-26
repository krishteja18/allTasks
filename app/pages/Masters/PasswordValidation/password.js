


import React, { Component } from 'react';

import {  withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './login.less'







class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
     
      password: null,
      confirmpassword:null,
    
      formErrors: {
        firstName: "",
       
        password: "",
        confirmpassword:"",
        pathMode:false,
       
      }
      
    };
    
  }




  
  handleSubmit = e => {
    e.preventDefault();

   
    
    
    

   const values={ name:this.state.firstName , email:this.state.email, phoneno:this.state.lastName,
        password:this.state.password, confirmpassword:this.state.confirmpassword, pathMode:true}

 


  

           if(this.state.confirmpassword !== this.state.password){
            
            alert("Passwords do not match");
          }
          
          
         else{
           
            alert('Success');
          
          }    
      
        
   
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "please your name required" : "";
        break;
    
    
   
        case "password":
        formErrors.password =
        value.length < 8 ? "Your password must be at least 8 charactersYour password must contain at least one letter." : "";
        break;

        case "confirmpassword":
        formErrors.confirmpassword =
        value.length < 8 ? "Your password must be at least 8 charactersYour password must contain at least one letter." : "";
        break;



      
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  




 
  render() {
    const { formErrors } = this.state;
    
    return (
      <div>
       
      
          
       
      <div className={styles.wrapper}>
        <div className={styles.formwrapper}>
        
          <form onSubmit={this.handleSubmit} noValidate>
            <div style={{marginTop: '90px'}}>
            <div className={styles.firstName}>
              <label htmlFor="firstName"> Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                // placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
                style={{marginBottom:'15px'}}
              />
              {formErrors.firstName.length > 0 && (
                <span className={styles.errorMessage}>{formErrors.firstName}</span>
              )}
            </div>




            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                // placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
                style={{marginBottom:'15px'}}
                
              />
               
              {formErrors.password.length > 0 && (
                <span className={styles.errorMessage}>{formErrors.password}</span>
              )}
            </div>


            <div className={styles.confirmpassword}>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                className={formErrors.confirmpassword.length > 0 ? "error" : null}
                // placeholder="Password"
                type="password"
                name="confirmpassword"
                noValidate
                onChange={this.handleChange}
                style={{marginBottom:'15px'}}
              />
               
              {formErrors.confirmpassword.length > 0 && (
                <span className={styles.errorMessage}>{formErrors.confirmpassword}</span>
              )}
            </div>

            
            <div className={styles.createAccount}>
              <button type="submit">Register</button>
                        </div>
            </div>
          </form>
        </div>
      </div>
      </div>
     
    );
  }
}





export default connect(({ login }) => ({
  login,
}))(withRouter(Login));
