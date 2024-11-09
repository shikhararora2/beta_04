// import React from 'react';

// import wave from '../../assets/wave Gif.gif';
// import { FaReact } from "react-icons/fa";

// import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
// import CyberCrime from '../../assets/cyber.png';
// import SC from '../../assets/sc and st.jpg';
// import Women from '../../assets/women.jpg';
// import Children from '../../assets/children.jpg';
// import State from '../../assets/state.jpg'; 
// import Economic from '../../assets/Economic.jpg';
// import Yoga from '../../assets/meditation.jpg'; 
// import Exercise from '../../assets/exercise.jpg'; 
// import Games from '../../assets/games.jpg'; 
// import Books from '../../assets/books.avif';
// import Diary from '../../assets/diary.jpg'; 
// import Talk from '../../assets/talk.avif';
// import Video from '../../assets/videos.png';  
// // import Meditation from '../BreathingComponent/BreathingSection.jsx'; 
// import BreathingSection from '../BreathingComponent/BreathingSection.jsx';


// const ServiceData = [
//     {
//         title: "breathing and meditation ",
//         content: "breathing technique ",
//         description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life, making it easier to navigate challenges with clarity..",
//         // icon: <FaReact className='text-7xl' />
//         // img: CyberCrime,
//         img:Yoga,
//         aosDelay: "300",
        
//     },
//     {
//         title: "Exercises",
//         content: "it is about  exercises ",
//         description: "Regular physical activity and yoga strengthen the body, improve flexibility, and support mental well-being, creating a balanced approach to health.",
//         // img: SC, 
//         img:Exercise,
//         aosDelay: "700",

//     }, {
//         title: "Games for Fun ",
//         content: "Play games to release your stress ",
//         description: "Engaging in short, fun games offers a quick mental break, boosts creativity, and helps improve focus while providing a burst of relaxation.  ",
//         // img:Women, 
//         img:Games,
//         aosDelay: "700",
//     },{
//         title: "Books and thoughts",
//         content: "read books to gain knowledge ",
//         description: "Reading expands perspectives and inspires thoughtful reflection, allowing personal growth and deeper understanding of oneself and the world.  ",
//         // img:Children,
//         img:Books,
//         aosDelay: "700",
//     },{
//         title: "Diary ",
//         content: "diary for mental health",
//         description: "Writing in a diary provides a private space to express emotions, reflect on experiences, and track personal growth, offering a therapeutic way to process life’s journey.  ",
//         // img:State, 
//         img:Diary,
//         aosDelay: "700",
//     },{
//         title: "Videos for relief ",
//         content: "to see the video to release stress ",
//         description: " In this video, discover quick and effective stress-relief techniques to bring calm and balance to your day. Join us for simple exercises that can help you unwind anytime, anywhere.",
//         // img:Economic, 
//         img:Video,
//         aosDelay: "700",
//     }
// ];


// const HeroCard = () => {
//     return (
//         <>
//             <section className="bg-blue-500">
//                 <div className="container">
//                     <div className='min-h-[400px]'>
//                         <div>
//                             <div className='grid grid-cols-1 sm:grid-cols-3  gap-6 relative z-10'>
//                                 {ServiceData.map((data, index) => {
//                                     return (
//                                         <div
//                                             data-aos="fade-up"
//                                             data-aos-delay={data.aosDelay}
//                                             className='min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto '
//                                         >
//                                            <img src={data.img} alt={data.title} className='text-7xl' />
//                                             <h1>{data.title}</h1>
//                                             <p>{data.content}</p>
//                                             <p className='text-sm'>
//                                                 {data.description}

//                                             </p>

//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                             <img src={wave} alt=""
//                                 className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'
//                             />





//                         </div>





//                     </div>



//                 </div>










//             </section>









//         </>








//     )








// }


// export default HeroCard;   















// import React from 'react';
// import { Link } from 'react-router-dom';
// import wave from '../../assets/wave Gif.gif';
// import Yoga from '../../assets/meditation.jpg';
// import Exercise from '../../assets/exercise.jpg';
// import Games from '../../assets/games.jpg';
// import Books from '../../assets/books.avif';
// import Diary from '../../assets/diary.jpg';
// import Video from '../../assets/videos.png';
// import Bubble from '../../components/Games/Bubble/Bubble.jsx';
// import colorMatch from '../../components/Games/ColorMatch/colorMatch.jsx'; 


