var templates = {
	participation: 'Пожалуйста, <b>авторизируйтесь или зарегистрируйтесь</b>! Тендерные специалисты BiCo помогут вам подготовить документацию, подать заявку на участие и выиграть в тендере.',
	cantViewDocumentation: 'К сожалению, у вас нет прав для просмотра документации.',
	cantViewResult: 'К сожалению, Вам недоступен просмотр результатов тендеров.',
	cantViewResultForDouble: 'К сожалению, Вам запрещен просмотр результатов тендеров.',
	cantAddFavoriteTender: 'Тендер будет сохранен в Личном кабинете в разделе "Мои тендеры"',
	cardNotActive: 'Скачивать документацию могут только клиенты BiCo. Для того чтобы стать нашим клиентом, <a href="/service/zakaz.html">выберите любые услуги и закажите!</a>',
	finishViewLimit: 'Внимание! Ваша компания исчерпала суточный лимит просмотра тендерной документации. Для увеличения объема доступной для просмотра информации свяжитесь с персональным менеджером.',
	extraFunctions: 'Для использования этого инструмента Вам необходимо авторизоваться.',
	suggestForLogin: 'Данная ссылка доступна только после авторизации. Пожалуйста, авторизуйтесь или зарегистрируйтесь на форме ниже.',
	moreInformationTender: 'Вся информации о тендере и сервисы Личного кабинета доступны только зарегистрированным пользователям системы. Если вы уже регистрировались, пожалуйста, авторизуйтесь.',
    checkWinProb: 'Для отправки заявки на подключение авторизуйтесь или зарегистрируйтесь',
	winProbabilityTender: 'Для отправления своего запроса тендерному специалисту и для консультации авторизуйтесь, пожалуйста, или зарегистрируйтесь.',
	checkCorruptionTender: 'Анализ тендеров, поставщиков и заказчиков доступен в Личном кабинете после авторизации в системе bicotender.ru. Если вы уже регистрировались, авторизуйтесь, пожалуйста',
	aNotActive: 'Скачать справочник могут только клиенты «Бико». Для того чтобы стать нашим клиентом, <a href="/service/zakaz.html">выберите любые услуги и закажите!</a>',
	analyticsPromo: 'Эта функция входит в модуль «Аналитика» и доступна только авторизованным пользователям системы bicotender.ru. Если вы еще не подключили его в Личном кабинете, отправьте <a href="/analytics.html">заявку на подключение</a> или авторизуйтесь.',
	analyzeCompany: 'Для анализа заказчика пройдите <a href="/registration/">регистрацию</a> или авторизуйтесь.',
	analyzeConsumers: 'Для анализа конкурентов пройдите <a href="/registration/">регистрацию</a> или авторизуйтесь.',
	analyzeRegion: 'Для анализа отрасли региона пройдите <a href="/registration/">регистрацию</a> или авторизуйтесь.'
};


var showAuthorization = function(text){};

$(document).ready(function(){
	
	$('a[href$="/login/"]').click(function(){
		showAuthorization();
		return false;
	});
	
	window.showAuthorization = function(text, gotoUrl, hideRegistrationLink) {
		var loading = false;
		var formLogin = '';
		var buttons = [];
		var title = '';

		if ($('#js-is-in-api') && $('#js-is-in-api').val()) {
			buttons = [
				{
					text: "Ок",
					click: function() {
						if (loading) {
							return false;
						}
						$(this).dialog("close");
					}
				}
			];
			title = 'Пожалуйста, заполните заявку на подключение';
		} else {
			formLogin = `
				<div id="status-message"></div>
				<dl style="width:250px;">
					<form>
						<dt><label for="login-element">Логин:</label></dt>
						<dd><input type="text" id="login-ajax" name="login"></dd>
						<dt><label for="pswd-element">Пароль:</label></dt>
						<dd ><input type="password" id="password-ajax" name="password"><span class="toggle-password icon-eye"></span></dd>
						<label for="remember" style="margin-top:10px"><input type="checkbox" id="remember" name="remember" checked="checked"> запомнить меня</label>
						<br/ >
					</form>
				</dl>
			`;
			buttons = [
				{
					text: "Вход",
					click: function(){
						if (loading) {
							return false;
						}
						var $successMessageHolder = $('#status-message');

						$successMessageHolder.removeClass();
						$successMessageHolder.addClass('info-block loader').text('Загрузка...');
						loading = true;
						Bc.Ajax({
							url: '/login/ajax/',
							data: {
								login: $("#login-ajax").val(),
								password: $("#password-ajax").val(),
								remember: $("#remember").prop('checked') ? 1 : 0
							},
							success: function(data){
								$successMessageHolder.removeClass();
								if(data.status == 'success') {
									if (gotoUrl != undefined) {
										window.location.href = gotoUrl;
									} else {
										window.location.href = document.URL;
									}
									$successMessageHolder.addClass('success-block loader').text(data.message);
								} else {
									$successMessageHolder.addClass('error-block').text(data.message);
									loading = false;
								}
							}
						});
					}
				},
				{
					text: "Отмена",
					click: function() {
						if (loading) {
							return false;
						}
						$(this).dialog("close");
					}
				},
				
				
			];
			
			if (!hideRegistrationLink) {
				buttons.push({
					text: "Регистрация бесплатно",
					'class': 'reg_button',
					click: function() { location.href = '/registration/'; }
				});				
				buttons.push({
					text: "Забыли пароль?",
					'class': 'forgot_password',
					click: function() { location.href = '/registration/restore/'; }
				});
			}
			
			title = 'Пожалуйста, авторизируйтесь!';
		}

		Bc.Dialog.modal({
			title: title,
			body: formLogin,
			classDialog: 'login',
			width: 500,
			buttons: buttons
			//handler:
		});
		if (templates[text] != undefined) {
			$('#status-message').after('<div class="done"><p>' + templates[text] + '</p></div>');
		}
	}
});

