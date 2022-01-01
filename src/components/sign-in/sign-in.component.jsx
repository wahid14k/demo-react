import React from 'react'
import './sign-in.style.scss'
import CustomButton from '../custom-button/customButton.component'
import FromInput from '../from-input/form-input.component'
import { signInWithGoogle,auth } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword }from 'firebase/auth'
class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            email:'',
            password:''
        }
    }


handleSubmit = async event =>{
    event.preventDefault()
    const {email ,password} = this.state;
    
    try{
        await signInWithEmailAndPassword(auth, email,password)
        this.setState({email:'',password:''})
    } catch(error){
        console.log(error)
    }


}


handleChange =async event =>{
        event.preventDefault()
        const { value,name}=event.target
        this.setState({[name]:value})
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
                <div className="buttons">
                <CustomButton type="submit" > Sign In</CustomButton>
                <CustomButton type="button" onClick= { signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                </div>
            </form>
            </div>
        )
    }
}
export default SignIn