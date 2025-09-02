import "./globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Vitruvity",
    description: "Redesign your life with intentional inputs.",
    metadataBase: new URL("https://vitruvity.com"),
    openGraph: {
        title: "Vitruvity",
        description: "Redesign your life with intentional inputs.",
        url: "https://vitruvity.com",
        siteName: "Vitruvity",
        type: "website"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen text-slate-900 bg-white antialiased">
                <header className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/" className="font-semibold">Vitruvity</a>
                    <nav className="flex gap-6 text-sm">
                        <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
                        <div className="relative group">
                            <button className="hover:text-slate-600">My AI ▼</button>
                            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                <div className="py-2 min-w-48">
                                    <a href="/my-ai/custom-gpts" className="block px-4 py-2 hover:bg-slate-50">Custom GPTs</a>
                                    <a href="/my-ai/ai-agents" className="block px-4 py-2 hover:bg-slate-50">AI Agents</a>
                                    <a href="/my-ai/build-your-own" className="block px-4 py-2 hover:bg-slate-50">Build Your Own</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="hover:text-slate-600">Self-Mastery ▼</button>
                            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                <div className="py-2 min-w-56">
                                    <a href="/self-mastery/principles-philosophy" className="block px-4 py-2 hover:bg-slate-50">Principles & Philosophy</a>
                                    <a href="/self-mastery/ai-technology-education" className="block px-4 py-2 hover:bg-slate-50">AI, Technology, & Education</a>
                                    <a href="/self-mastery/nutrition-biohacking" className="block px-4 py-2 hover:bg-slate-50">Nutrition & Bio-Hacking</a>
                                    <a href="/self-mastery/healthy-physical-fitness" className="block px-4 py-2 hover:bg-slate-50">Healthy Physical Fitness</a>
                                    <a href="/self-mastery/routines-habits" className="block px-4 py-2 hover:bg-slate-50">Routines & Habits</a>
                                    <a href="/self-mastery/wealth-planning" className="block px-4 py-2 hover:bg-slate-50">Wealth & Planning</a>
                                </div>
                            </div>
                        </div>
                        <a href="/privacy">Privacy</a>
                    </nav>
                </header>
                <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
                <footer className="max-w-5xl mx-auto px-6 py-10 text-sm text-slate-600">
                    © {new Date().getFullYear()} Vitruvity • <a className="underline" href="/privacy">Privacy</a>
                </footer>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Vitruvity Food Log",
                            "applicationCategory": "HealthApplication",
                            "operatingSystem": "Web",
                            "url": "https://vitruvity.com/docs/food-log",
                            "privacyPolicy": "https://vitruvity.com/privacy/food-log"
                        })
                    }}
                />
            </body>
        </html>
    );
}
