const MENU_DATA=[{"category_fa":"دسر","category_en":"Desert","items":[{"name_fa":"اپرا","name_en":"Opera","price":"280","description":""},{"name_fa":"فرزیه","name_en":"","price":"295","description":""},{"name_fa":"سن سباستین","name_en":"San Sebastian","price":"280","description":""},{"name_fa":"پاریس برست پسته","name_en":"Paris Brest Pistachio","price":"290","description":""},{"name_fa":"کروسان بادام","name_en":"Almond Croissant","price":"290","description":""},{"name_fa":"کروسان شکلات","name_en":"Chocolate Croissant","price":"290","description":""},{"name_fa":"باقلوا","name_en":"Baklava","price":"50","description":""}]},{"category_fa":"عربیکا","category_en":"Arabica","items":[{"name_fa":"اسپرسو","name_en":"Espresso","price":"سینگل 190 / دبل 220","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر"},{"name_fa":"آمریکانو","name_en":"Americano","price":"سینگل 190 / دبل 220","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، آب جوش"},{"name_fa":"اسپرسو ماکیاتو","name_en":"Espresso Macchiato","price":"230","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، لکه فوم شیر"},{"name_fa":"کن هیلو","name_en":"Con Hielo","price":"220","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، یخ"},{"name_fa":"رومانو","name_en":"Romano","price":"230","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، لیمو، نمک"},{"name_fa":"کورتادو","name_en":"Cortado","price":"230","description":"نسبت یک به یک شیر و عصاره قهوه عربیکا تک خاستگاه بلک شوگر"},{"name_fa":"کن پانا","name_en":"Con Panna","price":"240","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، خامه"},{"name_fa":"لاته","name_en":"Latte","price":"280","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، شیر، فوم شیر"},{"name_fa":"کاپوچینو کلاسیک","name_en":"Classic Cappuccino","price":"270","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، شیر گرم، فوم شیر"},{"name_fa":"موکا","name_en":"Mocha","price":"320","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سس شکلات، شیر گرم، فوم شیر"},{"name_fa":"کوکو موکا لاته","name_en":"Coco Mocha Latte","price":"330","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ نارگیل، سس شکلات، شیر گرم، فوم شیر"},{"name_fa":"کوکو لاته","name_en":"Coco Latte","price":"320","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ نارگیل، شیر گرم، فوم شیر"},{"name_fa":"سینمن لاته","name_en":"Cinnamon Latte","price":"320","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ دارچین، شیر گرم، فوم شیر"},{"name_fa":"هانی لاته","name_en":"Honey Latte","price":"310","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، عسل، شیر گرم، فوم شیر"},{"name_fa":"هیزل لاته","name_en":"Hazel Latte","price":"320","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ فندق، شیر گرم، فوم شیر"},{"name_fa":"کارامل لاته","name_en":"Caramel Latte","price":"320","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ کارامل، شیر گرم، فوم شیر"},{"name_fa":"اسنیکرز لاته","name_en":"Sneakers Latte","price":"330","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ کارامل، کره بادام زمینی، سس شکلات، شیر گرم، فوم شیر"},{"name_fa":"آیس آمریکانو","name_en":"Ice Americano","price":"240","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، آب، یخ"},{"name_fa":"آیس لاته","name_en":"Iced Latte","price":"300","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، شیر، یخ"},{"name_fa":"آیس موکا","name_en":"Iced Mocha","price":"340","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سس شکلات، شیر، یخ"},{"name_fa":"آیس کوکو موکا","name_en":"Iced Coco Mocha","price":"350","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سس شکلات، سیروپ نارگیل، شیر، یخ"},{"name_fa":"آیس کوکو لاته","name_en":"Iced Coco Latte","price":"340","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ نارگیل، شیر، یخ"},{"name_fa":"آیس هیزل لاته","name_en":"Icede Hazel Latte","price":"340","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ فندق، شیر، یخ"},{"name_fa":"آیس کارامل لاته","name_en":"Iced Caramel Latte","price":"340","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ کارامل، شیر، یخ"},{"name_fa":"آیس اسنیکرز لاته","name_en":"Iced Sneakers Latte","price":"350","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ کارامل، کره بادام زمینی، سس شکلات، شیر، یخ"},{"name_fa":"آفوگاتو","name_en":"Afogato","price":"310","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، بستنی وانیل"},{"name_fa":"اورنج تونیک اسپرسو","name_en":"Orange Tonic Espresso","price":"320","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، آب پرتقال طبیعی، سودا، یخ"},{"name_fa":"آیریش تونیک اسپرسو","name_en":"Irish Tonic Espresso","price":"300","description":"عصاره قهوه عربیکا تک خاستگاه بلک شوگر، سیروپ آیریش، سودا، یخ"},{"name_fa":"لمون تونیک اسپرسو","name_en":"Lemon Tonic Espresso","price":"310","description":"عصاره قوه عربیکا تک خاستگاه بلک شوگر، لیمو، سودا، یخ"}]},{"category_fa":"ترکیب 50/50","category_en":"50/50 Blend","items":[{"name_fa":"اسپرسو","name_en":"Espresso","price":"سینگل 160 / دبل 190","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر"},{"name_fa":"آمریکانو","name_en":"Americano","price":"سینگل 160 / دبل 190","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، آب جوش"},{"name_fa":"اسپرسو ماکیاتو","name_en":"Espresso Macchiato","price":"200","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، لکه فوم شیر"},{"name_fa":"کن هیلو","name_en":"Con Hielo","price":"190","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، یخ"},{"name_fa":"رومانو","name_en":"Romano","price":"200","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، لیمو، نمک"},{"name_fa":"کورتادو","name_en":"Cortado","price":"200","description":"نسبت یک به یک شیر و عصاره قهوه ترکیبی 50/50 بلک شوگر"},{"name_fa":"کن پانا","name_en":"Con Pana","price":"210","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، خامه"},{"name_fa":"لاته","name_en":"Latte","price":"250","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، شیر گرم، فوم شیر"},{"name_fa":"کاپوچینو کلاسیک","name_en":"Classic Cappuccino","price":"240","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، شیر گرم، فوم شیر"},{"name_fa":"موکا","name_en":"Mocha","price":"290","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سس شکلات، شیر گرم، فوم شیر"},{"name_fa":"کوکو موکا","name_en":"Coco Mocha","price":"300","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سس شکلات، سیروپ نارگیل، شیر گرم، فوم شیر"},{"name_fa":"کوکو لاته","name_en":"Coco Latte","price":"290","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ نارگیل، شیر گرم، فوم شیر"},{"name_fa":"سینمن لاته","name_en":"Cinnamon Latte","price":"290","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ دارچین، شیر گرم، فوم شیر"},{"name_fa":"هانی لاته","name_en":"Honey Latte","price":"280","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، عسل، شیر گرم، فوم شیر"},{"name_fa":"هیزل لاته","name_en":"Hazel Latte","price":"290","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ فندق، شیر گرم، فوم شیر"},{"name_fa":"کارامل لاته","name_en":"Caramel Latte","price":"290","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ کارامل، شیر گرم، فوم شیر"},{"name_fa":"اسنیکرز لاته","name_en":"Sneakers Latte","price":"300","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، کره بادام زمینی، سس شکلات، سیروپ کارامل، شیر گرم، فوم شیر"},{"name_fa":"آیس آمریکانو","name_en":"Ice Americano","price":"210","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، آب، یخ"},{"name_fa":"آیس لاته","name_en":"Iced Latte","price":"270","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، شیر، یخ"},{"name_fa":"آیس موکا","name_en":"Iced Mocha","price":"310","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سس شکلات، سیروپ وانیل، شیر، یخ"},{"name_fa":"آیس کوکو موکا","name_en":"Iced Coco Mocha","price":"320","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سس شکلات، سیروپ نارگیل، شیر، یخ"},{"name_fa":"آیس کوکو لاته","name_en":"Iced Coco Latte","price":"310","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ نارگیل، شیر، یخ"},{"name_fa":"آیس هیزل لاته","name_en":"Iced Caramel Latte","price":"310","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ کارامل، شیر، یخ"},{"name_fa":"آیس کارامل لاته","name_en":"Iced caramel Latte","price":"310","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ کارامل، شیر، یخ"},{"name_fa":"آیس اسنیکرز لاته","name_en":"Iced Sneakers Latte","price":"320","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ کارامل، کره بادام زمینی، سس شکلات، شیر، یخ"},{"name_fa":"آفوگاتو","name_en":"Afogato","price":"280","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، بستنی وانیلی"},{"name_fa":"اورنج تونیک اسپرسو","name_en":"Orange Tonic Espresso","price":"290","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، آب پرتقال طبیعی، سودا، یخ"},{"name_fa":"لمون تونیک اسپرسو","name_en":"Lemon Tonic Espresso","price":"280","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، لیمو، سودا، یخ"},{"name_fa":"آیریش تونیک اسپرسو","name_en":"Irish Tonic Espresso","price":"270","description":"عصاره قهوه ترکیبی 50/50 بلک شوگر، سیروپ آیریش، سودا، یخ"}]},{"category_fa":"فاین ربوستا","category_en":"Fine Robusta","items":[{"name_fa":"اسپرسو","name_en":"Espresso","price":"سینگل 130 / دبل 160","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر"},{"name_fa":"آمریکانو","name_en":"Americano","price":"سینگل 130 / دبل 160","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، آب جوش"},{"name_fa":"اسپرسو ماکیاتو","name_en":"Espresso Macchiato","price":"170","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، لکه فوم شیر"},{"name_fa":"کن هیلو","name_en":"Con Hielo","price":"160","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، یخ"},{"name_fa":"رومانو","name_en":"Romano","price":"170","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر, آب لیمو، نمک"},{"name_fa":"کورتادو","name_en":"Cortado","price":"170","description":"نسبت یک به یک شیر و عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر"},{"name_fa":"کن پانا","name_en":"Con Panna","price":"180","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستای بلک شوگر"},{"name_fa":"لاته","name_en":"Latte","price":"220","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، شیر گرم، فوم شیر"},{"name_fa":"کاپوچینو کلاسیک","name_en":"Classic Cappuchino","price":"210","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، شیر گرم، فوم شیر"},{"name_fa":"موکا","name_en":"Mocha","price":"260","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سس شکلات، شیر گرم، فوم شیر"},{"name_fa":"کوکو موکا","name_en":"Coco Mocha","price":"270","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ نارگیل، سس شکلات، شیر گرم، فوم شیر"},{"name_fa":"کوکو لاته","name_en":"Coco Latte","price":"260","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ نارگیل، شیر گرم، فوم شیر"},{"name_fa":"سینمن لاته","name_en":"Cinnamon Latte","price":"260","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ دارچین، شیر گرم، فوم شیر"},{"name_fa":"هانی لاته","name_en":"Honey Latte","price":"250","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، عسل، شیر گرم، فوم شیر"},{"name_fa":"هیزل لاته","name_en":"Hazel Latte","price":"260","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ فندق، شیر گرم، فوم شیر"},{"name_fa":"کارامل لاته","name_en":"Caramel Latte","price":"260","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ کارامل، شیر گرم، فوم شیر"},{"name_fa":"اسنیکرز لاته","name_en":"Sneakers Latte","price":"270","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سس شکلات، کره بادام زمینی، سیروپ کارامل، شیر گرم، فوم شیر"},{"name_fa":"آیس آمریکانو","name_en":"Ice Americano","price":"180","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، یخ"},{"name_fa":"آیس لاته","name_en":"Iced Latte","price":"240","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، شیر، یخ"},{"name_fa":"آیس موکا","name_en":"Iced Mocha","price":"280","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سس شکلات، شیر، یخ"},{"name_fa":"آیس کوکو موکا","name_en":"Iced Coco Mocha","price":"290","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ نارگیل، سس شکلات، شیر گرم، فوم شیر"},{"name_fa":"آیس کوکو لاته","name_en":"Iic Coco Late","price":"280","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ نارگیل، شیر، یخ"},{"name_fa":"آیس هیزل لاته","name_en":"Iced Hazel latte","price":"280","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ فندق، شیر، یخ"},{"name_fa":"آیس کارامل لاته","name_en":"Iced Caramel latte","price":"280","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ کارامل، شیر، یخ"},{"name_fa":"آیس اسنیکرز لاته","name_en":"Iced Sneakers Latte","price":"290","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، کره بادام زمینی، سس شکلات، سیروپ کارامل، شیر، یخ"},{"name_fa":"آفوگاتو","name_en":"Afogato","price":"250","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، 2 اسکوپ بستنی وانیلی"},{"name_fa":"اورنج تونیک اسپرسو","name_en":"Orange Tonic Espresso","price":"260","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، آب پرتقال، سودا، یخ"},{"name_fa":"آیریش تونیک اسپرسو","name_en":"Irish Tonic Espresso","price":"240","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سیروپ آیریش، سودا، یخ"},{"name_fa":"لمون تونیک اسپرسو","name_en":"Lemon Tonic espresso","price":"250","description":"عصاره قهوه تک خاستگاه اوگاندا فاین ربوستا بلک شوگر، سودا، لیمو، یخ"}]},{"category_fa":"قهوه دمی","category_en":"Brewed Coffee","items":[{"name_fa":"وی 60 (یِمن)","name_en":"","price":"310","description":"نوع: عربیکا اسپشیال (بنی مطعر - یمن) / فرآوری: نچرال / طعم یاد: شکلات سیاه، گل رز، شکوفه قهوه، انگور تخمیری، زردآلو"},{"name_fa":"وی 60 (کلمبیا - کاتورانچرال)","name_en":"","price":"290","description":"نوع: عربیکا اسپشیال (کلمبیا) / فرآوری: تخمیر بی هوازی 200 ساعت / طعم یاد: گیلاس، انگور تخمیر شده، انار، آناناس، شاتوت"},{"name_fa":"وی 60 (کلمبیا - گیشا)","name_en":"","price":"260","description":"نوع: عربیکا اسپشیال (کلمبیا) / فرآوری: شسته / طعم یاد: بلک تی، شکلات تلخ، چوب دودی، هلو"},{"name_fa":"ایروپرس (یِمن)","name_en":"Airopress","price":"280","description":"نوع: عربیکا اسپشیال (بنی مطعر - یمن) / طعم یاد: شکلات سیاه، گل رز، شکوفه قهوه، انگور تخمیری، زردآلو"},{"name_fa":"ایروپرس (کلمبیا - کاتورانچرال)","name_en":"Airopress","price":"260","description":"نوع: عربیکا اسپشیال (کلمبیا) / فرآوری: تخمیر بی هوازی 200 ساعت / طعم یاد: گیلاس، انگور تخمیر شده، انار..."},{"name_fa":"ایروپرس (کلمبیا - گیشا)","name_en":"Airopress","price":"240","description":"نوع: عربیکا اسپشیال (کلمبیا) / فرآوری: شسته / طعم یاد: بلک تی، شکلات تلخ، چوب دودی، هلو"},{"name_fa":"بلک آیریش","name_en":"Black Irish","price":"240","description":"نوع: عربیکا اسپشیالیتی (اتیوبی - گوجی) / دم‌آوری شده با برو ماشین، سیروپ آیریش"},{"name_fa":"بلک کافی","name_en":"Black Coffee","price":"220","description":"نوع: عربیکا اسپشیالیتی (اتیوبی - گوجی) / دم‌آوری شده با برو ماشین"},{"name_fa":"کلد برو نور","name_en":"","price":"320","description":""},{"name_fa":"کلدبرو شیراز","name_en":"","price":"320","description":""},{"name_fa":"کلدبرو لیمو نیشکر","name_en":"","price":"320","description":""},{"name_fa":"کلدبرو بلوط","name_en":"","price":"320","description":""},{"name_fa":"کلدبرو کافی کولا","name_en":"Coffee-Cola","price":"290","description":""},{"name_fa":"کلدبرو آیریش","name_en":"Irish Beer","price":"290","description":""},{"name_fa":"کلدبرو کوکوآچری","name_en":"Cocoa Cherry","price":"290","description":""},{"name_fa":"کلدبرو کلاسیک","name_en":"Classic","price":"290","description":""},{"name_fa":"کلدبرو پرشین","name_en":"Persian","price":"290","description":""},{"name_fa":"تانیک واتر","name_en":"Tonic Water","price":"195","description":""}]},{"category_fa":"بار گرم","category_en":"Hot Drinks","items":[{"name_fa":"چای باقلوا","name_en":"Baklava Tea","price":"170","description":"چای سیاه، چای مراکشی، زعفران، باقلوا، نبات"},{"name_fa":"چای انگلیسی","name_en":"English Tea","price":"190","description":"چای سیاه، چای مراکشی، عسل، دارچین، شیر"},{"name_fa":"چای کرک زعفرانی","name_en":"Saffron Karak Tea","price":"220","description":"چای کرک زعفرانی، شیر"},{"name_fa":"چای کرک هل","name_en":"","price":"200","description":"چای کرک هل، شیر"},{"name_fa":"چای ماسالا","name_en":"","price":"190","description":"چای ماسالا، شیر"},{"name_fa":"ماسالا اسپایسی","name_en":"","price":"210","description":"چای ماسالا اسپایسی (تند)، شیر"},{"name_fa":"هات چاکلت","name_en":"","price":"250","description":"پودر دارک چاکلت اسپیشیال، شیر"},{"name_fa":"ناتی چاکلت","name_en":"","price":"280","description":"پودر ناتی چاکلت اسپیشیال (آجیلی)، شیر"},{"name_fa":"مارشمالو چاکلت","name_en":"Marshmallow Chocolate","price":"270","description":"پودر دارک چاکلت اسپیشیال، مارشمالو کبابی، شیر"},{"name_fa":"وایت چاکلت","name_en":"White Chocolate","price":"210","description":"پودر وایت چاکلت، شیر"},{"name_fa":"پینات وایت چاکلت","name_en":"Peanut White Chocolate","price":"230","description":"پودر وایت چاکلت، کرانچی بادام زمینی، شیر"},{"name_fa":"بیسکومیلک","name_en":"Biscomilk","price":"260","description":"بیسکوئیت لوتوس، کره لوتوس، شیر"},{"name_fa":"شیر عسل","name_en":"Honey Milk","price":"180","description":"شیر، عسل"}]},{"category_fa":"ماچا ++A","category_en":"Matcha ++A","items":[{"name_fa":"ماچا لاته","name_en":"Matcha latte","price":"290","description":"ماچا، شیر گرم"},{"name_fa":"ماچاکوکو","name_en":"Matcha Coco","price":"330","description":"ماچا، سیروپ نارگیل، شیر گرم"},{"name_fa":"ماچابری","name_en":"Matcha Berry","price":"330","description":"ماچا، سیروپ توت فرنگی، شیر گرم"},{"name_fa":"ماچا منگو","name_en":"Matcha Mango","price":"330","description":"ماچا، سس انبه، شیر گرم"},{"name_fa":"آیس ماچا لاته","name_en":"Iced Matcha Latte","price":"320","description":"ماچا، شیر، یخ"},{"name_fa":"آیس ماچا کوکو","name_en":"Iced Matcha Coco","price":"360","description":"ماچا، سیروپ نارگیل، شیر، یخ"},{"name_fa":"آیس ماچا بری","name_en":"Iced Matcha Berry","price":"360","description":"ماچا، توت فرنگی، سیروپ توت فرنگی، شیر، یخ"},{"name_fa":"آیس ماچا منگو","name_en":"Iced Matcha Mango","price":"360","description":"ماچا، انبه، سس انبه، شیر، یخ"},{"name_fa":"آیس ماچا کوکوبری","name_en":"Iced Matcha Coco Berry","price":"370","description":"ماچا، توت فرنگی، سیروپ توت فرنگی، سیروپ نارگیل، شیر، یخ"},{"name_fa":"ماچاگاتو","name_en":"Matchagato","price":"350","description":"ماچا، بستنی وانیل، بستنی شکلات تکه ای"}]},{"category_fa":"فراپه","category_en":"Frappe","items":[{"name_fa":"کلاسیک فراپاچینو","name_en":"Classic Frappuccino","price":"310","description":"اسپرسو دبل فاین ربوستا اوگاندا، خامه صبحانه، شیر، خامه، یخ کراش"},{"name_fa":"موکا فراپاچینو","name_en":"Mocha Frappuccino","price":"350","description":"اسپرسو دبل فاین ربوستا اوگاندا، خامه صبحانه، کرم شکلاتی، شیر، خامه، یخ کراش"},{"name_fa":"کارامل فراپاچینو","name_en":"Caramel Frappuccino","price":"330","description":"اسپرسو دبل فاین ربوستا اوگاندا، خامه صبحانه، سیروپ کارامل، خامه، شیر، یخ کراش"}]},{"category_fa":"شیک","category_en":"Shake","items":[{"name_fa":"پرشین","name_en":"Persian","price":"390","description":"بستنی وانیل، پسته دندانه شده، کره پسته، زعفران، خامه"},{"name_fa":"لوتوس","name_en":"Lotus","price":"370","description":"بستنی وانیل، کرم لوتوس، بیسکوئیت لوتوس، خامه"},{"name_fa":"اسنیکرز","name_en":"Sneakers","price":"370","description":"بستنی اسنیکرز، کرم شکلاتی، کرانچی بادام زمینی، سس کارامل، خامه"},{"name_fa":"پینات","name_en":"Peanut","price":"350","description":"بستنی وانیل، کرانچی بادام زمینی، خامه"},{"name_fa":"نوتلا","name_en":"Nutella","price":"370","description":"بستنی وانیل، نوتلا، خامه"},{"name_fa":"دارک بلوم","name_en":"Dark bloom","price":"350","description":"بستنی شکلات تکه ای، کرم شکلات، خامه"},{"name_fa":"کوکو بری","name_en":"Coco Berry","price":"380","description":"بستنی توت فرنگی، نارگیل، توت فرنگی، خامه"},{"name_fa":"پاور شیک","name_en":"Power Shake","price":"430","description":"پودر پروتئین وی، کرانچی بادام زمینی، خرما، ارده کنجد، عسل، توت فرنگی، موز، شیر"}]},{"category_fa":"اسموتی","category_en":"Smoothie","items":[{"name_fa":"کازا","name_en":"Casa","price":"390","description":"آناناس، نارگیل، انبه، موز، سیروپ نارگیل، یخ کراش"},{"name_fa":"مری بری","name_en":"Marry Berry","price":"380","description":"سربت شاتوت، توت فرنگی، شاتوت، سیروپ کرن بری، سیروپ توت فرنگی، یخ کراش"},{"name_fa":"پیناکولادا","name_en":"Pinacolada","price":"360","description":"آناناس، نارگیل، آب میوه‌ی آناناس، سیروپ بلوکاراسائو، سیروپ نارگیل، یخ کراش"}]},{"category_fa":"ماکتیل","category_en":"Mocktail","items":[{"name_fa":"لیموناد اورجینال","name_en":"Original Lemonade","price":"220","description":"وج لیمو، سیروپ لیمو، سودا، یخ"},{"name_fa":"موهیتو اورجینال","name_en":"Original Mojito","price":"240","description":"وج لیمو، نعنا، سیروپ لیمو، سیروپ موهیتو، سودا، یخ"},{"name_fa":"پینک لیدی","name_en":"Pink Lady","price":"280","description":"آلوورا، پیناکولادا، توت فرنگی، سیروپ رزبری، سیروپ آدامس، لیمو، سودا، یخ"},{"name_fa":"اسکارلت","name_en":"Scarlet","price":"270","description":"آب آلبالوی طبیعی، آب انار طبیعی، آب زرشک طبیعی، سیروپ انار، لیمو، یخ"}]}];

