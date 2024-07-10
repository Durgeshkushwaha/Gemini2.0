import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

export const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const { onSent, prevprompt, setRecentprompt ,newChat} = useContext(Context)

    const loadprompt=async (prompt)=>{
        setRecentprompt(prompt)
        await onSent(prompt)
    }


    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(extended => !extended)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={()=>newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevprompt.map((item, index) => {
                            return (
                                <div onClick={()=>loadprompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0,18)}...</p>
                                </div>
                            )
                        })}

                    </div> :
                    null
                }

            </div>
            <div className="bottom">
                <div className="recent-entry bottom-item">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="recent-entry bottom-item">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="recent-entry bottom-item">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}
