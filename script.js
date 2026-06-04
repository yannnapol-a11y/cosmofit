const storyData = {
    // INTRO
    intro: {
        type: "text-only",
        steps: [
            "Earth was extinguished in a matter of hours. Humanity burned everything: reactors, power grids, cities. A nuclear winter enveloped our home world.",
            "You are the last survivors. A man and a woman. You managed to leap into the ark's airlock just a second before the atmosphere turned to ash.",
            "The vessel is hurtling through the freezing void of space in search of a New Home. But the cosmos is ruthless. Drop your hands, submit to stress, weaken in zero gravity—and humanity vanishes forever.",
            "Commander, your body and mind are the final biological sanctuary for our species. Self-care is your absolute duty. Welcome on board."
        ],
        btnTexts: ["CONNECT TO SYSTEMS", "SCAN SECTOR", "ASSESS THREAT", "START SYSTEMS CALIBRATION"],
        nextKey: "day1"
    },
    
    // DAY 1: STABILIZING LIFE SUPPORT
    day1: {
        type: "interactive-day",
        title: "DAY 1: STABILIZING LIFE SUPPORT",
        introText: "AI ORION's Voice: 'Commander, do you read me? I am ORION, your on-board AI. My algorithms are flawless, but your stress indicators and the vessel's hydraulics are in critical danger. To reach our destination, we must synchronize your biology with the life support systems. Initiating protocol.'",
        
        tasks: [
            { id: "water", text: "💧 Hydration (Reactor Cooling): Drink 300 ml of pure water to manually feed the radiator systems.", juice: "✅ Cooling systems stabilized. Reactor temperature dropped by 15%. AI ORION expresses organic gratitude!" },
            { id: "food", text: "🍏 Nutrition (Bio-fuel Synthesis): Consume a balanced meal. Avoid toxic pre-packaged Earth junk.", juice: "✅ Nutrient upload complete. Navigational computer is ready to calculate the hyper-jump!" },
            { id: "mind", text: "🤍 Mental Shield (Self-Acceptance): Dedicate 5 minutes to complete silence. Mentally praise yourself for surviving.", juice: "✅ Mental shield active. Cortisol level reduced. The core system logs peace in the cockpit." }
        ],
        
        workoutText: "🏋️ WORKOUT: CYLINDER PRESSURE PUMPING<br><br>AI ORION: 'The vessel's landing gear cylinders have sagged under extreme pressure. If we try to land like this, we'll turn into cosmic scrap metal! Use a chair for support and do squats to actuate the manual hydraulic pumps. Enter your reps, and I will compute the generated power.'",
        
        calcResult: function(count) {
            if (count < 1) return "Error: Pressure pumps not activated. The vessel requires energy!";
            if (count >= 1 && count < 30) {
                return `🟢 MODE: INITIAL IMPULSE (${count} squats)<br><br>AI ORION: 'Impulse recorded! The cylinders have cleared emergency lockouts. Pressure is minimal, maneuvers are restricted, but the main thing—we are no longer falling! The vessel is stabilized. For your first day, this is a triumph. Rest now!'`;
            }
            if (count >= 30 && count < 50) {
                return `🔵 MODE: NOMINAL FLIGHT (${count} squats)<br><br>AI ORION: 'Outstanding work! System pressure rose to a nominal 120 GPa. The ship has leveled its course and is cruising safely through the sector. Your body is adapting beautifully!'`;
            }
            if (count >= 50) {
                return `🔥 MODE: SUPERCHARGED BREAKTHROUGH (${count} squats)<br><br>AI ORION: 'Incredible! You activated the hidden auxiliary boosters! We tore through an asteroid belt at full throttle and harvested 50 units of rare stellar resources. Your crewmate is ecstatic!'`;
            }
        },
        nextKey: "day2"
    },

    // DAY 2: OPERATION 'CARGO EMERGENCY'
    day2: {
        type: "interactive-day",
        title: "DAY 2: OPERATION 'CARGO EMERGENCY'",
        introText: "AI ORION's Voice: 'No need to panic, but we have an emergency! The outer cargo hatch was torn open by yesterday's tremors. Decompression has begun in the emergency ration sector. If we do not seal the inner security bulkheads right now, our supplies will fly off into the void, leaving us as very thin, very dead skeletons!'",
        
        tasks: [
            { id: "water_d2", text: "💧 Hydration (Hydraulic Circuits): Drink 300 ml of pure water to pressurize the bulkhead door lines.", juice: "✅ Pressure restored! The heavy security bulkheads have closed by one-third. The hiss of escaping air is fading." },
            { id: "food_d2", text: "🍏 Nutrition (Energy Rations): Eat a balanced meal. Fighting vacuum decompression requires immense biological energy!", juice: "✅ Nutrients successfully processed. Energy surge in muscles is stable. You are ready for heavy physical exertion." },
            { id: "mind_d2", text: "🤍 Sync (Crew Connection): Speak a warm word to your crewmate, or mentally acknowledge your own strength.", juice: "✅ Psycho-emotional background normalized. Crew synergy: 100%. We operate as a single, living organism!" }
        ],
        
        workoutText: "🏋️ WORKOUT: MANUAL HATCH SEALING<br><br>AI ORION: 'The electrical actuator is fried. The only way to lock the bulkhead is to hold the emergency levers and literally push the massive steel plate away from you. Take a knee, place your hands wide. Each pushup represents one centimeter of sealing the heavy blast door!'",
        
        calcResult: function(count) {
            if (count < 1) return "Error: Bulkhead open. Vacuum is draining our supplies!";
            if (count >= 1 && count < 15) {
                return `🟢 MODE: LOCKED AND SECURED (${count} pushups)<br><br>AI ORION: 'Whew, Commander, that was close! You managed to lock the bulkhead. Yes, a few packs of space cookies floated away into the dark (our tax to the cosmic ghosts), but the main food vault is saved! ORION is proud of you!'`;
            }
            if (count >= 15 && count < 30) {
                return `🔵 MODE: FULL SEALING (${count} pushups)<br><br>AI ORION: 'Perfection, Commander! The heavy steel lock clicked into place. Air leak: 0%. Every single seed and ration has been saved. The onboard synthesizer is dispensing a bonus vitamin syrup!'`;
            }
            if (count >= 30) {
                return `🔥 MODE: HEROIC INTERCEPT (${count} pushups)<br><br>AI ORION: 'Fantastic! You slammed the bulkhead shut with such force that the pressure backflow sucked a derelict satellite fragment into the airlock! Acquired 30 units of titanium alloy plating. The crew looks at you like a superhero!'`;
            }
        },
        nextKey: "day3"
    },

    // DAY 3: THE GRAVITATIONAL SIREN (MINI-BOSS)
    day3: {
        type: "interactive-day",
        title: "🚨 DAY 3: THE GRAVITATIONAL SIREN (MINI-BOSS)",
        introText: "AI ORION's Voice: '🚨 CRITICAL ALERT! We are being dragged toward a massive, dark spherical anomaly. Its gravitational pull is abnormal. Worse yet, your crewmate has fallen under its hypnotic acoustic field, is grinning blankly at the viewport, and has locked the main steering column! Break the trance, raise your mental shields, and steer the ship away from death!'",
        
        tasks: [
            { id: "mind_d3", text: "🤍 Self-Love (Breaking the Trance): Spend 5 minutes in deep reflection. Remember your triumphs. Destroy the anomaly's whispers about your helplessness.", juice: "✅ Mental attack repelled! Your mind is clear, and your willpower is as solid as titanium. Critical thinking restored. Activating manual override!" },
            { id: "stretch_d3", text: "🪢 Active Stretch (Emergency Cable): Lie on your back, lift one leg, and gently pull it toward you using a strap. Repeat for both legs to pull the flaps' steel tension cable.", juice: "✅ Cable tensioned! Telescopic flaps locked in nominal position. Mechanical wing stabilization complete." }
        ],
        
        workoutText: "🏋️ MAIN MISSION: CORE REACTION CRUNCHES<br><br>AI ORION: 'We are slipping into the siren's gravitational well! Our only escape is to fire the lower impulse thrusters for a violent course correction. Lie on your back, brace your hands, lift your legs, and drive your pelvis to your chest! Blast the ship upward!'",
        
        calcResult: function(count) {
            if (count < 1) return "Error: Flight axis skewed. The ship is being sucked into the siren's gravitational singularity!";
            if (count >= 1 && count < 20) {
                return `🟢 MODE: SAFE ORBIT ESCAPE (${count} crunches)<br><br>AI ORION: 'We have contact! The lower engines flared! The pull has subsided, and we've stabilized in a circular orbit. Your crewmate snapped out of it, blinking and asking why there's a taste of copper in their mouth. You saved us, Commander! Your core is strong.'`;
            }
            if (count >= 20 && count < 40) {
                return `🔵 MODE: TRAJECTORY SNAP-BACK (${count} crunches)<br><br>AI ORION: 'Superb maneuver, Commander! We slingshotted around the dark object at immense speed and broke free into deep space! Your crewmate is wide awake, horrified by what they did, and has promised to clean the space galley for a week. Boss defeated!'`;
            }
            if (count >= 40) {
                return `🔥 MODE: COUNTER-ORBITAL HARVEST (${count} crunches)<br><br>AI ORION: 'This is legendary! Your physical impulse catapulted us away so hard that as we flew past the anomaly, we snatched an ancient shipwreck fragment from its orbit! Gained 50 units of Dark Matter and a rare shield blueprint!'`;
            }
        },
        nextKey: "day4"
    },
    
    // DAY 4: VOID HUNTERS
    day4: {
        type: "interactive-day",
        title: "🛸 DAY 4: VOID HUNTERS",
        introText: "AI ORION's Voice: '🚨 Emergency sirens are blaring! Our hull has grazed a drifting space buoy. The botanical greenhouse has been breached, and Void Hunters—energy-leeching organisms—have flooded the reactor bay! Your crewmate is trying to seal the blast door, but they are attacking from the shadows. Protect our home!'",
        
        tasks: [
            { id: "mind_d4", text: "🤍 Tactical Debrief (Psychological Shield): Sit down with your crewmate. Log 3 core reasons why you will survive. Give each other a warm hug or word of thanks.", juice: "✅ Stress level dropping. Your crewmate holds your hand: 'If it weren't for you, Commander, I'd be space dust by now. Thank you.' Synergy: 100%." },
            { id: "water_d4", text: "💧 Hydration (Panic Hormone Flush): Drink a large glass of pure water to wash out the adrenaline shock and trigger deep cellular filtering.", juice: "✅ Internal equilibrium restored. Muscle tissues receive the vital hydration needed for quick regeneration." },
            { id: "food_d4", text: "🍏 Nutrition (Cell-level Repair): Consume clean proteins and fiber. Avoid sugary Earth synthetics—your muscle fibers need structural building blocks!", juice: "✅ Muscle micro-tears successfully isolated by amino acids. Energy recovery complete." }
        ],
        
        workoutText: "🏋️ WORKOUT: ZERO-G DEFENSIVE KICKS<br><br>AI ORION: 'The deck is shaking, gravity is offline! Take a defensive stance, balance on one leg, and deliver powerful, rapid kicks forward to knock the beasts back into the vacuum. Count your strikes: we must clear both the left and right sectors!'",
        
        calcResult: function(count) {
            if (count < 1) return "Error: Defense breached! The hunters are swarming the central reactor core!";
            if (count >= 1 && count < 40) {
                return `🟢 MODE: MINIMAL RESISTANCE (${count} kicks)<br><br>AI ORION: 'That was a brutal skirmish! We barely managed to repel them. The breach is sealed, but a few parasites chewed through the greenhouse power cables. Food rations are temporarily restricted, but you survived. Heal your wounds.'`;
            }
            if (count >= 40 && count < 80) {
                return `🔵 MODE: IMPENETRABLE LINE (${count} kicks)<br><br>AI ORION: 'Outstanding technique, Commander! Your kicks cracked their bio-armor while your crewmate welded the breaches shut. Not a single beast reached the core. The greenhouse is safe. Your partner looks at you with infinite respect!'`;
            }
            if (count >= 80) {
                return `🔥 MODE: EPIC SWEEP (${count} kicks)<br><br>AI ORION: 'This is the stuff of legends! You turned the reactor bay into a graveyard for those beasts. With a final strike, you crushed their pack leader and harvested its glowing bio-core! The labs have converted its raw energy to supercharge our thrusters!'`;
            }
        },
        nextKey: "day5"
    },
    
    // DAY 5: SIGNAL THROUGH THE STATIC
    day5: {
        type: "interactive-day",
        title: "📡 DAY 5: SIGNAL THROUGH THE STATIC",
        introText: "AI ORION's Voice: 'Commander, the void core energy gave us speed, but it fried our long-range communications array! We are blind and deaf in the radio ether. The only way to tune into the survivors' frequency is to manually calibrate the heavy antenna angle. This requires absolute physical posture. Let's establish contact!'",
        
        tasks: [
            { id: "water_d5", text: "💧 Hydration (Processor Cooling): Drink 300 ml of water. I need your body's moisture condensation to cool down the overheated transceivers.", juice: "✅ Radio module cooled! Board temperatures returned to safe limits, static interference on screens decreased by 20%." },
            { id: "food_d5", text: "🍏 Nutrition (Radiation Protocol): Eat clean, vitamin-rich food (greens, vegetables) to flush out cosmic toxins after passing through the debris belt.", juice: "✅ Cellular barrier restored. Commander's cognitive function operating at 100%. The AI is ready to decode encrypted signals." }
        ],
        
        workoutText: "🏋️ WORKOUT: SUPERMAN HOLD MAST CALIBRATION<br><br>AI ORION: 'The array's automatic motor is jammed. Lie face down on the deck, stretch your arms forward, and lift your limbs off the floor, holding at the peak. Your body must act as the antenna's structural mast. Each lift aligns our transmission beam closer to Alpha Centauri!'",
        
        calcResult: function(count) {
            if (count < 1) return "Error: Alignment lost. The vessel drifts in complete radio silence.";
            if (count >= 1 && count < 15) {
                return `🟢 MODE: WEAK CARRIER (${count} reps)<br><br>AI ORION: 'We have a signal! The mast rose. Through the crackle of static, a garbled audio feed is breaking through. We can't decode it yet, but one thing is certain: we are NOT ALONE in this void! Buffering initiated. Rest, Commander.'`;
            }
            if (count >= 15 && count < 30) {
                return `🔵 MODE: STABLE CARRIER (${count} reps)<br><br>AI ORION: 'Excellent calibration, flawless form! We have captured a clean digital packet. It's an automated beacon from a human colony near Alpha Centauri! Precise coordinates loaded into the nav-computer. We know the way!'`;
            }
            if (count >= 30) {
                return `🔥 MODE: HIGH-BANDWIDTH STREAM (${count} reps)<br><br>AI ORION: 'Incredible endurance! A true Superman on board. The array is fully extended and has captured a live log from the colonists! They have built underground bio-domes and are awaiting our Ark! We sail on wings of hope!'`;
            }
        },
        nextKey: "day6"
    },
    
    // DAY 6: GRAVITATIONAL CRISIS
    day6: {
        type: "interactive-day",
        title: "👑 DAY 6: GRAVITATIONAL CRISIS",
        introText: "AI ORION's Voice: '🚨 WARNING! A powerful tractor beam has locked onto our hull! We are being dragged toward an unknown planet. Sensors are off the charts: a massive storm rages below, ruled by a colossal planetary Entity. Gravity has surged to 5G, the hull is buckling! Fight the overload and brace for impact!'",
        
        tasks: [
            { id: "mind_d6", text: "🤍 Anti-Stress (Box Breathing): Complete 3 rounds of box breathing. The atmosphere of this world is thick with chaotic energy; your mind must remain ice-cold.", juice: "✅ External psychic frenzy blocked. Mental barrier successfully maintains full emotional control." },
            { id: "food_d6", text: "🍏 Nutrition (Endurance Fuel): Consume clean proteins and complex carbs. Your body will need every ounce of strength to survive the crash-landing.", juice: "✅ Amino acid balance restored. Muscle tissues and bone structure prepped for extreme physical deceleration." },
            { id: "water_d6", text: "💧 Hydration (Critical Tissues): Drink 300 ml of pure water to protect your cardiovascular system from rapid pressure fluctuations in the lower clouds.", juice: "✅ Body fluid pressure stabilized. Risk of blacking out from extreme G-forces reduced to a minimum." },
            { id: "hook_d6", text: "🧗 Extra Task (Grip / Brace): Hang from a pull-up bar or door frame, supporting your full body weight. We are simulating manual harness reinforcement.", juice: "✅ Emergency straps braced! Crew survival pods locked and reinforced ahead of impact." }
        ],
        
        workoutText: "🏋️ MAIN MISSION: IMPACT BURPEES (NO JUMP)<br><br>AI ORION: 'Gravity is throwing us against the deck! Drop into a plank position under the G-force, then, fighting the immense weight, push yourself back up. Each rep injects emergency power into the descent thrusters. Cushion the impact, Commander!'",
        
        calcResult: function(count) {
            if (count < 1) return "Error: Propulsion systems offline. The Ark slammed into the planetary core at terminal velocity...";
            if (count >= 1 && count < 10) {
                return `🟢 MODE: CRITICAL CRASH (${count} burpees)<br><br>AI ORION: 'FLASH! IMPACT! WE HAVE CRASHED! The descent thrusters provided only a minor cushion. The Ark slammed into the jagged crags. A wing is sheared off, the bridge is shattered, but... you and your crewmate are alive! Outside, a scarlet storm rages, and the roar of the massive Entity echoes in the distance. We are stranded. The struggle begins. End of Chapter 1...'`;
            }
            if (count >= 10 && count < 25) {
                return `🔵 MODE: EMERGENCY LANDING (${count} burpees)<br><br>AI ORION: 'CRASH! The kinetic absorbers worked! The vessel made a violent landing in a deep canyon. The main engines are burned out, flight is impossible. Radars show native tribes gathering, driven by the Entity's will. To survive and rebuild, we must endure. End of Chapter 1...'`;
            }
            if (count >= 25) {
                return `🔥 MODE: PRISTINE LANDING (${count} burpees)<br><br>AI ORION: 'TOUCHDOWN! The thrusters operated at 120%! The hull is completely intact; we landed as an armored citadel. Flight is blocked by the planet's anomalous field, but your crewmate is already powering up the defense turrets. The Entity looms in the distance... We are trapped, but we are armed and ready to fight! End of Chapter 1...'`;
            }
        },
        nextKey: "day7"
    },
    
    // DAY 7: SYSTEM DIAGNOSTICS & ADAPTATION
    day7: {
        type: "interactive-day",
        title: "🏁 DAY 7: SYSTEM DIAGNOSTICS & ADAPTATION",
        introText: "AI ORION's Voice: 'Commander, we have landed on the surface of this uncharted planet. Extreme conditions rage outside, but the Ark's core is stable. Your biology survived the vacuum, the gravitational siren, and the crash-landing impact. You made it! Let's lock in your weekly metrics before we step outside.'",
        
        tasks: [
            { id: "water_d7", text: "💧 Hydration (Weekly Fluid Balance): Reflect on your habits. Have you become more mindful about drinking water? Drink a final glass to celebrate surviving the cosmos!", juice: "✅ Bio-fluids analysis is optimal. Your cells have adapted to deep-space stressors." },
            { id: "food_d7", text: "🍏 Nutrition (Cellular Stability): Did you manage to fuel your body with clean, unprocessed foods? We need pristine biological energy!", juice: "✅ Your body's reactor is fully charged with premium nutrients. Cellular resources maximized." },
            { id: "mind_d7", text: "🤍 Mind (Autonomy of Consciousness): You didn't give up; you reached Day 7. Praise your resilience. The mind has conquered the void.", juice: "✅ Crew cognitive armor: IMPENETRABLE. Stress level: 0%. Morale: Epic." }
        ],
        
        workoutText: "🏋️ FINAL CHALLENGE: SPINAL ALIGNMENT ROLLS<br><br>AI ORION: 'Landing forces have compressed your spine, and local gravity is intense. Sit on the deck, pull your knees to your chest, hug them tight, and gently roll backward and forward along your spine. This will align your vertebrae and restore neural signals. Enter your reps, and I'll calibrate your mobility.'",
        
        calcResult: function(count) {
            if (count < 1) return "Error: Spinal rolls not executed. Your neural pathways are unresponsive!";
            if (count >= 1 && count < 20) {
                return `🟢 STATUS: SURVIVED (${count} rolls)<br><br>AI ORION: 'Adequate movement, Commander. Your spine has released some tension. We are ready to open the main airlock, though stay close to the ship. You have laid down a solid survival foundation. Rest now.'`;
            }
            if (count >= 20 && count < 40) {
                return `🔵 STATUS: SPACE RANGER (${count} rolls)<br><br>AI ORION: 'Excellent alignment! Your vertebrae are decompressed, and your reflexes are fully restored. This planet's gravity has nothing on you. The crew has absolute faith in your physical command!'`;
            }
            if (count >= 40) {
                return `🔥 STATUS: CHAMPION OF THE GALAXY (${count} rolls)<br><br>AI ORION: 'Phenomenal physical state! Your nervous system is hyper-tuned and ready for high-gravity combat. If the planet's Ruler tries to challenge us, they will face a physical powerhouse. Let's conquer this world!'`;
            }
        },
        nextKey: "final"
    },

    // CREDITS & TEASER
    final: {
        type: "text-only",
        steps: [
            "CHAPTER ONE CONCLUDED.",
            "You have proven that humanity is worthy of surviving among the stars. Caring for yourself saved your body, your mind, and your Space Ark.",
            "But the story is only beginning... The ship is surrounded. The roar of an unknown behemoth echoes from the crags. Your crewmate checks the charge on their blaster and gives you a confident wink.",
            "AI ORION's Voice: 'Commander, welcome to Chapter 2: Chronicles of the New Earth. To be continued next week...'"
        ],
        btnTexts: ["SUMMARIZE RESULTS", "GLANCE AT YOUR PARTNER", "PREPARE WEAPONS", "END OF CHAPTER ONE 🚀"],
        nextKey: null
    }
};

