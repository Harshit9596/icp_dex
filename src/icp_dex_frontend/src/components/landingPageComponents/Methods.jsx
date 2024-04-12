import React from 'react'
import MethodsImageOne from '../../assets/images/MethodsImageOne.png'
import MethodsImageTwo from '../../assets/images/MethodsImageTwo.png'
import { LandingPageData } from '../../TextData'
import GradientSpan from '../../CustomSpan/GradientSpan'
import GradientButton from '../../buttons/GradientButton'

const Methods = () => {
    return (
        <div className='mt-16 h-full md:mx-20  mb-16'>
            <div className='flex flex-col justify-center md:flex-row md:justify-between space-y-8 md:space-y-0'>

                <div className='md:w-1/2 md:ml-6 items-start'>
                    <img src={MethodsImageOne} alt="" className='' />
                </div>

                <div className='md:w-1/2 flex flex-col justify-evenly font-fahkwang text-4xl p-4 md:items-start items-center'>
                    <div className='mb-4 md:mb-0'>
                        <div className='flex gap-2 '>
                            <span className='text-white'>{LandingPageData.MethodsText.UpperSection.HeadingWordOne}</span>
                            <GradientSpan>{LandingPageData.MethodsText.UpperSection.HeadingWordTwo}</GradientSpan>
                        </div>
                        <span className='text-white'>{LandingPageData.MethodsText.UpperSection.HeadingWordThree}</span>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-7 md:leading-6 text-white text-center md:text-start'>
                        {LandingPageData.MethodsText.UpperSection.Description}
                    </div>
                    <div className='m-4 md:m-0'>
                        <GradientButton>{LandingPageData.MethodsText.UpperSection.ButtonText}</GradientButton>
                    </div>
                </div>

            </div>


            <div className='md:flex justify-between hidden'>

                <div className='w-1/2  flex flex-col justify-evenly font-fahkwang text-4xl p-4 '>
                    <div>
                        <div className='flex gap-2'>
                            <span className='text-white'>{LandingPageData.MethodsText.LowerSection.HeadingWordOne}</span>
                            <GradientSpan>{LandingPageData.MethodsText.LowerSection.HeadingWordTwo}</GradientSpan>
                        </div>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-6 text-white'>
                        {LandingPageData.MethodsText.LowerSection.Description}
                    </div>
                    <div>
                        <GradientButton>{LandingPageData.MethodsText.LowerSection.ButtonText}</GradientButton>
                    </div>
                </div>

                <div className='w-1/2 ml-16 items-end'>
                    <img src={MethodsImageTwo} alt="" />
                </div>
            </div>


            <div className='flex flex-col justify-center items-center md:hidden space-y-8 md:space-y-0'>
                <div className='md:w-1/2 md:ml-16 items-end'>
                    <img src={MethodsImageTwo} alt="" />
                </div>

                <div className='md:w-1/2  flex flex-col justify-evenly font-fahkwang text-4xl p-4 items-center text-center'>
                    <div>
                        <div className='flex gap-2 m-2 text-center'>
                            <span className='text-white'>{LandingPageData.MethodsText.LowerSection.HeadingWordOne}</span>
                            <GradientSpan>{LandingPageData.MethodsText.LowerSection.HeadingWordTwo}</GradientSpan>
                        </div>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-7 text-white '>
                        {LandingPageData.MethodsText.LowerSection.Description}
                    </div>
                    <div className='m-4'>
                        <GradientButton>{LandingPageData.MethodsText.LowerSection.ButtonText}</GradientButton>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Methods
