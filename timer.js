var timer_start_id = 'input#timer_start';
var timer_time_id = 'input#timer_time';
var timer_count_id = 'span#timer_count';
var timer_end_message = 'Time is up! Take a well-deserved break.';

var timer_countdown = '';
var timer_status = 'stopped';
var timer_current = '';
function timer(action){
  
  if (action == 'start') {
    if (timer_status == 'stopped') {
      timer_updtv(timer_start_id, 'Pause');
      timer_status = 'running';
      timer_current = timer_countdown;
      timer_updtt(timer_count_id, timer_countdown);
    }
    else if (timer_status == 'running') {
      timer_updtv(timer_start_id, 'Resume');
      timer_status = 'paused';
    }
    else if (timer_status == 'paused') {
      timer_updtv(timer_start_id, 'Pause');
      timer_status = 'running';
    }
  }
  else if (action == 'stop') {
    timer_updtv(timer_start_id, 'Start');
    timer_status = 'stopped';
    timer_updtt(timer_count_id, timer_end_message);
  }
  else if (action == 'reset') {
    timer_updtv(timer_start_id, 'Start');
    timer_status = 'stopped';
    timer_updtt(timer_count_id, timer_countdown);
  }
  
  var a =  timer_current.split(":");
  var m = a[0];
  var s = (a[1] - 1);
  
  if (s < 0) {
    if (parseInt(m) == 0) {
      timer_updtv(timer_start_id, 'Start');
      timer_status = 'stopped';
      timer_updtt(timer_count_id, timer_end_message);
    }
    else {
      m = m - 1;
      s = 59;
    }
  }
  
  if(s >= 0){
    setTimeout(function(){
      if (timer_status == 'running') {
        m = (parseInt(m) < 10)? "0" + parseInt(m): m;
        s = (parseInt(s) < 10)? "0" + parseInt(s): s;
        timer_updtt(timer_count_id, m + ":" + s);
        timer_current = m + ":" + s;
        timer('');
      }
    }, 1000);
  }
}

function timer_updtv(selector, value) {
  if (selector != '') {
    $(selector).val(value);
  }
}
function timer_updtt(selector, value) {
  if (selector != '') {
    $(selector).text(value);
  }
}

$(document).ready(function() {
  timer_countdown = $(timer_time_id).val();
  timer_updtt(timer_count_id, timer_countdown);
  
  $(timer_time_id).keyup(function() {
    timer_countdown = $(timer_time_id).val();
    timer_updtt(timer_count_id, timer_countdown);
    timer_updtv(timer_start_id, 'Start');
    timer_status = 'stopped';
  });
});