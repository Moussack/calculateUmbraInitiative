function calcCHD(currentCHD) {
   let CHD_100_stacks = currentCHD + 100;
   console.log(`Your Current Crit Hit Damage = ${currentCHD}%`);
   console.log(`Your Crit Hit Damage @100 stacks = ${CHD_100_stacks}%`);
   return CHD_100_stacks;
}

function calcRps(current_rpm) {
   let RPM_100_stacks = current_rpm * 1.5;
   let roundPerSecond = RPM_100_stacks / 60;
   console.log(`Your Current Weapon's RPS @100 stacks = ${roundPerSecond} round per sec`);
   return roundPerSecond;
}

function showRpm(yourRpm) {
   let yourRpm100 = yourRpm * 1.5;
   let data = [];
   console.log(`Your Current Weapon's RPM = ${yourRpm} rounds per minute`);
   console.log(`Your RPM @100 stacks = ${yourRpm100} rounds per minute`);
   for (let i = 0; i < 25; i++) {
      yourRpm100 = yourRpm100 - 3.6; // 3,6 is 2% rpm loss every sec
      data.push(Number(yourRpm100.toFixed(1)));
   }

   return data;
}

function calcUmbra(weaponDmg, totalCHD, totalRPS) {
   let critDmg = totalCHD / 100 + 1;
   let totalDmg = weaponDmg * critDmg;
   let dps = totalDmg * totalRPS;
   return dps;
}

//  ------------------------LOGIC--------------------------------
let rpsData = [];
let chdData = [];
let dataFinal = [];
let rpm = showRpm(180); // <-- ENTER YOUR CURRENT WEAPON's RPM HERE
let rps = calcRps(180); // <-- ENTER YOUR CURRENT WEAPON's RPM HERE
let chd = calcCHD(125); // <-- ENTER YOUR CURRENT CHD HERE
let wpnDmg = 1200; // <-- ENTER YOUR WEAPON DMG HERE
console.log(`Your Current Weapon's dmg = ${wpnDmg}`);
console.log(' ');
console.log(`------------------------DPS LOSS PER SECOND----------------------------------`);

// Output
console.log(
   `${calcUmbra(wpnDmg, chd, rps).toLocaleString('en-US')} DPS(${(calcUmbra(wpnDmg, chd, rps) / rps).toLocaleString(
      'en-US'
   )} dmg per bullet) at ${chd}% CHD with ${rps} RPS(${270} RPM) at 0 sec`
);
for (let i = 0; i < 25; i++) {
   rps = rps - 0.06; // 0.06 is 2% rpm loss every sec
   rpsData.push(Number(rps.toFixed(1)));

   chd = chd - 4; // 4 is 4 stackk loss every sec
   chdData.push(chd);

   let dpsFinal = Number(calcUmbra(wpnDmg, chdData[i], rpsData[i]).toFixed(1));
   dataFinal.push(dpsFinal);

   console.log(
      `${dataFinal[i].toLocaleString('en-US')} DPS(${(dataFinal[i] / rpsData[i]).toLocaleString(
         'en-US'
      )} dmg per bullet) at ${chdData[i]}% CHD with ${rpsData[i]} RPS(${rpm[i]} RPM) at ${i + 1}sec`
   );
}

// calc dps at certain secs
let dpsSecs = 0;
for (let i = 0; i < 12; i++) {
   dpsSecs = dpsSecs + Number(dataFinal[i]);
}

//console.log(Number(dpsSecs.toFixed(2)));

/* function calcRpm(rpm) {
   let finalRpm = rpm * 0.5 + rpm;
   let rps = finalRpm / 60;
   return rps;
} */

// 4.5 = 270 rpm

//console.log(calcUmbra(100, 225, 4.5).toFixed(1));

//DONT DELETE FOR COMPARISON
// console.log(calcUmbra(100, 221, 4.44).toFixed(1));
// console.log(calcUmbra(100, 217, 4.38).toFixed(1));
// console.log(calcUmbra(100, 213, 4.32).toFixed(1));
// console.log(calcUmbra(100, 209, 4.26).toFixed(1));

// notes : if you confuser, this is the tips, split to one function like below and then merge the logic to one function
/* let a = 4.5;
for (let i = 0; i < 25; i++) {
   a = a - 0.06;
   rpsData.push(a.toFixed(2));
}

let b = 225;
for (let i = 0; i < 25; i++) {
   b = b - 4;
   chdData.push(b);
} */
