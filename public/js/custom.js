

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	
	if ( $(window).width() > 992) {
    if ($(".myheader").offset().top > 90) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		
		$(".navigation").addClass("nav-margin-zero");
		
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	
		$(".navigation").removeClass("nav-margin-zero");
		
    }
	
	}
	
	
});







// jQuery for page scrolling feature - requires jQuery Easing plugin - top -88 is given because the header was fixed otherwise it would only have been written  top
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-88
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});















$(function () {
  $('a.link-to-tab').click(function (e) {
    e.preventDefault();
    $('a[href="' + $(this).attr('href') + '"]').tab('show');
  })
});
















// Tooltip used in the top section

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});







/*
	ACCORDIAN plugin
	*/



$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
	  return false; 
  });
	
});






/*
	ACCORDIAN plugin----2
	*/

		
	
		var acc = document.getElementsByClassName("accordion");
		var i;
		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				}
				else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}
	
	
	
























/*
	Review star plugin
	*/
var __slice = [].slice;
(function (e, t) {
	var n;
	n = function () {
		function t(t, n) {
			var r, i, s, o = this;
			this.options = e.extend({}, this.defaults, n);
			this.$el = t;
			s = this.defaults;
			for (r in s) {
				i = s[r];
				if (this.$el.data(r) != null) {
					this.options[r] = this.$el.data(r)
				}
			}
			this.createStars();
			this.syncRating();
			this.$el.on("mouseover.starrr", "span", function (e) {
				return o.syncRating(o.$el.find("span").index(e.currentTarget) + 1)
			});
			this.$el.on("mouseout.starrr", function () {
				return o.syncRating()
			});
			this.$el.on("click.starrr", "span", function (e) {
				return o.setRating(o.$el.find("span").index(e.currentTarget) + 1)
			});
			this.$el.on("starrr:change", this.options.change)
		}
		t.prototype.defaults = {
			rating: void 0
			, numStars: 5
			, change: function (e, t) {}
		};
		t.prototype.createStars = function () {
			var e, t, n;
			n = [];
			for (e = 1, t = this.options.numStars; 1 <= t ? e <= t : e >= t; 1 <= t ? e++ : e--) {
				n.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"))
			}
			return n
		};
		t.prototype.setRating = function (e) {
			if (this.options.rating === e) {
				e = void 0
			}
			this.options.rating = e;
			this.syncRating();
			return this.$el.trigger("starrr:change", e)
		};
		t.prototype.syncRating = function (e) {
			var t, n, r, i;
			e || (e = this.options.rating);
			if (e) {
				for (t = n = 0, i = e - 1; 0 <= i ? n <= i : n >= i; t = 0 <= i ? ++n : --n) {
					this.$el.find("span").eq(t).removeClass("glyphicon-star-empty").addClass("glyphicon-star")
				}
			}
			if (e && e < 5) {
				for (t = r = e; e <= 4 ? r <= 4 : r >= 4; t = e <= 4 ? ++r : --r) {
					this.$el.find("span").eq(t).removeClass("glyphicon-star").addClass("glyphicon-star-empty")
				}
			}
			if (!e) {
				return this.$el.find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty")
			}
		};
		return t
	}();
	return e.fn.extend({
		starrr: function () {
			var t, r;
			r = arguments[0], t = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
			return this.each(function () {
				var i;
				i = e(this).data("star-rating");
				if (!i) {
					e(this).data("star-rating", i = new n(e(this), r))
				}
				if (typeof r === "string") {
					return i[r].apply(i, t)
				}
			})
		}
	})
})(window.jQuery, window);
$(function () {
	return $(".starrr").starrr()
})
$(function () {
	$('.starrr').on('starrr:change', function (e, value) {
		var nota = $(this).find('.nota');
		nota.val(value);
	});
});

function esconder(a) {
	$(a).addClass('hidden');
}

