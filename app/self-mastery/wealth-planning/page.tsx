export const metadata = { title: "Wealth & Planning • Vitruvity" };

export default function WealthPlanning() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Wealth & Planning</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Build sustainable wealth through intentional planning and disciplined execution.</p>
                
                <div className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Financial Foundation</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Emergency fund building</li>
                                <li>• Debt elimination strategies</li>
                                <li>• Cash flow optimization</li>
                                <li>• Tax planning basics</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Foundation Calculator</a>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Investment Strategy</h3>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Asset allocation principles</li>
                                <li>• Index fund strategies</li>
                                <li>• Risk management</li>
                                <li>• Rebalancing protocols</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Portfolio Builder</a>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Wealth Building Phases</h3>
                        <div className="grid gap-4 md:grid-cols-4">
                            <div>
                                <h4 className="font-medium mb-2">Foundation (0-2 years)</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Budget mastery</li>
                                    <li>• Emergency fund</li>
                                    <li>• High-interest debt elimination</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Growth (2-10 years)</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Aggressive investing</li>
                                    <li>• Income optimization</li>
                                    <li>• Skill development</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Acceleration (10-20 years)</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Business ownership</li>
                                    <li>• Real estate investing</li>
                                    <li>• Tax optimization</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Preservation (20+ years)</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Wealth protection</li>
                                    <li>• Legacy planning</li>
                                    <li>• Passive income focus</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Planning Tools & Resources</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Net Worth Tracker</h4>
                                <p className="text-sm text-slate-600 mb-2">Monitor assets, liabilities, and progress over time</p>
                                <a href="#" className="text-xs text-slate-900 underline">Start Tracking</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Investment Calculator</h4>
                                <p className="text-sm text-slate-600 mb-2">Model different scenarios and time horizons</p>
                                <a href="#" className="text-xs text-slate-900 underline">Run Projections</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Budget Optimizer</h4>
                                <p className="text-sm text-slate-600 mb-2">AI-powered spending analysis and recommendations</p>
                                <a href="#" className="text-xs text-slate-900 underline">Optimize Budget</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Goal Planner</h4>
                                <p className="text-sm text-slate-600 mb-2">Set and track financial milestones</p>
                                <a href="#" className="text-xs text-slate-900 underline">Plan Goals</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
