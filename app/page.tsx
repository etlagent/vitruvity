export default function HomePage() {
    return (
        <>
            <section id="what-is-vitruvity" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl mb-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Redesign your life with intentional inputs
                    </h1>
                    <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        Vitruvity teaches a practical framework—align mind, body, and will with natural constants—then
                        gives you powerful AI tools to apply it.
                    </p>
                </div>
            </section>

            <section id="how-it-works" className="py-10 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl mb-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-green-800 mb-4">How it works</h2>
                    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        Learn the principles, then use custom tools like Food Log and Workout Builder to integrate AI into your habits. Analytics, feedback loops come next.
                    </p>
                </div>
            </section>

            <section id="try-custom-gpts" className="py-10 mb-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Try out several Custom GPTs</h2>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto">AI-powered tools designed to seamlessly integrate into your daily routines</p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-purple-200 hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-3">🍽️</div>
                        <h3 className="text-xl font-bold text-purple-800 mb-2">Food Tracker</h3>
                        <p className="text-slate-600 mb-4">Log meals in plain English and get macro estimates</p>
                        <a className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors" href="/my-ai/custom-gpts">Try Now</a>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-3">💪</div>
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Workout Builder</h3>
                        <p className="text-slate-600 mb-4">Create personalized workout plans based on your goals</p>
                        <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" href="/my-ai/custom-gpts">Try Now</a>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md border border-pink-200 hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-3">💕</div>
                        <h3 className="text-xl font-bold text-pink-800 mb-2">Date Night Planner</h3>
                        <p className="text-slate-600 mb-4">Plan perfect dates tailored to your preferences</p>
                        <a className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors" href="/my-ai/custom-gpts">Try Now</a>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md border border-green-200 hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-3">📊</div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">Tax Code Researcher</h3>
                        <p className="text-slate-600 mb-4">Navigate complex tax regulations with AI assistance</p>
                        <a className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors" href="/my-ai/custom-gpts">Try Now</a>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md border border-orange-200 hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-3">🏠</div>
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Real Estate Finder</h3>
                        <p className="text-slate-600 mb-4">Discover properties that match your criteria</p>
                        <a className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors" href="/my-ai/custom-gpts">Try Now</a>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md border border-teal-200 hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-3">✅</div>
                        <h3 className="text-xl font-bold text-teal-800 mb-2">Habit Tracker</h3>
                        <p className="text-slate-600 mb-4">Build and maintain positive habits with AI coaching</p>
                        <a className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors" href="/my-ai/custom-gpts">Try Now</a>
                    </div>
                </div>
            </section>

            <section id="trust" className="py-10 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl mb-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Privacy & Trust</h2>
                    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        We default to consent-based access and redaction before embeddings. Your data stays private and secure.
                    </p>
                    <div className="mt-6">
                        <a className="inline-block bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-semibold" href="/privacy">View Privacy Policy</a>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-10 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-4">Get Started Today</h2>
                    <p className="text-lg text-slate-700 mb-6">
                        Sign up for advanced user preferences on GPTs, or to explore our community of innovators and forward thinkers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-bold text-lg" href="/self-mastery/principles-philosophy">
                            Start Learning →
                        </a>
                        <a className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold" href="mailto:vitruvity@gmail.com">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
