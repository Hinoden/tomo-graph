import React from 'react';
import '../styles/MiiNode.css';

const MiiNode = ({ data }) => {
    return (
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
    )
}

export default MiiNode;