// ==========================================
// ЛОГИКА И СОСТОЯНИЕ ИГРЫ
// ==========================================

// Переменные состояния игры
let gameState = {
    currentDayKey: "intro",
    currentStepIndex: 0,
    unlockedDays: ["intro"],
    completedTasks: {}, // { day1: ["water", "food"], ... }
    workoutScores: {}   // { day1: 30, ... }
};

// Функция динамической генерации мерцающих звезд
function generateStarfield() {
    const starsContainer = document.querySelector(".stars");
    if (!starsContainer) return;
    starsContainer.innerHTML = "";
    const count = 45;
    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 2 + 0.5; // 0.5px до 2.5px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${Math.random() * 2 + 2}s`;
        starsContainer.appendChild(star);
    }
}

// Функции сохранения и загрузки прогресса (localStorage)
function saveProgress() {
    localStorage.setItem("spaceArk_gameState", JSON.stringify(gameState));
}

function loadProgress() {
    const saved = localStorage.getItem("spaceArk_gameState");
    if (saved) {
        try {
            gameState = JSON.parse(saved);
            if (!gameState.unlockedDays) gameState.unlockedDays = ["intro"];
            if (!gameState.completedTasks) gameState.completedTasks = {};
            if (!gameState.workoutScores) gameState.workoutScores = {};
            
            // Активируем все сохраненные и открытые дни в меню
            gameState.unlockedDays.forEach(dayKey => {
                const btn = document.getElementById(`btn-${dayKey}`);
                if (btn) {
                    btn.removeAttribute("disabled");
                    btn.classList.remove("locked");
                }
            });
        } catch (e) {
            console.error("Error loading progress:", e);
        }
    }
}

