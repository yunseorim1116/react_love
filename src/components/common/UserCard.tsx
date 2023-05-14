import React from 'react';

interface IProps {
userId:string,
profileImgUrl:string,
nickname:string
}


const UserCard = ({userId, profileImgUrl ,nickname}:IProps) => {
    return (
        <div style={{ width:'400px' , height:'500px', margin:'auto', cursor:'pointer'}}>
         <img src={profileImgUrl} style={{ width:'400px' , height:'300px', objectFit: 'cover'}} />
          <h3 key={userId} style={{ width:'400px', textAlign:'center'}}>{nickname}</h3>
        </div>
    );
};

export default UserCard;