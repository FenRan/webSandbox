$('#validation').on('click', validationBench);

var emails = [],
    validEmail = 0,
    $info = $('#info'),
    $count = $('#count'),
    showEmails = true;

var regexp1 = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
var regexp2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validationBench(){
    var contEmail = ($count.val() !== '') ? $count.val() : 100000;
    showEmails = ($('#hideEmails').is(':checked')) ? false : true;

    $info.empty();
    generateEmails(contEmail);
    $info.append('1 reg | '); validateEmail(regexp1);
    $info.append('2 reg | '); validateEmail(regexp2);
};

function validateEmail(regexp){
    var t0 = performance.now();
    maching(regexp);
    var t1 = performance.now();
    $info.append('Took '+(t1 - t0).toFixed(0)+' milliseconds to validate, valid: '+validEmail+' emails');
    splitter();
};

function maching(regexp){
    var validation = [];
    validEmail = 0;
    for (var i=0;i<emails.length;i++){
        validation[i] = regexp.test(emails[i]);
        if (validation[i]) {
            if (showEmails){
                $info.append(emails[i]);
                splitter();
            }
            validEmail++;
        }
    }
};

function generateEmails(count){
    var startTook = performance.now();
    for (var i=0;i<count;i++){
        emails[i] = randomWord(20)
               +'.'+randomWord(20)
               +'@'+randomWord(15)
               +'.'+randomWord(randomNumber(1));
    }
    var endTook = performance.now();
    splitter();
    $info.append('Took '+(endTook - startTook).toFixed(0)+' milliseconds to generate '+ count +' emails');
    splitter();
};

function randomWord(n){  
    var word ='', 
        dictionary ='0123456789qwertyuiopasdfghjklzxcvbnm', 
        dictionaryLength = dictionary.length;
  while(word.length < n)
    word += dictionary[Math.random() * dictionaryLength|0];
  return word;
};

function randomNumber(n){  
    var number ='', 
        dictionary ='0123456789', 
        dictionaryLength = dictionary.length;
  while(number.length < n)
    number += dictionary[Math.random() * dictionaryLength|0];
  return number;
};

function splitter(){
    $info.append('<br><hr>');
};