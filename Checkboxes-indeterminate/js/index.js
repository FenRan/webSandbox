var checkLength = $('.check').length,
	checkAllBtn = $('#checkAll'),
	checkBtn = $('.check');		

checkAllBtn.on('click', checkAll);
checkBtn.on('click', indermCheck);

function checkAll(){
	($(this).is(':checked'))
		?checkBtn.prop('checked', true)
		:checkBtn.prop('checked', false);
};

function indermCheck(){
	var countCheck = $('.check:checkbox:checked').length;
	($(this).is(':checked'))
		?((countCheck == checkLength)
			?checkAllBtn.prop({'indeterminate': false, 'checked': true})
			:checkAllBtn.prop('indeterminate', true))
		:((countCheck == 0)
			?checkAllBtn.prop({'indeterminate': false, 'checked': false})
			:checkAllBtn.prop('indeterminate', true));
};