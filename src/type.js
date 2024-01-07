'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 50,
}) //hamster's
.move(-9)
.type('Amazing ') //Amazing hamster's
.pause(1000) //1초 쉬기
.move(null, {to: 'END'})
.delete()
.type('cute hamster&#39;s')
.pause(1000)
.move(-9)
.delete()
.type('mad ')
.pause(1000)
.move(null, {to: 'END'})

.go();