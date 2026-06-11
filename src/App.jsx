import React, { useState } from 'react';
import {ReactFlow, applyNodeChanges}from 'reactflow';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';
import Face6Icon from '@mui/icons-material/Face6';
import 'reactflow/dist/style.css';
import Navbar from './components/navbar.jsx';
import Menu from './components/menu.jsx';
import './App.css';

function App() {
const [nodes, setNodes] = useState([   //the miis
  {
    id: '1',
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: 'Node 1',
      icon: <FaceIcon />,
      color: '#a481f7',
    },
  }
]);

const onNodesChange = (changes) => {
  setNodes((nds) => applyNodeChanges(changes, nds));
}

const addMii = (name, icon, color) => {
  const newNode = {
    id: Date.now().toString(),
    position: {
      x: Math.random() * 500,
      y: Math.random() * 500
    },
    data: {
      label: name,
      icon: icon,
      color: color
    }
  };

  setNodes((prevNodes) => [...prevNodes, newNode]);
}

const edges = [];   //the connections between the miis

  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <div className="page">
        <Navbar />
        <Menu nodes={nodes} addMii={addMii}/>
      </div>
      <div className="board">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          fitView
        />
      </div>
    </div>
  )
}

export default App;
