import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../app/projects.css";

export default function MultiCardCarousel({ projects }) {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 10,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: "10%",
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="pb-8 md:pb-0">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="p-2 sm:p-4">
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg h-full flex flex-col">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{project.title}</h3>
                            {/* <p className="text-gray-300 mb-4 flex-grow">{project.description}</p> */}
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                                <div className="mb-4 text-left">
                                    {Object.entries(project.tools).map(([category, tools], idx) => (
                                        <div key={idx} className="mb-2">
                                            <h4 className="text-md font-semibold mb-1 text-white">{category}</h4>
                                            {tools.map((tool, toolIndex) => (
                                                <span key={toolIndex} className="inline-block bg-gray-900 hover:outline-2 hover:font-semibold text-sm px-3 py-1 rounded-full mr-2 mb-2 ">{tool}</span>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <img loading="lazy" src={project.image} alt={project.title} className="max-w-full sm:max-w-3/5 h-auto object-contain mx-auto sm:mx-0 rounded"/>
                            </div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex shrink-0 justify-center mt-4 mx-auto">
                                <button className="mt-auto floating-button bg-transparent outline-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                                    {project.linkName || 'View Project'}
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};