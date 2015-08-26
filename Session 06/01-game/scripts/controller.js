var game = {
    index: 0,
    update: function () {
        stage.tank.position.x += stage.tank.speed.x;

        if (stage.tank.position.x > stage.size.width - stage.tank.size.width) {
            stage.tank.position.x = stage.size.width - stage.tank.size.width;
            game.switchDirection();
        }

        if (stage.tank.position.x < 0) {
            stage.tank.position.x = 0;
            game.switchDirection();
        }

        for (var i = 0; i < stage.tank.bullets.length; i++) {
            var bullet = stage.tank.bullets[i];
            bullet.position.x += bullet.speed.x;

            if (bullet.position.x > stage.size.width || bullet.position.x < -15) {
                if (typeof game.bulletDestroyed === 'function')
                    game.bulletDestroyed(bullet.id);
                stage.tank.bullets.splice(i, 1);
            }
        }

        if (typeof game.render === 'function')
            game.render(stage.tank);
    },
    switchDirection: function () {
        stage.tank.speed.x *= -1;
        if (typeof game.directionChanged === 'function')
            game.directionChanged(stage.tank.speed.x > 0 ? 1 : -1);
    },
    fire: function () {
        var bullet = {
            id: 'bullet-' + game.index++,
            position: {
                x: stage.tank.speed.x > 0 ? stage.tank.position.x + stage.tank.size.width - 25 : stage.tank.position.x + 15
            },
            speed: {
                x: stage.tank.speed.x * 10
            }
        };
        stage.tank.bullets.push(bullet);
        if (typeof game.shotFired === 'function')
            game.shotFired(bullet);
    }
};