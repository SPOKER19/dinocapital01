import React from 'react';
import WhitePaper from '../03_Imagenes/Hero/Oficina_02.jpg';
import { Link } from 'react-router-dom';

export const A01WithePaper = () => {

  return (
        <div className='min-h-screen px-1 bg-gradient-to-t from-gray-200 to-white'>
          <div className="relative flex flex-col items-center justify-center min-h-screen p-0 bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${WhitePaper})`}}
          >
              <h1 className='mb-8 text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black tracking-widest text-black'>
                  PROXIMAMENTE
              </h1>

              <Link   to={'/'} 
                      className="px-5 py-2 bg-green-300 text-black font-bold"
              >
                  Regresar
              </Link>
          </div>
        </div>
  )
}
