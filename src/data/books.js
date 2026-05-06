const coverPool = [
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=700&q=80'
];

const catalogByCategory = {
  'Self Help': [
    { title: 'Atomic Habits for Daily Discipline', author: 'James Clear' },
    { title: 'Mindset for Growth', author: 'Carol Dweck' },
    { title: '7 Habits in Practice', author: 'Stephen Covey' },
    { title: 'The Power of Tiny Wins', author: 'Lena Brooks' },
    { title: 'Deep Work Essentials', author: 'Cal Newport' },
    { title: 'Think Better, Live Better', author: 'Rahul Sinha' },
    { title: 'Morning Routine Mastery', author: 'Nisha Verma' },
    { title: 'Focus Without Burnout', author: 'Arjun Mehta' },
    { title: 'Resilience Every Day', author: 'Priya Nair' },
    { title: 'The Clarity Workbook', author: 'Neel Shah' },
    { title: 'Goal Setting Blueprint', author: 'Anita Kapoor' },
    { title: 'Calm Mind, Strong Life', author: 'Maya Dutt' },
    { title: 'Productivity by Design', author: 'Vikram Rao' },
    { title: 'Build Better Systems', author: 'Harsh Malik' },
    { title: 'One Percent Improvement', author: 'Sara Menon' }
  ],
  Negotiation: [
    { title: 'The Negotiation Playbook', author: 'Chris Voss' },
    { title: 'Strategic Bargaining', author: 'Anil Deshmukh' },
    { title: 'Confident Conversations', author: 'Tina Roy' },
    { title: 'Deal-Making Basics', author: 'Samar Khanna' },
    { title: 'High-Stakes Negotiation', author: 'Olivia Grant' },
    { title: 'Win-Win Agreements', author: 'Kunal Pratap' },
    { title: 'Negotiation for Managers', author: 'Ritika Anand' },
    { title: 'Persuasion at the Table', author: 'Martin Hale' },
    { title: 'Price Talks That Work', author: 'Ishita Sen' },
    { title: 'Negotiating with Empathy', author: 'Jacob Ellis' },
    { title: 'Conflict to Consensus', author: 'Pooja Iyer' },
    { title: 'Business Negotiation Toolkit', author: 'Rohit Chandra' },
    { title: 'Negotiation Casebook', author: 'Arvind Kaul' },
    { title: 'Difficult Conversations at Work', author: 'Nina Parker' },
    { title: 'The Closing Advantage', author: 'Mohit Batra' }
  ],
  Novel: [
    { title: 'Riverside Letters', author: 'Asha Bedi' },
    { title: 'City of Monsoon', author: 'Rohan Gupta' },
    { title: 'Shadows in Summer', author: 'Leela Das' },
    { title: 'The Last Train Home', author: 'Imran Ali' },
    { title: 'Borrowed Time', author: 'Nandita Bose' },
    { title: 'Dust and Devotion', author: 'Farhan Khan' },
    { title: 'Paper Boats', author: 'Mitali Jain' },
    { title: 'A House by the Banyan Tree', author: 'Dev Malhotra' },
    { title: 'Echoes of Winter', author: 'Aditi Chawla' },
    { title: 'When the Lamps Go Out', author: 'S. K. Nair' },
    { title: 'Blue Sky Evenings', author: 'Yash Mehra' },
    { title: 'The Quiet Street', author: 'Rhea Dutta' },
    { title: 'A Long Way from Home', author: 'Kabir Joshi' },
    { title: 'Sea of Small Things', author: 'Ananya Suri' },
    { title: 'The Hidden Courtyard', author: 'Pratap Kulkarni' }
  ],
  Romantic: [
    { title: 'Letters to You', author: 'Sonia Arora' },
    { title: 'Coffee in the Rain', author: 'Aman Gill' },
    { title: 'Hearts in Delhi', author: 'Mira Talwar' },
    { title: 'A Summer Promise', author: 'Vihaan Kapoor' },
    { title: 'When We Met Again', author: 'Ira Menon' },
    { title: 'The Bookshop Romance', author: 'Aarav Sethi' },
    { title: 'Love in the Hills', author: 'Tara Sood' },
    { title: 'You and the Monsoon', author: 'Nikhil Anand' },
    { title: 'A Soft Place to Fall', author: 'Reema Chopra' },
    { title: 'Two Tickets to Jaipur', author: 'Karan Nayak' },
    { title: 'Our Last First Date', author: 'Aisha Gill' },
    { title: 'Forever Starts Here', author: 'Rudra Banerjee' },
    { title: 'The Wedding Season', author: 'Pallavi Singh' },
    { title: 'Moonlight on the Terrace', author: 'Kriti Malhotra' },
    { title: 'The Road Back to Love', author: 'Sameer Dhawan' }
  ],
  Influence: [
    { title: 'Influence Principles for Leaders', author: 'Robert Cialdini' },
    { title: 'Psychology of Persuasion', author: 'Naomi Reeves' },
    { title: 'Trust and Credibility', author: 'Sahil Agrawal' },
    { title: 'Storytelling That Moves People', author: 'Meera Jain' },
    { title: 'Social Proof in Action', author: 'Arun Varma' },
    { title: 'Decision Framing', author: 'Liam Foster' },
    { title: 'Authority Without Arrogance', author: 'Puneet Bansal' },
    { title: 'Ethical Persuasion', author: 'Mansi Kohli' },
    { title: 'Behavior Design Basics', author: 'Trisha Reed' },
    { title: 'Convince with Clarity', author: 'Rajat Taneja' },
    { title: 'Influence at Work', author: 'Sonia Patel' },
    { title: 'The Persuasion Toolkit', author: 'Neil Turner' },
    { title: 'Leading Through Ideas', author: 'Ankit Jain' },
    { title: 'Change Minds Respectfully', author: 'Deepa Mohan' },
    { title: 'Signals That Build Trust', author: 'Tarun Goel' }
  ],
  'Public Speaking': [
    { title: 'Speak with Confidence', author: 'Matt Abrahams' },
    { title: 'Stage Presence 101', author: 'Ishan Verma' },
    { title: 'Present Like a Pro', author: 'Sonal Khurana' },
    { title: 'Voice and Delivery Essentials', author: 'Nikita Rao' },
    { title: 'Public Speaking for Beginners', author: 'Ravi S. Menon' },
    { title: 'Storytelling on Stage', author: 'Ankita Paul' },
    { title: 'Persuasive Presentations', author: 'Madhav Nanda' },
    { title: 'Speak to Inspire', author: 'Rina Kaushik' },
    { title: 'Body Language for Speakers', author: 'Kushal Arora' },
    { title: 'Powerful Opening Lines', author: 'Aditi Kapoor' },
    { title: 'Handle Q and A Smoothly', author: 'Piyush Rawat' },
    { title: 'Speak Without Notes', author: 'Kabir Luthra' },
    { title: 'Executive Presentation Skills', author: 'Naina Verghese' },
    { title: 'Audience-First Speaking', author: 'Harleen Saini' },
    { title: 'Mastering the Mic', author: 'Varun Bedi' }
  ]
};

