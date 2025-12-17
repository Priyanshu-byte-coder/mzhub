export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  year: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Temple of Divine Wisdom',
    category: 'Hindu Temple',
    description: 'AI-powered spiritual guidance platform serving 50,000+ devotees worldwide with personalized teachings and meditation support.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
    year: '2024',
    tags: ['AI Assistant', 'Mobile App', 'Content Archive'],
  },
  {
    id: '2',
    title: 'Sacred Heart Community',
    category: 'Christian Church',
    description: 'Digital transformation of a 100-year-old church, bringing sermons and community engagement to the digital age.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop',
    year: '2023',
    tags: ['Live Streaming', 'Community Portal', 'Prayer Requests'],
  },
  {
    id: '3',
    title: 'Masjid Al-Noor',
    category: 'Islamic Center',
    description: 'Comprehensive platform for prayer times, Quran study, and community events management for a growing Muslim community.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
    year: '2024',
    tags: ['Prayer Times', 'Quran Study', 'Event Management'],
  },
  {
    id: '4',
    title: 'Zen Meditation Center',
    category: 'Buddhist Monastery',
    description: 'Mindfulness and meditation platform with guided sessions, teachings archive, and virtual sangha community.',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop',
    year: '2023',
    tags: ['Meditation', 'Virtual Sangha', 'Teachings Archive'],
  },
  {
    id: '5',
    title: 'Shalom Synagogue',
    category: 'Jewish Community',
    description: 'Torah study platform with AI-powered insights, community calendar, and multi-generational engagement tools.',
    image: 'https://images.unsplash.com/photo-1609157012148-9f4a97fa6a2e?w=800&h=600&fit=crop',
    year: '2024',
    tags: ['Torah Study', 'Community Calendar', 'Family Portal'],
  },
  {
    id: '6',
    title: 'Gurudwara Sahib',
    category: 'Sikh Temple',
    description: 'Digital platform for Gurbani teachings, langar coordination, and global Sikh community connection.',
    image: 'https://images.unsplash.com/photo-1604608672516-f1b9b1a4a0a5?w=800&h=600&fit=crop',
    year: '2023',
    tags: ['Gurbani', 'Langar Management', 'Global Community'],
  },
]
