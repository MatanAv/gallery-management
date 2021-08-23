import React from "react";

const ImageBox = (isLast) => {
  return (
    <li className='image'>
      {!isLast ? (
        <img
          src='https://cdn.pixabay.com/photo/2021/08/19/16/31/flowers-6558487__340.jpg'
          width='150'
          height='99'
        />
      ) : (
        <div className='add-image'>
          <span>Add Image</span>
        </div>
      )}
    </li>
  );
};

export default ImageBox;
