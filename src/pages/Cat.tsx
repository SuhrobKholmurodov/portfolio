import { useParams } from "react-router-dom";

export default function Cat() {
  const { id } = useParams();

  return (
    <div className="h-full flex flex-col px-4 sm:pt-[80px] bg-zinc-950 items-center justify-center">
      <img
        src={`https://cataas.com/cat?${id}`}
        alt="cat"
        className="max-w-[500px] max-h-[500px] w-auto h-auto rounded shadow-lg"
      />
    </div>
  );
}
