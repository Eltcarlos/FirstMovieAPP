import { useState } from 'react';
import Titles from '../Titles';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Swiper, SwiperSlide }from 'swiper/react';
import { Autoplay, Navigation} from 'swiper';
import {Link} from 'react-router-dom';
import Rating from '../Stars';
import Loader from '../Notifications/Loader';
import { Empty } from '../Notifications/Empty';

const SwiperTop = ({prevEL, nextEL, movies}) => {
  return (
    <Swiper 
    navigation={{ nextEL, prevEL}} 
    slidesPerView={4} 
    autoplay={true} 
    speed={1000}
    loop={true}
    modules={[Navigation, Autoplay]}
    breakpoints={
      {0:{slidesPerView: 1,
        spaceBetween:10
      }, 
      400:{slidesPerView:2,
        spaceBetween:20},
      768:{slidesPerView:3,
        spaceBetween:30},
      1024:{slidesPerView:4,
        spaceBetween:40}
  }}
    >
    {
      movies?.map((movie,index)=>(
        <SwiperSlide key={index}>
          <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
            <img 
            src={movie?.titleImage ? `/images/movies/${movie.image}` : '/images/user.png'} 
            alt={movie.name} 
            className='w-full h-full object-cover rounded-lg'/>
            <div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
            <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
               <FaHeart/>
            </button>
            <Link className='font-semibold text-xl trancuted line-clamp-2' 
            to={`/movie/${movie?._id}`}>{movie?.name}
            </Link>
            <div className='flex gap-2 text-star'>
              <Rating value={movie?.rate}/>
            </div>
          </div>
         </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


const TopRated = ({movies, isLoading}) => {
  const [nextEL] = useState(null);
  const [prevEL] = useState(null);
  return (
    <div className='my-16'>
      <Titles title='Top Rated' Icon={BsBookmarkStarFill}/>
      <div className='mt-10'>
         {
          isLoading ? <Loader/> :
          movies?.length > 0 ?
          <SwiperTop nextEL={nextEL} prevEL={prevEL} movies={movies}/>
          :
          <Empty message='It seems like we dont have any movie'/>
         }
        <div className='w-full px-1 flex-rows gap-6 pt-12'>
        </div>
      </div>
    </div>
  )
}

export default TopRated
