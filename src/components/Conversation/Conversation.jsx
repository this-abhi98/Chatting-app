import React from 'react';
import './Conversation.css';

const conversations = [
    {
        id:1,
        img:'https://wallpapercave.com/wp/wp4464503.jpg',
        name:'Elliot Alderson'
    },
    {
        id:2,
        img:'https://i.pinimg.com/originals/54/8a/d0/548ad00f6124a24184ce47cc6a19f113.jpg',
        name:'Albus Dumbledore'
    },
    {
        id:3,
        img:'https://is2-ssl.mzstatic.com/image/thumb/MGYkSX0RkVpcFqOZcMdAVQ/1200x675mf.jpg',
        name:'Garfield'
    },
    {
        id:4,
        img:'https://www.giantfreakinrobot.com/wp-content/uploads/2022/04/benedict-cumberbatch_sherlock-900x507.jpg',
        name:'Sherlock Holmes'
    },
    {
        id:5,
        img:'https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg',
        name:'Bruce Wayne'
    },
    {
        id:6,
        img:'https://www.giantfreakinrobot.com/wp-content/uploads/2022/04/benedict-cumberbatch_sherlock-900x507.jpg',
        name:'Sherlock Holmes'
    },
    {
        id:7,
        img:'https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg',
        name:'Bruce Wayne'
    }
];

export const Conversation = ({activeConversation}) => {
  return (
    <div className={'active-conversation-list' + (activeConversation ? '' : ' inactive')}>
        {conversations.map((c) => {
            return (
                <div className='active-conversation-wrapper'>
                    <img src={c.img} alt="" className="conversation-user-dp" />
                    <p className="conversation-avatar-name">{c.name}</p>
                </div>
            )
        })}
    </div>
  )
}
