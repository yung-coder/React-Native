export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Resturant Name',
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
      name: 'image',
      title: 'Image od the Restuarant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of the Resturant',
      type: 'number',
    },
    {
      name: 'Long',
      title: 'Longitude of the Resturant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Resturant address',
      type: 'string',
      validation: (Role) => Role.required(),
    },
    {
      name: 'ratting',
      title: 'Rating',
      type: 'number',
      validation: (Role) => 
         Role.required()
           .min(1)
           .max(5)
           .error("Please enter a value 1 and 5")
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Role) => Role.required(),
      to: [{type: "category"}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: "reference" , to: [{type: "dish"}]}],
    },
  ],
}
