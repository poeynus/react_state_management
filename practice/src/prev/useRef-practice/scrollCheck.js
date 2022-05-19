import React, { useRef } from "react";

const ScrollCheck = () => {
  const scrollRef = useRef(null);

  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <>
      <div style={{ height: 600 }} />
      <div ref={scrollRef}>Scroll to</div>
      <div style={{ height: 1500 }} />
      <button onClick={executeScroll}>Click to scroll</button>
    </>
  );
};

export default ScrollCheck;
