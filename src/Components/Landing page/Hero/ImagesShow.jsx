import React from 'react'
import img1 from '../../../Assets/img1.png'
import img2 from '../../../Assets/img2.png'
import img3 from '../../../Assets/img3.png'
import img4 from '../../../Assets/img4.png'
import img5 from '../../../Assets/img5.png'
import img6 from '../../../Assets/img6.png'
import img7 from '../../../Assets/img7.png'
import { ImageList, ImageListItem } from '@mui/material'

const ImagesShow = () => {
  const itemData = [
    {
      img: img2,
      title: 'Masjed',
      rows: 2
    },
    {
      img: img1,
      title: 'Poeple talking'
    },
    {
      img: img3,
      title: 'Masjed'
    },
    {
      img: img4,
      title: 'Masjed'
    },
    {
      img: img5,
      title: 'People praying'
    },
    {
      img: img6,
      title: 'Mihrab'
    },
    {
      img: img7,
      title: 'Masjed'
    }
  ]

  function srcset (image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`
    }
  }

  return (
    <div className='image-show'>
      <ImageList
        className='image-list'
        sx={{ width: '100%', height: 'fit-content' }}
        variant='quilted'
        cols={4}
        rowHeight={450}
      >
        {itemData.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default ImagesShow
