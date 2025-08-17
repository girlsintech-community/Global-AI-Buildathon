const FlipCard = ({ 
  number, 
  title, 
  image, 
  description, 
}) => {
  return (
    <div className="w-80 h-96 perspective-1000">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 group">
        
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg border-2 border-red-300">
          <div className="flex flex-col items-center justify-center h-full p-6">
            {/* SDG Icon */}
              <img 
                src={image} 
                alt={`SDG ${number} - ${title}`}
                className="w-55 h-55 object-contain shadow-lg shadow-gray-500 rounded-xl mb-4"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
            
            {/* SDG Title */}
            <h3 className="text-xl font-bold text-red-800 text-center mb-2">
              {title}
            </h3>
            
            {/* SDG Number */}
            <div className="w-6 h-6 bg-red-600 rounded-3xl p-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{number}</span>
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-red-400 rounded-xl shadow-lg border-4 border-gray-400">
          <div className="h-full p-6 flex flex-col justify-center">
            <div className="bg-gray-50 border-4 border-gray-400 p-4 rounded-3xl mb-4">
              {/* <h4 className="text-xl font-bold text-gray-700 mb-3 border-b-2 border-gray-500 pb-2">
                Goal {number}: {title}
              </h4> */}
              
              <p className="text-gray-700 leading-relaxed mb-4 text-2xl font-black">
                {description}
              </p>
    
          </div>
        </div>
      </div>
      
      {/* Custom CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
    </div>
  );
};

export default FlipCard;