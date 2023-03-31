import React from 'react'
import { Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskListItem = ({item}) => {

  const navigate = useNavigate();
  const handleClick = async()=>{
    try {
      // const res = await axios.get(`http://localhost:8800/api/todolist/${item._id}`)
      
      navigate(`/tasklist/${item._id}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card onClick={handleClick} title={item.title} style={{ width:'30%',marginBottom:20,cursor:'pointer'}}>
        <div>
            <span>Number of Todo's: {item.todos.length}</span>
        </div>
    </Card>
  )
}

export default TaskListItem