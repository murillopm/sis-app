import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { organization } from 'better-auth/plugins'
import { Resend } from 'resend'

import { db } from '@/db'
import { OrganizationInvitationEmailTemplate } from '@/components/emails/OrganizationInvitation'

const resend = new Resend(process.env.RESEND_API_KEY)

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  plugins: [
    organization({
      sendInvitationEmail: async ({ invitation }) => {
        const link = `http://localhost:3000/join-organization?token=${invitation.id}`

        await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['delivered@resend.dev'],
          subject: 'Hello world',
          react: OrganizationInvitationEmailTemplate({ link }),
        })
      },
    }),
  ],
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
})
