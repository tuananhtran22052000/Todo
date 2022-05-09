import React from 'react'
import classes from './Home.module.scss'
import Form from '../../hocReactjs/components/Form'


class Home extends React.Component {
    state = {
        title:'',
        todoList:[ ],
        editTodo:{},
    }
    render(){
        let { todoList, title, editTodo } = this.state
        let isEmptyObject = Object && Object.keys(editTodo).length === 0; //check chuoi rong k

        const handleOnChange = (e) =>{
            this.setState({
                title: e.target.value
            })
            // console.log('check>>>',title)
        }

        const handleClickSubmit = (todo) =>{
            if(!this.state.title){
                return alert('nhat cv')
            }
            todo = {
                id: Math.floor(Math.random() * 1001),
                title: this.state.title
            }
            this.setState({
                todoList: [...this.state.todoList,todo]
            })
            this.state.title = ''
            // console.log('checkTodo>>>', todo,'checktodolist',todoList)
        }

        const hanldeClickClear = (todo) => () =>{
            this.setState({
                todoList: this.state.todoList.filter(list => list.id !==todo.id)
            })
            // console.log('clear todo',todo)
        }
        
        const hanldeClickClearAll = () => () =>{
            this.setState({
                todoList: this.state.todoList.splice(0,todoList)
            })
            console.log('todoList',todoList)
        }



        const handleOnChangeEdit = (e) =>{
            let editTodoCopy = {...this.state.editTodo};
            editTodoCopy.title = e.target.value;
            this.setState({
              editTodo: editTodoCopy,
            })
          }

        const handleEdit = (todo) => () =>{
            //save
            if(isEmptyObject === false && editTodo.id === todo.id){
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
      
          

        
        return(
            <div>
                <div>
                    <input type='text' placeholder='nhap cv' value={title} onChange={e =>handleOnChange(e)} />
                    <button onClick={handleClickSubmit}>ADD NEW</button>
                    <button onClick={hanldeClickClearAll()}>clear All</button>
                </div>
                <div>
                    {todoList && todoList.map((item,index) =>(
                        <div key={index}>
                            {isEmptyObject=== true 
                                ?<>
                                    <span>{index +1}</span> - <span>{item.title}</span> 
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
                            <div>
                                <button onClick={hanldeClickClear(item)}>clear</button>
                                <button  className={classes.link}
                                onClick={handleEdit(item)}>
                                {isEmptyObject === false && editTodo.id === item.id 
                                ?<>
                                lưu
                                </>
                                :<>
                                    sửa
                                </> 
                                }
                          
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <Form  />
                </div>
            </div>
        )
    }
}
export default Home