import React, { useState } from 'react';
import { MarkerType } from 'reactflow';
import {ReactFlow, applyNodeChanges}from 'reactflow';
import FaceIcon from '@mui/icons-material/Face';
import 'reactflow/dist/style.css';
import Navbar from './components/navbar.jsx';
import Menu from './components/menu.jsx';
import MiiNode from './components/MiiNode.jsx';
import RelationshipEdge from './components/relationshipEdge.jsx';
import './App.css';

function App() {
const nodeTypes = {
  mii: MiiNode,
};

const [nodes, setNodes] = useState([   //the miis
  {
    id: '1',
    type: 'mii',
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: 'Example Mii',
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
    type: 'mii',
    position: {
      x: 0,
      y: 0
    },
    data: {
      label: name,
      icon: icon,
      color: color
    }
  };

  setNodes((prevNodes) => [...prevNodes, newNode]);
}

const deleteMiis = (ids) => {
  setNodes((nodes) => 
    nodes.filter((node) => !ids.includes(node.id))
  );

  setEdges((edges) =>
    edges.filter((edge) => !ids.includes(edge.source) && !ids.includes(edge.target))
  );
};

const [edges, setEdges] = useState([]);   //the connections between the miis

const connectMiis = (source, target, relationship) => {
  const newEdge = {
    id: `${source}-${target}`,
    source,
    target,

    label: relationship.label,

    style: {
      stroke: relationship.color,
      strokeWidth: 3,
    },

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  };

  setEdges((prevEdges) => {
    const existing = prevEdges.find(
      (edge) => edge.source === source && edge.target === target
    );

    if (existing) {
      return prevEdges.map((edge) => 
        edge.id === existing.id ? newEdge : edge
      );
    }

    return [...prevEdges, newEdge];
  });
};

// const connectMiis = (source, target, relationship) => {
//   const newEdge = {
//     id: `${source}-${target}`,
//     source,
//     target,
    
//     label: relationship.label,

//     style: {
//       stroke: relationship.color,
//       strokeWidth: 3,
//     },

//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   };

//   setEdges((prevEdges) => [...prevEdges, newEdge]);
// }

const edgeTypes = {
    relationship: RelationshipEdge,
};

const displayEdges = [];
const processed = new Set();

edges.forEach((edge) => {
  // Skip if we've already handled this edge
  if (processed.has(edge.id)) {
    return;
  }

  const reverse = edges.find(
    (e) =>
      e.source === edge.target &&
      e.target === edge.source
  );

  // Case 1: Same relationship -> one double-sided edge
  if (reverse && reverse.label === edge.label) {
    displayEdges.push({
      ...edge,
      type: "relationship",

      data: {
        offset: 0,
      },

      markerStart: {
        type: MarkerType.ArrowClosed,
      },

      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    });

    processed.add(edge.id);
    processed.add(reverse.id);
  }

  // Case 2: Different relationships -> draw both edges separately
  else if (reverse) {
    displayEdges.push({
        ...edge,
        type: "relationship",
        data: {
            offset: -40,
        },
    });

    displayEdges.push({
        ...reverse,
        type: "relationship",
        data: {
            offset: 40,
        },
    });

    processed.add(edge.id);
    processed.add(reverse.id);
  }

  // Case 3: No reverse edge -> draw normally
  else {
    displayEdges.push({
      ...edge,
      type: "relationship",

      data: {
        offset: 0,
      },
    });
    processed.add(edge.id);
  }

  console.log(displayEdges);
});

  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <div className="page">
        <Navbar />
        <Menu nodes={nodes} edges={edges} addMii={addMii} deleteMiis={deleteMiis} connectMiis={connectMiis}/>
      </div>
      <div className="board">
        <ReactFlow
          edgeTypes={edgeTypes}
          nodes={nodes}
          edges={displayEdges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          fitView
        />
      </div>
    </div>
  )
}

export default App;
