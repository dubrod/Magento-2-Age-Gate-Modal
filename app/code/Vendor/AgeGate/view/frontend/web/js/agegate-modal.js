define([
        "jquery", "Magento_Ui/js/modal/modal"
    ], function($){
        var AgeGateModal = {
            initModal: function(config, element) {
                $target = $(config.target);
                $target.modal({
                  buttons: [{
                      text: '',
                      class: 'age-gate-button',
                      click: function () {}
                  }],
                  clickableOverlay: 0
                });
                $element = $(element);

                var age_ver = localStorage.getItem('roc_age_ver');
                if(!age_ver){
                  $target.modal('openModal');
                }
            }
        };
        return {
            'agegate-modal': AgeGateModal.initModal
        };
    }
);
