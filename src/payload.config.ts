import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Leads } from './collections/Leads'
import { Media } from './collections/Media'
import { NewsletterSubscribers } from './collections/NewsletterSubscribers'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Trident Software Admin',
    },
  },
  collections: [Users, Media, Leads, NewsletterSubscribers],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
})
