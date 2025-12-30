import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'primaryText',
      title: 'Testo Pulsante Primario',
      type: 'string',
      validation: (Rule) => Rule.required().max(30),
      description: 'Es: "Richiedi Demo", "Scopri di Più"',
    }),
    defineField({
      name: 'primaryLink',
      title: 'Link Pulsante Primario',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'URL o #id-sezione',
    }),
    defineField({
      name: 'secondaryText',
      title: 'Testo Pulsante Secondario',
      type: 'string',
      validation: (Rule) => Rule.max(30),
      description: 'Opzionale',
    }),
    defineField({
      name: 'secondaryLink',
      title: 'Link Pulsante Secondario',
      type: 'string',
      description: 'URL o #id-sezione',
    }),
    defineField({
      name: 'style',
      title: 'Stile',
      type: 'string',
      options: {
        list: [
          {title: 'Standard', value: 'standard'},
          {title: 'Grande (Emphasis)', value: 'large'},
          {title: 'Minimale', value: 'minimal'},
        ],
      },
      initialValue: 'standard',
    }),
  ],
})
