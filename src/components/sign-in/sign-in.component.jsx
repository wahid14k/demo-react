import React from 'react'
import './sign-in.style.scss'
import CustomButton from '../custom-button/customButton.component'
import FromInput from '../from-input/form-input.component'
class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            email:'',
            password:''
        }
    }

    handleChange = event =>{
        const { value,name}=event.target
        this.setState({[name]:value})
    }

handleSubmit = event =>{
    event.preventDefault()
    this.setState({email:'',password:''})
}

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FromInput 
                type="email" 
                name='email' 
                value={this.state.email} 
                label='Email'
                handleChange={this.handleChange}
                required/>
                <FromInput 
                type="password" 
                name='password'
                value={this.state.password} 
                handleChange={this.handleChange}
                label='Password'
                required/>
                <CustomButton type="submit" >signin</CustomButton>
            </form>
            </div>
        )
    }
}
export default SignIn