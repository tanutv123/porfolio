import { RevealOnScroll } from "../RevealOnScroll";
import {useState} from "react";
import RedirectModal from "./RedirectModal.jsx";

export const Projects = () => {
  const [reactOpen, setReactOpen] = useState(false);
  const [angularOpen, setAngularOpen] = useState(false);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Fullstack Projects
          </h2>
          <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent text-center">
            {" "}
            These projects might not have an eye-catching design but I am practicing my design skills constantly.
            You can scroll down to see projects that help me improve my design skills.
          </h3>
          <RedirectModal open={reactOpen} setOpen={setReactOpen} link={'http://ec2-54-153-171-0.ap-southeast-2.compute.amazonaws.com:8080/'} imageLink={'/instruction.png'} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Reactivities!</h3>
              <p className="text-gray-400 mb-4">
                Plan and manage events effortlessly!
                This app lets users create, organize, and track events seamlessly, built with .NET + React for a smooth experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[".NET 8", "React", "Docker", "AWS"].map((tech, key) => (
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
                <button
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"
                  type="button"
                  onClick={() => setReactOpen(true)}
                >
                  View Project →
                </button>
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
              <h3 className="text-xl font-bold mb-2">Dating App</h3>
              <p className="text-gray-400 mb-4">
                Connect and match with like-minded people!
                This app makes meeting new people easy with smart matching and a smooth user experience, built with .NET + Angular.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[".NET 7", "Angular 16", "Docker", "AWS"].map((tech, key) => (
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
                <button
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"
                  onClick={() => setAngularOpen(true)}
                >
                  View Project →
                </button>
              </div>
            </div>
          </div>
        </div>
        <RedirectModal open={angularOpen} setOpen={setAngularOpen} link={'http://ec2-54-153-171-0.ap-southeast-2.compute.amazonaws.com:8081/'} imageLink={'/instruction2.png'}/>
      </RevealOnScroll>
    </section>
  );
};
