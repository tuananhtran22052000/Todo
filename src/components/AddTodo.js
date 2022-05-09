import React from 'react';
// import classes from '../style.module.scss';
import classes from '../style.module.scss';

class AddTodo extends React.Component {
	state = {
		title:''
	} // tạo state title cho component con
	render(){
		let {title} = this.state;

		const handleOnchange = (e) =>{
			this.setState({
			title: e.target.value
      })
    }

		const Add = (todo) => {
			if(!this.state.title){
				return alert('nhập công việc')
			}
			 todo = {
				id: Math.floor(Math.random() * 1001), // hàm lm tròn của js random 1 số
				title: this.state.title,
			}
			this.props.handleSubmit(todo)
			this.state.title = ''
			// console.log('tit',todo)
		}

		return(
			<div>
				<div className={classes.addWork} id="add-work">
            <a href="#" className={classes.exit}>&times;</a>
            <input value={title} onChange ={e =>handleOnchange(e)} type="text" className={classes.add} placeholder="thêm công việc" />
          <button href='#add-work' className={classes.submit} onClick={Add} 
          >ADD</button>
        </div>
			</div>
		)
	}
}

export default AddTodo;