import axios from 'axios'
import classNames from 'classnames'
import React from 'react'
import Item from './Item'

class File1 extends React.Component{
    state = {
        listData:[]
    }
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=1')
        console.log('...check', res)
        this.setState({
            listData: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render(){
        let { listData } = this.state
        return(
            <div className={classNames.container}>
                {listData && listData.length > 0 &&
                    listData.map((item,index)=>(
                        <Item key={item.id} item = {item}/>
                    ))
                }
            </div>
        )
    }
} 
export default File1