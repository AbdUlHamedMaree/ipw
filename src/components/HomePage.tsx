import React, { useState } from 'react';
import fullLogo from '../assets/full-logo-no-bg.png';
import { useInView } from 'react-intersection-observer';
import { getRelativeLocaleUrl } from 'astro:i18n';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

type Locale = 'en' | 'ar';

type HomePageProps = {
  locale?: Locale;
};

const Reveal = ({ children, className = '', delayMs = 0 }: RevealProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delayMs}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

const sharedImages = {
  serviceOne:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  serviceTwo:
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  serviceThree:
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  productOne:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  productTwo:
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80',
  productThree:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  processOne:
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  processTwo:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  processThree:
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80',
  faqOne:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  faqTwo:
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  faqThree:
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
};

const content = {
  en: {
    navItems: [
      { href: '#services', label: 'Services' },
      { href: '#products', label: 'Products' },
      // { href: '#process', label: 'Process' },
      // { href: '#testimonials', label: 'Testimonials' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      badge: 'IPW Factory Supply',
      title:
        'Everything factories need for packaging and supply, delivered reliably with branded options.',
      description:
        'IPW provides plastic wraps, industrial tools, and plastic bags with custom logo printing plus direct delivery to your factory.',
      primaryCta: 'Request a quote',
      secondaryCta: 'View products',
      heroAlt: 'Factory packaging operations',
    },
    sections: {
      services: {
        badge: 'Services',
        title: 'Factory-ready services beyond supply.',
        learnMore: 'See service details',
        description: 'Services to support factories and manufacturers.',
      },
      products: {
        badge: 'Products',
        title: 'Essential factory products in one place.',
        cta: 'Request pricing',
        description: 'Essential factory products in one place.',
      },
      process: {
        badge: 'Process',
        title: 'A simple flow from order to delivery.',
        description:
          'We confirm specifications, print your branding, and deliver on schedule to your factory.',
        stepLabel: 'Step',
      },
      testimonials: {
        badge: 'Testimonials',
        title: 'Trusted by factory operations teams.',
        description:
          'Factories choose IPW for consistent quality, fast turnaround, and dependable delivery.',
      },
      faq: {
        badge: 'FAQ',
        title: 'Answers to common questions.',
        description:
          'Clear timelines, transparent pricing, and dependable delivery for factory needs.',
      },
      contact: {
        badge: 'Contact',
        title: 'Ready to stock your factory?',
        description:
          'Share your quantities and branding needs and we&apos;ll deliver the right products on time.',
        primaryCta: 'Get a quote',
        secondaryCta: 'Email orders@ipw.com',
        imageAlt: 'Factory logistics team',
      },
      footer: {
        copyright: '© 2026 IPW. All rights reserved.',
        tags: ['Wraps', 'Bags', 'Tools', 'Delivery'],
      },
      menu: {
        open: 'Menu',
        close: 'Close',
      },
    },
    services: [
      {
        title: 'Logo Printing',
        description:
          'Custom logo printing on plastic bags with consistent color matching.',
        image: sharedImages.serviceOne,
      },
      {
        title: 'Packaging Consultation',
        description: 'Guidance on bag sizes, wrap thickness, and compliance needs.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'Factory Delivery',
        description: 'Scheduled delivery directly to your factory floor or warehouse.',
        image: sharedImages.serviceThree,
      },
      {
        title: 'Bulk Supply Planning',
        description: 'Forecasted stocking and repeat orders to prevent downtime.',
        image: sharedImages.serviceTwo,
      },
    ],
    products: [
      {
        title: 'Plastic Wraps',
        description: 'Industrial-grade wraps for storage, pallets, and protection.',
        image: sharedImages.productOne,
      },
      {
        title: 'Plastic Bags',
        description: 'Customizable bags in multiple sizes and thickness options.',
        image: sharedImages.productTwo,
      },
      {
        title: 'Factory Tools',
        description: 'Essential tools and accessories for packaging lines.',
        image: sharedImages.productThree,
      },
      {
        title: 'Packaging Accessories',
        description: 'Tapes, labels, and seals for end-to-end packing.',
        image: sharedImages.serviceTwo,
      },
    ],
    steps: [
      {
        title: 'Confirm Specs',
        description: 'We confirm sizes, quantities, and branding requirements.',
        image: sharedImages.processOne,
      },
      {
        title: 'Print & Pack',
        description: 'We print logos, prepare packaging, and quality check.',
        image: sharedImages.processTwo,
      },
      {
        title: 'Deliver',
        description: 'We ship to your factory on the agreed schedule.',
        image: sharedImages.processThree,
      },
    ],
    faqs: [
      {
        question: 'How fast is delivery?',
        answer: 'Standard delivery is 3-7 business days based on location and volume.',
        image: sharedImages.faqOne,
      },
      {
        question: 'Can you print our logo?',
        answer: 'Yes, we provide logo printing with proofing before production.',
        image: sharedImages.faqTwo,
      },
      {
        question: 'Do you support bulk orders?',
        answer: 'We support bulk supply contracts with scheduled deliveries.',
        image: sharedImages.faqThree,
      },
    ],
    testimonials: [
      {
        image:
          'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
        quote:
          'IPW keeps our packaging line stocked and delivers exactly when we need it.',
        name: 'Avery Cole',
        role: 'Operations Lead, NovaLabs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        quote: 'Logo printing on our bags is consistent and delivery is always on time.',
        name: 'Jamie Patel',
        role: 'Supply Manager, Meridian',
      },
    ],
  },
  ar: {
    navItems: [
      { href: '#services', label: 'الخدمات' },
      { href: '#products', label: 'المنتجات' },
      // { href: '#process', label: 'المنهجية' },
      // { href: '#testimonials', label: 'الآراء' },
      { href: '#faq', label: 'الأسئلة' },
      { href: '#contact', label: 'تواصل' },
    ],
    hero: {
      badge: 'عالم التغليف الصناعي',
      title: 'جميع مستلزمات تغليف المصانع والشركات',
      description: 'نقدم حلول تغليف صناعي متكاملة لتلبية احتياجات التجار والمصانع',
      primaryCta: 'اطلب عرض سعر',
      secondaryCta: 'عرض المنتجات',
      heroAlt: 'عمليات تغليف المصنع',
    },
    sections: {
      services: {
        badge: 'الخدمات',
        title: 'خدمات لدعم المصانع والمنتجين.',
        learnMore: 'تفاصيل الخدمة',
        description: 'خدمات متكاملة لتلبية احتياجات المصانع والمنتجين',
      },
      products: {
        badge: 'المنتجات',
        title: 'منتجات أساسية وكمالية للمصانع.',
        cta: 'اطلب تسعيرًا',
        description: 'منتجات عالية الجودة مصممة خصيصا للمصانع في جميع القطاعات',
      },
      process: {
        badge: 'المنهجية',
        title: 'مسار واضح من الطلب إلى التسليم.',
        description: 'نؤكد المواصفات، نطبع العلامة، ثم نُسلم في الموعد المحدد للمصنع.',
        stepLabel: 'الخطوة',
      },
      testimonials: {
        badge: 'الآراء',
        title: 'موثوق به من فرق العمليات بالمصانع.',
        description: 'تختار المصانع IPW للجودة الثابتة وسرعة التنفيذ والتسليم الموثوق.',
      },
      faq: {
        badge: 'الأسئلة',
        title: 'إجابات على الأسئلة الشائعة.',
        description: 'جداول زمنية واضحة وتسعير شفاف وتسليم موثوق للمصانع.',
      },
      contact: {
        badge: 'تواصل',
        title: 'جاهز لتجهيز مصنعك؟',
        description: 'شاركنا الكميات ومتطلبات الطباعة لنجهز المنتجات ونسلمها في الموعد.',
        primaryCta: 'اطلب عرض سعر',
        secondaryCta: 'راسلنا orders@ipw.com',
        imageAlt: 'فريق لوجستي للمصانع',
      },
      footer: {
        copyright: '© 2026 IPW. جميع الحقوق محفوظة.',
        tags: ['لفائف', 'أكياس', 'أدوات', 'تسليم'],
      },
      menu: {
        open: 'القائمة',
        close: 'إغلاق',
      },
    },
    services: [
      {
        title: 'طباعة الشعار',
        description: 'طباعة الشعار على أكياس النايلون أو الخيش',
        image: sharedImages.serviceOne,
      },
      {
        title: 'توصيل مجاني',
        description: 'توصيل المنتجات مجانا ضمن دمشق وريفها',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'شحن للمحافظات',
        description: 'شحن مأجور إلى جميع المحافظات السورية',
        image: sharedImages.serviceThree,
      },
      // {
      //   title: 'تخطيط توريد بالجملة',
      //   description: 'تجهيز مخزون دوري لتفادي توقف خطوط الإنتاج.',
      //   image: sharedImages.serviceTwo,
      // },
    ],
    products: [
      {
        title: 'أكياس نايلون',
        description: 'شرح هنا.',
        image: sharedImages.productOne,
      },
      {
        title: 'شرنك تغليف حراري',
        description:
          'شرنك PVC أو POF لتغليف المواد الغذائية والمنتجات الصناعية البلاستيكية وشرنك خاص لتغليف طرود العبوات.',
        image: sharedImages.productTwo,
      },
      {
        title: 'أكياس خيش',
        description:
          'أكياس خيش نوع ممتاز تحلل بطيء وزن ممتاز صالحة للاستخدامات الغذائية والشحن متوفرة بجميع المقاسات.',
        image: sharedImages.productThree,
      },
      {
        title: 'ستريتش صناعي',
        description:
          'عرض ١٢ سم، عرض ٥٠ سم بجميع الأوزان، طرد ١٤ كغ، طرد ١٥ كغ مم، رول ستريتش آلي وزن الرول ٢٥ كغ.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'أكياس الصمام',
        description: 'شرح هنا.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'كلينك عذائي PVC',
        description: 'شرح هنا.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'خيوط بولي بروبولين',
        description:
          'جميع الاستخدمات الزراعية وغيرها، تحوي مواد حافظة من تأثير أشعة الشمس متوفرة بمقاسات ٤، ٦، ٨، او ١٠.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'لاصق',
        description: 'شرح هنا.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'شريط تحزيم',
        description: 'جميع مقاسات ال٩ مم حراري وال١٢ مم حراري وال١٥ مم يدوي.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'معدات سلامة',
        description: 'قفازات مطاطية، قبعات قماشية، كمامات.',
        image: sharedImages.serviceTwo,
      },
      {
        title: 'معدات صناعية',
        description:
          'ختامات، مشدات، قطاعات لاقص رفيع وعريض، مكنات شرنك، مكنات تلزيق، أقلام تخطيط، مطاط، خرازات.',
        image: sharedImages.serviceTwo,
      },
    ],
    steps: [
      {
        title: 'تأكيد المواصفات',
        description: 'نؤكد المقاسات والكميات ومتطلبات الطباعة.',
        image: sharedImages.processOne,
      },
      {
        title: 'طباعة وتجهيز',
        description: 'نطبع الشعار ونجهز التغليف مع فحص الجودة.',
        image: sharedImages.processTwo,
      },
      {
        title: 'التسليم',
        description: 'نُسلم للمصنع حسب الجدول المتفق عليه.',
        image: sharedImages.processThree,
      },
    ],
    faqs: [
      {
        question: 'كم مدة التسليم؟',
        answer: 'التسليم المعتاد من 3 إلى 7 أيام عمل حسب الموقع والكميات.',
        image: sharedImages.faqOne,
      },
      {
        question: 'هل يمكن طباعة الشعار؟',
        answer: 'نعم، نوفر طباعة مع اعتماد قبل الإنتاج.',
        image: sharedImages.faqTwo,
      },
      {
        question: 'هل تدعمون التوريد بالجملة؟',
        answer: 'ندعم عقود توريد بالجملة مع تسليمات مجدولة.',
        image: sharedImages.faqThree,
      },
    ],
    testimonials: [
      {
        image:
          'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
        quote: 'تضمن لنا IPW توفر مستلزمات التغليف وتوصلها في الوقت المناسب.',
        name: 'آيفري كول',
        role: 'مدير العمليات، NovaLabs',
      },
      {
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        quote: 'طباعة الشعار على الأكياس ثابتة والتسليم دائمًا في الوقت المحدد.',
        name: 'جيمي باتيل',
        role: 'مدير التوريد، Meridian',
      },
    ],
  },
};

