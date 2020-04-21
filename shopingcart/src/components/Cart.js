import React,{Component} from 'react';
import {connect} from 'react-redux';
import { removeItem } from '../actions/shopactions';

class Cart extends Component{
    handleClick = (id)=>{
        this.props.removeItem(id); 
    }
render(){
    let added_items;
    if(this.props.addedItems.length){
        added_items=<div><table border='1' align="center">
            <tbody>
            {
                        this.props.addedItems.map((item, id) => {
                            return (<tr key={id}>
                                <td>
                                    <img src={item.img} alt={item.title} />
                                </td>
                                <td>{item.desc}
                                </td>
                                <td>Price: {item.price}</td>
                                <td>Quantity: {item.quantity}</td>
                                <td><button onClick={()=>this.handleClick(item.id)}>Remove</button></td>
                            </tr>)
                        })
            }
            </tbody>
        </table>
        <h4>total : {this.props.total}</h4>
        </div>
    }else{
        added_items=<p>Nothing.</p>;
    }
    return(
        <div align='center'>
                <h3>You have ordered:</h3>
                <ul>
                    {added_items}
                </ul>
          
        </div>
   )
}


}


const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total:state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)