var validationResult = document.getElementById('bsn-validation-result');

function generateBSN() {
  var rnd;

  do {
    rnd = Math.floor(Math.random() * 1000000000);
    var rndString = addLeadingZerosToBSN(rnd);

    var sum = getSumBSN(rndString);
    console.log("BSN: "+rndString+", sum: "+sum+", mod: "+(sum%11) );
  } while (sum % 11)

  return rndString;
}

function addLeadingZerosToBSN(bsn) {
	return ("000000000" + bsn).slice(-9);
}

function getSumBSN(bsn) {

  var a = parseInt(bsn[0])*9;
  var b = parseInt(bsn[1])*8;
  var c = parseInt(bsn[2])*7;
  var d = parseInt(bsn[3])*6;
  var e = parseInt(bsn[4])*5;
  var f = parseInt(bsn[5])*4;
  var g = parseInt(bsn[6])*3;
  var h = parseInt(bsn[7])*2;
  var i = parseInt(bsn[8])*-1;

  var sum = a+b+c+d+e+f+g+h+i;
  return sum;
}

function isValidBSN(bsn) {
  bsn = addLeadingZerosToBSN(bsn);

 
  if (getSumBSN(bsn) % 11) {
    return false;
  } else {
    return true;
  }
}

$('#validate-bsn').on('click', function() {
	
	var bsn = $('#bsn-to-validate').val();
	
	console.info('Validating BSN %s', bsn);
	
	if (!bsn) { return }
	
  if (isValidBSN(bsn)) {
	  console.debug("BSN is valid...");
    $('#bsn-validation-result').html("BSN is valid");
	$('#bsn-validation-result').addClass("label-success").removeClass("label-danger");
  } else {
    $('#bsn-validation-result').html("BSN is invalid");
	$('#bsn-validation-result').addClass("label-danger").removeClass("label-success");
  }
})

$('#generate-bsn').on('click', function() {
  $('#generated-bsn').val(generateBSN());
  $('#generated-bsn').select();
})