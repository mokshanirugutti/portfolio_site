import React from 'react'
interface CustomButtonProps {
    link: string;
    title: string;
}
const CustomButton = ({ link, title }: CustomButtonProps) => {
    return (
        <div>
      <a href={link} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white">{title}</span>
</a>
        </div>

        // <a href={link} target="_blank" classNameNameName='border py-2 px-5 m-2 w-32 bg-gray-300 border-black hover:bg-gray-100 hover:rounded-xl transition-all ease-in-out duration-300'>{title}</a>
    )
}

export default CustomButton;