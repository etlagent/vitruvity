export const metadata = { title: "Build Your Own • Vitruvity" };

export default function BuildYourOwn() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Build Your Own</h1>
            
            <section className="py-4">
                <p className="text-lg mb-6">Create custom AI solutions tailored to your specific needs and workflows.</p>
                
                <div className="space-y-8">
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">GPT Builder</h3>
                        <p className="text-slate-600 mb-4">Design and train your own custom GPT for specific tasks or knowledge domains.</p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Custom instructions and personality</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Upload knowledge base documents</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Integration with external APIs</span>
                            </div>
                        </div>
                        <a href="#" className="inline-block mt-4 bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Start Building</a>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Agent Framework</h3>
                        <p className="text-slate-600 mb-4">Build autonomous agents that can perform complex workflows and make decisions.</p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Multi-step reasoning and planning</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Tool integration and API calls</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Continuous learning and adaptation</span>
                            </div>
                        </div>
                        <a href="#" className="inline-block mt-4 bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Learn More</a>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Templates & Examples</h3>
                        <p className="text-slate-600 mb-4">Start with proven templates and customize them for your specific use case.</p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 bg-slate-50 rounded">
                                <h4 className="font-medium mb-2">Personal Assistant</h4>
                                <p className="text-sm text-slate-600">Schedule management, email drafting, task prioritization</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded">
                                <h4 className="font-medium mb-2">Research Analyst</h4>
                                <p className="text-sm text-slate-600">Information gathering, analysis, report generation</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded">
                                <h4 className="font-medium mb-2">Content Creator</h4>
                                <p className="text-sm text-slate-600">Writing assistance, editing, content optimization</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded">
                                <h4 className="font-medium mb-2">Data Processor</h4>
                                <p className="text-sm text-slate-600">Data cleaning, analysis, visualization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
