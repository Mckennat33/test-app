import React from 'react'

function Home({children, ...rest}) {
  return (
    // rest will copy all the attributes from the
    // home compenent in App and add it herex
    // in this example it will take the classname
    // from Home comp and add it here 
    <div {...rest}>
        {children}
    </div>
  );
}

export default Home;