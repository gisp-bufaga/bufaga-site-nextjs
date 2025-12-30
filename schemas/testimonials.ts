import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Sezione Testimonials',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Titolo Sezione',
      type: 'string',
      initialValue: 'Cosa Dicono i Nostri Clienti',
    }),
    defineField({
      name: 'items',
      title: 'Testimonianze',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nome',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'company',
              title: 'Azienda',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Ruolo',
              type: 'string',
            },
            {
              name: 'quote',
              title: 'Citazione',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required().max(300),
            },
            {
              name: 'image',
              title: 'Foto (opzionale)',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'company',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(10),
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({items}) {
      return {
        title: 'Testimonials',
        subtitle: `${items?.length || 0} testimonianze`,
      }
    },
  },
})
