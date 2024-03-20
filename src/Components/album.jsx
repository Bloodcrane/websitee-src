import React from 'react';

const colors = ['#bcd2f3', '#bec9d8', '#d2c6da', '#d6cbdb'];

const AlbumComponent = ({ imageUrl, title, description}) => {

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const albumStyle = {
    backgroundColor: randomColor,
  };

  return (
    <div className="album-container" style={albumStyle}>
      <div className='album-inside-container'>
        <img src={imageUrl} alt={title} className="album-image" />
        <h2 className="album-title">{title}</h2>
        <p className="album-description">{description}</p>
      </div>
    </div>
  );
};

export default AlbumComponent;