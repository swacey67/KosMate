"use client";

import React from 'react';
import { cn } from "../../lib/utils";

export function KosMateLogo({ className, iconOnly = false }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Ikon Abstrak "The Infinite Dwelling Connector" */}
      <div className="relative w-10 h-10 shrink-0 select-none" style={{ filter: 'drop-shadow(0 0 10px rgba(45,212,191,0.5))' }}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" /> {/* cyan-400 */}
              <stop offset="100%" stopColor="#14b8a6" /> {/* teal-500 */}
            </linearGradient>
          </defs>
          
          {/* Bagian 'K' & Atap - Garis Utama */}
          <path 
            d="M25 20V80M25 50L60 20M25 50L60 80" 
            stroke="url(#logo-gradient)" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Bagian 'M' & Konektor - Garis Melengkung yang Saling Mengunci */}
          <path 
            d="M50 50C65 20 85 35 85 50C85 65 65 80 50 50Z" 
            stroke="url(#logo-gradient)" 
            strokeWidth="6" 
            strokeLinecap="round" 
            className="opacity-80"
          />
          <path 
            d="M60 20C75 35 75 65 60 80" 
            stroke="url(#logo-gradient)" 
            strokeWidth="6" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Teks Logo - KosMate Kanan */}
      {!iconOnly && (
        <span className="text-3xl font-bold tracking-tighter text-white select-none relative top-[-1px]">
          Kos<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">Mate</span>
        </span>
      )}
    </div>
  );
}