export default function Education() {
    return (
      <section id="education" className="py-16 bg-[#3a3a3a] text-[#f5f5f5]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Education</h2>

          <div className="text-lg mb-4 w-2/3 mx-auto text-start">
            <div className="flex justify-between mb-1">
              <h3 className="text-xl font-semibold mb-2">Chinese University of Hong Kong</h3>
              <span>Sep 2013 — July 2017</span>
            </div>
            <span>Bachelor of Science in Computer Science</span>

            <div className="flex justify-between mt-10">
              <h3 className="text-xl font-semibold mb-2">Centennial College</h3>
              <span>Sep 2022 — May 2024</span>
            </div>
            <span className="mb-6 mr-5">Game Programming (Advanced Diploma)</span>
            <span className="mb-6">GPA 4.38/4.5</span>
          </div>

        </div>
      </section>
    );
  }