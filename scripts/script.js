// JavaScript to Apply Drag and Drop

$(document).ready(function() {
    const pieces = $(".piece");
    const boardSpace1 = $("#1");

    for (piece of pieces) {
        $(".piece").on("dragstart", function(event) {
            let selectedPiece = event.target;

            $(".board-space").on("dragover", function(event) {
                event.preventDefault();
            });

            $(".board-space").on("drop", function(event) {
                boardSpace1.append(selectedPiece);
                selectedPiece = null;
            });
        });
    }
});