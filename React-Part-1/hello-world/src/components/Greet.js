import React from 'react';

// function Greet(){
//     return <h1>Hello Vasudev</h1>
// }

// export const Greet = () => <h1>Hellow Vasudev</h1>
const Greet = ({name,children}) => {

    //props.name='Avengers'--> it will never allow for reassignment

    console.log(name)
    return (
        <div>
            <h1>Hello {name}</h1>
            {children}
        </div>
    )
}

export default Greet