function confirmResetProgress() {
    if (confirm("Are you sure you want to reset the entire Ark mission and start over? All your current progress will be lost.")) {
        resetProgress();
    }
}

function resetProgress() {
    localStorage.removeItem("spaceArk_gameState");
    gameState = {
        currentDayKey: "intro",
        currentStepIndex: 0,
        unlockedDays: ["intro"],
        completedTasks: {},
        workoutScores: {}
    };
    window.location.reload();
}

// Расчет показателей жизнеобеспечения корабля (HUD)
function updateHUD() {
    const shipHUDEl = document.getElementById("shipHUD");
    if (!shipHUDEl) return;
    
    // Скрываем HUD на текстовых экранах вступления и финала
    if (gameState.currentDayKey === "intro" || gameState.currentDayKey === "final") {
        shipHUDEl.style.display = "none";
        return;
    } else {
        shipHUDEl.style.display = "grid";
    }
    
    let waterCompleted = 0, waterTotal = 0;
    let foodCompleted = 0, foodTotal = 0;
    let mindCompleted = 0, mindTotal = 0;
    
    const interactiveDays = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"];
    
    interactiveDays.forEach(dayKey => {
        if (gameState.unlockedDays.includes(dayKey)) {
            const dayData = storyData[dayKey];
            if (dayData && dayData.tasks) {
                dayData.tasks.forEach(task => {
                    const isCompleted = gameState.completedTasks[dayKey] && gameState.completedTasks[dayKey].includes(task.id);
                    if (task.id.startsWith("water")) {
                        waterTotal++;
                        if (isCompleted) waterCompleted++;
                    } else if (task.id.startsWith("food")) {
                        foodTotal++;
                        if (isCompleted) foodCompleted++;
                    } else {
                        mindTotal++;
                        if (isCompleted) mindCompleted++;
                    }
                });
            }
        }
    });
    
    const waterPercent = waterTotal > 0 ? Math.round((waterCompleted / waterTotal) * 100) : 0;
    const foodPercent = foodTotal > 0 ? Math.round((foodCompleted / foodTotal) * 100) : 0;
    const mindPercent = mindTotal > 0 ? Math.round((mindCompleted / mindTotal) * 100) : 0;
    
    // Энергия дюз корабля по интенсивности тренировок
    let totalEnergyScore = 0;
    let unlockedWorkoutDays = 0;
    
    interactiveDays.forEach(dayKey => {
        if (gameState.unlockedDays.includes(dayKey)) {
            unlockedWorkoutDays++;
            const score = gameState.workoutScores[dayKey] || 0;
            if (score > 0) {
                let dayPercent = 0;
                if (dayKey === "day1") {
                    if (score >= 50) dayPercent = 100;
                    else if (score >= 30) dayPercent = 75;
                    else dayPercent = 40;
                } else if (dayKey === "day2") {
                    if (score >= 30) dayPercent = 100;
                    else if (score >= 15) dayPercent = 75;
                    else dayPercent = 40;
                } else if (dayKey === "day3") {
                    if (score >= 40) dayPercent = 100;
                    else if (score >= 20) dayPercent = 75;
                    else dayPercent = 40;
                } else if (dayKey === "day4") {
                    if (score >= 80) dayPercent = 100;
                    else if (score >= 40) dayPercent = 75;
                    else dayPercent = 40;
                } else if (dayKey === "day5") {
                    if (score >= 30) dayPercent = 100;
                    else if (score >= 15) dayPercent = 75;
                    else dayPercent = 40;
                } else if (dayKey === "day6") {
                    if (score >= 25) dayPercent = 100;
                    else if (score >= 10) dayPercent = 75;
                    else dayPercent = 40;
                } else if (dayKey === "day7") {
                    if (score >= 85) dayPercent = 100;
                    else if (score >= 50) dayPercent = 75;
                    else dayPercent = 40;
                }
                totalEnergyScore += dayPercent;
            }
        }
    });
    
    const energyPercent = unlockedWorkoutDays > 0 ? Math.round(totalEnergyScore / unlockedWorkoutDays) : 0;
    
    updateBar("hud-water", "hud-water-txt", waterPercent);
    updateBar("hud-food", "hud-food-txt", foodPercent);
    updateBar("hud-mind", "hud-mind-txt", mindPercent);
    updateBar("hud-energy", "hud-energy-txt", energyPercent);
}

