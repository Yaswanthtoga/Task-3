import React, { useEffect, useState } from 'react'
import TaskListItem from '../components/TaskListItem'
import { Button, Input, Modal } from 'antd'
import axios from 'axios';

const Home = () => {

  const [taskItems,setTaskItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName,setTaskName] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = async() => {
    try {
      await axios.post("http://localhost:8800/api/tasklist/create-task",{title:taskName});
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
        const result = await axios.get("http://localhost:8800/api/tasklist");
        setTaskItems([...result.data]);
    }
    fetchData();
  },[taskItems.length]);

  return (
    <div style={{ display:'flex',flexDirection:'column' }}>

        <Button style={{width:'20%',alignSelf:'center'}} type='primary' onClick={showModal}>Add Task</Button>
        <Modal title="New Task Item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input placeholder="Task Name" onChange={(e)=>setTaskName(e.target.value)}/>
        </Modal>

        <div style={{ 
            display:'flex',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'space-between',
            padding:20,
            marginTop:30
        }}>
            {
                taskItems.map((taskItem,ind)=>(
                    <TaskListItem key={ind} item={taskItem}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home