import React from "react"
import "./css/app.scss"
import { connect } from "react-redux"
import List from "./components/List"
import Form from "./components/Form"
import Pie from "./components/Pie"
import Footer from "./components/Footer"
import { getFbData } from "./components/crud"
import Header from "./components/Header"
import {updateGifts,updateView} from "./actions/actions"
import store from "./store"

class App extends React.Component {
   state = {
        gifts: [],
        accounts: [],
        view:"Full View"
    }
    componentDidMount(){
        getFbData()
    }
    menuclick=(item)=>{
        store.dispatch(updateView(item,this.props.gifts,this.props.accounts));
    }
    updatepage=(donation)=>
    {
        store.dispatch(updateGifts(donation))
    }
    render() {
        return (
            <div className='grid-container'>
                <Header menuclick={this.menuclick}/>
                <Form updatepage={this.updatepage}/>
                {this.props.view !=="Form Only"?<List gifts={this.props.gifts} view={this.props.view}/>:null }
                <Pie account= {this.props.accounts?this.props.accounts[0]:""} />
                <Footer />   
            </div>
        )
    }
}
const mapStateToProps = state => {
  return { gifts: state.gifts,  accounts: state.accounts,  view: state.view}
}
export default connect(mapStateToProps)(App)
