import React,{useState} from 'react'; 
import classes from './style.module.scss';
import './index'
import AddTodo from './components/AddTodo.js'

class App extends React.Component {
  state = {
    todoList:[],
    editTodo: {}
  } // tạo state danh sách todolist
  
  render() {
    let {todoList, editTodo} = this.state;
    let isEmpty = Object.keys(editTodo).length === 0; // check xem editTodo có rỗng k
    console.log('>>>>>check',isEmpty)
    const handleSubmit = (todo) => {
      this.setState({
        todoList: [...this.state.todoList,todo]
      })
      this.state.title = ''
      console.log('anh',todo)
      
    }
  
    
    const handleClear = (todo) => () => {
      this.setState({
        todoList: this.state.todoList.filter(list => list.id !== todo.id)
      })
		console.log('del',todo)
    }

    const handleEdit = (todo) => () =>{
      //save
      if(isEmpty === false && editTodo.id === todo.id){
        let todoListCopy =[...todoList];
        let objIndex = todoListCopy.findIndex((item => item.id === todo.id))
        todoListCopy[objIndex].title = editTodo.title
        this.setState({
          todoList: todoListCopy,
          editTodo: {}
        })
        return
      }
        
      // edit
      this.setState({
        editTodo: todo
      })
      console.log('edit',todo)
    }

    const handleOnChangeEdit = (e) =>{
      let editTodoCopy = {...this.state.editTodo};
      editTodoCopy.title = e.target.value;
      this.setState({
        editTodo: editTodoCopy,
      })
    }

    return (
      <div className={classes.container}>
        <div className={classes.todoList}>
          <input  type="text" className={classes.search} placeholder='tìm kiếm...' />
          <a href="#add-work" className={classes.modal}>add work</a>
          <div className={classes.content}>
            <AddTodo 
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        <div className={classes.list}>
          <ul>
            {todoList.map((item, index)=>(
              <li className={classes.item}key={index}>
                {isEmpty === true
                  ?<>
                    <span>{item.title}</span>
                  </>
                  :<>
                    {editTodo.id === item.id ? 
                      <div>
                      <input value={editTodo.title}
                        onChange={e =>handleOnChangeEdit(e)}
                      />
                    </div>
                    :
                    <span>{item.title}</span>
                    }
                  </>
                }
                <div className={classes.row}>
                      <a href="#" className={classes.link}
                        onClick={handleEdit(item)}>
                          {isEmpty === false && editTodo.id === item.id 
                          ?<>
                           lưu
                           </>
                           :<>
                            sửa
                           </> 
                          }
                          
                        </a>
                    <a href="#" className={classes.link} onClick={handleClear(item)}>Xóa</a>
                    </div> 
              </li>
            ))}
          </ul>
        </div>
        <p> tổng số item: {todoList.length} </p>
        
      </div>
    );
  }
}

export default App;
