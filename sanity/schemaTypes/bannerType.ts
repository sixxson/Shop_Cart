import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
})