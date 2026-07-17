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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../styles/menu.css';
import { ReplayTwoTone } from '@mui/icons-material';

const Menu = ({nodes, addMii, deleteMiis, connectMiis}) => {
    const relationshipColors = {
    strangers: 'rgb(0, 132, 255)',
    acquaintances: '#3eb54d',
    friends: 'rgb(106, 235, 106)',
    relatives: '#bee865',
    crushes: '#ff57c4',
    sweethearts: '#ff57c4',
    spouses: '#ffaae1',
    fighting: 'rgb(255, 0, 0)',
    exfriends: 'rgb(205, 196, 129)',
    exlove: 'rgb(164, 71, 244)',
    };

    const [activeMenu, setActiveMenu] = useState(null);

    const [name, setName] = useState('');
    const [icon, setIcon] = useState(null);
    const [color, setColor] = useState('');

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const [selectedMiis, setSelectedMiis] = useState([]);
    const [selectedRelationship, setSelectedRelationship] = useState(null);

    const [mii1, setMii1] = useState('');
    const [mii2, setMii2] = useState('');

    const [showConnectStat, setShowConnectStat] = useState('back');

    const [showAcquaintanceStat, setShowAcquaintanceStat] = useState('good');
    const [showSpouseStat, setShowSpouseStat] = useState('good');
    const [showFriendStat, setShowFriendStat] = useState('good');
    const [showSweetheartStat, setShowSweetheartStat] = useState('good');

    const toggleMiiSelection = (id) => {
        setSelectedMiis((prev) =>
            prev.includes(id) ? prev.filter((miiId) => miiId !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        if (!name || !icon || !color) {
            alert('Please fill out all fields to add a Mii.');
            return;
        }

        addMii(name, icon, color);
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setIcon(null);
        setColor('');
        
        setSelectedIcon(null);
        setSelectedColor(null);
        setSelectedMiis([]);
    };

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
                    <button className="close-button" onClick={() => {resetForm(); setActiveMenu(null)}}>Done</button>
                </div>
            </div>}


{/* CONNECT ALL MIIS */}
        {activeMenu === 'connect' && 
            <div className={`connect-content ${activeMenu}`}>
                <div className="menu-header">
                    <h2>Connect Miis</h2>
                </div>
                <div className="connect-form">
                    <div className="input-miis">
                        <div className="mii1">
                            <label htmlFor="mii1-name">Mii 1 Name:</label>
                            <select value={mii1} onChange={(e) => setMii1(e.target.value)}>
                                <option value="">Select Mii 1</option>

                                {nodes.map((node) => (
                                    <option key={node.id} value={node.id}>
                                        {node.data.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <span className="arrow"><ArrowRightAltIcon fontSize="large"/></span>
                        <div className="mii2">
                            <label htmlFor="mii2-name">Mii 2 Name:</label>
                            <select value={mii2} onChange={(e) => setMii2(e.target.value)}>
                                <option value="">Select Mii 2</option>

                                {nodes.map((node) => (
                                    <option key={node.id} value={node.id}>
                                        {node.data.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* TABS FOR EACH CATEGORY */}
                    <div className="connect-menu">
                        {showConnectStat === 'back' && (
                            <div className="category-menu">
                                <button className="connect-button strangerBut" onClick={() => setShowConnectStat('strangers')}>Strangers</button>
                                <button className="connect-button acquaintanceBut" onClick={() => setShowConnectStat('acquaintances')}>Acquaintances</button>
                                <button className="connect-button friendBut" onClick={() => setShowConnectStat('friends')}>Friends</button>
                                <button className="connect-button relBut" onClick={() => setShowConnectStat('relatives')}>Relative</button>
                                <button className="connect-button crushBut" onClick={() => setShowConnectStat('crushes')}>Crushes</button>
                                <button className="connect-button sweetheartBut" onClick={() => setShowConnectStat('sweethearts')}>Sweethearts</button>
                                <button className="connect-button spouseBut" onClick={() => setShowConnectStat('spouses')}>Spouses</button>
                            </div>
                        )}
                        {/* <div className="input-relationship"> */}
                        {showConnectStat === 'strangers' && (
                            <div className="category strangers">
                                <h3>Strangers</h3>
                                <div className="options good">
                                    <button className={`connect-button strangerBut ${
                                        selectedRelationship?.label === 'Strangers' ? 'selected' : ''
                                    }`}
                                    onClick={() => 
                                        setSelectedRelationship({
                                            label: 'Strangers',
                                            color: relationshipColors.strangers,
                                            directed: false,
                                        })}>Strangers</button>
                                </div>
                            </div>
                        )}
                        {showConnectStat === 'acquaintances' && (
                            <div className="category acquaintance">
                                {showAcquaintanceStat === 'good' && (
                                    <div className="good">
                                        <h3 className="categoryHeader">Acquaintance</h3>
                                        <div className="categoryMenu">
                                            <button className="catBut" onClick={() => setShowAcquaintanceStat('one-sided')}>One-Sided</button>
                                        </div>
                                        <div className="options good">
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Wants to be friends' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Wants to be friends',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                            })}>Wants to be friends</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Vibes with' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Vibes with',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Vibes with</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Seems like-minded' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Seems like-minded',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Seems like-minded</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Getting familiar' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Getting familiar',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Getting familiar</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Some interest' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Some interest',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Some interest</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Indifferent' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Indifferent',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Indifferent</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Not interested' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Not interested',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Not interested</button>
                                        </div>
                                    </div>
                                )}
                                {showAcquaintanceStat === 'one-sided' && (
                                    <div className="good">
                                        <h3 className="categoryHeader">Acquaintance (One-Sided)</h3>
                                        <div className="categoryMenu">
                                            <button className="catBut" onClick={() => setShowAcquaintanceStat('good')}>Getting Along</button>
                                        </div>
                                        <h4 className="categoryHeader">Good</h4>
                                        <div className="options good">
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Ready to risk it all' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Ready to risk it all',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Ready to risk it all</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Head over heels' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Head over heels',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Head over heels</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Crushing' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Crushing',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Crushing</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Likes a lot' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Likes a lot',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Likes a lot</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Has some hope' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Has some hope',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Has some hope</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Close to giving up' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Close to giving up',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Close to giving up</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Giving up' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Giving up',
                                                    color: relationshipColors.acquaintances,
                                                    directed: false,
                                                })
                                            }>Giving up</button>
                                        </div>
                                        <h4 className="categoryHeader">Fighting</h4>
                                        <div className="options bad">
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Still ready to risk it all?' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Still ready to risk it all?',
                                                    color: relationshipColors.fighting,
                                                    directed: false,
                                                })
                                            }>Still ready to risk it all?</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Still head over heels?' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Still head over heels?',
                                                    color: relationshipColors.fighting,
                                                    directed: false,
                                                })
                                            }>Still head over heels?</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Still crushing?' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Still crushing?',
                                                    color: relationshipColors.fighting,
                                                    directed: false,
                                                })
                                            }>Still crushing?</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Still likes?' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Still likes?',
                                                    color: relationshipColors.fighting,
                                                    directed: false,
                                                })
                                            }>Still likes?</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Still interested?' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Still interested?',
                                                    color: relationshipColors.fighting,
                                                    directed: false,
                                                })
                                            }>Still interested?</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Close to giving up?' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Close to giving up?',
                                                    color: relationshipColors.fighting,
                                                    directed: false,
                                                })
                                            }>Close to giving up?</button>
                                            <button className={`connect-button acquaintanceBut ${
                                                selectedRelationship?.label === 'Giving up?' ? 'selected' : ''
                                            }`} onClick={() => 
                                                setSelectedRelationship({
                                                    label: 'Giving up?',
                                                    color: relationshipColors.fighting,
                                                    directed: false,
                                                })
                                            }>Giving up?</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {showConnectStat === 'friends' && (
                            <div className="category friend">
                                {showFriendStat === 'good' && (
                                    <div className="good">
                                        <h3 className="categoryHeader">Friend</h3>
                                        <div className="categoryMenu">
                                            <button className="catBut" onClick={() => setShowFriendStat('one-sided')}>One-Sided</button>
                                            <button className="catBut" onClick={() => setShowFriendStat('bad')}>Fighting</button>
                                            <button className="catBut" onClick={() => setShowFriendStat('exes')}>Ex-Friends</button>
                                        </div>
                                        <div className="options good">
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Ultra friends' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Ultra friends',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Ultra friends</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Best friends' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Best friends',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Best friends</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Great friends' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Great friends',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Great friends</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Friends' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Friends',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Friends</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Kinda getting along' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Kinda getting along',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Kinda getting along</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Not getting along' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Not getting along',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Not getting along</button>
                                        </div>
                                    </div>
                                )}
                                {showFriendStat === 'one-sided' && (
                                    <div className="goodFriend">
                                        <h3 className="categoryHeader">Friend (One-Sided)</h3>
                                        <div className="categoryMenu">
                                            <button className="catBut" onClick={() => setShowFriendStat('good')}>Getting Along</button>
                                            <button className="catBut" onClick={() => setShowFriendStat('bad')}>Fighting</button>
                                            <button className="catBut" onClick={() => setShowFriendStat('exes')}>Ex-Friends</button>
                                        </div>
                                        <h4 className="categoryHeader">Good</h4>
                                        <div className="options one-sided">
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Ready to risk it all' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Ready to risk it all',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Ready to risk it all</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Head over heels' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Head over heels',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Head over heels</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Crushing' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Crushing',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Crushing</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Likes a lot' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Likes a lot',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Likes a lot</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Has some hope' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Has some hope',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Has some hope</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Close to giving up' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Close to giving up',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Close to giving up</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Giving up' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Giving up',
                                                color: relationshipColors.friends,
                                                directed: false
                                            })}>Giving up</button>
                                        </div>
                                        <h4 className="categoryHeader">Fighting</h4>
                                        <div className="options one-sided">
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still ready to risk it all?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still ready to risk it all?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still ready to risk it all?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still head over heels?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still head over heels?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still head over heels?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still crushing?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still crushing?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still crushing?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still likes?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still likes?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still likes?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still interested?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still interested?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still interested?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Close to giving up?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Close to giving up?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Close to giving up?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Giving up?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Giving up?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Giving up?</button>
                                        </div>
                                    </div>
                                )}
                                {showFriendStat === 'bad' && (
                                    <div className="bad">
                                        <h3 className="categoryHeader">Friend (Fighting)</h3>
                                            <div className="categoryMenu">
                                                <button className="catBut" onClick={() => setShowFriendStat('good')}>Getting along</button>
                                                <button className="catBut" onClick={() => setShowFriendStat('one-sided')}>One-Sided</button>
                                                <button className="catBut" onClick={() => setShowFriendStat('exes')}>Ex-Friends</button>
                                            </div>
                                        <div className="options bad">
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still ultra friends?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still ultra friends?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still ultra friends?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still best friends?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still best friends?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still best friends?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still great friends?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still great friends?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still great friends?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still good friends?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still good friends?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still good friends?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Still friends?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still friends?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Still friends?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Kinda getting along?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Kinda getting along?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Kinda getting along?</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Not getting along?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Not getting along?',
                                                color: relationshipColors.fighting,
                                                directed: false
                                            })}>Not getting along?</button>
                                        </div>
                                    </div>
                                )}
                                {showFriendStat === 'exes' && (
                                    <div className="exes">
                                        <h3 className="categoryHeader">Ex-Friends</h3>
                                            <div className="categoryMenu">
                                                <button className="catBut" onClick={() => setShowFriendStat('good')}>Getting along</button>
                                                <button className="catBut" onClick={() => setShowFriendStat('one-sided')}>One-Sided</button>
                                                <button className="catBut" onClick={() => setShowFriendStat('bad')}>Fighting</button>
                                            </div>
                                        <div className="options exes">
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Hopes to make up' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Hopes to make up',
                                                color: relationshipColors.exfriends,
                                                directed: false
                                            })}>Hopes to make up</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Thinks about often' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Thinks about often',
                                                color: relationshipColors.exfriends,
                                                directed: false
                                            })}>Thinks about often</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === "It's complicated..." ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: "It's complicated...",
                                                color: relationshipColors.exfriends,
                                                directed: false
                                            })}>It's complicated...</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Strained' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Strained',
                                                color: relationshipColors.exfriends,
                                                directed: false
                                            })}>Strained</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Not speaking' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Not speaking',
                                                color: relationshipColors.exfriends,
                                                directed: false
                                            })}>Not speaking</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Tries to avoid' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Tries to avoid',
                                                color: relationshipColors.exfriends,
                                                directed: false
                                            })}>Tries to avoid</button>
                                            <button className={`connect-button friendBut ${
                                                selectedRelationship?.label === 'Enemies' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Enemies',
                                                color: relationshipColors.exfriends,
                                                directed: false
                                            })}>Enemies</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {showConnectStat === 'relatives' && (
                            <div className="category relative">
                                <h3>Relative</h3>
                                <div className="options good">
                                    <button className={`connect-button relBut ${
                                        selectedRelationship?.label === 'Cherishes' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Cherishes',
                                        color: relationshipColors.relatives,
                                        directed: false
                                    })}>Cherishes</button>
                                    <button className={`connect-button relBut ${
                                        selectedRelationship?.label === 'Cares deeply for' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Cares deeply for',
                                        color: relationshipColors.relatives,
                                        directed: false
                                    })}>Cares deeply for</button>
                                    <button className={`connect-button relBut ${
                                        selectedRelationship?.label === 'Cares alot for' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Cares alot for',
                                        color: relationshipColors.relatives,
                                        directed: false
                                    })}>Cares alot for</button>
                                    <button className={`connect-button relBut ${
                                        selectedRelationship?.label === 'Cares for' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Cares for',
                                        color: relationshipColors.relatives,
                                        directed: false
                                    })}>Cares for</button>
                                    <button className={`connect-button relBut ${
                                        selectedRelationship?.label === 'Getting along well' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Getting along well',
                                        color: relationshipColors.relatives,
                                        directed: false
                                    })}>Getting along well</button>
                                    <button className={`connect-button relBut ${
                                        selectedRelationship?.label === 'Kinda getting along' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Kinda getting along',
                                        color: relationshipColors.relatives,
                                        directed: false
                                    })}>Kinda getting along</button>
                                    <button className={`connect-button relBut ${
                                        selectedRelationship?.label === 'Not getting along' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Not getting along',
                                        color: relationshipColors.relatives,
                                        directed: false
                                    })}>Not getting along</button>
                                </div>
                            </div>
                        )}
                        {showConnectStat === 'crushes' && (
                            <div className="category crushes">
                                <h3>Crushes</h3>
                                <div className="options good">
                                    <button className={`connect-button crushBut ${
                                        selectedRelationship?.label === 'Ready to risk it all' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Ready to risk it all',
                                        color: relationshipColors.crushes,
                                        directed: true
                                    })}>Ready to risk it all</button>
                                    <button className={`connect-button crushBut ${
                                        selectedRelationship?.label === 'Head over heels' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Head over heels',
                                        color: relationshipColors.crushes,
                                        directed: true
                                    })}>Head over heels</button>
                                    <button className={`connect-button crushBut ${
                                        selectedRelationship?.label === 'Crushing' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Crushing',
                                        color: relationshipColors.crushes,
                                        directed: true
                                    })}>Crushing</button>
                                    <button className={`connect-button crushBut ${
                                        selectedRelationship?.label === 'Likes a lot' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Likes a lot',
                                        color: relationshipColors.crushes,
                                        directed: true
                                    })}>Likes a lot</button>
                                    <button className={`connect-button crushBut ${
                                        selectedRelationship?.label === 'Has some hope' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Has some hope',
                                        color: relationshipColors.crushes,
                                        directed: true
                                    })}>Has some hope</button>
                                    <button className={`connect-button crushBut ${
                                        selectedRelationship?.label === 'Close to giving up' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Close to giving up',
                                        color: relationshipColors.crushes,
                                        directed: true
                                    })}>Close to giving up</button>
                                    <button className={`connect-button crushBut ${
                                        selectedRelationship?.label === 'Giving up' ? 'selected' : ''
                                    }`} onClick={() => setSelectedRelationship({
                                        label: 'Giving up',
                                        color: relationshipColors.crushes,
                                        directed: true
                                    })}>Giving up</button>
                                </div>
                            </div>
                        )}
                        {showConnectStat === 'sweethearts' && (
                            <div className="category sweethearts">
                                {showSweetheartStat === 'good' && (
                                    <div className="good">
                                        <h3 className="categoryHeader">Sweethearts</h3>
                                        <div className="categoryMenu">
                                            <button className="catBut" onClick={() => setShowSweetheartStat('bad')}>Fighting</button>
                                            <button className="catBut" onClick={() => setShowSweetheartStat('exes')}>Exes</button>
                                        </div>
                                        <div className="options good">
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Wants to marry!' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Wants to marry!',
                                                color: relationshipColors.sweethearts,
                                                directed: true
                                            })}>Wants to marry!</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Super in love' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Super in love',
                                                color: relationshipColors.sweethearts,
                                                directed: true
                                            })}>Super in love</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'In love' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'In love',
                                                color: relationshipColors.sweethearts,
                                                directed: true
                                            })}>In love</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Falling in love' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Falling in love',
                                                color: relationshipColors.sweethearts,
                                                directed: true
                                            })}>Falling in love</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Really likes' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Really likes',
                                                color: relationshipColors.sweethearts,
                                                directed: true
                                            })}>Really likes</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Kinda getting along' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Kinda getting along',
                                                color: relationshipColors.sweethearts,
                                                directed: true
                                            })}>Kinda getting along</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Not getting along' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Not getting along',
                                                color: relationshipColors.sweethearts,
                                                directed: true
                                            })}>Not getting along</button>
                                        </div>
                                    </div>
                                )}
                                {showSweetheartStat === 'bad' && (
                                    <div className="bad">
                                        <h3 className="categoryHeader">Sweethearts (Fighting)</h3>
                                        <div className="categoryMenu">
                                            <button className="catBut" onClick={() => setShowSweetheartStat('good')}>Getting Along</button>
                                            <button className="catBut" onClick={() => setShowSweetheartStat('exes')}>Exes</button>
                                        </div>
                                        <div className="options bad">
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still wants to marry?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still wants to marry?',
                                                color: relationshipColors.fighting,
                                                directed: true
                                            })}>Still wants to marry?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still super in love?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still super in love?',
                                                color: relationshipColors.fighting,
                                                directed: true
                                            })}>Still super in love?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still in love?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still in love?',
                                                color: relationshipColors.fighting,
                                                directed: true
                                            })}>Still in love?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still falling in love?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still falling in love?',
                                                color: relationshipColors.fighting,
                                                directed: true
                                            })}>Still falling in love?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still really likes?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still really likes?',
                                                color: relationshipColors.fighting,
                                                directed: true
                                            })}>Still really likes?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Kinda getting along?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Kinda getting along?',
                                                color: relationshipColors.fighting,
                                                directed: true
                                            })}>Kinda getting along?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Not getting along?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Not getting along?',
                                                color: relationshipColors.fighting,
                                                directed: true
                                            })}>Not getting along?</button>
                                        </div>
                                    </div>
                                )}
                                {showSweetheartStat === 'exes' && (
                                    <div className="exes">
                                        <h3 className="categoryHeader">Sweethearts (Exes)</h3>
                                        <div className="categoryMenu">
                                            <button className="catBut" onClick={() => setShowSweetheartStat('good')}>Getting Along</button>
                                            <button className="catBut" onClick={() => setShowSweetheartStat('bad')}>Fighting</button>
                                        </div>
                                        <div className="options bad">
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still wants to marry?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still wants to marry?',
                                                color: relationshipColors.exlove,
                                                directed: true
                                            })}>Still wants to marry?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still super in love?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still super in love?',
                                                color: relationshipColors.exlove,
                                                directed: true
                                            })}>Still super in love?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still in love?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still in love?',
                                                color: relationshipColors.exlove,
                                                directed: true
                                            })}>Still in love?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still falling in love?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still falling in love?',
                                                color: relationshipColors.exlove,
                                                directed: true
                                            })}>Still falling in love?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Still really likes?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Still really likes?',
                                                color: relationshipColors.exlove,
                                                directed: true
                                            })}>Still really likes?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Kinda getting along?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Kinda getting along?',
                                                color: relationshipColors.exlove,
                                                directed: true
                                            })}>Kinda getting along?</button>
                                            <button className={`connect-button sweetheartBut ${
                                                selectedRelationship?.label === 'Not getting along?' ? 'selected' : ''
                                            }`} onClick={() => setSelectedRelationship({
                                                label: 'Not getting along?',
                                                color: relationshipColors.exlove,
                                                directed: true
                                            })}>Not getting along?</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {showConnectStat === 'spouses' && (
                            <div className="category spouse">
                                {showSpouseStat === 'good' && (
                                <div className="good">
                                    <h3 className="categoryHeader">Spouse</h3>
                                    <div className="categoryMenu">
                                        <button className="catBut" onClick={() => setShowSpouseStat('bad')}>Fighting</button>
                                        <button className="catBut" onClick={() => setShowSpouseStat('exes')}>Exes</button>
                                    </div>
                                    <div className="options">
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Soulmates' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Soulmates',
                                            color: relationshipColors.spouses,
                                            directed: true
                                        })}>Soulmates</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Super in love' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Super in love',
                                            color: relationshipColors.spouses,
                                            directed: true
                                        })}>Super in love</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Very in love' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Very in love',
                                            color: relationshipColors.spouses,
                                            directed: true
                                        })}>Very in love</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'In love' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'In love',
                                            color: relationshipColors.spouses,
                                            directed: true
                                        })}>In love</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Happy' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Happy',
                                            color: relationshipColors.spouses,
                                            directed: true
                                        })}>Happy</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Making it work' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Making it work',
                                            color: relationshipColors.spouses,
                                            directed: true
                                        })}>Making it work</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Not getting along' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Not getting along',
                                            color: relationshipColors.spouses,
                                            directed: true
                                        })}>Not getting along</button>
                                    </div>
                                </div>
                                )}
                                {showSpouseStat === 'bad' && (
                                <div className="bad">
                                    <h3 className="categoryHeader">Spouse (Fighting)</h3>
                                    <div className="categoryMenu">
                                        <button className="catBut" onClick={() => setShowSpouseStat('good')}>Getting Along</button>
                                        <button className="catBut" onClick={() => setShowSpouseStat('exes')}>Exes</button>
                                    </div>
                                    <div className="options bad">
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Still soulmates?' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Still soulmates?',
                                            color: relationshipColors.fighting,
                                            directed: true
                                        })}>Still soulmates?</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Still super in love?' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Still super in love?',
                                            color: relationshipColors.fighting,
                                            directed: true
                                        })}>Still super in love?</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Still very in love?' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Still very in love?',
                                            color: relationshipColors.fighting,
                                            directed: true
                                        })}>Still very in love?</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Still in love?' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Still in love?',
                                            color: relationshipColors.fighting,
                                            directed: true
                                        })}>Still in love?</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Still happy?' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Still happy?',
                                            color: relationshipColors.fighting,
                                            directed: true
                                        })}>Still happy?</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Making it work?' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Making it work?',
                                            color: relationshipColors.fighting,
                                            directed: true
                                        })}>Making it work?</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Still trying?' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Still trying?',
                                            color: relationshipColors.fighting,
                                            directed: true
                                        })}>Still trying?</button>
                                    </div>
                                </div>
                                )}
                                {showSpouseStat === 'exes' && (
                                <div className="exes">
                                    <h3 className="categoryHeader">Spouse (Exes)</h3>
                                    <div className="categoryMenu">
                                        <button className="catBut" onClick={() => setShowSpouseStat('good')}>Getting Along</button>
                                        <button className="catBut" onClick={() => setShowSpouseStat('bad')}>Fighting</button>
                                    </div>
                                    <div className="options good">
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Would try again' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Would try again',
                                            color: relationshipColors.exlove,
                                            directed: true
                                        })}>Would try again</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Still great friends' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Still great friends',
                                            color: relationshipColors.exlove,
                                            directed: true
                                        })}>Still great friends</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'On good terms' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'On good terms',
                                            color: relationshipColors.exlove,
                                            directed: true
                                        })}>On good terms</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'No hard feelings' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'No hard feelings',
                                            color: relationshipColors.exlove,
                                            directed: true
                                        })}>No hard feelings</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Tries to avoid' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Tries to avoid',
                                            color: relationshipColors.exlove,
                                            directed: true
                                        })}>Tries to avoid</button>
                                        <button className={`connect-button spouseBut ${
                                            selectedRelationship?.label === 'Enemies' ? 'selected' : ''
                                        }`} onClick={() => setSelectedRelationship({
                                            label: 'Enemies',
                                            color: relationshipColors.exlove,
                                            directed: true
                                        })}>Enemies</button>
                                    </div>
                                </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="button-menu">
                    {showConnectStat !== 'back' && (
                        <button className="back-button" onClick={() => {
                            setShowConnectStat('back');
                            setShowFriendStat('good');
                            setShowSpouseStat('good');
                            setShowSweetheartStat('good');
                            setSelectedRelationship(null);
                            }}>Back
                        </button>
                    )}
                    <button className="close-button" onClick={() => {
                        connectMiis(mii1, mii2, selectedRelationship);
                        setShowConnectStat('back');
                        setShowFriendStat('good');
                        setShowSpouseStat('good');
                        setShowSweetheartStat('good');
                        setActiveMenu(null);
                        setSelectedRelationship(null);
                        }}>Done
                    </button>
                </div>
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
                    <button className="close-button" onClick={() => {resetForm(); setActiveMenu(null)}}>Done</button>
                </div>
            </div>}
      </div>
    </div>
  );
}

export default Menu;