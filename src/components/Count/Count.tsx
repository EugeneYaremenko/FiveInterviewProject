import React from "react";

const Count: React.FC<{ text: string; count: number }> = ({ text, count }) => {
  console.log(`Rendering ${text}`);

  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default React.memo(Count);