(function(){
  const d=document.getElementById('cd'),r=document.getElementById('cr');
  if(!d||!window.matchMedia('(hover:hover)').matches)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;d.style.left=mx+'px';d.style.top=my+'px';});
  (function L(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;r.style.left=rx+'px';r.style.top=ry+'px';requestAnimationFrame(L);})();
})();

(function(){
  const burger=document.getElementById('nburger');
  const mmenu=document.getElementById('mmenu');
  const closeBtn=document.getElementById('mmClose');
  function openMenu(){mmenu.classList.add('open');burger.classList.add('open');document.body.style.overflow='hidden';}
  function closeMenu(){burger.classList.remove('open');mmenu.classList.remove('open');document.body.style.overflow='';}
  burger.addEventListener('click',()=>{mmenu.classList.contains('open')?closeMenu():openMenu();});
  closeBtn.addEventListener('click',closeMenu);
  mmenu.querySelectorAll('.mm-link,.mm-cta').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mmenu.classList.contains('open'))closeMenu();});
})();

let allData=[], filtered=[];

async function fetchMenu(){
  try{
    const res=await fetch('/api/menu/cafe/');
    if(!res.ok) throw new Error('خطا در دریافت منو');
    const data=await res.json();
    allData=data.map(cat=>({category_fa:cat.name_fa,category_en:cat.name_en||'',items:cat.items}));
    filtered=allData;
  }catch(e){console.error('خطای منو:',e);}
  finally{
    document.getElementById('loading').style.display='none';
    document.getElementById('cats-wrap').style.display='block';
    render(allData);
  }
}

