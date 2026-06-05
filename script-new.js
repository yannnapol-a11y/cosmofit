const uiTranslations = {
    en: {
        systemOnline: "SYSTEM: ONLINE",
        missionText: "Mission Objective: Sync your body with the life support systems. Hydrate and build physical endurance to navigate the Ark to a New Home.",
        pageTitle: "Space Ark: Survival",
        pageDescription: "Space Ark: Survival is an interactive browser-based space adventure game that encourages hydration, exercise, and daily mission progress through a futuristic sci-fi storyline.",
        resetBtn: "🔄 Reset",
        hudWater: "Water",
        hudEnergy: "Thrusters",
        resetConfirm: "Are you sure you want to reset all data and start a new mission?",
        days: { intro: "Intro", day1: "Day 01", day2: "Day 02", day3: "Day 03", day4: "Day 04", day5: "Day 05", day6: "Day 06", day7: "Day 07", final: "FINAL" },
        footerThanks: "Made with love. Special thanks to my wonderful husband, two amazing daughters, Gemini, and Copilot. Without all of you, this journey would not have been possible. 🚀✨",
        confirmProtocol: "CONFIRM PROTOCOL",
        interactiveTitleTasks: "DAILY SYNCHRONIZATION TASKS",
        interactiveTitleWorkout: "PHYSICAL WORKOUT OVERDRIVE",
        interactiveRepsLabel: "Enter completed repetitions:",
        interactiveSubmitBtn: "SUBMIT LOG DATA",
        interactiveNextDayBtn: "SYNCHRONIZATION OK. JUMP TO NEXT DAY",
        victoryTitle: "MISSION EXODUS: SUCCESSFUL",
        victoryMessage: "You have successfully guided humanity into a new era.",
        victoryLog: "FINAL BIOMETRIC LOG",
        victoryWater: "💧 Water purified",
        victoryWorkout: "🏋️ Total physical load",
        victoryNewMission: "🔄 START A NEW MISSION"
    },
    ru: {
        systemOnline: "СИСТЕМА: ОНЛАЙН",
        missionText: "Цель миссии: Синхронизировать тело с системами жизнеобеспечения. Пейте воду и тренируйте выносливость, чтобы привести Ковчег к Новому Дому.",
        pageTitle: "Space Ark: Survival — космическое приключение",
        pageDescription: "Space Ark: Survival — браузерная интерактивная игра в жанре sci-fi, которая сочетает сюжет, гидратацию и физические задания для ежедневного прогресса.",
        resetBtn: "🔄 Сброс",
        hudWater: "Вода",
        hudEnergy: "Двигатели",
        resetConfirm: "Вы уверены, что хотите сбросить все данные и начать новую миссию?",
        days: { intro: "Интро", day1: "День 01", day2: "День 02", day3: "День 03", day4: "День 04", day5: "День 05", day6: "День 06", day7: "День 07", final: "ФИНАЛ" },
        footerThanks: "Сделано с любовью. Особая благодарность моему замечательному мужу, двум прекрасным дочерям, Gemini и Copilot. Без вас всех это путешествие не было бы возможным. 🚀✨",
        confirmProtocol: "ПОДТВЕРДИТЬ ПРОТОКОЛ",
        interactiveTitleTasks: "ЕЖЕДНЕВНЫЕ ЗАДАЧИ СИНХРОНИЗАЦИИ",
        interactiveTitleWorkout: "ФИЗИЧЕСКАЯ НАГРУЗКА ФОРСАЖ",
        interactiveRepsLabel: "Введите выполненные повторения:",
        interactiveSubmitBtn: "ОТПРАВИТЬ ДАННЫЕ ЛОГА",
        interactiveNextDayBtn: "СИНХРОНИЗАЦИЯ УСПЕШНА. ПЕРЕЙТИ К СЛЕДУЮЩЕМУ ДНЮ",
        victoryTitle: "МИССИЯ ИСХОД: УСПЕШНО",
        victoryMessage: "Вы успешно провели человечество в новую эру.",
        victoryLog: "ФИНАЛЬНЫЙ БИОМЕТРИЧЕСКИЙ ЖУРНАЛ",
        victoryWater: "💧 Воды выпито",
        victoryWorkout: "🏋️ Общая нагрузка",
        victoryNewMission: "🔄 НАЧАТЬ НОВУЮ МИССИЮ"
    },
    sr: {
        systemOnline: "SISTEM: ONLAJN",
        missionText: "Cilj misije: Sinhronizujte telo sa sistemima za održavanje života. Pijte vodu i razvijajte izdržljivost da biste doveli Barku do Novog Doma.",
        pageTitle: "Space Ark: Survival — svemirska misija",
        pageDescription: "Space Ark: Survival je interaktivna veb igra koja kombinuje naučnu fantastiku, hidrataciju i vežbe za motivaciju kroz dnevne misije.",
        resetBtn: "🔄 Reset",
        hudWater: "Voda",
        hudEnergy: "Potisnici",
        resetConfirm: "Da li ste sigurni da želite da resetujete sve podatke i započnete novu misiju?",
        days: { intro: "Uvod", day1: "Dan 01", day2: "Dan 02", day3: "Dan 03", day4: "Dan 04", day5: "Dan 05", day6: "Dan 06", day7: "Dan 07", final: "KRAJ" },
        footerThanks: "Napravljeno sa ljubavlju. Posebno hvala mom divnom mužu, dvema neverovatnim ćerkama, Gemini-ju i Copilotu. Bez vas svih ovo putovanje ne bi bilo moguće. 🚀✨",
        confirmProtocol: "POTVRDI PROTOKOL",
        interactiveTitleTasks: "DNEVNI ZADACI SINHRONIZACIJE",
        interactiveTitleWorkout: "FIZIČKI TRENING FORSAŽ",
        interactiveRepsLabel: "Unesite završena ponavljanja:",
        interactiveSubmitBtn: "POŠALJI PODATKE LOGA",
        interactiveNextDayBtn: "SINHRONIZACIJA USPEŠNA. PREĐI NA SLEDEĆI DAN",
        victoryTitle: "MISIJA EGZODUS: USPEŠNA",
        victoryMessage: "Uspesno ste poveli čovečanstvo u novu eru.",
        victoryLog: "FINALNI BIOMETRIJSKI LOG",
        victoryWater: "💧 Vode popijeno",
        victoryWorkout: "🏋️ Ukupno opterećenje",
        victoryNewMission: "🔄 ZAPOČNI NOVU MISIJU"
    }
};

