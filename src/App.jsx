import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const inSong = [
    {
      image: "https://i.scdn.co/image/ab67616d0000b273b75bda4e947e3a1b116cc666",
      name: "Tujhse Naraz Nahin Zindagi",
      artist: "Anup Ghosha",
      added: false,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51fBS0m-aQL._UXNaN_FMjpg_QL85_.jpg",
      name: "Do Dil Mil Rahe Hain",
      artist: "Kumar Sanu",
      added: false,
    },
    {
      image: "https://i.ytimg.com/vi/jIqRbFQl-ds/maxresdefault.jpg",
      name: "Humsafar",
      artist: "Akhil Sachdeva and Alia Bhatt",
      added: false,
    },
    {
      image:
        "https://c.saavncdn.com/436/Husn-Hindi-2023-20231129054140-500x500.jpg",
      name: "Husn",
      artist: "Anuv Jain",
      added: false,
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b27358ecb3e5ec3bbef70ee09e43",
      name: "choo lo",
      artist: "The Local Train",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(inSong);

  const handleSongFav = (songIndex) => {
    setSongData((prev) =>
      prev.map((item, index) => {
        if (index === songIndex) return { ...item, added: !item.added };
        return item;
      })
    );
  };

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData} />
      <div className="px-10 flex flex-wrap gap-10 mt-10">
        {songData.map((elem, index) => {
          return (
            <Card
              elem={elem}
              key={index}
              handleClick={handleSongFav}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
