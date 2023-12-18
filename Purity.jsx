import React, { useEffect } from "react";
let count = 1; // Global

function Purity({ theme }) {
  // 2
  useEffect(() => {
    // side effects
    count++;
    console.log(count);
  }, []);

  // 1
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Purity;