
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
{/* Background Camera Feed Simulation */}
<div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
<img className="h-full w-full object-cover opacity-30 blur-sm scale-110" data-alt="Simulated camera feed showing a person's blurred silhouette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG4rmJRkqLE-wIB0_xlVVyirKMqx0XLR5z3leO5_GLe9SOCO1u11vwD9Bsmxa7HRl_CM0q1yotqsm9_uw78BmxMUiZ75H3mlP0hFPyIYxivRRLM7jGwWYK-BMUgRoTlNj7tveAMKzkSfUiDL05E33QTWYuY-KbmoxVtbmWGsIdc0fKPtUw8OzL5XcAjaUexIXtZNxz2zBCN9sEtHZNPBCkJ1Za8PizfUvpI4IvGdz1semjCE0qS7bG5TLfgK3myGb44IbLaGY_vqc"/>
</div>
<div className="relative z-10 flex h-full grow flex-col">
{/* Top Bar with Progress and Toolbar */}
<div className="absolute top-0 left-0 right-0 p-4 sm:p-6 lg:p-8 flex flex-col gap-4">
{/* ProgressBar */}
<div className="flex flex-col gap-2">
<p className="text-white text-sm font-medium leading-normal px-1">Step 1 of 4</p>
<div className="rounded-full bg-white/20 h-2">
<div className="h-2 rounded-full bg-accent"></div>
</div>
</div>
{/* ToolBar */}
<div className="flex justify-between items-center w-full">
<div>{/* Spacer */}</div>
<button className="p-3 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-colors">
<span className="material-symbols-outlined">flashlight_on</span>
</button>
</div>
</div>
<div className="flex flex-1 flex-col items-center justify-center p-4">
{/* HeadlineText */}
<h2 className="text-white tracking-light text-[28px] font-bold leading-tight text-center pb-3 pt-5">Apna Shinakhti Card scan karein</h2>
{/* EmptyState (Scanning Frame) */}
<div className="flex flex-col w-full max-w-xl">
<div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-primary px-6 py-14">
<div className="flex max-w-[480px] flex-col items-center gap-2 text-center">
<p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Place your CNIC inside the frame</p>
<p className="text-white/80 text-sm font-normal leading-normal">The camera will automatically detect and capture the card.</p>
</div>
</div>
</div>
</div>
{/* Bottom Controls */}
<div className="w-full pb-8 pt-4 px-4 flex justify-center">
{/* ButtonGroup */}
<div className="flex flex-col sm:flex-row flex-1 gap-3 max-w-md w-full items-stretch">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] flex-1 hover:bg-primary/90 transition-colors">
<span className="truncate">Auto Capture</span>
</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-transparent border-2 border-white/50 text-white text-base font-bold leading-normal tracking-[0.015em] flex-1 hover:bg-white/10 transition-colors">
<span className="truncate">Manual Upload</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
