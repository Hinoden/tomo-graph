import ReactFlow from 'reactflow';
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

const nodes = [   //the miis
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
];

const edges = [];   //the connections between the miis

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <div className="page">
        <Navbar />
        <Menu nodes={nodes}/>
      </div>
      <div className="board">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        />
      </div>
    </div>
  )
}

export default App;
