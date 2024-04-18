import Image from 'next/image'
import React from 'react'

type input = {
    children?: React.ReactNode
    title?: string
    imageURL: string
    reversed?: boolean
    backgroundColor?: string
}

const FeatureBox = ({children, title, imageURL, reversed, backgroundColor} : input) => {
  if (reversed) {
    return (
        <section className={`w-full h-[50vh] bg-${backgroundColor} bg-opacity-70 items-center justify-center grid grid-cols-2`}>
            <div className='text-center'>
                <p className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold'>{title}</p>
                {children}
            </div>
            <div className='flex items-center justify-center'>
                <Image src={imageURL} alt="component" width={600} height={500}/>
            </div>
        </section>
    )
  }
  else {
    return (
        <section className={`w-full h-[50vh] bg-${backgroundColor} bg-opacity-80 items-center justify-center grid grid-cols-2`}>
            <div className='flex items-center justify-center h-full'>
                <Image src={imageURL} alt="component" width={600} height={500}/>
            </div>
            <div className='text-center'>
                <p className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold'>{title}</p>
                {children}
            </div>
        </section>
      )
  }
}

export default FeatureBox