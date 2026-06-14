
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
<div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
<span className="material-symbols-outlined text-4xl text-white/90">language</span>
</div>
<div className="flex flex-row h-full w-full">
<button className="group relative flex h-full w-[51%] flex-col items-center justify-center overflow-hidden bg-[#2E7D32] text-white transition-transform duration-150 ease-in-out hover:brightness-105 active:scale-[0.99] transform">
<div className="absolute inset-0 z-0 opacity-10"></div>
<div className="relative z-10 flex flex-col items-center justify-center text-center">
<h1 className="font-noto text-5xl font-bold">اردو</h1>
<p className="font-noto mt-2 text-lg text-white/80">زبان منتخب کریں</p>
</div>
</button>
<button className="group relative flex h-full w-[49%] flex-col items-center justify-center overflow-hidden bg-[#1565C0] text-white transition-transform duration-150 ease-in-out hover:brightness-105 active:scale-[0.99]">
<div className="absolute inset-0 z-0 opacity-5"></div>
<div className="relative z-10 flex flex-col items-center justify-center text-center">
<h1 className="text-5xl font-bold">English</h1>
<p className="mt-2 text-lg text-white/80">Select Language</p>
</div>
</button>
</div>
</div>

    </>
  );
}
