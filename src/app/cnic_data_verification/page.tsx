
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-5">
<div className="layout-content-container flex w-full max-w-4xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
{/* Progress Bar */}
<div className="flex flex-col gap-3 p-4">
<div className="flex items-center justify-between gap-6">
<p className="font-urdu text-base font-bold leading-normal text-deep-umber dark:text-gray-300">مرحلہ 2 of 4</p>
<p className="text-sm font-normal leading-normal text-deep-umber dark:text-gray-400">50%</p>
</div>
<div className="rounded-full bg-gray-200 dark:bg-gray-700">
<div className="h-2 rounded-full bg-harvest-gold"></div>
</div>
</div>
{/* Success Banner */}
<div className="mt-4 @container">
<div className="flex flex-1 flex-row items-center justify-between gap-4 rounded-lg bg-success-green p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-white">check_circle</span>
<p className="font-urdu text-lg font-bold leading-tight text-white">کامیاب!</p>
</div>
</div>
</div>
{/* Main Content: Form & Image Preview */}
<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
{/* Form Section */}
<div className="lg:col-span-2">
<div className="flex flex-col gap-6">
{/* Full Name (English) Card */}
<div className="flex flex-col items-stretch justify-start rounded-lg bg-white p-5 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:bg-background-dark dark:border dark:border-gray-700">
<div className="flex w-full grow flex-col items-stretch justify-center gap-2">
<p className="font-urdu text-base font-bold leading-loose text-deep-umber dark:text-gray-300">مکمل نام (انگریزی)</p>
<div className="flex items-center justify-between gap-4">
<p className="text-lg font-medium leading-tight tracking-[-0.015em] text-gray-700 dark:text-gray-200">John Doe</p>
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
</div>
</div>
{/* Full Name (Urdu) Card */}
<div className="flex flex-col items-stretch justify-start rounded-lg bg-white p-5 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:bg-background-dark dark:border dark:border-gray-700">
<div className="flex w-full grow flex-col items-stretch justify-center gap-2">
<p className="font-urdu text-base font-bold leading-loose text-deep-umber dark:text-gray-300">مکمل نام (اردو)</p>
<div className="flex items-center justify-between gap-4">
<p className="font-urdu text-lg font-bold leading-tight tracking-[-0.015em] text-gray-700 dark:text-gray-200">جان ڈو</p>
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
</div>
</div>
{/* CNIC, DOB, Gender Card */}
<div className="flex flex-col items-stretch justify-start rounded-lg bg-white p-5 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:bg-background-dark dark:border dark:border-gray-700">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
{/* CNIC Number */}
<div className="flex w-full grow flex-col items-stretch justify-center gap-2">
<p className="font-urdu text-base font-bold leading-loose text-deep-umber dark:text-gray-300">شناختی کارڈ نمبر</p>
<div className="flex items-center justify-between gap-4">
<p className="text-lg font-medium leading-tight text-gray-700 dark:text-gray-200">12345-1234567-1</p>
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
</div>
{/* Date of Birth */}
<div className="flex w-full grow flex-col items-stretch justify-center gap-2">
<p className="font-urdu text-base font-bold leading-loose text-deep-umber dark:text-gray-300">تاریخ پیدائش</p>
<div className="flex items-center justify-between gap-4">
<p className="text-lg font-medium leading-tight text-gray-700 dark:text-gray-200">1990-01-01</p>
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
</div>
{/* Gender */}
<div className="flex w-full grow flex-col items-stretch justify-center gap-2">
<p className="font-urdu text-base font-bold leading-loose text-deep-umber dark:text-gray-300">جنس</p>
<div className="flex items-center justify-between gap-4">
<p className="font-urdu text-lg font-medium leading-tight text-gray-700 dark:text-gray-200">مرد</p>
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
{/* CNIC Image Preview Section */}
<div className="flex flex-col items-center">
<div className="flex w-full max-w-xs cursor-pointer flex-col items-stretch justify-start rounded-lg bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:bg-background-dark dark:border dark:border-gray-700">
<p className="font-urdu text-base font-bold leading-loose text-deep-umber dark:text-gray-300">شناختی کارڈ کی تصویر</p>
<div className="mt-2 w-full aspect-[1.586/1] bg-center bg-no-repeat bg-cover rounded-lg" data-alt="Scanned image of a Computerized National Identity Card (CNIC)"></div>
</div>
</div>
</div>
{/* Action Buttons */}
<div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-700">
<p className="font-urdu text-lg font-bold leading-normal text-deep-umber dark:text-gray-300">تفصیلات درست ہیں؟</p>
<div className="flex w-full max-w-md flex-col-reverse gap-4 sm:flex-row sm:justify-center">
<button className="flex min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 border border-indus-green text-indus-green dark:text-indus-green/90 dark:border-indus-green/80 text-base font-bold leading-normal hover:bg-indus-green/10 dark:hover:bg-indus-green/20">
<span className="font-urdu truncate">دوبارہ اسکین کریں</span>
</button>
<button className="flex min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-indus-green text-white text-base font-bold leading-normal hover:bg-indus-green/90">
<span className="font-urdu truncate">ہاں، آگے بڑھیں</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
