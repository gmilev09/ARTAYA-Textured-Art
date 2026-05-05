const paintings = [
  {
    id: 'rozov-vihar-01',
    title: 'Розов вихър',
    description:
      'Нежна текстурна абстракция в розови и бели тонове, изградена около плавно кръгово движение. Релефните мазки и фини напукани детайли създават усещане за лекота, мекота и светлина, а композицията стои едновременно ефирно и динамично.',
    price: 340,
    image_url: '/images/paintings/pink-whirl-1.jpeg',
    additional_images: [
      '/images/paintings/pink-whirl-2.jpeg',
      '/images/paintings/pink-whirl-3.jpeg',
      '/images/paintings/pink-whirl-4.jpeg',
    ],
    dimensions: '40x50 cm',
    category: 'abstract',
    status: 'available',
    featured: true,
    materials: 'акрил и текстурна паста върху платно',
  },
  {
    id: 'zlaten-svyat-01',
    title: 'Златен свят',
    description:
      'Текстурна композиция върху дълбок черен фон, в която релефно земно кълбо със златни континенти се спуска в свободни метални линии. Контрастът между тъмната основа, сребристите отблясъци и златното фолио създава усещане за движение, мащаб и светлина.',
    price: 390,
    image_url: '/images/paintings/golden-world-1.jpeg',
    additional_images: [
      '/images/paintings/golden-world-2.jpeg',
      '/images/paintings/golden-world-3.jpeg',
      '/images/paintings/golden-world-4.jpeg',
      '/images/paintings/golden-world-5.jpeg',
      '/images/paintings/golden-world-6.jpeg',
      '/images/paintings/golden-world-7.jpeg',
    ],
    dimensions: '50x70 cm',
    category: 'mixed_media',
    status: 'available',
    featured: true,
    materials: 'акрил, текстурна паста и златно фолио върху платно',
  },
  {
    id: 'vulna-01',
    title: 'Вълна',
    description:
      'Текстурна абстрактна картина, вдъхновена от силата на морската стихия. Дебели слоеве бяла пастьозна боя оформят гребена на вълната, контрастиращ с дълбокия черен фон, осеян с пръски, които наподобяват пяна и звезди едновременно.',
    price: 380,
    image_url: '/images/paintings/wave-1.jpg',
    additional_images: [
      '/images/paintings/wave-2.jpg',
      '/images/paintings/wave-3.jpg',
    ],
    dimensions: '50x70 cm',
    category: 'abstract',
    status: 'available',
    featured: true,
    materials: 'акрил, текстурна паста върху платно',
  },
  {
    id: 'otrazhenie-01',
    title: 'Отражение',
    description:
      'Абстрактна текстурна композиция в топли пясъчни, бронзови и медни тонове, пресечена от тъмна стоманеносиня линия и златни акценти. Огледалната структура около централния хоризонт извиква усещане за безкраен бряг и тиха вода в часа на залеза.',
    price: 420,
    image_url: '/images/paintings/reflection-1.jpg',
    additional_images: [
      '/images/paintings/reflection-2.jpg',
      '/images/paintings/reflection-3.jpg',
    ],
    dimensions: '60x80 cm',
    category: 'abstract',
    status: 'available',
    featured: true,
    materials: 'акрил, текстурна паста и метални пигменти върху платно',
  },
  {
    id: 'srebarna-gradina-01',
    title: 'Сребърна градина',
    description:
      'Релефна текстурна композиция в чисто бяло, осеяна с деликатни листа и цветове, върху които танцуват сребърни фолийни акценти. Минималистичен, поетичен фрагмент от градина, замръзнала в инеена тишина — светлината улавя всеки релеф и превръща картината в жива повърхност, която се променя според ъгъла на гледане.',
    price: 320,
    image_url: '/images/paintings/silver-garden-1.jpg',
    additional_images: [
      '/images/paintings/silver-garden-2.jpg',
      '/images/paintings/silver-garden-3.jpg',
    ],
    dimensions: '40x40 cm',
    category: 'mixed_media',
    status: 'available',
    featured: true,
    materials: 'акрил, текстурна паста и сребърно фолио върху платно',
  },
  {
    id: 'zlatna-reka-01',
    title: 'Златна река',
    description:
      'Релефна абстрактна композиция, в която потоци от златно фолио се разливат като реки през снежнобяла текстурна повърхност, докоснати тук-там от меки розови сенки. Движението на пастата създава усещане за течаща светлина, а металните акценти се променят с всеки лъч и ъгъл на гледане, превръщайки картината в спокоен, но жив пейзаж от светлина.',
    price: 400,
    image_url: '/images/paintings/golden-river-1.jpg',
    additional_images: [
      '/images/paintings/golden-river-2.jpg',
      '/images/paintings/golden-river-3.jpg',
    ],
    dimensions: '50x70 cm',
    category: 'mixed_media',
    status: 'available',
    featured: true,
    materials: 'акрил, текстурна паста и златно фолио върху платно',
  },
  {
    id: 'beli-galabi-01',
    title: 'Бели гълъби',
    description:
      'Поетична текстурна композиция в меки бежови и млечно-бели тонове, в която два релефни бели гълъба политат край цъфнало клонче. Пастьозните мазки изграждат пера и цветове с истински обем, а спокойният кръгов фон обгръща сцената в мека светлина — символ на нежност, любов и хармония.',
    price: 380,
    image_url: '/images/paintings/white-doves-1.jpeg',
    additional_images: [
      '/images/paintings/white-doves-2.jpeg',
      '/images/paintings/white-doves-3.jpeg',
    ],
    dimensions: '50x70 cm',
    category: 'nature',
    status: 'available',
    featured: true,
    materials: 'акрил и текстурна паста върху платно',
  },
  {
    id: 'zlatno-siyanie-01',
    title: 'Златно сияние',
    description:
      'Лъчиста текстурна абстракция, изградена от плътни релефни линии и топли метални отблясъци. Централната точка разгръща композицията като взрив от светлина, а златната повърхност улавя всеки ъгъл на осветяване и придава на платното силно, елегантно присъствие.',
    price: 400,
    image_url: '/images/paintings/golden-radiance-1.jpeg',
    additional_images: [],
    dimensions: '50x70 cm',
    category: 'mixed_media',
    status: 'available',
    featured: true,
    materials: 'акрил, текстурна паста и златно фолио върху платно',
  },
  {
    id: 'zlaten-siluet-01',
    title: 'Златен силует',
    description:
      'Минималистична портретна композиция върху дълбок черен фон, изградена с фини златни релефни линии и меки абстрактни вълни. Контрастът между матовата основа и металния блясък подчертава силуета и придава на картината елегантно, съвременно присъствие.',
    price: 360,
    image_url: '/images/paintings/golden-silhouette-1.jpg',
    additional_images: ['/images/paintings/golden-silhouette-2.jpg'],
    dimensions: '40x50 cm',
    category: 'minimalist',
    status: 'available',
    featured: true,
    materials: 'акрил и златни релефни акценти върху платно',
  },
];

const json = (body, init = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: { 'content-type': 'application/json', ...(init.headers || {}) },
  });

export default async (req) => {
  const url = new URL(req.url);
  const segments = url.pathname.split('/').filter(Boolean);
  const idx = segments.findIndex((s) => s === 'paintings');
  const id = idx >= 0 ? segments[idx + 1] : undefined;

  if (id) {
    const painting = paintings.find((p) => p.id === id);
    if (!painting) return json({ error: 'Not found' }, { status: 404 });
    return json(painting);
  }

  let result = paintings;
  if (url.searchParams.get('featured') === 'true') {
    result = result.filter((p) => p.featured);
  }
  const limit = url.searchParams.get('limit');
  if (limit) result = result.slice(0, Number.parseInt(limit, 10) || result.length);
  return json(result);
};

export const config = {
  path: ['/api/paintings', '/api/paintings/:id'],
};
