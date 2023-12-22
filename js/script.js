$(document).ready(function(){
    $('.button_block a, .fixed_menu ul li a, .top_menu ul li a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
        }
	    //return false; // выключаем стандартное действие
    });
	
		//store service items
	var fillingBlocks = $('.cd-service').not('.cd-service-divider');

	//store service items top position into an array
	var topValueFillingBlocks = [];
	fillingBlocks.each(function(index){
		var topValue = $(this).offset().top;
		topValueFillingBlocks[topValueFillingBlocks.length] = topValue;
	});

	//add the .focus class to the first service item
	fillingBlocks.eq(0).addClass('focus');

	$(window).on('scroll', function(){
		//check which service item is in the viewport and add the .focus class to it
		updateOnFocusItem(fillingBlocks.slice(1));
		//evaluate the $(window).scrollTop value and change the body::after and body::before background accordingly (using the new-color-n classes)
		bodyBackground(topValueFillingBlocks);
	});
	
});



function updateOnFocusItem(items) {
	items.each(function(){
		( $(this).offset().top - $(window).scrollTop() <= $(window).height()/2 ) ? $(this).addClass('focus') : $(this).removeClass('focus');
	});
}

function bodyBackground(itemsTopValues) {
	var topPosition = $(window).scrollTop() + $(window).height()/4,
		servicesNumber = itemsTopValues.length;
	$.each(itemsTopValues, function(key, value){
		if ( (itemsTopValues[key] <= topPosition && itemsTopValues[key+1] > topPosition) || (itemsTopValues[key] <= topPosition && key+1 == servicesNumber ) ) {	
			$('.wp_swg').removeClass('new-color-'+(key-1)+' new-color-'+(key+1)).addClass('new-color-'+key);
		}
	});
}


 
var pathObj = {
    "anim": {
        "strokepath": [
            {
                "path": "M 244.4343262,246.370361 L 165.4680176,205.2268066 165.9299316,204.3400879   244.8962402,245.4836426 z",
                "duration": 600
            },
            {
                "path": "M 516.6252441,295.303955 L 516.3947754,294.3308105 1166.2072754,140.6677246   1166.4377441,141.6408691 z",
                "duration": 600
            },
            {
                "path": "M 164.7385254,550.494384 L 164.0354004,549.7834473 291.0080566,424.123291   291.7111816,424.8342285 z",
                "duration": 600
            },
            {
                "path": "M 576.6062012,639.316650 L 417.4182129,444.2873535 418.192627,443.654541   577.3806152,638.6838379 z",
                "duration": 600
            },
            {
                "path": "M 960.4533691,492.990478 L 486.826416,395.9855957 487.0270996,395.005127   960.654541,492.0100098 z",
                "duration": 600
            },
            {
                "path": "M112.517334,223.3391113c-48.3374023,0-87.7314453-39.3261719-87.8154297-87.6650391  c-0.0854492-48.4228516,39.2412109-87.887207,87.6655273-87.9726563h0.15625  c48.3374023,0,87.7314453,39.3266602,87.8154297,87.6660156c0.0410156,23.4570313-9.0551758,45.5263672-25.612793,62.1416016  c-16.5581055,16.6162109-38.5952148,25.7890625-62.0527344,25.8300781H112.517334z M112.5236816,48.701416h-0.1542969  c-47.8730469,0.0844727-86.7519531,39.0991211-86.6674805,86.9707031  c0.0830078,47.7885742,39.0283203,86.6669922,86.8154297,86.6669922h0.1542969  c23.1904297-0.0405273,44.9770508-9.109375,61.3461914-25.5356445  c16.3691406-16.4267578,25.3618164-38.2441406,25.3212891-61.434082  C199.2561035,87.5803223,160.310791,48.701416,112.5236816,48.701416z",
                "duration": 1400
            },
            {
                "path": "M1044.4963379,578.8752441c-46.4804688,0-84.3613281-37.8154297-84.4423828-84.2978516  c-0.0400391-22.5566406,8.7070313-43.7783203,24.6289063-59.7558594  c15.9228516-15.9775391,37.1142578-24.7988281,59.6708984-24.8388672h0.1513672  c46.4804688,0,84.3613281,37.8164063,84.4414063,84.2998047c0.0390625,22.5566406-8.7070313,43.7773438-24.6298828,59.7548828  c-15.921875,15.9785156-37.1123047,24.7988281-59.6689453,24.8378906H1044.4963379z M1044.505127,410.982666h-0.1494141  c-22.2900391,0.0390625-43.2304688,8.7558594-58.9638672,24.5439453  c-15.734375,15.7890625-24.3769531,36.7597656-24.3378906,59.0488281  c0.0800781,45.9316406,37.5126953,83.2998047,83.4423828,83.2998047h0.1494141  c22.2890625-0.0380859,43.2294922-8.7548828,58.9628906-24.5429688  c15.7333984-15.7890625,24.3769531-36.7587891,24.3378906-59.0478516  C1127.8674316,448.3518066,1090.435791,410.982666,1044.505127,410.982666z",
                "duration": 1800
            },
            {
                "path": "M99.8820801,722.0500488c-54.1279297,0-98.2407227-44.0371094-98.3344727-98.1669922  c-0.0957031-54.2236328,43.9423828-98.4169922,98.1679688-98.5136719h0.1743164  c54.1289063,0,98.2426758,44.0390625,98.3369141,98.1699219c0.0458984,26.2675781-10.1401367,50.9804688-28.6816406,69.5869141  s-43.2192383,28.8779297-69.4868164,28.9238281H99.8820801z M99.8898926,526.3693848h-0.1723633  c-53.6743164,0.0957031-97.2646484,43.8398438-97.1699219,97.5117188  c0.0927734,53.5791016,43.7568359,97.1689453,97.3344727,97.1689453h0.1743164  c26.0004883-0.0449219,50.4272461-10.2128906,68.7802734-28.6298828s28.4355469-42.8789063,28.3901367-68.8789063  C197.1335449,569.9602051,153.4680176,526.3693848,99.8898926,526.3693848z",
                "duration": 1400
            },
            {
                "path": "M609.8713379,743.5061035c-31.7592773,0-57.6416016-25.8378906-57.6967773-57.5976563  c-0.0561523-31.8154297,25.7827148-57.7460938,57.5986328-57.8027344h0.1020508  c31.7587891,0,57.6425781,25.8398438,57.6982422,57.6005859c0.0273438,15.4121094-5.9492188,29.9121094-16.828125,40.8291016  s-25.3579102,16.9443359-40.7700195,16.9707031H609.8713379z M609.8752441,629.1057129h-0.1000977  c-31.2646484,0.0556641-56.6557617,25.5371094-56.6005859,56.8007813  c0.0541992,31.2089844,25.4882813,56.5996094,56.6967773,56.5996094h0.1020508  c15.1450195-0.0263672,29.3730469-5.9492188,40.0634766-16.6767578  c10.690918-10.7275391,16.5629883-24.9765625,16.5366211-40.1210938  C666.5187988,654.4973145,641.0837402,629.1057129,609.8752441,629.1057129z",
                "duration": 1400
            },
            {
                "path": "M373.8933105,451.3293457c-79.0859375,0-143.5390625-64.3417969-143.6767578-143.4291992  c-0.0678711-38.378418,14.8144531-74.4863281,41.9052734-101.6713867  c27.090332-27.1850586,63.1459961-42.1938477,101.5249023-42.2612305l0.2558594-0.0004883  c79.0849609,0,143.5371094,64.3432617,143.6748047,143.4316406c0.0673828,38.378418-14.8149414,74.4853516-41.9052734,101.6699219  c-27.0898438,27.1855469-63.1455078,42.1933594-101.5249023,42.2607422H373.8933105z M373.9025879,164.967041l-0.2539063,0.0004883  c-38.1123047,0.0668945-73.9169922,14.9711914-100.8188477,41.9667969  c-26.9018555,26.9960938-41.6806641,62.8525391-41.6132813,100.9638672  c0.1367188,78.5366211,64.1411133,142.4311523,142.6767578,142.4311523h0.2519531  c38.1123047-0.0664063,73.9169922-14.9707031,100.8188477-41.9658203  c26.9013672-26.9960938,41.6801758-62.8515625,41.6132813-100.9628906  C516.4406738,228.8625488,452.4367676,164.967041,373.9025879,164.967041z",
                "duration": 1800
            },
            {
                "path": "M1312.3117676,206.3239746c-13.6142578,6.1962891-28.5117188,9.4765625-43.9169922,9.503418  h-0.1904297c-58.6298828,0-106.4130859-47.7006836-106.515625-106.3330078  c-0.1035156-58.7338867,47.5986328-106.6020508,106.3359375-106.706543h0.1904297  c15.7158203,0,30.6494141,3.4311523,44.0966797,9.5771484v-1.1020508  c-13.4648438-6.0854492-28.3955078-9.4750977-44.0966797-9.4750977h-0.1923828  c-59.2890625,0.1054688-107.4384766,48.4233398-107.3339844,107.7084961  c0.1035156,59.1826172,48.3349609,107.3310547,107.515625,107.3310547h0.1923828  c15.3935547-0.0268555,30.2861328-3.2695313,43.9150391-9.4018555V206.3239746z",
                "duration": 1300
            }
        ],
        "dimensions": {
            "width": 1313,
            "height": 745
        }
    }
}; 
 
 

	







			
$(document).ready(function() {
    

	
	
	
	
	$('#callback').click(function(e) {
    var $message = $('#popup');
 
   // if ($message.css('display') != 'block') {
		$(".fixed_back").fadeIn(300);
		$("body").addClass("scroll-hidden");
        $message.fadeIn(500); 
 
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('#popup').length == 0 || $(e.target).closest('.close').length) {
                $message.fadeOut(300);
				$(".fixed_back").fadeOut(500);
				$("body").removeClass("scroll-hidden");
				$(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
   // }
 
    e.preventDefault();
});
	
		


	
	
	
	 
	
	
  es to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for multiple tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function() {},

        // Function - Will fire on animation completion.
        onAnimationComplete: function() {}
    };

    // BEGIN LINE CHART ============================================
/*setTimeout(function(){
	

    var lineGraphData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept","Oct","Nov","Dec"],
        datasets: [ {
            label: "",
            fillColor: "#ffdce6",
            strokeColor: "#ffdce6",
            pointColor: "transparent",
            pointStrokeColor: "transparent",
            pointHighlightFill: "transparent",
            pointHighlightStroke: "transparent",
            data: [5, 40, 20, 30, 56, 80, 190, 210, 100, 134, 160, 130]
        },
				  {
            label: "",
            fillColor: "#ed7a5b",
            strokeColor: "#ed7a5b",
            pointColor: "transparent",
            pointStrokeColor: "transparent",
            pointHighlightFill: "transparent",
            pointHighlightStroke: "transparent",
            data: [10, 29, 20, 25, 46, 50, 100, 120, 50, 30, 33, 20]
        },
				    {
            label: "",
            fillColor: "transparent",
            strokeColor: "#ed6c3b",
            pointColor: "#ed6c3b",
            pointStrokeColor: "#ed6c3b",
            pointHighlightFill: "#ed6c3b",
            pointHighlightStroke: "#ed6c3b",
            data: [0, 0, 10, 50, 70, 90, 210, 230, 150, 184, 200, 150]
        }
				  
				  
				  ]
    };
    var lineGraphOptions = {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - Whether the line is curved between points
        bezierCurve: false,

        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };

   // var lineCtx = document.getElementById("myGraph").getContext("2d");
   // var myLineChart = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);
},4000);
   
   */

    

});