function updateBar(barId, txtId, percent) {
    const bar = document.getElementById(barId);
    const txt = document.getElementById(txtId);
    if (bar) bar.style.width = `${percent}%`;
    if (txt) txt.innerText = `${percent}%`;
}

// Функция отрисовки интерфейса
function renderCurrentState() {
    const storyTextEl = document.getElementById("story-text");
    const actionBtnEl = document.getElementById("action-btn");
    const dayData = storyData[gameState.currentDayKey];
    
    if (!dayData) return;
    
    storyTextEl.innerHTML = "";
    
    if (dayData.type === "text-only") {
        storyTextEl.innerHTML = `<p class="story-paragraph fade-in-up">${dayData.steps[gameState.currentStepIndex]}</p>`;
        actionBtnEl.style.display = "block";
        actionBtnEl.innerText = dayData.btnTexts[gameState.currentStepIndex];
    } 
    else if (dayData.type === "interactive-day") {
        actionBtnEl.style.display = "none";
        
        let html = `<div class="fade-in-up">`;
        html += `<h2>${dayData.title}</h2>`;
        html += `<p class="orion-voice">${dayData.introText}</p>`;
        
        // Чек-лист заданий
        html += `<div class="tasks-container">`;
        dayData.tasks.forEach((task, idx) => {
            const isChecked = gameState.completedTasks[gameState.currentDayKey] && gameState.completedTasks[gameState.currentDayKey].includes(task.id);
            const checkedAttr = isChecked ? "checked" : "";
            const juiceClass = isChecked ? "task-juice visible fade-in-up" : "task-juice";
            const juiceText = isChecked ? task.juice : "";
            
            html += `
                <div class="task-card">
                    <label class="checkbox-label">
                        <input type="checkbox" ${checkedAttr} onchange="toggleTask('${task.id}', ${idx})">
                        <span class="checkbox-custom"></span>
                        <span class="checkbox-text">${task.text}</span>
                    </label>
                    <div id="juice-${task.id}" class="${juiceClass}">${juiceText}</div>
                </div>
            `;
        });
        html += `</div>`;
        
        // Блок тренировки
        const savedScore = gameState.workoutScores[gameState.currentDayKey] || "";
        const resultClass = savedScore ? "workout-result visible fade-in-up" : "workout-result";
        let resultHtml = "";
        
        if (savedScore > 0) {
            resultHtml = dayData.calcResult(savedScore);
            if (dayData.nextKey && storyData[dayData.nextKey]) {
                resultHtml += `<br><button id="next-day-btn" class="action-btn fade-in-up" style="margin-top: 20px;" onclick="unlockAndGoToDay('${dayData.nextKey}')">PROCEED TO THE NEXT DAY</button>`;
            } else {
                resultHtml += `<br><button id="next-day-btn" class="action-btn fade-in-up" style="margin-top: 20px;" onclick="renderVictoryScreen()">CHAPTER FINAL: MISSION ACCOMPLISHED 🚀</button>`;
            }
        }
        
        html += `
            <div class="workout-section">
                <p>${dayData.workoutText}</p>
                <div class="input-group">
                    <input type="number" id="workout-input" min="0" placeholder="0" value="${savedScore}">
                    <button class="action-btn small" onclick="submitWorkoutResults()">UPLOAD DATA TO ON-BOARD AI</button>
                </div>
                <div id="workout-result" class="${resultClass}">${resultHtml}</div>
            </div>
        `;
        
        html += `</div>`;
        storyTextEl.innerHTML = html;
    }
}

