import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import Navbar from './components/navbar.jsx';
import './App.css';

const nodes = [   //the miis
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Node 1' },
  }
];

const edges = [];   //the connections between the miis

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <div className="page">
        <Navbar />
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
