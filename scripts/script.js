// JavaScript to Apply Drag and Drop

$(document).ready(function() {

    let selectedPiece = null;

    $(".piece").on("dragstart", function(event) {
        selectedPiece = event.target;

        $(".board-space").on("dragover", function(event) {
            event.preventDefault();
        });

        $(".board-space").on("drop", function(event) {
            event.preventDefault();
            if (selectedPiece) {
                let $this = $(this);
                if ($this.children().length === 0) {
                    $(this).append(selectedPiece);
                }
                selectedPiece = null;
            }
        });
    });
});