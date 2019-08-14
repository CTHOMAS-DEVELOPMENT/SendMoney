import React from "react";
import "../css/app.scss";
import { connect } from "react-redux";
import List from "./List";
import Form from "./Form";
import Pie from "./Pie";
import Footer from "./Footer";
import { initializeFbData, insertFbGift } from "../components/crud";
class App extends React.Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      gifts: [],
      accounts: []
    };
    
  }
  callMain=(val)=>{
    insertFbGift(val, this.props.accounts[0].balance);
  }
  componentDidMount(){
    initializeFbData();
  }   
  render() {
    
    return (
      <div className='grid-container'>
        <Form onSubmit={ (transInfo)=>{ this.callMain(transInfo)}}/>
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
