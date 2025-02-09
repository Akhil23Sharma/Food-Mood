import React, { useState } from "react";

const MyApp = () => {
  const [bars, setBars] = useState([]);

  const handleAddBar = () => {
    const id = Date.now();
    setBars([...bars, id]); // Add a new unique ID for each bar
  };

  return (
    <div className="MyApp">
      <button onClick={handleAddBar} className="add-button">
        Add
      </button>
      <div className="progress-container">
        {bars.map((id) => (
          <ProgressBar key={id} />
        ))}
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevWidth + 1;
      });
    }, 20); // 20ms per update to fill in 2000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default MyApp;
