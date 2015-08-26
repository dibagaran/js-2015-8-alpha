$(function () {

    game.render = function (tank) {
        $('#stage').css('background-position', -tank.position.x * 3);
        $('#tank').css('left', tank.position.x);
        for (var i = 0; i < tank.bullets.length; i++)
            $('#' + tank.bullets[i].id).css('left', tank.bullets[i].position.x);
    };

    game.directionChanged = function (direction) {
        $('#tank').css({
            'transform': 'scale(' + direction + ',1)'
        });
    };

    game.shotFired = function (bullet) {
        $('<div></div>')
            .attr('id', bullet.id)
            .addClass('bullet')
            .css('left', bullet.position.x)
            .appendTo('#stage');
    };

    game.bulletDestroyed = function (bulletId) {
        $('#' + bulletId).remove();
    }

    $('<div/>').attr('id', 'stage').appendTo('body');
    $('<img/>').attr({ id: 'tank', src: 'images/tank.gif' }).appendTo('#stage');
    $('<h3/>').html('Click on the stage to fire shells<span>Use a modern web browser like Google Chrome</span>').appendTo('#stage');

    var centerStage = function () {
        $('#stage').css({
            'margin': ($(window).height() / 2 - $('#stage').height() / 2) + 'px auto'
        });
    };

    $(window).resize(centerStage);
    centerStage();

    $('#stage').click(function () {
        game.fire();
    });

    (function loop() {
        game.update();
        requestAnimationFrame(loop);
    })();
});