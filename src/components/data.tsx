import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

// import benefitOneImg from "/img/karate.jpg";
// import benefitTwoImg from "/img/karate.jpg";;

const benefitOne = {
  title: "Chattastic: Your Website's Wingman",
  desc: "Boost your website's charisma with Chattastic. This smart bot not only knows your business inside-out but turns casual visitors into loyal customers, all in real-time.",
  image: "/img/rock-massage.jpg",
  imgPos: "left",
  bullets: [
    {
      title: "Booking Assistant",
      desc: "Turns website visitors into customers effectively.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Promotes your services",
      desc: "Showcases your services seamlessly to potential customers.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Smart Conversations",
      desc: "AI-powered chatbots offering smart, human-like discussions.",
      icon: <FaceSmileIcon />,
    },
  ],
};

const benefitTwo = {
  title: "AI-Powered Conversations",
  desc: "Chattastic isn't just any bot. With GPT-driven chat, every interaction feels human, guiding users from query to appointment effortlessly.",
  image: "/img/karate.jpg",
  imgPos: "right",
  bullets: [
    {
      title: "Powered by AI",
      desc: "Utilizes GPT Large Language Model for smooth and natural conversation.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Boost Website Engagement",
      desc: "Transforms passive website visits into active customer.",
      icon: <BanknotesIcon />,
    },
    {
      title: "Simple Installation Process",
      desc: "Effortless integration with your existing website setup.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
