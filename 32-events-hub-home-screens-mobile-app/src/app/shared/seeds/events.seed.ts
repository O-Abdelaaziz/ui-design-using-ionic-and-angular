import {Event} from '../models/event.model';

export const events = [
  {
    id: '1',
    name: 'Comedy Gala Night',
    date: '2025-11-11',
    location: 'New York, USA',
    performers: ['John Mulaney', 'Ali Wong', 'Hassan Minhaj'],
    category_id: '3',
    category_name: 'Comedy',
    image: 'assets/images/gala.jpg',
    description: 'A night filled with laughter featuring top comedians John Mulaney, Ali Wong, and Hassan Minhaj at The Comedy Club in New York City. Perfect for those looking to enjoy some top-notch stand-up comedy.',
    featured: true
  },
  {
    id: '2',
    name: 'Sunburn Festival',
    date: '2025-11-11',
    location: 'Goa, India',
    headliners: ['Martin Garrix', 'DJ Snake', 'The Chainsmokers'],
    category_id: '1',
    category_name: 'Music',
    image: 'assets/images/sunburn.jpg',
    description: 'India’s premier electronic music festival, Sunburn Festival in Goa, brings top international DJs like Martin Garrix, DJ Snake, and The Chainsmokers for an electrifying three-day event. A must-attend for EDM fans.',
    featured: false
  },
  {
    id: '3',
    name: 'A.R. Rahman Live',
    date: '2025-11-12',
    location: 'Chennai, India',
    headliners: ['A.R. Rahman'],
    category_id: '1',
    category_name: 'Music',
    image: 'assets/images/rahman.jpg',
    description: 'Experience the magical music of A.R. Rahman live in Chennai. A.R. Rahman, the Oscar-winning composer, will perform his greatest hits in an unforgettable concert.',
    featured: true
  },
  {
    id: '4',
    name: 'Shahrukh Khan Show',
    date: '2025-11-12',
    location: 'Mumbai, India',
    headliners: ['Shahrukh Khan'],
    category_id: '2',
    category_name: 'Film',
    image: 'assets/images/srk.jpg',
    description: 'Join the King of Bollywood, Shahrukh Khan, in Mumbai for a spectacular live show. Expect a night of glamour, entertainment, and memorable performances from one of India’s biggest stars.',
    featured: false
  },
  {
    id: '5',
    name: 'Arijit Singh Concert',
    date: '2025-11-13',
    location: 'Kolkata, India',
    headliners: ['Arijit Singh'],
    category_id: '1',
    category_name: 'Music',
    image: 'assets/images/arijit.jpg',
    description: 'Catch the soulful voice of Arijit Singh live in concert in Kolkata. The renowned playback singer will perform his most beloved songs, promising an evening of beautiful melodies and heartfelt lyrics.',
    featured: false
  },
];
