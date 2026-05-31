import type { Education } from '@/types/routes';

export const education: Education[] = [
  {
    institution: 'Corporación Universitaria Minuto de Dios',
    degree: 'Big Data Specialization',
    period: 'March 2025 – March 2026',
    status: 'Graduated',
    description:
      'Specialization focused on large-scale data processing, distributed systems, and data engineering pipelines.',
    translations: {
      es: {
        degree: 'Especialización en Big Data',
        status: 'Graduado',
        description:
          'Especialización enfocada en procesamiento de datos a gran escala, sistemas distribuidos y pipelines de ingeniería de datos.',
      },
    },
  },
  {
    institution: 'Fundación Universitaria Juan de Castellanos',
    degree: 'Systems Engineering',
    period: 'February 2020 – July 2024',
    status: 'Graduated',
    description:
      'Bachelor\'s degree covering software engineering, database design, networks, algorithms, and systems architecture.',
    translations: {
      es: {
        degree: 'Ingeniería de Sistemas',
        status: 'Graduado',
        description:
          'Pregrado que cubre ingeniería de software, diseño de bases de datos, redes, algoritmos y arquitectura de sistemas.',
      },
    },
  },
  {
    institution: 'Institución Educativa Técnico Industrial de Tibasosa',
    degree: 'High School Diploma',
    period: '2014 – 2019',
    status: 'Graduated',
    translations: {
      es: {
        degree: 'Bachillerato Técnico Industrial',
        status: 'Graduado',
      },
    },
  },
];