const storyData = {
    // INTRO
    intro: {
        type: "text-only",
        steps: {
            en: [
                "Earth was extinguished in a matter of hours. Humanity burned everything: reactors, power grids, cities. A nuclear winter enveloped our home world.",
                "You are the last survivors. A man and a woman. You managed to leap into the ark's airlock just a second before the atmosphere turned to ash.",
                "The vessel is hurtling through the freezing void of space in search of a New Home. But the cosmos is ruthless. Drop your hands, submit to stress, weaken in zero gravity—and humanity vanishes forever.",
                "Commander, your body and mind are the final biological sanctuary for our species. Self-care is your absolute duty. Welcome on board."
            ],
            ru: [
                "Земля угасла за считанные часы. Человечество сожгло всё: реакторы, энергосети, города. Ядерная зима окутала наш родной мир.",
                "Вы — последние выжившие. Мужчина и женщина. Вы успели запрыгнуть в шлюз Ковчега всего за секунду до того, как атмосфера превратилась в пепел.",
                "Корабль мчится сквозь ледяную пустоту космоса в поисках Нового Дома. Но космос безжалостен. Стоит опустить руки, поддаться стрессу, ослабнуть в невесомости — и человечество исчезнет навсегда.",
                "Командир, ваше тело и разум — последнее биологическое убежище для нашего вида. Забота о себе — ваш абсолютный долг. Добро пожаловать на борт."
            ],
            sr: [
                "Zemlja je ugašena za nekoliko sati. Čovečanstvo je spalilo sve: reaktore, energetske mreže, gradove. Nuklearna zima je obavila naš rodni svet.",
                "Vi ste poslednji preživeli. Muškarac i žena. Uspeli ste da uskočite u vazdušnu komoru Barke samo sekundu pre nego što se atmosfera pretvorila u pepeo.",
                "Brod juri kroz ledenu prazninu svemira u potrazi za Novim Domom. Ali kosmos je nemilosrdan. Ako spustite ruke, prepustite se stresu, oslabite u beztežinskom stanju — čovečanstvo će nestati zauvek.",
                "Komandante, vaše telo i um su poslednje biološko utočište za našu vrstu. Briga o sebi je vaša apsolutna dužnost. Dobrodošli na brod."
            ]
        },
        btnTexts: {
            en: ["CONNECT TO SYSTEMS", "SCAN SECTOR", "ASSESS THREAT", "START SYSTEMS CALIBRATION"],
            ru: ["ПОДКЛЮЧИТЬСЯ К СИСТЕМАМ", "СКАНИРОВАТЬ СЕКТОР", "ОЦЕНИТЬ УГРОЗУ", "ЗАПУСТИТЬ КАЛИБРОВКУ СИСТЕМ"],
            sr: ["POVEŽI SE NA SISTEME", "SKENIRAJ SEKTOR", "PROCENI PRETNJU", "ZAPOČNI KALIBRACIJU SISTEMA"]
        },
        nextKey: "day1"
    },

    // DAY 1 (ВОЗВРАЩЕН И ИСПРАВЛЕН)
    day1: {
        type: "interactive-day",
        title: {
            en: "DAY 1: STABILIZING LIFE SUPPORT",
            ru: "ДЕНЬ 1: СТАБИЛИЗАЦИЯ ЖИЗНЕОБЕСПЕЧЕНИЯ",
            sr: "DAN 1: STABILIZACIJA ODRŽAVANJA ŽIVOTA"
        },
        introText: {
            en: "AI ORION's Voice: 'Commander, do you read me? This is ORION, your on-board AI. My systems are nominal, but your pulse and the vessel's hydraulics are redlined. We won't make it unless we synchronize your biology with the life support systems right now. Initiating protocol.'",
            ru: "Голос ИИ ОРИОН: 'Командир, вы слышите меня? Это ОРИОН, ваш бортовой ИИ. Мои системы работают штатно, но ваш пульс и гидравлика корабля — на пределе. Мы не долетим, если прямо сейчас не синхронизируем вашу биологию с комплексами жизнеобеспечения. Начинаю protocol.'",
            sr: "Glas AI ORION-a: 'Komandante, da li me čujete? Ovde ORION, vaš brodski AI. Moji sistemi rade normalno, ali vaš puls i hidraulika broda su na samoj granici. Nećemo stići ako iste sekunde ne sinhronizujemo vašu biologiju sa sistemima za održavanje života. Pokrećem protokol.'"
        },
        tasks: {
            en: [{ id: "water_d1", text: "💧 Hydration (Reactor Cooling): Drink 300 ml of pure water to manually engage the emergency stabilization valve.", juice: "✅ Hydration logic synced. The main cooling circuit pressure is rising!" }],
            ru: [{ id: "water_d1", text: "💧 Гидратация (Охлаждение реактора): Выпейте 300 мл чистой воды, чтобы вручную задействовать клапан аварийной стабилизации.", juice: "✅ Логика гидратации синхронизирована. Давление в основном контуре охлаждения растет!" }],
            sr: [{ id: "water_d1", text: "💧 Hidratacija (Hlađenje reaktora): Popijte 300 ml čiste vode da biste ručno pokrenuli ventil za hitnu stabilizaciju.", juice: "✅ Logika hidratacije je sinhronizovana. Pritisak u glavnom krugu hlađenja raste!" }]
        },
        workoutText: {
            en: "🏋️ WORKOUT: CYLINDER PRESSURE PUMPING<br><br>AI ORION: 'The vessel's landing gear cylinders have sagged under extreme pressure. If we try to land like this, we'll turn into cosmic scrap metal! Use a chair for support and do squats to actuate the manual hydraulic pumps. Enter your reps, and I will compute the generated power.'",
            ru: "🏋️ ТРЕНИРОВКА: ПРОКАЧКА ДАВЛЕНИЯ В ЦИЛИНДРАХ<br><br>ИИ ОРИОН: 'Цилиндры шасси корабля просели под экстремальным давлением. Если мы попробуем сесть в таком состоянии, то превратимся в космический металлолом! Используйте стул для опоры и делайте приседания, чтобы запустить ручные гидравлические насосы. Введите количество повторений, и я рассчитаю выработанную энергию.'",
            sr: "🏋️ TRENING: PUMPANJE PRITISKA U CILINDRIMA<br><br>AI ORION: 'Cilindri stajnog trapa broda su popustili pod ekstremnim pritiskom. Ako pokušamo da sletimo ovako, pretvorićemo se u kosmičko staro gvožđe! Koristite stolicu kao oslonac i radite čučnjeve kako biste pokrenuli ručne hidraulične pumpe. Unesite broj ponavljanja i ja ću izračunati generisanu energiju.'"
        },
        calcResult: function(count, lang = 'en') {
            const messages = {
                en: {
                    error: "Error: Pressure pumps not activated. The vessel requires energy!",
                    modes: [
                        `🟢 MODE: INITIAL IMPULSE (${count} squats)<br><br>AI ORION: 'Impulse recorded! The cylinders have cleared emergency lockouts. Pressure is minimal, maneuvers are restricted, but the main thing—we are no longer falling! The vessel is stabilized. For your first day, this is a triumph. Rest now!'`,
                        `🔵 MODE: NOMINAL FLIGHT (${count} squats)<br><br>AI ORION: 'Outstanding work! System pressure rose to a nominal 120 GPa. The ship has leveled its course and is cruising safely through the sector. Your body is adapting beautifully!'`,
                        `🔥 MODE: SUPERCHARGED BREAKTHROUGH (${count} squats)<br><br>AI ORION: 'Incredible! You activated the hidden auxiliary boosters! We tore through an asteroid belt at full throttle and harvested 50 units of rare stellar resources. Your crewmate is ecstatic!'`
                    ]
                },
                ru: {
                    error: "Ошибка: Гидравлические насосы не активированы. Кораблю требуется энергия!",
                    modes: [
                        `🟢 РЕЖИМ: НАЧАЛЬНЫЙ ИМПУЛЬС (${count} приседаний)<br><br>ИИ ОРИОН: 'Импульс зафиксирован! Цилиндры вышли из аварийной блокировки. Давление минимальное, маневры ограничены, но главное — мы больше не падаем! Корабль стабилизирован. Для первого дня это триумф. А теперь отдыхайте!'`,
                        `🔵 РЕЖИМ: ШТАТНЫЙ ПОЛЕТ (${count} приседаний)<br><br>ИИ ОРИОН: 'Великолепная работа! Давление в системе поднялось до номинальных 120 ГПа. Корабль выровнял курс и уверенно идет по сектору. Ваше тело потрясающе адаптируется!'`,
                        `🔥 РЕЖИМ: ФОРСИРОВАННЫЙ ПРОРЫВ (${count} приседаний)<br><br>ИИ ОРИОН: 'Невероятно! Вы активировали скрытые вспомогательные ускорители! Мы на полной скорости промчались сквозь астероидный пояс и добыли 50 единиц редких звездных ресурсов. Ваш напарник в полном восторге!'`
                    ]
                },
                sr: {
                    error: "Greška: Hidraulične pumpe nisu aktivirane. Brodu je potrebna energija!",
                    modes: [
                        `🟢 REŽIM: POČETNI IMPULS (${count} čučnjeva)<br><br>AI ORION: 'Impuls je zabeležen! Cilindri su izašli iz vanredne blokade. Pritisak je minimalan, manevri su ograničeni, ali glavno je — više ne padamo! Brod je stabilizovan. Za prvi dan, ovo je trijumf. Sada se odmorite!'`,
                        `🔵 REŽIM: NOMINALNI LET (${count} čučnjeva)<br><br>AI ORION: 'Izvanredan rad! Pritisak u sistemu je porastao na nominalnih 120 GPa. Brod je poravnao kurs i bezbedno krstari sektorom. Vaše telo se divno prilagođava!'`,
                        `🔥 REŽIM: FORSIRANI PROBOJ (${count} čučnjeva)<br><br>AI ORION: 'Neverovatno! Aktivirali ste skrivene pomoćne potisnike! Punim gasom smo proleteli kroz asteroidni pojas i sakupili 50 jedinica retkih zvezdanih resursa. Vaš član posade je presrećan!'`
                    ]
                }
            };
            const currentLang = messages[lang] ? lang : 'en';
            if (count < 1) return messages[currentLang].error;
            if (count >= 1 && count < 30) return messages[currentLang].modes[0];
            if (count >= 30 && count < 50) return messages[currentLang].modes[1];
            if (count >= 50) return messages[currentLang].modes[2];
        },
        nextKey: "day2"
    },

    // DAY 2
    day2: {
        type: "interactive-day",
        title: {
            en: "DAY 2: OPERATION 'CARGO EMERGENCY'",
            ru: "ДЕНЬ 2: ОПЕРАЦИЯ 'АВАРИЯ В ГРУЗОВОМ ОТСЕКЕ'",
            sr: "DAN 2: OPERACIJA 'HITAN SLUČAJ SA TERETOM'"
        },
        introText: {
            en: "AI ORION's Voice: 'No need to panic, but we have an emergency! The outer cargo hatch was torn open by yesterday's tremors. Decompression has begun in the emergency ration sector. If we do not seal the inner security bulkheads right now, our supplies will fly off into the void, leaving us as very thin, very dead skeletons!'",
            ru: "Голос ИИ ОРИОН: 'Без паники, но у нас чрезвычайная ситуация! Вчерашние толчки сорвали внешний грузовой люк. В секторе аварийных рационов началась декомпрессия. Если мы прямо сейчас не заблокируем внутренние переборки безопасности, наши припасы улетят в пустоту, а мы превратимся в очень худые и очень мертвые скелеты!'",
            sr: "Glas AI ORION-a: 'Bez panike, ali imamo hitan slučaj! Jučerašnji potresi su otkinuli spoljni teretni otvor. Dekompresija je počela u sektoru hitnih obroka. Ako istog trenutka ne zatvorimo unutrašnje sigurnosne pregrade, naše zalihe će odleteti u prazninu, a mi ćemo ostati samo kao veoma mršavi, veoma mrtvi kosturi!'"
        },
        tasks: {
            en: [{ id: "water_d2", text: "💧 Hydration (Hydraulic Circuits): Drink 300 ml of pure water to pressurize the bulkhead door lines.", juice: "✅ Pressure restored! The heavy security bulkheads have closed by one-third. The hiss of escaping air is fading." }],
            ru: [{ id: "water_d2", text: "💧 Гидратация (Гидравлические контуры): Выпейте 300 мл чистой воды, чтобы поднять давление в линиях гермозатвора.", juice: "✅ Давление восстановлено! Тяжелые переборки безопасности закрылись на треть. Свист уходящего воздуха затихает." }],
            sr: [{ id: "water_d2", text: "💧 Hidratacija (Hidraulični krugovi): Popijte 300 ml čiste vode da biste podigli pritisak u linijama sigurnosnih vrata.", juice: "✅ Pritisak je obnovljen! Teške sigurnosne pregrade su se zatvorile za jednu trećinu. Šištanje vazduha koji izlazi se stišava." }]
        },
        workoutText: {
            en: "🏋️ WORKOUT: MANUAL HATCH SEALING<br><br>AI ORION: 'The electrical actuator is fried. The only way to lock the bulkhead is to hold the emergency levers and literally push the massive steel plate away from you. Take a knee, place your hands wide. Each pushup represents one centimeter of sealing the heavy blast door!'",
            ru: "🏋️ ТРЕНИРОВКА: РУЧНАЯ ГЕРМЕТИЗАЦИЯ ЛЮКА<br><br>ИИ ОРИОН: 'Электропривод сгорел. Единственный способ запереть переборку — взяться за аварийные рычаги и буквально отжать массивную стальную плиту от себя. Встаньте на колени, поставьте руки широко. Каждое отжимание — это еще один сантиметр закрытия тяжелой бронедвери!'",
            sr: "🏋️ TRENING: RUČNO ZAPTIVANJE OTVORA<br><br>AI ORION: 'Električni pogon je pregoreo. Jedini način da zaključamo pregradu je da uhvatimo poluge za hitne slučajeve i bukvalno odgurnemo masivnu čeličanu ploču od sebe. Spustite se na kolena, raširite ruke. Svaki sklek predstavlja jedan centimetar zatvaranja teških oklopnih vrata!'"
        },
        calcResult: function(count, lang = 'en') {
            const messages = {
                en: {
                    error: "Error: Bulkhead open. Vacuum is draining our supplies!",
                    modes: [
                        `🟢 MODE: LOCKED AND SECURED (${count} pushups)<br><br>AI ORION: 'Whew, Commander, that was close! You managed to lock the bulkhead. Yes, a few packs of space cookies floated away into the dark (our tax to the cosmic ghosts), but the main food vault is saved! ORION is proud of you!'`,
                        `🔵 MODE: FULL SEALING (${count} pushups)<br><br>AI ORION: 'Perfection, Commander! The heavy steel lock clicked into place. Air leak: 0%. Every single seed and ration has been saved. The onboard synthesizer is dispensing a bonus vitamin syrup!'`,
                        `🔥 MODE: HEROIC INTERCEPT (${count} pushups)<br><br>AI ORION: 'Fantastic! You slammed the bulkhead shut with such force that the pressure backflow sucked a derelict satellite fragment into the airlock! Acquired 30 units of titanium alloy plating. The crew looks at you like a superhero!'`
                    ]
                },
                ru: {
                    error: "Ошибка: Переборка открыта. Вакуум забирает наши припасы!",
                    modes: [
                        `🟢 РЕЖИМ: БЛОКИРОВКА И ЗАЩИТА (${count} отжиманий)<br><br>ИИ ОРИОН: 'Ух, Командир, это было близко! Вам удалось запереть переборку. Да, пара пачек космического печенья улетела в темноту (наш налог космическим призракам), но главное хранилище продуктов спасено! ОРИОН гордится вами!'`,
                        `🔵 РЕЖИМ: ПОЛНАЯ ГЕРМЕТИЗАЦИЯ (${count} отжиманий)<br><br>ИИ ОРИОН: 'Идеально, Командир! Тяжелый стальной замок защелкнулся. Утечка воздуха: 0%. Каждое зернышко и рацион спасены. Бортовой синтезатор выдает вам бонусный витаминный сироп!'`,
                        `🔥 РЕЖИМ: ГЕРОИЧЕСКИЙ ПЕРЕХВАТ (${count} отжиманий)<br><br>ИИ ОРИОН: 'Фантастика! Вы захлопнули переборку с такой силой, что обратный поток давления затянул обломок заброшенного спутника прямо в шлюз! Получено 30 единиц титановой обшивки. Команда смотрит на вас как на супергероя!'`
                    ]
                },
                sr: {
                    error: "Greška: Pregrada je otvorena. Vakum nam odnosi zalihe!",
                    modes: [
                        `🟢 REŽIM: ZAKLJUČANO I OSIGURANO (${count} skleka)<br><br>AI ORION: 'Uh, Komandante, ovo je bilo blizu! Uspešno ste zaključali pregradu. Da, nekoliko pakovanja kosmičkog keksa je odletelo u mrak (naš porez kosmičkim duhovima), ali glavni sef sa hranom je spasen! ORION je ponosan na Vas!'`,
                        `🔵 REŽIM: POTPUNO ZAPTIVANJE (${count} skleka)<br><br>AI ORION: 'Savršeno, Komandante! Teška čelična brava je škljocnula na svoje mesto. Curenje vazduha: 0%. Svako seme i obrok su sačuvani. Brodski sintetizator vam dodeljuje bonus vitaminski sirup!'`,
                        `🔥 REŽIM: HEROJSKO PRESRETANJE (${count} skleka)<br><br>AI ORION: 'Fantastično! Zalupili ste pregradu takvom silinom da je povratni pritisak usisao fragment napuštenog satelita pravo u vazdušnu komoru! Dobijeno je 30 jedinica titanijumske oklopne ploče. Posada gleda u Vas kao u superheroja!'`
                    ]
                }
            };
            const currentLang = messages[lang] ? lang : 'en';
            if (count < 1) return messages[currentLang].error;
            if (count >= 1 && count < 15) return messages[currentLang].modes[0];
            if (count >= 15 && count < 30) return messages[currentLang].modes[1];
            if (count >= 30) return messages[currentLang].modes[2];
        },
        nextKey: "day3"
    },

    // DAY 3 (MINI-BOSS)
    day3: {
        type: "interactive-day",
        title: {
            en: "🚨 DAY 3: THE GRAVITATIONAL SIREN (MINI-BOSS)",
            ru: "🚨 ДЕНЬ 3: ГРАВИТАЦИОННАЯ СИРЕНА (МИНИ-БОСС)",
            sr: "🚨 DAN 3: GRAVITACIONA SIRENA (MINI-BOSS)"
        },
        introText: {
            en: "AI ORION's Voice: '🚨 CRITICAL ALERT! We are being dragged toward a massive, dark spherical anomaly. Its gravitational pull is abnormal. Worse yet, your crewmate has fallen under its hypnotic acoustic field, is grinning blankly at the viewport, and has locked the main steering column! Break the trance, raise your mental shields, and steer the ship away from death!'",
            ru: "Голос ИИ ОРИОН: '🚨 КРИТИЧЕСКАЯ УГРОЗА! Нас затягивает в массивную темную сферическую аномалию. Её гравитационное притяжение аномально велико. Хуже того, ваш напарник попал под действие её гипнотического акустического поля: он бессмысленно улыбается, глядя в иллюминатор, и заблокировал главную рулевую колонку! Разбейте транс, поднимите ментальные щиты и уведите корабль от гибели!'",
            sr: "Glas AI ORION-a: '🚨 KRITIČNO UPOZORENJE! Uvučeni smo prema masivnoj, tamnoj sfernoj anomaliji. Njeno gravitaciono privlačenje je abnormalno. Što je još gore, vaš član posade je pao pod njeno hipnotičko akustično polje, odsutno se smeška gledajući kroz iluzor, i zaključao je glavnu upravljačku kolonu! Prekinite trans, podignite mentalne štitove i odvedite brod dalje od smrti!'"
        },
        tasks: {
            en: [{ id: "water_d3", text: "💧 Hydration (Antidote Sync): Drink 300 ml of pure water to stay alert and shield your brain receptors from the sonic frequencies.", juice: "✅ Fluid balance optimal! Brain cellular structure reinforced against hypnosis." }],
            ru: [{ id: "water_d3", text: "💧 Гидратация (Синхронизация антидота): Выпейте 300 мл чистой воды, чтобы сохранить бдительность и защитить рецепторы мозга от звуковых частот.", juice: "✅ Водный баланс оптимален! Клеточная структура мозга защищена от гипноза." }],
            sr: [{ id: "water_d3", text: "💧 Hidratacija (Sinhronizacija antidota): Popijte 300 ml čiste vode da ostanete budni i zaštitite receptore mozga od zvučnih frekvencija.", juice: "✅ Bilans tečnosti je optimalan! Ćelijska struktura mozga je zaštićena od hipnoze." }]
        },
        workoutText: {
            en: "🏋️ MAIN MISSION: CORE REACTION CRUNCHES<br><br>AI ORION: 'We are slipping into the siren's gravitational well! Our only escape is to fire the lower impulse thrusters for a violent course correction. Lie on your back, brace your hands, lift your legs, and drive your pelvis to your chest! Blast the ship upward!'",
            ru: "🏋️ ГЛАВНАЯ МИССИЯ: СКРУЧИВАНИЯ НА ПРЕСС 'РЕАКЦИЯ ЯДРА'<br><br>ИИ ОРИОН: 'Мы сползаем в гравитационный колодец сирены! Наш единственный шанс спастись — запустить нижние импульсные двигатели для резкого изменения курса. Лягте на спину, упритесь руками, поднимите ноги и подтяните таз к груди! Вытолкните корабль вверх!'",
            sr: "🏋️ GLAVNA MISIJA: TRBUŠNJACI ZA REAKCIJU JEZGRA<br><br>AI ORION: 'Klizimo u gravitacioni bunar sirene! Naš jedini spas je da aktiviramo donje impulsne potisnike za oštru korekciju kursa. Legnite na leđa, oslonite se rukama, podignite noge i privucite karlicu grudima! Lansirajte brod nagore!'"
        },
        calcResult: function(count, lang = 'en') {
            const messages = {
                en: {
                    error: "Error: Flight axis skewed. The ship is being sucked into the siren's gravitational singularity!",
                    modes: [
                        `🟢 MODE: SAFE ORBIT ESCAPE (${count} crunches)<br><br>AI ORION: 'We have contact! The lower engines flared! The pull has subsided, and we've stabilized in a circular orbit. Your crewmate snapped out of it, blinking and asking why there's a taste of copper in their mouth. You saved us, Commander! Your core is strong.'`,
                        `🔵 MODE: TRAJECTORY SNAP-BACK (${count} crunches)<br><br>AI ORION: 'Superb maneuver, Commander! We slingshotted around the dark object at immense speed and broke free into deep space! Your crewmate is wide awake, horrified by what they did, and has promised to clean the space galley for a week. Boss defeated!'`,
                        `🔥 MODE: COUNTER-ORBITAL HARVEST (${count} crunches)<br><br>AI ORION: 'This is legendary! Your physical impulse catapulted us away so hard that as we flew past the anomaly, we snatched an ancient shipwreck fragment from its orbit! Gained 50 units of Dark Matter and a rare shield blueprint!'`
                    ]
                },
                ru: {
                    error: "Ошибка: Ось полета искривлена. Корабль затягивает в гравитационную сингулярность сирены!",
                    modes: [
                        `🟢 РЕЖИМ: ВЫХОД НА БЕЗОПАСНУЮ ОРБИТУ (${count} скручиваний)<br><br>ИИ ОРИОН: 'Есть контакт! Нижние двигатели вспыхнули! Тяга ослабла, и мы стабилизировались на круговой орбите. Ваш напарник пришел в себя, моргает и спрашивает, почему во рту привкус меди. Вы спасли нас, Командир! У вас мощные мышцы кора.'`,
                        `🔵 РЕЖИМ: ТРАЕКТОРНЫЙ ОТСКОК (${count} скручиваний)<br><br>ИИ ОРИОН: 'Великолепный маневр, Командир! Мы совершили гравитационный маневр вокруг темного объекта на огромной скорости и вырвались в открытый космос! Напарник окончательно очнулся, в ужасе от того, что натворил, и пообещал неделю драить космический камбуз. Босс побежден!'`,
                        `🔥 РЕЖИМ: ОКОЛООРБИТАЛЬНЫЙ СБОР (${count} скручиваний)<br><br>ИИ ОРИОН: 'Это легендарно! Ваш физический импульс отбросил нас с такой силой, что, пролетая мимо аномалии, мы вырвали с её орбиты обломок древнего звездолета! Получено 50 единиц Темной Материи и редкий чертеж силового щита!'`
                    ]
                },
                sr: {
                    error: "Greška: Osa leta je iskrivljena. Brod uvlači u gravitacioni singulariet sirene!",
                    modes: [
                        `🟢 REŽIM: BEZBEDAN IZLAZAK NA ORBITU (${count} trbušnjaka)<br><br>AI ORION: 'Imamo kontakt! Donji motori su se upalili! Privlačenje je oslabilo i stabilizovali smo se u kružnoj orbiti. Vaš član posade se osvestio, trepće i pita zašto oseća ukus bakra u ustima. Spasili ste nas, Komandante! Vaše jezgro je snažno.'`,
                        `🔵 REŽIM: TRAJEKTORNI ODRAZ (${count} trbušnjaka)<br><br>AI ORION: 'Vrhunski manevar, Komandante! Izveli smo gravitacionu praćku oko tamnog objekta ogromnom brzinom i probili se u duboki svemir! Član posade je potpuno budan, užasnut onim što je uradio, i obećao je da će čistiti kosmičku kuhinju nedelju dana. Bos je pobeđen!'`,
                        `🔥 REŽIM: ORBITALNA ŽETVA (${count} trbušnjaka)<br><br>AI ORION: 'Ovo je legendarno! Vaš fizički impuls nas je katapultirao tako snažno da smo, proletevši pored anomalije, ugrabili fragment prastarog brodoloma iz njene orbite! Dobijeno je 50 jedinica Tamne Materije i redak nacrt za štit!'`
                    ]
                }
            };
            const currentLang = messages[lang] ? lang : 'en';
            if (count < 1) return messages[currentLang].error;
            if (count >= 1 && count < 20) return messages[currentLang].modes[0];
            if (count >= 20 && count < 40) return messages[currentLang].modes[1];
            if (count >= 40) return messages[currentLang].modes[2];
        },
        nextKey: "day4"
    },

    // DAY 4
    day4: {
        type: "interactive-day",
        title: {
            en: "🛸 DAY 4: VOID HUNTERS",
            ru: "🛸 ДЕНЬ 4: ОХОТНИКИ ПУСТОТЫ",
            sr: "🛸 DAN 4: LOVCI NA PRAZNINU"
        },
        introText: {
            en: "AI ORION's Voice: '🚨 Emergency sirens are blaring! Our hull has grazed a drifting space buoy. The botanical greenhouse has been breached, and Void Hunters—energy-leeching organisms—have flooded the reactor bay! Your crewmate is trying to seal the blast door, but they are attacking from the shadows. Protect our home!'",
            ru: "Голос ИИ ОРИОН: '🚨 Сирены тревоги разрываются! Наш корпус задел дрейфующий космический буй. Ботаническая оранжерея пробита, и Охотники Пустоты — организмы, пожирающие энергию — хлынули в реакторный отсек! Ваш напарник пытается заблокировать бронедверь, но они атакуют из теней. Защитите наш дом!'",
            sr: "Glas AI ORION-a: '🚨 Sirene za hitne slučajeve zavijaju! Naš trup je zakačio plutajuću svemirsku bova. Botanička staklena bašta je probijena, i Lovci na prazninu — organizmi koji crpe energiju — preplavili su reaktorski zaliv! Vaš član posade pokušava da zatvori oklopna vrata, ali oni napadaju iz senke. Zaštitite naš dom!'"
        },
        tasks: {
            en: [{ id: "water_d4", text: "💧 Hydration (Panic Hormone Flush): Drink a large glass of pure water to wash out the adrenaline shock and trigger deep cellular filtering.", juice: "✅ Internal equilibrium restored. Muscle tissues receive the vital hydration needed for quick regeneration." }],
            ru: [{ id: "water_d4", text: "💧 Пополнение влаги (Вывод гормонов паники): Выпейте большой стакан чистой воды, чтобы смыть адреналиновый шок и запустить глубокую клеточную фильтрацию.", juice: "✅ Внутреннее равновесие восстановлено. Мышечные ткани получили жизненно важную влагу, необходимую для быстрой регенерации." }],
            sr: [{ id: "water_d4", text: "💧 Hidratacija (Ispiranje hormona panike): Popijte veliku čašu čiste vode da biste isprali adrenalinski šok i pokrenuli duboko ćelijsko filtriranje.", juice: "✅ Unutrašnja ravnoteža je uspostavljena. Mišićna tkiva dobijaju vitalnu hidrataciju potrebnu za brzu regeneraciju." }]
        },
        workoutText: {
            en: "🏋️ WORKOUT: ZERO-G DEFENSIVE KICKS<br><br>AI ORION: 'The deck is shaking, gravity is offline! Take a defensive stance, balance on one leg, and deliver powerful, rapid kicks forward to knock the beasts back into the vacuum. Count your strikes: we must clear both the left and right sectors!'",
            ru: "🏋️ ТРЕНИРОВКА: ЗАЩИТНЫЕ УДАРЫ В НЕВЕСОМОСТИ<br><br>ИИ ОРИОН: 'Палуба дрожит, гравитация отключена! Примите защитную стойку, удерживайте равновесие на одной ноге и наносите мощные, быстрые удары ногами вперед, чтобы выбросить тварей обратно в вакуум. Считайте удары: мы должны зачистить и левый, и правый сектора!'",
            sr: "🏋️ TRENING: ODBRAMBENI UDARCI U BEZTEŽINSKOM STANJU<br><br>AI ORION: 'Paluba se trese, gravitacija je isključena! Zauzmite odbrambeni stav, održavajte ravnotežu na jednoj nozi i zadajte snažne, brze udarce nogom unapred kako biste odbacili zveri nazad u vakuum. Brojte svoje udarce: moramo očistiti i levi i desni sektor!'"
        },
        calcResult: function(count, lang = 'en') {
            const messages = {
                en: {
                    error: "Error: Defense breached! The hunters are swarming the central reactor core!",
                    modes: [
                        `🟢 MODE: MINIMAL RESISTANCE (${count} kicks)<br><br>AI ORION: 'That was a brutal skirmish! We barely managed to repel them. The breach is sealed, but a few parasites chewed through the greenhouse power cables. Food rations are temporarily restricted, but you survived. Heal your wounds.'`,
                        `🔵 MODE: IMPENETRABLE LINE (${count} kicks)<br><br>AI ORION: 'Outstanding technique, Commander! Your kicks cracked their bio-armor while your crewmate welded the breaches shut. Not a single beast reached the core. The greenhouse is safe. Your partner looks at you with infinite respect!'`,
                        `🔥 MODE: EPIC SWEEP (${count} kicks)<br><br>AI ORION: 'This is the stuff of legends! You turned the reactor bay into a graveyard for those beasts. With a final strike, you crushed their pack leader and harvested its glowing bio-core! The labs have converted its raw energy to supercharge our thrusters!'`
                    ]
                },
                ru: {
                    error: "Ошибка: Оборона прорвана! Твари штурмуют центральную активную зону реактора!",
                    modes: [
                        `🟢 РЕЖИМ: МИНИМАЛЬНОЕ СОПРОТИВЛЕНИЕ (${count} ударов)<br><br>ИИ ОРИОН: 'Это была жестокая схватка! Нам едва удалось отбиться. Пробоина заделана, но несколько паразитов перегрызли силовые кабели оранжереи. Продовольственные пайки временно ограничены, но главное — вы выжили. Зализывайте раны.'`,
                        `🔵 РЕЖИМ: НЕПРИСТУПНЫЙ РУБЕЖ (${count} ударов)<br><br>ИИ ОРИОН: 'Выдающаяся техника, Командир! Ваши удары крушили их биодоспехи, пока напарник заваривал пробоины. Ни одна тварь не добралась до активной зоны. Оранжерея в безопасности. Ваш партнер смотрит на вас с бесконечным уважением!'`,
                        `🔥 РЕЖИМ: ГРАНДИОЗНАЯ ЗАЧИСТКА (${count} ударов)<br><br>ИИ ОРИОН: 'О таком слагают легенды! Вы превратили реакторный отсек в кладбище для этих монстров. Финальным ударом вы раздавили вожака стаи и извлекли его светящееся биоядро! Лаборатории уже преобразовали эту чистую энергию для форсирования наших двигателей!'`
                    ]
                },
                sr: {
                    error: "Greška: Odbrana je probijena! Zveri jurišaju na centralno jezgro reaktora!",
                    modes: [
                        `🟢 REŽIM: MINIMALNI OTPOR (${count} udaraca)<br><br>AI ORION: 'To je bila brutalna bitka! Jedva smo uspeli da ih odbijemo. Prodor je saniran, ali nekoliko parazita je pregrizlo energetske kablove staklene bašte. Obroci hrane su privremeno ograničeni, ali preživeli ste. Vidajte rane.'`,
                        `🔵 REŽIM: NEPROBOJNA LINIJA (${count} udaraca)<br><br>AI ORION: 'Izvanredna tehnika, Komandante! Vaši udarci su lomili njihov bio-oklop dok je vaš član posade zavarivao pukotine. Nijedna zver nije stigla do jezgra. Staklena bašta je bezbedna. Vaš partner vas gleda sa beskrajnim poštovanjem!'`,
                        `🔥 REŽIM: EPSKO ČIŠĆENJE (${count} udaraca)<br><br>AI ORION: 'O ovome se stvaraju legende! Pretvorili ste reaktorski zaliv u groblje za te zveri. Poslednjim udarcem ste smrskali vođu čopora i uzeli njegovo svetleće bio-jezgro! Laboratorije su već pretvorile tu čistu energiju da pojačaju naše potisnike!'`
                    ]
                }
            };
            const currentLang = messages[lang] ? lang : 'en';
            if (count < 1) return messages[currentLang].error;
            if (count >= 1 && count < 40) return messages[currentLang].modes[0];
            if (count >= 40 && count < 80) return messages[currentLang].modes[1];
            if (count >= 80) return messages[currentLang].modes[2];
        },
        nextKey: "day5"
    },

    // DAY 5
    day5: {
        type: "interactive-day",
        title: {
            en: "📡 DAY 5: SIGNAL THROUGH THE STATIC",
            ru: "📡 ДЕНЬ 5: СИГНАЛ СКВОЗЬ ПОМЕХИ",
            sr: "📡 DAN 5: SIGNAL KROZ SMETNJE"
        },
        introText: {
            en: "AI ORION's Voice: 'Commander, the void core energy gave us speed, but it fried our long-range communications array! We are blind and deaf in the radio ether. The only way to tune into the survivors' frequency is to manually calibrate the heavy antenna angle. This requires absolute physical posture. Let's establish contact!'",
            ru: "Голос ИИ ОРИОН: 'Командир, энергия ядра пустоты дала нам скорость, но сожгла нашу систему дальней связи! Мы слепы и глухи в радиоэфире. Единственный способ настроиться на частоту выживших — вручную откалибровать угол наклона тяжелой антенны. Это потребует безупречной выправки и физических усилий. Давайте установим контакт!'",
            sr: "Glas AI ORION-a: 'Komandante, energija jezgra praznine nam je dala brzinu, ali je spržila naš sistem veza dugog dometa! Slepi smo i gluvi u radio-etru. Jedini način da se uhvatimo frekvenciju preživelih jeste da ručno kalibrišemo ugao teške antene. Ovo zahteva apsolutno čvrsto fizičko držanje. Hajde da uspostavimo kontakt!'"
        },
        tasks: {
            en: [{ id: "water_d5", text: "💧 Hydration (Processor Cooling): Drink 300 ml of water. I need your body's moisture condensation to cool down the overheated transceivers.", juice: "✅ Radio module cooled! Board temperatures returned to safe limits, static interference on screens decreased by 20%." }],
            ru: [{ id: "water_d5", text: "💧 Гидратация (Охлаждение процессора): Выпейте 300 мл воды. Мне нужен конденсат влаги вашего тела, чтобы охладить перегретые приемопередатчики.", juice: "✅ Радиомодуль охлажден! Температура плат вернулась к безопасным значениям, статические помехи на экранах снизились на 20%." }],
            sr: [{ id: "water_d5", text: "💧 Hidratacija (Hlađenje procesora): Popijte 300 ml vode. Potrebna mi je kondenzacija vlage vašeg tela kako bih ohladio pregrejane primopredajnike.", juice: "✅ Radio modul je ohlađen! Temperature ploča su se vratile u bezbedne granice, statičke smetnje na ekranima su smanjene za 20%." }]
        },
        workoutText: {
            en: "🏋️ WORKOUT: SUPERMAN HOLD MAST CALIBRATION<br><br>AI ORION: 'The array's automatic motor is jammed. Lie face down on the deck, stretch your arms forward, and lift your limbs off the floor, holding at the peak. Your body must act as the antenna's structural mast. Each lift aligns our transmission beam closer to Alpha Centauri!'",
            ru: "🏋️ ТРЕНИРОВКА: КАЛИБРОВКА МАЧТЫ В УДЕРЖАНИИ 'СУПЕРМЕН'<br><br>ИИ ОРИОН: 'Автоматический привод антенной решетки заклинило. Лягте на палубу лицом вниз, вытяните руки вперед и оторвите конечности от пола, удерживая их в верхней точке. Ваше тело должно послужить несущей мачтой антенны. Каждый подъем приближает наш передающий луч к Альфе Центавра!'",
            sr: "🏋️ TRENING: KALIBRACIJA STUBA U 'SUPERMEN' IZDRŽAJU<br><br>AI ORION: 'Automatski motor antene je zaglavljen. Legnite licem prema dole na palubu, ispružite ruke napred i podignite ekstremitete od poda, držeći ih u najvišoj tački. Vaše telo mora delovati kao noseći stub antene. Svako podizanje usmerava naš prenosni snop bliže Alfi Kentauri!'"
        },
        calcResult: function(count, lang = 'en') {
            const messages = {
                en: {
                    error: "Error: Alignment lost. The vessel drifts in complete radio silence.",
                    modes: [
                        `🟢 MODE: WEAK CARRIER (${count} reps)<br><br>AI ORION: 'We have a signal! The mast rose. Through the crackle of static, a garbled audio feed is breaking through. We can't decode it yet, but one thing is certain: we are NOT ALONE in this void! Buffering initiated. Rest, Commander.'`,
                        `🔵 MODE: STABLE CARRIER (${count} reps)<br><br>AI ORION: 'Excellent calibration, flawless form! We have captured a clean digital packet. It's an automated beacon from a human colony near Alpha Centauri! Precise coordinates loaded into the nav-computer. We know the way!'`,
                        `🔥 MODE: HIGH-BANDWIDTH STREAM (${count} reps)<br><br>AI ORION: 'Incredible endurance! A true Superman on board. The array is fully extended and has captured a live log from the colonists! They have built underground bio-domes and are awaiting our Ark! We sail on wings of hope!'`
                    ]
                },
                ru: {
                    error: "Ошибка: Калибровка потеряна. Судно дрейфует в полной радиотишине.",
                    modes: [
                        `🟢 РЕЖИМ: СЛАБЫЙ СИГНАЛ (${count} повт.)<br><br>ИИ ОРИОН: 'Есть сигнал! Мачта поднялась. Сквозь треск статики пробивается искаженная аудиозапись. Расшифровать её пока не удается, но ясно одно: мы НЕ ОДИНОКИ в этой пустоте! Запускаю буферизацию. Отдыхайте, Командир.'`,
                        `🔵 РЕЖИМ: СТАБИЛЬНЫЙ СИГНАЛ (${count} повт.)<br><br>ИИ ОРИОН: 'Великолепная калибровка, безупречная форма! Мы перехватили чистый пакет цифровых данных. Это автоматический маяк человеческой колонии возле Альфы Центавра! Точные координаты загружены в навигационный компьютер. Теперь мы знаем путь!'`,
                        `🔥 РЕЖИМ: ВЫСОКОСКОРОСТНОЙ ПОТОК (${count} повт.)<br><br>ИИ ОРИОН: 'Невероятная выносливость! Настоящий Супермен на борту. Антенная решетка полностью развернута и поймала прямой эфир от колонистов! Они построили подземные биокупола и ждут наш Ковчег! Мы движемся вперед на крыльях надежды!'`
                    ]
                },
                sr: {
                    error: "Greška: Kalibracija je izgubljena. Brod plovi u potpunoj radio-tišini.",
                    modes: [
                        `🟢 REŽIM: SLAB SIGNAL (${count} ponavljanja)<br><br>AI ORION: 'Imamo signal! Stub se podigao. Kroz krckanje statike probija se izobličeni audio zapis. Još uvek ne možemo da ga dekodiramo, ali jedno je sigurno: NISMO SAMI u ovoj praznini! Pokrećem baferovanje. Odmorite se, Komandante.'`,
                        `🔵 REŽIM: STABILAN SIGNAL (${count} ponavljanja)<br><br>AI ORION: 'Odlična kalibracija, besprekorna forma! Uhvatili smo čist digitalni paket. To je automatski svetionik iz ljudske kolonije blizu Alfe Kentauri! Precizne koordinate su učitane u navigacioni kompjuter. Znamo put!'`,
                        `🔥 REŽIM: PROTOK VISOKOG PROPUSNOG OPSEGA (${count} ponavljanja)<br><br>AI ORION: 'Neverovatna izdržljivost! Pravi Superman na brodu. Antena je potpuno razvučena i uhvatila je prenos uživo od kolonista! Izgradili su podzemne biokupole i čekaju našu Barku! Plovimo na krilima nade!'`
                    ]
                }
            };
            const currentLang = messages[lang] ? lang : 'en';
            if (count < 1) return messages[currentLang].error;
            if (count >= 1 && count < 15) return messages[currentLang].modes[0];
            if (count >= 15 && count < 30) return messages[currentLang].modes[1];
            if (count >= 30) return messages[currentLang].modes[2];
        },
        nextKey: "day6"
    },

    // DAY 6
    day6: {
        type: "interactive-day",
        title: {
            en: "👑 DAY 6: GRAVITATIONAL CRISIS",
            ru: "👑 ДЕНЬ 6: ГРАВИТАЦИОННЫЙ КРИЗИС",
            sr: "👑 DAN 6: GRAVITACIONA KRIZA"
        },
        introText: {
            en: "AI ORION's Voice: '🚨 WARNING! A powerful tractor beam has locked onto our hull! We are being dragged toward an unknown planet. Sensors are off the charts: a massive storm rages below, ruled by a colossal planetary Entity. Gravity has surged to 5G, the hull is buckling! Fight the overload and brace for impact!'",
            ru: "Голос ИИ ОРИОН: '🚨 ВНИМАНИЕ! Мощный удерживающий луч захватил наш корпус! Нас затягивает к неизведанной планете. Показания датчиков зашкаливают: внизу бушует гигантский шторм, которым управляет колоссальная планетарная Сущность. Гравитация подскочила до 5G, корпус деформируется! Боритесь с перегрузкой и приготовьтесь к удару!'",
            sr: "Glas AI ORION-a: '🚨 UPOZORENJE! Moćan vučni zrak je zahvatio naš trup! Uvučeni smo prema nepoznatoj planeti. Senzori divljaju: dole besni masovna oluja kojom vlada kolosalno planetarno Biće. Gravitacija je skočila na 5G, trup se ugiba! Borite se protiv preopterećenja i spremite se za udar!'"
        },
        tasks: {
            en: [{ id: "water_d6", text: "💧 Hydration (Critical Tissues): Drink 300 ml of pure water to protect your cardiovascular system from rapid pressure fluctuations in the lower clouds.", juice: "✅ Body fluid pressure stabilized. Risk of blacking out from extreme G-forces reduced to a minimum." }],
            ru: [{ id: "water_d6", text: "💧 Гидратация (Критические ткани): Выпейте 300 мл чистой воды, чтобы защитить сердечно-сосудистую систему от резких перепадов давления в нижних слоях облаков.", juice: "✅ Давление жидкостей в организме стабилизировано. Риск потери сознания от экстремальных перегрузок снижен до минимума." }],
            sr: [{ id: "water_d6", text: "💧 Hidratacija (Kritična tkiva): Popijte 300 ml čiste vode da biste zaštitili kardiovaskularni sistem od naglih fluktuacija pritiska u nižim oblacima.", juice: "✅ Pritisak telesnih tečnosti je stabilizovan. Rizik od gubitka svesti usled ekstremnih G-sila smanjen je na minimum." }]
        },
        workoutText: {
            en: "🏋️ MAIN MISSION: IMPACT BURPEES (NO JUMP)<br><br>AI ORION: 'Gravity is throwing us against the deck! Drop into a plank position under the G-force, then, fighting the immense weight, push yourself back up. Each rep injects emergency power into the descent thrusters. Cushion the impact, Commander!'",
            ru: "🏋️ ГЛАВНАЯ МИССИЯ: УДАРНЫЕ БЕРПИ (БЕЗ ПРЫЖКА)<br><br>ИИ ОРИОН: 'Гравитация размазывает нас по палубе! Падайте в положение планки под весом перегрузки, затем, преодолевая колоссальный вес, выталкивайте себя обратно вверх. Каждое повторение подает аварийное питание на посадочные двигатели. Смягчите удар, Командир!'",
            sr: "🏋️ GLAVNA MISIJA: UDARNI BERPI (BEZ SKOKA)<br><br>AI ORION: 'Gravitacija nas baca o palubu! Spustite se u položaj planka pod uticajem G-sile, a zatim se, boreći se protiv ogromne težine, gurnite nazad nagore. Svako ponavljanje ubrizgava struju za hitne slučajeve u potisnike za spuštanje. Ublažite udar, Komandante!'"
        },
        calcResult: function(count, lang = 'en') {
            const messages = {
                en: {
                    error: "Error: Propulsion systems offline. The Ark slammed into the planetary core at terminal velocity...",
                    modes: [
                        `🟢 MODE: CRITICAL CRASH (${count} burpees)<br><br>AI ORION: 'FLASH! IMPACT! WE HAVE CRASHED! The descent thrusters provided only a minor cushion. The Ark slammed into the jagged crags. A wing is sheared off, the bridge is shattered, but... you and your crewmate are alive! Outside, a scarlet storm rages, and the roar of the massive Entity echoes in the distance. We are stranded. The struggle begins. End of Chapter 1...'`,
                        `🔵 MODE: EMERGENCY LANDING (${count} burpees)<br><br>AI ORION: 'CRASH! The kinetic absorbers worked! The vessel made a violent landing in a deep canyon. The main engines are burned out, flight is impossible. Radars show native tribes gathering, driven by the Entity's will. To survive and rebuild, we must endure. End of Chapter 1...'`,
                        `🔥 MODE: PRISTINE LANDING (${count} burpees)<br><br>AI ORION: 'TOUCHDOWN! The thrusters operated at 120%! The hull is completely intact; we landed as an armored citadel. Flight is blocked by the planet's anomalous field, but your crewmate is already powering up the defense turrets. The Entity looms in the distance... We are trapped, but we are armed and ready to fight! End of Chapter 1...'`
                    ]
                },
                ru: {
                    error: "Ошибка: Двигательные системы отключены. Ковчег на предельной скорости врезался в ядро планеты...",
                    modes: [
                        `🟢 РЕЖИМ: КРИТИЧЕСКОЕ КРУШЕНИЕ (${count} берпи)<br><br>ИИ ОРИОН: 'ВСПЫШКА! УДАР! МЫ РАЗБИЛИСЬ! Посадочные двигатели дали лишь слабую амортизацию. Ковчег врезался в острые скалы. Крыло оторвано, мостик уничтожен, но... вы и ваш напарник живы! Снаружи бушует алая буря, а вдалеке разносится рев огромной Сущности. Мы отрезаны от мира. Борьба начинается. Конец Главы 1...'`,
                        `🔵 РЕЖИМ: АВАРИЙНАЯ ПОСАДКА (${count} берпи)<br><br>ИИ ОРИОН: 'КРАШ! Кинетические поглотители сработали! Судно совершило жесткую посадку в глубоком каньоне. Главные двигатели сожжены, полет невозможен. Радары фиксируют сбор местных племен, ведомых волей Сущности. Чтобы выжить и отстроиться заново, нам придется выстоять. Конец Главы 1...'`,
                        `🔥 РЕЖИМ: ИДЕАЛЬНАЯ ПОСАДКА (${count} берпи)<br><br>ИИ ОРИОН: 'ПРИЗЕМЛЕНИЕ! Двигатели отработали на 120%! Корпус полностью цел; мы сели как бронированная цитадель. Полет заблокирован аномальным полем планеты, но ваш напарник уже запитывает оборонительные турели. Вдали вырисовывается Сущность... Мы в ловушке, но мы вооружены и готовы к бою! Конец Главы 1...'`
                    ]
                },
                sr: {
                    error: "Greška: Pogonski sistemi su van funkcije. Barka je udarila u jezgro planete maksimalnom brzinom...",
                    modes: [
                        `🟢 REŽIM: KRITIČAN PAD (${count} berpija)<br><br>AI ORION: 'BLJESAK! UDAR! SRUŠILI SMO SE! Potisnici za spuštanje su pružili samo minimalno ublažavanje. Barka je udarila u oštre litice. Krilo je otkinuto, komandni most je uništen, ali... vi i vaš član posade ste živi! Spolja besni skerletna oluja, a u daljini odjekuje rika masovnog Bića. Zarobljeni smo. Borba počinje. Kraj 1. poglavlja...'`,
                        `🔵 REŽIM: PRINUDNO SLETANJE (${count} berpija)<br><br>AI ORION: 'SUDAR! Kinetički amortizeri su proradili! Brod je izvršio nasilno sletanje u duboki kanjon. Glavni motori su izgoreli, let je nemoguć. Radari pokazuju okupljanje domorodačkih plemena, vođenih voljom Bića. Da bismo preživeli i ponovo izgradili sve, moramo izdržati. Kraj 1. poglavlja...'`,
                        `🔥 REŽIM: BESPREKORNO SLETANJE (${count} berpija)<br><br>AI ORION: 'SLETANJE! Potisnici su radili na 120%! Trup je potpuno netaknut; sleteli smo kao oklopna tvrđava. Let je blokiran anomalnim poljem planete, ali vaš član posade već pokreće odbrambene kupole. Biće se nazire u daljini... Zarobljeni smo, ali smo naoružani i spremni za borbu! Kraj 1. poglavlja...'`
                    ]
                }
            };
            const currentLang = messages[lang] ? lang : 'en';
            if (count < 1) return messages[currentLang].error;
            if (count >= 1 && count < 10) return messages[currentLang].modes[0];
            if (count >= 10 && count < 25) return messages[currentLang].modes[1];
            if (count >= 25) return messages[currentLang].modes[2];
        },
        nextKey: "day7"
    },

    // DAY 7
    day7: {
        type: "interactive-day",
        title: {
            en: "🏁 DAY 7: SYSTEM DIAGNOSTICS & ADAPTATION",
            ru: "🏁 ДЕНЬ 7: ДИАГНОСТИКА СИСТЕМ И АДАПТАЦИЯ",
            sr: "🏁 DAN 7: DIJAGNOSTIKA SISTEMA I ADAPTACIJA"
        },
        introText: {
            en: "AI ORION's Voice: 'Commander, we have landed on the surface of this uncharted planet. Extreme conditions rage outside, but the Ark's core is stable. Your biology survived the vacuum, the gravitational siren, and the crash-landing impact. You made it! Let's lock in your weekly metrics before we step outside.'",
            ru: "Голос ИИ ОРИОН: 'Командир, мы совершили посадку на поверхность этой неизведанной планеты. Снаружи бушуют экстремальные условия, но ядро Ковчега стабильно. Ваша биология пережила вакуум, гравитационную сирену и удар при жесткой посадке. Вы справились! Давайте зафиксируем ваши недельные показатели, прежде чем выйти наружу.'",
            sr: "Glas AI ORION-a: 'Komandante, sleteli smo na površinu ove neistražene planete. Ekstremni uslovi besne napolju, ali jezgro Barke je stabilno. Vaša biologija je preživela vakuum, gravitacionu sirenu i udar prinudnog sletanja. Uspele ste! Hajde da zabeležimo vaše nedeljne metričke podatke pre nego što iskoračimo napolje.'"
        },
        tasks: {
            en: [{ id: "water_d7", text: "💧 Hydration (Weekly Fluid Balance): Reflect on your habits. Have you become more mindful about drinking water? Drink a final glass to celebrate surviving the cosmos!", juice: "Chemical bio-fluids analysis is optimal. Your cells have adapted to deep-space stressors." }],
            ru: [{ id: "water_d7", text: "💧 Гидратация (Недельный водный баланс): Подумайте о своих привычках. Стали ли вы осознаннее пить воду? Выпейте финальный стакан, чтобы отпраздновать спасение в космосе!", juice: "✅ Анализ биожидкостей оптимален. Ваши клетки адаптировались к стрессорам глубокого космоса." }],
            sr: [{ id: "water_d7", text: "💧 Hidratacija (Nedeljni bilans tečnosti): Razmislite o svojim navikama. Da li ste postali pažljiviji u pijenju vode? Popijte poslednju čašu da proslavite preživljavanje kosmosa!", juice: "✅ Analiza telesnih tečnosti je optimalna. Vaše ćelije su se prilagodile stresorima dubokog svemira." }]
        },
        workoutText: {
            en: "🏋️ FINAL CHALLENGE: SPINAL ALIGNMENT ROLLS<br><br>AI ORION: 'Landing forces have compressed your spine, and local gravity is intense. Sit on the deck, pull your knees to your chest, hug them tight, and gently roll backward and forward along your spine. This will align your vertebrae and restore neural signals. Enter your reps, and I'll calibrate your mobility.'",
            ru: "🏋️ ФИНАЛЬНОЕ ИСПЫТАНИЕ: ПЕРЕКАТЫ НА СПИНЕ ДЛЯ ВЫРАВНИВАНИЯ ПОЗВОНОЧНИКА<br><br>ИИ ОРИОН: 'Силы приземления сжали ваш позвоночник, а местная гравитация очень сильна. Сядьте на палубу, подтяните колени к груди, крепко обнимите их и плавно перекатывайтесь назад и вперед по спине. Это выровняет позвонки и восстановит нейронные сигналы. Введите количество повторений, и я откалибрую вашу подвижность.'",
            sr: "🏋️ FINALNI IZAZOV: KOTRLJANJE NA LEĐIMA ZA PORAVNANJE KIČME<br><br>AI ORION: 'Sile sletanja su kompresovale vašu kičmu, a lokalna gravitacija je intenzivna. Sedite na palubu, privucite kolena grudima, čvrsto ih zagrlite i nežno se kotrljajte unazad i unapred duž kičme. Ovo će poravnati vaše pršljenove i vratiti neuronske signale. Unesite ponavljanja i ja ću kalibrisati vašu mobilnost.'"
        },
        calcResult: function(count, lang = 'en') {
            const messages = {
                en: {
                    error: "Error: Spinal rolls not executed. Your neural pathways are unresponsive!",
                    modes: [
                        `🟢 STATUS: SURVIVED (${count} rolls)<br><br>AI ORION: 'Adequate movement, Commander. Your spine has released some tension. We are ready to open the main airlock, though stay close to the ship. You have laid down a solid survival foundation. Rest now.'`,
                        `🔵 STATUS: SPACE RANGER (${count} rolls)<br><br>AI ORION: 'Excellent alignment! Your vertebrae are decompressed, and your reflexes are fully restored. This planet's gravity has nothing on you. The crew has absolute faith in your physical command!'`,
                        `🔥 STATUS: CHAMPION OF THE GALAXY (${count} rolls)<br><br>AI ORION: 'Phenomenal physical state! Your nervous system is hyper-tuned and ready for high-gravity combat. If the planet's Ruler tries to challenge us, they will face a physical powerhouse. Let's conquer this world!'`
                    ]
                },
                ru: {
                    error: "Ошибка: Перекаты не выполнены. Ваши нейронные пути не отвечают!",
                    modes: [
                        `🟢 СТАТУС: ВЫЖИВШИЙ (${count} перекатов)<br><br>ИИ ОРИОН: 'Достаточно неплохое движение, Командир. Позвоночник немного сбросил напряжение. Мы готовы открыть главный шлюз, но держитесь ближе к кораблю. Вы заложили прочный фундамент выживания. Отдыхайте.'`,
                        `🔵 СТАТУС: КОСМИЧЕСКИЙ РЕЙНДЖЕР (${count} перекатов)<br><br>ИИ ОРИОН: 'Превосходное выравнивание! Позвонки декомпрессированы, рефлексы полностью восстановлены. Гравитация этой планеты вам нипочем. Экипаж абсолютно уверен в вашей физической форме!'`,
                        `🔥 СТАТУС: ЧЕМПИОН ГАЛАКТИКИ (${count} перекатов)<br><br>ИИ ОРИОН: 'Феноменальное физическое состояние! Ваша нервная система гипернастроена и готова к бою в условиях высокой гравитации. Если Правитель этой планеты посмеет бросить нам вызов, он столкнется с настоящей машиной. Давайте покорим этот мир!'`
                    ]
                },
                sr: {
                    error: "Greška: Kotrljanje kičme nije izvršeno. Vaši neuronski putevi ne reaguju!",
                    modes: [
                        `🟢 STATUS: PREŽIVELI (${count} kotrljanja)<br><br>AI ORION: 'Adekvatno kretanje, Komandante. Vaša kičma je oslobodila deo napetosti. Spremni smo da otvorimo glavnu vazdušnu komoru, mada ostanite blizu broda. Postavili ste solidnu osnovu za preživljavanje. Sada se odmorite.'`,
                        `🔵 STATUS: SVEMIRSKI REJNDŽER (${count} kotrljanja)<br><br>AI ORION: 'Odlično poravnanje! Vaši pršljenovi su dekompresovani, a refleksi potpuno obnovljeni. Gravitacija ove planete vam ne može ništa. Posada ima apsolutno poverenje u Vašu fizičku spremnost!'`,
                        `🔥 STATUS: ŠAMPION GALAKSIJE (${count} kotrljanja)<br><br>AI ORION: 'Fenomenalno fizičko stanje! Vaš nervni sistem je hiper-podešen i spreman za borbu u uslovima visoke gravitacije. Ako Vladar planete pokuša da nas izazove, suočiće se sa fizičkom silom. Hajde da osvojimo ovaj svet!'`
                    ]
                }
            };
            const currentLang = messages[lang] ? lang : 'en';
            if (count < 1) return messages[currentLang].error;
            if (count >= 1 && count < 20) return messages[currentLang].modes[0];
            if (count >= 20 && count < 40) return messages[currentLang].modes[1];
            if (count >= 40) return messages[currentLang].modes[2];
        },
        nextKey: "final"
    },

    // FINAL
    final: {
        type: "text-only",
        steps: {
            en: [
                "CHAPTER ONE CONCLUDED.",
                "You have proven that humanity is worthy of surviving among the stars. Caring for yourself saved your body, your mind, and your Space Ark.",
                "But the story is only beginning... The ship is surrounded. The roar of an unknown behemoth echoes from the crags. Your crewmate checks the charge on their blaster and gives you a confident wink.",
                "AI ORION's Voice: 'Commander, welcome to Chapter 2: Chronicles of the New Earth. To be continued next week...'"
            ],
            ru: [
                "ГЛАВА ПЕРВАЯ ЗАВЕРШЕНА.",
                "Вы доказали, что человечество достойно выжить среди звезд. Забота о себе спасла ваше тело, ваш разум и ваш Космический Ковчег.",
                "Но история только начинается... Корабль окружен. Из ущелий доносится рев неведомого чудовища. Ваш напарник проверяет заряд своего бластера и уверенно вам подмигивает.",
                "Голос ИИ ОРИОН: 'Командир, добро пожаловать в Главу 2: Хроники Новой Земли. Продолжение следует на следующей неделе...'"
            ],
            sr: [
                "PRVO POGLAVLJE JE ZAVRŠENO.",
                "Dokazali ste da je čovečanstvo dostojno preživljavanja među zvezdama. Briga o sebi spasila je vaše telo, vaš um i vašu Svemirsku Barku.",
                "Ali priča tek počinje... Brod je okružen. Rika nepoznatog čudovišta odjekuje iz litica. Vaš član posade proverava napunjenost svog blastera i samouvereno vam namiguje.",
                "Glas AI ORION-a: 'Komandante, dobrodošli u 2. poglavlje: Hronike Nove Zemlje. Nastaviće se sledeće nedelje...'"
            ]
        },
        btnTexts: {
            en: ["SUMMARIZE RESULTS", "GLANCE AT YOUR PARTNER", "PREPARE WEAPONS", "END OF CHAPTER ONE 🚀"],
            ru: ["ПОДВЕСТИ ИТОГИ", "ВЗГЛЯНУТЬ НА НАПАРНИКА", "ПОДГОТОВИТЬ ОРУЖИЕ", "КОНЕЦ ПЕРВОЙ ГЛАВЫ 🚀"],
            sr: ["SUMIRAJ REZULTATE", "POGLEDAJ PARTNERA", "PRIPREMI ORUŽJE", "KRAJ PRVOG POGLAVLJA 🚀"]
        },
        nextKey: null
    }
};

