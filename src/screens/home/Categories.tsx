import React from 'react'
import Image from 'next/image'
const Categories = (): JSX.Element => {
    return (
        <div className='w-[959px] h-[616px] font-jet'>
            <div className=' w-[985px] h-[616px] top-0 left-0'>
                <div className='relative w-[959px] h-[616px]'>
                    <div className='absolute w-[959px] h-[600px] top-[16px] left-0 '>
                        <Image
                            className='absolute w-[576px] h-[82px] top-0 left-[368px]'
                            alt='Picture'
                            width={576}
                            height={82}
                            src='picture.svg'
                        />
                        <div className='w-[444px] h-[514px] top-[70px] left-0 bg-[#f2f2f2] absolute rounded-[20px]' />
                        <div className='w-[400px] h-[177px] top-[139px] left-[22px] bg-white absolute rounded-[20px] ' />
                        <div className='w-[400px] h-[177px] top-[335px] left-[22px] bg-white absolute rounded-[20px] ' />
                        <div className="w-[170px] left-[28px] absolute top-[93px]  font-extrabold text-black text-[24px] tracking-[0] leading-[25.6px]">
                            Frontend
                        </div>
                        <div className="absolute w-[264px] top-[150px] left-[41px]  font-extrabold text-neutral-700 text-[20px] tracking-[0] leading-[21.3px]">
                            React Developer
                        </div>
                        <div className="absolute w-[229px] top-[346px] left-[41px] font-extrabold text-neutral-700 text-[20px] tracking-[0] leading-[21.3px]">
                            Vue Developer
                        </div>
                        <div className="absolute w-[409px] top-[530px] left-[28px]  font-bold text-[#909090] text-[20px] tracking-[0] leading-[21.3px]">
                            More coming soon..
                        </div>
                        <div className='w-[461px] h-[514px] top-[69px] left-0 bg-[#f2f2f2] absolute rounded-[20px]' />
                        <div className='w-[415px] h-[177px] top-[138px] left-[23px] bg-white absolute rounded-[20px]  '  />
                        <div className='w-[415px] h-[177px] top-[334px] left-[23px] bg-white absolute rounded-[20px]  ' />
                        <div className="w-[177px] left-[29px] absolute top-[93px]  font-extrabold text-black text-[24px] tracking-[0] leading-[25.6px]">
                            Frontend
                        </div>
                        <div className="absolute w-[275px] top-[151px] left-[42px]  font-extrabold text-neutral-700 text-[20px] tracking-[0] leading-[21.3px]">
                            React Developer
                        </div>
                        <div className="absolute w-[238px] top-[347px] left-[42px]  font-extrabold text-neutral-700 text-[20px] tracking-[0] leading-[21.3px]">
                            Vue Developer
                        </div>
                        <div className="left-[29px] absolute w-[424px] top-[531px]  font-bold text-[#909090] text-[20px] tracking-[0] leading-[21.3px]">
                            More coming soon..
                        </div>
                        <div className='w-[461px] h-[514px] top-[70px] left-[498px] bg-[#f2f2f2] absolute rounded-[20px]  ' />
                        <div className='w-[415px] h-[177px] top-[139px] left-[521px] bg-white absolute rounded-[20px]' />
                        <div className='w-[415px] h-[177px] top-[139px] left-[521px] bg-white absolute rounded-[20px]' />
                        <div className='w-[415px] h-[177px] top-[335px] left-[521px] bg-white absolute rounded-[20px]' />
                        <div className="absolute w-[177px] top-[94px] left-[527px]  font-extrabold text-black text-[24px] tracking-[0] leading-[25.6px]">
                            Backend
                        </div>
                        <div className="absolute w-[275px] top-[151px] left-[540px]  font-extrabold text-neutral-700 text-[20px] tracking-[0] leading-[21.3px]">
                            Python Web Developer
                        </div>
                        <div className="absolute w-[238px] top-[347px] left-[540px]  font-extrabold text-neutral-700 text-[20px] tracking-[0] leading-[21.3px]">
                            Php Web Developer
                        </div>
                        <div className="left-[527px] absolute w-[424px] top-[531px] font-bold text-[#909090] text-[20px] tracking-[0] leading-[21.3px]">
                            More coming soon..
                        </div>
                    </div>
                    <div className="absolute  font-extrabold text-black text-[36px] tracking-[0] leading-[38.3px] whitespace-nowrap top-0 left-0">
                        Categories
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
