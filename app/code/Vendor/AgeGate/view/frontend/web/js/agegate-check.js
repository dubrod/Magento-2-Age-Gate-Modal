define([
        "jquery"
    ], function($){
        var AgeGate = {
            checkAge: function(config, element) {

              $target = $(config.target);
              $element = $(element);
              $element.change(function() {
                var age_gate_year = document.getElementById('age_gate_year');
                var age_gate_day = document.getElementById('age_gate_day');
                var age_gate_month = document.getElementById('age_gate_month');
                var dob = new Date(age_gate_year.value, age_gate_month.value, age_gate_day.value);
                var diff_ms = Date.now() - dob.getTime();
                var age_dt = new Date(diff_ms);

                var age = Math.abs(age_dt.getUTCFullYear() - 1970);
                if(age >= 21){
                  localStorage.setItem('roc_age_ver', age);
                  $target.modal('closeModal');
                }
              });

            }
        };
        return {
            'agegate-check': AgeGate.checkAge
        };
    }
);
