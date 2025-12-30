import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'features',
  title: 'Sezione Features',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Titolo Sezione',
      type: 'string',
      initialValue: 'Perché Scegliere Bufaga',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Descrizione',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Griglia 2 Colonne', value: 'grid-2'},
          {title: 'Griglia 3 Colonne', value: 'grid-3'},
          {title: 'Lista Verticale', value: 'list'},
        ],
      },
      initialValue: 'grid-3',
    }),
    defineField({
      name: 'items',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icona (emoji)',
              type: 'string',
              description: 'Es: 🌱, ⚡, 📊',
            },
            {
              name: 'title',
              title: 'Titolo',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrizione',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
            },
            prepare({title, icon}) {
              return {
                title: `${icon || '•'} ${title}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(2).max(12),
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({items}) {
      return {
        title: 'Features',
        subtitle: `${items?.length || 0} features`,
      }
    },
  },
})