import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'form',
  title: 'Form Contatto',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Form',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Es: "Richiedi una Demo", "Contattaci"',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 2,
      description: 'Testo sopra il form',
    }),
    defineField({
      name: 'fields',
      title: 'Campi Visibili',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          {title: 'Nome', value: 'name'},
          {title: 'Email', value: 'email'},
          {title: 'Telefono', value: 'phone'},
          {title: 'Azienda', value: 'company'},
          {title: 'Messaggio', value: 'message'},
          {title: 'Settore', value: 'sector'},
        ],
      },
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'submitText',
      title: 'Testo Pulsante Invio',
      type: 'string',
      initialValue: 'Invia Richiesta',
    }),
    defineField({
      name: 'successMessage',
      title: 'Messaggio di Successo',
      type: 'text',
      rows: 2,
      initialValue: 'Grazie! Ti contatteremo presto.',
    }),
    defineField({
      name: 'trackingId',
      title: 'ID Tracking',
      type: 'string',
      description: 'ID univoco per analytics (es: "form-demo-industria")',
    }),
  ],
})
