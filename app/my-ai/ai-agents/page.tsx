export const metadata = { title: "AI Agents • Vitruvity" };

export default function AIAgents() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">AI Agents</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Autonomous AI agents that work continuously to optimize different areas of your life.</p>
                
                <div className="space-y-6">
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Health Optimization Agent</h3>
                        <p className="text-slate-600 mb-4">Continuously monitors your health data, suggests improvements, and adapts recommendations based on your progress.</p>
                        <div className="flex gap-3">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
                            <a href="#" className="text-slate-600 hover:text-slate-900 underline">Configure</a>
                        </div>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Learning Path Agent</h3>
                        <p className="text-slate-600 mb-4">Curates personalized learning content, tracks your progress, and adjusts difficulty based on your performance.</p>
                        <div className="flex gap-3">
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Setup Required</span>
                            <a href="#" className="text-slate-600 hover:text-slate-900 underline">Setup</a>
                        </div>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Productivity Agent</h3>
                        <p className="text-slate-600 mb-4">Analyzes your work patterns, suggests optimal schedules, and helps eliminate time-wasting activities.</p>
                        <div className="flex gap-3">
                            <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">Coming Soon</span>
                        </div>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Financial Planning Agent</h3>
                        <p className="text-slate-600 mb-4">Monitors your spending, suggests budget optimizations, and helps you reach your financial goals.</p>
                        <div className="flex gap-3">
                            <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