function mostrar() {
	if ($('.btaval').hasClass('hidden')) {
		$('.btaval').removeClass('hidden');
	}
}

function test() {
	$(".formtest").submit(function (e) {
		var result = $(this).serialize();
		alert(result);
		e.preventDefault();
	});
}












(function() {

	var parent = document.querySelector("#rangeSlider");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);

			if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
				// var tmp = slide2;
				// slide2 = slide1;
				// slide1 = tmp;
			}

			numberS[0].value = slide1;
			numberS[1].value = slide2;
		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
				number2 = parseFloat(numberS[1].value);

			if (number1 > number2) {
				var tmp = number1;
				numberS[0].value = number2;
				numberS[1].value = tmp;
			}

			rangeS[0].value = number1;
			rangeS[1].value = number2;

		}
	});

})();








/*
	Tab Slide Out
	*/




$(document).ready(function() {
	

    
    $('#right').tabSlideOut({
      tabLocation: 'right',
      offsetReverse: true, // position the panel from the bottom of the page, rather than the top
      handleOffsetReverse: true, // position the tab from the bottom of the panel, rather than the top
      onLoadSlideOut: false, // open by default
	  /* don't close this tab if a button is clicked, or if the checkbox is set */
	  clickScreenToCloseFilters: [
			'button', // ignore button clicks
			function(event){ // custom filter
				// filters need to return true to filter out the click passed in the parameter
				return $('#keepTabOpen').is(':checked');
			}
	  ]
    });
    
   
    
	/* expand the content in each tab */
	$('#expand').click(function(e){
		$('textarea').each(function(i,n){
			var ta = $(n);
			ta.attr('rows','10').attr('cols','60');
		});
	});

	/* bounce every tab */
	$('#bounce').click(function(e){
		$('.ui-slideouttab-panel').each(function(i,n){
			var tab = $(n);
			tab.tabSlideOut('bounce');
		});
	});
    
    /* register event handler for every tab event, and show events on the page*/
    $(document).on('slideouttabopen slideouttabclose slideouttabbounce',function(event){
        var text = $(event.target).attr('id')+': '+event.type;
        $('#events').append(text+"\n");
    });
    
});























/* Cart Sub menu all pages */






jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var $L = 1200,
		$menu_navigation = $('#main-nav'),
		$cart_trigger = $('#cd-cart-trigger'),
		$hamburger_icon = $('#cd-hamburger-menu'),
		$lateral_cart = $('#cd-cart'),
		$shadow_layer = $('#cd-shadow-layer');

	//open lateral menu on mobile
	$hamburger_icon.on('click', function(event){
		event.preventDefault();
		//close cart panel (if it's open)
		$lateral_cart.removeClass('speed-in');
		toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
	});

	//open cart
	$cart_trigger.on('click', function(event){
		event.preventDefault();
		//close lateral menu (if it's open)
		$menu_navigation.removeClass('speed-in');
		toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
	});

	//close lateral cart or lateral menu
	$shadow_layer.on('click', function(){
		$shadow_layer.removeClass('is-visible');
		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $lateral_cart.hasClass('speed-in') ) {
			$lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$menu_navigation.removeClass('speed-in');
		} else {
			$menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$lateral_cart.removeClass('speed-in');
		}
	});

	//move #main-navigation inside header on laptop
	//insert #main-navigation after header on mobile
	move_navigation( $menu_navigation, $L);
	$(window).on('resize', function(){
		move_navigation( $menu_navigation, $L);
		
		if( $(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
			$menu_navigation.removeClass('speed-in');
			$shadow_layer.removeClass('is-visible');
			$('body').removeClass('overflow-hidden');
		}

	});
});

function toggle_panel_visibility ($lateral_panel, $background_layer, $body) {
	if( $lateral_panel.hasClass('speed-in') ) {
		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		$lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$body.removeClass('overflow-hidden');
		});
		$background_layer.removeClass('is-visible');

	} else {
		$lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$body.addClass('overflow-hidden');
		});
		$background_layer.addClass('is-visible');
	}
}

