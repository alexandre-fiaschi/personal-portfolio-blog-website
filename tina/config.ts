import { defineConfig } from "tinacms"
import { richTextComponents } from "./richtext-schema"

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/page",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
            templates: richTextComponents,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`
            }
            return undefined
          },
          filename: {
            slugify: (values) => {
              return `${(values.title || "").toLowerCase().replace(/ /g, "-")}`.replace(
                /[^\w\.\/-\s]/gi,
                "",
              )
            },
          },
        },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/post",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            type: "datetime",
            label: "Date",
            required: true,
          },
          {
            name: "tags",
            type: "string",
            label: "Tags",
            //required: true
            list: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
            templates: richTextComponents,
          },
        ],
        defaultItem: () => {
          return {
            //title: "New Post",
            date: new Date(),
          }
        },
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${(values.title || "").toLowerCase().replace(/ /g, "-")}`.replace(
                /[^\w\.\/-\s]/gi,
                "",
              )
            },
          },
        },
      },
      {
        name: "project",
        label: "Projects",
        path: "content/project",
        //format: "mdx", -> add it to be similar to blog
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "description",
            type: "string",
            label: "Description",
            required: true,
          },
          {
            name: "link",
            type: "string",
            label: "The Link",
            required: true,
          },
          {
            name: "imgSrc",
            type: "image",
            label: "Hero image",
          },
          /* {
            //To change with years
            name: "date",
            type: "datetime",
            label: "Date",
            required: true
          }, */
          /* {
            //to change and implement to have individual pages for the projects, like a Post
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
          }, */
        ],
        /* defaultItem:() => {
          return{
            //title: "New Post",
            date: new Date()
          }
        }, */
        ui: {
          /*  use it to implement same structure as blog
         router: ({ document }) => {
            return `/posts/${document._sys.filename}`
          }, */
          filename: {
            slugify: (values) => {
              return `${(values.title || "").toLowerCase().replace(/ /g, "-")}`.replace(
                /[^\w\.\/-\s]/gi,
                "",
              )
            },
          },
        },
      },
    ],
  },
})
