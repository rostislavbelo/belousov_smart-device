(function () {

  /* Управление открытием-закрытием аккордеонов в футере */
  const listSite = document.querySelector('.sections-hidden__list-site');
  const listAddress = document.querySelector('.sections-hidden__list-address');
  const buttonAddress = document.querySelector('.sections-hidden__button-address');
  const buttonSite = document.querySelector('.sections-hidden__button-site');

  if (listSite && listAddress && buttonAddress && buttonSite) {

    buttonSite.addEventListener('click', () => {
      buttonSite.classList.toggle('sections-hidden__button-site--closed');
      listSite.classList.toggle('sections-hidden__list--hidden');
      buttonAddress.classList.remove('sections-hidden__button-site--closed');
      listAddress.classList.add('sections-hidden__list--hidden');
    });

    buttonAddress.addEventListener('click', () => {
      buttonAddress.classList.toggle('sections-hidden__button-site--closed');
      listAddress.classList.toggle('sections-hidden__list--hidden');
      buttonSite.classList.remove('sections-hidden__button-site--closed');
      listSite.classList.add('sections-hidden__list--hidden');
    });
  }

  /*  Появление и скрытие попапа */
  const popup = document.querySelector('.popup');
  const body = document.querySelector('.page-body');
  const buttonPopup = document.querySelector('.popup__button-close');
  const buttonShowPopup = document.querySelector('.page-header__button');
  const inputFocus = document.querySelector('#popup-name');

  if (popup && buttonPopup && body && buttonShowPopup && inputFocus) {
    popup.classList.add('popup--hidden');

    buttonShowPopup.addEventListener('click', (evt) => {
      evt.preventDefault();

      popup.classList.remove('popup--hidden');
      popup.classList.add('popup--show');
      body.classList.add('page-body--no-scroll');
      buttonPopup.classList.remove('popup__button-close--hidden');
      inputFocus.focus();
    });

    const hiddenPopup = () => {
      popup.classList.remove('popup--show');
      popup.classList.add('popup--hidden');
      body.classList.remove('page-body--no-scroll');
    };

    buttonPopup.addEventListener('click', () => {
      hiddenPopup();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        hiddenPopup();
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target === popup) {
        hiddenPopup();
      }
    });
  }

  // Маска инпута телефона. Код позаимствован тут: https://www.youtube.com/watch?v=Lxj_v5z0xRE&t=3268s и немного доработан.
  const phoneInputs = document.querySelectorAll('[name="phone"]');

  phoneInputs.forEach((number) => {
    number.addEventListener('click', () => {
      number.value = '+7 (';
    });
  });

  const getInputNumbersValue = (input) => input.value.replace(/\D/g, '');

  const onPhonePaste = (e) => {
    const input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  const onPhoneInput = (e) => {
    const input = e.target,
      selectionStart = input.selectionStart;

    let inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '';

    if (!inputNumbersValue) {
      return input.value = '';
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') { inputNumbersValue = `7${inputNumbersValue}`; }
      const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
      formattedInputValue = input.value = `${firstSymbols} `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  };
  const onPhoneKeyDown = function (e) {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode === 8 && inputValue.length === 1) {
      e.target.value = '';
    }
  };

  for (const phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }

}());
