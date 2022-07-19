import React from 'react'
import './NavLeft.css';

function NavLeft() {
    return (
        <>
        <div className="container-fluid" id="ty" >
            <div>
                <ul>
                    <li><a className="nav-link" href="#">Bakeries</a></li>
                    <li><a className="nav-link" href="#">Banana Chips</a></li>
                    <li><a className="nav-link" href="#">Deep Coffee</a></li>
                    <li><a className="nav-link" href="#">Sandwiches</a></li>
                    <li><a className="nav-link" href="#">Monday's Special</a></li>
                    <li><a className="nav-link" href="#"> Lava</a></li>
                </ul>
                </div>
        </div>
        </>
    )
}

export default NavLeft