// ГЛОБАЛЬНОЕ СОСТОЯНИЕ ИГРЫ
let gameState = {
    currentLang: "en", // ПО УМОЛЧАНИЮ EN
    currentDayKey: "intro",
    currentStepIndex: 0,
    waterScore: 0,
    workoutScore: 0,
    unlockedDays: ["intro"]
};

function getSafeLang(lang) {
    return uiTranslations[lang] ? lang : "en";
}

function getTranslatedDayTasks(dayData, lang) {
    if (!dayData || !dayData.tasks) return [];
    return dayData.tasks[lang] || dayData.tasks["en"] || [];
}

function getTranslatedDaySteps(dayData, lang) {
    if (!dayData || !dayData.steps) return [];
    return dayData.steps[lang] || dayData.steps["en"] || [];
}

function getTranslatedText(value, lang) {
    return value[lang] || value["en"];
}

const storageEnabled = isLocalStorageAvailable();

function isLocalStorageAvailable() {
    try {
        const storage = window.localStorage;
        const testKey = "__ark_storage_test__";
        storage.setItem(testKey, "1");
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

function getStoredItem(key) {
    if (!storageEnabled) return null;
    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
}

function setStoredItem(key, value) {
    if (!storageEnabled) return;
    try {
        window.localStorage.setItem(key, value);
    } catch {
        // ignore storage errors
    }
}

function removeStoredItem(key) {
    if (!storageEnabled) return;
    try {
        window.localStorage.removeItem(key);
    } catch {
        // ignore storage errors
    }
}

function clearTrackData() {
    if (!storageEnabled) return;
    try {
        for (let i = window.localStorage.length - 1; i >= 0; i--) {
            const key = window.localStorage.key(i);
            if (key && (key.startsWith("track_") || key === "ark_survival_save")) {
                window.localStorage.removeItem(key);
            }
        }
    } catch {
        // ignore storage errors
    }
}

// Загрузка прогресса
function loadProgress() {
    const saved = getStoredItem("ark_survival_save");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.currentDayKey) {
                gameState = parsed;
            }
        } catch (e) {
            console.error("Error loading progress", e);
        }
    }
    const select = document.getElementById("lang-select");
    if (select) select.value = gameState.currentLang;
    setDocumentLanguage(gameState.currentLang);
    setPageMetadata(gameState.currentLang);
    if (storageEnabled) {
        const saveStateMessage = saved ? "Progress loaded from your last session." : "No saved progress found. Your progress will be saved automatically.";
        setSaveStateMessage(saveStateMessage);
    } else {
        setSaveStateMessage("Progress cannot be saved in this browser. Changes will not persist.");
    }
}

