/*---------------------------------------------------- 
 Experiment starts
 ------------------------------------------------------*/
var timeline = [];
var welcome = {
    type: 'html-button-response',
    stimulus: '<p style="text-align: left">Welcome to the experiment.<br><br>This study, performed by Tel Aviv University, is aimed at gaining a better understanding of learning and memory processes. Your contribution may help our lab develop better clinical treatments.<br>'
        + "In this study we will ask you to complete a memory game called the 'squares game' and a card game, followed by several questionnaires.<br> The study should take about <b>50 minutes</b>.<br><br>"
        + 'For your participation, <b>you will earn a minimum of £4, but may earn up to £5 (in total) based on your performance</b> in the included card game.<br>'
        + ' You are free to leave at any time by pressing ‘Esc’ and closing your browser but please note that full payment is provided only for full participation.<br> <b>Please be assured that all data is collected anonymously.</b><br>'
        + '<br><b>Restrictions:</b> You can only participate if you are aged 18 to 50 and are not currently diagnosed with depression, anxiety, epilepsy, learning disabilities, color blindness, or any other psychiatric or neurological disorders.'
        + '<br>Thank you for your participation and please feel free to contact us using the Prolific platform for any question you might have.',
    choices: ['I confirm that I read and accept the terms mentioned above']
};
timeline.push(welcome) //45sec
timeline.push({
    type: 'fullscreen',
    fullscreen_mode: true,
    message: '<img class=fullscreen src="images/squares/example4.png"><p>Please make sure that your browser downloads toolbar is closed and that your browser zoom-in settings are on 100% by pressing ctrl and +/- on your keyboard.<br><br>The experiment will switch to full screen mode when you press the button below</p>'
    , data: { screen_width: window.screen.width, screen_height: window.screen.height }
});

var p_details = {
    type: "survey-text",
    questions: [{ prompt: "Enter Prolific ID number", name: 'sub_num' }],
    on_finish: function () {
        subN = JSON.parse(jsPsych.data.getLastTrialData().select('responses').values).sub_num
    }
}
timeline.push(p_details)