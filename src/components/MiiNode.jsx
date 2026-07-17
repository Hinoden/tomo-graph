import React from 'react';
import {Handle, Position} from 'reactflow';
import '../styles/MiiNode.css';

const MiiNode = ({ data }) => {
    return (
        <div>
            <Handle type="target" position={Position.Top} />
            <div className = "mii-node" style={{ backgroundColor: data.color }}>
                <div className="mii-background">
                    <div className="mii-icon">
                        {data.icon}
                    </div>
                    <div className="mii-label">
                        {data.label}
                    </div>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    )
}

export default MiiNode;