import { RevealOnScroll } from "../RevealOnScroll";

export const ReactProjects = () => {
    return (
        <section
            id="reactprojects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured React Projects
                    </h2>
                    <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent text-center">
                        {" "}
                        This is my hobby projects using pure React. I made these projects to practice designing.
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Timer-countdown</h3>
                            <p className="text-gray-400 mb-4">
                                Test your timing instincts with this engaging countdown game! Stop the timer perfectly to win.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://react-timer-countdown.vercel.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Tic-Tac-Toe</h3>
                            <p className="text-gray-400 mb-4">
                                A classic Tic-Tac-Toe game with smooth, interactive gameplay.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://tic-tac-toe-orcin-xi-52.vercel.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Investment Calculator</h3>
                            <p className="text-gray-400 mb-4">
                                Easily calculate potential returns on your investments with this simple tool.
                                Built with React, it helps you plan and visualize your financial growth.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                      {tech}
                    </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://react-investment-calculator-delta.vercel.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Travel book</h3>
                            <p className="text-gray-400 mb-4">
                                A fun travel planner that lets you choose and save future travel destinations.
                                Built with React, it helps you organize your dream trips and plan ahead.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="https://react-placepicker-lac.vercel.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
