'use client'; // This should be at the top of the file

import Script from 'next/script';
import React from 'react';

// Correct the path to your script file
const library = '/library.js'; // Assuming library.js is in the public folder

const ScriptComponent = () => {
  return (
    <div>
      <h2>Script Tag vs Script Component</h2>
      <Script 
        src='/library.js'
        onLoad={() => console.log('Feature Executed')} 
        strategy="lazyOnload" // Optional: choose the loading strategy
      />
    </div>
  );
}

export default ScriptComponent;
