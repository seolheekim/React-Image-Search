import React from 'react'

const ImageList = (props) => {

  const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} key={id} alt={description} />
  });

  return (
    <div>{images} this is still working</div>

  )
};

export default ImageList;