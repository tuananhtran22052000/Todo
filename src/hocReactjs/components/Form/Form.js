import React from 'react'
import classes from './Form.module.scss'

class Form  extends React.Component{
    state = {
        firstName: '',
        lastName:'',
    }
    render(){
        let { firstName, lastName } = this.state

        const handleOnChangFname = (e) =>{
            this.setState({
                firstName: e.target.value
            })
        }

        const handleOnChangLname = (e) =>{
            this.setState({
                lastName: e.target.value
            })
        }

        const handleSubmit = (e) =>{
            e.preventDefault() //debug khi nhấn submit k bị refresh
            console.log('output', this.state)
        }

        return(
            <div className={classes.container}>
                <p className={classes.title}>Đăng nhập</p>
                <div className={classes.content}>
                    <form>
                        <label htmlFor='fname'>firts name</label><br />
                        <input 
                            type='text'  
                            value={firstName}
                            onChange={(e) =>{handleOnChangFname(e)}}
                        />
                        <br />
                        <label htmlFor='lname'>last name</label><br />
                        <input 
                            type='text' 
                            value={lastName} 
                            onChange={(e) =>{handleOnChangLname(e)}} 
                        /><br />
                        <button
                            onClick={ (e) =>{handleSubmit(e)}}
                        >Gửi</button> 
                    </form>
                </div>
            <p></p>
            </div>
        )
    }
}

export default Form