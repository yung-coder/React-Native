import sanityClient from '@sanity/client'
import imageUrlBulider from '@sanity/image-url';

const client = sanityClient({
     projectId: "9neitt45",
     dataset: "production",
     useCdn: true,
     apiVersion: "2021-10-21"
})


const bulider = imageUrlBulider(client);

export const urlFor = (source) => bulider.image(source);

export default client;