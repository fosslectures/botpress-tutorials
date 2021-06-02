/**
 * This file is not part of Botpress deployment and should be included in your web page's index.html file.
 * Make sure to provide appropriate values for host and botId.
 */
(function ($) {
    "use strict";
    $(function () {
        window.botpressWebChat.init({ host: 'http://localhost:3000/', botId: 'foss-lectures' })
    });
}(jQuery));
