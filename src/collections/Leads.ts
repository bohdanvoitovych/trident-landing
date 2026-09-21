import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'subject', 'createdAt'],
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'subject',
      type: 'select',
      options: [
        { label: 'General inquiry', value: 'general' },
        { label: 'Project proposal', value: 'project' },
        { label: 'Get a quote', value: 'quote' },
        { label: 'Partnership', value: 'partnership' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'general',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        description: 'Page where the form was submitted from',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In progress', value: 'in_progress' },
        { label: 'Closed', value: 'closed' },
      ],
      defaultValue: 'new',
    },
  ],
  timestamps: true,
}