// const ServiceData = [
//     {
//         title: "Breathing and Meditation",
//         content: "Breathing technique",
//         description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
//         img: Yoga,
//         aosDelay: "300",
//         link: "/breathing",
//     },
//     {
//         title: "Exercises",
//         content: "Physical exercises",
//         description: "Regular physical activity strengthens the body, improves flexibility, and supports mental well-being.",
//         img: Exercise,
//         aosDelay: "700",
//         link: "/exercises",
//     },
//     {
//         title: "Games for Fun",
//         content: "Play games to release your stress",
//         description: "Engaging in short, fun games offers a quick mental break and boosts creativity.",
//         img: Games,
//         aosDelay: "700",
//         link: "/Bubble",
//     },
//     {
//         title: "Books and Thoughts",
//         content: "Read books to gain knowledge",
//         description: "Reading expands perspectives and inspires thoughtful reflection.",
//         img: Books,
//         aosDelay: "700",
//         link: "/books",
//     },
//     {
//         title: "Diary",
//         content: "Diary for mental health",
//         description: "Writing in a diary provides a private space to express emotions and reflect.",
//         img: Diary,
//         aosDelay: "700",
//         link: "https://repo-frontend-0ixl.onrender.com/",  // Live web app link
//     },
//     {
//         title: "Videos for Relief",
//         content: "Watch videos to release stress",
//         description: "Discover stress-relief techniques to bring calm and balance.",
//         img: Video,
//         aosDelay: "700",
//         link: "https://youtube.com/playlist?list=PLWlTX25IDqIz4Ad4_ZvTQ_rM07Lkr7g-4&si=tEy9dzygmcYuXWM0", // Add YouTube link here
//     },
// ];

// const HeroCard = () => {
//     return (
//         <section className="bg-blue-500">
//             <div className="container">
//                 <div className="min-h-[400px]">
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
//                         {ServiceData.map((data, index) => (
//                             <Link
//                                 key={index}
//                                 to={data.link}
//                                 data-aos="fade-up"
//                                 data-aos-delay={data.aosDelay}
//                                 className="cursor-pointer min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
//                             >
//                                 <img src={data.img} alt={data.title} className="text-7xl" />
//                                 <h1>{data.title}</h1>
//                                 <p>{data.content}</p>
//                                 <p className="text-sm">{data.description}</p>
//                             </Link>
//                         ))}
//                     </div>

//                     <img
//                         src={wave}
//                         alt=""
//                         className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroCard;











// import React from 'react';
// import { Link } from 'react-router-dom';
// import wave from '../../assets/wave Gif.gif';
// import Yoga from '../../assets/meditation.jpg';
// import Exercise from '../../assets/exercise.jpg';
// import Games from '../../assets/games.jpg';
// import Books from '../../assets/books.avif';
// import Diary from '../../assets/diary.jpg';
// import Video from '../../assets/videos.png';

// const ServiceData = [
//     {
//         title: "Breathing and Meditation",
//         content: "Breathing technique",
//         description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
//         img: Yoga,
//         aosDelay: "300",
//         link: "/breathing",
//     },
//     {
//         title: "Exercises",
//         content: "Physical exercises",
//         description: "Regular physical activity strengthens the body, improves flexibility, and supports mental well-being.",
//         img: Exercise,
//         aosDelay: "700",
//         link: "/exercises",
//     },
//     {
//         title: "Games for Fun",
//         content: "Play games to release your stress",
//         description: "Engaging in short, fun games offers a quick mental break and boosts creativity.",
//         img: Games,
//         aosDelay: "700",
//         link: "/Bubble",
//     },
//     {
//         title: "Books and Thoughts",
//         content: "Read books to gain knowledge",
//         description: "Reading expands perspectives and inspires thoughtful reflection.",
//         img: Books,
//         aosDelay: "700",
//         link: "/books",
//     },
//     {
//         title: "Diary",
//         content: "Diary for mental health",
//         description: "Writing in a diary provides a private space to express emotions and reflect.",
//         img: Diary,
//         aosDelay: "700",
//         link: "https://repo-frontend-0ixl.onrender.com/",
//     },
//     {
//         title: "Videos for Relief",
//         content: "Watch videos to release stress",
//         description: "Discover stress-relief techniques to bring calm and balance.",
//         img: Video,
//         aosDelay: "700",
//         link: "https://youtube.com/playlist?list=PLWlTX25IDqIz4Ad4_ZvTQ_rM07Lkr7g-4&si=tEy9dzygmcYuXWM0",
//     },
// ];

