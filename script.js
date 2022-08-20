let rpsData = [];
let chdData = [];
let dataFinal = [];

function calcUmbra(firstDmg, maxChd, rps) {
   let critDmg = maxChd / 100 + 1;
   let dmg = firstDmg * critDmg;
   let dps = dmg * rps;
   return dps;
}

let rps = 4.5;
let chd = 225;

console.log(`${calcUmbra(100, chd, rps).toFixed(1)} DPS at ${chd}CHD at ${rps}RPS at 0 sec`);
for (let i = 0; i < 25; i++) {
   rps = rps - 0.06;
   rpsData.push(rps.toFixed(2));

   chd = chd - 4;
   chdData.push(chd);

   let dpsFinal = calcUmbra(100, chdData[i], rpsData[i]).toFixed(1);
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
