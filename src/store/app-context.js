import React, { useReducer } from 'react';
import { sortFilterList } from '../Componets/TaskOption/TaskOption';

export const AppContext = React.createContext();

const todos = {
    todos: [{taskTitle:"Learn React", taskDaysLeft:13, isMarked:false, isDone:false}],
    filteredTodos: [{taskTitle:"Learn React", taskDaysLeft:13, isMarked:false, isDone:false}],
    option: {}
}


const reducer = (state, action) => {
    if(action.type === "ADD"){
        let addTodos = [action.payload, ...state.todos];
        let filteredTodos = sortFilterList(state.option, addTodos);
        return {todos:addTodos, filteredTodos:filteredTodos, option:state.option};
    }
    if(action.type === "SELECT"){
        let selectTodos = state.todos.map((task) => {
            if(task.taskTitle === action.payload){
                task.isMarked = !task.isMarked;
            }
            return task;
        })
        let filteredTodos = sortFilterList(state.option, selectTodos);
        return {todos:selectTodos, filteredTodos:filteredTodos, option:state.option};
    }
    if(action.type === "DELETE"){
        let deleteTodos = state.todos.filter((item) => {return item.isMarked !== true});
        let filteredTodos = sortFilterList(state.option, deleteTodos);
        return {todos: deleteTodos, filteredTodos:filteredTodos, option:state.option};
    }
    if(action.type === "MARKASDONE"){
        let madTodos = state.todos.map((item) => {
            if(item.isMarked){
                item.isDone = true;
                item.isMarked = false;
            }
            return item;
        });
        let filteredTodos = sortFilterList(state.option, madTodos);
        return {todos: madTodos, filteredTodos:filteredTodos, option:state.option};
    }
    if(action.type === "TASKOPTION"){
        let todos = state.todos.map((item) => {
            if(item.isMarked){
                item.isMarked = !item.isMarked;
            }
            return item;
        })
        let filteredTodos = sortFilterList(action.payload, state.todos);
        return {todos:todos, filteredTodos: filteredTodos, option:action.payload};
    }

}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,todos);

    const newTaskHandler = (obj) => {
        dispatch({type : 'ADD', payload : obj});
    }
    const selectTaskHandler = (taskTitle) => {
        dispatch({type:'SELECT', payload : taskTitle});
    }
    const deleteTaskHandler = () => {
        dispatch({type:'DELETE'});
    }
    const markAsDoneHandler = () => {
        dispatch({type:'MARKASDONE'});
    }
    const taskOptionHandler = (obj) => {
        dispatch({type:'TASKOPTION', payload:obj})
    }

    const contextState = {
        toDoList: state.todos,
        filteredTodos: state.filteredTodos,
        option : state.option,
        onNewTasK: newTaskHandler,
        onSelect: selectTaskHandler,
        onDelete: deleteTaskHandler,
        onMarkedAsDone: markAsDoneHandler,
        onTaskOption : taskOptionHandler
    };

    return (
        <AppContext.Provider value={contextState}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;