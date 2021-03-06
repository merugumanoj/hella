import React, { Component } from 'react';


class Register extends Component {
    //  constructor(props) {
    //   super(props);
    //   this.state = {
    //     name: '',
    //     email: '',
    //     password: ''
    //   }
    // }
  
    // handleChange = (e) => {
    //   console.log(e.target);
    //   this.setState({
    //     ...this.state
    //   });
    // }
  
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   this.props.pushItems(this.state);
    // }
    render(){
    return (
        <article className="br3 ba dark-gray b--black-6 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80 mt6">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
            </fieldset>
              <div className="">
                  <input 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Register" 
                  />
              </div>
            </div>
          </main>
    </article>
      
    )
  }
}

export default Register;