import React from "react";
import Image from "next/image";

const Memes = (props: any) => {
  const [memeData, setMemeData] = React.useState<any>(props.data.memes);
  const [count, setCount] = React.useState<number>(0);
  const image = count < 0 ? "/Previos-image.jpg" : memeData[count].url;

  React.useEffect(() => {
    const loadData = async () => {
      const res: Response = await fetch("https://meme-api.herokuapp.com/gimme");
      const data = await res.json();
      const newMeme = [...memeData, { ...data }];
      setMemeData(newMeme);
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="flex h-screen flex-col items-center  justify-evenly bg-gray-900">
      <div className="text-2xl font-bold text-white">Memes Life</div>
      <div className="rounded-sm border p-8">
        <Image src={image} alt="" width={400} height={400} />
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        <button className="w-36 rounded-md  bg-violet-500  py-2 text-white hover:bg-violet-600">
          <a
            href={image}
            rel="noreferrer"
            target={"_blank"}
            download="From"
            onClick={() => {}}
          >
            Download
          </a>
        </button>
        {count < 0 ? (
          <div></div>
        ) : (
          <button
            className="w-36 rounded-md bg-rose-500 py-2 text-white hover:bg-rose-600"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Previous
          </button>
        )}
        <button
          className="w-36 rounded-md  bg-sky-400 py-2 text-white hover:bg-sky-500"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Memes;
