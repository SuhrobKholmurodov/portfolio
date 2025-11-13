import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Cat() {
  const { id } = useParams();
  const [gifUrl, setGifUrl] = useState<string>("");

  useEffect(() => {
    async function fetchGif() {
      try {
        const search = "cat";
        const key = "VHVLGLNA2hlgRyYY1MaxMFXTuS3Lus38";
        const limit = 50;

        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`
        );
        const data = await response.json();
        const gifs = data.data;
        if (gifs.length > 0) {
          const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
          setGifUrl(randomGif.images.downsized.url);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchGif();
  }, [id]);

  return (
    <div className="h-full flex flex-col px-4 sm:pt-[80px] bg-zinc-950 items-center justify-center">
      {gifUrl ? (
        <img
          src={gifUrl}
          alt="cat gif"
          className="max-w-[500px] max-h-[500px] w-auto h-auto rounded shadow-lg"
        />
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-400 border-dashed rounded-full animate-spin" />
          <p className="text-white text-center text-sm">
            A cute kitty is on the way 🐾
          </p>
        </div>
      )}
    </div>
  );
}
