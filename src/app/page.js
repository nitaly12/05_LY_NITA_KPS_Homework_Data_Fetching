import CardProductComponent from "@/components/CardProductComponent";
import { MovieList } from "@/components/MovieList";
import { getAllMovie } from "@/services/movie.service";

export default async function Home() {
  const allMovie = await getAllMovie();
  const type = [...new Set(allMovie.payload.map(movie => movie.genre))];

  return (
    <main>
      <div>
        <img className="h-screen w-full relative" src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x%7CimageMogr2/thumbnail/600x" alt="" />
        <div className="h-screen w-full absolute bg-black/50 top-0 left-0"></div>
      </div>
      <div className="bg-red-950 px-16 py-8 space-y-8">
        <CardProductComponent/>
        {type.map(typeMovie => (
          <MovieList type={typeMovie} />
        ))}
      </div>
    </main>
  );
}