// Сохранение прогресса
function saveProgress() {
    setStoredItem("ark_survival_save", JSON.stringify(gameState));
    if (storageEnabled) {
        const savedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setSaveStateMessage(`Progress saved at ${savedAt}.`);
    }
}

function setSaveStateMessage(message) {
    const saveState = document.getElementById("save-state");
    if (!saveState) return;
    saveState.textContent = message;
}

// Смена языка в селекте
function changeLanguage(lang) {
    const safeLang = getSafeLang(lang);
    gameState.currentLang = safeLang;
    saveProgress();
    updateInterfaceTexts();
    
    const finalSteps = getTranslatedDaySteps(storyData.final, safeLang);
    if (gameState.currentDayKey === "final" && gameState.currentStepIndex >= finalSteps.length - 1) {
        renderVictoryScreen();
    } else {
        renderCurrentState();
        updateHUD();
    }
}

// Обновление статических элементов разметки
function updateInterfaceTexts() {
    const lang = gameState.currentLang;
    const trans = uiTranslations[lang];
    
    const indicator = document.getElementById("status-indicator");
    if (indicator) indicator.textContent = trans.systemOnline;
    
    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) resetBtn.textContent = trans.resetBtn;
    
    setDocumentLanguage(gameState.currentLang);
    
    const lblWater = document.getElementById("label-water");
    if (lblWater) lblWater.textContent = trans.hudWater;
    
    const lblEnergy = document.getElementById("label-energy");
    if (lblEnergy) lblEnergy.textContent = trans.hudEnergy;
    
    const footerTxt = document.getElementById("footer-thanks");
    if (footerTxt) footerTxt.textContent = trans.footerThanks;
    
    setPageMetadata(gameState.currentLang);
    renderDayNav();
}

