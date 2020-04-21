import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from '../actions/shopactions';
class Home extends Component {
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    render() {
        return (
            <div>
                <h3 align="center">Our items</h3>
                <table border='1' align="center"><tbody>
                    {
                        this.props.items.map((item, id) => {
                            return (<tr key={id}>
                                <td>
                                    <img src={item.img} alt={item.title} />
                                </td>
                                <td>{item.desc}
                                </td>
                                <td>Price: {item.price}</td>
                                <td><button onClick={()=>this.handleClick(item.id)}>Add</button></td>
                            </tr>)
                        })
                    }
                </tbody>
                </table>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
       addToCart: (id)=>{dispatch(addToCart(id))}
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) ;