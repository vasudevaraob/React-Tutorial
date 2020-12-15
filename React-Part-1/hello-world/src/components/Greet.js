import React from 'react';

// function Greet(){
//     return <h1>Hello Vasudev</h1>
// }

// export const Greet = () => <h1>Hellow Vasudev</h1>
const Greet = (props) => {

    //props.name='Avengers'--> it will never allow for reassignment

    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Greet