const modalBtn = document.querySelectorAll('.modal-btn')
const modalPlan = document.querySelectorAll('.modal-plan')
const modalClose = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')
const formModalName = document.querySelector('.modal-form__name')
const formModalEmail = document.querySelector('.modal-form__email')
const errorName = document.querySelector('.modal-form__namewarning')
const errorEmail = document.querySelector('.modal-form__emailwarning')
const modalBtnSubmit = document.querySelector('.modal-btn__submit')
let plan

modalBtn.forEach(item => item.addEventListener('click', (e) => {
    plan = e.target.value
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
    document.body.style.overflowY = "hidden"
    modalPlan.forEach(item => item.value == plan ? item.checked = true : item.checked = false)
}))


modalClose.addEventListener("click", close)

function close() {
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
    document.body.style.overflowY = "auto"

    formModalName.classList.remove('error')
    formModalEmail.classList.remove('error')
    errorName.classList.remove('warning')
    errorEmail.classList.remove('warning')
}

// if(formModalName.value == '' && formModalEmail.value == '') {
//     modalBtnSubmit.disabled = true
// } else {
//     modalBtnSubmit.disabled = false
// }

document.querySelector(".modal-body").onsubmit = (e) => {
    e.preventDefault()


    if (formModalName.value == '') {
        formModalName.classList.add('error')
        errorName.classList.add('warning')
    } else {
        formModalName.classList.remove('error')
        errorName.classList.remove('warning')
    }

    if (formModalEmail.value == '') {
        formModalEmail.classList.add('error')
        errorEmail.classList.add('warning')
    } else {
        formModalEmail.classList.remove('error')
        errorEmail.classList.remove('warning')
    }

    if (formModalName.value !== '' && formModalEmail.value !== '') {
        console.log(false);
        document.querySelector(".modal-loading").style.opacity = 1
        document.querySelector(".modal-loading").style.visibility = "visible"
        setTimeout(() => {
            modal.style.opacity = 0;
            modal.style.visibility = 'hidden';
            document.body.style.overflowY = "auto"
            document.querySelector(".modal-body").reset()
            document.querySelector(".modal-loading").style.opacity = 0

            close()
        }, 2000);
    } else {
        console.log('error');
        console.log(true);

    }



}




