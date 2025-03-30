export default function Hero() {
    return (
      <section id="hero" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ">Hello, I am Zack Tse</h1>
          <p className="text-lg mb-8 ">I am Full-Stack Developer and DevOps. Have 4+ yaers of experience.<br/>
            I have developed different applications software with different tectnologies.<br/>
            Also, I love learn new technologies and skills and share with others.<br/>
            Please feel free to reach me. </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }