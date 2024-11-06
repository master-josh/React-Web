import React from 'react'

function Home() {
    const Name = 'John Doe'
    const IsDev = "Web Dev"
    return (
        <div className='h-[37.2rem] flex justify-center items-center'>
            <div className='h-[24rem] w-[44rem] rounded-xl overflow-hidden drop-shadow-xl backdrop-blur-3xl bg-white/5'>
                <div className='border-white/30 h-[24rem] w-[17rem] border-r-2 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center border-2 border-white h-[10rem] w-[10rem] rounded-full overflow-hidden'>
                        <img src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833548.jpg?semt=ais_hybrid" alt=""/>
                    </div>
                    <div className='mt-4 w-[12rem] h-[6rem] flex flex-col items-center justify-center'>
                        <span className='text-2xl font-bold text-sky-500'>{Name}</span>
                        <span className='font-bold'>{IsDev}</span>
                    </div>
                </div>
            </div>
            {/* <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 h-[10rem] w-[10rem] rounded-full'></div> */}
        </div>
    )
}

export default Home