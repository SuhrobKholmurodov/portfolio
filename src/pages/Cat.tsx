import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetCatsQuery } from "@/api/giphy";

export default function Cat() {
  const { id } = useParams();
  const { data: gifs, isLoading } = useGetCatsQuery(50);
  const [gifUrl, setGifUrl] = useState<string>("");

  useEffect(() => {
    setGifUrl("");
  }, [id]);

  useEffect(() => {
    if (gifs && gifs.length > 0) {
      const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
      setGifUrl(randomGif.images.downsized.url);
    }
  }, [gifs, id]);

  return (
    <div className="h-full flex flex-col px-4 sm:pt-[80px] bg-zinc-950 items-center justify-center">
      {isLoading || !gifUrl ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-400 border-dashed rounded-full animate-spin" />
          <p className="text-white text-center text-sm">
            A cute kitty is on the way 🐾
          </p>
        </div>
      ) : (
        <img
          src={gifUrl}
          alt="cat gif"
          className="max-w-[500px] sm:max-w-[300px] max-h-[500px] w-auto h-auto rounded shadow-lg"
        />
      )}
    </div>
  );
}
