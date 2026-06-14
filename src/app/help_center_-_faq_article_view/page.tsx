
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-gray/50 dark:border-neutral-gray/20 px-4 sm:px-10 py-3 bg-off-white dark:bg-background-dark">
<div className="flex items-center gap-4 text-deep-green">
<div className="size-6">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
</svg>
</div>
<h2 className="text-deep-green dark:text-off-white text-xl font-bold leading-tight tracking-[-0.015em]">AgriConnect</h2>
</div>
<div className="hidden md:flex flex-1 justify-end gap-8">
<div className="flex items-center gap-9">
<a className="text-dark-gray dark:text-off-white text-sm font-medium leading-normal" href="#">ڈیش بورڈ</a>
<a className="text-dark-gray dark:text-off-white text-sm font-medium leading-normal" href="#">قرضے</a>
<a className="text-dark-gray dark:text-off-white text-sm font-medium leading-normal" href="#">سپلائرز</a>
<a className="text-deep-green dark:text-primary text-sm font-bold leading-normal" href="#">امدادی مرکز</a>
</div>
<div className="flex gap-2">
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-primary/20 text-deep-green dark:bg-primary/30 dark:text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span className="material-symbols-outlined text-xl">notifications</span>
</button>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-primary/20 text-deep-green dark:bg-primary/30 dark:text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
<span className="material-symbols-outlined text-xl">settings</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture"></div>
</div>
</header>
<main className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8">
<div className="flex flex-col lg:flex-row gap-8">
{/* Main Content */}
<div className="flex-grow">
{/* Breadcrumbs */}
<div className="flex flex-wrap gap-2 mb-6 font-urdu">
<a className="text-deep-green dark:text-primary/80 text-base font-medium leading-normal" href="#">ہوم</a>
<span className="text-dark-gray/60 dark:text-off-white/60 text-base font-medium leading-normal">/</span>
<a className="text-deep-green dark:text-primary/80 text-base font-medium leading-normal" href="#">امدادی مرکز</a>
<span className="text-dark-gray/60 dark:text-off-white/60 text-base font-medium leading-normal">/</span>
<a className="text-deep-green dark:text-primary/80 text-base font-medium leading-normal" href="#">کریڈٹ اور لمٹس</a>
<span className="text-dark-gray/60 dark:text-off-white/60 text-base font-medium leading-normal">/</span>
<span className="text-dark-gray dark:text-off-white text-base font-medium leading-normal">میری کریڈٹ لمٹ کیسے بڑھتی ہے؟</span>
</div>
{/* PageHeading */}
<div className="flex flex-wrap justify-between gap-3 mb-4">
<h1 className="text-deep-green dark:text-primary text-4xl lg:text-5xl font-bold leading-tight font-urdu">میری کریڈٹ لمٹ کیسے بڑھتی ہے؟</h1>
</div>
{/* ToolBar (Combined with Accessibility) */}
<div className="flex justify-between items-center gap-2 px-4 py-3 border-y border-neutral-gray/50 dark:border-neutral-gray/20 mb-6">
<div className="flex items-center gap-2">
<button aria-label="Decrease text size" className="p-2 text-dark-gray dark:text-off-white rounded-lg hover:bg-neutral-gray/50 dark:hover:bg-neutral-gray/20">
<span className="material-symbols-outlined text-2xl">text_decrease</span>
</button>
<button aria-label="Increase text size" className="p-2 text-dark-gray dark:text-off-white rounded-lg hover:bg-neutral-gray/50 dark:hover:bg-neutral-gray/20">
<span className="material-symbols-outlined text-2xl">text_increase</span>
</button>
<button aria-label="Read article aloud" className="p-2 text-dark-gray dark:text-off-white rounded-lg hover:bg-neutral-gray/50 dark:hover:bg-neutral-gray/20">
<span className="material-symbols-outlined text-2xl">volume_up</span>
</button>
</div>
<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-deep-green text-off-white dark:bg-primary dark:text-background-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
<span className="material-symbols-outlined text-lg">download</span>
<span className="truncate font-urdu">آرٹیکل ڈاؤن لوڈ کریں</span>
</button>
</div>
{/* BodyText */}
<div className="space-y-6 font-urdu text-lg leading-loose text-dark-gray dark:text-off-white/90">
<p>آپ کی کریڈٹ لمٹ کئی عوامل پر منحصر ہے۔ وقت پر ادائیگی، بہتر فصل کی پیداوار، اور اپنی زمین کے رقبے میں اضافہ جیسے اقدامات آپ کی لمٹ کو بڑھانے میں مدد کر سکتے ہیں۔ مزید تفصیلات کے لیے نیچے دیے گئے سیکشنز کو دیکھیں۔</p>
{/* Accordion Section */}
<div className="space-y-4">
<details className="group p-4 rounded-xl border border-neutral-gray/50 dark:border-neutral-gray/20 bg-off-white dark:bg-background-dark/50" open="">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-bold text-xl text-deep-green dark:text-primary">آپ کی لمٹ پر اثرانداز ہونے والے عوامل</span>
<span className="transition group-open:rotate-180">
<span className="material-symbols-outlined">expand_more</span>
</span>
</summary>
<div className="mt-4 text-dark-gray dark:text-off-white/90">
<p>آپ کی کریڈٹ لمٹ کا تعین ان چیزوں سے ہوتا ہے:</p>
<ul className="list-disc list-inside mt-2 space-y-2 pr-4">
<li>بروقت ادائیگیوں کا ریکارڈ</li>
<li>آپ کی فصل کی پیداوار اور فروخت کا ڈیٹا</li>
<li>آپ کی زمین کا رقبہ اور ملکیت</li>
<li>ایگری کنیکٹ پلیٹ فارم پر آپ کی سرگرمی</li>
</ul>
<div className="my-6 p-4 bg-primary/10 dark:bg-primary/20 rounded-lg border-l-4 border-deep-green dark:border-primary">
<p className="font-bold">یاد رکھیں:</p>
<p>ایک اچھا ریکارڈ آپ کو مستقبل میں زیادہ لمٹ حاصل کرنے میں مدد دے گا۔</p>
</div>
</div>
</details>
<details className="group p-4 rounded-xl border border-neutral-gray/50 dark:border-neutral-gray/20 bg-off-white dark:bg-background-dark/50">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-bold text-xl text-deep-green dark:text-primary">اپنی لمٹ بڑھانے کے اقدامات</span>
<span className="transition group-open:rotate-180">
<span className="material-symbols-outlined">expand_more</span>
</span>
</summary>
<div className="mt-4 text-dark-gray dark:text-off-white/90">
<p>اپنی لمٹ بڑھانے کے لیے ان اقدامات پر عمل کریں:</p>
<ol className="list-decimal list-inside mt-2 space-y-2 pr-4">
<li>ہمیشہ اپنی قسطیں وقت پر ادا کریں۔</li>
<li>اپنی فصل کی تمام تفصیلات ایپ میں درج کریں۔</li>
<li>اگر آپ مزید زمین حاصل کرتے ہیں تو اس کی معلومات اپ ڈیٹ کریں۔</li>
</ol>
<div className="mt-6 aspect-video bg-neutral-gray/50 rounded-lg flex items-center justify-center">
<button aria-label="Play video tutorial" className="bg-deep-green text-off-white rounded-full p-4">
<span className="material-symbols-outlined text-4xl">play_arrow</span>
</button>
</div>
<p className="text-sm text-center mt-2 text-dark-gray/70 dark:text-off-white/70">ویڈیو ٹیوٹوریل: ایپ میں اپنی معلومات کیسے اپ ڈیٹ کریں</p>
</div>
</details>
</div>
{/* Interactive Widget */}
<div className="mt-8 p-6 rounded-xl border border-earthy-beige bg-earthy-beige/10 dark:bg-earthy-beige/20 text-center">
<h3 className="font-bold text-2xl text-deep-green dark:text-earthy-beige font-urdu">اپنی ممکنہ لمٹ کا حساب لگائیں</h3>
<p className="mt-2 mb-4">یہ جاننے کے لیے اپنی تفصیلات درج کریں کہ آپ کی لمٹ کتنی ہو سکتی ہے۔</p>
<form className="flex flex-col sm:flex-row gap-4 justify-center items-end">
<div className="w-full sm:w-auto">
<label className="block text-sm font-medium mb-1 text-right" htmlFor="land-size">زمین کا رقبہ (ایکڑ)</label>
<input className="w-full rounded-md border-neutral-gray/50 focus:ring-deep-green focus:border-deep-green dark:bg-background-dark dark:border-neutral-gray/40" id="land-size" type="number"/>
</div>
<button className="w-full sm:w-auto flex items-center justify-center rounded-xl h-10 bg-deep-green text-off-white px-6 font-bold font-urdu" type="button">حساب لگائیں</button>
</form>
</div>
{/* Feedback Module */}
<div className="mt-12 pt-8 border-t border-neutral-gray/50 dark:border-neutral-gray/20">
<p className="text-center font-bold text-xl mb-4 font-urdu">کیا یہ مضمون مددگار تھا؟</p>
<div className="flex justify-center gap-4">
<button className="flex items-center gap-2 rounded-xl h-12 bg-success-green/20 text-success-green dark:bg-success-green/30 px-6 font-bold hover:bg-success-green/30">
<span className="material-symbols-outlined">thumb_up</span>
<span className="font-urdu">ہاں</span>
</button>
<button className="flex items-center gap-2 rounded-xl h-12 bg-neutral-gray/50 dark:bg-neutral-gray/20 text-dark-gray dark:text-off-white px-6 font-bold hover:bg-neutral-gray/70">
<span className="material-symbols-outlined">thumb_down</span>
<span className="font-urdu">نہیں</span>
</button>
</div>
<div className="hidden mt-4 max-w-lg mx-auto">
<label className="block text-center font-medium mb-2 font-urdu" htmlFor="feedback-text">ہم اسے کیسے بہتر بنا سکتے ہیں؟</label>
<textarea className="w-full rounded-lg border-neutral-gray/50 focus:ring-deep-green focus:border-deep-green dark:bg-background-dark dark:border-neutral-gray/40" id="feedback-text" rows="4"></textarea>
<button className="mt-2 w-full flex items-center justify-center rounded-xl h-10 bg-deep-green text-off-white px-6 font-bold font-urdu">جمع کروائیں</button>
</div>
</div>
</div>
</div>
</div>
{/* Related Articles Section */}
<div className="mt-16 pt-8 border-t border-neutral-gray/50 dark:border-neutral-gray/20">
<h2 className="text-3xl font-bold text-deep-green dark:text-primary mb-6 text-center font-urdu">متعلقہ مضامین</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="block p-6 rounded-xl bg-off-white dark:bg-background-dark/50 border border-neutral-gray/50 dark:border-neutral-gray/20 hover:shadow-lg hover:border-deep-green/50 dark:hover:border-primary/50 transition-shadow" href="#">
<h3 className="font-bold text-xl text-deep-green dark:text-primary mb-2 font-urdu">ادائیگی کیسے کریں؟</h3>
<p className="text-dark-gray/80 dark:text-off-white/80 leading-relaxed font-urdu">اپنی قسطوں کی ادائیگی کے لیے مرحلہ وار ہدایات جانیں۔</p>
</a>
<a className="block p-6 rounded-xl bg-off-white dark:bg-background-dark/50 border border-neutral-gray/50 dark:border-neutral-gray/20 hover:shadow-lg hover:border-deep-green/50 dark:hover:border-primary/50 transition-shadow" href="#">
<h3 className="font-bold text-xl text-deep-green dark:text-primary mb-2 font-urdu">اپنا اسٹیٹمنٹ کیسے سمجھیں؟</h3>
<p className="text-dark-gray/80 dark:text-off-white/80 leading-relaxed font-urdu">اپنے ماہانہ اسٹیٹمنٹ میں دی گئی تفصیلات کو سمجھنے میں مدد حاصل کریں۔</p>
</a>
<a className="block p-6 rounded-xl bg-off-white dark:bg-background-dark/50 border border-neutral-gray/50 dark:border-neutral-gray/20 hover:shadow-lg hover:border-deep-green/50 dark:hover:border-primary/50 transition-shadow" href="#">
<h3 className="font-bold text-xl text-deep-green dark:text-primary mb-2 font-urdu">نیا سپلائر کیسے شامل کریں؟</h3>
<p className="text-dark-gray/80 dark:text-off-white/80 leading-relaxed font-urdu">اپنے منظور شدہ سپلائرز کی فہرست میں نئے دکاندار شامل کریں۔</p>
</a>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
