export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About Me', href: '#about' },
  { id: 3, name: 'Achievements', href: '#achievements' },
  { id: 4, name: 'Projects', href: '#projects' },
  { id: 5, name: 'Contact', href: '#contact' },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Mrs. Siti Sundari',
    position: 'Science Teacher, SMPN 14 Surabaya',
    img: 'assets/review1.png',
    review:
      'Firly is a highly creative student with an excellent balance between logic and imagination. Her ability to combine coding, animation, and design makes her stand out in every project.',
  },
  {
    id: 2,
    name: 'Muhammad Ghazi Alghifari',
    position: 'Teammate & Creative Partner',
    img: 'assets/review2.png',
    review:
      'Firly is the kind of person who can turn simple ideas into something visually fun and meaningful. Her animation style is adorable and her coding skills keep improving every day.',
  },
  {
    id: 3,
    name: 'Alvito Diaz Aviliano',
    position: 'Competition Peer & Collaborator',
    img: 'assets/review3.png',
    review:
      'Working with Firly feels like mixing logic and art perfectly. She’s calm, talented, and knows how to make small projects feel alive — whether in Python games or web animations.',
  },
];

export const myProjects = [
  {
    title: 'GEAR — 2D Education Game with Python',
    desc: 'A small 2D education game built with Python and Pygame. The game features simple movement, collectibles, and background music, designed to show creative storytelling through code.',
    subdesc:
      'This project reflects my journey as a Python game developer — where logic, art, and sound blend into one fun experience.',
    href: '#',
    texture: '/textures/project/pyadventure.mp4',
    logo: '/assets/project-pyadventure.png',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px #38BDF84D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'Pygame', path: '/assets/pygame.svg' },
      { id: 3, name: 'Pixel Art', path: '/assets/pixelart.svg' },
    ],
  },
  {
    title: 'Mini Comic & Animation Project — "Dream Sequence"',
    desc: 'A short digital animation created frame-by-frame using Krita. The animation tells a story of dreams and imagination, emphasizing expression and timing.',
    subdesc:
      'As a beginner animator, I focused on smooth motion, mood lighting, and emotional flow to bring the character to life.',
    href: '#',
    texture: '/textures/project/dreamsequence.mp4',
    logo: '/assets/project-anim.png',
    logoStyle: {
      backgroundColor: '#1E1B4B',
      border: '0.2px solid #312E81',
      boxShadow: '0px 0px 60px 0px #818CF84D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Krita', path: '/assets/krita.svg' },
      { id: 2, name: 'Animation', path: '/assets/animation.svg' },
      { id: 3, name: 'Storytelling', path: '/assets/story.svg' },
    ],
  },
  {
    title: 'Sco-Mart — School Cooperative Website',
    desc: 'A web-based cooperative platform to manage product catalogs and student orders. This was my first large-scale school project and research presentation.',
    subdesc:
      'Built using Laravel, MySQL, and Bootstrap with responsive layout and functional backend for product management.',
    href: '#',
    texture: '/textures/project/scomart.mp4',
    logo: '/assets/project-scomart.png',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px #38BDF84D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Laravel', path: '/assets/laravel.svg' },
      { id: 2, name: 'MySQL', path: '/assets/mysql.svg' },
      { id: 3, name: 'Bootstrap', path: '/assets/bootstrap.svg' },
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title_en: '1st Place — Best Poster Award (Student Research Competition)',
    title_id: 'Juara 1 — Lomba Best Poster Peneliti Pelajar',
    year: '2025',
    details_en:
      'Won the Best Poster Award in the Student Research Competition organized by the Surabaya City Department of Education.',
    details_id:
      'Meraih juara 1 kategori Best Poster dalam Lomba Peneliti Pelajar yang diselenggarakan oleh Dinas Pendidikan Kota Surabaya.',
  },
  {
    id: 2,
    title_en: '2nd Place — Kids Scientist Scientific Writing Competition',
    title_id: 'Juara 2 — Lomba Karya Tulis Ilmiah Kids Scientist',
    year: '2024',
    details_en:
      'Achieved 2nd place in the Kids Scientist city-level scientific writing competition organized by the University of Wijaya Putra Surabaya.',
    details_id:
      'Meraih juara 2 dalam Lomba Karya Tulis Ilmiah Kids Scientist tingkat kota yang diselenggarakan oleh Universitas Wijaya Putra Surabaya.',
  },
];


export const workExperiences = [
  {
    id: 1,
    name: 'Independent Creator',
    pos: 'Animator & Python Game Developer',
    duration: '2022 - Present',
    title:
      'Exploring creative coding through animation and game design. I enjoy combining storytelling and programming into interactive works.',
    icon: '/assets/pygame.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'School Research Project (Sco-Mart)',
    pos: 'Lead Web Developer',
    duration: '2024 - Present',
    title:
      'Designed and built the Sco-Mart web platform for school cooperative management as part of a research and innovation project.',
    icon: '/assets/laravel.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: '9G Class Website',
    pos: 'Frontend Developer & Designer',
    duration: '2023 - 2024',
    title:
      'Developed an interactive website for class information, documentation, and creative projects using pure HTML, CSS, and JS.',
    icon: '/assets/html-js.svg',
    animation: 'salute',
  },
];
