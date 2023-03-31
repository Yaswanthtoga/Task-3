import { Layout,Image } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TodoList from '../pages/TodoList';
import Sidebar from "../components/Sidebar"
import Graph from '../pages/Graph';
const { Sider,Content,Footer,Header } = Layout;
function App() {
  return (
    <div className="App">
      <Layout style={{height:"100vh",width:'100vw'}} >
        <Sider>
          <Image height={'10'} width={'100%'} style={{objectFit:'cover'}} src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <Sidebar/>
        </Sider>
        <Layout>
          <Header style={{backgroundColor:'inherit',fontSize:25,}} >My Task Manager DashBoard</Header>
          <Content>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/tasklist/:id' element={<TodoList/>}/>
              <Route path='/graph' element={<Graph/>}/>
            </Routes>
          </Content>
          <Footer style={{textAlign:'center'}} >TodoList Copyright @2023</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
