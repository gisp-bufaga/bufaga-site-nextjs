import Image from 'next/image'

interface MediaPartner {
  name: string
  logo?: string
  textContent?: string
  className?: string
}

interface FeaturedInProps {
  partners?: MediaPartner[]
}

const defaultPartners: MediaPartner[] = [
  {
    name: 'La Repubblica',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7JSJg0ouUl2hAVjb1k_kjJNCZ3Y4MULb-Eqi7zOAVkiFDjn11OCuWc2xzwphUj18kHEqH_F6jSi0Ssu7lB_GaGCoPuszw9yj3oAgIiKOK725C5kKuS2KsPAyhuQbuIqVKr2eyx84dM4v_C90ztjkmXefXcDq80Rq1UA6icysOOMPv8mcBuERoBaXS9rfx2lDx7phOVdpMvbcOExhnqSHkmd2HVnivZ5CJnmlz0Y_RKtd4XDoKEAU1UbS3M6nuNOmMJsZ3XovZ2rI',
  },
  {
    name: 'Fortune Italia',
    textContent: 'FORTUNE',
    className: 'text-xl md:text-2xl font-serif font-bold text-slate-800',
  },
  {
    name: 'StartupItalia',
    textContent: 'StartupItalia',
    className: 'text-xl md:text-2xl font-bold text-red-500 italic',
  },
  {
    name: 'Forbes',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFXf373Hta6xLEWx2tfNqA54yfDVPLbm4j_i9N3x0DCgivME_W4_Ne13aQFY3N0VVS-kfguj5gCBjX7ncKdLMBzuVg9oDQAdvBT2dRMkX34ezhq5kQ55VpNaHQRsFLc_UrydIdSydAc1wGgjJjrEJe9m10brJoj2Iy0dWjyEGjbc8zmZl1KAej8cEe8WzPqkMvPYRxFPJvcvo42y4S6-2X-JvSzpGm7a_QnYP10gDqiKsoWaV_ifS2_lpnmo6sVc2L5qT1QJsZPgA',
  },
]

export default function FeaturedIn({ partners = defaultPartners }: FeaturedInProps) {
  return (
    <section className="bg-white border-b border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={28}
                  className="h-6 md:h-7 w-auto"
                />
              ) : (
                <span className={partner.className}>{partner.textContent}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
