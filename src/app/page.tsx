"use client";
import { useState, useCallback } from "react";
import DropBox from "@/components/dropBox";
import { convertSvgToImage } from "@/lib/utils/helpers";
import ColorPicker from "@/components/colorPicker";
import Export from "@/components/export";
import Vinyl from "@/components/svg/vinyl";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [ringColor, setRingColor] = useState<string>("#FFFFFF");
  const [offsetColor, setOffsetColor] = useState<string>("#000000");
  const [outerRingColor, setOuterRingColor] = useState<string>("#000000");

  const [bgArtwork, setBgArtwork] = useState<string | null>(null);
  const [innerRingArtwork, setInnerRingArtwork] = useState<string | null>(null);

  const handleVinylConvertion = (format: 'png' | 'jpeg' | 'jpg') => {
    convertSvgToImage('disyl-vinyl', format)
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `disyl-${title.toLowerCase().replace(/\s/g, '-')}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error converting SVG:', error);
      });
  };
  
  return (
    <main className="h-full xl:h-dvh flex flex-col xl:overflow-hidden relative">
      <p className="xl:hidden absolute top-0 text-center mt-4 w-full text-sm text-gray-600">
        scroll down :)
      </p>
      <section className="grid grid-cols-1 w-full h-full gap-4 p-4 xl:p-8 xl:grid-cols-editorlayout">
        {/* Vinyl */}
        <div className="flex items-center justify-center">
          <Vinyl 
            backgroundColor={bgColor}
            innerRingColor={ringColor}
            ringOffset={offsetColor}
            outerRingColor={outerRingColor}
            bgImage={bgArtwork}
            innerBgImage={innerRingArtwork}
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <input 
            type="text"
            placeholder="Name // Title"
            className="w-full p-2 px-3 border border-gray-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DropBox 
            title="Upload // Background Artwork" 
            additional="700px x 700px"
            acceptedFiles={{ 'image/*': ['.jpeg', '.png'] }}
            setPreview={setBgArtwork}
            optional
          />
          <DropBox 
            title="Upload // Inner Circle Background Artwork" 
            additional="250px x 250px"
            acceptedFiles={{ 'image/*': ['.jpeg', '.png'] }}
            setPreview={setInnerRingArtwork}
            optional
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
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
          <Export 
            title={title}
            handleConvert={handleVinylConvertion}
          />
          <p className="text-sm text-gray-500 text-right">
            * optional
          </p>
        </div>
      </section>
    </main>
  );
}
