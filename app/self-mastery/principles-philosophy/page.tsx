export const metadata = { title: "Principles & Philosophy • Vitruvity" };

export default function PrinciplesPhilosophy() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Principles & Philosophy</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Foundation principles for intentional living and self-mastery.</p>
                
                <div className="space-y-8">
                    <div className="border-l-4 border-slate-900 pl-6">
                        <h3 className="text-xl font-semibold mb-3">Core Principles</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-2">Intentional Inputs</h4>
                                <p className="text-slate-600">Everything you consume—food, media, relationships—shapes who you become. Choose deliberately.</p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Natural Constants</h4>
                                <p className="text-slate-600">Align your life with unchanging principles: sleep cycles, nutrition needs, human connection, physical movement.</p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Mind, Body, Will</h4>
                                <p className="text-slate-600">True mastery requires integration of mental clarity, physical vitality, and disciplined action.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Stoic Foundations</h3>
                            <p className="text-slate-600 mb-4">Ancient wisdom for modern challenges.</p>
                            <ul className="space-y-2 text-sm">
                                <li>• Focus on what you can control</li>
                                <li>• Accept what you cannot change</li>
                                <li>• Practice negative visualization</li>
                                <li>• Cultivate virtue over pleasure</li>
                            </ul>
                            <a href="#" className="inline-block mt-4 text-slate-900 underline">Explore Resources</a>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Systems Thinking</h3>
                            <p className="text-slate-600 mb-4">Build systems that create lasting change.</p>
                            <ul className="space-y-2 text-sm">
                                <li>• Design your environment</li>
                                <li>• Create feedback loops</li>
                                <li>• Optimize for consistency</li>
                                <li>• Measure what matters</li>
                            </ul>
                            <a href="/self-mastery/principles-philosophy/unified-framework" className="inline-block mt-4 text-slate-900 underline">Learn Framework</a>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Daily Practices</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <h4 className="font-medium mb-2">Morning</h4>
                                <p className="text-sm text-slate-600">Reflection, intention setting, physical preparation</p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Throughout Day</h4>
                                <p className="text-sm text-slate-600">Mindful choices, progress tracking, course correction</p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Evening</h4>
                                <p className="text-sm text-slate-600">Review, gratitude, preparation for tomorrow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
