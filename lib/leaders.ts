export type LeaderMessage = {
  /** Heading shown above the message body */
  title: string
  /** Optional pull quote, rendered before paragraphs */
  quote?: string
  /** Body paragraphs */
  paragraphs: string[]
}

export type Leader = {
  id: string
  name: string
  title: string
  photo: string
  /** 1–2 sentence summary used on the leadership profile card */
  bio: string
  /** Full leadership-message content; null for leaders without a published message yet */
  message: LeaderMessage | null
}

export const LEADERS: Leader[] = [
  {
    id: 'founder-kariyappa',
    name: 'Sri H Kariyappa',
    title: 'Founder',
    photo: '/images/leadership/founder-kariyappa.jpg',
    bio: 'The vision and conviction behind the Triveni Group of Institutions — founder of an educational legacy now spanning more than 25 years across North Bengaluru.',
    message: null,
  },
  {
    id: 'trustee-savitramma',
    name: 'Smt B Savitramma',
    title: 'Management Trustee',
    photo: '/images/leadership/trustee-savitramma.jpg',
    bio: 'A long-standing pillar of the Triveni Educational Trust, championing accessible, value-based ICSE education for families across the region.',
    message: null,
  },
  {
    id: 'consultant-nagaraja',
    name: 'Mr K V Nagaraja',
    title: 'Academic Consultant',
    photo: '/images/leadership/consultant-nagaraja.jpg',
    bio: 'A seasoned academic leader committed to building character, confidence and a lifelong passion for learning — well beyond textbooks and classrooms.',
    message: {
      title: 'Guiding Young Minds Towards Excellence',
      quote: 'Education is not only about achieving success in examinations, but about building character, confidence, and a lifelong passion for learning.',
      paragraphs: [
        'Welcome to Triveni Balavikas Central School, an institution committed to nurturing young minds through quality education and holistic development. As an ICSE institution, we believe in creating an academic environment that encourages curiosity, creativity, discipline and independent thinking.',
        'At Triveni Balavikas Central School, our focus goes beyond textbooks and classrooms. We strive to empower students with strong values, leadership qualities, communication skills and the confidence to face the challenges of an ever-changing world. Every child is unique, and our mission is to help each student discover and achieve their fullest potential.',
        'Education is a journey of continuous growth. With the dedicated efforts of our management, teachers, parents and students, we are building a learning community that inspires excellence in academics, sports, arts and life skills. Together, we aim to shape responsible citizens and future leaders of society.',
        'I extend my best wishes to all students for a bright, successful and meaningful future.',
      ],
    },
  },
  {
    id: 'director-arundathi',
    name: 'Mrs Arundathi G',
    title: 'Director',
    photo: '/images/leadership/director-arundathi.jpg',
    bio: 'Committed to nurturing young minds through value-based, future-ready education in a safe, modern, child-friendly campus.',
    message: {
      title: 'A Future-Ready, Value-Based Campus',
      paragraphs: [
        'Triveni Balavikas Central School is committed to nurturing young minds through value-based and future-ready education. Our commitment with the ICSE is clear — to provide a strong academic foundation combined with holistic development. We aim to create an environment where curiosity is encouraged and creativity is celebrated, helping our students discover their true potential.',
        'We have created a safe, modern and child-friendly campus that supports joyful and effective learning. Our well-designed classrooms promote both academic excellence and holistic development. Every aspect of the campus is thoughtfully planned to provide a nurturing and stimulating environment for young learners — aligned with the standards of the ICSE.',
        'With a dedicated team of educators, modern learning practices and a child-centric approach, we strive to make learning meaningful and joyful. We believe that education is a partnership between the school and parents — and together, we can shape confident, responsible and compassionate individuals ready to face the challenges of tomorrow.',
        'As we embark on this journey, we seek your trust and support in building an institution that stands for excellence, integrity and innovation.',
      ],
    },
  },
  {
    id: 'secretary-manjunath',
    name: 'Mr Manjunath K',
    title: 'Secretary',
    photo: '/images/leadership/secretary-manjunath.jpg',
    bio: 'Believes education should serve not only to develop intelligence and skills, but to broaden a child’s outlook and prepare them to be useful to the world at large.',
    message: {
      title: 'Realising the Promise of Development',
      quote: 'Education should be for life, not just for a living.',
      paragraphs: [
        'Welcome to Triveni Balavikas Central School. Education is a process by which people acquire knowledge, skills, habits, values or attitudes. We strongly believe that the word “Education” describes the results of the educational process — and that those results should help people become useful members of society. Hence we focus, primarily, on the moulding of human character and on co-existence with our fellow inhabitants.',
        'The children of today will be the managers of tomorrow’s environment. With the pace at which the explosion of knowledge is rapidly raising what is required of every individual, we at Triveni believe that continually enhancing our learning modules is essential to ensuring our students’ sustenance and success in the days ahead. We have worked wonders, but still have miles to go — and the task ahead of us is never as great as the power behind us.',
        'As a school, we firmly believe that education should be for life, not just for a living. Education should serve not only to develop one’s intelligence and skills, but also to help broaden one’s outlook and to make a person useful to the world at large.',
        'Our academic programmes — which include cross-disciplinary subjects — will develop our children as total individuals, well-equipped for a world that often demands the bridging of several disciplines. Every effort will be made to offer rigorous and relevant learning experiences that engage students fully and prepare them for continued success beyond their schooling phase.',
      ],
    },
  },
]

/**
 * The Principal has a real, published message but no name or photo on file yet.
 * Kept separate from LEADERS so the navbar megamenu only surfaces the 5 board
 * members with photos. The message displays in the "Leadership Messages" section
 * on the About page with a fallback contextual image.
 */
export const PRINCIPAL_MESSAGE_PLACEHOLDER = {
  id: 'message-principal',
  title: 'Principal',
  name: 'The Principal',
  /** Fallback contextual image — replace once a portrait is provided */
  fallbackPhoto: '/images/library-girls-studying.jpg',
  message: {
    title: 'We Don’t Just Teach — We Inspire',
    quote: 'Intelligence plus character — that is the goal of true education.',
    paragraphs: [
      'Welcome to Triveni Balavikas Central School — a place where learning is a journey, not a race; where every child matters, and where values and vision walk hand in hand.',
      'We believe in shaping not just scholars, but strong, thoughtful individuals who are prepared to lead, serve and thrive in a global society. Our focus extends beyond textbooks — we aim to ignite curiosity, foster empathy and nurture resilience in every child who walks through our gates.',
      'With a team of passionate educators and a forward-thinking curriculum, we provide a safe and inclusive environment that encourages questioning, innovation and excellence in all spheres — academics, sports, arts and values.',
      'We take pride in cultivating a school culture that encourages students to dream big, work hard, stay kind, and grow into confident citizens who contribute positively to the world. Together, with the support of parents and the commitment of our staff, we continue to build an institution where learning is a joy — and every child is nurtured to become the best version of themselves.',
    ],
  },
}
