export const metadata = { title: "Healthy Physical Fitness • Vitruvity" };

export default function HealthyPhysicalFitness() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Healthy Physical Fitness</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Build sustainable fitness practices that enhance both physical capability and mental resilience.</p>
                
                <div className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Strength Training</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Progressive overload principles</li>
                                <li>• Compound movement focus</li>
                                <li>• Periodization strategies</li>
                                <li>• Recovery optimization</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Workout Builder</a>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Cardiovascular Health</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Zone 2 training protocols</li>
                                <li>• HIIT optimization</li>
                                <li>• Heart rate variability</li>
                                <li>• Endurance building</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Cardio Planner</a>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Mobility & Recovery</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Dynamic warm-up routines</li>
                                <li>• Targeted stretching protocols</li>
                                <li>• Foam rolling techniques</li>
                                <li>• Active recovery methods</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Mobility Guide</a>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Movement Patterns</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <h4 className="font-medium mb-2">Essential Movements</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Squat variations</li>
                                    <li>• Hip hinge patterns</li>
                                    <li>• Push/pull mechanics</li>
                                    <li>• Core stabilization</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Daily Integration</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Morning movement routine</li>
                                    <li>• Desk break exercises</li>
                                    <li>• Walking meetings</li>
                                    <li>• Evening wind-down stretches</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Training Resources</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Beginner Programs</h4>
                                <p className="text-sm text-slate-600 mb-2">Start your fitness journey with proven, progressive programs</p>
                                <a href="#" className="text-xs text-slate-900 underline">View Programs</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Advanced Training</h4>
                                <p className="text-sm text-slate-600 mb-2">Specialized protocols for experienced athletes</p>
                                <a href="#" className="text-xs text-slate-900 underline">Explore Advanced</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Injury Prevention</h4>
                                <p className="text-sm text-slate-600 mb-2">Prehab exercises and movement screening</p>
                                <a href="#" className="text-xs text-slate-900 underline">Prevention Guide</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Performance Testing</h4>
                                <p className="text-sm text-slate-600 mb-2">Track progress with standardized assessments</p>
                                <a href="#" className="text-xs text-slate-900 underline">Testing Protocols</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
