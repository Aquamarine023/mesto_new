(()=>{"use strict";var e=document.querySelector(".profile__add-button"),t=document.querySelector(".profile__edit-button"),n=document.querySelector(".popup_form_edit"),r=document.querySelector(".popup_form_add"),o=document.querySelector(".popup_form_delete"),i=document.querySelector(".popup_form_avatar"),u=document.querySelector(".popup_form_fullscreen"),a=document.forms.edit_profile,c=document.forms.add_mesto,s=document.forms.edit_avatar,l=document.querySelector(".popup__image"),f=document.querySelector(".popup__description"),p=a.elements.profile_name,h=a.elements.profile_job,d=document.querySelector(".profile__edit-avatar"),_=document.querySelector(".elements"),y={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__text_type_error",errorClass:"popup__text-error_visible"};function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r){var o=t.data,i=t.handleClickImage,u=t.handleDeleteCard,a=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likes=o.likes,this._id=o._id,this._owner=o.owner,this._userId=r,this._handleClickImage=i,this._handleDeleteCard=u,this._handleLikeCard=a,this._teplateSelector=n}var t,n;return t=e,(n=[{key:"getCardId",value:function(){return this._id}},{key:"removeCard",value:function(){this._item.remove(),this._item=null}},{key:"_setEventListeners",value:function(){var e=this;this._item.querySelector(".element__delete").addEventListener("click",(function(){return e._handleDeleteCard(e)})),this._item.querySelector(".element__like").addEventListener("click",(function(){return e._handleLikeCard(e)})),this._item.querySelector(".element__image").addEventListener("click",(function(){return e._handleClickImage(e._name,e._link)}))}},{key:"_getTemplateElement",value:function(){return document.querySelector(this._teplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_toggleTrashButton",value:function(){this._userId!==this._owner._id&&(this._item.querySelector(".element__delete").style.display="none")}},{key:"_toggleLikeState",value:function(){this._checkUserLike()?this.setLike():this.unsetLike()}},{key:"createCard",value:function(){this._item=this._getTemplateElement(),this._likeButton=this._item.querySelector(".element__like"),this._likeCounter=this._item.querySelector(".element__like-count");var e=this._item.querySelector(".element__image");return this._setEventListeners(),this._toggleTrashButton(),this._toggleLikeState(),this._likeCounter.textContent=this._likes.length,e.src=this._link,e.alt=this._name,this._item.querySelector(".element__title").textContent=this._name,this._item}},{key:"setLike",value:function(){this._likeButton.classList.add("element__like_active"),this.isLiked=!0}},{key:"unsetLike",value:function(){this._likeButton.classList.remove("element__like_active"),this.isLiked=!1}},{key:"updateLikes",value:function(e){this._likeCounter.textContent=e.length}},{key:"_checkUserLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}}])&&m(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_showErrorText",(function(e){r._errorMessage=r._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(r._config.inputErrorClass),r._errorMessage.textContent=e.validationMessage,r._errorMessage.classList.add(r._config.errorClass)})),k(this,"_hideErrorText",(function(e){r._errorMessage=r._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(r._config.inputErrorClass),r._errorMessage.textContent="",r._errorMessage.classList.remove(r._config.errorClass)})),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorText(e):this._showErrorText(e)}},{key:"_hasEmptyInputValue",value:function(){return this._inputList.every((function(e){return 0===e.value.length}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonSubmitState",value:function(){this._hasInvalidInput()||this._hasEmptyInputValue()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_addEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonSubmitState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonSubmitState(),this._inputList.forEach((function(t){e._hideErrorText(t)}))}},{key:"enableValidation",value:function(){this._addEventListeners()}}])&&b(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItem",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&E(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__button-close")&&e.close()}))}}])&&S(t.prototype,n),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},I(e,t,n||e)}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitForm=r,t._formList=t._popup.querySelector(".popup__form"),t._inputList=Array.from(t._formList.querySelectorAll(".popup__text")),t._saveButton=t._popup.querySelector(".popup__submit"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;I(R(u.prototype),"setEventListeners",this).call(this),this._formList.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){I(R(u.prototype),"close",this).call(this),this._formList.reset()}},{key:"isLoading",value:function(e){this._saveButton.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&O(t.prototype,n),u}(w);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},U(e,t,n||e)}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function A(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._popupImage=t,r._popupText=n,r}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupText.textContent=e,U(D(u.prototype),"open",this).call(this)}}])&&x(t.prototype,n),u}(w);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t){var n=t.userName,r=t.userInfo,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userInfo.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}])&&N(t.prototype,n),e}();function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleRes",value:function(e){return e.ok?e.json():Promise.reject(console.log("Ошибка: ".concat(e.status)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._handleRes(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._handleRes(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.profile_name,about:e.profile_job})}).then((function(e){return t._handleRes(e)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleRes(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar_link})}).then((function(e){return t._handleRes(e)}))}}])&&F(t.prototype,n),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,n){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},K(e,t,n||e)}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}function W(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y,Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function u(){return z(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;K(X(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}}])&&G(t.prototype,n),u}(w),$=new J({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-33",headers:{authorization:"73e2fe07-3a69-412d-a8a3-d9cbb88472bf","Content-Type":"application/json"}}),ee=new g(y,a),te=new g(y,c),ne=new g(y,s),re=new Z(o);$.getUserInfo().then((function(e){oe.setUserInfo(e),oe.setUserAvatar(e),Y=e._id})).catch((function(e){return console.log("Ошибка получения данных пользователя: ".concat(e))}));var oe=new M({userName:".profile__title",userInfo:".profile__subtitle",userAvatar:".profile__avatar"}),ie=new T({popupSelector:n,submitForm:function(e){ie.isLoading(!0),$.patchUserInfo(e).then((function(e){oe.setUserInfo(e),ie.close()})).catch((function(e){return console.log("Ошибка обновления пользовательских данных: ".concat(e))})).finally((function(){ie.isLoading(!1)}))}}),ue=new T({popupSelector:i,submitForm:function(e){ue.isLoading(!0),$.updateAvatar(e).then((function(e){oe.setUserAvatar(e),ue.close()})).catch((function(e){return console.log("Ошибка обновления аватара: ".concat(e))})).finally((function(){ue.isLoading(!1)}))}}),ae=new T({popupSelector:r,submitForm:function(e){ae.isLoading(!0),$.postNewCard(e).then((function(e){le.addItem(se(e)),ae.close()})).catch((function(e){return console.log("Ошибка создания карточки: ".concat(e))})).finally((function(){ae.isLoading(!1)}))}}),ce=new V(u,l,f);function se(e){var t=new v({data:e,handleClickImage:function(){ce.open(e.name,e.link)},handleDeleteCard:function(){re.setSubmitAction((function(){$.deleteCard(t).then((function(){t.removeCard(),re.close()})).catch((function(e){return console.log("Ошибка удаления карточки: ".concat(e))}))})),re.open()},handleLikeCard:function(){t.isLiked?$.deleteCardLike(t.getCardId()).then((function(e){t.unsetLike(),t.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка при удалении лайка: ".concat(e))})):$.addCardLike(t.getCardId()).then((function(e){t.setLike(),t.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка при постановке лайка: ".concat(e))}))}},".element__template",Y);return t.createCard()}var le=new L({renderer:function(e){le.addItem(se(e))}},_);$.getInitialCards().then((function(e){le.renderItem(e)})).catch((function(e){return console.log("Ошибка отрисовки карточек: ".concat(e))})),ae.setEventListeners(),ie.setEventListeners(),ue.setEventListeners(),ce.setEventListeners(),re.setEventListeners(),t.addEventListener("click",(function(){var e=oe.getUserInfo();p.value=e.name,h.value=e.about,ie.open()})),e.addEventListener("click",(function(){te.resetValidation(),ae.open()})),d.addEventListener("click",(function(){ne.resetValidation(),ue.open()})),te.enableValidation(),ee.enableValidation(),ne.enableValidation()})();