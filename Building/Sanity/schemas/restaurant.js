export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Resturant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ratting',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => 
         Rule.required()
           .min(1)
           .max(5)
           .error("Please enter a value 1 and 5")
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
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
