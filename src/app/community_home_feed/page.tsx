
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full">
{/* SideNavBar */}
<aside className="sticky top-0 h-screen w-64 bg-background-light dark:bg-background-dark p-4 flex flex-col border-r border-border-light dark:border-border-dark">
<div className="flex items-center gap-3 p-2 mb-6">
<div className="bg-primary/20 text-primary p-2 rounded-full">
<span className="material-symbols-outlined text-3xl">grass</span>
</div>
<div className="flex flex-col">
<h1 className="text-text-light dark:text-text-dark text-xl font-bold leading-normal">AgriConnect</h1>
<p className="text-primary text-sm font-normal leading-normal">کمیونٹی پلیٹ فارم</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary/20 text-primary font-bold" href="#">
<span className="material-symbols-outlined fill-1">home</span>
<span className="text-base">گھر</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-base">BNPL ڈیش بورڈ</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors" href="#">
<span className="material-symbols-outlined">mail</span>
<span className="text-base">پیغامات</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors" href="#">
<span className="material-symbols-outlined">person</span>
<span className="text-base">پروفائل</span>
</a>
</nav>
<div className="mt-auto flex flex-col gap-2">
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-lg font-bold leading-normal gap-2">
<span className="material-symbols-outlined">add</span>
<span className="truncate">شیئر کریں</span>
</button>
</div>
</aside>
{/* Main Content */}
<main className="flex-1">
{/* TopNavBar */}
<header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
<div className="flex items-center gap-8">
<label className="flex flex-col min-w-40 !h-11 max-w-sm w-96">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-primary flex border border-r-0 border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-l-0 border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-full placeholder:text-text-light/60 dark:placeholder:text-text-dark/60 px-4 rounded-l-none pl-2 text-base font-normal leading-normal" placeholder="تلاش کریں" defaultValue=""/>
</div>
</label>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-primary/10 text-text-light dark:text-text-dark">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-11 border-2 border-primary" data-alt="User's profile picture"></div>
</div>
</header>
{/* Feed Container */}
<div className="p-10 mx-auto max-w-3xl">
<div className="flex flex-col gap-8">
{/* Post Card 1 */}
<div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark">
<div className="p-6">
<div className="flex items-center gap-4 mb-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Profile picture of Amir Khan"></div>
<div className="flex flex-col">
<p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Amir Khan</p>
<p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">ضلع بہاولپور - 2 گھنٹے پہلے</p>
</div>
</div>
<p className="text-text-light/90 dark:text-text-dark/90 text-base font-normal leading-relaxed mb-4">کپاس کی فصل کے لیے کچھ تجاویز۔ اس سال شاندار فصل ہوئی ہے!</p>
</div>
<div className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover" data-alt="A lush green cotton field under a bright blue sky"></div>
<div className="flex items-center justify-around border-t border-border-light dark:border-border-dark">
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
<p className="text-sm font-bold leading-normal">28</p>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">chat_bubble</span>
<p className="text-sm font-bold leading-normal">4</p>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">share</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</div>
{/* Post Card 2 */}
<div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark">
<div className="p-6">
<div className="flex items-center gap-4 mb-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Profile picture of Fatima Bibi"></div>
<div className="flex flex-col">
<p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Fatima Bibi</p>
<p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">ضلع ساہیوال - 5 گھنٹے پہلے</p>
</div>
</div>
<p className="text-text-light/90 dark:text-text-dark/90 text-base font-normal leading-relaxed mb-4">کسی کو معلوم ہے کہ اس کیڑے سے کیسے چھٹکارا حاصل کیا جائے؟ یہ میری گندم کی فصل کو نقصان پہنچا رہا ہے۔</p>
</div>
<div className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover" data-alt="Close-up of a wheat stalk with a small insect on it"></div>
<div className="flex items-center justify-around border-t border-border-light dark:border-border-dark">
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
<p className="text-sm font-bold leading-normal">12</p>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">chat_bubble</span>
<p className="text-sm font-bold leading-normal">9</p>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">share</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</div>
{/* Post Card 3 - Text Only */}
<div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark">
<div className="p-6">
<div className="flex items-center gap-4 mb-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Profile picture of Usman Ali"></div>
<div className="flex flex-col">
<p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Usman Ali</p>
<p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">ضلع ملتان - 1 دن پہلے</p>
</div>
</div>
<p className="text-text-light/90 dark:text-text-dark/90 text-base font-normal leading-relaxed">الحمدللہ، آم کی فصل کی کٹائی مکمل ہو گئی ہے۔ اس سال پیداوار بہترین رہی۔ سب کسان بھائیوں کو مبارکباد۔</p>
</div>
<div className="flex items-center justify-around border-t border-border-light dark:border-border-dark">
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
<p className="text-sm font-bold leading-normal">56</p>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">chat_bubble</span>
<p className="text-sm font-bold leading-normal">15</p>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">share</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-text-light/80 dark:text-text-dark/80 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
{/* Floating Action Button */}
<button className="fixed bottom-10 right-10 flex items-center justify-center gap-2 h-16 w-16 lg:w-auto lg:px-6 bg-accent text-text-light rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 ease-in-out group">
<span className="material-symbols-outlined text-3xl">add</span>
<span className="truncate text-lg font-bold hidden lg:block">شیئر کریں</span>
</button>

    </>
  );
}
