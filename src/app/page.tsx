"use client";

import ColorPicker from "@/components/ColorPicker";
import Vinyl from "@/components/svg/vinyl";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState("#000000");
  const [ringColor, setRingColor] = useState("#FFFFFF");
  const [offsetColor, setOffsetColor] = useState("#FFFFFF");
  
  return (
    <main className="h-dvh flex flex-col overflow-hidden relative">
      <section className="grid w-full h-full gap-4 p-8 grid-cols-editorlayout">
        {/* Vinyl */}
        <div className="flex items-center justify-center">
          <Vinyl />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-4 justify-center">
          <input 
            type="text"
            placeholder="Name // Title"
            className="w-full p-2 px-3 border border-gray-300"
          />
          <div className="w-full p-2 px-3 border border-gray-300 h-32 flex justify-center items-center">
            <p className="text-gray-500">Upload // Add Artwork</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Background Color</p>
              <ColorPicker 
                value={bgColor}
                onChange={setBgColor}
              />
            </div>
            <div>
              <p className="text-gray-500">Ring Color</p>
              <ColorPicker 
                value={ringColor}
                onChange={setRingColor}
              />
            </div>
            <div>
              <p className="text-gray-500">Offset Color</p>
              <ColorPicker 
                value={offsetColor}
                onChange={setOffsetColor}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
