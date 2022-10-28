export default {
    name: 'featured',
    title: 'Resturant Menu Catgories',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Featured Category name',
        type: 'string',
        validation: (Role) => Role.required(),
      },
      {
        name: 'short_description',
        title: 'Short description',
        type: 'string',
        validation: (Role) => Role.max(200),
      },
      {
        name: 'restaurants',
        title: 'Restuaranta',
        type: 'array',
        of: [{ type: "reference" , to: [{type: "resturant"}]}]
      },
    ],
  }
  