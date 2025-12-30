import { notFound } from 'next/navigation'
import { getLandingPage } from '@/lib/sanity'
import Hero from '@/components/marketing/Hero'
import CTA from '@/components/marketing/CTA'
import Form from '@/components/marketing/Form'
import Footer from '@/components/Footer'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getLandingPage(slug)

  if (!page) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <Hero
        headline={page.hero.headline}
        subheadline={page.hero.subheadline}
        image={page.hero.image ? {
          url: page.hero.image.asset.url,
          alt: page.hero.image.alt,
        } : undefined}
        layout={page.hero.layout}
        theme={page.theme}
      />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CTA
            primaryText={page.cta.primaryText}
            primaryLink={page.cta.primaryLink}
            secondaryText={page.cta.secondaryText}
            secondaryLink={page.cta.secondaryLink}
            style={page.cta.style}
            theme={page.theme}
          />
        </div>
      </section>

      {/* Form Section */}
      {page.form && (
        <section className="py-16 bg-gray-50" id="contatto">
          <div className="container mx-auto px-4">
            <Form
              title={page.form.title}
              description={page.form.description}
              fields={page.form.fields}
              submitText={page.form.submitText}
              successMessage={page.form.successMessage}
              trackingId={page.form.trackingId}
              theme={page.theme}
            />
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </main>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const page = await getLandingPage(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || page.hero.subheadline,
  }
}
