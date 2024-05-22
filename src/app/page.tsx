"use client";

import ColorPicker from "@/components/ColorPicker";
import Export from "@/components/Export";
import Vinyl from "@/components/svg/vinyl";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [title, setTitle] = useState("");
  const [bgColor, setBgColor] = useState("#000000");
  const [ringColor, setRingColor] = useState("#FFFFFF");
  const [offsetColor, setOffsetColor] = useState("#413b3b");
  const [outerRingColor, setOuterRingColor] = useState("#ff0000");
  
  return (
    <main className="h-dvh flex flex-col overflow-hidden relative">
      <section className="grid w-full h-full gap-4 p-8 grid-cols-editorlayout">
        {/* Vinyl */}
        <div className="flex items-center justify-center">
          <Vinyl 
            backgroundColor={bgColor}
            innerRingColor={ringColor}
            ringOffset={offsetColor}
            outerRingColor={outerRingColor}
          />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-sm text-gray-500">* optional</p>
          <input 
            type="text"
            placeholder="Name // Title"
            className="w-full p-2 px-3 border border-gray-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="w-full p-2 px-3 border border-gray-300 h-20 flex justify-center items-center">
            <p className="text-gray-500">Upload // Background Artwork *</p>
          </div>
          <div className="w-full p-2 px-3 border border-gray-300 h-20 flex justify-center items-center">
            <p className="text-gray-500">Upload // Inner Circle Background Artwork *</p>
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
            <div>
              <p className="text-gray-500">Outer Ring Color</p>
              <ColorPicker 
                value={outerRingColor}
                onChange={setOuterRingColor}
              />
            </div>
          </div>
          <Export title={title} />
        </div>
      </section>
    </main>
  );
}
