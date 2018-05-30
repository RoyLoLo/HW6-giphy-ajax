var animalArray = ["Dire Wolf", "Dragon","Pheonix", "Red Panda", "Capybara", "Sugar Glider"]

function addbutton(){
    //clears buttons if new buttons are added
    $("#animalButtonsGoHere").empty();
    for (i=0; i<animalArray.length; i++){
    var animalButton = $("<button>");
    animalButton.attr("data-animalName",animalArray[i]);
    animalButton.attr("id", "animal");
    animalButton.text(animalArray[i]);

    $("#animalButtonsGoHere").append(animalButton);
    }//end of i for loop
}//end of addbutton function

addbutton();

$("#addAnimal").on("click", function(){
    event.preventDefault();
    var newanimal = $("#animalInput").val();
    if (animalArray.indexOf(newanimal) === -1){
    animalArray.push(newanimal);
    addbutton();
    };//end of if that will only add button if animal has not been added already
})//end of click event for add animals button

var results;

$(document).on("click","button",function(){
    var animal = $(this).attr("data-animalName");   
    var limit = 3;
    $.ajax({
        url : "http://api.giphy.com/v1/gifs/search?api_key=WHtWS1h7uRkU7mtHp9SUkLUTw7pRzAQ9&limit=" + limit + "&q=" + animal,
        method : "GET"
    }).then(function(response){
            results = response.data;
            //   This for loop adds the images
            for (j=0; j , results.length; j++){
            var animalDiv = $("<div>");
            var animalName = $("<h3>").text("This is the: " +animal);
            var animalImage = $("<img>");
            animalImage.attr("state", "still")
            animalImage.attr("src", results[j].images.original_still.url );
            animalDiv.append(animalName);
            animalDiv.append(animalImage);
            $("#animalGIFsGoHere").prepend(animalDiv);
            }//end of j for loop
    })//end of ajax
})//end of click event for animal buttons

$("img").on("click", function(){

    if($(this).attr("data-state" === "still")){
    //set attr to results[].original.url and 
    //$(this).attr("data-state", "animate");
    } //end if
    else{
    //set attr to results[].original_still.url
    //$(this).attr("data-state", "still");
    }; //end else
}) //end of click that toggles still to animated

