import React from 'react'

function IndexKey() {

    const names = ['vasu','gani','dev']
    const listName = names.map((name,index)=><h1 key={index}>{index}--{name}</h1>)

    return (
        <div>
            {listName}
        </div>
    )
}

export default IndexKey
