console.log("$");
$(document).ready(function(){
    console.log("Main.js");
    var imgsArr = $(".project");
    var linkArr = ["https://github.com/MananVPatel/Court-Counter-App", "https://github.com/MananVPatel/Classic-Sanskrit-App", "https://github.com/MananVPatel/Lao-Ordering-App", "https://github.com/allisonsteinmetz/JAM", "https://github.com/MananVPatel/PebbleApp", "", "https://github.com/MananVPatel/Trivia-Game", "https://github.com/MananVPatel/Path-Finder-A-Star-Heuristic-Search-", "https://github.com/MananVPatel/Gomoku-Minimax-Algorithm-"];
    console.log(imgsArr);
    
    imgsArr.each(function(key, val){
        console.log(val);
        $(val).click(function(e){
            console.log("Clicked Image");
            e.preventDefault();
            var cls = val.className;
            var clsNum = cls.match(/\d/g);
            clsNum = clsNum.join("");
            
            switch(parseInt(clsNum)){
                case 0: 
                    window.open(linkArr[0], '_blank');
                    break;
                case 1:
                    window.open(linkArr[1], '_blank');
                    break;
                case 2:
                    window.open(linkArr[2], '_blank');
                    break;
                case 3:
                    window.open(linkArr[3], '_blank');
                    break;
                case 4:
                    window.open(linkArr[4], '_blank');
                    break;
                case 5:
                    window.open(linkArr[5], '_blank');
                    break;
                case 6:
                    window.open(linkArr[6], '_blank');
                    break;
                case 7:
                    window.open(linkArr[7], '_blank');
                    break;
                case 8:
                    window.open(linkArr[8], '_blank');
                    break;
            }
            

        });
    });
    console.log(imgsArr);
});