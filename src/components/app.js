import React from "react";
import "../css/app.scss";
import { connect } from "react-redux";
import List from "./List";
import Form from "./Form";
import Pie from "./Pie";
import Footer from "./Footer";
import { getFbData } from "../components/crud";

class App extends React.Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      gifts: [],
      accounts: []
    };
  }

  componentDidMount(){
    getFbData();
  }
    
  render() {
    
    return (
      <div className='grid-container'>
        <Form />
        <Pie account= {this.props.accounts?this.props.accounts[0]:""} />
        <List gifts={this.state.gifts} />   
        <Footer />   
      </div>
    );
  }
}
//Data shared between store and local state
const mapStateToProps = state => {
  return { gifts: state.gifts,  accounts: state.accounts};
};

export default connect(mapStateToProps)(App);