export default function HomePage({ locale = 'ar' }: HomePageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[locale];

  return (
    <div className='bg-slate-50 text-slate-900'>
      <header className='sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur'>
        <div className='mx-auto w-full max-w-6xl px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img
                src={fullLogo.src}
                alt='IPW logo'
                className='h-12 w-auto'
                loading='eager'
              />
            </div>
            <div className='hidden items-center gap-3 md:flex'>
              <label htmlFor='locale-select' className='text-xs text-slate-500'>
                {locale === 'ar' ? 'اللغة' : 'Language'}
              </label>
              <select
                id='locale-select'
                value={locale}
                onChange={event => {
                  const next = event.target.value as Locale;
                  window.location.href = getRelativeLocaleUrl(next, '/');
                }}
                className='rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase transition hover:border-indigo-400/60'
              >
                <option value='ar'>AR</option>
                <option value='en'>EN</option>
              </select>
            </div>
            <button
              type='button'
              className='rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase transition hover:border-indigo-400/60 md:hidden'
              aria-expanded={isMenuOpen}
              aria-controls='mobile-nav'
              onClick={() => setIsMenuOpen(open => !open)}
            >
              {isMenuOpen ? t.sections.menu.close : t.sections.menu.open}
            </button>
            <nav className='hidden flex-wrap gap-3 text-sm font-medium text-slate-700 md:flex'>
              {t.navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className='rounded-full border border-slate-200 px-3 py-1 transition hover:border-indigo-400/60 hover:text-slate-900'
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div
            id='mobile-nav'
            className={`mt-4 overflow-hidden transition-all md:hidden ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className='flex flex-col gap-3 text-sm font-medium text-slate-700'>
              {t.navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className='rounded-xl border border-slate-200 px-4 py-2 transition hover:border-indigo-400/60 hover:text-slate-900'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className='mt-4 flex items-center gap-3 text-xs text-slate-500'>
              <label htmlFor='locale-select-mobile'>
                {locale === 'ar' ? 'اللغة' : 'Language'}
              </label>
              <select
                id='locale-select-mobile'
                value={locale}
                onChange={event => {
                  const next = event.target.value as Locale;
                  window.location.href = getRelativeLocaleUrl(next, '/');
                }}
                className='rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase transition hover:border-indigo-400/60'
              >
                <option value='ar'>AR</option>
                <option value='en'>EN</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className='px-6 pt-16 pb-16 md:pt-24 md:pb-24'>
          <div className='mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:items-center'>
            <Reveal className='flex-1'>
              <p className='text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase'>
                {t.hero.badge}
              </p>
              <h1 className='mt-4 text-4xl leading-tight font-semibold text-slate-900 md:text-5xl'>
                {t.hero.title}
              </h1>
              <p className='mt-6 text-base text-slate-600 md:text-lg'>
                {t.hero.description}
              </p>
              <div className='mt-8 flex flex-wrap gap-4'>
                <a
                  href='#contact'
                  className='rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400'
                >
                  {t.hero.primaryCta}
                </a>
                <a
                  href='#services'
                  className='rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400'
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
            </Reveal>
            <Reveal className='flex-1 space-y-4' delayMs={120}>
              <div className='animate-floaty overflow-hidden rounded-3xl border border-slate-200'>
                <img
                  src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
                  alt={t.hero.heroAlt}
                  className='h-64 w-full object-cover md:h-72'
                  loading='lazy'
                />
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                {t.services.slice(0, 2).map(service => (
                  <div
                    key={service.title}
                    className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-400/50'
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} in an industrial setting`}
                      className='h-28 w-full rounded-xl object-cover'
                      loading='lazy'
                    />
                    <h3 className='mt-4 text-base font-semibold text-slate-900'>
                      {service.title}
                    </h3>
                    <p className='mt-3 text-sm text-slate-600'>{service.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id='services' className='border-t border-slate-200 px-6 py-16 md:py-20'>
          <div className='mx-auto w-full max-w-6xl'>
            <Reveal className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div>
                <p className='text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase'>
                  {t.sections.services.badge}
                </p>
                <h2 className='mt-3 text-3xl font-semibold text-slate-900'>
                  {t.sections.services.title}
                </h2>
              </div>
              <p className='max-w-xl text-sm text-slate-600 md:text-base'>
                {t.sections.services.description}
              </p>
            </Reveal>
            <Reveal className='mt-10 grid gap-6 md:grid-cols-2' delayMs={120}>
              {t.services.map(service => (
                <div
                  key={service.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400/50'
                >
                  <img
                    src={service.image}
                    alt={`${service.title} industrial work`}
                    className='h-36 w-full rounded-xl object-cover'
                    loading='lazy'
                  />
                  <h3 className='mt-5 text-lg font-semibold text-slate-900'>
                    {service.title}
                  </h3>
                  <p className='mt-3 text-sm text-slate-600 md:text-base'>
                    {service.description}
                  </p>
                  <p className='mt-5 text-xs tracking-[0.2em] text-indigo-600 uppercase'>
                    {t.sections.services.learnMore}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id='products' className='border-t border-slate-200 px-6 py-16 md:py-20'>
          <div className='mx-auto w-full max-w-6xl'>
            <Reveal className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div>
                <p className='text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase'>
                  {t.sections.products.badge}
                </p>
                <h2 className='mt-3 text-3xl font-semibold text-slate-900'>
                  {t.sections.products.title}
                </h2>
              </div>
              <p className='max-w-xl text-sm text-slate-600 md:text-base'>
                {t.sections.products.description}
              </p>
            </Reveal>
            <Reveal
              className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
              delayMs={120}
            >
              {t.products.map(product => (
                <div
                  key={product.title}
                  className='flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400/50'
                >
                  <img
                    src={product.image}
                    alt={`${product.title} product interface`}
                    className='h-32 w-full rounded-xl object-cover'
                    loading='lazy'
                  />
                  <h3 className='mt-5 text-lg font-semibold text-slate-900'>
                    {product.title}
                  </h3>
                  <p className='mt-3 text-sm text-slate-600'>{product.description}</p>
                  <div className='flex-1' />
                  <button
                    type='button'
                    className='mt-6 w-full rounded-full border border-slate-300 px-4 py-2 align-bottom text-xs font-semibold tracking-[0.2em] text-slate-800 uppercase transition hover:border-indigo-400/60'
                  >
                    {t.sections.products.cta}
                  </button>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* <section id='process' className='border-t border-slate-200 px-6 py-16 md:py-20'>
          <div className='mx-auto w-full max-w-6xl'>
            <Reveal className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div>
                <p className='text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase'>
                  {t.sections.process.badge}
                </p>
                <h2 className='mt-3 text-3xl font-semibold text-slate-900'>
                  {t.sections.process.title}
                </h2>
              </div>
              <p className='max-w-xl text-sm text-slate-600 md:text-base'>
                {t.sections.process.description}
              </p>
            </Reveal>
            <Reveal className='mt-10 grid gap-6 md:grid-cols-3' delayMs={120}>
              {t.steps.map((step, index) => (
                <div
                  key={step.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400/50'
                >
                  <img
                    src={step.image}
                    alt={`${step.title} industrial process`}
                    className='h-32 w-full rounded-xl object-cover'
                    loading='lazy'
                  />
                  <p className='mt-5 text-xs font-semibold tracking-[0.3em] text-indigo-600 uppercase'>
                    {t.sections.process.stepLabel} {index + 1}
                  </p>
                  <h3 className='mt-3 text-lg font-semibold text-slate-900'>
                    {step.title}
                  </h3>
                  <p className='mt-3 text-sm text-slate-600'>{step.description}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section> */}

        {/* <section
          id='testimonials'
          className='border-t border-slate-200 px-6 py-16 md:py-20'
        >
          <div className='mx-auto w-full max-w-6xl'>
            <Reveal className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div>
                <p className='text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase'>
                  {t.sections.testimonials.badge}
                </p>
                <h2 className='mt-3 text-3xl font-semibold text-slate-900'>
                  {t.sections.testimonials.title}
                </h2>
              </div>
              <p className='max-w-xl text-sm text-slate-600 md:text-base'>
                {t.sections.testimonials.description}
              </p>
            </Reveal>
            <Reveal className='mt-10 grid gap-6 md:grid-cols-2' delayMs={120}>
              {t.testimonials.map(item => (
                <div
                  key={item.name}
                  className='rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400/50'
                >
                  <img
                    src={item.image}
                    alt={`${item.name} facility portrait`}
                    className='h-40 w-full rounded-xl object-cover'
                    loading='lazy'
                  />
                  <p className='mt-5 text-sm text-slate-600'>“{item.quote}”</p>
                  <p className='mt-5 text-sm font-semibold text-slate-900'>{item.name}</p>
                  <p className='text-xs text-slate-500'>{item.role}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section> */}

        <section id='faq' className='border-t border-slate-200 px-6 py-16 md:py-20'>
          <div className='mx-auto w-full max-w-6xl'>
            <Reveal className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div>
                <p className='text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase'>
                  {t.sections.faq.badge}
                </p>
                <h2 className='mt-3 text-3xl font-semibold text-slate-900'>
                  {t.sections.faq.title}
                </h2>
              </div>
              <p className='max-w-xl text-sm text-slate-600 md:text-base'>
                {t.sections.faq.description}
              </p>
            </Reveal>
            <Reveal className='mt-10 grid gap-4 md:grid-cols-3' delayMs={120}>
              {t.faqs.map(faq => (
                <div
                  key={faq.question}
                  className='rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400/50'
                >
                  <img
                    src={faq.image}
                    alt={`${faq.question} illustration`}
                    className='h-28 w-full rounded-xl object-cover'
                    loading='lazy'
                  />
                  <h3 className='mt-4 text-base font-semibold text-slate-900'>
                    {faq.question}
                  </h3>
                  <p className='mt-3 text-sm text-slate-600'>{faq.answer}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id='contact' className='border-t border-slate-200 px-6 py-16 md:py-20'>
          <div className='animate-shimmer mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl border border-slate-200 bg-linear-to-br from-indigo-50 via-white to-slate-50 p-8 md:flex-row md:items-center md:justify-between md:p-12'>
            <Reveal className='max-w-lg'>
              <p className='text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase'>
                {t.sections.contact.badge}
              </p>
              <h2 className='mt-3 text-3xl font-semibold text-slate-900'>
                {t.sections.contact.title}
              </h2>
              <p className='mt-4 text-sm text-slate-600 md:text-base'>
                {t.sections.contact.description}
              </p>
            </Reveal>
            <div className='animate-floaty overflow-hidden rounded-2xl border border-slate-200 md:max-w-xs'>
              <img
                src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80'
                alt={t.sections.contact.imageAlt}
                className='h-44 w-full object-cover md:h-52'
                loading='lazy'
              />
            </div>
            <Reveal className='flex flex-col gap-3 text-sm' delayMs={120}>
              <button
                type='button'
                className='rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400'
              >
                {t.sections.contact.primaryCta}
              </button>
              <button
                type='button'
                className='rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400'
              >
                {t.sections.contact.secondaryCta}
              </button>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className='border-t border-slate-200 px-6 py-10'>
        <Reveal className='mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between'>
          <span>{t.sections.footer.copyright}</span>
          <div className='flex flex-wrap gap-4 text-xs tracking-[0.2em] uppercase'>
            {t.sections.footer.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Reveal>
      </footer>
    </div>
  );
}
