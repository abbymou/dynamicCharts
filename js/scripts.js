
$( document ).ready(function() {
  createCharts();
});

function createCharts(){
  console.log("createCharts");
  var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Least Expensive Model', 199, 199, 199, 649, 649, 749, 649],
            ['Most Expensive Model', 299, 399, 399, 849, 849, 1149, 1099]
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Iphone 4', 'Iphone 5', 'Iphone 6', 'Iphone 7', 'Iphone 8', 'Iphone X', 'Iphone 11']
        }
    },
    color: {
        pattern: ['#003f5c', '#ffa600']
    }
});

var genderChart = c3.generate({
    bindto: '#gender-chart',
    data: {
        // iris data from R
        columns: [
            ['Apple', 41.9],
            ['Samsung', 27.8],
            ['LG', 6.5],
            ['Motorola', 6.3],
            ['HTC', 5.1]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']
    }
});
var ageChart = c3.generate({
    bindto: '#age-chart',
    data: {
        columns: [
            ['Current Usage (%)', 0.45, 5.32, 13.2, 17.75, 4.62, 29.4, 17.26, 12]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Iphone 4', 'Iphone 5', 'Iphone 6', 'Iphone 6S', 'Iphone SE', 'Iphone 7', 'Iphone 8', 'Iphone X']
        }
    },
    color: {
        pattern: ['#003f5c', '#ffa600']
    }
});

}
