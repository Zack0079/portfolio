export default function Experience() {
  return (
    <section id="about" className="py-16 bg-[#e8f5e9]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        <div className="text-lg mb-10 w-2/3 mx-auto text-start">
          <div className="flex justify-between">
            <div className="flex">
              <h3 className="text-xl font-semibold">Student Researcher</h3>
              <span className="text-gray-600"> , WIMTACH Centennial College</span>
            </div>
            <span className="text-gray-600">May 2023 — Sept 2023</span>
          </div>
          <h4 className="text-gray-600">Toronto, Canada</h4>
          <ui>
            <li>Utilized Unreal Engine 5.2 and Blender 3.6.</li>
            <li>Utilized Blueprint scripting and C++.</li>
            <li>Integrated VR devices.</li>
          </ui>
        </div>

        <div className="text-lg mb-10 w-2/3 mx-auto text-start">
          <div className="flex justify-between">
            <div className="flex">
              <h3 className="text-xl font-semibold">Developer</h3>
              <span className="text-gray-600"> , Smart Drop</span>
            </div>
            <span className="text-gray-600">Jan 2018 — July 2022</span>
          </div>
          <h4 className="text-gray-600">Hong Kong</h4>
          <ui>
            <li>Developed various applications using diverse technologies and languages.</li>
            <li>Utilized React.js, Vue.js, and Angular.js for front-end application development.</li>
            <li>Developed back-end servers using Node.js and PHP.</li>
            <li>Designed database schemas.</li>
            <li>Integrated third-party APIs.</li>
            <li>Utilized AWS Lambda and S3.</li>
            <li>Developed the front-end for Android mobile applications.</li>
          </ui>
        </div>

      </div>
      
    </section>
  );
}