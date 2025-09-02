export const metadata = { title: "AI, Technology, & Education • Vitruvity" };

export default function AITechnologyEducation() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">AI, Technology, & Education</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Leverage technology and AI to accelerate your learning and personal development.</p>
                
                <div className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">AI Learning Tools</h3>
                            <p className="text-slate-600 mb-4">Personalized AI tutors and learning companions.</p>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Adaptive learning paths</li>
                                <li>• Real-time feedback</li>
                                <li>• Knowledge gap analysis</li>
                                <li>• Spaced repetition systems</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">Explore Tools</a>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Productivity Systems</h3>
                            <p className="text-slate-600 mb-4">Technology stacks for optimal performance.</p>
                            <ul className="space-y-2 text-sm mb-4">
                                <li>• Task automation</li>
                                <li>• Knowledge management</li>
                                <li>• Time tracking & analysis</li>
                                <li>• Focus enhancement tools</li>
                            </ul>
                            <a href="#" className="text-slate-900 underline">View Setup Guide</a>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Learning Frameworks</h3>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div>
                                <h4 className="font-medium mb-2">Feynman Technique</h4>
                                <p className="text-sm text-slate-600">Explain concepts simply to identify knowledge gaps</p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Active Recall</h4>
                                <p className="text-sm text-slate-600">Test yourself frequently instead of passive review</p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Spaced Repetition</h4>
                                <p className="text-sm text-slate-600">Review information at increasing intervals</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Recommended Resources</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">AI & Machine Learning</h4>
                                <p className="text-sm text-slate-600 mb-2">Understanding the tools that will shape the future</p>
                                <a href="#" className="text-xs text-slate-900 underline">Course Recommendations</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Digital Minimalism</h4>
                                <p className="text-sm text-slate-600 mb-2">Using technology intentionally, not compulsively</p>
                                <a href="#" className="text-xs text-slate-900 underline">Implementation Guide</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Knowledge Work</h4>
                                <p className="text-sm text-slate-600 mb-2">Systems for deep work and creative output</p>
                                <a href="#" className="text-xs text-slate-900 underline">Productivity Stack</a>
                            </div>
                            <div className="border border-slate-200 rounded p-4">
                                <h4 className="font-medium mb-2">Continuous Learning</h4>
                                <p className="text-sm text-slate-600 mb-2">Building a sustainable learning practice</p>
                                <a href="#" className="text-xs text-slate-900 underline">Learning Plan Template</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
