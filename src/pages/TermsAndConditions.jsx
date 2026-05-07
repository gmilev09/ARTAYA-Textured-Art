import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-wide mb-6">
          Общи условия
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
        </p>
      </div>

      <div className="font-body text-foreground/80 space-y-8">
        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">1. Предмет</h2>
          <p className="leading-relaxed">
            Настоящите Общи условия уреждат взаимоотношенията между "ARTAYA" (наричано по-долу "Продавач") и потребителите (наричани по-долу "Клиенти" или "Потребители") на уебсайта и онлайн магазина ARTAYA. Чрез използването на този уебсайт и извършването на поръчки, вие се съгласявате с тези Общи условия.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">2. Данни за продавача</h2>
          <p className="leading-relaxed mb-4">За контакт и въпроси, свързани с продуктите и вашите поръчки, можете да се свържете с нас по следния начин:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Имейл адрес: <a href="mailto:hello@artaya.bg" className="text-primary hover:underline">hello@artaya.bg</a></li>
            <li>Телефон: <a href="tel:+359895737470" className="text-primary hover:underline">+359 895 737 470</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">3. Характеристики на стоките</h2>
          <p className="leading-relaxed">
            ARTAYA предлага ръчно изработени текстурни картини. Поради естеството на ръчната изработка, всяка картина е уникална и може да има леки вариации в текстурата и цвета спрямо снимките, представени на уебсайта. Ние полагаме всички усилия да представим нашите продукти възможно най-точно.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">4. Поръчки и сключване на договор</h2>
          <p className="leading-relaxed">
            Клиентът прави поръчка чрез интерфейса на уебсайта. След финализиране на поръчката, ще получите имейл с потвърждение. Договорът за покупко-продажба се счита за сключен от момента на изпращане на потвърждението от наша страна.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">5. Цени и плащане</h2>
          <p className="leading-relaxed">
            Всички цени на сайта са в български лева (BGN). Плащането се извършва чрез методите, посочени в уебсайта при завършване на поръчката (напр. наложен платеж при доставка или банков превод). Продавачът си запазва правото да променя цените по всяко време без предварително уведомление.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">6. Доставка</h2>
          <p className="leading-relaxed">
            Доставката се извършва на територията на Република България чрез куриерска фирма. Сроковете за изработка и доставка се уточняват допълнително в зависимост от наличностите и спецификата на поръчката (особено при персонализирани картини). Разходите за доставка се поемат от Клиента, освен ако не е уговорено друго.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">7. Отказ от договора и връщане</h2>
          <p className="leading-relaxed mb-4">
            Според Закона за защита на потребителите, Клиентът има право да се откаже от договора от разстояние в срок от 14 дни от получаване на стоката, без да посочва причина, освен в следните случаи:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>За стоки, изработени по индивидуална поръчка на клиента или съобразно неговите индивидуални изисквания (персонализирани картини).</li>
          </ul>
          <p className="leading-relaxed mt-4">
            При връщане стоката трябва да е в оригиналния си вид и опаковка, без следи от употреба или повреди. Разходите по връщането на стоката са за сметка на Клиента.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">8. Интелектуална собственост</h2>
          <p className="leading-relaxed">
            Всички материали на този уебсайт, включително текстове, изображения, дизайн и лога, са интелектуална собственост на ARTAYA и са защитени от Закона за авторското право и сродните му права. Използването им без изрично писмено съгласие е забранено.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">9. Промени в Общите условия</h2>
          <p className="leading-relaxed">
            ARTAYA си запазва правото да променя настоящите Общи условия по всяко време. Промените влизат в сила незабавно след публикуването им на уебсайта. Продължавайки да използвате уебсайта след извършени промени, вие се съгласявате с актуализираните Общи условия.
          </p>
        </section>
      </div>
    </div>
  );
}
