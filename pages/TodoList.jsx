import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import TodoListItem from '../components/TodoListItem';
import { Button, Input, Modal } from 'antd';

const TodoList = () => {
  const [todos,setTodos] = useState([]);
  const [data,setData] = useState({
    title:"",
    image:""
  });
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = async() => {
    console.log(location)
    try {
      await axios.post(`http://localhost:8800/api/todolist/create-todo/${location.pathname.split('/')[2]}`,data);
    } catch (error) {
      console.log(error);
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`http://localhost:8800/api/todolist/${location.pathname.split('/')[2]}`);
        setTodos([...res.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);

  return (
    <div style={{ display:'flex',flexDirection:'column',alignItems:'center' }}>
      <Button onClick={showModal} style={{width:'20%',marginBottom:40}} type='primary' danger >Add Todo</Button>
      <Modal title="New Todo Item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input placeholder="Todo Name" onChange={(e)=>setData({...data,title:e.target.value})}/>
          <Input placeholder="Image URL" onChange={(e)=>setData({...data,image:e.target.value})}/>
      </Modal>
      {
        todos.map((todo,ind)=><TodoListItem item={todo} key={ind}/>)
      }
    </div>
  )
}

export default TodoList