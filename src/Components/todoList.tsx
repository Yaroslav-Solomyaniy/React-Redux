import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList:React.FC = () => {
    const {page, todos, limit, loading, error} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1,2,3,4,5,6,7,8,9]


    useEffect(()=> {
        fetchTodos(page, limit)
    },[page])


    if(loading){
        return <h1>Идет загрузка...</h1>
    }
    if(error){
        return <h1>Произошла ошибка</h1>
    }


    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            ))}
            <div style={{display: 'flex'}}>
                {pages.map(item => (
                    <div onClick={()=> setTodoPage(item)}
                        style={{border: item === page ? '2px solid green' : '1px solid grey', padding: '10px' }} key={item+'i'}>{item}</div>
                ))}
            </div>

        </div>
    );
};

export default TodoList;