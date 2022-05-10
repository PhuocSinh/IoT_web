const firebaseConfig = {
    apiKey: 'AIzaSyAWdFtPTCxrXYaBx_kykYQraMy4NE06FG4',
    authDomain: 'sdj-11.firebaseapp.com',
    projectId: 'sdj-11',
    storageBucket: 'sdj-11.appspot.com',
    messagingSenderId: '865797523763',
    appId: '1:865797523763:web:dce47ab881146607abd646',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = firebase.database();

const on1 = document.querySelector('.room1 .led01 .on');
const on2 = document.querySelector('.room1 .led02 .on');
const on3 = document.querySelector('.room1 .led03 .on');
const off1 = document.querySelector('.room1 .led01 .off');
const off2 = document.querySelector('.room1 .led02 .off');
const off3 = document.querySelector('.room1 .led03 .off');
const on4 = document.querySelector('.room2 .led01 .on');
const on5 = document.querySelector('.room2 .led02 .on');
const on6 = document.querySelector('.room2 .led03 .on');
const off4 = document.querySelector('.room2 .led01 .off');
const off5 = document.querySelector('.room2 .led02 .off');
const off6 = document.querySelector('.room2 .led03 .off');
const temp1 = document.querySelector('.room1 .temp span');
const temp2 = document.querySelector('.room2 .temp span');
const humi1 = document.querySelector('.room1 .humi span');
const humi2 = document.querySelector('.room2 .humi span');
console.log(temp1);

const led01 = document.querySelector('.room1 .led01 img');
const led02 = document.querySelector('.room1 .led02 img');
const led03 = document.querySelector('.room1 .led03 img');
const led04 = document.querySelector('.room2 .led01 img');
const led05 = document.querySelector('.room2 .led02 img');
const led06 = document.querySelector('.room2 .led03 img');

on1.onclick = function () {
    app.ref('/ROOM01').update({
        led01: '1',
    });
};
off1.onclick = function () {
    app.ref('/ROOM01').update({
        led01: '0',
    });
};
app.ref('/ROOM01/led01').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        if (ss == '1') {
            led01.src = './img/lamp_on.png';
        } else {
            led01.src = './img/lamp_off.png';
        }
    } else {
        console.log('no data available!');
    }
});

on2.onclick = function () {
    app.ref('/ROOM01').update({
        led02: '1',
    });
};
off2.onclick = function () {
    app.ref('/ROOM01').update({
        led02: '0',
    });
};
app.ref('/ROOM01/led02').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        if (ss == '1') {
            led02.src = './img/lamp_on.png';
        } else {
            led02.src = './img/lamp_off.png';
        }
    } else {
        console.log('no data available!');
    }
});

on3.onclick = function () {
    app.ref('/ROOM01').update({
        led03: '1',
    });
};
off3.onclick = function () {
    app.ref('/ROOM01').update({
        led03: '0',
    });
};
app.ref('/ROOM01/led03').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        if (ss == '1') {
            led03.src = './img/lamp_on.png';
        } else {
            led03.src = './img/lamp_off.png';
        }
    } else {
        console.log('no data available!');
    }
});

on4.onclick = function () {
    app.ref('/ROOM02').update({
        led01: '1',
    });
};
off4.onclick = function () {
    app.ref('/ROOM02').update({
        led01: '0',
    });
};
app.ref('/ROOM02/led01').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        if (ss == '1') {
            led04.src = './img/lamp_on.png';
        } else {
            led04.src = './img/lamp_off.png';
        }
    } else {
        console.log('no data available!');
    }
});

on5.onclick = function () {
    app.ref('/ROOM02').update({
        led02: '1',
    });
};
off5.onclick = function () {
    app.ref('/ROOM02').update({
        led02: '0',
    });
};
app.ref('/ROOM02/led02').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        if (ss == '1') {
            led05.src = './img/lamp_on.png';
        } else {
            led05.src = './img/lamp_off.png';
        }
    } else {
        console.log('no data available!');
    }
});

on6.onclick = function () {
    app.ref('/ROOM02').update({
        led03: '1',
    });
};
off6.onclick = function () {
    app.ref('/ROOM02').update({
        led03: '0',
    });
};
app.ref('/ROOM02/led03').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        if (ss == '1') {
            led06.src = './img/lamp_on.png';
        } else {
            led06.src = './img/lamp_off.png';
        }
    } else {
        console.log('no data available!');
    }
});

app.ref('/ROOM01/temp').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        temp1.innerHTML = ss;
    } else {
        console.log('no data available!');
    }
});
app.ref('/ROOM01/humi').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        humi1.innerHTML = ss;
    } else {
        console.log('no data available!');
    }
});

app.ref('/ROOM02/temp').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        temp2.innerHTML = ss;
    } else {
        console.log('no data available!');
    }
});
app.ref('/ROOM02/humi').on('value', function (snapshot) {
    if (snapshot.exists()) {
        const ss = snapshot.val();
        console.log(ss);
        humi2.innerHTML = ss;
    } else {
        console.log('no data available!');
    }
});
