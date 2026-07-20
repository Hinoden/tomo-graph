import {React, useState} from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import UndoTwoToneIcon from '@mui/icons-material/UndoTwoTone';
import RedoTwoToneIcon from '@mui/icons-material/RedoTwoTone';
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import CameraEnhanceTwoToneIcon from '@mui/icons-material/CameraEnhanceTwoTone';
import '../styles/navbar.css';

function Navbar({ zoomIn, zoomOut, resetBoard, undo, redo, takeScreenshot }) {
    const [reset, setReset] = useState(false);

    return (
        <div className="nav-container">
            <div className="left-container">
                <h1 className="nav-title">TomoGraph</h1>
                <h2 className="divider1">|</h2>
                <div className="zoom-controls">
                    <button className="zoom-in-button" onClick={zoomIn}><ZoomInIcon fontSize="large"/></button>
                    <button className="zoom-out-button" onClick={zoomOut}><ZoomOutIcon fontSize="large"/></button>
                </div>
            </div>
            <div className="right-container">
                <button className="undo-button"><UndoTwoToneIcon fontSize='large' onClick={undo}/></button>
                <button className="redo-button"><RedoTwoToneIcon fontSize='large' onClick={redo}/></button>
                <button className="reset-button" onClick={() => setReset(true)}><RestartAltTwoToneIcon fontSize='large'/></button>
                <button className="screenshot-button" onClick={takeScreenshot}><CameraEnhanceTwoToneIcon fontSize='large'/></button>
            </div>
            {reset && (
                <div className="popup-overlay">
                    <h2>Reset Board</h2>
                    <p>Are you sure you want to reset the board?</p>
                    <div className="reset-group">
                        <button className="yes-but" onClick={() => {resetBoard(); setReset(false);}}>Yes</button>
                        <button className="no-but" onClick={() => setReset(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;