import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center'>
            <h1 className='font-bold text-2xl'>Travel Photos</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image
                        src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80'
                        alt='/'
                        layout='responsive'
                        width='677'
                        height='451'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        layout='responsive'
                        width='215'
                        height='217'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        layout='responsive'
                        width='215'
                        height='217'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        layout='responsive'
                        width='215'
                        height='217'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1659535832621-4ef57c0e141b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                        alt='/'
                        layout='responsive'
                        width='215'
                        height='217'
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Portfolio;