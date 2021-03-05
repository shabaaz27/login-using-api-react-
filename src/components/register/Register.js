import React, { Component } from 'react';
import Header from '../header/Header';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = { 
            name:"",
            password:"",
            email:"",
            history:useHistory()
        }
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    async handleSubmit(e){
        const {name,password,email} = this.state;
         let item = {name,password,email}

        e.preventDefault();
        console.warn(name,password,email);
        
        const result = await axios.post('',{
        body:JSON.stringify(item),
        headers:{
            "Content-Type":"application/json",
            "Accept" :"application/json"
        }
        })

        result = await result.json();
        console.warn("result",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        this.state.history.push("/login");
    }
    
    
    handleChange(e){
         let target = e.target;
         let value = target.value;
         let name = target.name;
         
         this.setState({
              [name]:value
         });


       }

      render() {
        const {name,password,email} = this.state;
            return (
            <div>
                <Header/>
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={this.handleSubmit} >
                <h1 className="text-center mt-3">RegisterPage</h1>
                <input type="text" value={name}  name="name" onChange={this.handleChange} className="form-control" placeholder="name"/>
                <br/>
                <input type="password"  value={password} name="password" onChange={this.handleChange}  className="form-control" placeholder="password"/>
                <br/>
                <input type="text" value={email} name="email" onChange={this.handleChange} className="form-control" placeholder="email"/>
                <br/>
                <button  className="btn btn-primary" style={{marginLeft:"41%"}}>Sign up</button>
            </form>
                
            </div>
            </div>
        )
    }
}

export default Register;