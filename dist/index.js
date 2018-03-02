'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var kana = [];

$(document).ready(function () {
    // 事件绑定
    $('#setting>i').click(function () {
        $('form[name=option]').slideToggle(200);
    });
    $('.btn-pronounce').click(function () {
        $('#pronounce')[0].play();
    });
    $('.btn-tip').click(function () {
        $('.roman').css('visibility', 'visible');
        $('.other-kana').css('visibility', 'visible');
    });
    $('.btn-next').click(function () {
        setKana();
    });
    $('input[name=yinjie]').change(function () {
        getKanaCollection();
    });

    // init
    var json = '';
    jQuery.getJSON('src/data.json', function (data) {
        json = data;
        getKanaCollection();
    });

    function getKanaCollection() {
        kana = [];
        $('input[name=yinjie]').each(function (index, element) {
            if (element.checked) {
                var _kana;

                (_kana = kana).push.apply(_kana, _toConsumableArray(json[element.value]));
            }
        });
        setKana();
    }

    function setKana() {
        var index = Math.floor(Math.random() * kana.length);
        var nextKana = kana[index];
        var isHiragana = Boolean(Math.random() * 2);
        if (isHiragana) {
            $('.kana>span').text(nextKana.hiragana);
            $('.other-kana').text(nextKana.katakana);
        } else {
            $('.kana>span').text(nextKana.katakana);
            $('.other-kana').text(nextKana.hiragana);
        }
        $('.roman').text(nextKana.roman);
        $('#pronounce').attr('src', 'assets/pronounce/' + nextKana.pronounce);

        $('.roman').css('visibility', 'hidden');
        $('.other-kana').css('visibility', 'hidden');
    }
});