// 01

const now = new Date();

console.log(now);
console.log(typeof now);

// year month day times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());
//timestamps
 console.log('timestamp:', now.getTime());
 // data dtrings
 console.log(now.toDateString());
 console.log(now.toTimeString());
 console.log(now.toLocalestring());

 // 02

 const before = new Date('beburary 1 2014 7:234:90');
 const now = new Date();

 //

 const diff = now.getTime() - before.getTime();
 console.log(diff);


 const mins = Math.round(diff / 1000 / 60);
 const Hours = Math.round(mins / 60);
 const Days = Math.round(hours / 24);

 console.log( mins, hours, days);

 console.log(`the blog was written ${days} days ago`)

 // converting timestamp

 const timestamp = 1115555;
 console.log(new Date(timestamp));

 // 03

const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();

    const m = now.getMinutes();

    const s = now.getSeconds();

    const html = `
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
    `;

    clock.innerHTML = html;
}

setInterval(tick, 1000);

// 04 


const now = new Date();

// formatiting options
console.log(dateFns.format (now, 'YYYY'));
console.log(dateFns.format (now, 'MMM'));
console.log(dateFns.format (now, 'dddd'));
console.log(dateFns.format (now, 'do'));
console.log(dateFns.format (now, 'dddd DO MMM YYYY'));

// comparing dates
const before = new Date('Februray 1 2041 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