function move_navigation( $navigation, $MQ) {
	if ( $(window).width() >= $MQ ) {
		$navigation.detach();
		$navigation.appendTo('header');
	} else {
		$navigation.detach();
		$navigation.insertAfter('header');
	}
}





















$(function () {
  $('a.link-to-tab').click(function (e) {
    e.preventDefault();
    $('a[href="' + $(this).attr('href') + '"]').tab('show');
  })
});























/*
Scroll to top 
*/



$(document).ready(function(){

$(function(){
 
    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});











//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });






















$(".click1").click(function() {
    $('html,body').animate({
        scrollTop: $("#reach1").offset().top-140},
        'slow');
});
$(".click2").click(function() {
    $('html,body').animate({
        scrollTop: $("#reach2").offset().top-140},
        'slow');
});
$(".click3").click(function() {
    $('html,body').animate({
        scrollTop: $("#reach3").offset().top-140},
        'slow');
});
$(".click4").click(function() {
    $('html,body').animate({
        scrollTop: $("#reach4").offset().top-140},
        'slow');
});
$(".click5").click(function() {
    $('html,body').animate({
        scrollTop: $("#reach5").offset().top-140},
        'slow');
});















$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );



















// Setup the calendar with the current date
$(document).ready(function(){
    var date = new Date();
    var today = date.getDate();
    // Set click handlers for DOM elements
    $(".right-button").click({date: date}, next_year);
    $(".left-button").click({date: date}, prev_year);
    $(".month").click({date: date}, month_click);
    $("#add-button").click({date: date}, new_event);
    // Set current month as active
    $(".months-row").children().eq(date.getMonth()).addClass("active-month");
    init_calendar(date);
    var events = check_events(today, date.getMonth()+1, date.getFullYear());
    show_events(events, months[date.getMonth()], today);
});

// Initialize the calendar by appending the HTML dates
function init_calendar(date) {
    $(".tbody").empty();
    $(".events-container").empty();
    var calendar_days = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = days_in_month(month, year);
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();
    // Set date to 1 to find the first day of the month
    date.setDate(1);
    var first_day = date.getDay();
    // 35+firstDay is the number of date elements to be added to the dates table
    // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
    for(var i=0; i<35+first_day; i++) {
        // Since some of the elements will be blank, 
        // need to calculate actual date from index
        var day = i-first_day+1;
        // If it is a sunday, make a new row
        if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
        }
        // if current index isn't a day in this month, make it blank
        if(i < first_day || day > day_count) {
            var curr_date = $("<td class='table-date nil'>"+"</td>");
            row.append(curr_date);
        }   
        else {
            var curr_date = $("<td class='table-date'>"+day+"</td>");
            var events = check_events(day, month+1, year);
            if(today===day && $(".active-date").length===0) {
                curr_date.addClass("active-date");
                show_events(events, months[month], day);
            }
            // If this date has any events, style it with .event-date
            if(events.length!==0) {
                curr_date.addClass("event-date");
            }
            // Set onClick handler for clicking a date
            curr_date.click({events: events, month: months[month], day:day}, date_click);
            row.append(curr_date);
        }
    }
    // Append the last row and set the current year
    calendar_days.append(row);
    $(".year").text(year);
}

// Get the number of days in a given month/year
function days_in_month(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);    
}

// Event handler for when a date is clicked
function date_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    show_events(event.data.events, event.data.month, event.data.day);
};

