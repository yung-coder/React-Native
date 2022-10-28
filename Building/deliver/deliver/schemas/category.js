export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Role) => Role.required(),
    },
    {
      name: 'image',
      title: 'Image for category',
      type: 'image',
    },
  ],
}
