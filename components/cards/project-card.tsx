import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { DotGrid } from "@/components/layout/dot-grid";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  slug: string;
  category: string;
  year: string;
  outcome: string;
  stack: readonly string[];
  image: string;
  imageAlt: string;
  className?: string;
};

function ProjectCard({
  title,
  slug,
  category,
  year,
  outcome,
  stack,
  image,
  imageAlt,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        "group flex flex-col gap-5 outline-none lg:gap-6",
        "focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-dashed border-primary/30 bg-brand-light">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <DotGrid className="pointer-events-none text-brand-dark/10 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/25 to-transparent p-4 sm:p-5">
          <Text
            as="span"
            role="label-sm"
            className="inline-flex rounded-md bg-brand-light/90 px-2 py-1 text-brand-dark backdrop-blur-sm"
          >
            {category} · {year}
          </Text>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-dashed border-primary/25 pb-5">
        <div className="flex items-start justify-between gap-3">
          <Heading as="h3" role="title-md" className="normal-case">
            {title}
          </Heading>
          <ArrowUpRight
            aria-hidden
            className="mt-0.5 size-5 shrink-0 text-primary transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <Text role="body-sm" tone="muted" className="max-w-md">
          {outcome}
        </Text>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item}>
            <Text
              as="span"
              role="label-sm"
              className="inline-flex rounded-md bg-brand-dark/5 px-2.5 py-1 text-brand-dark/70"
            >
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </Link>
  );
}

export { ProjectCard };
export type { ProjectCardProps };
