export const metadata = { title: "Nutrition & Bio-Hacking • Vitruvity" };

export default function NutritionBiohacking() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Nutrition & Bio-Hacking</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Optimize your body's performance through evidence-based nutrition and biohacking techniques.</p>
                
                <div className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Nutrition Fundamentals</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Macro and micronutrient optimization</li>
                                <li>• Meal timing and circadian rhythm</li>
                                <li>• Food quality and sourcing</li>
                                <li>• Personalized nutrition based on genetics</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Nutrition Calculator</a>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Biohacking Tools</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Sleep optimization techniques</li>
                                <li>• Cold exposure protocols</li>
                                <li>• Intermittent fasting strategies</li>
                                <li>• Supplement optimization</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Protocol Library</a>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Tracking & Measurement</h3>
                        <div className="grid gap-4 md:grid-cols-4">
                            <div className="text-center">
                                <h4 className="font-medium mb-2">Sleep Quality</h4>
                                <p className="text-sm text-slate-600">HRV, deep sleep, REM cycles</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium mb-2">Metabolic Health</h4>
                                <p className="text-sm text-slate-600">Glucose, ketones, inflammation</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium mb-2">Physical Performance</h4>
                                <p className="text-sm text-slate-600">Strength, endurance, recovery</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium mb-2">Cognitive Function</h4>
                                <p className="text-sm text-slate-600">Focus, memory, reaction time</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Evidence-Based Protocols</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Morning Optimization</h4>
                                <p className="text-sm text-slate-600 mb-2">Light exposure, hydration, movement</p>
                                <a href="#" className="text-xs text-slate-900 underline">View Protocol</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Cognitive Enhancement</h4>
                                <p className="text-sm text-slate-600 mb-2">Nootropics, meditation, brain training</p>
                                <a href="#" className="text-xs text-slate-900 underline">Explore Options</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Recovery Optimization</h4>
                                <p className="text-sm text-slate-600 mb-2">Sleep hygiene, stress management, nutrition timing</p>
                                <a href="#" className="text-xs text-slate-900 underline">Recovery Guide</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Longevity Stack</h4>
                                <p className="text-sm text-slate-600 mb-2">Anti-aging protocols and lifestyle interventions</p>
                                <a href="#" className="text-xs text-slate-900 underline">Longevity Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