function render(data){
  const wrap=document.getElementById('cats-wrap');
  const nav=document.getElementById('cat-nav-inner');
  wrap.innerHTML='';nav.innerHTML='';
  if(!data.length){wrap.innerHTML='<div class="no-res">هیچ آیتمی یافت نشد.</div>';return;}
  data.forEach((cat,ci)=>{
    const btn=document.createElement('button');
    btn.className='cat-btn'+(ci===0&&filtered===allData?' active':'');
    btn.textContent=cat.category_fa;
    btn.onclick=()=>scrollToCat(ci);
    nav.appendChild(btn);
    const sec=document.createElement('section');
    sec.className='cat-section';sec.id='cat-'+ci;
    const items=cat.items.filter(it=>it.is_visible!==false);
    sec.innerHTML=`<div class="cat-head"><h2 class="cat-fa">${cat.category_fa}</h2>${cat.category_en?`<span class="cat-en">${cat.category_en}</span>`:''}<span class="cat-count">${items.length} آیتم</span></div><div class="items-grid" id="grid-${ci}">${items.map(item=>cardHTML(item,cat.category_fa)).join('')}</div>`;
    wrap.appendChild(sec);
  });
  animateCards();
  setupCatArrows();
  setTimeout(setupCatArrows,350); // re-check after fonts/layout settle
}

