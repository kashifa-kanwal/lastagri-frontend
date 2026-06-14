
import React from 'react';

export default function Page() {
  return (
    <>
      



<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
<div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
{/* Page Heading */}
<div className="flex flex-wrap justify-between gap-3 p-4">
<h1 className="text-river-blue dark:text-background-light text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Qist ki Adaigi</h1>
</div>
{/* Payment Details Card */}
<div className="p-4">
<div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-background-light dark:bg-background-dark">
<div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-6">
<div className="flex items-start gap-4 justify-between flex-wrap">
<div className="flex flex-col gap-1">
<p className="text-neutral-gray dark:text-neutral-gray/80 text-base font-normal leading-normal">Order ID: 12345ABC</p>
<p className="text-neutral-gray dark:text-neutral-gray/80 text-base font-normal leading-normal">Product: Super Fertiliser</p>
</div>
<div className="flex flex-col gap-1 text-right">
<p className="text-neutral-gray dark:text-neutral-gray/80 text-base font-normal leading-normal">Amount Due: ₨۱۵,۰۰۰</p>
<p className="text-alert-red text-base font-medium leading-normal">Late Fee: ₨۱,۵۰۰</p>
</div>
</div>
<hr className="border-t border-neutral-gray/20 my-4"/>
<p className="text-river-blue dark:text-background-light text-3xl font-bold leading-tight tracking-[-0.015em]">Total To Pay: ₨۱۶,۵۰۰</p>
</div>
</div>
</div>
{/* Section Header */}
<h2 className="text-river-blue dark:text-background-light text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Payment Method Selector</h2>
{/* Radio List */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
<label className="flex items-center gap-4 rounded-xl border-2 border-solid p-4 transition-all cursor-pointer border-neutral-gray/30 has-[:checked]:border-indus-green has-[:checked]:bg-indus-green/10">
<img alt="JazzCash logo placeholder" className="h-8 w-8 object-contain" data-alt="JazzCash logo placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBXzxwiSnKIhwXouQmM2fW7jHmQ1685ODn4Nf_TebmE242vapH7SKSzw57pbbsF8q_Lz3ZsgjdXhXRiQlPXk3Lc3_NG4lyRupiB5BGdDZh3QVWO3YZLEdAv2i4LUIQ2BHb67P0TpKyLUlblPTNgP15Fn5vxEkMPEwvyMKhu8V5nNJEuRaJfkEpeB_ShCbLiRqUeP2xlOI0n1wbFupsG8t5X_o35A9-7bax-y4bXWQRWBYdPx6jcXikPmx32h-yCBli_UQyt9Bdvg"/>
<div className="flex grow flex-col">
<p className="text-river-blue dark:text-background-light text-base font-medium leading-normal">JazzCash</p>
<p className="text-neutral-gray dark:text-neutral-gray/80 text-sm font-normal leading-normal">**** 1234</p>
</div>
<input defaultChecked="" className="h-5 w-5 border-2 border-neutral-gray/50 bg-transparent text-indus-green focus:ring-indus-green focus:ring-offset-0" name="payment_method" type="radio"/>
</label>
<label className="flex items-center gap-4 rounded-xl border-2 border-solid p-4 transition-all cursor-pointer border-neutral-gray/30 has-[:checked]:border-indus-green has-[:checked]:bg-indus-green/10">
<img alt="Easypaisa logo placeholder" className="h-8 w-8 object-contain" data-alt="Easypaisa logo placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrKrOMQ4_mt3i96mK3RixCJ2PpIfjTc-ToUW2JdEImzHFoYrmnL8LFffG2hwmMxrx_XRvtUzbpWBYnrTwcst6X7tB33UlANE6gsz1JAmavMJsBZ_MfkgNrj2ArZ5KMSqVss6bmybur22BhOBozC7LFtz22DnTLUWpFximQIuWYDsEvmLEjiSEXxkRjJFpNe2BEp57We9Rru6N6T5629cw7QhJ-ybVzjlYc3aVGVHogMH40rTjHVexr3LgNva5Q3RdWKZ2My83c2yI"/>
<div className="flex grow flex-col">
<p className="text-river-blue dark:text-background-light text-base font-medium leading-normal">Easypaisa</p>
<p className="text-neutral-gray dark:text-neutral-gray/80 text-sm font-normal leading-normal">**** 5678</p>
</div>
<input className="h-5 w-5 border-2 border-neutral-gray/50 bg-transparent text-indus-green focus:ring-indus-green focus:ring-offset-0" name="payment_method" type="radio"/>
</label>
<label className="flex items-center gap-4 rounded-xl border-2 border-solid p-4 transition-all cursor-pointer border-neutral-gray/30 has-[:checked]:border-indus-green has-[:checked]:bg-indus-green/10">
<img alt="Bank Transfer icon" className="h-8 w-8 object-contain" data-alt="Bank Transfer icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEnePohQCrOXBnIbtNiK9VJHqGENscURT86aZPAcdp5n7WdiYRRaHSSsNTqwMkt73IGjfhIRG3IVZapU6Ap-4fiF9ckUkCOkLDoCX3jRtYSU_Gjco9GR09KW8s7row2qfcXIJVDY5hX0VHQUDXJCqrJWYDaGz-vnPh62s9MlSLebRj2LEd6rbYvrcm_ySfxLpfPWeNRg3ntzFviN334ZypkThFzSX5Sl_gm2QDDi9iHQ_84YhEEYaAS_mDZLXPyAfuK_Tc4Csvhr0"/>
<div className="flex grow flex-col">
<p className="text-river-blue dark:text-background-light text-base font-medium leading-normal">Bank Transfer</p>
<p className="text-neutral-gray dark:text-neutral-gray/80 text-sm font-normal leading-normal">**** 9012</p>
</div>
<input className="h-5 w-5 border-2 border-neutral-gray/50 bg-transparent text-indus-green focus:ring-indus-green focus:ring-offset-0" name="payment_method" type="radio"/>
</label>
<label className="flex items-center gap-4 rounded-xl border-2 border-solid p-4 transition-all cursor-pointer border-neutral-gray/30 has-[:checked]:border-indus-green has-[:checked]:bg-indus-green/10">
<img alt="Debit Card icon" className="h-8 w-8 object-contain" data-alt="Debit Card icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbTLY_DcmQyHoOgRZDXSKTvAxUHNw90isPTxS8SCSwTrNYNfpaV1RHEaafFrO98HDTim44aXHH8DtGgITjGk33_NxPc03SD7kFs10K8sr8nJVL1ZotJHfp8lKkveIlbL-oTnMDFZ3ZowLgoum3lOHuFK0qKuFnbA_dOCcrYta8XgcDfpqeGUPZrL3p4NwFf8FVYUeN7cbfR2c8aRmEFfguJj_kGlR4-D9vI9XR8bcMJeDRWvSGqESvmjyuzsZb5X94p7DmeK-vhJc"/>
<div className="flex grow flex-col">
<p className="text-river-blue dark:text-background-light text-base font-medium leading-normal">Debit Card</p>
<p className="text-neutral-gray dark:text-neutral-gray/80 text-sm font-normal leading-normal">**** 3456</p>
</div>
<input className="h-5 w-5 border-2 border-neutral-gray/50 bg-transparent text-indus-green focus:ring-indus-green focus:ring-offset-0" name="payment_method" type="radio"/>
</label>
</div>
{/* Amount and PIN Section */}
<div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Amount Field */}
<div className="flex flex-col">
<label className="text-river-blue dark:text-background-light text-base font-medium leading-normal pb-2" htmlFor="amount">Amount</label>
<input className="form-input flex w-full resize-none overflow-hidden rounded-lg text-river-blue dark:text-background-light focus:outline-0 focus:ring-0 border-none bg-neutral-gray/20 dark:bg-background-dark/80 h-14 p-4 text-lg font-bold leading-normal cursor-not-allowed" disabled="" id="amount" type="text" defaultValue="۱۶,۵۰۰ ₨"/>
</div>
{/* PIN Input */}
<div className="flex flex-col">
<label className="text-river-blue dark:text-background-light text-base font-medium leading-normal pb-2" htmlFor="pin">Tasdeeq ke liye PIN darj karein</label>
<div className="relative">
<input className="form-input flex w-full resize-none overflow-hidden rounded-lg text-river-blue dark:text-background-light focus:outline-0 focus:ring-2 focus:ring-indus-green border-neutral-gray/30 bg-background-light dark:bg-background-dark h-14 p-4 text-lg font-bold leading-normal tracking-[0.5em]" id="pin" maxlength="4" placeholder="••••" type="password"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-neutral-gray cursor-pointer">fingerprint</span>
</div>
</div>
</div>
{/* CTA Button */}
<div className="p-4 mt-4">
<button className="w-full rounded-lg bg-indus-green py-4 px-6 text-xl font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indus-green focus:ring-offset-2 focus:ring-offset-chalk-white dark:focus:ring-offset-background-dark">Adaigi Mukammal Karein</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
