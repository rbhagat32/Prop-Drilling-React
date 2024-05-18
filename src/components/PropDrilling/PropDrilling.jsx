import React, { useState } from "react";
import SongCard from "./SongCard";
import Navbar from "./Navbar";

function PropDrilling() {
  const rawData = [
    {
      image: "https://i1.sndcdn.com/artworks-000189459680-vf9ez9-t500x500.jpg",
      songName: "Zamana Jali",
      artist: "Bohemia",
      added: false,
    },
    {
      image:
        "https://i1.sndcdn.com/artworks-98PuvzK2mXAPKUq2-AX4NjA-t500x500.jpg",
      songName: "Same Beef",
      artist: "Sidhu Moosewala",
      added: false,
    },
    {
      image: "https://c.saavncdn.com/470/Dildarian-2005-500x500.jpg",
      songName: "Dildarian",
      artist: "Amrinder Gill",
      added: false,
    },
    {
      image: "https://i1.sndcdn.com/artworks-48GEh75yGtH8-0-t500x500.png",
      songName: "Hukam",
      artist: "Karan Aujla",
      added: false,
    },
    {
      image: "https://i.redd.it/pqib9987g2tc1.jpeg",
      songName: "410",
      artist: "Sidhu Moosewala",
      added: false,
    },
    {
      image: "https://i1.sndcdn.com/artworks-000068666989-i7xr51-t500x500.jpg",
      songName: "Rooh",
      artist: "Bohemia",
      added: false,
    },
    {
      image: "https://i1.sndcdn.com/artworks-fgQCI3pFN0to-0-t500x500.jpg",
      songName: "Cheques",
      artist: "Shubh",
      added: false,
    },
    {
      image: "https://c.saavncdn.com/196/Jaguar-Punjabi-2015-500x500.jpg",
      songName: "Jaguar",
      artist: "Sukh-E, Bohemia",
      added: false,
    },
    {
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0b/eb/88/0beb889d-1bd6-5906-48be-bae958b17673/859783911719_cover.jpg/800x800cc.jpg",
      songName: "Jaam",
      artist: "Talwiinder",
      added: false,
    },
    {
      image: "https://c.saavncdn.com/685/Twelve-Punjabi-2012-500x500.jpg",
      songName: "Khair Mangdi",
      artist: "Bilal Saeed",
      added: false,
    },
    {
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b2/b4/26/b2b426e9-e303-2165-3866-aba6877c4832/cover.jpg/800x800cc.jpg",
      songName: "Kamlee",
      artist: "SARRB, Starboy X",
      added: false,
    },
    {
      image: "https://i1.sndcdn.com/artworks-dMrhVfX7HBLb-0-t500x500.jpg",
      songName: "Tere Bina",
      artist: "Amrinder Gill",
      added: false,
    },
  ];

  const [data, setData] = useState(rawData);

  const handleClick = (clickedIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === clickedIndex) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-full bg-zinc-100">
      {/* Entire data which is array of objects is passed into props for Navbar */}
      <Navbar props={data} />
      <div className="container mx-auto py-12 flex justify-center gap-12 flex-wrap">
        {data.map((item, index) => (
          <SongCard
            key={index}
            index={index}
            // each single item (or object from array of objects) is passed into props for Card
            props={item}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default PropDrilling;
