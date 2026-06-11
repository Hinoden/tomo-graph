import React, {useState} from 'react';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import '../styles/menu.css';

const Menu = ({nodes}) => {
    const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <button className="seeAll-button" onClick={() => setActiveMenu('seeAll')}><VisibilityRoundedIcon/><span>See All Miis</span></button>
        <button className="add-button" onClick={() => setActiveMenu('add')}><PersonAddAltTwoToneIcon/><span>Add Mii</span></button>
        <button className="connect-button" onClick={() => setActiveMenu('connect')}><PeopleAltTwoToneIcon/><span>Connect Miis</span></button>
        <button className="delete-button" onClick={() => setActiveMenu('delete')}><PersonRemoveTwoToneIcon/><span>Delete Mii</span></button>
      </div>
      <div className="menu-content">
        {activeMenu === 'seeAll' && 
            <div className={`seeAll-content ${activeMenu}`}>
                <div className="menu-header">
                    <h2>All Miis</h2>
                </div>
                <div className="mii-list">
                    {nodes.map((node) => (
                        <div key={node.id} className="mii-card">
                            <div className="icon-background" style={{ backgroundColor: node.data.color }}>
                                {node.data.icon}
                            </div>
                            {node.data.label}
                        </div>
                    ))}
                </div>
                <button className="close-button" onClick={() => setActiveMenu(null)}>Done</button>
            </div>}

        {activeMenu === 'add' && 
            <div className={`add-content ${activeMenu}`}>
                Add Mii Content
            </div>}

        {activeMenu === 'connect' && 
            <div className={`connect-content ${activeMenu}`}>
                Connect Miis Content
            </div>}

        {activeMenu === 'delete' && 
            <div className={`delete-content ${activeMenu}`}>
                Delete Mii Content
            </div>}
      </div>
    </div>
  );
}

export default Menu;