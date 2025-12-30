import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPageModular',
  title: 'Landing Page (Modulare)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Pagina',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO: Titolo',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO: Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'theme',
      title: 'Tema Colori',
      type: 'string',
      options: {
        list: [
          {title: 'Corporate (Blu)', value: 'corporate'},
          {title: 'Sostenibilità (Verde)', value: 'sustainability'},
          {title: 'Energia (Arancione)', value: 'energy'},
        ],
        layout: 'radio',
      },
      initialValue: 'corporate',
    }),
    defineField({
      name: 'sections',
      title: 'Sezioni',
      type: 'array',
      description: 'Aggiungi e riordina le sezioni della landing page',
      of: [
        {type: 'hero'},
        {type: 'cta'},
        {type: 'form'},
        {type: 'testimonials'},
        {type: 'features'},
        {type: 'stats'},
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data Pubblicazione',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      theme: 'theme',
    },
    prepare({title, slug, theme}) {
      return {
        title: title,
        subtitle: `/modular/${slug} • ${theme}`,
      }
    },
  },
})