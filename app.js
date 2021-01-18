function postData(){
    const URL = 'https://form-test.simmalugnt.dev/wp-json/simmalugnt/v1/form/'
    const email = getInputValue();

    axios({
        method: 'post',
        url: URL,
        data: {
            email
        }
    })
    .then(data=>successfulPost(data))
    .catch(err=>displayErrorMsg(err));
}


function getInputValue(){
    let val = document.getElementById('text-input').value;
    return val;
}

function displayErrorMsg(err){
    let errorMsg = document.getElementById('error-msg');
    errorMsg.classList.add('show-error-msg');
    addClassToElement('error-msg', 'display-block');
}

function successfulPost(data){
    addClassToElement('text-wrapper', 'hide-content');
    addClassToElement('form-wrapper', 'hide-content');
    addClassToElement('body', 'success-background');
    addClassToElement('main', 'success-border');
    addClassToElement('success-wrapper', 'display-flex');
}

function addClassToElement(el, cls){
    let element = document.getElementById(el);
    element.classList.add(cls);
}
