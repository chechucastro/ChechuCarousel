(function($) {
    'use strict';
    var pluginName = 'ChechuCarousel';
    $[pluginName] = (function() {
        /**
         * @param (object) options - A list of options for the plugin
         */
        $[pluginName] = function(element, options) {
            // Plugin parameters
            this.options            = $.extend({}, options);
            this.$autoplay          = this.options.autoplay     || true;
            this.$paginationDots    = this.options.pagination   || true;
            this.$showArrows        = this.options.arrows       || true;
            this.$autoPlayDuration  = this.options.duration     || 4000;

            // Dom elements
            this.$element           = $(element); // Main object  $('#homeCarousel')
            this.$InnerContent      = this.$element.children().first();
            this.$arrowRight        = this.$InnerContent.find('.arrowRight');
            this.$arrowLeft         = this.$InnerContent.find('.arrowLeft');
            this.$Li                = this.$InnerContent.find('li');
            this.$dots              = this.$element.children().next().find('li');
            this.$selectedOn        = 'on';
            this.$imgWidth          = this.$Li.find('img');
            this.$max               = this.$Li.length - 1;

            // init plugin
            return this.Carousel();
        };
        $[pluginName].prototype = {

            Carousel: function() {
                var t = this,
                    currentIndex = t.$Li.index();
                // Go Forward
                var Next = function() {
                    (currentIndex === t.$max) ? currentIndex = 0 : currentIndex += 1;
                    MoveTo(currentIndex);
                };
                // Go Back
                var Prev = function() {
                    (currentIndex <= 0) ? currentIndex = t.$max : currentIndex -= 1;
                    MoveTo(currentIndex);
                };
                // Move to right or left directions.
                var MoveTo = function(currentIndex) {
                    var imgWidth = t.$imgWidth.width();
                    // Animated movement
                    t.$Li.parent().css(""+Prefixes()+"", "translate(-" + imgWidth * currentIndex + "px,0px)");
                    // Moving dots [0 0 0 ]
                    $('.pagination li').removeClass(t.$selectedOn).eq(currentIndex).addClass(t.$selectedOn);
                    // Deal with arrows
                    if(t.$showArrows) Arrows(currentIndex);
                };
                // Left & Right navigation arrows
                var Arrows = function(currentIndex){
                    t.$arrowRight.add(t.$arrowLeft).show(); // By default I show both arrows
                    (currentIndex === t.$max) ? t.$arrowRight.hide() : t.$arrowRight.show();
                    (currentIndex <= 0) ? t.$arrowLeft.hide() : t.$arrowLeft.show();
                };
                // Create navigation dots
                var CreateDots = function(){
                    var $where = t.$InnerContent.next(),
                        $ul = $('<ul/>').appendTo($where),
                        $html ='';
                            for(var i=0; i < t.$imgWidth.length; i++){
                                $html += '<li><a href="#"><span>'+i+'</span></a></li>';
                            }
                        // Append to "ul" and add class "on" to the first "li" element
                        $ul.html($html).find('li').first().addClass('on');
                };
                // Get Css Prefixes in order to animate the movement with any web browser
                var Prefixes = function(){
                    var styles = window.getComputedStyle(document.documentElement, ''),
                    pre = (Array.prototype.slice
                          .call(styles)
                          .join('')
                          .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                        )[1],
                        dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
                    return "-"+pre+"-transform";
                };
                // Autoplay
                var autoplay = function(){
                    if(t.$autoplay){
                        var move = setInterval(function(){
                            Next();
                        },t.$autoPlayDuration);

                        // Stop autoplay if any navigation part is clicked
                        t.$arrowRight.add(t.$arrowLeft).add(t.$Li).bind('click swipeRight swipeLeft',function(){
                           clearInterval(move);
                        });
                    }
                };
                // Click & Swipe events....
                this.$arrowRight.add(this.$Li).on('click swipeRight', function() {
                    Next();
                });
                this.$arrowLeft.add(this.$Li).on('click swipeLeft', function() {
                    Prev();
                });
                // Display or not conditions
                this.autoplay    = (this.$autoplay) ? autoplay() : autoplay;
                this.CreateDots  = (this.$paginationDots) ? CreateDots() : CreateDots;
                this.ShowArrows  = (this.$showArrows) ? t.$arrowRight.add(t.$arrowLeft).show() : '';
            }
        };
        // Building the plugin
        /**
         * The plugin component
         * @param  {object} options - list of all parameters for the jQuery/Zepto module
         * @return {object} - The jQuery/Zepto DOM element
         */
        return $[pluginName];
    }(window));

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$(this).data(pluginName)) {
                if (options === 'destroy') {
                    return;
                }
                $(this).data(pluginName, new $[pluginName](this, options));
            } else {
                var $plugin = $(this).data(pluginName);
            }
        });
    };

})(window.Zepto || window.jQuery);
