$(function(){
 
    var houseVoters  = $.merge(houseList, previousHouseList);
    var senateVoters = $.merge(senateList, previousSenateList);
    var voters;
    var houseResult;
    var senateResult;
    var output;

    $("#submitBtn").on('click', function () {

        houseVotes(); 
        senateVotes(); 

        var houseCount  = houseResult.split(/(<\/b>)/).length - 1;
        var senateCount = senateResult.split(/(<\/b>)/).length - 1;

        if( houseCount > senateCount ){
            $("#count-results").html(houseResult);
        } else{
            $("#count-results").html(senateResult);
        }

    });

    function houseVotes()
    {

        voters = [];

        $.each( houseVoters, function(index, val){
            voters.push(val); 
        });

        sortVotes();
        houseResult = output; 
    
    }

    function senateVotes()
    {

        voters = [];

        $.each( senateVoters, function(index, val){
            voters.push(val); 
        });

        sortVotes();
        senateResult = output; 
    
    } 

    function sortVotes()
    {

        var input       = $("#voters").val().replace(/,|--|\.|(\r\n|\n|\r)/g, " "),
            input       = input.replace(/\s[(]/g, "("),
            input       = input.replace(/\s[A-Z]\s/g, ""),
            input       = input.replace(/Mr\s/g, "Mr."),
            input       = input.replace(/Mr\.\s/g, "Mr.");
            
        var input_array = input.split(" ");

        $.each(voters, function (i, vals) { 
            $.each(input_array, function (j, Val) { 

                if( input_array[j].indexOf('(') > 0 ) { 

                    if( Val.match(vals.District) && Val.match(vals.Last) ) {

                        if( vals.Party == 'R' ){
                            input_array[j] = "<b style='color:red;'>" + Val + ',' + "</b>";       
                        } else {
                            input_array[j] = "<b style='color:blue;'>" + Val + ',' + "</b>";       
                        }

                    }

                } else{ 

                    if( Val == vals.Last ) {

                        if( vals.Party == 'R' ){
                            input_array[j] = "<b style='color:red;'>" + Val + ',' + "</b>";                        
                        } else {
                            input_array[j] = "<b style='color:blue;'>" + Val + ',' + "</b>";                      
                        }

                    }
                }
   
            });
        });

        output = input_array.join(" "),
        output = output.replace(/[(]/g, " ("),
        output = output.replace(/Mr\./g, "Mr. "),
        output = output.replace(/Yeas/g, "<br><br> <b>Yeas:</b> <br>"),
        output = output.replace(/Nays/g, "<br><br> <b>Nays:</b> <br>"),
        output = output.replace(/Absent/g, "<br><br> <b>Absent</b>"),
        output = output.replace(/DISCLAIMER/g, "<br><br> <b>DISCLAIMER</b>");  

    }    

});