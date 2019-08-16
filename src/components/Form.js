import React, { Component } from "react";
import { connect } from "react-redux";
import { VALID_EMAIL_REGEX } from "../common/constants";
import { validatedField } from "../common/Utils";
export class Form extends Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      gifts:[],
      errorMessage: "",
      name:"",
      email:"",
      amount:"",
      errors: { email: '', amount: '', name: '' }
    };

  }
  validationPassed = ( errors ) =>
  {
    return (validatedField(errors, this.state.name) &&
    validatedField(errors, this.state.email) &&
    validatedField(errors, this.state.amount));
  }
  handleAmountChange = e => {
    //Only show valid amounts
    const amount = e.target.value;
    this.setState({ amount });
    //Assign validation errors
    let errors = this.state.errors;
    errors.amount=amount > this.props.accounts[0].balance?"Insufficient funds!":"";
    this.setState({ errors });
  };
  handleNameChange = event => {
    let name=event.target.value;
    this.setState({ name });
    //Assign validation errors
    let errors = this.state.errors;
    errors.name=name.length > 3?"":"Name entered is less than 4 characters!"
    this.setState({errors});
  };
  handleEmailChange = event => {
    this.setState({ "email": event.target.value });
    const email =  event.target.value;
    //Assign validation errors
    let errors = this.state.errors;
    errors.email=VALID_EMAIL_REGEX.test(email)? '' : 'Email is not valid!';
    this.setState({errors});
  };
  handleSubmit = event => {
    
    event.preventDefault();
    if(this.validationPassed(this.state.errors))
    {
      this.setState({ amount:"" });
      this.setState({ email:"" });
      this.setState({ name:"" });
      this.props.onSubmit(this.state);
    }
    
  };
  render() {
    return (
      <div className='item tall'>
        {this.state && this.state.errorMessage && (
          <p>{this.state.errorMessage}</p>
        )}
        <form className={this.validationPassed(this.state.errors)?'submission-form success':'submission-form error'} onSubmit={this.handleSubmit} >

            <label htmlFor="name" >Name</label>
            <div className='smallMessages'>{ validatedField(this.state.errors, this.name)?"":this.state.errors.name }</div>
            <input
              required
              type="text"
              id="name"
              placeholder="Name..."
              value={this.state.name}
              onChange={this.handleNameChange}
            />

            <label htmlFor="email">Email</label>
            <div className='smallMessages'>{ validatedField(this.state.errors, this.email)?"":this.state.errors.email }</div>
            <input
              required
              type="text"
              id="email"
              placeholder="Email..."
              value={this.state ? this.state.email : ""}
              onChange={this.handleEmailChange}
            />

            <label htmlFor="amount">Amount</label>
            <div className='smallMessages'>{ validatedField(this.state.errors, this.amount)?"":this.state.errors.amount }</div>
            <input
            required
              type="number"
              id="amount"
              placeholder="Amount..."
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
            <br/>
            {
              this.validationPassed(this.state.errors)?<button type="submit" className="sendBtn">Send
              </button>:<div id='message' className='smallMessages'>Please enter indicated missing values</div>
            }
        
        </form>
      </div>
    );
  }
}
//Synchonise local state with redux store
const mapStateToProps = state => {
  return { gifts: state.gifts,  accounts: state.accounts};
};
//Connect the form with the store and enable dispatching
export default connect(
  mapStateToProps
)(Form);
