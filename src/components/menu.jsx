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

const Menu = ({nodes, addMii, deleteMiis}) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const [name, setName] = useState('');
    const [icon, setIcon] = useState(null);
    const [color, setColor] = useState('');

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const [selectedMiis, setSelectedMiis] = useState([]);

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
                                    <button className="connect-button strangerBut">Strangers</button>
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
                                            <button className="connect-button acquaintanceBut">Wants to be friends</button>
                                            <button className="connect-button acquaintanceBut">Vibes with</button>
                                            <button className="connect-button acquaintanceBut">Seems like-minded</button>
                                            <button className="connect-button acquaintanceBut">Getting familiar</button>
                                            <button className="connect-button acquaintanceBut">Some interest</button>
                                            <button className="connect-button acquaintanceBut">Indifferent</button>
                                            <button className="connect-button acquaintanceBut">Not interested</button>
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
                                            <button className="connect-button acquaintanceBut">Ready to risk it all</button>
                                            <button className="connect-button acquaintanceBut">Head over heels</button>
                                            <button className="connect-button acquaintanceBut">Crushing</button>
                                            <button className="connect-button acquaintanceBut">Likes a lot</button>
                                            <button className="connect-button acquaintanceBut">Has some hope</button>
                                            <button className="connect-button acquaintanceBut">Close to giving up</button>
                                            <button className="connect-button acquaintanceBut">Giving up</button>
                                        </div>
                                        <h4 className="categoryHeader">Fighting</h4>
                                        <div className="options bad">
                                            <button className="connect-button acquaintanceBut">Still ready ot risk it all?</button>
                                            <button className="connect-button acquaintanceBut">Still head over heels?</button>
                                            <button className="connect-button acquaintanceBut">Still crushing?</button>
                                            <button className="connect-button acquaintanceBut">Still likes?</button>
                                            <button className="connect-button acquaintanceBut">Still interested?</button>
                                            <button className="connect-button acquaintanceBut">Close to giving up?</button>
                                            <button className="connect-button acquaintanceBut">Giving up?</button>
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
                                            <button className="connect-button friendBut">Ultra friends</button>
                                            <button className="connect-button friendBut">Best friends</button>
                                            <button className="connect-button friendBut">Great friends</button>
                                            <button className="connect-button friendBut">Friends</button>
                                            <button className="connect-button friendBut">Kinda getting along</button>
                                            <button className="connect-button friendBut">Not getting along</button>
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
                                            <button className="connect-button friendBut">Ready to risk it all</button>
                                            <button className="connect-button friendBut">Head over heels</button>
                                            <button className="connect-button friendBut">Crushing</button>
                                            <button className="connect-button friendBut">Likes a lot</button>
                                            <button className="connect-button friendBut">Has some hope</button>
                                            <button className="connect-button friendBut">Close to giving up</button>
                                            <button className="connect-button friendBut">Giving up</button>
                                        </div>
                                        <h4 className="categoryHeader">Fighting</h4>
                                        <div className="options one-sided">
                                            <button className="connect-button friendBut">Still ready to risk it all?</button>
                                            <button className="connect-button friendBut">Still head over heels?</button>
                                            <button className="connect-button friendBut">Still crushing?</button>
                                            <button className="connect-button friendBut">Still likes?</button>
                                            <button className="connect-button friendBut">Still interested?</button>
                                            <button className="connect-button friendBut">Close to giving up?</button>
                                            <button className="connect-button friendBut">Giving up?</button>
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
                                            <button className="connect-button friendBut">Still ultra friends?</button>
                                            <button className="connect-button friendBut">Still best friends?</button>
                                            <button className="connect-button friendBut">Still great friends?</button>
                                            <button className="connect-button friendBut">Still good friends?</button>
                                            <button className="connect-button friendBut">Still friends?</button>
                                            <button className="connect-button friendBut">Kinda getting along?</button>
                                            <button className="connect-button friendBut">Not getting along?</button>
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
                                            <button className="connect-button friendBut">Hopes to make up</button>
                                            <button className="connect-button friendBut">Thinks about often</button>
                                            <button className="connect-button friendBut">It's complicated...</button>
                                            <button className="connect-button friendBut">Strained</button>
                                            <button className="connect-button friendBut">Not speaking</button>
                                            <button className="connect-button friendBut">Tries to avoid</button>
                                            <button className="connect-button friendBut">Enemies</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {showConnectStat === 'relatives' && (
                            <div className="category relative">
                                <h3>Relative</h3>
                                <div className="options good">
                                    <button className="connect-button relBut">Cherishes</button>
                                    <button className="connect-button relBut">Cares deeply for</button>
                                    <button className="connect-button relBut">Cares alot for</button>
                                    <button className="connect-button relBut">Cares for</button>
                                    <button className="connect-button relBut">Cares deeply for</button>
                                    <button className="connect-button relBut">Getting along well</button>
                                    <button className="connect-button relBut">Kinda getting along</button>
                                    <button className="connect-button relBut">Not getting along</button>
                                </div>
                            </div>
                        )}
                        {showConnectStat === 'crushes' && (
                            <div className="category crushes">
                                <h3>Crushes</h3>
                                <div className="options good">
                                    <button className="connect-button crushBut">Ready to risk it all</button>
                                    <button className="connect-button crushBut">Head over heels</button>
                                    <button className="connect-button crushBut">Crushing</button>
                                    <button className="connect-button crushBut">Likes a lot</button>
                                    <button className="connect-button crushBut">Has some hope</button>
                                    <button className="connect-button crushBut">Close to giving up</button>
                                    <button className="connect-button crushBut">Giving up</button>
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
                                            <button className="connect-button sweetheartBut">Wants to marry!</button>
                                            <button className="connect-button sweetheartBut">Super in love</button>
                                            <button className="connect-button sweetheartBut">In love</button>
                                            <button className="connect-button sweetheartBut">Falling in love</button>
                                            <button className="connect-button sweetheartBut">Really likes</button>
                                            <button className="connect-button sweetheartBut">Kinda getting along</button>
                                            <button className="connect-button sweetheartBut">Not getting along</button>
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
                                            <button className="connect-button sweetheartBut">Still wants to marry?</button>
                                            <button className="connect-button sweetheartBut">Still super in love?</button>
                                            <button className="connect-button sweetheartBut">Still in love?</button>
                                            <button className="connect-button sweetheartBut">Still falling in love?</button>
                                            <button className="connect-button sweetheartBut">Still really likes?</button>
                                            <button className="connect-button sweetheartBut">Kinda getting along?</button>
                                            <button className="connect-button sweetheartBut">Not getting along?</button>
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
                                            <button className="connect-button sweetheartBut">Still wants to marry?</button>
                                            <button className="connect-button sweetheartBut">Still super in love?</button>
                                            <button className="connect-button sweetheartBut">Still in love?</button>
                                            <button className="connect-button sweetheartBut">Still falling in love?</button>
                                            <button className="connect-button sweetheartBut">Still really likes?</button>
                                            <button className="connect-button sweetheartBut">Kinda getting along?</button>
                                            <button className="connect-button sweetheartBut">Not getting along?</button>
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
                                        <button className="connect-button spouseBut">Soulmates</button>
                                        <button className="connect-button spouseBut">Super in love</button>
                                        <button className="connect-button spouseBut">Very in love</button>
                                        <button className="connect-button spouseBut">In love</button>
                                        <button className="connect-button spouseBut">Happy</button>
                                        <button className="connect-button spouseBut">Making it work</button>
                                        <button className="connect-button spouseBut">Not getting along</button>
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
                                        <button className="connect-button spouseBut">Still soulmates?</button>
                                        <button className="connect-button spouseBut">Still super in love?</button>
                                        <button className="connect-button spouseBut">Still very in love?</button>
                                        <button className="connect-button spouseBut">Still in love?</button>
                                        <button className="connect-button spouseBut">Still happy?</button>
                                        <button className="connect-button spouseBut">Making it work?</button>
                                        <button className="connect-button spouseBut">Still trying?</button>
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
                                        <button className="connect-button spouseBut">Would try again</button>
                                        <button className="connect-button spouseBut">Still great friends</button>
                                        <button className="connect-button spouseBut">On good terms</button>
                                        <button className="connect-button spouseBut">No hard feelings</button>
                                        <button className="connect-button spouseBut">Tries to avoid</button>
                                        <button className="connect-button spouseBut">Enemies</button>
                                    </div>
                                </div>
                                )}
                            </div>
                        )}
                        {/* </div> */}
                    </div>
                </div>
                <div className="button-menu">
                    {showConnectStat !== 'back' && (
                        <button className="back-button" onClick={() => {
                            setShowConnectStat('back');
                            setShowFriendStat('good');
                            setShowSpouseStat('good');
                            setShowSweetheartStat('good');
                            }}>Back
                        </button>
                    )}
                    <button className="close-button" onClick={() => {
                        setShowConnectStat('back');
                        setShowFriendStat('good');
                        setShowSpouseStat('good');
                        setShowSweetheartStat('good');
                        setActiveMenu(null);
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