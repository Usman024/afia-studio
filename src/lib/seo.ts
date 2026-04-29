import { type Metadata } from 'next'

import { siteConfig } from '@/lib/siteConfig'

type SeoEntry = {
  path: string
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    type: 'website' | 'article'
  }
}

const defaultKeywords = [
  siteConfig.brand.name,
  'web development agency',
  'software development studio',
  'Next.js development',
  'Pakistan',
]

export const seoMeta = {
  home: {
    path: '/',
    title: 'Award-Winning Development Studio in Pakistan',
    description: 'We are a development studio working at the intersection of design and technology.',
    keywords: [
      ...defaultKeywords,
      'web design',
      'product development',
      'UI UX design',
    ],
    openGraph: {
      title: `Award-Winning Development Studio in Pakistan | ${siteConfig.brand.name}`,
      description: 'We are a development studio working at the intersection of design and technology.',
      type: 'website',
    },
  },
  about: {
    path: '/about',
    title: 'About Us',
    description:
      'Learn more about the Skayly team, our collaborative approach, and the values behind our digital product work.',
    keywords: [
      ...defaultKeywords,
      'about Skayly',
      'software agency team',
      'development studio Pakistan',
    ],
    openGraph: {
      title: `About ${siteConfig.brand.name}`,
      description:
        'Learn more about the Skayly team, our collaborative approach, and the values behind our digital product work.',
      type: 'website',
    },
  },
  contact: {
    path: '/contact',
    title: 'Contact Us',
    description: 'Get in touch with Skayly to discuss your next website, app, or product development project.',
    keywords: [
      ...defaultKeywords,
      'contact Skayly',
      'hire web developers',
      'project inquiry',
    ],
    openGraph: {
      title: `Contact ${siteConfig.brand.name}`,
      description: 'Get in touch with Skayly to discuss your next website, app, or product development project.',
      type: 'website',
    },
  },
  process: {
    path: '/process',
    title: 'Our Process',
    description:
      'See how Skayly approaches discovery, product development, and delivery for modern digital experiences.',
    keywords: [
      ...defaultKeywords,
      'development process',
      'product strategy',
      'delivery workflow',
    ],
    openGraph: {
      title: `${siteConfig.brand.name} Process`,
      description:
        'See how Skayly approaches discovery, product development, and delivery for modern digital experiences.',
      type: 'website',
    },
  },
  work: {
    path: '/work',
    title: 'Our Work',
    description:
      'Explore Skayly case studies and product work across websites, applications, and custom digital platforms.',
    keywords: [
      ...defaultKeywords,
      'case studies',
      'client work',
      'software portfolio',
    ],
    openGraph: {
      title: `${siteConfig.brand.name} Case Studies`,
      description:
        'Explore Skayly case studies and product work across websites, applications, and custom digital platforms.',
      type: 'website',
    },
  },
  blog: {
    path: '/blog',
    title: 'Blog',
    description:
      'Read insights, articles, and updates from the Skayly team on design, development, and digital product work.',
    keywords: [
      ...defaultKeywords,
      'development blog',
      'web development articles',
      'design insights',
    ],
    openGraph: {
      title: `${siteConfig.brand.name} Blog`,
      description:
        'Read insights, articles, and updates from the Skayly team on design, development, and digital product work.',
      type: 'website',
    },
  },
  workFamilyFund: {
    path: '/work/family-fund',
    title: 'FamilyFund Case Study',
    description:
      'See how Skayly supported FamilyFund with web development, custom CMS work, and SEO-focused improvements.',
    keywords: [
      ...defaultKeywords,
      'FamilyFund case study',
      'custom CMS',
      'SEO project',
    ],
    openGraph: {
      title: `FamilyFund Case Study | ${siteConfig.brand.name}`,
      description:
        'See how Skayly supported FamilyFund with web development, custom CMS work, and SEO-focused improvements.',
      type: 'article',
    },
  },
  workPhobia: {
    path: '/work/phobia',
    title: 'Phobia Case Study',
    description:
      'Discover how Skayly helped Phobia improve onboarding and app experience for a niche dating product.',
    keywords: [
      ...defaultKeywords,
      'Phobia case study',
      'app onboarding',
      'mobile product development',
    ],
    openGraph: {
      title: `Phobia Case Study | ${siteConfig.brand.name}`,
      description:
        'Discover how Skayly helped Phobia improve onboarding and app experience for a niche dating product.',
      type: 'article',
    },
  },
  workUnseal: {
    path: '/work/unseal',
    title: 'Unseal Case Study',
    description:
      'Learn how Skayly delivered blockchain-focused product infrastructure for the Unseal platform.',
    keywords: [
      ...defaultKeywords,
      'Unseal case study',
      'blockchain development',
      'health platform',
    ],
    openGraph: {
      title: `Unseal Case Study | ${siteConfig.brand.name}`,
      description:
        'Learn how Skayly delivered blockchain-focused product infrastructure for the Unseal platform.',
      type: 'article',
    },
  },
  blogOfficeLessons: {
    path: '/blog/3-lessons-we-learned-going-back-to-the-office',
    title: '3 Lessons We Learned Going Back to the Office',
    description:
      'A Skayly blog post on return-to-office lessons, team dynamics, and what changed after moving back on-site.',
    keywords: [
      ...defaultKeywords,
      'return to office',
      'remote work',
      'team culture',
    ],
    openGraph: {
      title: `3 Lessons We Learned Going Back to the Office | ${siteConfig.brand.name}`,
      description:
        'A Skayly blog post on return-to-office lessons, team dynamics, and what changed after moving back on-site.',
      type: 'article',
    },
  },
  blogComponentNaming: {
    path: '/blog/a-short-guide-to-component-naming',
    title: 'A Short Guide to Component Naming',
    description:
      'A Skayly article on naming components clearly and building maintainable front-end codebases.',
    keywords: [
      ...defaultKeywords,
      'component naming',
      'frontend architecture',
      'developer tips',
    ],
    openGraph: {
      title: `A Short Guide to Component Naming | ${siteConfig.brand.name}`,
      description:
        'A Skayly article on naming components clearly and building maintainable front-end codebases.',
      type: 'article',
    },
  },
  blogFutureWeb: {
    path: '/blog/future-of-web-development',
    title: 'The Future of Web Development: Our Predictions for 2025',
    description:
      'Explore Skayly’s predictions for AI-assisted development, rendering patterns, and JavaScript runtimes.',
    keywords: [
      ...defaultKeywords,
      'future of web development',
      'AI development',
      'JavaScript trends',
    ],
    openGraph: {
      title: `The Future of Web Development | ${siteConfig.brand.name}`,
      description:
        'Explore Skayly’s predictions for AI-assisted development, rendering patterns, and JavaScript runtimes.',
      type: 'article',
    },
  },
} satisfies Record<string, SeoEntry>

export type SeoPageKey = keyof typeof seoMeta

export function getPageMetadata(page: SeoPageKey): Metadata {
  const entry = seoMeta[page]
  const absoluteUrl = new URL(entry.path, siteConfig.siteUrl).toString()
  const previewImageUrl = `${siteConfig.siteUrl}/images/opengraph-image.png`

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: entry.openGraph.title,
      description: entry.openGraph.description,
      url: absoluteUrl,
      siteName: siteConfig.brand.name,
      locale: 'en_US',
      type: entry.openGraph.type,
      images: [
        {
          url: previewImageUrl,
          width: 1200,
          height: 630,
          alt: `${entry.openGraph.title} preview image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.openGraph.title,
      description: entry.openGraph.description,
      images: [previewImageUrl],
    },
  }
}
