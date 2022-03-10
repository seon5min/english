///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// 
// img app 인지 체크하는 js
// 
// 
///////////////////////////////////////////////////////////////////////////////////////////////////


//EBSe 앱인지 확인하는 스크립트
function IsApp() {
    return typeof(EBSe) == "undefined" ? false : true;
}

var _nEBSeAppCmdID = 0;
var _arEBSeAppHandler = {};

//앱 값 획득
function getAppValue(sName, sDefaultValue, cbGetValueResult) {
	if (!IsApp())
		return cbGetValueResult(sDefaultValue);
	_arEBSeAppHandler["" + _nEBSeAppCmdID] = cbGetValueResult;
	EBSe.getINI(sName, sDefaultValue, "" + _nEBSeAppCmdID);
	_nEBSeAppCmdID++;
}

// 앱 값 세팅
function setAppValue(sName, sValue) {
	if (!IsApp())
		return;
	EBSe.setINI(sName, sValue);
}

// 앱 값 제거
function RemoveAppValue(sName) {
	if (!IsApp())
		return;
	EBSe.removeINI(sName);
}

/// ???
function onEBSeAppValue(sID, sResult) {
	_arEBSeAppHandler["" + sID](sResult);
	delete _arEBSeAppHandler["" + sID];
}