// For our Sanity Clients who added the Products.
// Used this to fetch the data using API from backend to frontend.
// exported directly
// to export the sanity images
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'l3of7lze',
  dataset: 'production',
  apiVersion: '2022-06-13',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// to export the sanity images
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// Now we can import this anywhere in other code.