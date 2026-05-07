import React from 'react';

export default function CookiesPolicy() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-wide mb-6">
          Политика за бисквитки
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
        </p>
      </div>

      <div className="font-body text-foreground/80 space-y-8">
        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">1. Какво представляват бисквитките?</h2>
          <p className="leading-relaxed">
            Бисквитките (cookies) са малки текстови файлове, които се запазват на вашия компютър или мобилно устройство, когато посещавате даден уебсайт. Те позволяват на уебсайта да запомни вашите действия и предпочитания (като например потребителско име, език, размер на шрифта и други настройки за показване) за определен период от време, за да не се налага да ги въвеждате всеки път, когато посещавате сайта или преминавате от една страница към друга.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">2. Как използваме бисквитките?</h2>
          <p className="leading-relaxed mb-4">Нашият уебсайт използва бисквитки за различни цели, включително:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Строго необходими бисквитки:</strong> Тези бисквитки са от съществено значение, за да можете да се движите из уебсайта и да използвате неговите функции. Без тези бисквитки услугите, които сте поискали, не могат да бъдат предоставени.</li>
            <li><strong>Бисквитки за ефективност:</strong> Тези бисквитки събират информация за това как посетителите използват уебсайта, например кои страници посещават най-често. Тези бисквитки не събират информация, която идентифицира посетителя. Цялата информация, която тези бисквитки събират, е обобщена и следователно анонимна.</li>
            <li><strong>Функционални бисквитки:</strong> Тези бисквитки позволяват на уебсайта да запомни изборите, които правите, и предоставят по-добри, по-персонализирани функции.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">3. Как да контролирате бисквитките?</h2>
          <p className="leading-relaxed">
            Можете да контролирате и/или изтривате бисквитките, когато пожелаете – за повече информация вижте aboutcookies.org. Можете да изтриете всички бисквитки, които вече са на вашия компютър, и можете да настроите повечето браузъри така, че да предотвратите поставянето им. Ако обаче направите това, може да се наложи ръчно да настройвате някои предпочитания всеки път, когато посещавате даден сайт, и е възможно някои услуги и функции да не работят.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">4. Промени в политиката за бисквитки</h2>
          <p className="leading-relaxed">
            Ние си запазваме правото да актуализираме тази Политика за бисквитки по всяко време. Всички промени ще бъдат публикувани на тази страница. Препоръчваме ви периодично да преглеждате тази страница, за да бъдете информирани за това как използваме бисквитките.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-medium text-foreground mb-4">5. Контакти</h2>
          <p className="leading-relaxed mb-4">Ако имате въпроси относно тази Политика за бисквитки, моля, свържете се с нас:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Имейл адрес: <a href="mailto:hello@artaya.bg" className="text-primary hover:underline">hello@artaya.bg</a></li>
            <li>Телефон: <a href="tel:+359895737470" className="text-primary hover:underline">+359 895 737 470</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}