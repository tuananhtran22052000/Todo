import classNames from 'classnames'
import React from 'react'
import Item from './Item'
import axios from 'axios'


class File2 extends React.Component{

    state = {
        listUsers: []
    }

    async componentDidMount(){
            let res = await axios.get('https://reqres.in/api/users?page=2')
            console.log('>>>>>check', res.data.data)

            this.setState({
                listUsers: res && res.data && res.data.data ? res.data.data : []
            })
        }

    render(){
        let { listUsers } = this.state;
        return(
            <div className={classNames.container}>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item,index) =>(
                        <Item key={item.id} item = {item}/>
                    ))
                }
            </div>
        )
    }
}
export default File2