import Image from "next/image";

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700]'>
            {/* when relative is used then height should be specified */}
            <Image 
                src='https://thewowstyle1.wpengine.com/wp-content/uploads/2015/01/Most-Beautiful-Places-in-the-World.jpg'
                layout='fill'
                // layout='fixed' // doesnot shrink
                objectFit='cover'
            />

            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
                <button className='bg-white px-10 py-4 rounded-full text-purple-500 shadow-md
                    my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
