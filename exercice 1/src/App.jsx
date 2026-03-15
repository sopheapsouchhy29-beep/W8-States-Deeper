import React from "react";

export default function App() {
  const [score, setScore] = React.useState(0);

  const handleScoreChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    
    const clampedValue = Math.max(0, Math.min(10, value));
    setScore(clampedValue);
  };

  const getScoreBarStyle = () => {
    // 1- Compute width: score / 10 * 100%
    const scoreWidth = `${(score / 10) * 100}%`;

    // 2- Compute color based on score
    let scoreColor;
    if (score <= 3) {
      scoreColor = "#ffc400"; 
    } else if (score <= 7) {
      scoreColor = "#C8E65F"; 
    } else {
      scoreColor = "#92C456"; 
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={handleScoreChange}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
