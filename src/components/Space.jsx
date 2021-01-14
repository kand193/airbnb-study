import React from 'react';
import SpaceItem from './SpaceItem';

const Space = () => {
  return (
    <div>
      <h1 className='space-title'>
        어디에서나, 여행은 살아보는 거야!
      </h1>
      <SpaceItem image="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720" content="집 전체" />
      <SpaceItem image="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720" content="통나무집 및 전원주택" />
      <SpaceItem image="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720" content="독특한 공간" />
    </div>
  )
}

export default Space;