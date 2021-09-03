import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'


function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
             transition duration-200 ease-out 
             first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl'/>
            </div>

            <div className='flex flex-col pl-5 flex-grow'>
                <div className='flex items-center justify-between'>
                    <p className=''>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>

                <h4 className='text-xl'>{title}</h4>

                <div className='border-b pt-2 w-10' />

                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                {/* with the above flex-grow bottom StarIcon is pushed down */}

                <div className='flex justify-between items-end pt-5'>
                    {/* items-end brings the star stick to the bottom */}
                    <p className='flex items-center'>
                        <StarIcon className='text-red-400 h-5' />
                        {star}
                    </p>
                    <div>
                        <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                        <p className='text-right font-extralight'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