/* ── Category nav arrows (smooth horizontal navigation) ── */
function setupCatArrows(){
  const navWrap=document.querySelector('.cat-nav');
  const inner=document.getElementById('cat-nav-inner');
  const prev=document.getElementById('catPrev');
  const next=document.getElementById('catNext');
  if(!navWrap||!inner||!prev||!next)return;
  const step=()=>Math.max(180,inner.clientWidth*0.7);
  if(!setupCatArrows._wired){
    next.addEventListener('click',()=>inner.scrollBy({left:-step(),behavior:'smooth'}));
    prev.addEventListener('click',()=>inner.scrollBy({left:step(),behavior:'smooth'}));
    window.addEventListener('resize',()=>setupCatArrows(),{passive:true});
    setupCatArrows._wired=true;
  }
  navWrap.classList.toggle('show-arrows',inner.scrollWidth-inner.clientWidth>8);
}

function cardHTML(item,catFa){
  const price=parseInt(item.price||0).toLocaleString('fa-IR');
  const seed=(item.name_en||item.name_fa||'food').replace(/\s+/g,'-').toLowerCase();
  const img=item.image_url||`https://picsum.photos/seed/${seed}-cb/400/300`;
  const bNew=item.is_new?'<span class="bdg bdg-new">جدید</span>':'';
  const bSp=item.is_special?'<span class="bdg bdg-sp">ویژه</span>':'';
  const data=JSON.stringify(item).replace(/"/g,'&quot;').replace(/'/g,"&#39;");
  const catEsc=catFa.replace(/'/g,"&#39;");
  return `<article class="item-card" onclick="openModal(${data},'${catEsc}')"><div class="item-img"><img src="${img}" alt="${item.name_fa}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${seed}2/400/300'"/>${bNew||bSp?`<div class="item-badges">${bNew}${bSp}</div>`:''}</div><div class="item-body"><h3 class="item-fa">${item.name_fa}</h3>${item.name_en?`<p class="item-en">${item.name_en}</p>`:''} ${item.description?`<p class="item-desc">${item.description}</p>`:''}</div><div class="item-foot"><span class="item-price">${price}<small>هزار تومان</small></span><span class="item-plus">+</span></div></article>`;
}

function animateCards(){
  if(typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined'){
    gsap.registerPlugin(ScrollTrigger);
    const cards=document.querySelectorAll('.item-card');
    cards.forEach((c,i)=>{
      gsap.fromTo(c,
        {opacity:0,y:28,scale:.97},
        {opacity:1,y:0,scale:1,duration:.7,delay:(i%6)*.06,ease:'power3.out',
         scrollTrigger:{trigger:c,start:'top 90%',once:true}});
    });
  } else {
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='none';io.unobserve(e.target);}});
    },{threshold:.08});
    document.querySelectorAll('.item-card').forEach((c,i)=>{
      c.style.opacity='0';c.style.transform='translateY(24px)';
      c.style.transition=`opacity .5s ${(i%6)*.05}s,transform .5s ${(i%6)*.05}s cubic-bezier(.16,1,.3,1)`;
      io.observe(c);
    });
  }
}

