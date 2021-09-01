import Image from "next/image";

function SmallCard({img, location, distance}) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
            hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out'>
            <div className='relative w-16 h-16'>
                <Image src={img} layout='fill' className='rounded-lg' />
                
            </div>
            <div>
                <div>
                    <p>{location}</p>
                    <p className='text-gray-500'>{distance}</p>
                </div>
            </div>
        </div>
    )
}

export default SmallCard
