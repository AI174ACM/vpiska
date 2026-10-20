// Вымышленные данные прототипа «Вписка». Все имена, компании и суммы придуманы. Дата «сегодня» зафиксирована: 20.10.2026.
window.DATA = {
  today: '2026-10-20',
  asOf: '20.10.2026',
  me: { name: 'Антон', role: 'Продюсер' },
  show: { name: 'Вписка', yt: '2,83 млн подписчиков', vk: '610 тыс подписчиков' },

  shares: [
    { key: 'host', name: 'Ведущий', pct: 35 },
    { key: 'studio', name: 'Студия', pct: 45 },
    { key: 'sales', name: 'Продажи', pct: 10 },
    { key: 'tax', name: 'Резерв на налоги', pct: 10 }
  ],

  team: [
    { id: 'anton', name: 'Антон', role: 'Продюсер, руководитель', kind: 'ИП', group: 'prod', accrued: 0, paid: 0, color: '#2B2B30' },
    { id: 'makar', name: 'Макар Ильин', role: 'Ведущий', kind: 'ИП', group: 'host', accrued: 3899000, paid: 3649000, color: '#3D7BFF' },
    { id: 'nik', name: 'Николай Хромов', role: 'Монтажёр', kind: 'самозанятый', group: 'prod', accrued: 480000, paid: 420000, color: '#8E5BE8' },
    { id: 'dasha', name: 'Дарья Светлова', role: 'Оператор', kind: 'самозанятая', group: 'prod', accrued: 240000, paid: 210000, color: '#F08A3C' },
    { id: 'ilya', name: 'Илья Берёзов', role: 'Звук', kind: 'самозанятый', group: 'prod', accrued: 180000, paid: 180000, color: '#2FA36B' },
    { id: 'olga', name: 'Ольга Мирова', role: 'Продажи рекламы', kind: 'штат', group: 'sales', accrued: 1114000, paid: 1034000, color: '#E0457B' },
    { id: 'elena', name: 'Елена Карпова', role: 'Бухгалтер', kind: 'по договору', group: 'acc', accrued: 90000, paid: 90000, color: '#1FA7B8' },
    { id: 'sergey', name: 'Сергей Лунёв', role: 'Юрист', kind: 'по договору', group: 'law', accrued: 60000, paid: 60000, color: '#C98A1E' }
  ],
  groups: { prod: 'Продакшн', sales: 'Продажи', acc: 'Бухгалтерия', law: 'Юрист', host: 'Ведущий' },

  advertisers: [
    { id: 'last', name: '«Ласточка»', what: 'доставка еды', color: '#F08A3C' },
    { id: 'cube', name: '«Кьюб»', what: 'онлайн-школа', color: '#3D7BFF' },
    { id: 'polka', name: '«Полка»', what: 'маркетплейс', color: '#8E5BE8' },
    { id: 'terra', name: '«Терра»', what: 'застройщик', color: '#2FA36B' },
    { id: 'moneta', name: '«Монета»', what: 'финтех', color: '#E0457B' },
    { id: 'fit', name: '«Фитмаркет»', what: 'спортивное питание', color: '#1FA7B8' },
    { id: 'citi', name: '«Ситилайн»', what: 'связь', color: '#5B6CFF' },
    { id: 'hvost', name: '«Хвост»', what: 'зоотовары', color: '#C98A1E' },
    { id: 'lampa', name: '«Лампа»', what: 'свет для дома', color: '#7A8A3C' }
  ],

  // стадии выпуска: идея → согласован → снято → монтаж → согласование → вышел
  episodes: [
    { num: 201, guest: "Дмитрий Журавлев", who: "блогер", shoot: '2025-11-30', release: '2025-12-09', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 3706277, vk: null }, slots: [{ kind: 'Преролл', deal: null }, { kind: 'Интеграция', deal: null }, { kind: 'Мидролл', deal: null }], trip: null, folder: "Архив/2026/201_Дмитрий", onSet: ['makar', 'dasha', 'ilya'], hue: ['#9FE6C8', '#1C7A5A'], yt: { id: 'RTCNxkA0Iqk', title: "Дмитрий Журавлев — о закрытии Натальной Карты, флирте с Иванченко и детстве в деревне" } },
    { num: 202, guest: "Давидыч", who: "блогер", shoot: '2025-12-14', release: '2025-12-23', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 2448090, vk: null }, slots: [{ kind: 'Преролл', deal: null }, { kind: 'Интеграция', deal: null }, { kind: 'Мидролл', deal: null }], trip: null, folder: "Архив/2026/202_Давидыч", onSet: ['makar', 'dasha', 'ilya'], hue: ['#FFC48A', '#D9542A'], yt: { id: '2JlyQedIvg8', title: "Давидыч – русско-китайский автопром, развод из-за измены, тюрьма и ответ на хейт" } },
    { num: 203, guest: "Ваня Дмитриенко", who: "певец", shoot: '2026-02-14', release: '2026-02-23', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 1985460, vk: null }, slots: [{ kind: 'Преролл', deal: null }, { kind: 'Интеграция', deal: null }, { kind: 'Мидролл', deal: null }], trip: null, folder: "Архив/2026/203_Ваня", onSet: ['makar', 'dasha', 'ilya'], hue: ['#C8A2FF', '#5E2BB8'], yt: { id: '3IkbCSx5phI', title: "Ваня Дмитриенко — про помощь Сатиру, хейт Пересильд, билеты за 800к и новый дом" } },
    { num: 204, guest: "Asata Boroda", who: "блогер", shoot: '2026-02-19', release: '2026-02-28', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 2746812, vk: null }, slots: [{ kind: 'Преролл', deal: null }, { kind: 'Интеграция', deal: null }, { kind: 'Мидролл', deal: null }], trip: null, folder: "Архив/2026/204_Asata", onSet: ['makar', 'dasha', 'ilya'], hue: ['#A9F0D1', '#1C8A6E'], yt: { id: '1qJGtm1AV5Q', title: "ASATA BORODA — ответ Давидычу, обзор на дом, хейт из-за Нивы и развод с женой" } },
    { num: 205, guest: "Toxi$", who: "рэпер", shoot: '2026-03-22', release: '2026-03-31', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 3952330, vk: null }, slots: [{ kind: 'Преролл', deal: null }, { kind: 'Интеграция', deal: null }, { kind: 'Мидролл', deal: null }], trip: null, folder: "Архив/2026/205_Toxi$", onSet: ['makar', 'dasha', 'ilya'], hue: ['#FFE08A', '#C27A12'], yt: { id: 'ngNl_XaIOs8', title: "Toxi$ — о меме «возьми телефон», расставании с Генсухой и пересадке волос [ft. OG Buda]" } },
    { num: 206, guest: "Импровизаторы", who: "Шастун, Попов, Позов, Матвиенко", shoot: '2026-04-19', release: '2026-04-28', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 4005668, vk: null }, slots: [{ kind: 'Преролл', deal: 'd1' }, { kind: 'Интеграция', deal: 'd2' }, { kind: 'Мидролл', deal: null }], trip: null, folder: "Архив/2026/206_Импровизаторы", onSet: ['makar', 'dasha', 'ilya'], hue: ['#D7D7DC', '#3A3A44'], yt: { id: '7IJay3n2Vtw', title: "Импровизаторы — как живут: Шастун, Попов, Позов и Матвиенко" } },
    { num: 207, guest: "Арман Царукян", who: "боец UFC", shoot: '2026-06-05', release: '2026-06-14', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 3796395, vk: null }, slots: [{ kind: 'Преролл', deal: 'd3' }, { kind: 'Интеграция', deal: 'd4' }, { kind: 'Мидролл', deal: 'd5' }], trip: null, folder: "Архив/2026/207_Арман", onSet: ['makar', 'dasha', 'ilya'], hue: ['#FFB3C7', '#B8325E'], yt: { id: '0riUQCUJJT8', title: "Arman Tsarukyan — How to Become a UFC Star. Nina Drama, Chimaev’s fight, Topuria" } },
    { num: 208, guest: "Данила Поперечный*", who: "стендап-комик", shoot: '2026-06-19', release: '2026-06-28', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 5786439, vk: null }, slots: [{ kind: 'Преролл', deal: 'd6' }, { kind: 'Интеграция', deal: 'd7' }, { kind: 'Мидролл', deal: null }], trip: null, folder: "Архив/2026/208_Данила", onSet: ['makar', 'dasha', 'ilya'], hue: ['#8FD3FF', '#1E5BB8'], yt: { id: 'QMe1iZEqSUI', title: "Данила Поперечный* – о жизни в Америке, ребенке, отмене Егора Крида и распаде Кликклак" } },
    { num: 209, guest: "9mice", who: "музыкант", shoot: '2026-07-14', release: '2026-07-23', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 2712374, vk: null }, slots: [{ kind: 'Преролл', deal: 'd8' }, { kind: 'Интеграция', deal: 'd9' }, { kind: 'Мидролл', deal: 'd10' }], trip: null, folder: "Архив/2026/209_9mice", onSet: ['makar', 'dasha', 'ilya'], hue: ['#9FE6C8', '#1C7A5A'], yt: { id: 'WN1uvUGbcmo', title: "9mice — жизнь после Viperr, конфликты, стиль, обвинения бывших девушек. Первое интервью" } },
    { num: 210, guest: "Егорик", who: "блогер", shoot: '2026-08-02', release: '2026-08-12', city: "Казань", place: "Лофт «Фабрика»", stage: 'вышел', views: { yt: 3343454, vk: null }, slots: [{ kind: 'Преролл', deal: 'd11' }, { kind: 'Интеграция', deal: 'd12' }, { kind: 'Мидролл', deal: null }], trip: 't3', folder: "Архив/2026/210_Егорик", onSet: ['makar', 'dasha', 'ilya'], hue: ['#FFC48A', '#D9542A'], yt: { id: '7AdMkrfeTJQ', title: "Егорик – про встречу с Владом А4, хейт Масленникова, буллинг в школе" } },
    { num: 211, guest: "madk1d, тёмный принц, FORTUNA 812", who: "музыканты", shoot: '2026-08-22', release: '2026-08-31', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 5393906, vk: null }, slots: [{ kind: 'Преролл', deal: 'd13' }, { kind: 'Интеграция', deal: 'd14' }, { kind: 'Мидролл', deal: 'd15' }], trip: null, folder: "Архив/2026/211_madk1d", onSet: ['makar', 'dasha', 'ilya'], hue: ['#C8A2FF', '#5E2BB8'], yt: { id: 'qP0fizk1zrE', title: "madk1d, тёмный принц, FORTUNA 812 – как живут звёзды поколения саундклауда" } },
    { num: 212, guest: "Матвей Сафонов", who: "футболист, вратарь ПСЖ", shoot: '2026-09-22', release: '2026-09-30', city: "Москва", place: "Студия «Вписки»", stage: 'вышел', views: { yt: 3092730, vk: null }, slots: [{ kind: 'Преролл', deal: 'd16' }, { kind: 'Интеграция', deal: 'd17' }, { kind: 'Мидролл', deal: null }], trip: 't4', folder: "Архив/2026/212_Матвей", onSet: ['makar', 'dasha', 'ilya'], hue: ['#4C6B7A', '#0D1A20'], yt: { id: 'mzccFLEI8Bs', title: "Матвей Сафонов — как живет главный футболист России и вратарь ПСЖ (FR/Eng subs)" } },
    { num: 213, guest: 'Павел Ветров', who: 'стример', shoot: '2026-10-13', release: '2026-10-22', city: 'Санкт-Петербург', place: 'Студия на Марата', stage: 'монтаж', views: null, slots: [{ kind: 'Преролл', deal: 'd18' }, { kind: 'Интеграция', deal: 'd19' }, { kind: 'Мидролл', deal: 'd20' }], trip: null, folder: 'Архив/2026/213_Ветров', onSet: ['makar', 'dasha', 'ilya'], hue: ['#A9F0D1', '#1C8A6E'] },
    { num: 214, guest: 'Артём Соколов', who: 'стример', shoot: '2026-10-20', release: '2026-10-29', city: 'Санкт-Петербург', place: 'Студия на Марата', stage: 'согласован', views: null, slots: [{ kind: 'Преролл', deal: 'd21' }, { kind: 'Интеграция', deal: 'd22' }, { kind: 'Мидролл', deal: null }], trip: null, folder: 'Архив/2026/214_Соколов', onSet: ['makar', 'dasha', 'ilya'], hue: ['#4C6B7A', '#0D1A20'] },
    { num: 215, guest: 'Влад Орлов', who: 'музыкант', shoot: '2026-10-21', release: '2026-11-05', city: 'Москва', place: 'Лофт на Бауманской', stage: 'согласован', views: null, slots: [{ kind: 'Преролл', deal: 'd24' }, { kind: 'Интеграция', deal: null }, { kind: 'Мидролл', deal: null }], trip: 't1', folder: 'Архив/2026/215_Орлов', onSet: ['makar', 'dasha'], hue: ['#C8A2FF', '#5E2BB8'] },
    { num: 216, guest: 'Марина Ким', who: 'предпринимательница', shoot: '2026-11-03', release: '2026-11-12', city: 'Санкт-Петербург', place: 'Студия на Марата', stage: 'согласован', views: null, slots: [{ kind: 'Преролл', deal: 'd25' }, { kind: 'Интеграция', deal: 'd26' }, { kind: 'Мидролл', deal: null }], trip: null, folder: 'Архив/2026/216_Ким', onSet: ['makar', 'dasha', 'ilya'], hue: ['#FFC48A', '#D9542A'] },
    { num: 217, guest: 'Олег Сафин', who: 'комик', shoot: '2026-11-10', release: '2026-11-19', city: 'Казань', place: 'Лофт «Фабрика»', stage: 'идея', views: null, slots: [{ kind: 'Преролл', deal: null }, { kind: 'Интеграция', deal: 'd27' }, { kind: 'Мидролл', deal: null }], trip: 't2', folder: 'Архив/2026/217_Сафин', onSet: ['makar', 'dasha'], hue: ['#9FE6C8', '#1C7A5A'] }
  ],
  epStages: ['идея', 'согласован', 'снято', 'монтаж', 'согласование', 'вышел'],

  // стадии сделки: заявка → бриф → предложение → договор → предоплата → снято → вышло → отчёт → закрыто
  dealStages: ['заявка', 'бриф', 'предложение', 'договор', 'предоплата', 'снято', 'вышло', 'отчёт', 'закрыто'],
  deals: [
    { id: 'd1', adv: 'last', ep: 206, kind: 'Преролл', sum: 380000, stage: 'закрыто', paid: 380000, erid: 'получен', created: '2026-07-28' },
    { id: 'd2', adv: 'cube', ep: 206, kind: 'Интеграция', sum: 950000, stage: 'закрыто', paid: 950000, erid: 'получен', created: '2026-07-30' },
    { id: 'd3', adv: 'moneta', ep: 207, kind: 'Преролл', sum: 360000, stage: 'закрыто', paid: 360000, erid: 'получен', created: '2026-08-04' },
    { id: 'd4', adv: 'polka', ep: 207, kind: 'Интеграция', sum: 900000, stage: 'закрыто', paid: 900000, erid: 'получен', created: '2026-08-05' },
    { id: 'd5', adv: 'fit', ep: 207, kind: 'Мидролл', sum: 260000, stage: 'закрыто', paid: 260000, erid: 'получен', created: '2026-08-11' },
    { id: 'd6', adv: 'terra', ep: 208, kind: 'Преролл', sum: 420000, stage: 'закрыто', paid: 420000, erid: 'получен', created: '2026-08-12' },
    { id: 'd7', adv: 'last', ep: 208, kind: 'Интеграция', sum: 1100000, stage: 'закрыто', paid: 1100000, erid: 'получен', created: '2026-08-13' },
    { id: 'd8', adv: 'cube', ep: 209, kind: 'Преролл', sum: 450000, stage: 'закрыто', paid: 450000, erid: 'получен', created: '2026-08-19' },
    { id: 'd9', adv: 'citi', ep: 209, kind: 'Интеграция', sum: 1250000, stage: 'закрыто', paid: 1250000, erid: 'получен', created: '2026-08-20' },
    { id: 'd10', adv: 'hvost', ep: 209, kind: 'Мидролл', sum: 300000, stage: 'закрыто', paid: 300000, erid: 'получен', created: '2026-08-26' },
    { id: 'd11', adv: 'lampa', ep: 210, kind: 'Преролл', sum: 340000, stage: 'закрыто', paid: 340000, erid: 'получен', created: '2026-08-27' },
    { id: 'd12', adv: 'moneta', ep: 210, kind: 'Интеграция', sum: 980000, stage: 'закрыто', paid: 980000, erid: 'получен', created: '2026-09-01' },
    { id: 'd13', adv: 'last', ep: 211, kind: 'Преролл', sum: 400000, stage: 'закрыто', paid: 400000, erid: 'получен', created: '2026-09-02' },
    { id: 'd14', adv: 'polka', ep: 211, kind: 'Интеграция', sum: 1150000, stage: 'отчёт', paid: 1150000, erid: 'получен', created: '2026-09-03' },
    { id: 'd15', adv: 'fit', ep: 211, kind: 'Мидролл', sum: 280000, stage: 'закрыто', paid: 280000, erid: 'получен', created: '2026-09-09' },
    { id: 'd16', adv: 'cube', ep: 212, kind: 'Преролл', sum: 420000, stage: 'отчёт', paid: 420000, erid: 'получен', created: '2026-09-10' },
    { id: 'd17', adv: 'terra', ep: 212, kind: 'Интеграция', sum: 1200000, stage: 'вышло', paid: 600000, erid: 'получен', created: '2026-09-11' },
    { id: 'd18', adv: 'last', ep: 213, kind: 'Преролл', sum: 400000, stage: 'снято', paid: 400000, erid: 'получен', created: '2026-09-23' },
    { id: 'd19', adv: 'polka', ep: 213, kind: 'Интеграция', sum: 1150000, stage: 'снято', paid: 575000, erid: 'нужен', created: '2026-09-24' },
    { id: 'd20', adv: 'cube', ep: 213, kind: 'Мидролл', sum: 300000, stage: 'снято', paid: 150000, erid: 'получен', created: '2026-09-30' },
    { id: 'd21', adv: 'last', ep: 214, kind: 'Преролл', sum: 420000, stage: 'договор', paid: 0, erid: '—', created: '2026-10-01' },
    { id: 'd22', adv: 'cube', ep: 214, kind: 'Интеграция', sum: 1250000, stage: 'предоплата', paid: 625000, erid: '—', created: '2026-10-02' },
    { id: 'd23', adv: 'polka', ep: 214, kind: 'Мидролл', sum: 320000, stage: 'предложение', paid: 0, erid: '—', created: '2026-10-14' },
    { id: 'd24', adv: 'moneta', ep: 215, kind: 'Преролл', sum: 380000, stage: 'предоплата', paid: 190000, erid: '—', created: '2026-10-06' },
    { id: 'd25', adv: 'fit', ep: 216, kind: 'Преролл', sum: 400000, stage: 'бриф', paid: 0, erid: '—', created: '2026-10-15' },
    { id: 'd26', adv: 'terra', ep: 216, kind: 'Интеграция', sum: 1300000, stage: 'заявка', paid: 0, erid: '—', created: '2026-10-17' },
    { id: 'd27', adv: 'citi', ep: 217, kind: 'Интеграция', sum: 1250000, stage: 'заявка', paid: 0, erid: '—', created: '2026-10-19' }
  ],

  accounts: [
    { id: 'a', name: 'Банк А', sub: 'расчётный счёт ИП', balance: 2640000, asOf: '20.10.2026', hue: ['#2B2B30', '#5A5A66'] },
    { id: 'b', name: 'Банк Б', sub: 'второй счёт', balance: 1480000, asOf: '20.10.2026', hue: ['#3D7BFF', '#7FB0FF'] }
  ],
  taxReserve: 620000,
  nextTax: { name: 'Аванс по УСН за 9 месяцев', date: '2026-10-27', sum: 410000 },

  // операции по счетам: + приход, − расход
  ops: [
    { date: '2026-10-20', name: 'Предоплата «Кьюб» · интеграция 214', sum: 625000, cat: 'Реклама', acc: 'a', deal: 'd22' },
    { date: '2026-10-17', name: 'Аренда студии на Марата · октябрь', sum: -180000, cat: 'Студия', acc: 'a' },
    { date: '2026-10-16', name: 'Предоплата «Монета» · преролл 215', sum: 190000, cat: 'Реклама', acc: 'b', deal: 'd24' },
    { date: '2026-10-15', name: 'Макар Ильин · доля за 211 и 212', sum: -950000, cat: 'Команда', acc: 'a', person: 'makar' },
    { date: '2026-10-15', name: 'Ольга Мирова · за сентябрь', sum: -120000, cat: 'Команда', acc: 'a', person: 'olga' },
    { date: '2026-10-14', name: 'Дарья Светлова · съёмка 213', sum: -30000, cat: 'Команда', acc: 'b', person: 'dasha' },
    { date: '2026-10-14', name: 'Илья Берёзов · звук 213', sum: -25000, cat: 'Команда', acc: 'b', person: 'ilya' },
    { date: '2026-10-13', name: 'Билеты в Москву · 20–22 октября', sum: -14600, cat: 'Дорога', acc: 'b', trip: 't1' },
    { date: '2026-10-10', name: '«Терра» · часть по интеграции 212', sum: 600000, cat: 'Реклама', acc: 'a', deal: 'd17' },
    { date: '2026-10-09', name: 'Предоплата «Полка» · интеграция 213', sum: 575000, cat: 'Реклама', acc: 'a', deal: 'd19' },
    { date: '2026-10-09', name: 'Предоплата «Кьюб» · мидролл 213', sum: 150000, cat: 'Реклама', acc: 'a', deal: 'd20' },
    { date: '2026-10-08', name: '«Ласточка» · преролл 213', sum: 400000, cat: 'Реклама', acc: 'b', deal: 'd18' },
    { date: '2026-10-07', name: 'Николай Хромов · монтаж 212', sum: -60000, cat: 'Команда', acc: 'b', person: 'nik' },
    { date: '2026-10-06', name: 'Лицензия музыки · заставка', sum: -45000, cat: 'Лицензии', acc: 'a' },
    { date: '2026-10-03', name: 'Хранилище и сервисы · октябрь', sum: -12400, cat: 'Сервисы', acc: 'a' },
    { date: '2026-10-02', name: '«Кьюб» · преролл 212', sum: 420000, cat: 'Реклама', acc: 'a', deal: 'd16' },
    { date: '2026-10-01', name: 'Банк · обслуживание', sum: -1990, cat: 'Сервисы', acc: 'a' },
    { date: '2026-09-30', name: '«Полка» · остаток по интеграции 211', sum: 575000, cat: 'Реклама', acc: 'a', deal: 'd14' },
    { date: '2026-09-29', name: 'Макар Ильин · доля за 209 и 210', sum: -1050000, cat: 'Команда', acc: 'a', person: 'makar' },
    { date: '2026-09-26', name: 'Аренда лофта в Москве · 22 сентября', sum: -95000, cat: 'Студия', acc: 'b' },
    { date: '2026-09-25', name: '«Фитмаркет» · мидролл 211', sum: 280000, cat: 'Реклама', acc: 'b', deal: 'd15' },
    { date: '2026-09-24', name: '«Ласточка» · преролл 211', sum: 400000, cat: 'Реклама', acc: 'a', deal: 'd13' },
    { date: '2026-09-23', name: 'Микрофоны и свет · докупка', sum: -168000, cat: 'Техника', acc: 'a' },
    { date: '2026-09-22', name: 'Николай Хромов · монтаж 210 и 211', sum: -120000, cat: 'Команда', acc: 'b', person: 'nik' },
    { date: '2026-09-19', name: 'Билеты в Москву · 21–23 сентября', sum: -13200, cat: 'Дорога', acc: 'b', trip: 't4' },
    { date: '2026-09-18', name: '«Монета» · интеграция 210', sum: 980000, cat: 'Реклама', acc: 'a', deal: 'd12' },
    { date: '2026-09-17', name: 'Аренда студии на Марата · сентябрь', sum: -180000, cat: 'Студия', acc: 'a' },
    { date: '2026-09-16', name: 'Предоплата «Полка» · интеграция 211', sum: 575000, cat: 'Реклама', acc: 'a', deal: 'd14' },
    { date: '2026-09-15', name: 'Ольга Мирова · за август', sum: -110000, cat: 'Команда', acc: 'a', person: 'olga' },
    { date: '2026-09-12', name: '«Лампа» · преролл 210', sum: 340000, cat: 'Реклама', acc: 'b', deal: 'd11' },
    { date: '2026-09-11', name: '«Хвост» · мидролл 209', sum: 300000, cat: 'Реклама', acc: 'a', deal: 'd10' },
    { date: '2026-09-10', name: '«Ситилайн» · интеграция 209', sum: 1250000, cat: 'Реклама', acc: 'a', deal: 'd9' },
    { date: '2026-09-09', name: 'Дарья Светлова · съёмки 209 и 210', sum: -60000, cat: 'Команда', acc: 'b', person: 'dasha' },
    { date: '2026-09-08', name: '«Кьюб» · преролл 209', sum: 450000, cat: 'Реклама', acc: 'a', deal: 'd8' },
    { date: '2026-09-05', name: 'Елена Карпова · бухгалтерия за август', sum: -30000, cat: 'Команда', acc: 'a', person: 'elena' },
    { date: '2026-09-05', name: 'Сергей Лунёв · юрист за август', sum: -20000, cat: 'Команда', acc: 'a', person: 'sergey' },
    { date: '2026-09-04', name: '«Ласточка» · интеграция 208', sum: 1100000, cat: 'Реклама', acc: 'a', deal: 'd7' },
    { date: '2026-09-02', name: 'Хранилище и сервисы · сентябрь', sum: -12400, cat: 'Сервисы', acc: 'a' },
    { date: '2026-09-01', name: '«Терра» · преролл 208', sum: 420000, cat: 'Реклама', acc: 'b', deal: 'd6' },
    { date: '2026-08-29', name: 'Макар Ильин · доля за 206–208', sum: -900000, cat: 'Команда', acc: 'a', person: 'makar' },
    { date: '2026-08-27', name: '«Фитмаркет» · мидролл 207', sum: 260000, cat: 'Реклама', acc: 'b', deal: 'd5' },
    { date: '2026-08-26', name: '«Полка» · интеграция 207', sum: 900000, cat: 'Реклама', acc: 'a', deal: 'd4' },
    { date: '2026-08-25', name: '«Монета» · преролл 207', sum: 360000, cat: 'Реклама', acc: 'a', deal: 'd3' },
    { date: '2026-08-20', name: 'Налог УСН · аванс за полугодие', sum: -380000, cat: 'Налоги', acc: 'a' },
    { date: '2026-08-19', name: 'Аренда студии на Марата · август', sum: -180000, cat: 'Студия', acc: 'a' },
    { date: '2026-08-18', name: '«Кьюб» · интеграция 206', sum: 950000, cat: 'Реклама', acc: 'a', deal: 'd2' },
    { date: '2026-08-17', name: '«Ласточка» · преролл 206', sum: 380000, cat: 'Реклама', acc: 'b', deal: 'd1' },
    { date: '2026-08-14', name: 'Николай Хромов · монтаж 206–208', sum: -180000, cat: 'Команда', acc: 'b', person: 'nik' },
    { date: '2026-08-04', name: 'Аренда лофта в Казани · 2 августа', sum: -70000, cat: 'Студия', acc: 'b' },
    { date: '2026-07-29', name: 'Билеты в Казань · 1–3 августа', sum: -24800, cat: 'Дорога', acc: 'b', trip: 't3' }
  ],

  // документы: статус ЭДО — черновик, отправлен, ждёт нас, ждёт их, подписан, аннулирован; owner — чья задача (acc/law/prod/sales)
  docs: [
    { id: 'c21', type: 'Договор', title: 'Договор с «Ласточкой» · преролл 214', cp: 'last', ep: 214, deal: 'd21', status: 'ждёт нас', date: '2026-10-18', owner: 'law', edo: 'Диадок' },
    { id: 'c22', type: 'Договор', title: 'Договор с «Кьюбом» · интеграция 214', cp: 'cube', ep: 214, deal: 'd22', status: 'ждёт нас', date: '2026-10-17', owner: 'law', edo: 'Диадок' },
    { id: 'c24', type: 'Договор', title: 'Договор с «Монетой» · преролл 215', cp: 'moneta', ep: 215, deal: 'd24', status: 'ждёт нас', date: '2026-10-19', owner: 'law', edo: 'Диадок' },
    { id: 'i21', type: 'Счёт', title: 'Счёт «Ласточке» на предоплату · 210 000 ₽', cp: 'last', ep: 214, deal: 'd21', status: 'черновик', date: '2026-10-20', owner: 'acc', edo: 'Диадок' },
    { id: 'i22', type: 'Счёт', title: 'Счёт «Кьюбу» на предоплату · 625 000 ₽', cp: 'cube', ep: 214, deal: 'd22', status: 'подписан', date: '2026-10-12', owner: 'acc', edo: 'Диадок', note: 'оплачен 20.10' },
    { id: 'p23', type: 'Предложение', title: 'Предложение «Полке» · мидролл 214', cp: 'polka', ep: 214, deal: 'd23', status: 'отправлен', date: '2026-10-16', owner: 'sales', edo: 'почта' },
    { id: 'a14', type: 'Акт', title: 'Акт с «Полкой» · интеграция 211', cp: 'polka', ep: 211, deal: 'd14', status: 'ждёт их', date: '2026-10-10', owner: 'acc', edo: 'Диадок' },
    { id: 'a16', type: 'Акт', title: 'Акт с «Кьюбом» · преролл 212', cp: 'cube', ep: 212, deal: 'd16', status: 'ждёт их', date: '2026-10-14', owner: 'acc', edo: 'Диадок' },
    { id: 'a17', type: 'Акт', title: 'Акт с «Террой» · интеграция 212', cp: 'terra', ep: 212, deal: 'd17', status: 'черновик', date: '2026-10-19', owner: 'acc', edo: 'Диадок' },
    { id: 'c19', type: 'Договор', title: 'Договор с «Полкой» · интеграция 213', cp: 'polka', ep: 213, deal: 'd19', status: 'подписан', date: '2026-09-26', owner: 'law', edo: 'Диадок' },
    { id: 'c18', type: 'Договор', title: 'Договор с «Ласточкой» · преролл 213', cp: 'last', ep: 213, deal: 'd18', status: 'подписан', date: '2026-09-25', owner: 'law', edo: 'Диадок' },
    { id: 'c20', type: 'Договор', title: 'Договор с «Кьюбом» · мидролл 213', cp: 'cube', ep: 213, deal: 'd20', status: 'подписан', date: '2026-10-01', owner: 'law', edo: 'Диадок' },
    { id: 'c17', type: 'Договор', title: 'Договор с «Террой» · интеграция 212', cp: 'terra', ep: 212, deal: 'd17', status: 'подписан', date: '2026-09-12', owner: 'law', edo: 'Диадок' },
    { id: 'g213', type: 'Согласие', title: 'Согласие Павла Ветрова на съёмку', cp: null, ep: 213, status: 'подписан', date: '2026-10-13', owner: 'law', edo: 'бумага' },
    { id: 'g214', type: 'Согласие', title: 'Согласие Артёма Соколова на съёмку', cp: null, ep: 214, status: 'подписан', date: '2026-10-19', owner: 'law', edo: 'Диадок' },
    { id: 'g215', type: 'Согласие', title: 'Согласие Влада Орлова на съёмку', cp: null, ep: 215, status: 'ждёт их', date: '2026-10-18', owner: 'law', edo: 'Диадок' },
    { id: 'g216', type: 'Согласие', title: 'Согласие Марины Ким на съёмку', cp: null, ep: 216, status: 'черновик', date: '2026-10-19', owner: 'law', edo: 'Диадок' },
    { id: 'l1', type: 'Лицензия', title: 'Лицензия на музыку заставки', cp: null, status: 'подписан', date: '2026-01-10', until: '2026-12-31', owner: 'law', edo: 'почта' },
    { id: 'l2', type: 'Лицензия', title: 'Библиотека звуков для монтажа', cp: null, status: 'подписан', date: '2025-11-15', until: '2026-11-15', owner: 'law', edo: 'почта' },
    { id: 'tnik', type: 'Договор', title: 'Договор с Николаем Хромовым · монтаж', cp: null, person: 'nik', status: 'подписан', date: '2026-01-15', owner: 'law', edo: 'Диадок' },
    { id: 'tdasha', type: 'Договор', title: 'Договор с Дарьей Светловой · съёмка', cp: null, person: 'dasha', status: 'подписан', date: '2026-02-01', owner: 'law', edo: 'Диадок' },
    { id: 'tmakar', type: 'Договор', title: 'Договор с Макаром Ильиным · ведущий', cp: null, person: 'makar', status: 'подписан', date: '2026-01-10', owner: 'law', edo: 'Диадок' },
    { id: 'rent', type: 'Договор', title: 'Аренда студии на Марата · 2026', cp: null, status: 'подписан', date: '2026-01-12', until: '2026-12-31', owner: 'law', edo: 'Диадок' },
    { id: 'ch213d', type: 'Чек', title: 'Чек Дарьи Светловой · съёмка 213', cp: null, person: 'dasha', ep: 213, status: 'ждёт их', date: '2026-10-14', owner: 'acc', edo: 'Мой налог' },
    { id: 'ch213i', type: 'Чек', title: 'Чек Ильи Берёзова · звук 213', cp: null, person: 'ilya', ep: 213, status: 'подписан', date: '2026-10-14', owner: 'acc', edo: 'Мой налог' },
    { id: 'ord09', type: 'Отчёт', title: 'Отчёт в ОРД за сентябрь', cp: null, status: 'подписан', date: '2026-10-05', owner: 'law', edo: 'ОРД' },
    { id: 'ord10', type: 'Отчёт', title: 'Отчёт в ОРД за октябрь', cp: null, status: 'черновик', date: '2026-11-30', owner: 'law', edo: 'ОРД' }
  ],

  trips: [
    { id: 't1', city: 'Москва', from: '2026-10-20', to: '2026-10-22', ep: 215, who: ['anton', 'makar', 'dasha'], legs: [
      { kind: 'поезд', date: '2026-10-20', time: '21:40', arr: '06:05', route: 'Санкт-Петербург → Москва', train: '027А', car: '7', seat: '12', who: 'Антон', file: 'билет_2026-10-20_027А.pdf' },
      { kind: 'поезд', date: '2026-10-20', time: '21:40', arr: '06:05', route: 'Санкт-Петербург → Москва', train: '027А', car: '7', seat: '14', who: 'Макар Ильин', file: 'билет_2026-10-20_027А_Ильин.pdf' },
      { kind: 'отель', date: '2026-10-21', time: '14:00', route: 'Лофт-отель на Бауманской', note: '2 номера, 1 ночь', who: 'Антон, Макар', file: 'бронь_2026-10-21.pdf' },
      { kind: 'поезд', date: '2026-10-22', time: '17:10', arr: '21:05', route: 'Москва → Санкт-Петербург', train: '757А', car: '3', seat: '21', who: 'Антон', file: 'билет_2026-10-22_757А.pdf' }
    ] },
    { id: 't2', city: 'Казань', from: '2026-11-09', to: '2026-11-11', ep: 217, who: ['anton', 'makar', 'dasha'], legs: [
      { kind: 'самолёт', date: '2026-11-09', time: '08:20', arr: '10:45', route: 'Санкт-Петербург → Казань', train: 'рейс 1294', car: '', seat: '12A', who: 'Антон', file: 'посадочный_2026-11-09.pdf' },
      { kind: 'отель', date: '2026-11-09', time: '14:00', route: 'Отель у Кремля', note: '3 номера, 2 ночи', who: 'вся группа', file: 'бронь_2026-11-09.pdf' },
      { kind: 'самолёт', date: '2026-11-11', time: '19:05', arr: '21:30', route: 'Казань → Санкт-Петербург', train: 'рейс 1297', car: '', seat: '14C', who: 'Антон', file: 'посадочный_2026-11-11.pdf' }
    ] },
    { id: 't4', city: 'Москва', from: '2026-09-21', to: '2026-09-23', ep: 212, who: ['anton', 'makar', 'dasha'], legs: [
      { kind: 'поезд', date: '2026-09-21', time: '21:40', arr: '06:05', route: 'Санкт-Петербург → Москва', train: '027А', car: '5', seat: '8', who: 'Антон', file: 'билет_2026-09-21_027А.pdf' },
      { kind: 'поезд', date: '2026-09-23', time: '17:10', arr: '21:05', route: 'Москва → Санкт-Петербург', train: '757А', car: '4', seat: '17', who: 'Антон', file: 'билет_2026-09-23_757А.pdf' }
    ] },
    { id: 't3', city: 'Казань', from: '2026-08-01', to: '2026-08-03', ep: 210, who: ['anton', 'makar', 'dasha'], legs: [
      { kind: 'самолёт', date: '2026-08-01', time: '08:20', arr: '10:45', route: 'Санкт-Петербург → Казань', train: 'рейс 1294', car: '', seat: '9F', who: 'Антон', file: 'посадочный_2026-08-01.pdf' },
      { kind: 'самолёт', date: '2026-08-03', time: '19:05', arr: '21:30', route: 'Казань → Санкт-Петербург', train: 'рейс 1297', car: '', seat: '11A', who: 'Антон', file: 'посадочный_2026-08-03.pdf' }
    ] }
  ],

  // события календаря, которые не выводятся из выпусков и поездок автоматически
  events: [
    { id: 'e1', date: '2026-10-20', start: '14:30', end: '17:30', type: 'монтаж', title: 'Монтаж · выпуск 213', sub: 'Николай · черновая сборка к 18:00', ep: 213 },
    { id: 'e2', date: '2026-10-20', start: '18:00', end: '19:30', type: 'эфир', title: 'Эфир у «Разбора»', sub: 'участие в чужом шоу · онлайн' },
    { id: 'e3', date: '2026-10-21', start: '16:00', end: '18:00', type: 'монтаж', title: 'Согласование монтажа 213 с героем', sub: 'Павел Ветров · онлайн', ep: 213 },
    { id: 'e4', date: '2026-10-23', start: '11:00', end: '18:00', type: 'монтаж', title: 'Монтаж · выпуск 214', sub: 'Николай · разбор материала', ep: 214 },
    { id: 'e5', date: '2026-10-24', start: '12:00', end: '12:30', type: 'дедлайн', title: 'Предоплата «Ласточки» по 214', sub: '210 000 ₽ · по договору до пятницы', deal: 'd21' },
    { id: 'e6', date: '2026-10-22', start: '10:00', end: '10:30', type: 'дедлайн', title: 'Токен маркировки для «Полки»', sub: 'интеграция в 213 · выпуск выходит сегодня', deal: 'd19' },
    { id: 'e7', date: '2026-10-27', start: '11:00', end: '17:00', type: 'монтаж', title: 'Монтаж · выпуск 214', sub: 'Николай · черновая сборка', ep: 214 },
    { id: 'e8', date: '2026-10-27', start: '12:00', end: '12:30', type: 'дедлайн', title: 'Аванс по УСН за 9 месяцев', sub: '410 000 ₽ · Елена готовит платёжку' },
    { id: 'e9', date: '2026-10-30', start: '15:00', end: '16:30', type: 'эфир', title: 'Подкаст «На связи»', sub: 'Макар · гость · студия подкаста' },
    { id: 'e10', date: '2026-10-16', start: '19:00', end: '20:30', type: 'эфир', title: 'Прямой эфир во ВК', sub: 'ответы на вопросы · студия' },
    { id: 'e11', date: '2026-10-15', start: '11:00', end: '18:00', type: 'монтаж', title: 'Монтаж · выпуск 213', sub: 'Николай · разбор материала', ep: 213 },
    { id: 'e12', date: '2026-10-14', start: '10:00', end: '12:00', type: 'монтаж', title: 'Загрузка исходников 213 в архив', sub: 'Дарья · студия', ep: 213 },
    { id: 'e13', date: '2026-10-09', start: '11:00', end: '15:00', type: 'монтаж', title: 'Субтитры и обложка · выпуск 212', sub: 'Николай · версия для ВК', ep: 212 },
    { id: 'e14', date: '2026-10-28', start: '16:00', end: '18:00', type: 'монтаж', title: 'Согласование монтажа 214 с героем', sub: 'Артём Соколов · онлайн', ep: 214 },
    { id: 'e15', date: '2026-11-06', start: '11:00', end: '18:00', type: 'монтаж', title: 'Монтаж · выпуск 215', sub: 'Николай · разбор материала', ep: 215 },
    { id: 'e16', date: '2026-11-30', start: '12:00', end: '12:30', type: 'дедлайн', title: 'Отчёт в ОРД за октябрь', sub: 'Сергей · все выпуски, вышедшие в октябре' },
    { id: 'e17', date: '2026-11-15', start: '12:00', end: '12:30', type: 'дедлайн', title: 'Истекает лицензия на библиотеку звуков', sub: 'продлить или заменить', doc: 'l2' }
  ],

  tasks: [
    { id: 'k1', group: 'prod', title: 'Подтвердить свет и звук для 214', due: '2026-10-19', done: true, ep: 214 },
    { id: 'k2', group: 'prod', title: 'Собрать черновик 213 к 18:00', due: '2026-10-20', done: false, who: 'nik', ep: 213 },
    { id: 'k3', group: 'prod', title: 'Загрузить исходники 214 в архив', due: '2026-10-21', done: false, who: 'dasha', ep: 214 },
    { id: 'k4', group: 'prod', title: 'Обложка и название для 213', due: '2026-10-21', done: false, ep: 213 },
    { id: 'k5', group: 'prod', title: 'Согласовать монтаж 213 с героем', due: '2026-10-21', done: false, ep: 213 },
    { id: 'k6', group: 'prod', title: 'Заявка на лофт в Казани на 10 ноября', due: '2026-10-28', done: false, ep: 217 },
    { id: 'k7', group: 'sales', title: 'Предложение «Полке» на мидролл 214', due: '2026-10-20', done: false, who: 'olga', deal: 'd23' },
    { id: 'k8', group: 'sales', title: 'Ответить «Терре» по заявке на 216', due: '2026-10-22', done: false, who: 'olga', deal: 'd26' },
    { id: 'k9', group: 'sales', title: 'Бриф от «Фитмаркета» для 216', due: '2026-10-23', done: false, who: 'olga', deal: 'd25' },
    { id: 'k10', group: 'sales', title: 'Напомнить «Ласточке» о предоплате', due: '2026-10-24', done: false, who: 'olga', deal: 'd21' },
    { id: 'k11', group: 'sales', title: 'Обновить медиакит цифрами за сентябрь', due: '2026-10-25', done: false, who: 'olga' },
    { id: 'k12', group: 'acc', title: 'Выставить счёт «Ласточке» на 210 000 ₽', due: '2026-10-20', done: false, who: 'elena', doc: 'i21' },
    { id: 'k13', group: 'acc', title: 'Получить чек от Дарьи за съёмку 213', due: '2026-10-21', done: false, who: 'elena', doc: 'ch213d' },
    { id: 'k14', group: 'acc', title: 'Акт «Терре» по интеграции 212', due: '2026-10-22', done: false, who: 'elena', doc: 'a17' },
    { id: 'k15', group: 'acc', title: 'Напомнить «Полке» про акт за 211', due: '2026-10-24', done: false, who: 'elena', doc: 'a14' },
    { id: 'k16', group: 'acc', title: 'Аванс по УСН за 9 месяцев · 410 000 ₽', due: '2026-10-27', done: false, who: 'elena' },
    { id: 'k17', group: 'law', title: 'Подписать договоры: «Ласточка», «Кьюб», «Монета»', due: '2026-10-20', done: false, who: 'sergey', docs: ['c21', 'c22', 'c24'] },
    { id: 'k18', group: 'law', title: 'Токен маркировки для интеграции «Полки» в 213', due: '2026-10-22', done: false, who: 'sergey', deal: 'd19' },
    { id: 'k19', group: 'law', title: 'Согласие Влада Орлова на съёмку', due: '2026-10-21', done: false, who: 'sergey', doc: 'g215' },
    { id: 'k20', group: 'law', title: 'Продлить лицензию на библиотеку звуков', due: '2026-11-10', done: false, who: 'sergey', doc: 'l2' },
    { id: 'k21', group: 'law', title: 'Отчёт в ОРД за сентябрь', due: '2026-10-05', done: true, who: 'sergey', doc: 'ord09' },
    { id: 'k22', group: 'host', title: 'Вопросы Артёму Соколову', due: '2026-10-19', done: true, who: 'makar', ep: 214 },
    { id: 'k23', group: 'host', title: 'Вопросы Владу Орлову', due: '2026-10-21', done: false, who: 'makar', ep: 215 }
  ]
};
