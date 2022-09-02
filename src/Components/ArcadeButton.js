import React from 'react';
import './ArcadeButton.css';

function ArcadeButton({children}) {
  return (
    <>
        <button class="push--flat">
                {children}
        </button>
    </>
  )
}

export default ArcadeButton