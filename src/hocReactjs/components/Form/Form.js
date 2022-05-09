import React from 'react'
import classes from './Form.module.scss'

class Form  extends React.Component{
    state = {
        firtsName: '',
        lastName:'',
    }
    render(){
        let { firtsName, lastName } = this.state
        const handleOnChangFname = (e) =>{
            this.setState({
                firtsName: e.target.value
            })
        }

        const handleOnChangLname = (e) =>{
            this.setState({
                lastName: e.target.value
            })
        }

        const handleSubmit = () =>{
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
                            value={firtsName}
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
                            onClick={handleSubmit()}
                        >Gửi</button> 
                    </form>
                </div>
            <p></p>
            </div>
        )
    }
}

export default Form