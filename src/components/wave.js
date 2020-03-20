import React, {useState} from 'react';
import {css} from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`

  return (
    <div>
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
        
      `}
      onClick={() => setWaves(waves+1)}
      >
      + {label}
    </button>
    <button
      css={css`
        background: green;
        border: none;
        color: white;
        font-size: 1.25rem;
        
      `}
      onMouseEnter={() => setWaves(waves-1)}
      >
      - {label}
    </button>
    </div>
  )
}

export default Wave;

