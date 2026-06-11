import React, {useState} from 'react';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';
import Face6Icon from '@mui/icons-material/Face6';
import '../styles/menu.css';

const Menu = ({nodes, addMii, deleteMiis}) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const [name, setName] = useState('');
    const [icon, setIcon] = useState(null);
    const [color, setColor] = useState('');

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const [selectedMiis, setSelectedMiis] = useState([]);

    const toggleMiiSelection = (id) => {
        setSelectedMiis((prev) =>
            prev.includes(id) ? prev.filter((miiId) => miiId !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        addMii(name, icon, color);
    }

  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <button className="seeAll-button" onClick={() => setActiveMenu('seeAll')}><VisibilityRoundedIcon/><span>See All Miis</span></button>
        <button className="add-button" onClick={() => setActiveMenu('add')}><PersonAddAltTwoToneIcon/><span>Add Mii</span></button>
        <button className="connect-button" onClick={() => setActiveMenu('connect')}><PeopleAltTwoToneIcon/><span>Connect Miis</span></button>
        <button className="delete-button" onClick={() => setActiveMenu('delete')}><PersonRemoveTwoToneIcon/><span>Delete Mii</span></button>
      </div>
      <div className="menu-content">


{/* SEE ALL MIIS */}
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


{/* ADDING MIIS */}
        {activeMenu === 'add' && 
            <div className={`add-content ${activeMenu}`}>
                <div className="menu-header add-header">
                    <h2>Add Mii</h2>
                </div>
                <div className="add-form">
                    <div className="add-name">
                        <label htmlFor="mii-name">Mii Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="mii-name" name="mii-name" placeholder="Enter Mii Name"/>
                    </div>
                    <div className="add-icon">
                        <label htmlFor="mii-icon">Mii Icon</label>
                        <div className="icon-options">
                            <div className={`icon-choice ${selectedIcon === 'face1' ? 'selected' : ''}`} onClick={() => {
                                    setSelectedIcon(selectedIcon === 'face1' ? null : 'face1');
                                    setIcon(<FaceIcon />)}
                                }>
                                    <FaceIcon/>
                            </div>
                            <div className={`icon-choice ${selectedIcon === 'face2' ? 'selected' : ''}`} onClick={() => {
                                setSelectedIcon(selectedIcon === 'face2' ? null : 'face2');
                                setIcon(<Face2Icon />)}
                                }><Face2Icon/>
                            </div>
                            <div className={`icon-choice ${selectedIcon === 'face3' ? 'selected' : ''}`} onClick={() => {
                                setSelectedIcon(selectedIcon === 'face3' ? null : 'face3');
                                setIcon(<Face3Icon />)}
                                }><Face3Icon/>
                            </div>
                            <div className={`icon-choice ${selectedIcon === 'face4' ? 'selected' : ''}`} onClick={() => {
                                setSelectedIcon(selectedIcon === 'face4' ? null : 'face4');
                                setIcon(<Face4Icon />)}
                                }><Face4Icon/>
                            </div>
                            <div className={`icon-choice ${selectedIcon === 'face5' ? 'selected' : ''}`} onClick={() => {
                                setSelectedIcon(selectedIcon === 'face5' ? null : 'face5');
                                setIcon(<Face5Icon />)}
                                }><Face5Icon/>
                            </div>
                            <div className={`icon-choice ${selectedIcon === 'face6' ? 'selected' : ''}`} onClick={() => {
                                setSelectedIcon(selectedIcon === 'face6' ? null : 'face6');
                                setIcon(<Face6Icon />)}
                                }><Face6Icon/>
                            </div>
                        </div>
                    </div>
                    <div className="add-color">
                        <label htmlFor="mii-color">Mii Color</label>
                        <div className="color-options">
                            <div className={`color-choice ${selectedColor === '#ffe1a1' ? 'selected' : ''}`} style={{ backgroundColor: '#ffe1a1' }} onClick={() => {
                                setSelectedColor(selectedColor === '#ffe1a1' ? null : '#ffe1a1');
                                setColor('#ffe1a1')}
                                }>Softie (Sweetie)
                            </div>
                            <div className={`color-choice ${selectedColor === '#fef140' ? 'selected' : ''}`} style={{ backgroundColor: '#fef140' }} onClick={() => {
                                setSelectedColor(selectedColor === '#fef140' ? null : '#fef140');
                                setColor('#fef140')}
                                }>Optimist (Cheerleader)
                            </div>
                            <div className={`color-choice ${selectedColor === '#fe9dbe' ? 'selected' : ''}`} style={{ backgroundColor: '#fe9dbe' }} onClick={() => {
                                setSelectedColor(selectedColor === '#fe9dbe' ? null : '#fe9dbe');
                                setColor('#fe9dbe')}
                                }>Charmer
                            </div>
                            <div className={`color-choice ${selectedColor === '#f9555c' ? 'selected' : ''}`} style={{ backgroundColor: '#f9555c' }} onClick={() => {
                                setSelectedColor(selectedColor === '#f9555c' ? null : '#f9555c');
                                setColor('#f9555c')}
                                }>Adventurer (Go-Getter)
                            </div>
                            <div className={`color-choice ${selectedColor === '#fed74b' ? 'selected' : ''}`} style={{ backgroundColor: '#fed74b' }} onClick={() => {
                                setSelectedColor(selectedColor === '#fed74b' ? null : '#fed74b');
                                setColor('#fed74b')}
                                }>Carer (Buddy)
                            </div>
                            <div className={`color-choice ${selectedColor === '#ffc26f' ? 'selected' : ''}`} style={{ backgroundColor: '#ffc26f' }} onClick={() => {
                                setSelectedColor(selectedColor === '#ffc26f' ? null : '#ffc26f');
                                setColor('#ffc26f')}
                                }>Dreamer (Daydreamer)
                            </div>
                            <div className={`color-choice ${selectedColor === '#ff8c79' ? 'selected' : ''}`} style={{ backgroundColor: '#ff8c79' }} onClick={() => {
                                setSelectedColor(selectedColor === '#ff8c79' ? null : '#ff8c79');
                                setColor('#ff8c79')}
                                }>Bubbly (Merrymaker)
                            </div>
                            <div className={`color-choice ${selectedColor === '#fa7940' ? 'selected' : ''}`} style={{ backgroundColor: '#fa7940' }} onClick={() => {
                                setSelectedColor(selectedColor === '#fa7940' ? null : '#fa7940');
                                setColor('#fa7940')}
                                }>Hotblooded (Dynamo)
                            </div>
                            <div className={`color-choice ${selectedColor === '#9ddc5a' ? 'selected' : ''}`} style={{ backgroundColor: '#9ddc5a' }} onClick={() => {
                                setSelectedColor(selectedColor === '#9ddc5a' ? null : '#9ddc5a');
                                setColor('#9ddc5a')}
                                }>Patient (Strategist)
                            </div>
                            <div className={`color-choice ${selectedColor === '#00cea2' ? 'selected' : ''}`} style={{ backgroundColor: '#00cea2' }} onClick={() => {
                                setSelectedColor(selectedColor === '#00cea2' ? null : '#00cea2');
                                setColor('#00cea2')}
                                }>Perfectionist
                            </div>
                            <div className={`color-choice ${selectedColor === '#78def4' ? 'selected' : ''}`} style={{ backgroundColor: '#78def4' }} onClick={() => {
                                setSelectedColor(selectedColor === '#78def4' ? null : '#78def4');
                                setColor('#78def4')}
                                }>Busy Bee (Achiever)
                            </div>
                            <div className={`color-choice ${selectedColor === '#40a5f7' ? 'selected' : ''}`} style={{ backgroundColor: '#40a5f7' }} onClick={() => {
                                setSelectedColor(selectedColor === '#40a5f7' ? null : '#40a5f7');
                                setColor('#40a5f7')}
                                }>Leader (Visionary)
                            </div>
                            <div className={`color-choice ${selectedColor === '#409695' ? 'selected' : ''}`} style={{ backgroundColor: '#409695' }} onClick={() => {
                                setSelectedColor(selectedColor === '#409695' ? null : '#409695');
                                setColor('#409695')}
                                }>Introvert (Observer)
                            </div>
                            <div className={`color-choice ${selectedColor === '#26ae62' ? 'selected' : ''}`} style={{ backgroundColor: '#26ae62' }} onClick={() => {
                                setSelectedColor(selectedColor === '#26ae62' ? null : '#26ae62');
                                setColor('#26ae62')}
                                }>Thinker
                            </div>
                            <div className={`color-choice ${selectedColor === '#6c7af5' ? 'selected' : ''}`} style={{ backgroundColor: '#6c7af5' }} onClick={() => {
                                setSelectedColor(selectedColor === '#6c7af5' ? null : '#6c7af5');
                                setColor('#6c7af5')}
                            }>Individualist (Rouge)</div>
                            <div className={`color-choice ${selectedColor === '#a481f7' ? 'selected' : ''}`} style={{ backgroundColor: '#a481f7' }} onClick={() => {
                                setSelectedColor(selectedColor === '#a481f7' ? null : '#a481f7');
                                setColor('#a481f7')}
                            }>Headstrong (Maverick)</div>
                        </div>
                    </div>
                </div>
                <div className="button-menu">
                    <button className="add-button" onClick={handleSubmit}>Add Mii</button>
                    <button className="close-button" onClick={() => setActiveMenu(null)}>Done</button>
                </div>
            </div>}


        {activeMenu === 'connect' && 
            <div className={`connect-content ${activeMenu}`}>
                Connect Miis Content
            </div>}

{/* DELETE MIIS */}
        {activeMenu === 'delete' && 
            <div className={`delete-content ${activeMenu}`}>
                <div className="menu-header">
                    <h2>Delete Mii</h2>
                </div>
                <div className="mii-list">
                    {nodes.map((node) => (
                        <div 
                            key={node.id} 
                            className={`mii-card ${
                                selectedMiis.includes(node.id) ? 'selected' : ''
                            }`}
                            onClick = {() => toggleMiiSelection(node.id)}
                        >
                            <div className="icon-background" style={{ backgroundColor: node.data.color }}>
                                {node.data.icon}
                            </div>
                            {node.data.label}
                        </div>
                    ))}
                </div>
                <div className="button-menu">
                    <button className="delete-button" onClick={() => {deleteMiis(selectedMiis); setSelectedMiis([]);}}>Delete Selected</button>
                    <button className="close-button" onClick={() => setActiveMenu(null)}>Done</button>
                </div>
            </div>}
      </div>
    </div>
  );
}

export default Menu;