function setDocumentLanguage(lang) {
    if (!lang) return;
    document.documentElement.lang = lang;
}

function setPageMetadata(lang) {
    const trans = uiTranslations[lang] || uiTranslations.en;
    const titleValue = trans.pageTitle || "Space Ark: Survival";
    const descriptionValue = trans.pageDescription || "Interactive browser-based space adventure that encourages hydration, exercise, and daily mission progress through a futuristic sci-fi storyline.";

    document.title = titleValue;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute('content', descriptionValue);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', titleValue);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', descriptionValue);
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', titleValue);
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', descriptionValue);
}

function renderDayNav() {
    const nav = document.getElementById("dayNav");
    if (!nav) return;
    nav.innerHTML = "";
    const currentLang = gameState.currentLang;
    Object.keys(storyData).forEach(dayKey => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = `btn-${dayKey}`;
        button.className = "nav-btn";
        button.dataset.day = dayKey;
        const isLocked = !gameState.unlockedDays.includes(dayKey);
        const dayLabel = uiTranslations[currentLang]?.days?.[dayKey] || uiTranslations.en.days[dayKey] || dayKey;
        button.textContent = dayLabel + (isLocked ? " 🔒" : "");
        button.disabled = isLocked;
        button.setAttribute("aria-pressed", dayKey === gameState.currentDayKey ? "true" : "false");
        if (dayKey === gameState.currentDayKey) {
            button.classList.add("active");
            button.setAttribute("aria-current", "page");
        }
        if (isLocked) {
            button.classList.add("locked");
        }
        button.addEventListener("click", () => loadDay(dayKey));
        nav.appendChild(button);
    });
}

