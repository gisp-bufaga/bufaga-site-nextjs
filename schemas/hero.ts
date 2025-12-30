import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline Principale',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
      description: 'Titolo principale (max 80 caratteri)',
    }),
    defineField({
      name: 'subheadline',
      title: 'Sottotitolo',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(200),
      description: 'Testo di supporto (max 200 caratteri)',
    }),
    defineField({
      name: 'image',
      title: 'Immagine Hero',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Testo Alternativo',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Immagine a Destra', value: 'imageRight'},
          {title: 'Immagine a Sinistra', value: 'imageLeft'},
          {title: 'Immagine di Sfondo', value: 'background'},
          {title: 'Centrato', value: 'centered'},
        ],
        layout: 'radio',
      },
      initialValue: 'imageRight',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      media: 'image',
    },
  },
})
