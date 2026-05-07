import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  Package,
  CreditCard,
  Shield,
  MapPin,
  CheckCircle,
  Building2,
  Home,
  Eye,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Timer,
  Phone,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const steps = [
  {
    icon: CheckCircle,
    label: 'Потвърждение',
    desc: 'Получавате потвърждение на поръчката',
  },
  {
    icon: Package,
    label: 'Опаковане',
    desc: 'Картината се опакова внимателно',
  },
  {
    icon: Truck,
    label: 'Изпращане',
    desc: 'Предаваме пратката на куриер',
  },
  {
    icon: Home,
    label: 'Получаване',
    desc: 'Доставка до Вас – прегледайте преди плащане',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Застраховка',
    desc: 'Всяка картина се изпраща с "Обявена стойност" — застраховка за пълна защита при транспорт.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: AlertTriangle,
    title: 'Стикер "Чупливо"',
    desc: 'Пратките носят стикер "Чупливо", за да са третирани с нужното внимание от куриера.',
    color: 'text-amber-600',
    bg: 'bg-amber-50 border-amber-100',
  },
  {
    icon: Eye,
    title: 'Преглед преди плащане',
    desc: 'Разопаковайте и проверете картината в присъствие на куриера преди да платите.',
    color: 'text-sky-600',
    bg: 'bg-sky-50 border-sky-100',
  },
  {
    icon: CreditCard,
    title: 'Наложен платеж',
    desc: 'Плащате в брой или с карта при получаване — само след като сте доволни от стоката.',
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-100',
  },
];

const providers = [
  {
    name: 'Еконт',
    color: 'from-orange-50 to-orange-100/60',
    border: 'border-orange-200',
    accent: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700',
    options: [
      { icon: Building2, text: 'Доставка до офис на Еконт' },
      { icon: MapPin, text: 'Доставка до Еконтомат' },
      { icon: Home, text: 'Доставка до личен адрес' },
      { icon: Phone, text: 'SMS / Viber известяване' },
    ],
  },
  {
    name: 'Спиди',
    color: 'from-red-50 to-red-100/60',
    border: 'border-red-200',
    accent: 'text-red-600',
    badge: 'bg-red-100 text-red-700',
    options: [
      { icon: Building2, text: 'Доставка до офис на Спиди' },
      { icon: MapPin, text: 'Доставка до Автомат (АПС)' },
      { icon: Home, text: 'Доставка до личен адрес' },
      { icon: Phone, text: 'SMS / Viber известяване' },
    ],
  },
];

const timelines = [
  {
    icon: Sparkles,
    title: 'Налични картини',
    badge: '1 – 3 работни дни',
    badgeColor: 'bg-primary/10 text-primary',
    desc: 'Поръчките за налични картини се обработват и предават на куриер в рамките на 1 до 3 работни дни след потвърждение.',
  },
  {
    icon: Timer,
    title: 'Картини по поръчка',
    badge: '7 – 14 дни изработка',
    badgeColor: 'bg-secondary text-foreground',
    desc: 'Персонализираните картини изискват технологично време за съхнене на текстурните пасти и боите. Срокът се уточнява индивидуално.',
  },
];

export default function ShippingInfo() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-body tracking-[0.35em] uppercase px-5 py-2 rounded-full mb-6"
        >
          <Truck size={14} />
          Бърза и сигурна доставка
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-wide mb-6"
        >
          Доставка &amp;{' '}
          <span className="italic font-medium">Плащане</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-muted-foreground font-body text-lg max-w-xl mx-auto"
        >
          Всяка картина пристига при Вас внимателно опакована, застрахована и с
          опция за преглед преди плащане.
        </motion.p>
      </section>

      {/* ── Process steps ────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-secondary/60"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon size={20} className="text-primary" />
              </div>
              <p className="font-heading font-medium text-foreground text-sm">{step.label}</p>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-muted-foreground/40"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Delivery providers ───────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-2">Куриерски фирми</p>
          <h2 className="text-2xl md:text-3xl font-heading font-light">
            Изберете удобен <span className="italic font-medium">начин на доставка</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {providers.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`rounded-2xl border ${p.border} bg-gradient-to-br ${p.color} p-7`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/70`}>
                  <Truck size={18} className={p.accent} />
                </div>
                <div>
                  <span className={`text-xs font-body font-medium px-2.5 py-1 rounded-full ${p.badge}`}>
                    Куриер
                  </span>
                  <h3 className={`text-xl font-heading font-semibold ${p.accent} mt-0.5`}>{p.name}</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {p.options.map((opt) => (
                  <li key={opt.text} className="flex items-center gap-3 font-body text-sm text-foreground/80">
                    <opt.icon size={15} className={`${p.accent} shrink-0`} />
                    {opt.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Key features ─────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-2">Гаранции</p>
          <h2 className="text-2xl md:text-3xl font-heading font-light">
            Защо може да ни <span className="italic font-medium">доверите</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`flex gap-4 p-6 rounded-2xl border ${f.bg}`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/70 shrink-0`}>
                <f.icon size={20} className={f.color} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/15 p-8 md:p-10"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <CreditCard size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-2">Цена на доставката</h2>
              <p className="font-body text-foreground/75 leading-relaxed max-w-2xl">
                Разходите по доставката са <strong className="text-foreground">за сметка на клиента</strong>, освен при активна промоция. Цената се
                изчислява автоматично от куриера въз основа на тегло, размери, стойност на наложения платеж и застраховката.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Timelines ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-2">Срокове</p>
          <h2 className="text-2xl md:text-3xl font-heading font-light">
            Кога ще получите <span className="italic font-medium">картината си</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {timelines.map((t, i) => (
            <motion.div
              key={t.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <t.icon size={22} className="text-primary" />
                </div>
                <div>
                  <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${t.badgeColor} mb-2 inline-block`}>
                    {t.badge}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center font-body text-sm text-muted-foreground"
        >
          Самата доставка отнема стандартното за куриера време — обикновено{' '}
          <strong className="text-foreground">1 работен ден</strong> след изпращане за по-големите градове.
        </motion.p>
      </section>

      {/* ── Bottom spacer ────────────────────────────────── */}
      <div className="pb-24" />
    </div>
  );
}
