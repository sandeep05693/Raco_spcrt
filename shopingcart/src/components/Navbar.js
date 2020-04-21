import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div style={{ float: "right" }}>
            <table cellPadding="10" cellSpacing="10">
                <tbody>
                <tr><td> <Link to="/"><h2>Add Product</h2></Link>
                </td>
                    <td><Link to="/cart"><h2>Cart</h2></Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Navbar;