import React, { Component } from 'react'
import './sign-up.style.scss'
import CustomButton from '../custom-button/customButton.component'
import FromInput from '../from-input/form-input.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import {createUserWithEmailAndPassword }from 'firebase/auth'
 class  SignUp extends Component {
    constructor(){
        super()
        
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit =async event =>{
        event.preventDefault()

        const {displayName,email,password,confirmPassword} =this.state

        if(password !== confirmPassword){
            alert(`Passwords Don't Match`)
            return
        }else if(password.length < 6){
            alert(`Password should be at least 6 characters`)
        }
        try{

            const {user }= await createUserWithEmailAndPassword(auth,email,password)
            await createUserProfileDocument(user,{displayName})

            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            })
        }catch(error){
            console.error(error)
        }
    }


    handleChange=event =>{
        const {name,value} =event.target

        this.setState({[name]:value})
    }



     render(){
         const {displayName,email,password,confirmPassword} =this.state
         return(
             <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-from' onSubmit={this.handleSubmit}>
                    <FromInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                   <FromInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FromInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password '
                    required
                    />
                    <FromInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='ConfirmPassword '
                    required
                    />
                    <CustomButton
                        type='submit'
                    >Sign Up
                    </CustomButton>
                </form>
             </div>
         )
     }
 }
export default SignUp