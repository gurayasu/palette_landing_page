"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ChevronRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

function YouTubePlaylistPlayer({ playlistId }: { playlistId: string }) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      ></iframe>
    </div>
  );
}

function Countdown({ targetDate }: { targetDate: string }) {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now: number = new Date().getTime();
      const target: number = new Date(targetDate).getTime();
      const difference: number = target - now;
      setDaysLeft(Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24))));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-box shadow-lg p-4 rounded-lg">
        <h3 className="countdown-title text-2xl font-bold">
          大同窓会まであと...
        </h3>
        <div className="flex items-baseline justify-center">
          <p className="countdown-days text-6xl font-bold">{daysLeft}</p>
          <p className="countdown-label text-xl ml-2">日</p>
        </div>
      </div>
    </div>
  );
}

export function ResponsiveReunionUpdated() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>いいかねPalette大同窓会</title>
        <meta property="og:title" content="いいかねPalette大同窓会" />
        <meta property="og:image" content="/pallete_channel_logo.jpg" />
        <meta property="og:url" content="https://palette-reunion.vercel.app" />
      </Head>
      <div className="flex flex-col min-h-screen bg-background">
        <header className="py-4 md:py-6 border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold black">
              いいかねPalette大同窓会
            </h1>
            <div className="ml-auto custom-image-container">
              <Image
                src="/pallete_channel_logo.jpg"
                alt="Image Description"
                width={64} // 適切な幅を指定
                height={64} // 適切な高さを指定
                className="h-12 w-12 md:h-18 md:w-18 rounded-full"
              />
            </div>
            {/* <nav className="hidden md:block">
      <ul className="flex space-x-6">
        <li>
          <a
            href="#about"
            className="hover:text-primary transition-colors"
          >
            概要
          </a>
        </li>
        <li>
          <a
            href="#details"
            className="hover:text-primary transition-colors"
          >
            詳細
          </a>
        </li>
        <li>
          <a
            href="#video"
            className="hover:text-primary transition-colors"
          >
            動画
          </a>
        </li>
      </ul>
    </nav>
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden"
    >
      <Menu className="w-6 h-6" />
    </button> */}
          </div>
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    href="#about"
                    className="block px-4 py-2 hover:bg-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    概要
                  </a>
                </li>
                <li>
                  <a
                    href="#details"
                    className="block px-4 py-2 hover:bg-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    詳細
                  </a>
                </li>
                <li>
                  <a
                    href="#video"
                    className="block px-4 py-2 hover:bg-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    動画
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="flex-grow">
          <section
            id="about"
            className="py-12 md:py-24 bg-gradient-to-b from-background to-secondary"
          >
            <div className="container mx-auto px-4 ">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    <span className="block">
                      ここにあるもの
                      {/* 懐かしい仲間と */}
                    </span>
                    <span className="block text-primary">
                      Palette
                      {/* 再会の時 */}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    様々な時期の長期滞在者が集う大同窓会
                    <br />
                    思い出が詰まったPaletteで懐かしい再会や
                    <br />
                    新たな出会いを楽しみましょう
                  </p>
                </div>
                <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none order-last md:order-none">
                  <YouTubePlaylistPlayer playlistId="PLoq8dkBgTmygiZSYlPIOvZpdQnufhkEIH" />
                </div>
              </div>
            </div>
          </section>

          <section id="details" className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              {/* <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-center">
      イベント詳細
    </h2> */}
              <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                <div className="flex flex-col items-center text-center group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary p-4 md:p-6 rounded-full mb-4 md:mb-6 transition-colors duration-300 group-hover:bg-primary">
                      <Calendar className="w-8 h-8 md:w-12 md:h-12 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">日時</h3>
                  </div>
                  <p className="text-muted-foreground mt-2 text-left text-2xl md:text-3xl font-semibold">
                    2024/12/28(土) ~ 12/29(日)
                  </p>
                  <p className="text-muted-foreground mt-2 text-left text-xl md:text-2xl font-semibold">
                    {/* （ 前夜祭: 12/27(金) ) */}※ 調整中
                  </p>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary p-4 md:p-6 rounded-full mb-4 md:mb-6 transition-colors duration-300 group-hover:bg-primary">
                      <MapPin className="w-8 h-8 md:w-12 md:h-12 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">場所</h3>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/Bzx2iaLjnb9Nue4o7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-center text-2xl md:text-3xl font-semibold"
                  >
                    いいかねPalette
                    <br />
                    <p className="text-muted-foreground mt-2 text-left text-xl md:text-2xl font-semibold underline">
                      福岡県田川市猪国2559
                    </p>
                  </a>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary p-4 md:p-6 rounded-full mb-4 md:mb-6 transition-colors duration-300 group-hover:bg-primary">
                      <Users className="w-8 h-8 md:w-12 md:h-12 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">対象</h3>
                  </div>
                  <p className="text-muted-foreground mt-4 text-2xl md:text-3xl font-semibold">
                    Palette長期滞在経験者
                  </p>
                  <p className="text-muted-foreground text-left text-xl md:text-2xl font-semibold">
                    そのご家族・ご友人・パートナー等
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <section id="video" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">
          思い出の動画集
        </h2>
        <div className="max-w-3xl mx-auto">
          <YouTubePlaylistPlayer playlistId="PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT" />
        </div>
      </div>
    </section> */}
          <div className="py-6 md:py-12 bg-custom">
            <div className="container mx-auto px-4 flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeDehLEpqb6H2xfzulql-v_OVDyk15BiAyIEviMYaIgrDz5Wg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-2xl py-8 px-16 bg-white button text-primary-black hover: hover:text-white transition-colors font-sans border border-black"
                >
                  参加フォームを開く
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
          <section id="countdown" className="py-4 md:py-8 bg-custom">
            <div className="container mx-auto px-4">
              <Countdown targetDate="2024-12-27T15:00:00Z" />
            </div>
          </section>
        </main>

        <footer className="bg-footer text-primary-foreground py-8 md:py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base">
              &copy; 2024 同窓会実行委員会 All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