function scrollToCat(idx){
  const el=document.getElementById('cat-'+idx);if(!el)return;
  const target=el.getBoundingClientRect().top+window.scrollY-130;
  if(window._lenis)window._lenis.scrollTo(target,{duration:1.4});
  else window.scrollTo({top:target,behavior:'smooth'});
  setActiveBtn(idx);
}
function setActiveBtn(idx){document.querySelectorAll('.cat-btn').forEach((b,i)=>b.classList.toggle('active',i===idx));}

(function(){
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const idx=parseInt(e.target.id.replace('cat-',''));if(!isNaN(idx))setActiveBtn(idx);}});},{rootMargin:'-35% 0px -60% 0px'});
  setTimeout(()=>{document.querySelectorAll('.cat-section').forEach(s=>io.observe(s));},600);
})();

(function(){
  const inp=document.getElementById('search-inp');
  const clr=document.getElementById('search-clear');
  inp.addEventListener('input',()=>{
    const q=inp.value.trim();clr.style.display=q?'block':'none';
    if(!q){filtered=allData;render(allData);return;}
    const ql=q.toLowerCase();
    filtered=allData.map(cat=>({...cat,items:cat.items.filter(it=>it.name_fa.includes(q)||(it.name_en||'').toLowerCase().includes(ql)||(it.description||'').includes(q))})).filter(c=>c.items.length);
    render(filtered);
  });
  clr.addEventListener('click',()=>{inp.value='';clr.style.display='none';filtered=allData;render(allData);inp.focus();});
})();

