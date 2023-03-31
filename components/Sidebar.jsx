import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      key:"/",
      label:"Dashboard"
    },
    {
      key:"/graph",
      label:"Analytics"
    },
  ]
  return (
    <Menu items={menuItems} onClick={(item)=>navigate(item.key)} />
  )
}

export default Sidebar