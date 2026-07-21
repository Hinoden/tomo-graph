import React, { useState } from 'react';
import { MarkerType } from 'reactflow';
import {ReactFlow, applyNodeChanges}from 'reactflow';
import {useRef} from 'react';
import * as htmlToImage from 'html-to-image';
import 'reactflow/dist/style.css';
import Navbar from './components/navbar.jsx';
import Menu from './components/menu.jsx';
import MiiNode from './components/MiiNode.jsx';
import RelationshipEdge from './components/relationshipEdge.jsx';
import './App.css';

const initialNodes =[   //the miis
  {
    id: '1',
    type: 'mii',
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: 'Example Mii',
      icon: 'face1',
      color: '#a481f7',
    },
  }
];

const nodeTypes = {
  mii: MiiNode,
};

const edgeTypes = {
    relationship: RelationshipEdge,
};

function App() {
const reactFlowWrapper = useRef(null);

const [nodes, setNodes] = useState(initialNodes);

const onNodesChange = (changes) => {
  setNodes((nds) => applyNodeChanges(changes, nds));
}

const [activeMenu, setActiveMenu] = useState(null);
const [chooseMii, setChooseMii] = useState(null);

const handleNodeClick = (_, node) => {
  setChooseMii(node);
  setActiveMenu("seeAll");
};

const addMii = (name, icon, color) => {
  saveHistory();
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
  saveHistory();
  setNodes((nodes) => 
    nodes.filter((node) => !ids.includes(node.id))
  );

  setEdges((edges) =>
    edges.filter((edge) => !ids.includes(edge.source) && !ids.includes(edge.target))
  );
};

const [edges, setEdges] = useState([]);   //the connections between the miis

const connectMiis = (source, target, relationship) => {
  saveHistory();
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

//zoom in and zoom out button
const [reactFlowInstance, setReactFlowInstance] = useState(null);

const zoomIn = () => {
  reactFlowInstance?.zoomIn();
};

const zoomOut = () => {
  reactFlowInstance?.zoomOut();
}

// reset button
const resetBoard = () => {
  setNodes(initialNodes);
  setEdges([]);

  setTimeout(() => {
    reactFlowInstance?.fitView();
  }, 0);
};

// undo/redo buttons!
const [history, setHistory] = useState([]);
const [future, setFuture] = useState([]);

const undo = () => {
  if (history.length === 0){
    return;
  }

  const previous = history[history.length - 1];

  setFuture(prev => [
    {
      nodes,
      edges,
    },
    ...prev,
  ]);

  setNodes(previous.nodes);
  setEdges(previous.edges);

  setHistory(prev => prev.slice(0, -1));
};

const redo = () => {
  if (future.length === 0){
    return;
  }

  const next = future[0];

  setHistory(prev => [
    ...prev,
    {
      nodes,
      edges,
    },
  ]);

  setNodes(next.nodes);
  setEdges(next.edges);

  setFuture(prev => prev.slice(1));
};

const saveHistory = () => {
  setHistory(prev => [
    ...prev,
    {
      nodes: structuredClone(nodes),
      edges: structuredClone(edges),
    },
  ]);

  setFuture([]);
}

// SCREENSHOT
const [showScreenshotPopup, setShowScreenshotPopup] = useState(false);
const [screenshot, setScreenshot] = useState(null);

const takeScreenshot = async () => {
  try {
    const dataUrl = await htmlToImage.toPng(document.body, {
      backgroundColor: "white",

      filter: (node) => {
        return !(
          node.classList?.contains("page") ||
          node.classList?.contains("navbar") ||
          node.classList?.contains("menu")
        );
      },
    });

    setScreenshot(dataUrl);
    setShowScreenshotPopup(true);
  } catch (err) {
    console.error(err);
  }
};

const downloadScreenshot = () => {
  if (!screenshot){
    return;
  }

  const link = document.createElement("a");
  link.download = "tomograph-chart.png";
  link.href = screenshot;
  link.click();

  setShowScreenshotPopup(false);
}

//edit page
const editMii = (id, newName, newIcon) => {
  saveHistory();

  setNodes(prev => 
    prev.map(node => {
      if (node.id !== id) {
        return node;
      }

      return {
        ...node,
        data: {
          ...node.data,
          label: newName,
          icon: newIcon,
        },
      };
    })
  );
};

const deleteRelationship = (edgeId) => {
  saveHistory();

  setEdges(prev =>
    prev.filter(edge => edge.id !== edgeId)
  );
};

  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <div className="page">
        <Navbar zoomIn={zoomIn} zoomOut={zoomOut} resetBoard={resetBoard} undo={undo} redo={redo} takeScreenshot={takeScreenshot}/>
        <Menu nodes={nodes} edges={edges} activeMenu={activeMenu} setActiveMenu={setActiveMenu} chooseMii={chooseMii} setChooseMii={setChooseMii} editMii={editMii} deleteRelationship={deleteRelationship} addMii={addMii} deleteMiis={deleteMiis} connectMiis={connectMiis}/>
      </div>
      <div className="board" ref={reactFlowWrapper}>
        <ReactFlow
          edgeTypes={edgeTypes}
          nodes={nodes}
          edges={displayEdges}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          onNodesChange={onNodesChange}
          onInit={setReactFlowInstance}
          fitView
        />
      </div>
      {showScreenshotPopup && (
        <div className="popup-overlay1">
          <div className="popup-container">
            <h2>Preview Screenshot</h2>
            <p>This is how your relationship map will be saved.</p>
            <div className="screenshot-image">
              <img src={screenshot} alt="Relationship Map Preview" className="screenshot-preview" />
            </div>
            <div className="screenshot-but">
              <button className="screenshot-yes" onClick={downloadScreenshot}>Download</button>
              <button className="screenshot-no" onClick={() => {
                setShowScreenshotPopup(false);
                setScreenshot(null);
              }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
