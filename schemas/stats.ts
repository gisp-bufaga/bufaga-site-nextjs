import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stats',
  title: 'Sezione Statistiche',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Colore Sfondo',
      type: 'string',
      options: {
        list: [
          {title: 'Blu Scuro', value: 'dark'},
          {title: 'Bianco', value: 'light'},
          {title: 'Tema Colore', value: 'theme'},
        ],
      },
      initialValue: 'dark',
    }),
    defineField({
      name: 'items',
      title: 'Statistiche',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Numero',
              type: 'string',
              description: 'Es: 90%, 50+, 24/7',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Es: Riduzione Inquinamento',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              number: 'number',
              label: 'label',
            },
            prepare({number, label}) {
              return {
                title: number,
                subtitle: label,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(2).max(4),
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({items}) {
      return {
        title: 'Statistiche',
        subtitle: `${items?.length || 0} stats`,
      }
    },
  },
})