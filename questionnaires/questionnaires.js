/*---------------------------------------------------- 
Questionnaires
------------------------------------------------------*/
var question = {
    type: 'html-slider-response',
    stimulus: '<p>How much did you believe in our instructions?</p>',
    labels: ['Did not believe at all ', 'Very much believed'],
    data: { trial_num: question }
};
timeline.push(question)