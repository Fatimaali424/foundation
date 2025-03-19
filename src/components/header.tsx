"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat h-[220px] flex flex-col justify-center items-center px-4 md:px-10"
      style={{ backgroundImage: "url('/footer.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Logo */}
      <div className="absolute top-4 left-4">
        <Image
          src="/Ammanahlogo.jpg"
          alt="Ammanah Logo"
          width={100}
          height={80}
          className="w-auto h-auto max-w-[60px] sm:max-w-[80px] md:max-w-[120px] lg:max-w-[150px] mix-blend-multiply"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute top-4 right-4 space-x-6 text-blue-900 text-sm md:text-lg font-bold font-serif">
        <Link href="/" className="hover:text-red-900 hover:underline transition">Home</Link>
        <Link href="/aboutUs" className="hover:text-red-900 hover:underline transition">About Us</Link>
        <Link href="/contactUs" className="hover:text-red-900 hover:underline transition">Contact Us</Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 right-4">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-pink-700 text-3xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Overlay */}
      {isOpen && (
        <>
          {/* Background overlay to close menu */}
          <div 
            className="fixed inset-0 bg-black/30 z-10" 
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dropdown menu */}
          <div className="absolute top-14 right-4 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-3 z-20 transition-transform duration-300 ease-in-out">
            <Link href="/" className="text-pink-700 hover:text-red-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/aboutUs" className="text-pink-700 hover:text-red-500 transition" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/contactUs" className="text-pink-700 hover:text-red-500 transition" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </>
      )}

      {/* Fixed & Responsive Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-pink-700">
          Welcome to AMMANAH FOUNDATION
        </h1>
        <p className="text-xs sm:text-sm md:text-lg mt-2 text-pink-600">
          Serving the community with trust and loyalty
        </p>
      </div>
    </header>
  );
}
