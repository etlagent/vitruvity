export const metadata = { title: "Routines & Habits • Vitruvity" };

export default function RoutinesHabits() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Routines & Habits</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Build powerful routines and sustainable habits that compound over time.</p>
                
                <div className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Habit Formation</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Cue-routine-reward loops</li>
                                <li>• Environment design</li>
                                <li>• Habit stacking techniques</li>
                                <li>• Progress tracking systems</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Habit Tracker</a>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Routine Optimization</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Morning routine design</li>
                                <li>• Evening wind-down protocols</li>
                                <li>• Work-day structure</li>
                                <li>• Weekend recharge routines</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Routine Builder</a>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Essential Daily Practices</h3>
                        <div className="grid gap-4 md:grid-cols-4">
                            <div>
                                <h4 className="font-medium mb-2">Physical</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Movement/exercise</li>
                                    <li>• Hydration</li>
                                    <li>• Nutrition timing</li>
                                    <li>• Sleep hygiene</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Mental</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Meditation/mindfulness</li>
                                    <li>• Reading/learning</li>
                                    <li>• Journaling</li>
                                    <li>• Deep work blocks</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Social</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Meaningful connections</li>
                                    <li>• Family time</li>
                                    <li>• Community involvement</li>
                                    <li>• Gratitude practice</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Spiritual</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Reflection/prayer</li>
                                    <li>• Nature connection</li>
                                    <li>• Purpose alignment</li>
                                    <li>• Service to others</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Habit Tools & Templates</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">21-Day Challenges</h4>
                                <p className="text-sm text-slate-600 mb-2">Structured programs to build specific habits</p>
                                <a href="#" className="text-xs text-slate-900 underline">Browse Challenges</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Habit Stack Templates</h4>
                                <p className="text-sm text-slate-600 mb-2">Pre-built sequences for common goals</p>
                                <a href="#" className="text-xs text-slate-900 underline">View Templates</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Progress Analytics</h4>
                                <p className="text-sm text-slate-600 mb-2">Track streaks, patterns, and improvements</p>
                                <a href="#" className="text-xs text-slate-900 underline">View Dashboard</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Accountability Systems</h4>
                                <p className="text-sm text-slate-600 mb-2">Partner matching and group challenges</p>
                                <a href="#" className="text-xs text-slate-900 underline">Find Partners</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