const categoryText = {
  'Self Help': 'A practical self-help guide focused on daily growth, focus, and personal discipline.',
  Negotiation:
    'A negotiation title with clear frameworks for better conversations, deals, and outcomes.',
  Novel:
    'A story-driven novel crafted for immersive reading, memorable characters, and emotional depth.',
  Romantic:
    'A romantic fiction title with heartfelt moments, meaningful relationships, and warm storytelling.',
  Influence:
    'A leadership and influence book focused on persuasion, trust, and practical communication skills.',
  'Public Speaking':
    'A public speaking guide designed to improve confidence, structure, and delivery for real audiences.'
};

export const categories = [
  'All',
  'Self Help',
  'Negotiation',
  'Novel',
  'Romantic',
  'Influence',
  'Public Speaking'
];

export const books = Object.entries(catalogByCategory).flatMap(
  ([category, items], categoryIndex) =>
    items.map((item, index) => ({
      id: `bk-${String(categoryIndex + 1).padStart(2, '0')}${String(index + 1).padStart(2, '0')}`,
      title: item.title,
      author: item.author,
      category,
      price: 199 + categoryIndex * 40 + (index % 5) * 35,
      rating: Number((4.1 + ((categoryIndex + index) % 6) * 0.12).toFixed(1)),
      image: coverPool[(categoryIndex * 2 + index) % coverPool.length],
      description: categoryText[category],
      featured: index < 2
    }))
);
