
/**
 * Created by lenovo on 2018/6/23.
 */
// function tab() {
//     // 获取各个li项
//     var btns = document.getElementsByClassName("btn");
//     // 获取各个职位div
//     var jobs = document.getElementsByClassName("job");
// //给它加了一个属性，这个属性可以得到当前的索引号
// //后边的去调用它时就相当于调用它当前的索引号
//     // 遍历每个li项。点击重置所有className。点击赋予当前点击项btn-active
//     for (var i=0; i<btns.length; i++) {
//         btns[i].index = i;
//         btns[i].onclick=function () {
//             for(var j=0; j<btns.length; j++) {
//                 btns[j].className = "btn";
//                 jobs[j].className = "job";
//             }
//             // 给当前点击项添加类名 active
//             alert(this.index);
//             this.setAttribute("class", "btn-active btn");
//             jobs[this.index].className="job-active job";
//         }
//     }
// }
// tab();

//按钮类名、内容类名、当前显示按钮类名、当前显示内容类名
function tabSwitch(btn, item, activeBtn, activeItem) {
    // 获取各个li项
    var btns = document.getElementsByClassName(btn);
    // 获取各个div
    var items = document.getElementsByClassName(item);
    // 遍历每个li项。点击重置所有className。点击赋予当前点击项btn-active
    for (var i=0; i<btns.length; i++) {
        // btns[i].index = i;   // 给每个按钮添加一个自定义属性，用来存储当前的索引
        // alert(i);

        // a(i);
        function a(i) {
            var x=i;
            alert("123");
            btns[i].onclick = function () {
                for (var j = 0; j < btns.length; j++) {
                    alert(x);
                    btns[j].className = btn;
                    items[j].className = item;

                }
                // 给当前点击项添加类名 active
                this.setAttribute("class", btn + " " + activeBtn);
                items[i].className = item + " " + activeItem;
            }
        }
    }
}
tabSwitch("btn", "job", "btn-active", "job-active");

// $(function () {
//     $(".btn").click(function () {
//         $(".btn").removeClass("btn-active");
//         $(this).addClass("btn-active");
//         $(".job").removeClass("job-active").eq($(this).index()).addClass("job-active");
//     });
// });