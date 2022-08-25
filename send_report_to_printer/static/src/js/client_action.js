odoo.define('send_report_to_printer.client_action',function (require) {
"use strict";

var ClientAction = require('report.client_action');
var session = require('web.session');

ClientAction.include({                // Add the menu in side bar in icon
	init: function () {
			this._super.apply(this, arguments);
		},

	start: function () {
	    var self= this
        return Promise.all([this._super.apply(this, arguments), session.is_bound]).then(function () {
        /**this.$buttons = $(QWeb.render('report.client_action.ControlButtons', {}));**/
        self.$buttons.on('click', '.o_report_print_direct', self.on_click_edit_direct);
        });
     },

	on_click_edit_direct: function () {
         //printJS({printable:this.iframe.src.replace("html","pdf"), type:'pdf', showModal:true})
         if ($.browser.mozilla) {
            window.open(this.iframe.src.replace("html","pdf"), '_blank');
            return;
        }
        if (!this.printContent) {
            console.log(this.iframe.src)
            this.printContent = $('<iframe id="print_iframe_content" src="' + this.iframe.src.replace("html","pdf") + '" style="display:none"></iframe>');
            this.$el.append(this.printContent);
            this.printContent.on('load', function () {
                $(this).get(0).contentWindow.print();
            });
        } else {
            this.printContent.get(0).contentWindow.print();
        }
    },

  });
});