function updateProgressIndicator() {
    const progress = document.getElementById("progress-indicator");
    if (!progress) return;
    const dayKey = gameState.currentDayKey;
    const dayData = storyData[dayKey];
    const dayLabel = uiTranslations[gameState.currentLang]?.days?.[dayKey] || dayKey;
    let statusText = dayLabel;

    if (dayData?.type === "text-only") {
        const totalSteps = getTranslatedDaySteps(dayData, gameState.currentLang).length;
        statusText += ` · Step ${gameState.currentStepIndex + 1} / ${totalSteps}`;
    } else if (dayData?.type === "interactive-day") {
        statusText += " · Interactive mission";
    }

    progress.textContent = statusText;
}

function showStorageWarning() {
    const banner = document.getElementById("storage-warning");
    if (!banner) return;
    banner.classList.toggle("hidden", storageEnabled);
}

function updateSaveStateAfterReset() {
    if (storageEnabled) {
        setSaveStateMessage("All progress cleared. Your new mission is ready.");
    }
}

// Нажатие на вкладку дня вверху
function loadDay(dayKey) {
    if (!gameState.unlockedDays.includes(dayKey)) return;
    gameState.currentDayKey = dayKey;
    gameState.currentStepIndex = 0;
    saveProgress();
    
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
        btn.removeAttribute("aria-current");
        btn.setAttribute("aria-pressed", "false");
    });
    const activeBtn = document.getElementById(`btn-${dayKey}`);
    if (activeBtn) {
        activeBtn.classList.add("active");
        activeBtn.setAttribute("aria-current", "page");
        activeBtn.setAttribute("aria-pressed", "true");
    }
    
    if (dayKey === "final") {
        renderVictoryScreen();
    } else {
        renderCurrentState();
        updateHUD();
    }
    updateProgressIndicator();
}

