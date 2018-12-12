import React, { Component } from 'react'
import { connect } from 'react-redux'


class Tradie extends Component {
 
  render() {
   
    let trades

    if(this.props.mapTrade.tradieArray !== null) {
      trades = this.props.mapTrade.tradieArray.map( (trade, index) => {
        console.log(trade)
        return (
          <div key={index}>
            <div>
              <h1>Name: {trade.businessName}</h1>
              <h5>Bio: {trade.businessDescription}</h5>
              <h5>Email: {trade.businessEmail}</h5>
              <h5>Phone: {trade.businessPhone}</h5>
            </div>
          </div>
        )
      })
    } else {
      trades = '';
    }
  


    return (
      <div>
         {trades}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mapTrade: state.tradieFromStore
})

export default connect(mapStateToProps, null)(Tradie);