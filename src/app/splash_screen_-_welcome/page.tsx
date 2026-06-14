
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A Pakistani farmer in a lush green wheat field at golden hour, with hands holding freshly harvested grain."></div>
<div className="relative z-10 flex h-full grow flex-col">
<div className="flex flex-1 flex-col items-center justify-center p-4">
{/* HeaderImage and BodyText are combined and restyled here to form the central logo and tagline */}
<div className="text-center">
<h1 className="text-white text-5xl font-bold leading-tight">AgriConnect <span className="font-urdu">اگری کنیکٹ</span></h1>
<p className="text-white text-xl font-urdu mt-3">کسانوں کے لیے، کسانوں کی طرف سے</p>
</div>
</div>
{/* ProgressBar is adapted into a loading spinner */}
<div className="flex flex-col items-center justify-center p-12">
<div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#F9A825]"></div>
</div>
{/* Hidden audio element as requested */}
<audio autoplay="">
<source src="https://translate.google.com/translate_tts?ie=UTF-8&amp;q=AgriConnect%20mein%20khushamdeed&amp;tl=ur&amp;client=tw-ob" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
</div>
</div>

    </>
  );
}
