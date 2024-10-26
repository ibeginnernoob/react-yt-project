import Thumbnail from '../assets/2015-porsche-918-spyder-1888000 copy.jpg';
import ChannelThumbnail from '../assets/logic copy.jpg';

function Card(){
    return <div className='flex flex-col w-[400px]  m-20'>
        <img src={Thumbnail} alt="Thumbnail" className='h-[225px] rounded-lg mb-3' />
        <div className='flex flex-row items-top'>
            <img src={ChannelThumbnail} alt="Channel Thumbnail" className='w-10 h-10 mr-3 rounded-full' />
            <div className='flex flex-col'>
                <h2 className='font-semibold text-base font-roboto'>Title of the video</h2>
                <p className='text-zinc-600 text-sm'>Channel Name</p>
                <div className='flex flex-row'>
                    <p className='text-zinc-600 text-sm'>132k views &#183; 1 year ago</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
        </div>
    </div>
}

export default Card;