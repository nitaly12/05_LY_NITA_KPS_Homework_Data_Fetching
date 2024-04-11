
//Get all movie
export const getAllMovie = async () => {
    const res= await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data = await res.json();
    return data;
}

// Get movies by type
export const getMoviesByType = async (genre) => {
        const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
        const data = await res.json();
        return data;

}

//Get by id
export async function getAllMovieById(movie_id) {
        const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${movie_id}`);
        const data = await res.json();
        return data;
}


