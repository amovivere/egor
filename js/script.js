newFunction();

function newFunction() {
    jQuery(function ($) {
        $(".block").click(function () {
            $(".hide", this).toggle(200);
        });
    });
}
//Что бы блок закрывался когда кликают вне его. Подвешивать только на 1 элемент
// 	$(document).mouseup(function (e) {
//     var container = $(".block");
//     if (container.has(e.target).length === 0){
//         container.toggle();
//     }
// });