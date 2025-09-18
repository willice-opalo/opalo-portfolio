import { Link } from "react-router";

const Hero = ({name='[NAME]'}) => {
    return ( 
        <>
            <header className="text-center py-20 px-4
                bg-gray-900 text-white transition-colors duration-300">
                <h2 className="text-4xl font-bold mb-4">
                    Hey, {name}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl
                    mx-auto mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cum ab consequuntur nemo sint veniam.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to='/projects' className="bg-blue-600 text-white px-6
                        py-2 rounded hover:bg-blue-700"
                    >
                        View Projects
                    </Link>
                    <Link to='/contact' className="border border-blue-500 text-blue-400 px-6 py-2
                        rounded hover:bg-blue-500 hover:text-white transition"
                    >
                        Contact
                    </Link>
                </div>
            </header>
        </>
     );
}
 
export default Hero;