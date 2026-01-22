
import React from 'react';

interface Props {
  speed: number;
}

const RunnerBackground: React.FC<Props> = ({ speed }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky */}
      <div className="h-2/3 bg-sky-300 w-full relative">
        {/* Clouds - moving to the right */}
        <div 
          className="absolute top-10 text-4xl animate-scroll left-[-10%]" 
          style={{ animationDuration: `${speed * 3}s` }}
        >
          ☁️
        </div>
        <div 
          className="absolute top-24 text-6xl animate-scroll left-[-10%]" 
          style={{ animationDuration: `${speed * 4}s`, animationDelay: '-2s' }}
        >
          ☁️
        </div>
        <div 
          className="absolute top-4 text-3xl animate-scroll left-[-10%]" 
          style={{ animationDuration: `${speed * 2.5}s`, animationDelay: '-5s' }}
        >
          ☁️
        </div>
      </div>

      {/* Ground/Road */}
      <div className="h-1/3 w-full bg-green-500 relative flex flex-col justify-center">
        {/* Road */}
        <div className="h-24 bg-gray-700 w-full flex items-center justify-around overflow-hidden border-t-4 border-b-4 border-gray-600">
           {/* Lane lines - moving to the right */}
           {[0, 1, 2, 3, 4, 5].map((i) => (
             <div 
               key={i} 
               className="h-2 w-12 bg-white rounded-full animate-scroll left-[-10%]" 
               style={{ 
                 animationDuration: `${speed * 0.5}s`,
                 animationDelay: `${i * -0.1}s` 
               }}
             />
           ))}
        </div>

        {/* Scenery (Trees, Flowers) - moving to the right */}
        <div 
          className="absolute -top-12 text-5xl animate-scroll left-[-10%]" 
          style={{ animationDuration: `${speed * 0.8}s` }}
        >
          🌲
        </div>
        <div 
          className="absolute -top-8 left-[-10%] text-4xl animate-scroll" 
          style={{ animationDuration: `${speed * 1.2}s`, animationDelay: '-1s' }}
        >
          🌻
        </div>
        <div 
          className="absolute -top-10 left-[-10%] text-5xl animate-scroll" 
          style={{ animationDuration: `${speed}s`, animationDelay: '-0.5s' }}
        >
          🌲
        </div>
      </div>
    </div>
  );
};

export default RunnerBackground;
