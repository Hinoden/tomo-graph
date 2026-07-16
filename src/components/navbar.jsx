import React from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import UndoTwoToneIcon from '@mui/icons-material/UndoTwoTone';
import RedoTwoToneIcon from '@mui/icons-material/RedoTwoTone';
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import CameraEnhanceTwoToneIcon from '@mui/icons-material/CameraEnhanceTwoTone';
import '../styles/navbar.css';

function Navbar() {
    return (
        <div className="nav-container">
            <div className="left-container">
                <h1 className="nav-title">TomoGraph</h1>
                <h2 className="divider1">|</h2>
                <div className="zoom-controls">
                    <button className="zoom-in-button"><ZoomInIcon fontSize="large"/></button>
                    <button className="zoom-out-button"><ZoomOutIcon fontSize="large"/></button>
                </div>
            </div>
            <div className="right-container">
                <button className="undo-button"><UndoTwoToneIcon fontSize='large'/></button>
                <button className="redo-button"><RedoTwoToneIcon fontSize='large'/></button>
                <button className="reset-button"><RestartAltTwoToneIcon fontSize='large'/></button>
                <button className="screenshot-button"><CameraEnhanceTwoToneIcon fontSize='large'/></button>
            </div>
        </div>
    )
}

export default Navbar;