// Перелистывание вводных текстов
function handleAction() {
    const dayData = storyData[gameState.currentDayKey];
    if (gameState.currentStepIndex < dayData.steps.length - 1) {
        gameState.currentStepIndex++;
        saveProgress();
        renderCurrentState();
    } else {
        if (dayData.nextKey) {
            unlockAndGoToDay(dayData.nextKey);
        } else {
            renderVictoryScreen();
        }
    }
}

// Мгновенный сочный отклик на галочки
function toggleTask(id, idx) {
    const juiceDiv = document.getElementById(`juice-${id}`);
    const dayData = storyData[gameState.currentDayKey];
    const checkbox = event.target;
    
    if (!gameState.completedTasks[gameState.currentDayKey]) {
        gameState.completedTasks[gameState.currentDayKey] = [];
    }
    
    if (checkbox.checked) {
        if (!gameState.completedTasks[gameState.currentDayKey].includes(id)) {
            gameState.completedTasks[gameState.currentDayKey].push(id);
        }
        juiceDiv.innerHTML = dayData.tasks[idx].juice;
        juiceDiv.className = "task-juice visible fade-in-up";
    } else {
        const index = gameState.completedTasks[gameState.currentDayKey].indexOf(id);
        if (index > -1) {
            gameState.completedTasks[gameState.currentDayKey].splice(index, 1);
        }
        juiceDiv.innerHTML = "";
        juiceDiv.className = "task-juice";
    }
    
    saveProgress();
    updateHUD();
}

