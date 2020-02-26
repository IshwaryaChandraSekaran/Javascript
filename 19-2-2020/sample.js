//js file for prelims fig-em-all

function check(x) {
    alert("let me check your flag then..");
    var inp = x.value;
    msg = document.getElementById('msg');
    var you_need_this_0x = ['77','65','6c','63','30','6d','33','5f','74','30','5f','40','6e','6f','6b','68','41']
    var you_need_this_0o = [167,145,154,143,60,155,63,137,164,60,137,100,156,157,153,150,101]
    for(var i = 0;i<you_need_this_0x.length;i++){
            //alert(inp.charAt(i));
            if(i%2==0){
                var b = inp.charCodeAt(i).toString(16).toString();
                //console.log(b,you_need_this_0x[i]);
                //alert(b +" " +  you_need_this_0x[i]);
                if(b !== you_need_this_0x[i]){
                    //alert("wrong ");
                    console.log("wrong inside!");
                    return 1;
                }
            }
            else {
                var b = inp.charCodeAt(i).toString(8);
                if(b!==you_need_this_0o[i].toString()) {
                    //alert(b,you_need_this_0o[i].toString());
                    return 1;
                }
            }
    }
    alert("WELCOME TO ANOKHA!!!")
    return 0;
    
    
}