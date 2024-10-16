import React from 'react'
import { Sixtyfour_Convergence } from 'next/font/google'; // Corrected import
const sixtyfour = Sixtyfour_Convergence({ 
    weight: '900',
    subsets: ['latin'],
    display: 'swap' 
}
    ); 
const FontOpz = () => {
  return (
    <div>
      {/* <h2 style={{fontFamily: 'Sixtyfour Convergence' }}>Font Optimization In Next js</h2> */}
      {/* <h2 className={sixtyfour.className}>Font Optimization In Next js</h2>
    </div> */}
  )
}

export default FontOpz