// Обновление HUD баров (Water и Thrusters)
function updateHUD() {
    const currentDay = storyData[gameState.currentDayKey];
    
    // Вычисляем процент воды
    let waterPercent = 0;
    if (currentDay && currentDay.type === "interactive-day" && currentDay.tasks[gameState.currentLang]) {
        const taskId = currentDay.tasks[gameState.currentLang][0].id;
        const isWaterChecked = getStoredItem(`track_${gameState.currentDayKey}_${taskId}`) === "true";
        waterPercent = isWaterChecked ? 100 : 0;
    }
    
    // Процент двигателей (тренировки)
    const workoutReps = parseInt(getStoredItem(`track_${gameState.currentDayKey}_workout_reps`) || "0");
    let energyPercent = 0;
    if (gameState.currentDayKey === "day1" || gameState.currentDayKey === "day2" || gameState.currentDayKey === "day3" || gameState.currentDayKey === "day5") {
        energyPercent = Math.min(100, Math.round((workoutReps / 30) * 100));
    } else if (gameState.currentDayKey === "day4") {
        energyPercent = Math.min(100, Math.round((workoutReps / 40) * 100));
    } else if (gameState.currentDayKey === "day6" || gameState.currentDayKey === "day7") {
        energyPercent = Math.min(100, Math.round((workoutReps / 20) * 100));
    }
    
    const barWater = document.getElementById("hud-water");
    const txtWater = document.getElementById("hud-water-txt");
    if (barWater && txtWater) {
        barWater.style.width = `${waterPercent}%`;
        txtWater.textContent = `${waterPercent}%`;
    }
    
    const barEnergy = document.getElementById("hud-energy");
    const txtEnergy = document.getElementById("hud-energy-txt");
    if (barEnergy && txtEnergy) {
        barEnergy.style.width = `${energyPercent}%`;
        txtEnergy.textContent = `${energyPercent}%`;
    }
}

// ============================================
// TYPEWRITER EFFECT
// ============================================
let _twTimeout = null;
let _twIsRunning = false;
let _twFullText = '';
let _twElement = null;

function typewriterEffect(element, text, speed) {
    speed = speed || 28;
    // Отменяем предыдущую анимацию если есть
    if (_twTimeout) { clearTimeout(_twTimeout); _twTimeout = null; }

    _twElement = element;
    _twFullText = text;
    _twIsRunning = true;

    element.textContent = '';
    element.classList.add('typing-cursor');

    let i = 0;
    function typeNext() {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
            _twTimeout = setTimeout(typeNext, speed);
        } else {
            _twIsRunning = false;
            element.classList.remove('typing-cursor');
            _twTimeout = null;
        }
    }
    typeNext();
}

// Мгновенно показать весь текст (пропуск анимации)
function skipTypewriter() {
    if (_twIsRunning && _twElement) {
        clearTimeout(_twTimeout);
        _twTimeout = null;
        _twIsRunning = false;
        _twElement.textContent = _twFullText;
        _twElement.classList.remove('typing-cursor');
    }
}