// Расчет итогов тренировки дня
function submitWorkoutResults() {
    const input = document.getElementById("workout-input");
    const resultDiv = document.getElementById("workout-result");
    const dayData = storyData[gameState.currentDayKey];
    
    const score = parseInt(input.value) || 0;
    gameState.workoutScores[gameState.currentDayKey] = score;
    
    saveProgress();
    updateHUD();
    
    const resultText = dayData.calcResult(score);
    let html = resultText;
    
    if (score > 0) {
        if (dayData.nextKey && storyData[dayData.nextKey]) {
            html += `<br><button id="next-day-btn" class="action-btn fade-in-up" style="margin-top: 20px;" onclick="unlockAndGoToDay('${dayData.nextKey}')">PROCEED TO THE NEXT DAY</button>`;
        } else {
            html += `<br><button id="next-day-btn" class="action-btn fade-in-up" style="margin-top: 20px;" onclick="renderVictoryScreen()">CHAPTER FINAL: MISSION ACCOMPLISHED 🚀</button>`;
        }
    }
    
    resultDiv.innerHTML = html;
    resultDiv.className = "workout-result visible fade-in-up";
}

// Разблокировка дней в меню
function unlockAndGoToDay(dayKey) {
    if (dayKey) {
        if (!gameState.unlockedDays.includes(dayKey)) {
            gameState.unlockedDays.push(dayKey);
        }
        const nextBtn = document.getElementById(`btn-${dayKey}`);
        if (nextBtn) {
            nextBtn.removeAttribute("disabled");
            nextBtn.classList.remove("locked");
        }
        saveProgress();
        loadDay(dayKey);
    }
}

