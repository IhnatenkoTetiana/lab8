while (m!=5){
    var m = prompt("Ввод m \n1 - оператор условия\n2 - цикл\n3 - цикл while\n4 - ввод с массива\n5 - выход",'')
    if (isNaN(m)==false){
        if (m<1 || m>5){
            alert("Вы ввели некорректное число")
        }else {
            switch (m) {
                case "1":
                   alert("Был выбран первый случай");
                    let  x = prompt("Ввод X", '1.542');
                    if (isNaN(x)==false){
                        let y = prompt("Ввод Y", '0.261');
                        if (isNaN(y)==false){
                            if (x>=y){
                                alert("x>=y");
                                let a;
                                a=Math.exp((x-y))+Math.pow(z,3);
                                alert(a);
                                }
                            else{
                                alert("x<y");
                                let z = prompt("Ввод Z", '0.032');
                                    if (isNaN(z)==false){
                                    let b=x-Math.pow(x,3)/6;
                                    alert(b);}
                                    else alert('Вы ввели не число!');}
                            }
                        else alert('Вы ввели не число!');}
                    else alert('Вы ввели не число!');
                break
                case "2":
                    alert("Был выбран второй случай");
                    let shag =+prompt('Введите шаг цикла',0.25);
                    if (isNaN(shag)==false){
                        let a2=+prompt('Введите а',0.55);
                        if (isNaN(a2)==false){
                            let b2=+prompt('Введите b',0.55);
                            if (isNaN(b2)==false){
                                let x2_1=+prompt('Введите начальное значение x',4.2);
                                if (isNaN(x2_1)==false){
                                    let x2_2=+prompt('Введите конечное значение x',5.8)
                                    if (isNaN(x2_1)==false){
                                        if (x2_1<x2_2){
                                            for (x2_1;x2_1 <=x2_2;){ 
                                            let y;
                                            y=(Math.pow(Math.tan(a2*x2),2)-b2)/Math.exp(a2*x2);        
                                            alert("При х2="+x2_1+" y="+y);  
                                            x2_1=x2_1+shag;}
                                        }else alert('Конечное значение х меньше начального!');
                                    }else alert('Вы ввели не число!');  
                                }else alert('Вы ввели не число!');  
                            }else alert('Вы ввели не число!'); }
                        else alert('Вы ввели не число!'); }
                    else alert('Вы ввели не число!');   
                    break
                case "3":
                    var shag2 =+prompt('Введите шаг цикла',2)
                    if (isNaN(shag2)==false){
                        var x3 =+prompt('Введите начальное значение x',3)
                        if (isNaN(x3)==false){
                            var x4 =+prompt('Введите конечное значение x',5)
                                if (isNaN(x4)==false){
                                    var a3 =+prompt('Введите а',0.55);
                                    if (isNaN(a3)==false){
                                    var b3 =+prompt('Введите b',0.78);
                                        if (isNaN(b3)==false){
                                            if (x3<x4){
                                                while (x3<=x4){
                                                let y2;
                                                y2=(Math.pow(Math.tan(a3*x3),2)-b3)/Math.exp(a3*x3);
                                                alert("При х2="+x3+" y="+y2); 
                                                x3=x3+shag2;}
                                            }else alert('Конечное значение х меньше начального!');
                                        }else alert('Вы ввели не число!');
                                    }else alert('Вы ввели не число!');
                                }else alert('Вы ввели не число!');
                        }else alert('Вы ввели не число!');
                    }else alert('Вы ввели не число!');
                break
                case "4":
                    var array=[];
                    for (var i=0;i<4;i++) {
                        array[i]=prompt('Введите '+(i+1)+' элемент массива',11);
                    }
                    let a2 =0.55;
                    let b2 =0.78;
                    for (var i=0;i<4;i++){
                        let y3;
                        y3=(Math.pow(Math.tan(a2*array[i]),2)-b2)/Math.exp(a2*array[i]);
                        alert('При x = '+array[i]+',y ='+y3);
                    }
                    }
                };
    }else alert('Вы ввели не число!');
}