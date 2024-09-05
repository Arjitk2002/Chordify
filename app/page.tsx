"use client";
import Image from "next/image";
import { Appbar } from "./components/Appbar";
import Link from "next/link";
import useRedirect from "./hooks/useRedirect";

export default function Home() {
  useRedirect();
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#1b5464] text-white">
      <Appbar />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#e2e8f0]">
                    Empower Your Fans to Shape Your Music
                  </h1>
                  <p className="max-w-[600px] text-[#9ca3af] md:text-xl">
                    Chordify lets your fans request and vote on the songs they
                    want to hear during your live streams. Engage your audience
                    like never before.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#10b981] px-8 text-sm font-medium text-[#1f2937] shadow transition-colors hover:bg-[#34d399] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6ee7b7] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#374151] bg-[#1f2937] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#4b5563] hover:text-[#e2e8f0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6ee7b7] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="https://plus.unsplash.com/premium_photo-1682125848355-4fb0e6da7647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#27778d]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4b5563] px-3 py-1 text-sm text-[#e2e8f0]">
                  Fan-Curated Playlists
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#e2e8f0]">
                  Let Your Fans Decide
                </h2>
                <p className="max-w-[900px] text-[#9ca3af] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamify gives your fans the power to request and vote on the
                  songs they want to hear during your live streams. Keep your
                  audience engaged and energized.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://thumbs.dreamstime.com/b/music-doodle-22805291.jpg"
                alt="Fan-Curated Playlists"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#e2e8f0]">
                        Real-Time Requests
                      </h3>
                      <p className="text-[#9ca3af]">
                        Your fans can request songs in real-time during your
                        streams, keeping the music fresh and engaging.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#e2e8f0]">
                        Audience Voting
                      </h3>
                      <p className="text-[#9ca3af]">
                        Your fans can vote on the songs they want to hear,
                        ensuring the most popular tracks get played.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#374151]">
        <p className="text-xs text-[#9ca3af]">
          &copy; 2024 Streamify. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-[#9ca3af]"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-[#9ca3af]"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
