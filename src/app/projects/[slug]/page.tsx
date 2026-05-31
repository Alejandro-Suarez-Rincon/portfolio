import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { StandardTemplate } from '@/modules/projects/templates/standard';
import { WideTemplate } from '@/modules/projects/templates/wide';
import { MinimalTemplate } from '@/modules/projects/templates/minimal';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      title: project.name,
      description: project.shortDescription,
      images: project.thumbnail ? [project.thumbnail] : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  switch (project.template) {
    case 'wide':
      return <WideTemplate project={project} />;
    case 'minimal':
      return <MinimalTemplate project={project} />;
    case 'standard':
    default:
      return <StandardTemplate project={project} />;
  }
}
