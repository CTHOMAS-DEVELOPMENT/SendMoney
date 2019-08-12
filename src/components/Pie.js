import * as d3 from "d3";
import React from "react";
import { getSlices } from "./Slice";

class Pie extends React.Component {
    constructor(props) {
      super(props)
      this.state = { data: [] }
    }
    formatTextToNumber=(textNumber)=>
    {
      return textNumber.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
    componentDidUpdate(prevProps){
      if(prevProps.account !== this.props.account)
      {
        let sent=this.props.account.initial - this.props.account.balance;
        let initial=this.props.account.initial;
        this.setState({data:[sent,initial]});
      }
    }
    render() {
      let sent=this.state.data[0];
      let remainder=this.state.data[1]-this.state.data[0];
      let pie = d3.pie()([sent,remainder])
      
      let block={displey: "block"}  
      let jsx = getSlices(pie);
      return  <div className='item'>
                <svg width={100} height={100}>
                  <g transform={`translate(${50},${50})`}>
                  { jsx }
                  </g>
                </svg>
                <div style={block}>
                  <span>&pound;{sent?`${this.formatTextToNumber(sent)} total sent.  `:"" }</span><br/>
                  <span>&pound;{remainder?`${this.formatTextToNumber(remainder)} left available.  `:"" }</span>
                </div>
         
      </div>
    }
  }

  export default Pie;