function openModal(item,catName){
  const modal=document.getElementById('modal');
  const seed=(item.name_en||item.name_fa||'food').replace(/\s+/g,'-').toLowerCase();
  document.getElementById('m-img').src=item.image_url||`https://picsum.photos/seed/${seed}-cb/500/280`;
  document.getElementById('m-cat').innerHTML=`<span class="lbl-dot" style="width:5px;height:5px;border-radius:50%;background:var(--gold);flex-shrink:0"></span>${catName||''}`;
  document.getElementById('m-fa').textContent=item.name_fa||'';
  document.getElementById('m-en').textContent=item.name_en||'';
  document.getElementById('m-desc').textContent=item.description||'—';
  document.getElementById('m-price').textContent=parseInt(item.price||0).toLocaleString('fa-IR')+' هزار تومان';
  document.getElementById('m-badges').innerHTML=(item.is_new?'<span class="bdg bdg-new">جدید</span>':'')+(item.is_special?'<span class="bdg bdg-sp">ویژه</span>':'');
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
document.getElementById('modal-ov').onclick=closeModal;
document.getElementById('modal-close').onclick=closeModal;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
function closeModal(){document.getElementById('modal').classList.remove('open');document.getElementById('modal').setAttribute('aria-hidden','true');document.body.style.overflow='';}

const btt=document.getElementById('btt');
window.addEventListener('scroll',()=>btt.classList.toggle('show',window.scrollY>400),{passive:true});
btt.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

document.addEventListener('DOMContentLoaded',()=>{
  fetchMenu();

  // Lenis smooth scroll
  if(typeof Lenis!=='undefined'){
    const lenis=new Lenis({duration:1.3,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothTouch:false});
    if(typeof gsap!=='undefined'){
      gsap.ticker.add(t=>lenis.raf(t*1000));
      gsap.ticker.lagSmoothing(0);
    }else{
      (function raf(t){lenis.raf(t);requestAnimationFrame(raf);})(performance.now());
    }
    window._lenis=lenis;
  }

  // Hero content entrance
  if(typeof gsap!=='undefined'){
    gsap.from('.mh-lbl',{opacity:0,y:20,duration:.8,ease:'power3.out',delay:.15});
    gsap.from('.mh-title',{opacity:0,y:40,duration:1,ease:'power4.out',delay:.3});
    gsap.from('.mh-sub',{opacity:0,y:20,duration:.8,ease:'power3.out',delay:.55});
  }

  // Navbar hide/show on scroll
  const nav=document.getElementById('nav');
  let lastY=0;
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    if(y>lastY+8&&y>140){nav.style.transform='translateY(-100%)';document.body.classList.add('nav-up');}
    else if(y<lastY-8){nav.style.transform='translateY(0)';document.body.classList.remove('nav-up');}
    lastY=y;
  },{passive:true});
});
