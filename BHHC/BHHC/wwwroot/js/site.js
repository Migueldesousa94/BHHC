//Miguel De Sousa
//5-27-19
//Javascript/Jquery BHHC project
//site.js

var list = {}; 

function newList() {
    list.name = $("#listName").val();                       //Name new list (from user input)
    list.items = new Array();                               //Create an array for the new list
    $("#newListName").html(list.name);                      //
    $("#newListul").empty();
    $("#originalList").hide();
    $("#newListt").show();

}

function addItem() {
    var newItem = {};
    newItem.name = $("#newItemName").val();
    list.items.push(newItem);
    console.info(list);
    showItems();
}

function showItems() {
    var $list = $("#newListul").empty();
    for (var i = 0; i < list.items.length; i++) {
        var curItem = list.items[i];
        var $li = $("<li>").html(curItem.name);
        $li.appendTo($list);
    }
}

$(document).ready(function () {         //Test if JQuery is functional
    console.info("functional")
});