import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-wide mb-6">
          Политика за поверителност
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
        </p>
      </div>

      <div className="font-body text-foreground/80 space-y-8">
        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">1. Въведение</h2>
          <p className="leading-relaxed">
            Добре дошли в ARTAYA Textured Art. Ние уважаваме вашата поверителност и сме се посветили на защитата на личните ви данни. Настоящата политика за поверителност ще ви информира за това как се грижим за вашите лични данни, когато посещавате нашия уебсайт, и ще ви запознае с правата ви във връзка с поверителността.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">2. Данни, които събираме</h2>
          <p className="leading-relaxed mb-4">Може да събираме, използваме, съхраняваме и прехвърляме различни видове лични данни за вас, които сме групирали по следния начин:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Идентификационни данни:</strong> включват собствено име, фамилия.</li>
            <li><strong>Данни за контакт:</strong> включват адрес за фактуриране, адрес за доставка, имейл адрес и телефонни номера.</li>
            <li><strong>Финансови данни:</strong> включват данни за банкови сметки и разплащателни карти (ако е приложимо).</li>
            <li><strong>Данни за транзакции:</strong> включват подробности за плащанията към и от вас, както и други подробности за продукти и услуги, които сте закупили от нас.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">3. Как използваме вашите лични данни</h2>
          <p className="leading-relaxed mb-4">Ще използваме вашите лични данни само когато законът ни го позволява. Най-често ще използваме вашите лични данни при следните обстоятелства:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Когато трябва да изпълним договора, който сме на път да сключим или вече сме сключили с вас (напр. обработка и доставка на вашата поръчка).</li>
            <li>Когато това е необходимо за нашите легитимни интереси (или тези на трета страна), и вашите интереси и основни права нямат предимство пред тези интереси.</li>
            <li>Когато трябва да спазим законово или регулаторно задължение.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">4. Споделяне на вашите лични данни</h2>
          <p className="leading-relaxed">
            Може да се наложи да споделим вашите лични данни с трети страни за целите, посочени в точка 3 по-горе, като например доставчици на куриерски услуги (напр. Еконт, Спиди) за извършване на доставка на закупените от вас продукти.
            Ние изискваме от всички трети страни да уважават сигурността на вашите лични данни и да ги третират в съответствие със закона.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">5. Сигурност на данните</h2>
          <p className="leading-relaxed">
            Въвели сме подходящи мерки за сигурност, за да предотвратим случайно изгубване, използване или достъп до вашите лични данни по неразрешен начин, тяхната промяна или разкриване. Освен това ограничаваме достъпа до вашите лични данни до тези служители, агенти, изпълнители и други трети страни, които имат бизнес нужда да знаят.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">6. Вашите законови права</h2>
          <p className="leading-relaxed mb-4">При определени обстоятелства имате права съгласно законите за защита на данните във връзка с вашите лични данни. Това включва правото да:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Поискате достъп до вашите лични данни.</li>
            <li>Поискате коригиране на вашите лични данни.</li>
            <li>Поискате изтриване на вашите лични данни.</li>
            <li>Възразявате срещу обработването на вашите лични данни.</li>
            <li>Поискате ограничаване на обработването на вашите лични данни.</li>
            <li>Поискате прехвърляне на вашите лични данни.</li>
            <li>Оттеглите съгласието си.</li>
          </ul>
          <p className="leading-relaxed mt-4">Ако желаете да упражните някое от правата, посочени по-горе, моля, свържете се с нас.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">7. Свържете се с нас</h2>
          <p className="leading-relaxed mb-4">Ако имате някакви въпроси относно тази политика за поверителност или нашите практики за поверителност, моля, свържете се с нас по следните начини:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Имейл адрес: <a href="mailto:hello@artaya.bg" className="text-primary hover:underline">hello@artaya.bg</a></li>
            <li>Телефон: <a href="tel:+359895737470" className="text-primary hover:underline">+359 895 737 470</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}