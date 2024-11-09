import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const RewardTree = () => {
  const [leaves, setLeaves] = useState(0); // State to track number of leaves
  const [completedTasks, setCompletedTasks] = useState(0); // State for completed tasks

  // Fetch leaves data from the backend when the component loads
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get('/api/leaves');
        setLeaves(response.data.leaves); // Set initial leaves from backend
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };

    fetchLeaves();
  }, []);

  // Handle task completion, adding a new leaf and updating the backend
  const handleTaskCompletion = async () => {
    try {
      const newLeafCount = leaves + 1;
      setLeaves(prevLeaves => Math.min(prevLeaves + 1, 20)); // Ensure max 20 leaves
      setCompletedTasks(prevTasks => prevTasks + 1); // Increment completed tasks

      // Update the backend with the new leaf count
      await axios.post('/api/leaves', { leaves: newLeafCount });
      console.log('Updated leaves in backend:', newLeafCount);
    } catch (error) {
      console.error('Error updating leaves:', error);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-500 text-white px-4 py-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl text-center font-light mb-10">
        Forest: Grow Your Focus
      </h1>

      <div className="w-64 h-64 bg-[#faf1c3] rounded-full mb-8 flex items-center justify-center overflow-hidden">
        <svg className="w-56 h-56" viewBox="0 0 100 100">
          <path d="M50 80 L50 50" stroke="#5a3825" strokeWidth="6" />
          <path d="M30 80 C30 80, 70 80, 70 80" fill="#5a3825" />
          {[...Array(leaves)].map((_, i) => (
            <motion.path
              key={i}
              d={`M50 ${50 - i * 2} C50 ${50 - i * 2}, ${45 - i} ${40 - i * 2}, 50 ${30 - i * 2} C${55 + i} ${40 - i * 2}, 50 ${50 - i * 2}, 50 ${50 - i * 2}`}
              fill="#4CAF50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <p className="text-xl mb-6">Tasks Completed: {completedTasks}</p>

      <button
        onClick={handleTaskCompletion}
        className="bg-white text-emerald-500 px-6 py-3 rounded-full font-semibold hover:bg-emerald-100 transition-colors"
      >
        Complete Task
      </button>

      <p className="mt-8 text-center max-w-md">
        Click the "Complete Task" button to grow your tree. 
        Each completed task adds a new leaf, helping your tree flourish!
      </p>
    </div>
  );
};

export default RewardTree;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const RewardTree = () => {
//   // State for each section
//   const [leaves, setLeaves] = useState(0); // Track number of leaves
//   const [completedTasks, setCompletedTasks] = useState(0); // Track completed tasks
//   const [activities, setActivities] = useState([
//     { name: 'Task 1', progress: 0, goal: 5 },
//     { name: 'Task 2', progress: 0, goal: 5 },
//     { name: 'Task 3', progress: 0, goal: 5 },
//     { name: 'Task 4', progress: 0, goal: 5 },
//     { name: 'Task 5', progress: 0, goal: 5 },
//     { name: 'Task 6', progress: 0, goal: 5 }
//   ]); // Track each activity's progress and goal

//   // Fetch initial leaves from the backend
//   useEffect(() => {
//     const fetchLeaves = async () => {
//       try {
//         const response = await axios.get('/api/leaves');
//         setLeaves(response.data.leaves);
//       } catch (error) {
//         console.error('Error fetching leaves:', error);
//       }
//     };
//     fetchLeaves();
//   }, []);

//   // Handle task completion for a specific activity
//   const handleTaskCompletion = async (activityIndex) => {
//     const newActivities = [...activities];
//     newActivities[activityIndex].progress = Math.min(newActivities[activityIndex].progress + 1, newActivities[activityIndex].goal);
    
//     // Update the leaves and tasks
//     const newLeafCount = leaves + 1;
//     setLeaves(Math.min(newLeafCount, 20)); // Max of 20 leaves
//     setCompletedTasks(prevTasks => prevTasks + 1);

//     // Update the activity progress in the state
//     setActivities(newActivities);

//     // Update the backend with the new leaf count
//     try {
//       await axios.post('/api/leaves', { leaves: newLeafCount });
//       console.log('Updated leaves in backend:', newLeafCount);
//     } catch (error) {
//       console.error('Error updating leaves:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-emerald-500 text-white px-4 py-16 flex flex-col items-center justify-center">
//       <h1 className="text-4xl md:text-5xl text-center font-light mb-10">Forest: Grow Your Focus</h1>

//       {/* Tree Image or Graphic */}
//       <div className="w-64 h-64 bg-[#faf1c3] rounded-full mb-8 flex items-center justify-center overflow-hidden">
//         <svg className="w-56 h-56" viewBox="0 0 100 100">
//           <path d="M50 80 L50 50" stroke="#5a3825" strokeWidth="6" />
//           <path d="M30 80 C30 80, 70 80, 70 80" fill="#5a3825" />
//           {[...Array(leaves)].map((_, i) => (
//             <motion.path
//               key={i}
//               d={`M50 ${50 - i * 2} C50 ${50 - i * 2}, ${45 - i} ${40 - i * 2}, 50 ${30 - i * 2} C${55 + i} ${40 - i * 2}, 50 ${50 - i * 2}, 50 ${50 - i * 2}`}
//               fill="#4CAF50"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//             />
//           ))}
//         </svg>
//       </div>

//       {/* Display Activities */}
//       {activities.map((activity, index) => (
//         <div key={index} className="mb-6 w-full max-w-md text-center">
//           <h2 className="text-2xl font-medium">{activity.name}</h2>
//           <div className="mt-2">
//             <div className="w-full bg-gray-200 rounded-full">
//               <div
//                 className="bg-emerald-600 h-2 rounded-full"
//                 style={{ width: `${(activity.progress / activity.goal) * 100}%` }}
//               />
//             </div>
//             <p className="mt-1 text-xl">{activity.progress}/{activity.goal} Completed</p>
//           </div>
//           <button
//             onClick={() => handleTaskCompletion(index)}
//             className="bg-white text-emerald-500 px-6 py-3 rounded-full font-semibold hover:bg-emerald-100 transition-colors mt-4"
//           >
//             Complete {activity.name}
//           </button>
//         </div>
//       ))}

//       <p className="text-xl mb-6">Total Tasks Completed: {completedTasks}</p>

//       <p className="mt-8 text-center max-w-md">
//         Complete each activity to grow your tree. Each completed task adds a new leaf to the tree, helping it flourish!
//       </p>
//     </div>
//   );
// };

// export default RewardTree;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const RewardTree = () => {
//   const [leaves, setLeaves] = useState(0); // Track the number of leaves on the tree
//   const [completedTasks, setCompletedTasks] = useState(0); // Track the number of tasks completed
//   const [activities, setActivities] = useState([
//     { name: 'Read a Book', progress: 0, goal: 5, interval: 60000 },  // Example: 1 minute interval
//     { name: 'Watch Motivational Video', progress: 0, goal: 5, interval: 90000 }, // Example: 1.5 minutes
//     { name: 'Complete Daily Exercise', progress: 0, goal: 5, interval: 120000 }, // 2 minutes
//     { name: 'Meditation', progress: 0, goal: 5, interval: 180000 }, // 3 minutes
//     { name: 'Journal Writing', progress: 0, goal: 5, interval: 150000 }, // 2.5 minutes
//     { name: 'Complete a Puzzle', progress: 0, goal: 5, interval: 300000 } // 5 minutes
//   ]);

//   // Fetch current leaf count from backend on component mount
//   useEffect(() => {
//     const fetchLeaves = async () => {
//       try {
//         const response = await axios.get('/api/leaves'); // Adjust API endpoint
//         setLeaves(response.data.leaves);
//       } catch (error) {
//         console.error('Error fetching leaves:', error);
//       }
//     };
//     fetchLeaves();
//   }, []);

//   // Function to handle automatic task completion and update progress
//   useEffect(() => {
//     const intervalIds = activities.map((activity, index) => {
//       return setInterval(async () => {
//         await handleTaskCompletion(index); // Complete task every interval
//       }, activity.interval);
//     });

//     return () => {
//       // Cleanup intervals when component is unmounted
//       intervalIds.forEach(id => clearInterval(id));
//     };
//   }, [activities]);

//   // Function to handle task completion
//   const handleTaskCompletion = async (activityIndex) => {
//     const newActivities = [...activities];
//     const newProgress = newActivities[activityIndex].progress + 1;
    
//     // Update progress of the activity
//     newActivities[activityIndex].progress = Math.min(newProgress, newActivities[activityIndex].goal);
//     setActivities(newActivities);

//     // Update the leaves and total tasks completed
//     const newLeafCount = leaves + 1;
//     setLeaves(Math.min(newLeafCount, 20)); // Max of 20 leaves for visual representation
//     setCompletedTasks(prevTasks => prevTasks + 1);

//     // Update backend with new leaf count
//     try {
//       await axios.post('/api/leaves', { leaves: newLeafCount });
//     } catch (error) {
//       console.error('Error updating leaves:', error);
//     }

//     // Optionally, you can make an API call to save activity progress if required.
//     try {
//       await axios.post('/api/updateActivity', { activityIndex, progress: newActivities[activityIndex].progress });
//     } catch (error) {
//       console.error('Error updating activity:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-emerald-500 text-white px-4 py-16 flex flex-col items-center justify-center">
//       <h1 className="text-4xl md:text-5xl text-center font-light mb-10">Forest: Grow Your Focus</h1>

//       {/* Tree Image or Graphic */}
//       <div className="w-64 h-64 bg-[#faf1c3] rounded-full mb-8 flex items-center justify-center overflow-hidden">
//         <svg className="w-56 h-56" viewBox="0 0 100 100">
//           <path d="M50 80 L50 50" stroke="#5a3825" strokeWidth="6" />
//           <path d="M30 80 C30 80, 70 80, 70 80" fill="#5a3825" />
//           {[...Array(leaves)].map((_, i) => (
//             <motion.path
//               key={i}
//               d={`M50 ${50 - i * 2} C50 ${50 - i * 2}, ${45 - i} ${40 - i * 2}, 50 ${30 - i * 2} C${55 + i} ${40 - i * 2}, 50 ${50 - i * 2}, 50 ${50 - i * 2}`}
//               fill="#4CAF50"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//             />
//           ))}
//         </svg>
//       </div>

//       {/* Display Activities */}
//       {activities.map((activity, index) => (
//         <div key={index} className="mb-6 w-full max-w-md text-center">
//           <h2 className="text-2xl font-medium">{activity.name}</h2>
//           <div className="mt-2">
//             <div className="w-full bg-gray-200 rounded-full">
//               <div
//                 className="bg-emerald-600 h-2 rounded-full"
//                 style={{ width: `${(activity.progress / activity.goal) * 100}%` }}
//               />
//             </div>
//             <p className="mt-1 text-xl">{activity.progress}/{activity.goal} Completed</p>
//           </div>
//         </div>
//       ))}

//       <p className="text-xl mb-6">Total Tasks Completed: {completedTasks}</p>

//       <p className="mt-8 text-center max-w-md">
//         Complete each activity to grow your tree. Each completed task adds a new leaf to the tree, helping it flourish!
//       </p>
//     </div>
//   );
// };

// export default RewardTree;
