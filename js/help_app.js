


function getClass(classN) {
    var allE = document.getElementsByTagName('*');

    var oArray = [];

    for(var i = 0; i < allE.length; i++){
        if(allE[i].className.indexOf(classN) != -1){
            oArray.push(allE[i]);
        }
    }

    return oArray;

}

var aClass = getClass('help-content');
var oShowElemnt = getClass('oShowElemnt');


for(var i = 0; i < aClass.length; i++){
    aClass[i].onclick = function (){
        for(var j = 0; j < aClass.length; j++){
            if(this == aClass[j]){
                aClass[j].className = 'help-content hover_style';
                oShowElemnt[j].style.display = 'block';
            }else{
                aClass[j].className = 'help-content';
                oShowElemnt[j].style.display = 'none';
            }
        }
    }
}




$("#normal-input").change(function(){
    if ($(this).val() == 0){
        $("#normal").html($(this).val()*1000*0.08);
    }
    if ($(this).val() == 1){
        $("#normal").html($(this).val()*1000*0.08);
    }
    if ($(this).val() == 2){
        $("#normal").html($(this).val()*1000*0.075);
    }
    if ($(this).val() == 3){
        $("#normal").html($(this).val()*1000*0.07);
    }
    if ($(this).val() == 4){
        $("#normal").html($(this).val()*1000*0.065);
    }
    if ($(this).val() >= 5){
        $("#normal").html($(this).val()*1000*0.06);
    }
});
$("#senior-input").change(function(){
    if ($(this).val() == 0){
        $("#senior").html(1280 + $(this).val()*1000*0.08);
    }
    if ($(this).val() == 1){
        $("#senior").html(1280 + $(this).val()*1000*0.08);
    }
    if ($(this).val() == 2){
        $("#senior").html(1280 + $(this).val()*1000*0.075);
    }
    if ($(this).val() == 3){
        $("#senior").html(1280 + $(this).val()*1000*0.07);
    }
    if ($(this).val() == 4){
        $("#senior").html(1280 + $(this).val()*1000*0.065);
    }
    if ($(this).val() >= 5){
        $("#senior").html(1280 + $(this).val()*1000*0.06);
    }
});
$("#flagship-input").change(function(){
    if ($(this).val() == 0){
        $("#flagship").html(2680 + $(this).val()*1000*0.08);
    }
    if ($(this).val() == 1){
        $("#flagship").html(2680 + $(this).val()*1000*0.08);
    }
    if ($(this).val() == 2){
        $("#flagship").html(2680 + $(this).val()*1000*0.075);
    }
    if ($(this).val() == 3){
        $("#flagship").html(2680 + $(this).val()*1000*0.07);
    }
    if ($(this).val() == 4){
        $("#flagship").html(2680 + $(this).val()*1000*0.065);
    }
    if ($(this).val() >= 5){
        $("#flagship").html(2680 + $(this).val()*1000*0.06);
    }
});
