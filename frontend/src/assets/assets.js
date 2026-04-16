import man_1 from './man_1.png'
import man_2 from './man_2.png'
import man_3 from './man_3.png'
import sample_img1 from './sample_img1.png'
import sample_img2 from './sample_img2.png'
import sample_img3 from './sample_img3.png'
import star_icon from './star_icon.png'
import rating_star from './rating_star.svg'
import example_1 from  './example_1.png'
import example_2 from './example_2.png'
import example_3 from './example_3.png'
import example_4 from './example_4.png'
import example_5 from './example_5.png'
import example_6 from './example_6.png'
import example_7 from './example_7.png'
import example_8 from './example_8.png'
import example_9 from './example_9.png'
import example_10 from './example_10.png'
import example_11 from './example_11.png'
import example_12 from './example_12.png'
import { FaBolt, FaRocket, FaCrown } from "react-icons/fa"




export const assets = {
  sample_img1,
  star_icon,
  rating_star,
}

export const images = [
  sample_img1,
  sample_img2,
  sample_img3,
]

export const exampleImages = [
  {
    prompt: "create a image of the man with beautifull sceanario",
    image: example_1,
  },
  {
    prompt:"a cat in the iceland",
    image: example_2
  },
  {
    prompt: "Sunset over calm ocean, cinematic lighting",
    image: example_3
  },
  {
    prompt:"Futuristic neon city at night",
    image: example_4
  },
  {
    prompt: "Realistic portrait, soft studio light",
    image: example_5
  },
  {
    prompt: "Cute cartoon robot, pastel colors",
    image: example_6
  },
  {
    prompt: "Majestic dragon in the clouds",
    image: example_7
  },
  {
    prompt: "Astronaut on alien planet",
    image: example_8
  },
  {
    prompt: "Golden retriever puppy, joyful",
    image: example_9
  },
  {
    prompt: "AI brain glow",
    image: example_10
  },
  {
    prompt: "Magic library",
    image: example_11
  },
  {
    prompt: "Moon village",
    image:example_12
  }
]

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
    },
  ];

export const testimonialsData = [
      {
        image:man_1,
        name:'Alex Morgan',
        role:'UI/UX Designer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:man_2,
        name:'Ethan Brooks',
        role:'Social Media Manager',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:man_3,
        name:'Victor Alvarez',
        role:'Frontend Developer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
]

export const plans = [
    {
       id: 'basic',
        price: 99,        // ✅ match backend
        credits: 50,
        desc: 'Best for personal use',
      icon: FaBolt,
    },
    {
        id: 'advanced',
        price: 499,       // ✅ match backend
        credits: 500,
        desc: 'Best for business use',
        icon: FaRocket,
    },
    {
      id: 'business',
      price: 1999,      // ✅ match backend
      credits: 5000,
      desc: 'Best for enterprise use',
      icon: FaCrown,
    },
]
    
