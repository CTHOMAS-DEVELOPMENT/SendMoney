import React from "react";
import "./css/app.scss";
import { connect } from "react-redux";
import List from "./components/List";
import Form from "./components/Form";
import Pie from "./components/Pie";
import Footer from "./components/Footer";
import { getFbData } from "./components/crud";
import Header from "./components/Header";

class App extends React.Component {
    constructor(props) {
        super();
        //Initialise state
        this.state = {
        gifts: [],
        accounts: [],
        view:"Full View"
        };
    }
    componentDidMount(){
        getFbData();
    }
    shouldShow=(val)=>{
        return this.state.view==="Full View"||this.state.view===val;
    }
    menuclick=(item)=>{
        this.setState({view:item});
    }
    render() {
        return (
            <div className='grid-container'>
                <Header menuclick={this.menuclick}/>
                {this.shouldShow("Form Only")?<Form />:null}
                {this.shouldShow("Transactions")?<List gifts={this.state.gifts} /> :null}
                <Pie account= {this.props.accounts?this.props.accounts[0]:""} />         
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
