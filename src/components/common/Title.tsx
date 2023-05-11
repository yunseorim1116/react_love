import React from 'react';

interface IProps {
  title: string;
}
const Title = ( { title } : IProps)  => {
    return (
        <div>
      {title}
        </div>
    );
};

export default Title;