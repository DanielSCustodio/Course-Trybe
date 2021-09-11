import React, {Component} from "react";
import ButtonForm from "./ButtonForm";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";
import NameForm from "./NameForm"


class RegsiterForm extends Component{
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Você está Registrado`)
  }
  render(){
    return(
      <section className="register-form">
      <h2>Cadastro</h2>
      <form onSubmit={this.handleSubmit}>
      <NameForm/>
      <EmailForm/>
      <PasswordForm/>
      <ButtonForm value="Cadastrar"/>
      </form>
    </section>                   
    );
  }
}

export default RegsiterForm;