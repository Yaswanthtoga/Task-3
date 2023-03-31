import { Image } from 'antd'
import React, { useState } from 'react'
import Edit from '@mui/icons-material/Edit';
import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank';
import Delete from '@mui/icons-material/Delete';
import axios from 'axios';
import { message, Popconfirm } from 'antd';


const TodoListItem = ({item}) => {
  const [toggle,setToggle] = useState(item.isCompleted);

  const handleToggle = async ()=>{
    try {
      setToggle(!toggle);
      const res = await axios.put(`http://localhost:8800/api/todolist/${item._id}`,{...item,isCompleted:!toggle});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const confirm = async() => {
    
    try {
      await axios.delete(`http://localhost:8800/api/todolist/${item._id}`);
      message.success('Click on Yes');
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = (e) => {
    message.error('Click on No');
  };

  return (
    <div style={{
      width:'90%',
      height:50,
      marginBottom:20,
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:20}} >
        <div style={{ display:'flex',alignItems:'center',gap:20 }} >
          <Image src={item.image} style={{ height:50,width:50,borderRadius:50,objectFit:'cover' }} />
          <span style={toggle?{textDecoration:'line-through'}:{textDecoration:'none'}} >{item.title}</span>
        </div>
        <div style={{ display:'flex',alignItems:'center',gap:20 }} >
          <Edit style={{fontSize:18,cursor:'pointer'}}/>
          {toggle?<CheckBox style={{fontSize:18,cursor:'pointer'}} onClick={handleToggle} />:<CheckBoxOutlineBlank style={{fontSize:18,cursor:'pointer'}} onClick={handleToggle}/>}
          <Popconfirm
            title="Delete the todo"
            description="Are you sure to delete this todo?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Delete style={{fontSize:20,cursor:'pointer'}} />
          </Popconfirm>
        </div>
      </div>
    </div>
  )
}

export default TodoListItem