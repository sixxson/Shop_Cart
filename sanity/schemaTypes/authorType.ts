import { UserIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
fields: [
    defineField({ name: 'clerkId', title: 'Clerk ID', type: 'string', readOnly: true }),
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'fullName', title: 'Full Name', type: 'string', readOnly: true }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'url', readOnly: true }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({ name: 'createdAt', title: 'Created At', type: 'datetime', readOnly: true }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'User', value: 'user' },
          { title: 'Admin', value: 'admin' },
        ],
        layout: 'radio',
      },
      initialValue: 'user',
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'email',
    },
  },
})
