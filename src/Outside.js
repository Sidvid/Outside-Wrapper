import React, { useEffect, useState } from 'react';
function Outside({ children }) {
  const ref = React.useRef();
  const [show, setShow] = useState(true);
  useEffect(() => {
    function clickListner(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    document.addEventListener('click', clickListner);
    return () => {
      removeEventListener('click', clickListner);
    };
  });

  return <div ref={ref}>{show && children}</div>;
}
export default Outside;
