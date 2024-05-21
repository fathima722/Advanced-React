import * as React from 'react';

//  Manipulating children dynamically in JSX
//React.cloneElement and React.Children are the Top-level API
const Row = ({children, spacing}) => {
    const childStyle = {
        marginLeft: `${spacing}px`,
        display: "inline"
    };
    return (
        <div>
            {React.Children.map(children, (child,index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style, //Incorporates the inline or specific styles of each child like the color red here for time paragraph tag below
                        ...(index > 0 ? childStyle: {})
                    }
                })
            })}
        </div>
    )
}

export default function ManipulateChildren() {
    return (
        <div>
            <Row spacing={32}>
                <p> Chicken Pizza </p>
                <p> 5</p>
                <p style={{color:'red'}}>18:30</p>
                <p>26$</p>
                <p>Riverdale</p>
            </Row>
        </div>
    )
}