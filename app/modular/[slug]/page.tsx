import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import Hero from '@/components/marketing/Hero'
import CTA from '@/components/marketing/CTA'
import Form from '@/components/marketing/Form'
import Testimonials from '@/components/marketing/testimonials'
import Features from '@/components/marketing/features'
import Stats from '@/components/marketing/stats'
import Footer from '@/components/Footer'

async function getModularLandingPage(slug: string) {
  return client.fetch(
    `*[_type == "landingPageModular" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      seoTitle,
      seoDescription,
      theme,
      sections[]{
        _type,
        _type == "hero" => {
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
        _type == "cta" => {
          primaryText,
          primaryLink,
          secondaryText,
          secondaryLink,
          style
        },
        _type == "form" => {
          title,
          description,
          fields,
          submitText,
          successMessage,
          trackingId
        },
        _type == "testimonials" => {
          sectionTitle,
          items[]{
            name,
            company,
            role,
            quote,
            image{
              asset->{
                url
              }
            }
          }
        },
        _type == "features" => {
          sectionTitle,
          sectionDescription,
          layout,
          items[]{
            icon,
            title,
            description
          }
        },
        _type == "stats" => {
          backgroundColor,
          items[]{
            number,
            label
          }
        }
      },
      publishedAt
    }`,
    { slug }
  )
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ModularLandingPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getModularLandingPage(slug)

  if (!page) {
    notFound()
  }

  return (
    <main>
      {page.sections?.map((section: any, index: number) => {
        const key = `${section._type}-${index}`

        switch (section._type) {
          case 'hero':
            return (
              <Hero
                key={key}
                headline={section.headline}
                subheadline={section.subheadline}
                image={
                  section.image
                    ? {
                        url: section.image.asset.url,
                        alt: section.image.alt,
                      }
                    : undefined
                }
                layout={section.layout}
                theme={page.theme}
              />
            )

          case 'cta':
            return (
              <section key={key} className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <CTA
                    primaryText={section.primaryText}
                    primaryLink={section.primaryLink}
                    secondaryText={section.secondaryText}
                    secondaryLink={section.secondaryLink}
                    style={section.style}
                    theme={page.theme}
                  />
                </div>
              </section>
            )

          case 'form':
            return (
              <section key={key} className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <Form
                    title={section.title}
                    description={section.description}
                    fields={section.fields}
                    submitText={section.submitText}
                    successMessage={section.successMessage}
                    trackingId={section.trackingId}
                    theme={page.theme}
                  />
                </div>
              </section>
            )

          case 'testimonials':
            return (
              <Testimonials
                key={key}
                testimonials={section.items.map((item: any) => ({
                  name: item.name,
                  company: item.company,
                  role: item.role,
                  quote: item.quote,
                  image: item.image?.asset?.url,
                }))}
                theme={page.theme}
              />
            )

          case 'features':
            return (
              <Features
                key={key}
                sectionTitle={section.sectionTitle}
                sectionDescription={section.sectionDescription}
                layout={section.layout}
                items={section.items}
                theme={page.theme}
              />
            )

          case 'stats':
            return (
              <Stats
                key={key}
                items={section.items}
                backgroundColor={section.backgroundColor}
                theme={page.theme}
              />
            )

          default:
            return null
        }
      })}

      <Footer />
    </main>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const page = await getModularLandingPage(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription,
  }
}