import type { Education } from '@/types/routes';

// Educación — agrega o edita entradas aquí para que aparezcan en el portfolio.
// Los campos opcionales son: status y description.
export const education: Education[] = [
  {
    institution: 'Corporación Universitaria Minuto de Dios',
    degree: 'Big Data Specialization',
    period: 'March 2025 – March 2026',
    status: 'Completed',
    description:
      'Specialization focused on large-scale data processing, distributed systems, and data engineering pipelines.',
  },
  {
    institution: 'Fundación Universitaria Juan de Castellanos',
    degree: 'Systems Engineering',
    period: 'February 2020 – July 2024',
    status: 'Graduated',
    description:
      'Bachelor\'s degree covering software engineering, database design, networks, algorithms, and systems architecture.',
  },
  {
    institution: 'Institución Educativa Técnico Industrial de Tibasosa',
    degree: 'High School Diploma',
    period: '2014 – 2019',
    status: 'Graduated',
  },
];
