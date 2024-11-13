import React from 'react';

const images = [
{ src: './images/1.jpg', alt: 'image1', width: '150px', height: '200px' },
{ src: './images/2.png', alt: 'image2', width: '150px', height: '200px' },
{ src: './images/3.jpg', alt: 'image3', width: '150px', height: '200px' },
{ src: './images/4.jpg', alt: 'image4', width: '150px', height: '200px' },
];

function ImageList() {
return (
    <div>
    {images.map((image, index) => (
        <img
        key={index}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        />
    ))}
    </div>
);
}

export default ImageList;
