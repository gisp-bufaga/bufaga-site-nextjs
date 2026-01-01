import Link from 'next/link'
import Image from 'next/image'
import { Camera, Users } from 'lucide-react'

interface FooterProps {
  tagline?: string
  socialLinks?: Array<{ type: 'instagram' | 'linkedin'; href: string }>
  showLanguageSwitch?: boolean
  copyrightText?: string
}

export default function Footer({
  tagline = "We're cleaning the air!",
  socialLinks = [
    { type: 'instagram', href: 'https://instagram.com/bufaga' },
    { type: 'linkedin', href: 'https://linkedin.com/company/bufaga' },
  ],
  showLanguageSwitch = true,
  copyrightText = 'Copyright 2024 © Bufaga - Startup Innovativa',
}: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <Image
                src="/bufaga-logo-bianco.png"
                alt="Bufaga Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-slate-500">{tagline}</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Follow us
            </span>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-all text-white group"
                >
                  {social.type === 'instagram' ? (
                    <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Links & Language */}
          <div className="flex flex-col items-end gap-3 text-sm">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
            {showLanguageSwitch && (
              <div className="flex gap-3 mt-2">
                <button className="cursor-pointer hover:scale-110 transition-transform">
                  🇮🇹
                </button>
                <button className="opacity-50 hover:opacity-100 cursor-pointer hover:scale-110 transition-transform">
                  🇬🇧
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 text-xs text-center text-slate-500">
          {copyrightText}
        </div>
      </div>
    </footer>
  )
}
