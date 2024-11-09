// import React, { useEffect } from 'react';

// const BreathingSection = () => {
//   useEffect(() => {
//     const container = document.getElementById('container');
//     const text = document.getElementById('text');

//     const totalTime = 7500;
//     const breatheTime = (totalTime / 5) * 2;
//     const holdTime = totalTime / 5;

//     function breathAnimation() {
//       text.innerText = 'Breathe In!';
//       container.classList.add('grow');
//       container.classList.remove('shrink');

//       setTimeout(() => {
//         text.innerText = 'Hold';

//         setTimeout(() => {
//           text.innerText = 'Breathe Out!';
//           container.classList.add('shrink');
//           container.classList.remove('grow');
//         }, holdTime);
//       }, breatheTime);
//     }

//     breathAnimation();
//     const interval = setInterval(breathAnimation, totalTime);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#224941] text-white font-montserrat overflow-hidden">
//       <div
//         id="container"
//         className="container flex items-center justify-center w-72 h-72 relative"
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-[#010f1c] rounded-full z-[-1]" />
//         <div
//           className="absolute top-[-10px] left-[-10px] w-[320px] h-[320px] rounded-full
//             bg-gradient-conic from-[#55b7a4] via-[#4ca493] via-[40%] to-[#2a5b52]"
//         />
//         <div className="absolute top-[-40px] left-[140px] w-5 h-48 pointer-container animate-rotate transform-origin-bottom-center">
//           <span className="block w-5 h-5 bg-white rounded-full"></span>
//         </div>
//       </div>
//       <p id="text" className="mt-5 text-2xl">
//         Breathe In!
//       </p>
//     </div>
//   );
// };

// export default BreathingSection;





import React, { useEffect } from 'react';

const BreathingSection = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    function breathAnimation() {
      text.innerText = 'Breathe In';
      container.classList.add('animate-grow');
      container.classList.remove('animate-shrink');

      setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
          text.innerText = 'Breathe Out';
          container.classList.add('animate-shrink');
          container.classList.remove('animate-grow');
        }, holdTime);
      }, breatheTime);
    }

    breathAnimation();
    const interval = setInterval(breathAnimation, totalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#224941] text-white font-montserrat overflow-hidden">
      <div
        id="container"
        className="flex items-center justify-center w-70 h-70 relative transition-transform duration-[5s] ease-in-out"
      >
        <div className="absolute w-full h-full bg-[#010f1c] rounded-full animate-pulse" />
        <div
          className="absolute w-[320px] h-[320px] rounded-full
            bg-gradient-to-r from-[#55b7a4] via-[#4ca493] to-[#2a5b52] opacity-80 animate-spin-slow"
        />
        <div className="absolute w-5 h-5 bg-white rounded-full animate-ping" style={{ top: '-20px' }} />
      </div>
      <p id="text" className="mt-8 text-2xl "> {/* Adjusted margin here */}
       
      </p>
    </div>
  );
};

export default BreathingSection;