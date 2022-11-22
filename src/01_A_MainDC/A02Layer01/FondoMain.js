import React from 'react';



export const FondoMain = (props) => {  
    
  
    return (           

        <div className="absolute inset-0 grid grid-cols-12 gap-1 p-2 transform scale-150 -skew-y-3 bg-green-400 opacity-30">
            {/* Fila 1 */}                    
            <div className="col-span-12 bg-gray-800 rounded animate-pulse animation-delay-2000"></div>

            {/* Fila 2 */}
            <div className="col-span-4 bg-gray-800 rounded animate-pulse animation-delay-2000"></div>
            <div className="col-span-3 bg-gray-800 rounded"></div>
            <div className="col-span-3 bg-gray-800 rounded animate-pulse animation-delay-2000"></div>
            <div className="col-span-2 bg-gray-800 rounded "></div>
            
            {/* Fila 3 */}
            <div className="col-span-12 bg-gray-800 rounded animate-pulse animation-delay-2000"></div>
                                
            {/* Fila 4 */}
            <div className="col-span-3 bg-gray-800 rounded "></div>
            <div className="col-span-5 bg-gray-800 rounded animate-pulse animation-delay-2000"></div>
            <div className="col-span-3 bg-gray-800 rounded"></div>    
            <div className="col-span-1 bg-gray-800 rounded"></div>                    
            
            {/* Fila 5 */}                   
            <div className="col-span-12 bg-gray-800 rounded animate-pulse animation-delay-3000"></div> 
            {/* Fila 6 */}
            <div className="col-span-12 bg-gray-800 rounded"></div> 
        </div>          
                        
    )
}
