function calcCHD(currentCHD) {
   let CHD_100_stacks = currentCHD + 100;
   console.log(`Your Crit Hit Damage @100 stacks = ${CHD_100_stacks}%`);
   return CHD_100_stacks;
}

function calcRpm(rpm) {
   let RPM_100_stacks = rpm * 1.5;
   let roundPerSecond = RPM_100_stacks / 60;
   console.log(`Your Round Per Second @100 stacks = ${roundPerSecond} Rps`);
   return roundPerSecond;
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

let rps = calcRpm(180); // <-- ENTER YOUR CURRENT WEAPON's RPM HERE
let chd = calcCHD(125); // <-- ENTER YOUR CURRENT CHD HERE
let wpnDmg = 100; // <-- ENTER YOUR WEAPON DMG HERE

// Output
console.log(`${calcUmbra(wpnDmg, chd, rps).toFixed(1)} DPS at ${chd}CHD at ${rps}RPS at 0 sec`);
for (let i = 0; i < 25; i++) {
   rps = rps - 0.06;
   rpsData.push(rps.toFixed(2));

   chd = chd - 4;
   chdData.push(chd);

   let dpsFinal = calcUmbra(wpnDmg, chdData[i], rpsData[i]).toFixed(1);
   dataFinal.push(dpsFinal);
   console.log(`${dataFinal[i]} DPS at ${chdData[i]}CHD at ${rpsData[i]}RPS at ${i + 1}sec`);
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
