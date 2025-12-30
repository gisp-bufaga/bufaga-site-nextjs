import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y5wyim2f',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false, // Set to true in production for better performance
})

// Helper function to fetch landing page by slug
export async function getLandingPage(slug: string) {
  return client.fetch(
    `*[_type == "landingPage" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      seoTitle,
      seoDescription,
      theme,
      hero{
        headline,
        subheadline,
        image{
          asset->{
            _id,
            url
          },
          alt
        },
        layout
      },
      cta{
        primaryText,
        primaryLink,
        secondaryText,
        secondaryLink,
        style
      },
      form{
        title,
        description,
        fields,
        submitText,
        successMessage,
        trackingId
      },
      publishedAt,
      abTestVariant
    }`,
    { slug }
  )
}

// Helper function to fetch all landing pages (for sitemap, etc.)
export async function getAllLandingPages() {
  return client.fetch(
    `*[_type == "landingPage"]{
      _id,
      title,
      "slug": slug.current,
      theme,
      publishedAt
    } | order(publishedAt desc)`
  )
}
