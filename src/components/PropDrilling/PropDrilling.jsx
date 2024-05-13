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
      image:
        "https://images.genius.com/ebebb5e927cbef53f8cf270275dee5d9.718x718x1.jpg",
      songName: "Kaali Hoodie",
      artist: "Bohemia",
      added: false,
    },
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
      image:
        "https://images.genius.com/ebebb5e927cbef53f8cf270275dee5d9.718x718x1.jpg",
      songName: "Kaali Hoodie",
      artist: "Bohemia",
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
