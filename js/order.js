window.onload = init;

function init(){
    ticket_on();
    document.getElementById("ticketLabel").onclick = ticket_on;
    document.getElementById("diningLabel").onclick = dining_on;
    document.getElementById("hotelLabel").onclick = hotel_on;

    var add_btn = document.querySelectorAll("#menu_content button");
    var rel_val = document.querySelectorAll("#menu_content input");
    var rel_img = document.querySelectorAll("#menu_content img");

    for (var i = 0; i < add_btn.length; i++){
        add_btn[i].myPara = [rel_val[i],rel_img[i]];
        add_btn[i].addEventListener("click", add);
    }

    document.getElementById("undo").onclick = undo_fun;
}

function ticket_on(){
    var ticketblock = document.querySelectorAll("#ticketLabel, #menu_ticket");
    reset_all();

    for (var i = 0; i < ticketblock.length; i++){
        ticketblock[i].style.backgroundColor = "white";
    }
    ticketblock[1].style.display = "block";
}

function dining_on(){
    var diningblock = document.querySelectorAll("#diningLabel, #menu_dinings");
    reset_all();

    for (var i = 0; i < diningblock.length; i++){
        diningblock[i].style.backgroundColor = "white";
    }
    diningblock[1].style.display = "block";
}

function hotel_on(){
    var hotelblock = document.querySelectorAll("#hotelLabel, #menu_hotel");
    reset_all();

    for (var i = 0; i < hotelblock.length; i++){
        hotelblock[i].style.backgroundColor = "white";
    }
    hotelblock[1].style.display = "block";
}

function reset_all(){
    var order_block = document.querySelectorAll("#menu_ticket,#menu_dinings,#menu_hotel");
    var headings = document.querySelectorAll("#menu_content > h5");
    for (var i = 0; i < order_block.length; i++){
        order_block[i].style.display = "none";
    }
    for (var i = 0; i < headings.length; i++){
        headings[i].style.backgroundColor = "grey";
    }
    
}

function add(rel_val, rel_img){
    var rel_val = this.myPara[0];
    var rel_img = this.myPara[1];
    var tb_con = document.querySelector("#table0 tbody");
    var add_con = "<tr><td>$1</td><td>$2</td></tr>".replace("$1", rel_img.alt).replace("$2", rel_val.value);

    tb_con.innerHTML += add_con;

    recal();
}

function recal(){
    var all_tr = document.querySelectorAll("#table0 tbody tr");
    var row_qty;
    var sum = 0;

    for (var i = 0; i < all_tr.length; i++){
        row_qty = all_tr[i].querySelectorAll("td")[1].innerHTML;
        sum += parseInt(row_qty);
    }
    document.getElementById("totalqty").innerHTML = sum;
}

function undo_fun(evt){
    var tb_con = document.querySelector("#table0 tbody");
    tb_con.deleteRow(-1);
    recal();
    evt.preventDefault();
}
