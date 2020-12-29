
/*---------------------------------------------------- 
After experiment
------------------------------------------------------*/
var conclusion = {
    type: 'html-keyboard-response',
    stimulus: function () {
        var feedback_string = '<div style="font-size:20px;">This task is over. Thank you for your participation in this task.<br>';
        var correct_test_square = jsPsych.data.get().filter({ phase: 'exp', trial_name: 'test_cards' }).select('is_correct').sum()
        var total_test_square = jsPsych.data.get().filter({ phase: 'exp', trial_name: 'test_cards' }).select('is_correct').count()
        var test_square_accuracy = correct_test_square / total_test_square;
        var accuracy_string = (test_square_accuracy * 100).toFixed(2) + '%'
        feedback_string += 'Your accuracy was: ' + accuracy_string
        var number_of_reward1 = jsPsych.data.get().filter({ phase: 'exp', trial_name: 'reward1' }).select('reward').sum()
        var number_of_reward2 = jsPsych.data.get().filter({ phase: 'exp', trial_name: 'reward2' }).select('reward').sum()
        var bonus = 0.006 * (number_of_reward1 + number_of_reward2)
        var bonus_string = bonus.toFixed(2)
        feedback_string += '<br> Your bonus is: ' + bonus_string + 'Pounds </div>'

        return feedback_string
    }
}
timeline.push(conclusion)

timeline.push({
    type: 'fullscreen',
    fullscreen_mode: false
});


var IDsub = Date.now();
local = true;
var dataLog = {
    type: 'html-keyboard-response',
    stimulus: " ",
    trial_duration: 100,
    on_finish: function (data) {
        var data = jsPsych.data.get()
        file_name = "WM_visual_array_" + subN + "_" + IDsub.toString() + ".csv"
        if (local) {
            data.localSave('csv', file_name)
        } else {
            saveData(file_name, data.csv());
        }
    }
}
timeline.push(dataLog)

function download_csv(csv) {
    var hiddenElement = document.createElement('a');
    file_name = "WM_visual_array_" + subN + "_" + IDsub.toString() + ".csv"
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = file_name;
    hiddenElement.click();
}
