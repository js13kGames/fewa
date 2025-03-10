var get = function(id) {
    return document.getElementById(id);
},
create = function(n) {
    return document.createElement(n);
};

var game = {
    ww: window.innerWidth,
    wh: window.innerHeight,
    columns: 8,
    gap: 2,
    score: 0,
    speed: 0.3,
    gravity: 0.35,
    paused: false,
    hud: {
        level: get("lv"),
        score: get('sc')
    },
    cnt: get("cnt"),
    msg: get("msg"),
    mnu: get("mnu"),
    hlp: get("hlp"),
    crd: get("crd"),
    re: get("re"),
    ng: get("ng"),
    hl: get("hl"),
    cr: get("cr"),
    f: get("f"),
    stage: get("c"),
    bg: get('b'),
    bgs: [{
        b: get("b1"),
        c: 0
    }, {
        b: get("b2"),
        c: 0
    }, {
        b: get("b3"),
        c: 0
    }],
    moveBg: true,
    rumble: {
        body: get("r"),
        x: 0,
        y: 0,
        level: 0,
        decay: 0.4
    },
    starAmount: 400,
    starColors: ["#ffffff", "#ffe9c4", "#d4fbff"],
    elements: {
        FIRE: {
            color: '#ff3824',
            latency: 50,
            against: {
                FIRE: 200,
                EARTH: 20,
                WATER: 10,
                AIR: 50
            },
            bricks: {
                empty: {
                    energy: 100
                },
                filled: {
                    energy: 250
                },
                special: {
                    energy: 400
                }
            },
            desc: "The Fire element, most effective against fire bricks, but least effective against water bricks.",
            spec: "Fire special brick explodes the whole column of bricks."
        },
        EARTH: {
            color: '#44db5e',
            latency: 80,
            against: {
                FIRE: 50,
                EARTH: 200,
                WATER: 20,
                AIR: 10
            },
            bricks: {
                empty: {
                    energy: 100
                },
                filled: {
                    energy: 250
                },
                special: {
                    energy: 400
                }
            },
            desc: "The Earth element, most effective against earth bricks, but least effective against air bricks.",
            spec: "Earth special brick explodes surrounding bricks."
        },
        WATER: {
            color: '#54c7fc',
            latency: 70,
            against: {
                FIRE: 10,
                EARTH: 20,
                WATER: 200,
                AIR: 50
            },
            bricks: {
                empty: {
                    energy: 100
                },
                filled: {
                    energy: 250
                },
                special: {
                    energy: 400
                }
            },
            desc: "The Water element, most effective against water bricks, but least effective against fire bricks.",
            spec: "Water special brick explodes the whole row of bricks."
        },
        AIR: {
            color: '#ffcd00',
            latency: 60,
            against: {
                FIRE: 50,
                EARTH: 10,
                WATER: 20,
                AIR: 200
            },
            bricks: {
                empty: {
                    energy: 100
                },
                filled: {
                    energy: 250
                },
                special: {
                    energy: 400
                }
            },
            desc: "The Air element, most effective against air bricks, but least effective against earth bricks.",
            spec: "Air special brick explodes all the weak(stroked) air bricks."
        }
    }
};

game.ctx = game.stage.getContext('2d');
game.bg.ctx = game.bg.getContext('2d');
