/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $("#dashboard").on('submit',function (e) {

        e.preventDefault();
        var email= $('#input[name="email"]').val();
        alert(email);
        console.log(email);
    });
});