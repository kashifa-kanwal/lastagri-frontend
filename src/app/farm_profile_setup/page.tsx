
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-8 px-4 sm:px-8 md:px-10 lg:px-20">
<div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
{/* ProgressBar */}
<div className="flex flex-col gap-3 p-4">
<div className="flex gap-6 justify-between"><p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Step 4 of 4</p></div>
<div className="rounded bg-subtle-light dark:bg-subtle-dark"><div className="h-2 rounded bg-accent"></div></div>
</div>
{/* PageHeading */}
<div className="flex flex-wrap justify-between items-center gap-3 p-4 mt-4">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-4xl text-primary dark:text-accent">agriculture</span>
<div className="flex min-w-72 flex-col gap-1">
<p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] urdu-font">اپنی زمین کی تفصیلات</p>
<p className="text-primary dark:text-accent text-base font-normal leading-normal">Enter your land details to complete your profile</p>
</div>
</div>
</div>
<div className="flex flex-col gap-8 mt-8">
{/* Land Size Section */}
<div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-1">Land Size</h2>
{/* Illustration */}
<div className="relative w-full h-24 bg-subtle-light dark:bg-subtle-dark/50 rounded-lg overflow-hidden my-4 flex items-end">
<div className="absolute bottom-0 left-0 w-full h-full bg-repeat-x"></div>
<div className="absolute bottom-0 left-0 h-1/2 w-full"></div>
<div className="relative w-[32%] h-full bg-[#8FBC8F]/50 transition-all duration-300 ease-out flex items-end overflow-hidden" id="field-growth">
<img className="absolute inset-0 w-full h-full object-cover opacity-30" data-alt="growing sprouts pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2PUUVtDxTICo0zE-Q8IAxApK6YZqqiqf0hA954uvMM82rh8eBb0jgWVpBZQ9eaOIFVbdRM02qTpc9iVtEhbW_CAaMrNXzk6OPjeo548fWdp4owvTd-zsQ9IxDxljuz2mDmY8Max1C9c-97R2MJ3gx2YgBfRbnaN9bIQ6nNWixOVNalH6Hy-7Eg6JfCzCTRl2HKJ7dzunAeouVQGo-iYG5n0epciw9nM-8nzqytNUJnjVtmf_9xNxva5WYTdGFX8z34KvkXhXKd2o"/>
</div>
</div>
{/* Slider */}
<div className="@container">
<div className="relative flex w-full flex-col items-start justify-between gap-3 p-4">
<div className="flex w-full shrink-[3] items-center justify-between">
<p className="text-text-light dark:text-text-dark text-base font-medium leading-normal urdu-font">رقبہ (ایکڑ)</p>
<p className="text-text-light dark:text-text-dark text-xl font-bold leading-normal urdu-font">۵</p>
</div>
<div className="flex h-4 w-full items-center gap-4">
<div className="flex h-1.5 flex-1 rounded-full bg-subtle-light dark:bg-subtle-dark">
<div className="h-full w-[32%] rounded-full bg-primary dark:bg-accent"></div>
<div className="relative"><div className="absolute -left-2.5 -top-2 size-5 rounded-full bg-primary dark:bg-accent border-2 border-background-light dark:border-background-dark cursor-pointer"></div></div>
</div>
</div>
</div>
</div>
{/* MetaText */}
<p className="text-primary dark:text-accent text-sm font-normal leading-normal px-4 pb-1 urdu-font">کنال میں برابر: ۴۰</p>
</div>
{/* Primary Crop Section */}
<div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-1">Primary Crop</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
<div className="flex flex-col items-center justify-center p-3 aspect-square bg-background-light dark:bg-subtle-dark rounded-lg border-2 border-primary dark:border-accent cursor-pointer transition-all">
<img className="w-16 h-16 object-contain mb-2" data-alt="icon of wheat stalks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQwpg1rt0xS413fcUCjfut4RfFcbGeKwygH0G8wHNyg337r45-rQr2Wqb5NZct3ESzq0nDIz5YvTw_h5SIN0Mn6XExLJQXLi5rO6h1ng7Nd7tYJgRIqCD0CCpYn7Im-LV7MUPgOYP48vcyuTEJ27TX0vBfBvC4qafwMDWtD1qIspxznWqVJ7g6B-u2b8FEWRByxX0MwU-x5KGeTXPu2hih1HkuCYT2qGMQLmmVtzDSq7g9s6-S8Sghlq4H7-Wd6Eor0beHJAErNM0"/>
<p className="text-text-light dark:text-text-dark text-center font-medium urdu-font">گندم</p>
</div>
<div className="flex flex-col items-center justify-center p-3 aspect-square bg-background-light dark:bg-subtle-dark rounded-lg border-2 border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-accent/50 cursor-pointer transition-all">
<img className="w-16 h-16 object-contain mb-2" data-alt="icon of rice paddy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuktnN8MMpIyrGRhCWOKDdiRE-9e2o20Avic30lA8S9UXvnTD0XMXdqVbAuafhO_RGDvSQv1bsQFYAARCMXFDWfM7qk8uQNOdiAT6lXQVEPehK2CsgakFY74lMY1e2MguxIYpKUPiEiWluXIoRQwaEMtVVVKBbomVVdgE1r37xi1T6eqPzSKs7IvFncFLghB6567QOUHpli2MM0I9fzQeWl02oHz2zA4cfVWpMNOTCOZxfyC-JhnUDlYCWl-GKrlRoMAAtiVn9uyA"/>
<p className="text-text-light dark:text-text-dark text-center font-medium urdu-font">چاول</p>
</div>
<div className="flex flex-col items-center justify-center p-3 aspect-square bg-background-light dark:bg-subtle-dark rounded-lg border-2 border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-accent/50 cursor-pointer transition-all">
<img className="w-16 h-16 object-contain mb-2" data-alt="icon of a cotton boll" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCumLtjksBPRYHbBUV5tF2nT7w8q4E5m1O7xc0lIHBacywj6P2612z5X_Scxrcyd1noQ92FH6Dm6aB7VysdsLykbICRZUb6Bb_kT-bBz9pN2ZYzOlDFc4ApZhDfvDbmRcSCW1VXzCR7iG-mW0NSETK9xRQbuG9wTcMLiUgaHB84Mem8qKkZNNIsUYUYgSIx8GnhA3_efxfyzxADMldlOTF23Ln7I9OCzpl0N8yYXUPxIi0S7py494w6Yo7a7u4eypQ68BsN3zGxUSI"/>
<p className="text-text-light dark:text-text-dark text-center font-medium urdu-font">کپاس</p>
</div>
<div className="flex flex-col items-center justify-center p-3 aspect-square bg-background-light dark:bg-subtle-dark rounded-lg border-2 border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-accent/50 cursor-pointer transition-all">
<img className="w-16 h-16 object-contain mb-2" data-alt="icon of sugarcane stalks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE--jU6advfbZ1QaLAKiHMRnCc1SFfBwDo9INfbucLjQeIV2ImmWvOk3A_vZ8EcApYP98ntA4u7esjAzVNlov2rHZB_WpHJsva6rYTv0Zb9magD01hE034q6ooXEZ71w8NOrZHf9WJs3IuCov59pgP8VvwzeP3oe59BQDqH3taT8IGcyTybwbY0ZlkGa7HrZDCdlDSqpuzjRtRrOg-9CpP-EkX0olX3CARGJlYaepGdlY5sRpJMwP4x35DTxgZ5Oz2zhBs1bNTmGY"/>
<p className="text-text-light dark:text-text-dark text-center font-medium urdu-font">گنا</p>
</div>
<div className="flex flex-col items-center justify-center p-3 aspect-square bg-background-light dark:bg-subtle-dark rounded-lg border-2 border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-accent/50 cursor-pointer transition-all">
<img className="w-16 h-16 object-contain mb-2" data-alt="icon of a corn cob" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdmp6MLxjDu-FlZG0MhQ0jq8w9Rx4m7yRx-9Qv5j9zpDb86EEIth16tc2Zss50AxoxOlkiWFmsZFwB1JeeyHaX3QaYbacysshyJOGAfrAzfjSl3BU4PPcTVsYbSa7jbvkiITDsWvK7KrIYKH0eC9nGgjOpSdxrYN_i3DZyLe_U79y2rrH7ttTuc9CEE2eEqBatdAwhcNaftUeR_1KzE-maNSxgbja9RoVCRQeJGepqpZsZYaijw1oOE3lxC_3m1dtjRijCAI1TTB8"/>
<p className="text-text-light dark:text-text-dark text-center font-medium urdu-font">مکئی</p>
</div>
<div className="flex flex-col items-center justify-center p-3 aspect-square bg-background-light dark:bg-subtle-dark rounded-lg border-2 border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-accent/50 cursor-pointer transition-all">
<img className="w-16 h-16 object-contain mb-2" data-alt="icon of a basket of vegetables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChwPikpQvuugW_irMDxWROKraCSYylBOD2FcB-q64gZ9TwG13Ywgybyqf6dut0inVUz1rWBBIGUBpdgb79OsxWWXDg1VRCl1-j_UkvUu4PzPyUolwpVjaVhSMuShyis3hQlhLQ0vW_jBAQxOO-VojQhMj8UbhzhoVmEd-m8oj2aF3FCRtJtlC8C07c5xizVkUiSeS9RW1IEELxeuvqTro1KZSKbkK7zmmnceKpaLIHvEouTxFniecqGtWCIxejrd-BZh1Du6D8-9o"/>
<p className="text-text-light dark:text-text-dark text-center font-medium urdu-font">سبزیاں</p>
</div>
</div>
</div>
{/* District Section */}
<div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-6 rounded-xl border border-border-light dark:border-border-dark">
<h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-1">District</h2>
<div className="relative p-4">
<label className="sr-only" htmlFor="district-select">District</label>
<div className="relative">
<span className="material-symbols-outlined absolute inset-y-0 left-0 flex items-center pl-3 text-text-light/50 dark:text-text-dark/50">search</span>
<select className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-subtle-dark text-text-light dark:text-text-dark border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary dark:focus:ring-accent dark:focus:border-accent" id="district-select">
<option>Select your district</option>
<option>Lahore</option>
<option>Karachi</option>
<option>Faisalabad</option>
<option>Rawalpindi</option>
<option>Multan</option>
</select>
</div>
</div>
</div>
</div>
{/* Action Button */}
<div className="mt-10 p-4">
<button className="w-full bg-primary dark:bg-accent hover:bg-primary/90 dark:hover:bg-accent/90 text-white dark:text-text-light text-lg font-bold py-4 px-6 rounded-lg transition-colors urdu-font">مکمل کریں</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
