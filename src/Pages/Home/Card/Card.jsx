import './box.css';

const Card = () => {
    return (
        <div>
             
            <div className="relative mt-20">
                <div className="h-auto md:h-96 bg-gray-100 shadow-xl">
                    <h1 className="text-6xl py-20 font-bold text-black text-center">hello hablu</h1>
                </div>

                <div className="h-auto md:h-96 bg-blue-800">
                    <div className="w-8/12 mx-auto gap-10 grid grid-cols-1 md:grid-cols-3 absolute top-60 inset-x-0">
                        <div className="box bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-80 w-80 "></div>
                        <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 h-80 w-80"></div>
                        <div className="bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 h-80 w-80"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;