// Отрисовка текущего экрана
function renderCurrentState() {
    const dayData = storyData[gameState.currentDayKey];
    const lang = gameState.currentLang;
    const output = document.getElementById("story-text");
    const actionBtn = document.getElementById("action-btn");
    
    if (!dayData || !output || !actionBtn) return;
    
    const existingInteractive = document.getElementById("interactive-container");
    if (existingInteractive) existingInteractive.remove();
    
    if (dayData.type === "text-only") {
        renderTextOnlyScreen(dayData, lang, output, actionBtn);
    } else if (dayData.type === "interactive-day") {
        renderInteractiveDayScreen(dayData, lang, output, actionBtn);
    }
    updateProgressIndicator();
}

function renderTextOnlyScreen(dayData, lang, output, actionBtn) {
    actionBtn.style.display = "block";
    const steps = getTranslatedDaySteps(dayData, lang);
    const text = steps[gameState.currentStepIndex];
    const btnTexts = dayData.btnTexts[lang] || dayData.btnTexts["en"];
    actionBtn.textContent = btnTexts[gameState.currentStepIndex];
    typewriterEffect(output, text);
}

function renderInteractiveDayScreen(dayData, lang, output, actionBtn) {
    actionBtn.style.display = "none";
    const trans = uiTranslations[lang];
    const introHtml = `<p class="orion-talk">${getTranslatedText(dayData.introText, lang)}</p>`;

    let tasksHtml = `
        <div class="interactive-section">
            <h3>${trans.interactiveTitleTasks}</h3>
            <div class="tasks-list">
    `;

    const tasksList = getTranslatedDayTasks(dayData, lang);
    tasksList.forEach(task => {
        const isChecked = getStoredItem(`track_${gameState.currentDayKey}_${task.id}`) === "true";
        tasksHtml += `
            <div class="task-item">
                <input type="checkbox" data-task-id="${task.id}" id="chk-${task.id}" ${isChecked ? "checked" : ""}>
                <label for="chk-${task.id}">${task.text}</label>
            </div>
            <div class="juice-box ${isChecked ? "" : "hidden"}" id="juice-${task.id}">${task.juice}</div>
        `;
    });
    tasksHtml += `</div></div>`;

    const savedReps = getStoredItem(`track_${gameState.currentDayKey}_workout_reps`) || "";
    const workoutHtml = `
        <div class="interactive-section">
            <h3>${trans.interactiveTitleWorkout}</h3>
            <p class="workout-desc">${getTranslatedText(dayData.workoutText, lang)}</p>
            <div class="workout-form">
                <label for="reps-input">${trans.interactiveRepsLabel}</label>
                <div class="input-group">
                    <input type="number" id="reps-input" min="0" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="${savedReps}" placeholder="0">
                    <button type="button" id="submit-workout" class="submit-btn">${trans.interactiveSubmitBtn}</button>
                </div>
            </div>
            <div class="juice-box bonus-box hidden" id="workout-feedback"></div>
        </div>
    `;

    const nextDayBtnHtml = `
        <button type="button" id="next-day-btn" class="action-btn next-day-btn hidden">
            ${trans.interactiveNextDayBtn}
        </button>
    `;

    const container = document.createElement("div");
    container.id = "interactive-container";
    container.innerHTML = introHtml + tasksHtml + workoutHtml + nextDayBtnHtml;
    output.parentNode.insertBefore(container, output.nextSibling);
    output.innerHTML = "";

    container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            toggleTask(checkbox.dataset.taskId, checkbox.checked);
        });
    });

    const submitWorkoutBtn = document.getElementById("submit-workout");
    if (submitWorkoutBtn) {
        submitWorkoutBtn.addEventListener("click", submitWorkout);
    }

    const nextDayBtn = document.getElementById("next-day-btn");
    if (nextDayBtn) {
        nextDayBtn.addEventListener("click", jumpToNextDay);
    }

    checkDayCompletion();
}

// Логика переключения сюжетных шагов интро
function handleAction() {
    const dayData = storyData[gameState.currentDayKey];
    const lang = gameState.currentLang;
    if (!dayData || dayData.type !== "text-only") return;

    // Если текст ещё печатается — первый клик пропускает анимацию
    if (_twIsRunning) {
        skipTypewriter();
        return;
    }
    
    const steps = dayData.steps[lang] || dayData.steps["en"];
    if (gameState.currentStepIndex < steps.length - 1) {
        gameState.currentStepIndex++;
        saveProgress();
        renderCurrentState();
    } else {
        // Переход от интро к следующему экрану
        const nextDay = dayData.nextKey;
        if (nextDay) {
            if (!gameState.unlockedDays.includes(nextDay)) {
                gameState.unlockedDays.push(nextDay);
            }
            gameState.currentDayKey = nextDay;
            gameState.currentStepIndex = 0;
            saveProgress();
            updateInterfaceTexts();
            loadDay(nextDay);
        }
    }
}

// Чекбокс воды
function toggleTask(taskId, isChecked) {
    setStoredItem(`track_${gameState.currentDayKey}_${taskId}`, isChecked ? "true" : "false");
    const juiceBox = document.getElementById(`juice-${taskId}`);
    if (juiceBox) {
        juiceBox.classList.toggle("hidden", !isChecked);
    }
    updateHUD();
    checkDayCompletion();
}

// ТВОЯ ИСПРАВЛЕННАЯ ЛОГИКА ПООЩРЕНИЯ ТРЕНИРОВКИ:
function submitWorkout() {
    const dayData = storyData[gameState.currentDayKey];
    const input = document.getElementById("reps-input");
    const feedbackBox = document.getElementById("workout-feedback");
    
    if (!dayData || !input || !feedbackBox) return;
    
    const val = parseInt(input.value || "0");
    setStoredItem(`track_${gameState.currentDayKey}_workout_reps`, val.toString());
    
    // Вызываем calcResult, передавая количество и язык
    const feedbackText = dayData.calcResult(val, gameState.currentLang);
    
    // Красиво выводим поощрение на экран
    feedbackBox.innerHTML = feedbackText;
    feedbackBox.classList.remove("hidden");
    
    updateHUD();
    checkDayCompletion();
}

// Проверка выполнения нормы дня для разблокировки следующего дня
function checkDayCompletion() {
    const dayData = storyData[gameState.currentDayKey];
    const lang = gameState.currentLang;
    if (!dayData || dayData.type !== "interactive-day") return;

    const tasks = getTranslatedDayTasks(dayData, lang);
    const taskId = tasks.length ? tasks[0].id : undefined;
    const isWaterOk = taskId ? getStoredItem(`track_${gameState.currentDayKey}_${taskId}`) === "true" : false;
    const savedReps = parseInt(getStoredItem(`track_${gameState.currentDayKey}_workout_reps`) || "0");
    const isWorkoutOk = savedReps >= 1; // Хотя бы 1 повторение

    const nextBtn = document.getElementById("next-day-btn");
    if (nextBtn) {
        nextBtn.classList.toggle("hidden", !(isWaterOk && isWorkoutOk));
    }
}

// Переход к следующему дню по кнопке
function jumpToNextDay() {
    const dayData = storyData[gameState.currentDayKey];
    if (!dayData || !dayData.nextKey) return;
    
    const nextDay = dayData.nextKey;
    if (!gameState.unlockedDays.includes(nextDay)) {
        gameState.unlockedDays.push(nextDay);
    }
    gameState.currentDayKey = nextDay;
    gameState.currentStepIndex = 0;
    saveProgress();
    
    updateInterfaceTexts();
    loadDay(nextDay);
}

// Подсчет общей статистики для экрана победы
function getAggregateStats() {
    let totalWater = 0;
    let totalWorkouts = 0;
    
    Object.keys(storyData).forEach(dayKey => {
        const day = storyData[dayKey];
        if (day.type === "interactive-day") {
            const tasks = getTranslatedDayTasks(day, "en");
            const taskId = tasks.length ? tasks[0].id : undefined;
            if (taskId && getStoredItem(`track_${dayKey}_${taskId}`) === "true") {
                totalWater += 300;
            }
            const reps = parseInt(getStoredItem(`track_${dayKey}_workout_reps`) || "0");
            totalWorkouts += reps;
        }
    });
    
    return { totalWater, totalWorkouts };
}

// ЭКРАН ПОБЕДЫ (FINAL)
function renderVictoryScreen() {
    const trans = uiTranslations[gameState.currentLang];
    const container = document.getElementById("interactive-container");
    if (container) container.remove();
    
    const output = document.getElementById("story-text");
    const actionBtn = document.getElementById("action-btn");
    if (actionBtn) actionBtn.style.display = "none";
    
    const stats = getAggregateStats();
    
    // Рендерим шаги финала в виде красивого текста
    let stepsHtml = "";
    const finalSteps = getTranslatedDaySteps(storyData.final, gameState.currentLang);
    finalSteps.forEach(step => {
        stepsHtml += `<p class="victory-step">${step}</p>`;
    });
    
    output.innerHTML = `
        <div class="victory-container">
            <h2>🏆 ${trans.victoryTitle}</h2>
            <div class="victory-message">
                ${stepsHtml}
            </div>
            
            <h3 class="victory-log-title">${trans.victoryLog}</h3>
            <div class="victory-stats">
                <div class="stat-box">
                    <span>${trans.victoryWater}: <strong>${stats.totalWater} ml</strong></span>
                </div>
                <div class="stat-box">
                    <span>${trans.victoryWorkout}: <strong>${stats.totalWorkouts} reps</strong></span>
                </div>
            </div>
            
            <button type="button" id="victory-new-mission" class="action-btn">${trans.victoryNewMission}</button>
        </div>
    `;
    const victoryButton = document.getElementById("victory-new-mission");
    if (victoryButton) {
        victoryButton.addEventListener("click", confirmResetProgress);
    }
}

// Звездный фон
function generateStarfield() {
    const starsContainer = document.querySelector(".stars");
    if (!starsContainer) return;
    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 8}s`;
        star.style.animationDuration = `${4 + Math.random() * 6}s`;
        starsContainer.appendChild(star);
    }
}

// Сброс прогресса
function confirmResetProgress() {
    if (confirm(uiTranslations[gameState.currentLang].resetConfirm)) {
        resetProgress();
    }
}

function resetProgress() {
    removeStoredItem("ark_survival_save");
    clearTrackData();
    gameState = {
        currentLang: gameState.currentLang || "en",
        currentDayKey: "intro",
        currentStepIndex: 0,
        waterScore: 0,
        workoutScore: 0,
        unlockedDays: ["intro"]
    };
    saveProgress();
    updateInterfaceTexts();
    showStorageWarning();
    updateSaveStateAfterReset();
    loadDay("intro");
}

function initPageEvents() {
    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", confirmResetProgress);
    }

    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
        langSelect.addEventListener("change", event => changeLanguage(event.target.value));
    }

    const actionBtn = document.getElementById("action-btn");
    if (actionBtn) {
        actionBtn.addEventListener("click", handleAction);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadProgress();
    generateStarfield();
    initPageEvents();
    updateInterfaceTexts();
    showStorageWarning();
    loadDay(gameState.currentDayKey);
    registerServiceWorker();
});

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js")
            .then(registration => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.warn("Service Worker registration failed:", error);
            });
    }
}