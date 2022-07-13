function testKeyCode(e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    var e = e || window.event;
              if (e.ctrlKey &&
                      (e.keyCode === 85 ||
                      e.keyCode === 67 ||
                      e.keyCode === 73 ||
                      e.keyCode === 74 ||
                      e.keyCode === 83)) {
        alert('This website is protected against attempts to clone. Your IP has been duly recorded on our server and if you persist it will be forwarded to the competent authorities');
      return false;
      } else {
        return true;
      }
    }
document.onkeydown = testKeyCode;
function misol1(){
    var a=document.getElementById("input1").value;
    a=parseFloat(a);
    var P=4*a;
    var javob=document.getElementById("javob1");
    javob.innerHTML="Perimetri: "+P;
    javob.innerHTML+="<br>Formula: P=4*a";
}
function misol2(){
    var a=document.getElementById("input2").value;
    a=parseFloat(a);
    var S=Math.pow(a,2);
    var javob=document.getElementById("javob2");
    javob.innerHTML="Yuzi: "+S;
    javob.innerHTML+="<br>Formula: S=a<sup>2</sup>";
}
function misol3(){
    var a=document.getElementById("input3_1").value;
    var b=document.getElementById("input3_2").value;
    a=parseFloat(a);
    b=parseFloat(b);
    var S=a*b;
    var P=2*(a+b);
    var javob=document.getElementById("javob3");
    javob.innerHTML="Yuzi: "+S;
    javob.innerHTML+="<br>Formula: S=a*b";
    javob.innerHTML+="<br>Perimetri: "+P;
    javob.innerHTML+="<br>Formula: P=2*(a+b)";
}
function misol4(){
    var d=document.getElementById("input4").value;
    d=parseFloat(d);
    var pi=3.14;
    var L=pi*d;
    var javob=document.getElementById("javob4");
    javob.innerHTML="Uzunligi: "+L;
    javob.innerHTML+="<br>pi=3.14<br>Formula: L=pi*d";
}
function misol5(){
    var a=document.getElementById("input5").value;
    a=parseFloat(a);
    var V=Math.pow(a,3);
    var S=6*Math.pow(a,2);
    var javob=document.getElementById("javob5");
    javob.innerHTML="Hajmi: "+V;
    javob.innerHTML+="<br>Formula: V=a<sup>3</sup>";
    javob.innerHTML+="<br>To`la sirti: "+S;
    javob.innerHTML+="<br>Formula: S=6*a<sup>2</sup>";
}
function misol6(){
    var a=document.getElementById("input6_1").value;
    var b=document.getElementById("input6_2").value;
    var c=document.getElementById("input6_3").value;
    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
    var V=a*b*c;
    var S=2*(a*b+b*c+a*c);
    var javob=document.getElementById("javob6");
    javob.innerHTML="Hajmi: "+V;
    javob.innerHTML+="<br>Formula: V=a*b*c";
    javob.innerHTML+="<br>To`la sirti: "+S;
    javob.innerHTML+="<br>Formula: S=2*(a*b+b*c+a*c)";
}
function misol7(){
    var R=document.getElementById("input7").value;
    R=parseFloat(R);
    var L=2*Math.PI*R;
    var S=Math.PI*Math.pow(R,2);
    var javob=document.getElementById("javob7");
    javob.innerHTML="Uzunligi: "+L;
    javob.innerHTML+="<br>Formula: L=2*pi*R";
    javob.innerHTML+="<br>Yuzasi: "+S;
    javob.innerHTML+="<br>Formula: S=pi*R<sup>2</sup>"
}
function misol8(){
    var a=document.getElementById("input8_1").value;
    var b=document.getElementById("input8_2").value;
    a=parseFloat(a);
    b=parseFloat(b);
    var answer=(a+b)/2;
    var javob=document.getElementById("javob8");
    javob.innerHTML="Javob: "+answer;
    javob.innerHTML+="<br>Formula: (a+b)/2";
}
function misol9(){
    var a=document.getElementById("input9_1").value;
    var b=document.getElementById("input9_2").value;
    a=parseFloat(a);
    b=parseFloat(b);
    var javob=document.getElementById("javob9");
    if(a>0 && b>0){
        var answer=Math.sqrt(a*b);
        javob.innerHTML="Javob: "+answer;
        javob.innerHTML+="<br>Formula: sqrt(a*b)";
    }else{
        javob.innerHTML="Xatolik(Manfiy son yoki sonlar)";
    }
}
function misol10(){
    var son1=document.getElementById("input10_1").value;
    var son2=document.getElementById("input10_2").value;
    son1=parseFloat(son1);
    son2=parseFloat(son2);
    var javob=document.getElementById("javob10");
    if(son1!=0 && son2!=0){
        var p=son1+son2;
        var k=son1*son2;
        var kv_son1=Math.pow(son1,2);
        var kv_son2=Math.pow(son2,2);
        javob.innerHTML="Yig`indi: "+p;
        javob.innerHTML+="<br>Ko`paytma: "+k;
        javob.innerHTML+="<br>1-son kvadrati: "+kv_son1;
        javob.innerHTML+="<br>2-son kvadrati: "+kv_son2;
    }else{
        javob.innerHTML="Xatolik(Sonlar yoki sonlardan biri nolga teng)";
    }
}
function misol11(){
    var son1=document.getElementById("input11_1").value;
    var son2=document.getElementById("input11_2").value;
    son1=parseFloat(son1);
    son2=parseFloat(son2);
    var javob=document.getElementById("javob11");
    if(son1!=0 && son2!=0){
        var p=son1+son2;
        var k=son1*son2;
        var abs_son1=Math.abs(son1,2);
        var abs_son2=Math.abs(son2,2);
        javob.innerHTML="Yig`indi: "+p;
        javob.innerHTML+="<br>Ko`paytma: "+k;
        javob.innerHTML+="<br>1-son moduli: "+abs_son1;
        javob.innerHTML+="<br>2-son moduli: "+abs_son2;
    }else{
        javob.innerHTML="Xatolik(Sonlar yoki sonlardan biri nolga teng)";
    }
}
function misol12(){
    var a=document.getElementById("input12_1").value;
    var b=document.getElementById("input12_2").value;
    a=parseFloat(a);
    b=parseFloat(b);
    var c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    var P=a+b+c;
    var javob=document.getElementById("javob12");
    javob.innerHTML="Gipotenuza: "+c;
    javob.innerHTML+="<br>Formula: c=sqrt(a<sup>2</sup>+b<sup>2</sup>)";
    javob.innerHTML+="<br>Perimetri: "+P;
    javob.innerHTML+="<br>Formula: P=a+b+c";
}
function misol13(){
    var R1=document.getElementById("input13_1").value;
    var R2=document.getElementById("input13_2").value;
    R1=parseFloat(R1);
    R2=parseFloat(R2);
    var javob=document.getElementById("javob13");
    if(R1>R2){
        var S1=Math.PI*R1;
        var S2=Math.PI*R2;
        var S3=Math.PI*(R1-R2);
        javob.innerHTML="S<sub>1</sub> yuza: "+S1;
        javob.innerHTML+="<br>Formula: S<sub>1</sub>=pi*R<sub>1</sub>";
        javob.innerHTML+="<br>S<sub>2</sub> yuza: "+S2;
        javob.innerHTML+="<br>Formula: S<sub>2</sub>=pi*R<sub>2</sub>";
        javob.innerHTML+="<br>S<sub>3</sub> ayirma: "+S3;
        javob.innerHTML+="<br>Formula: S<sub>3</sub>=pi*(R<sub>1</sub>-R<sub>2</sub>)";
    }else{
        javob.innerHTML="Xatolik(R<sub>1</sub> soni R<sub>2</sub> sonidan kichik yoki teng)";
    }
}
function misol14(){
    var L=document.getElementById("input14").value;
    var pi=3.14;
    var R=L/(2*pi);
    var S=pi*Math.pow(R,2);
    var javob=document.getElementById("javob14");
    javob.innerHTML="Radiusi: "+R;
    javob.innerHTML+="<br>Formula: L=2*pi*R, shundan R=L/(2*pi)";
    javob.innerHTML+="<br>Yuza: "+S;
    javob.innerHTML+="<br>Formula: S=pi*R<sup>2</sup>";
}
function misol15(){
    var S=document.getElementById("input15").value;
    var pi=3.14;
    var R=Math.sqrt(S/pi);
    var d=R*2;
    var javob=document.getElementById("javob15");
    javob.innerHTML="Diametri: "+d;
    javob.innerHTML+="<br>Radiusi: "+R;
    javob.innerHTML+="<br>Formula: S=pi*R<sup>2</sup>, shundan R=sqrt(S/pi)";
}
function misol16(){
    var n1=document.getElementById("input16_1").value;
    var n2=document.getElementById("input16_2").value;
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    var answer=Math.abs(n1-n2);
    var javob=document.getElementById("javob16");
    javob.innerHTML="Javob: "+answer;
}
function misol17(){
    var A=document.getElementById("input17_1").value;
    var B=document.getElementById("input17_2").value;
    var C=document.getElementById("input17_3").value;
    A=parseFloat(A);
    B=parseFloat(B);
    C=parseFloat(C);
    var AC=Math.abs(A-C);
    var BC=Math.abs(B-C);
    var Yig=AC+BC;
    var javob=document.getElementById("javob17");
    javob.innerHTML="AC uzunligi: "+AC;
    javob.innerHTML+="<br>BC uzunligi: "+BC;
    javob.innerHTML+="<br>Yig`indi: "+Yig;
}
function misol18(){
    var A=document.getElementById("input18_1").value;
    var B=document.getElementById("input18_2").value;
    var C=document.getElementById("input18_3").value;
    A=parseFloat(A);
    B=parseFloat(B);
    C=parseFloat(C);
    var AC=Math.abs(C-A);
    var BC=Math.abs(B-C);
    var k=AC*BC;
    var javob=document.getElementById("javob18");
    javob.innerHTML="Ko`paytma: "+k;
}
function misol19(){
    var X1=document.getElementById("input19_1").value;
    var Y1=document.getElementById("input19_2").value;
    var X2=document.getElementById("input19_3").value;
    var Y2=document.getElementById("input19_4").value;
    X1=parseFloat(X1);
    Y1=parseFloat(Y1);
    X2=parseFloat(X2);
    Y2=parseFloat(Y2);
    var t1=Math.abs(X2-X1);
    var t2=Math.abs(Y2-Y1);
    var P=2*(t1+t2);
    var S=t1*t2;
    var javob=document.getElementById("javob19");
    javob.innerHTML="Perimetri: "+P+"<br>Yuzi: "+S;
}
function misol20(){
    var X1=document.getElementById("input20_1").value;
    var Y1=document.getElementById("input20_2").value;
    var X2=document.getElementById("input20_3").value;
    var Y2=document.getElementById("input20_4").value;
    X1=parseFloat(X1);
    Y1=parseFloat(Y1);
    X2=parseFloat(X2);
    Y2=parseFloat(Y2);
    var m=Math.sqrt(Math.pow((X2-X1),2)+Math.pow((Y2-Y1),2));
    var javob=document.getElementById("javob20");
    javob.innerHTML="Masofa: "+m;
}
function misol21(){
    var X1=document.getElementById("input21_1").value;
    var Y1=document.getElementById("input21_2").value;
    var X2=document.getElementById("input21_3").value;
    var Y2=document.getElementById("input21_4").value;
    var X3=document.getElementById("input21_5").value;
    var Y3=document.getElementById("input21_6").value;
    X1=parseFloat(X1);
    Y1=parseFloat(Y1);
    X2=parseFloat(X2);
    Y2=parseFloat(Y2);
    X3=parseFloat(X3);
    Y3=parseFloat(Y3);
    var a=Math.sqrt(Math.pow((X2-X1),2)+Math.pow((Y2-Y1),2));
    var b=Math.sqrt(Math.pow((X3-X2),2)+Math.pow((Y3-Y2),2));
    var c=Math.sqrt(Math.pow((X3-X1),2)+Math.pow((Y3-Y1),2));
    var P=(a+b+c)/2;
    var S=Math.sqrt(P*(P-a)*(P-b)*(P-c));
    var javob=document.getElementById("javob21");
    javob.innerHTML="Yuzi: "+S;
    javob.innerHTML+="<br>Formula: S=sqrt(p*(p-a)*(p-b)*(p-c))";
    javob.innerHTML+="<br>Perimetri: "+P;
    javob.innerHTML+="<br>Formula: P=(a+b+c)/2";
}
function misol22(){
    var A=document.getElementById("input22_1").value;
    var B=document.getElementById("input22_2").value;
    A=parseFloat(A);
    B=parseFloat(B);
    var C=B;
    B=A;
    A=C;
    var javob=document.getElementById("javob22");
    javob.innerHTML="A soni: "+A+"<br>B soni: "+B;
}
function misol23(){
    var A=document.getElementById("input23_1").value;
    var B=document.getElementById("input23_2").value;
    var C=document.getElementById("input23_3").value;
    A=parseFloat(A);
    B=parseFloat(B);
    C=parseFloat(C);
    var D=B;
    var E=C;
    B=A;
    A=E;
    C=D;
    var javob=document.getElementById("javob23");
    javob.innerHTML="A soni: "+A+"<br>B soni: "+B+"<br>C soni: "+C;
}
function misol24(){
    var A=document.getElementById("input24_1").value;
    var B=document.getElementById("input24_2").value;
    var C=document.getElementById("input24_3").value;
    A=parseFloat(A);
    B=parseFloat(B);
    C=parseFloat(C);
    var D=B;
    var E=C;
    C=A;
    B=E;
    A=D;
    var javob=document.getElementById("javob24");
    javob.innerHTML="A soni: "+A+"<br>B soni: "+B+"<br>C soni: "+C;
}
function misol25(){
    var x=document.getElementById("input25").value;
    x=parseFloat(x);
    var y=3*Math.pow(x,6)-6*Math.pow(x,2)-7;
    var javob=document.getElementById("javob25");
    javob.innerHTML="Javob: "+y;
    javob.innerHTML+="<br>Formula: y=3*Math.pow(x,6)-6*Math.pow(x,2)-7";
}
function misol26(){
    var x=document.getElementById("input26").value;
    x=parseFloat(x);
    var y=4*Math.pow((x-3),6)-7*Math.pow((x-3),3)+2;
    var javob=document.getElementById("javob26");
    javob.innerHTML="Javob: "+y;
    javob.innerHTML+="<br>Formula: y=4*Math.pow((x-3),6)-7*Math.pow((x-3),3)+2";
}
function misol27(){
    var A=document.getElementById("input27").value;
    A=parseFloat(A);
    var A2=Math.pow(A,2);
    var A4=Math.pow(A,4);
    var A8=Math.pow(A,8);
    var javob=document.getElementById("javob27");
    javob.innerHTML="A<sup>2</sup>-darajasi: "+A2+"<br>A<sup>4</sup>-darajasi: "+A4+"<br>A<sup>8</sup>-darajasi: "+A8;
}
function misol28(){
    var A=document.getElementById("input28").value;
    A=parseFloat(A);
    var A2=Math.pow(A,2);
    var A3=Math.pow(A,3);
    var A5=Math.pow(A,5);
    var A10=Math.pow(A,10);
    var A15=Math.pow(A,15);
    var javob=document.getElementById("javob28");
    javob.innerHTML="A<sup>2</sup>-darajasi: "+A2+"<br>A<sup>3</sup>-darajasi: "+A3+"<br>A<sup>5</sup>-darajasi: "+A5+"<br>A<sup>10</sup>-darajasi: "+A10+"<br>A<sup>15</sup>-darajasi: "+A15;
}
function misol29(){
    var a=document.getElementById("input29").value;
    a=parseFloat(a);
    var rad=a*(2*Math.PI)/360;
    var javob=document.getElementById("javob29");
    javob.innerHTML="Javob: "+rad;
    javob.innerHTML+="<br>Formula: rad=a*(2*π)/360°";
}
function misol30(){
    var a=document.getElementById("input30").value;
    a=parseFloat(a);
    var deg=a*360/(2*Math.PI);
    var javob=document.getElementById("javob30");
    javob.innerHTML="Javob: "+deg;
    javob.innerHTML+="<br>Formula: deg=a*360/(2*π)";
}
function misol31(){
    var Tf=document.getElementById("input31").value;
    Tf=parseFloat(Tf);
    var Tc=(Tf-32)*5/9;
    var javob=document.getElementById("javob31");
    javob.innerHTML="Javob: "+Tc;
    javob.innerHTML+="<br>Formula: Tc=(Tf-32)*5/9";
}
function misol32(){
    var Tc=document.getElementById("input32").value;
    Tc=parseFloat(Tc);
    var Tf=(Tc*9/5)+32;
    var javob=document.getElementById("javob32");
    javob.innerHTML="Javob: "+Tf;
    javob.innerHTML+="<br>Formula: Tf=(Tc*9/5)+32";
}
function misol33(){
    var kg=document.getElementById("input33_1").value;
    var nx=document.getElementById("input33_2").value;
    kg=parseFloat(kg);
    nx=parseFloat(nx);
    var answer=kg*nx;
    var javob=document.getElementById("javob33");
    javob.innerHTML="Javob: "+answer+" so`m";
}
function misol34(){
    var kg1=document.getElementById("input34_1").value;
    var nx1=document.getElementById("input34_2").value;
    var kg2=document.getElementById("input34_3").value;
    var nx2=document.getElementById("input34_4").value;
    kg1=parseFloat(kg1);
    nx1=parseFloat(nx1);
    kg2=parseFloat(kg2);
    nx2=parseFloat(nx2);
    var ans1=kg1*nx1;
    var ans2=kg2*nx2;
    var answer=Math.abs(ans1-ans2);
    var javob=document.getElementById("javob34");
    javob.innerHTML="Javob: "+answer+" so`m";
}
function misol35(){
    var V=document.getElementById("input35_1").value;
    var U=document.getElementById("input35_2").value;
    var T1=document.getElementById("input35_3").value;
    var T2=document.getElementById("input35_4").value;
    V=parseFloat(V);
    U=parseFloat(U);
    T1=parseFloat(T1);
    T2=parseFloat(T2);
    var javob=document.getElementById("javob35");
    if(V>U){
        var ans1=V*T1*U;
        var ans2=V*T2/U;
        javob.innerHTML="Oqim bilan: "+ans1+"<br>Oqimga qarshi: "+ans2;
    }else {
        javob.innerHTML="Xatolik(V>U bo`lishi kerak)";
    }
}
function misol36(){
    var V1=document.getElementById("input36_1").value;
    var V2=document.getElementById("input36_2").value;
    var T=document.getElementById("input36_3").value;
    V1=parseFloat(V1);
    V2=parseFloat(V2);
    T=parseFloat(T);
    var ans1=V1*T;
    var ans2=V2*T;
    var answer=Math.abs(ans1-ans2);
    var javob=document.getElementById("javob36");
    javob.innerHTML="Javob: "+answer;
}
function misol37(){
    var V1=document.getElementById("input37_1").value;
    var V2=document.getElementById("input37_2").value;
    var T=document.getElementById("input37_3").value;
    V1=parseFloat(V1);
    V2=parseFloat(V2);
    T=parseFloat(T);
    var ans1=V1/T;
    var ans2=V2/T;
    var answer=Math.abs(ans1-ans2);
    var javob=document.getElementById("javob37");
    javob.innerHTML="Javob: "+answer;
}
function misol38(){
    var A=document.getElementById("input38_1").value;
    var B=document.getElementById("input38_2").value;
    A=parseFloat(A);
    B=parseFloat(B);
    var javob=document.getElementById("javob38");
    if(A!=0){
        var x=-B/A;
        javob.innerHTML="x="+x;
    }else{
        javob.innerHTML="Xatolik(A koeffitsent nolga teng)";
    }
}
function misol39(){
    var A=document.getElementById("input39_1").value;
    var B=document.getElementById("input39_2").value;
    var C=document.getElementById("input39_3").value;
    A=parseFloat(A);
    B=parseFloat(B);
    C=parseFloat(C);
    var javob=document.getElementById("javob39");
    if(A!=0){
        var D=Math.pow(B,2)-4*A*C;
        if(D>0){
            var x1=(-B+Math.sqrt(D))/2*A;
            var x2=(-B-Math.sqrt(D))/2*A;
            javob.innerHTML="D="+D+"<br>Formula: D=Math.pow(B,2)-4*A*C<br>x1="+x1+"<br>x2="+x2+"<br>Formula: x1,2=(-B+-Math.sqrt(D))/2*A";
        }else{
            javob.innerHTML="Xatolik(Diskiminant noldan kichik)";
        }
    }else{
        javob.innerHTML="Xatolik(A koeffitsent nolga teng)";
    }
}
function misol40(){
    var A1=document.getElementById("input40_1").value;
    var B1=document.getElementById("input40_2").value;
    var C1=document.getElementById("input40_3").value;
    var A2=document.getElementById("input40_4").value;
    var B2=document.getElementById("input40_5").value;
    var C2=document.getElementById("input40_6").value;
    var javob=document.getElementById("javob40");
    var D=(A1*B2-A2*B1);
    var x=(C1*B2-C2*B1)/D;
    var y=(A1*C2-A2*C1)/D;
    javob.innerHTML="D="+D+"<br>Formula: D=(A1*B2-A2*B1)"+"<br>x="+x+"<br>Formula: x=(C1*B2-C2*B1)/D"+"<br>y="+y+"<br>Formula: y=(A1*C2-A2*C1)/D";
}