import Image from 'next/image'

interface TeamProps {
  title?: string
  titleHighlight?: string
  description?: string
  image?: string
}

export default function Team({
  title = 'Conosci il',
  titleHighlight = 'Team',
  description = 'Siamo un team multidisciplinare composto da ingegneri ambientali, meccanici ed esperti di comunicazione. Abbiamo tutti un obiettivo comune: lasciare un pianeta senza inquinamento alle generazioni future.',
  image = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV2vWkKTOiGkyMhFlC6Z2fYpGKmVAH7XImwnp7Pu8X6imV1BvHzjbcIsHT4VPGuChzo3czlL7b7vlQUwZiLL9b__ZaiCzjjNzwy6e_Fza-E7ypsMr4URNqRJ8g9sNGfTboetH4Ql3spaZy5WaVIheFSttM6CtDVslld_cvSK2Q1JJdKAFz5HouzMKYAYAGFUT3gWvH_IP1QAnGHWeGKJvyNPS39fY2mEdBH5jMZpRVrXg4EJpAKmUcaGjT2T_NcxGMWi9Qi8nZP_M',
}: TeamProps) {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row min-h-[400px]">
          {/* Left: Text */}
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              {title}{' '}
              <span className="px-4 py-1 rounded-full bg-blue-100 text-primary border border-blue-200">
                {titleHighlight}
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={image}
              alt="Team working together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
