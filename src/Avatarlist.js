import React from 'react';

const Avatarlist = (props) => {
    return (
         <div className="avatar_styling ma4 bg-light-red dib pa4 grow shadow-4  tc">
                <img    src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
                <h1 className="">{props.name}</h1>
                <p className="tc">{props.work}</p>
                </div>
    )
}
export default Avatarlist;