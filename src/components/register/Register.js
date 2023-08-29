import React from "react";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name:''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://smart-brain-api-bh0l.onrender.com/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(response => {
            if(response.id){
                this.props.loadUser(response)
                this.props.onRouteChange('home');
            }
        })
        
    }

    render(){
        // const { onRouteChange } = this.props;
        return(
            <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
                <main className="pa4 black-80">
                    <form id="" className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 tc">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 tc" htmlFor="name ">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="email-address"  
                                id="name" 
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 tc" htmlFor="email-address ">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 tc" htmlFor="password" >Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className=" tc">
                        <input
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib tc" 
                            type="submit" 
                            value="Sign " />
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </form>
                </main>
            </article>
        );
    }
    
}

export default Register;