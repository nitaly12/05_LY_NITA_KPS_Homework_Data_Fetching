import { getMoviesByType } from "@/services/movie.service"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Link from "next/link"

export const MovieList = async({type}) => {
    const data = await getMoviesByType(type);
    return (
      <div>
      <p className='text-2xl font-semibold text-white mb-4'>{`${type} Movie`} &gt;</p>
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                  {data?.payload.map(movie => (
                    <CarouselItem className="flex-none mt-4">
                      <div key={movie.movie_id} className="card w-96 rounded-lg bg-base-100 flex flex-col shadow-xl bg-white gap-5 p-4">
                        <figure className="w-[350px] h-[200px] rounded-md">
                          <Link href={`/movie/${movie.movie_id}`}>  <img src={movie.image?movie.image : "https://media.themoviedb.org/t/p/w1000_and_h563_face/azwGlWMGlndJX2V8AJpL6fXy1z8.jpg"} alt="movie" /></Link>
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title line-clamp-1 font-bold text-start text-lg">{movie.movie_title}</h2>
                              <p className=' line-clamp-2 text-start text-sm'>{movie.description}</p>
                            <div className="card-actions">
                        </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
        </Carousel>
      </div>
    )
}