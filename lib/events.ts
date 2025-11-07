import { Event } from '@/types/event';

export const events: Event[] = [
  {
    id: '1',
    title: '1st Edition AustroVis Workshop',
    date: new Date('2023-10-16'),
    location: 'Vienna, Austria',
    university: 'University of Vienna',
    description: 'The first edition of the AustroVis Workshop.',
    speakers: ['Torsten Möller'],
    materials: {
      slides: '',
      recording: '',
    },
  },
  {
    id: '2',
    title: '2nd Edition AustroVis Workshop',
    date: new Date('2024-02-20'),
    location: 'Vienna, Austria',
    university: 'TU Wien',
    description: 'The second edition of the AustroVis Workshop.',
    speakers: ['Manuela Waldner'],
    materials: {
      slides: '',
      recording: '',
    },
  },
  {
    id: '3',
    title: '3rd Edition AustroVis Workshop',
    date: new Date('2024-09-30'),
    location: 'Vienna, Austria',
    university: 'VRVis',
    description: 'The third edition of the AustroVis Workshop.',
    speakers: ['Johanna Schmidt'],
    materials: {
      slides: '',
      recording: '',
    },
  },
  {
    id: '4',
    title: '4th Edition AustroVis Workshop',
    date: new Date('2025-02-25'),
    location: 'St. Pölten, Austria',
    university: 'University of Applied Sciences, St. Pölten',
    description: 'The fourth edition of the AustroVis Workshop.',
    speakers: ['Wolfgang Aigner'],
    materials: {
      slides: '',
      recording: '',
    },
  },
  {
    id: '5',
    title: '5th Edition AustroVis Workshop',
    date: new Date('2025-09-25'),
    location: 'Graz, Austria',
    university: 'TU Graz',
    description: 'The fifth edition of the AustroVis Workshop.',
    speakers: ['Alexander Lex'],
    materials: {
      slides: '',
      recording: '',
    },
  },
  {
    id: '6',
    title: '5th Edition AustroVis Workshop',
    date: new Date('2026-02-01'),
    location: 'TBD',
    university: 'TBD',
    description: 'The fifth edition of the AustroVis Workshop.',
    speakers: ['TBA'],
    materials: {
      slides: '',
      recording: '',
    },
  },
];

export function getPastEvents(): Event[] {
  const now = new Date();
  return events.filter(event => event.date < now).sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return events.filter(event => event.date >= now).sort((a, b) => a.date.getTime() - b.date.getTime());
}
