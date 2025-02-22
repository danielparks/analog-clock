window.addEventListener('DOMContentLoaded', () => {
    var tickSpan = '<span></span>'.repeat(60);
    document.getElementsByClassName('ticks')[0].innerHTML = tickSpan;

    var second_hand = document.getElementById("second");
    var subsecond_hand = document.getElementById("subsecond");

    function display(tick) {
      second_hand.style.transform = "rotate(" + (360 * tick/3600 - 180) + "deg)";
      subsecond_hand.style.transform = "rotate(" + (360 * tick/60 - 180) + "deg)";
    }

    var tick = 0;
    var main = document.getElementsByTagName("main")[0];
    main.addEventListener("click", () => {
      tick++;
      display(tick);
    });

    display(0);
});
