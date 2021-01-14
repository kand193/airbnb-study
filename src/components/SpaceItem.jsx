import React from 'react';

const SpaceItem = (props) => {
  const { image, content } = props;

  return (
    <div className='space-item'>
      <img className='space-item-image' src={image} alt={content} />
      <br />
      {content}
    </div>
  )
}

export default SpaceItem;