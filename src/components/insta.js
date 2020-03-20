import React from 'react';
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import useInsta from '../hooks/use-insta'

const Insta = () => {
  //we need some data here
  const instaPhotos = useInsta();
  const { username } = instaPhotos[0];
  console.log('Line 10, insta.js, instaPhotos',instaPhotos)

  return (
    <>
      <h2>Instagram posts from {username}</h2>
      <div 
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

          `}
          >
        {instaPhotos.map(photo => (
          <a 
          key={photo.id}
          href={`https://instagram.com/p/${photo.id}`}
          css={css`
            box-shadow: 0;
            display: block;
            margin:0.5rem;
            max-width: calc(33% - 1rem);
            width: 120px;
            transition: 200ms box-shadow linear;

            :focus,
            :hover {
              box-shadow: 0 2px 14px #22222244;
              z-index: 10;
            }
          `}
          
        >
        <Image  
          fluid={photo.fluid}
          alt={photo.caption}
          css={css`
            width: 100%;

            * {
              margin-top: 0;
            }
          `}
        />
        </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>See all posts &rarr;</a>
    </>
  )
}

export default Insta;