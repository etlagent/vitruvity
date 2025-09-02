export const metadata = { title: "Custom GPTs • Vitruvity" };

export default function CustomGPTs() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Custom GPTs</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Discover and use specialized AI assistants tailored for different aspects of your life.</p>
                
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Nutrition Coach GPT</h3>
                        <p className="text-slate-600 mb-4">Log meals in plain English and get macro estimates with personalized nutrition guidance.</p>
                        <a href="#" className="inline-block bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Try Now</a>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Workout Builder GPT</h3>
                        <p className="text-slate-600 mb-4">Create personalized workout routines based on your goals, equipment, and schedule.</p>
                        <a href="#" className="inline-block bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Try Now</a>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Habit Tracker GPT</h3>
                        <p className="text-slate-600 mb-4">Build and maintain positive habits with AI-powered tracking and motivation.</p>
                        <a href="#" className="inline-block bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Try Now</a>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Learning Companion GPT</h3>
                        <p className="text-slate-600 mb-4">Accelerate your learning with personalized study plans and knowledge retention techniques.</p>
                        <a href="#" className="inline-block bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Try Now</a>
                    </div>
                </div>
            </section>
        </article>
    );
}
