import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Pagina',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Titolo interno (non visibile sul sito)',
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
      description: 'Es: "industria" per /landing/industria',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO: Titolo',
      type: 'string',
      validation: (Rule) => Rule.max(60),
      description: 'Titolo per Google (max 60 caratteri)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO: Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
      description: 'Descrizione per Google (max 160 caratteri)',
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
      name: 'hero',
      title: 'Sezione Hero',
      type: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form',
      title: 'Form Contatto',
      type: 'form',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data Pubblicazione',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'abTestVariant',
      title: 'Variante A/B Test',
      type: 'string',
      options: {
        list: [
          {title: 'Nessun Test', value: 'none'},
          {title: 'Variante A', value: 'a'},
          {title: 'Variante B', value: 'b'},
        ],
      },
      initialValue: 'none',
      description: 'Usa per A/B testing',
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
        subtitle: `/landing/${slug} • ${theme}`,
      }
    },
  },
})
