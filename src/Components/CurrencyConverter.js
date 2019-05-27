import React, {Component} from 'react'
import CurrencyDisplay from './CurrencyDisplay'

class Currency extends Component{
  constructor(){
    super()
    this.state={
      currencyChosen: false,
      selectedCurrency: 'Select Currency',
      amount: 0,
    }  
    
  }
  handleAmountIncrease= ()=>{
   let newAmount = this.state.amount+1
   this.setState  ({
     amount: newAmount
   })
 }

  handleAmountDecrease = ()=>{
   let newAmount = this.state.amount-1
   this.setState({
     amount: newAmount
   })
 }
  handleOptionSelect = (e)=>{
   this.setState({
     selectedCurrency : e.target.value,
     currencyChosen: e.target.value === 'Select Currency' ? false: true
   })
 }
  render(){
    const currencyData=[
      
      { name: 'Japanese Yen', symbol: '¥', rate: 113.6 },
      { name: 'British Pound', symbol: '£', rate: 0.77 },
      { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32 },
      { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41 },
      { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01 }
    ]
    const currencyOptions = currencyData.map((item, index)=>{
      return <option key = {index} id = {index} >{item.name}</option>
    })
    return(
      <div>
        <select value = {this.state.selectedCurrency} onChange ={this.handleOptionSelect}>
        <option value="Select Currency">Select Currency</option>
        {currencyOptions}

        </select>

        <div>
          <button className = 'add' onClick = {this.handleAmountIncrease}>+</button>
          <button className = 'minus' onClick = {this.handleAmountDecrease}>-</button>
        </div>
        { this.state.currencyChosen ? this.props.render(
          currencyData[this.state.selectedCurrency],
          this.state.amount
        ) : 
        <p>
          'Please Select Currency'
        </p>}
      </div>
    )
      
    
  }
}
// const ExchangedCurrency = withCurrency(CurrencyDisplay)
export default Currency
