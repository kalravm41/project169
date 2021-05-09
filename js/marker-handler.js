AFRAME.registerComponent('marker-handler',{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log('marker is found');
            this.handleMarkerFound();
        });

        this.el.addEventListener('markerLost',()=>{
            console.log('marker is lost');
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonRef = document.getElementById('button-div');
        buttonRef.style.display = "flex";

        var ratingButton = document.getElementById('rating-button');
        var orderButton = document.getElementById("order-button");

        ratingButton.addEventListener("click",()=>{
            swal({
                icon:  "warning",
                title: "Rate the dish",
                text: "Work In Progress"
            });
        });

        orderButton.addEventListener("click",()=>{
            swal({
                icon:  "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Ordering",
                text: "Your Order will be served soon at your table. Please Enjoy it"
            });
        });
    },

    handleMarkerLost: function(){
        var buttonRef = document.getElementById('button-div');
        buttonRef.style.display = "none";
    }
});