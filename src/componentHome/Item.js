import React from 'react'

const Item = ({item}) =>{
    return(
        <div>
            <img src={item.avatar} alt='img' />
            <p>{item.email}</p>
            <p>{item.first_name}</p>
        </div>
    )
}
export default Item