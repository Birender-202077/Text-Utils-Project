import React from "react";

function Header(props) {
    console.log(props)
    return (
        < div >
            <h1>Welcome {props.name}. Your favourite color is {props.color}.</h1>
        </div >
    );
}

export default Header;