/****************************************************************************************
 * 012 - Манипулирование классами
 * --------------------------------------------------------------------------------------
 * PhpStorm 2023.1
 * jQuery 3.7
 * HTML, CSS, JavaScript
 * --------------------------------------------------------------------------------------
 * Изучение библиотек jQuery
 * Gosha Dudar (2015)
 * https://www.youtube.com/watch?v=458mWXnWSmA&list=PL0lO_mIqDDFXQk_TTlSO7y7J1l5e-RMgi
 *
 ****************************************************************************************
 * Writing & Modification by sgiman @ 2023-09
 */

let div = prompt("1 или 2?")
while (div != 1 && div != 2) {
    alert("Пожалуйста, ввeдите число 1 или 2")
    div = prompt("1 или 2?")
}

$("#div").attr("class", "div_" + div)
alert ($("#div").get(0).className)
