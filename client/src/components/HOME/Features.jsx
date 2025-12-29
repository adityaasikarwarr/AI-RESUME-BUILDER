import React from "react";

const Features = () => {
  return (
    <div id="features">
      <section
        className="
  py-20 px-4
  bg-gradient-to-b from-white via-green-100 to-white
  flex flex-col justify-center items-center gap-6
"
      >
        <h2 className="text-3xl md:text-[40px]/12 font-medium text-black-100 max-w-lg text-center leading-tight">
          AI Agents That Automate and Accelerate Growth.
        </h2>

        <p className="text-base/7 text--200 max-w-xl text-center">
          Streamline operations, boost productivity, and scale effortlessly{" "}
        </p>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Feature 1 */}
          <div
            className="
    group bg-white border border-gray-200 rounded-2xl p-6 space-y-3
    shadow-sm hover:shadow-xl
    transition-all duration-300 ease-out
    hover:-translate-y-1
  "
          >
            <span
              className="
      text-3xl inline-block
      transition-transform duration-300
      group-hover:scale-110
    "
            >
              ⚡
            </span>

            <p className="font-semibold text-lg text-gray-900">
              Fast Resume Building
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              Build a professional resume in minutes with instant AI assistance.
            </p>

            <div className="h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Feature 2 */}
          <div
            className="
    group bg-white border border-gray-200 rounded-2xl p-6 space-y-3
    shadow-sm hover:shadow-xl
    transition-all duration-300 ease-out
    hover:-translate-y-1
  "
          >
            <span
              className="
      text-3xl inline-block
      transition-transform duration-300
      group-hover:scale-110
    "
            >
              🤖
            </span>

            <p className="font-semibold text-lg text-gray-900">
              AI-Powered Resume
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              Smart AI generates optimized content based on your skills and
              experience.
            </p>

            <div className="h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Feature 3 */}
          <div
            className="
    group bg-white border border-gray-200 rounded-2xl p-6 space-y-3
    shadow-sm hover:shadow-xl
    transition-all duration-300 ease-out
    hover:-translate-y-1
  "
          >
            <span
              className="
      text-3xl inline-block
      transition-transform duration-300
      group-hover:scale-110
    "
            >
              ✨
            </span>

            <p className="font-semibold text-lg text-gray-900">Easy to Build</p>

            <p className="text-sm leading-relaxed text-gray-600">
              Clean, simple, and beginner-friendly resume builder with guided
              steps.
            </p>

            <div className="h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
