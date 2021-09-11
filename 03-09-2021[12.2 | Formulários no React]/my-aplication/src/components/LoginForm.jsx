import React, {Component} from "react";
import ButtonForm from "./ButtonForm";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";


class LoginForm extends Component{
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Você está logado`)
  }
  
  render(){
    return(
      <section className="login-form">
      <h2>Login</h2>
      <form onSubmit={this.handleSubmit}>
      <EmailForm/>
      <PasswordForm/>
      <ButtonForm value="Entrar"/>
      </form>
    </section>
    );
  }
}

export default LoginForm;