// Переключение вкладок вручную (если открыты)
function loadDay(dayKey) {
    gameState.currentDayKey = dayKey;
    gameState.currentStepIndex = 0;
    saveProgress();
    
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`btn-${dayKey}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    renderCurrentState();
    updateHUD();
}

// Экран триумфальной победы и напутствия
function renderVictoryScreen() {
    const storyTextEl = document.getElementById("story-text");
    const actionBtnEl = document.getElementById("action-btn");
    
    if (actionBtnEl) actionBtnEl.style.display = "none";
    
    // Скрываем HUD
    const shipHUDEl = document.getElementById("shipHUD");
    if (shipHUDEl) shipHUDEl.style.display = "none";
    
    // Считаем показатели за всю неделю
    let totalWater = 0;
    let totalFood = 0;
    let totalMind = 0;
    let totalWorkouts = 0;
    
    const days = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"];
    days.forEach(dayKey => {
        if (gameState.completedTasks[dayKey]) {
            gameState.completedTasks[dayKey].forEach(id => {
                if (id.startsWith("water")) totalWater++;
                else if (id.startsWith("food")) totalFood++;
                else totalMind++;
            });
        }
        if (gameState.workoutScores[dayKey] > 0) {
            totalWorkouts += gameState.workoutScores[dayKey];
        }
    });
    
    storyTextEl.innerHTML = `
        <div class="victory-screen fade-in-up">
            <h1 class="victory-title">MISSION ACCOMPLISHED!</h1>
            <div class="victory-message">
                You have successfully completed this mission! New adventures await you on an unknown planet in the near future. Do not stop and keep taking care of yourself.
            </div>
            
            <h2>VESSEL SURVIVAL STATISTICS:</h2>
            <div class="victory-stats">
                <div class="stat-box">
                    <span class="stat-name">💧 Water purified</span>
                    <span class="stat-val">${totalWater * 300} ml</span>
                </div>
                <div class="stat-box">
                    <span class="stat-name">🍏 Bio-rations consumed</span>
                    <span class="stat-val">${totalFood} pcs</span>
                </div>
                <div class="stat-box">
                    <span class="stat-name">🤍 Mental shield</span>
                    <span class="stat-val">${totalMind} sessions</span>
                </div>
                <div class="stat-box">
                    <span class="stat-name">🏋️ Total repetitions</span>
                    <span class="stat-val">${totalWorkouts} reps</span>
                </div>
            </div>
            
            <button class="action-btn" onclick="confirmResetProgress()" style="margin-top: 10px;">🔄 START A NEW MISSION</button>
        </div>
    `;
}

// Инициализация при загрузке документа
document.addEventListener("DOMContentLoaded", () => {
    generateStarfield();
    loadProgress();
    
    // Проверяем, закончил ли игрок всю игру до перезагрузки
    if (gameState.currentDayKey === "final" && gameState.currentStepIndex >= storyData.final.steps.length - 1) {
        renderVictoryScreen();
    } else {
        // Устанавливаем активную вкладку из сохранения
        document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
        const activeBtn = document.getElementById(`btn-${gameState.currentDayKey}`);
        if (activeBtn) activeBtn.classList.add("active");
        
        renderCurrentState();
        updateHUD();
    }
});
