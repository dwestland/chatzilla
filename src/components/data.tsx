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
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: "/img/rock-massage.jpg",
  bullets: [
    {
      title: "Booking Assistant",
      desc: "Turns website visitors into customers effectively.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Promote your services",
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
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: "/img/karate.jpg",
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
