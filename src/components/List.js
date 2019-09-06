import React from "react";
import { connect } from "react-redux";
import Pagination from "../common/Pagination"
import { formatTextToNumber } from "../common/Utils"
class ConnectedList extends React.Component {
  state = { gifts: [], pageOfItems:[] };
  componentDidMount()
  {
    this.setState({gifts:this.props.gifts})
  }
  componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      this.setState({gifts:this.props.gifts})
    }
  }
  onChangePage=(pageOfItems)=>{
    if(pageOfItems!==this.state.pageOfItems)
    {
      this.setState({pageOfItems:pageOfItems})
    }
  }
  render()
  {
    return (
      <div className='item'>
        {this.state.gifts=== undefined ? (
          <h2>Loading...</h2>
        ) : (
          <div className='grid-container'>
            <div className='item detaildiv'>
            <Pagination items={this.props.gifts} pageSize={6} onChangePage={this.onChangePage} />
            </div>
            <div className='item detaildiv'>
              {
                this.state.pageOfItems.map((gift,id) => {
                  return (
                    <div key={id}>
                      <div>{gift.name}</div>
                      <div>
                        {gift.email} <b>&pound;{formatTextToNumber(gift.amount)}</b> 
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
          )}
      </div>
    )
  }
};
const mapStateToProps = state => {
    return { gifts: state.gifts };
};
export default connect(mapStateToProps)(ConnectedList);