// Event handler for when a month is clicked
function month_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()+1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()-1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for clicking the new event button
function new_event(event) {
    // if a date isn't selected then do nothing
    if($(".active-date").length===0)
        return;
    // remove red error input on click
    $("input").click(function(){
        $(this).removeClass("error-input");
    })
    // empty inputs and hide events
    $("#dialog input[type=text]").val('');
    $("#dialog input[type=number]").val('');
    $(".events-container").hide(250);
    $("#dialog").show(250);
    // Event handler for cancel button
    $("#cancel-button").click(function() {
        $("#name").removeClass("error-input");
        $("#count").removeClass("error-input");
        $("#dialog").hide(250);
        $(".events-container").show(250);
    });
    // Event handler for ok button
    $("#ok-button").unbind().click({date: event.data.date}, function() {
        var date = event.data.date;
        var name = $("#name").val().trim();
        var count = parseInt($("#count").val().trim());
        var day = parseInt($(".active-date").html());
        // Basic form validation
        if(name.length === 0) {
            $("#name").addClass("error-input");
        }
        else if(isNaN(count)) {
            $("#count").addClass("error-input");
        }
        else {
            $("#dialog").hide(250);
            console.log("new event");
            new_event_json(name, count, date, day);
            date.setDate(day);
            init_calendar(date);
        }
    });
}

// Adds a json event to event_data
function new_event_json(name, count, date, day) {
    var event = {
        "occasion": name,
        "invited_count": count,
        "year": date.getFullYear(),
        "month": date.getMonth()+1,
        "day": day
    };
    event_data["events"].push(event);
}

// Display all events of the selected date in card views
function show_events(events, month, day) {
    // Clear the dates container
    $(".events-container").empty();
    $(".events-container").show(250);
    console.log(event_data["events"]);
    // If there are no events for this date, notify the user
    if(events.length===0) {
        var event_card = $("<div class='event-card'></div>");
        var event_name = $("<div class='event-name'>There are no events planned for "+month+" "+day+".</div>");
        $(event_card).css({ "border-left": "10px solid #FF1744" });
        $(event_card).append(event_name);
        $(".events-container").append(event_card);
    }
    else {
        // Go through and add each event as a card to the events container
        for(var i=0; i<events.length; i++) {
            var event_card = $("<div class='event-card'></div>");
            var event_name = $("<div class='event-name'>"+events[i]["occasion"]+":</div>");
            var event_count = $("<div class='event-count'>"+events[i]["invited_count"]+" Invited</div>");
            if(events[i]["cancelled"]===true) {
                $(event_card).css({
                    "border-left": "10px solid #FF1744"
                });
                event_count = $("<div class='event-cancelled'>Cancelled</div>");
            }
            $(event_card).append(event_name).append(event_count);
            $(".events-container").append(event_card);
        }
    }
}

// Checks if a specific date has any events
function check_events(day, month, year) {
    var events = [];
    for(var i=0; i<event_data["events"].length; i++) {
        var event = event_data["events"][i];
        if(event["day"]===day &&
            event["month"]===month &&
            event["year"]===year) {
                events.push(event);
            }
    }
    return events;
}

// Given data for events in JSON format
var event_data = {
    "events": [
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
    {
        "occasion": " Test Event",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 11
    }
    ]
};

const months = [ 
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December" 
];
















$(document).ready(function() {
    $('#close_div1').on('click', function(e) { 
        $('#free_wrap').addClass("remove_element"); 
		
    });
});




$(document).ready(function() {
    $('.cross2').on('click', function(e) { 
        $('.cookie').addClass("remove_element"); 
		
    });
});











$(document).ready(function(){
  $(".sub_wrap input").click(function(){
    $(".white_div").show();
  });
	
	
	 $(".cross").click(function(){
    $(".white_div").hide();
  });
	
	
	
 
});







$(document).ready(function(){
  $(".sub_wrap2 input").click(function(){
    $(".white_div2").show();
  });
	
	
	 $(".cross2").click(function(){
    $(".white_div2").hide();
  });
	
	
	
 
});




$(document).ready(function(){
  $(".sub_wrap3 input").click(function(){
    $(".white_div3").show();
  });
	
	
	 $(".cross3").click(function(){
    $(".white_div3").hide();
  });
	
	
	
 
});
