// const HeroCard = ({ onCardClick }) => {
//     return (
//         <section className="bg-blue-500">
//             <div className="container">
//                 <div className="min-h-[400px]">
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
//                         {ServiceData.map((data, index) => (
//                             <Link
//                                 key={index}
//                                 to={data.link}
//                                 onClick={onCardClick} // Trigger event on click
//                                 data-aos="fade-up"
//                                 data-aos-delay={data.aosDelay}
//                                 className="cursor-pointer min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
//                             >
//                                 <img src={data.img} alt={data.title} className="text-7xl" />
//                                 <h1>{data.title}</h1>
//                                 <p>{data.content}</p>
//                                 <p className="text-sm">{data.description}</p>
//                             </Link>
//                         ))}
//                     </div>

//                     <img
//                         src={wave}
//                         alt=""
//                         className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroCard;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import wave from '../../assets/wave Gif.gif';
import Yoga from '../../assets/meditation.jpg';
import Exercise from '../../assets/exercise.jpg';
import Games from '../../assets/games.jpg';
import Books from '../../assets/books.avif';
import Diary from '../../assets/diary.jpg';
import Video from '../../assets/videos.png';
import axios from 'axios';

const ServiceData = [
    {
        name: "Breathing and Meditation", // Changed from title to name
        content: "Breathing technique",
        description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
        img: Yoga,
        aosDelay: "300",
        link: "/breathing",
    },
    {
        name: "Exercises", // Changed from title to name
        content: "Physical exercises",
        description: "Regular physical activity strengthens the body, improves flexibility, and supports mental well-being.",
        img: Exercise,
        aosDelay: "700",
        link: "/exercises",
    },
    {
        name: "Games for Fun", // Changed from title to name
        content: "Play games to release your stress",
        description: "Engaging in short, fun games offers a quick mental break and boosts creativity.",
        img: Games,
        aosDelay: "700",
        link: "/Bubble",
    },
    {
        name: "Books and Thoughts", // Changed from title to name
        content: "Read books to gain knowledge",
        description: "Reading expands perspectives and inspires thoughtful reflection.",
        img: Books,
        aosDelay: "700",
        link: "/books",
    },
    {
        name: "Diary", // Changed from title to name
        content: "Diary for mental health",
        description: "Writing in a diary provides a private space to express emotions and reflect.",
        img: Diary,
        aosDelay: "700",
        link: "https://repo-frontend-0ixl.onrender.com/",
    },
    {
        name: "Videos for Relief", // Changed from title to name
        content: "Watch videos to release stress",
        description: "Discover stress-relief techniques to bring calm and balance.",
        img: Video,
        aosDelay: "700",
        link: "https://youtube.com/playlist?list=PLWlTX25IDqIz4Ad4_ZvTQ_rM07Lkr7g-4&si=tEy9dzygmcYuXWM0",
    },
];

const HeroCard = ({ userId }) => {
    const [serviceProgress, setServiceProgress] = useState({});

    const handleCardClick = async (name) => {
        try {
            // Send a request to the server to increment the progress
            const response = await axios.post('http://localhost:5000/api/activity/increment', {
                userId,
                name,
            });

            // Update the progress in the state after successful increment
            if (response.data.success) {
                setServiceProgress(prev => ({
                    ...prev,
                    [name]: response.data.progress,
                }));
            }
        } catch (error) {
            console.error('Error incrementing progress', error);
        }
    };

    return (
        <section className="bg-blue-500">
            <div className="container">
                <div className="min-h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                        {ServiceData.map((data, index) => (
                            <Link
                                key={index}
                                to={data.link}
                                onClick={() => handleCardClick(data.name)} // Increment progress on click
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className="cursor-pointer min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                            >
                                <img src={data.img} alt={data.name} className="text-7xl" />
                                <h1>{data.name}</h1> {/* Changed from title to name */}
                                <p>{data.content}</p>
                                <p className="text-sm">{data.description}</p>
                                <p className="text-sm">Progress: {serviceProgress[data.name] || 0}</p> {/* Changed from clicks to progress */}
                            </Link>
                        ))}
                    </div>

                    <img
                        src={wave}
                        alt=""
                        className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroCard;


