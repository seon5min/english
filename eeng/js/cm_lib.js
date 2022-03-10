/******************************************************
 * Description :  maxLengthCheck
*******************************************************/
function gfn_maxLengthCheck(object){
	if(object.value.length > object.maxLength) {
		object.value = object.value.slice(0, object.maxLength);
	}
}

/******************************************************
 * Description :  nvl 처리
*******************************************************/
function gfn_nvl(A,B){
	if(gfn_isNull(A) || gfn_isUndefined(A)){
		return B;
	}else{
		return A;
	}
}

function gfn_isUndefined(value){
	if(typeof(value)==undefined || typeof(value)=="undefined"||value=="undefiend"||value==undefined){
		return true;
	}
	return false;
}

/******************************************************
 * Description :  Ajax Request 공통함수
 * @param :  pUrl : 요청URL
 * @param :  pMethod : 요청메소드(get, post)
 * @param :  pParam : 파라메터
 * @param :  pCallback : 콜백함수
 * @return :  void
*******************************************************/
function gfn_Ajax(pUrl, pMethod, pParam, pCallback){
	$.ajax({
		type:pMethod,
		url:pUrl,
		data:pParam,
		dataType:"json",
		success:function(result){
			var call = eval(pCallback);
			call;
		},error:function(request, status, error){
			console.log("요청하신 페이지에 문제가 발생했습니다." + " status:: "+status+"  error::" + error);
		}
	});
}

/******************************************************
* Description :  Ajax Request 공통함수 (json ContentType)
* @param :  pUrl : 요청URL
* @param :  pMethod : 요청메소드(get, post)
* @param :  pParam : 파라메터
* @param :  pCallback : 콜백함수
* @return :  void
*******************************************************/
function gfn_AjaxJson(pUrl, pMethod, pParam, pCallback){
	$.ajax({
		type:pMethod,
		url:pUrl,
		data:pParam,
		dataType:"json",
		contentType:"application/json",
		success:function(result){
			var call = eval(pCallback);
			call;
		},error:function(request, status, error){
			console.log("요청하신 페이지에 문제가 발생했습니다."+ " status:: "+status+"  error::" + error);
		}
	});
}

/******************************************************
* Description :  팝업창를 화면 중앙에 띄우기 위한 함수
* @param :  pUrl : 팝업창 URL
* @param :  width : 팝업창 넓이
* @param :  height : 팝업창 높이
* @return :  void
*******************************************************/
function gfn_OpenWindow(url, width, height){

	var top, left;
	var features = "";

	if(width == '' || width == null){
		width = 480;
	}

	//height가 '' 또는 Null이면 기본 크기 설정
	if(height == '' || height == null){
		height = 480;
	}

	top  = gfn_CenterY(height);
	left = gfn_CenterX(width);


	features += "top=" + top;
	features += ",left=" + left;
	features += ",width=" + width;
	features += ",height=" + height;

	window.open(url,'popup',features);
}

/******************************************************
 * Description :   팝업창(모달)
 * @param :  url : url
 * @param :  target : target
 * @param :  width : 창 넓이
 * @param :  height : 창 높이
 * @return:  void
*******************************************************/
function gfn_popWin(url, target, width, height) {
	// window open property set
	var sURL		= url;
	var sTarget		= target;
	var sStatus		= "";
	var bReplace	= false;

	if(sURL == ""){
		alert("주소가 잘못되었습니다..");
		return;
	}

	//sStatus property set
	var vHeight 	= "dialogHeight=" + height+"px";
	var vWidth	= "dialogWidth=" + width+"px";

	//sStatus default set
	var vlocation = "location=no";
	var scrollbar = "scrollbars=yes";
	var toolbar = "toolbar=no";
	var menubar = "menubar=no";
	var resizeStatus = "resizable=no";
	var statusBar = "status=yes";

	sStatus = vlocation + ";" + statusBar + ";" + scrollbar + ";" + menubar + ";" + toolbar + ";" + resizeStatus + ";" + vWidth + ";" + vHeight;

	var newWin;

	if(sTarget.length > 0) {
		newWin = window.showModalDialog(sURL,sTarget,sStatus);
	} else {
		newWin = window.showModalDialog(sURL,self,sStatus);
	}
}

/******************************************************
* Description :   팝업창(모달) 리턴값 추가
* @param :  url : url
* @param :  target : target
* @param :  width : 창 넓이
* @param :  height : 창 높이
* @return:  화면에서 전달받은 값
*******************************************************/
function gfn_popWin2(url, target, width, height, stddPop) {
	// window open property set
	var sURL		= url;
	var sTarget		= target;
	var sStatus		= "";
	var bReplace	= false;

	if(sURL == ""){
		alert("주소가 잘못되었습니다..");
		return;
	}

	//sStatus property set
	var vHeight = "";
	var vWidth = "";
	
	//소속팝업인 경우
	if(stddPop == "stddPop") {
		vHeight 	= "dialogHeight=580px";
		vWidth	= "dialogWidth=820px";
	} else {
		vHeight 	= "dialogHeight=" + height+"px";
		vWidth	= "dialogWidth=" + width+"px";
	}
	
	//sStatus default set
	var vlocation = "location=no";
	var scrollbar = "scrollbars=no";
	var toolbar = "toolbar=no";
	var menubar = "menubar=no";
	var resizeStatus = "resizable=no";
	var statusBar = "status=yes";

	sStatus = vlocation + ";" + statusBar + ";" + scrollbar + ";" + menubar + ";" + toolbar + ";" + resizeStatus + ";" + vWidth + ";" + vHeight;

	var newWin;

	if(sTarget.length > 0) {
		return newWin = window.showModalDialog(sURL,sTarget,sStatus);
	} else {
		return newWin = window.showModalDialog(sURL,self,sStatus);
	}
}

/******************************************************
 * Description :   팝업창(모달리스)
 * @param :  theURL : url
 * @param :  winName : target
 * @param :  w : 창 넓이
 * @param :  h : 창 높이
 * @param :  features : 팝업창 속성
 * @return:  void
*******************************************************/
function gfn_open_popCen(theURL,winName,w,h,features) {
	var winl = (screen.width - w) / 3;
	var wint = (screen.height - h) / 3;
	features = 'width='+w+',height='+h+',left='+winl+',top='+wint+','+features;

	var newWin = window.open(theURL,winName,features);

	newWin.focus();
}


/******************************************************
 * Description :   화면 가로 중앙 좌표값
 * @param :  width : 창 넓이
 * @return:  가로 중앙 좌표
*******************************************************/
function gfn_CenterX(width){
	var retVal;
	retVal = (document.body.clientWidth / 2) - (width / 2);
	return retVal;
}


/******************************************************
 * Description :   화면 세로 중앙 좌표값
 * @param :  height : 창 넓이
 * @return:  세로 중앙 좌표
*******************************************************/
function gfn_CenterY(height){
	var retVal;
	retVal = (document.body.clientHeight / 2) - (height / 2);
	return retVal;
}

/******************************************************
 * Description :   문자열 앞뒤 공백제거
 * @param :  str : 문자열
 * @return:  공백제거된 문자열
*******************************************************/
function gfn_trim(str) {
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    return str;
}

/******************************************************
 * Description :   문자열의 특정길이 만큼 자름(...)
 * @param :  str : 문자열
 * @param :  len : 문자열 자를 길이
 * @return:  문자열
*******************************************************/
function gfn_cut_str(str, len) {
    var curLen = 0;

    for (var i=0; i<str.length; i++) {
        curLen += (str.charCodeAt(i) > 128) ? 2 : 1;
        if (curLen > len) return str.substring(0,i) + "...";
    }

    return str;
}

/******************************************************
 * Description :   숫자체크
 * @param :  control : -
 * @param :  msg : -
 * @return:  boolean
*******************************************************/
function gfn_isNumber(control, msg) {

    var val = control;
    var Num = "1234567890";
    for (i=0; i<val.length; i++) {
        if(Num.indexOf(val.substring(i,i+1))<0) {
            alert(msg+' 형식이 잘못되었습니다.');
            return false;
        }
    }
    return true;
}

/******************************************************
 * Description :   날짜체크
 * @param :  val : 날짜 입력값
 * @param :  msg : 에러 메시지
 * @return:  boolean
*******************************************************/
function gfn_isDate(control, msg) {
	   //'/'나 '-' 구분자 제거
	   var val = gfn_getRemoveFormat(control);

	   //숫자, length 확인
	   if (gfn_isNumber(val, msg) && val.length == 8) {
	       var year = val.substring(0,4);
	       var month = val.substring(4,6);
	       var day = val.substring(6,8);

	       //유효날짜 확인
	       if(gfn_checkDate(year,month,day,msg)){
	           return true;
	       } else {
	           return false;
	       }
	   } else {
	       alert(msg + "이(가) 유효하지 않은 년,월,일(YYYY-MM-DD)입니다. 다시 확인해 주세요!");
	       return false;
	   }
}

/******************************************************
* Description :   날짜체크 및 날짜입력 값 설정
* @param :  dateVal : 날짜 입력값
* @param :  msg : 에러 메시지
* @param :  element : 설정할 element
* @return:  boolean
*******************************************************/
function gfn_validDateValue(dateVal, msg, element) {
	if(dateVal.length > 0) {
		if(gfn_isDate2(dateVal, msg)) {
			//$("#"+element).val(gfn_setDateFormat(dateVal));			
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};
/******************************************************
* Description :   날짜체크 및 날짜입력 값 설정 2
* @param :  dateVal : 날짜 입력값
* @param :  msg : 에러 메시지
* @param :  element : 설정할 element
* @return:  boolean
*******************************************************/
function gfn_validDateValue2(dateVal, msg, element) {
	if(dateVal.length > 0) {
		if(gfn_isDate3(dateVal, msg)) {
			//$("#"+element).val(gfn_setDateFormat(dateVal));			
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};
/******************************************************
* Description :   날짜체크
* @param :  val : 날짜 입력값
* @param :  msg : 에러 메시지
* @return:  boolean
*******************************************************/
function gfn_isDate2(val, msg) {
	//날짜만
	var testDate = val.replace("-", "").replace("-", "");
	//날짜형식
	var numberTF = /^[0-9]{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/.test(testDate);
	//년, 월, 일
	var year = "";
	var month = "";
	var day = "";
	//결과값
	var result = false;

	if(numberTF) {
	    year = testDate.substring(0,4);
	    month = testDate.substring(4,6);
	    day = testDate.substring(6,8);
	    //2월
        if(month == "02") {
        	var isleap = ((parseInt(year,10) % 4) == 0) && ((parseInt(year,10) % 100) == 0 || (parseInt(year,10) % 4) == 0);

        	if (parseInt(day, 10) > 29) {
        		result = false;
        	} else if((day == "29") && !isleap) {
        		result = false;
        	} else {
        		if(day == "28") {
        			result = true;
        		} else {
        			result = true;
        		}
        	}
        //그밖의 달
        } else {
        	if((month=="04")||(month=="06")||(month=="09")||(month=="11")){
        		if(day == "31") {
            		result = false;
        		} else {
        			result = true;
        		}
        	}else {
        		result = true;
        	}
        }
	} else {
		result = false;
	}

	if(!result) {
		alert(gfn_GetMessage("TC_CM_MSG_016", msg));
		return false;
	}

	return true;
};
/******************************************************
* Description :   날짜체크2
* @param :  val : 날짜 입력값
* @param :  msg : 에러 메시지
* @return:  boolean
*******************************************************/
function gfn_isDate3(val, msg) {
	//날짜만
	var testDate = val.replace(".", "").replace(".", "");
	//날짜형식
	var numberTF = /^[0-9]{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/.test(testDate);
	//년, 월, 일
	var year = "";
	var month = "";
	var day = "";
	//결과값
	var result = false;

	if(numberTF) {
	    year = testDate.substring(0,4);
	    month = testDate.substring(4,6);
	    day = testDate.substring(6,8);
	    //2월
        if(month == "02") {
        	var isleap = ((parseInt(year,10) % 4) == 0) && ((parseInt(year,10) % 100) == 0 || (parseInt(year,10) % 4) == 0);

        	if (parseInt(day, 10) > 29) {
        		result = false;
        	} else if((day == "29") && !isleap) {
        		result = false;
        	} else {
        		if(day == "28") {
        			result = true;
        		} else {
        			result = true;
        		}
        	}
        //그밖의 달
        } else {
        	if((month=="04")||(month=="06")||(month=="09")||(month=="11")){
        		if(day == "31") {
            		result = false;
        		} else {
        			result = true;
        		}
        	}else {
        		result = true;
        	}
        }
	} else {
		result = false;
	}

	if(!result) {
		alert(gfn_GetMessage("TC_CM_MSG_016", msg));
		return false;
	}

	return true;
};

/******************************************************
 * Description :   구분자 제거
 * @param :  val : 제거할 구분자
 * @param :  msg : -
 * @return:  str
*******************************************************/
function gfn_getRemoveFormat(val) {
   if(val.length == 10) {
       var arrDate = new Array(3);
       arrDate = val.split("-");
       if(arrDate.length != 3) {
           arrDate = val.split("-");
       }
       return arrDate[0] + arrDate[1] + arrDate[2];
   } else {
       return val;
   }
}

/******************************************************
* Description :   날짜 구분자 설정
* @param :  val : 숫자만 입력된 날짜
* @param :  msg : -
* @return:  str :
*******************************************************/
function gfn_setDateFormat(val) {
  //날짜 구분자
  var sepVal = "-";
  //년,월,일
  var year = "";
  var month = "";
  var day = "";
  //리턴 값
  var result = val;

  if(val.length == 8) {
      year = val.substring(0,4);
      month = val.substring(4,6);
      day = val.substring(6,8);

      result = year+sepVal+month+sepVal+day;

      return result;
  } else {
      return result;
  }
}


/******************************************************
 * Description :   날짜유효성 체크
 * @param :  varCk1 : YYYY
 * @param :  varCk2 : MM
 * @param :  varCk3 : DD
 * @param :  msg : -
 * @return:  str
*******************************************************/
function gfn_checkDate(varCk1, varCk2, varCk3, msg) {
   if (varCk1>="0001" && varCk1<="9999" && varCk2>="01" && varCk2<="12") {
       febDays = "29";
       if ((parseInt(varCk1,10) % 4) == 0) {
           if ((parseInt(varCk1,10) % 100) == 0 && (parseInt(varCk1,10) % 400) != 0){
               febDays = "28";
           }
       }else{
           febDays = "28";
       }
       if (varCk2=="01" && varCk3>="01" && varCk3<="31") return true;
       if (varCk2=="02" && varCk3>="01" && varCk3<=febDays) return true;
       if (varCk2=="03" && varCk3>="01" && varCk3<="31") return true;
       if (varCk2=="04" && varCk3>="01" && varCk3<="30") return true;
       if (varCk2=="05" && varCk3>="01" && varCk3<="31") return true;
       if (varCk2=="06" && varCk3>="01" && varCk3<="30") return true;
       if (varCk2=="07" && varCk3>="01" && varCk3<="31") return true;
       if (varCk2=="08" && varCk3>="01" && varCk3<="31") return true;
       if (varCk2=="09" && varCk3>="01" && varCk3<="30") return true;
       if (varCk2=="10" && varCk3>="01" && varCk3<="31") return true;
       if (varCk2=="11" && varCk3>="01" && varCk3<="30") return true;
       if (varCk2=="12" && varCk3>="01" && varCk3<="31") return true;
   }
   alert(msg + "이(가) 유효하지 않은 년,월,일(YYYY-MM-DD)입니다.\n다시 확인해 주세요!");
   return false;
}



 /**
  * 전체 체크박스 toggle
  * @param p_name
  * @param item_name 체크하고자 하는 체크박스의 이름
  * @return
  */
function gfn_checkItemAll(p_name, item_name){
	var len = $("input:checkbox[name='"+item_name+"']").length;

	if($("input:checkbox[name='"+p_name+"']").attr("checked") == 'checked'){
		for(var i=0; i < len; i++){
			$("input:checkbox[name='"+item_name+"']").attr("checked",true);
			$("input:checkbox[name='"+item_name+"']").val("1");
		}
	}else{
		for(var i=0; i < len; i++){
			$("input:checkbox[name='"+item_name+"']").attr("checked",false);
			$("input:checkbox[name='"+item_name+"']").val("0");
		}
	}
}

/**
 * 개별 체크박스 toggle
 * @param p_name
 * @param item_name 체크하고자 하는 체크박스의 이름
 * @return
 */
function gfn_checkItem(p_name, item_name){
	var i = 0;
	var len = $("input:checkbox[name='"+item_name+"']").length;

	$("input:checkbox[name='"+item_name+"']").each(function(index){
		if(this.checked){
			$("input:checkbox[name='"+item_name+"']").eq(index).attr("checked",true);
			i++;

		}else{
			$("input:checkbox[name='"+item_name+"']").eq(index).attr("checked",false);
			i--;
		}

	});

	if(i == len){
		$("input:checkbox[name='"+p_name+"']").attr("checked",true);
	}else{
		$("input:checkbox[name='"+p_name+"']").attr("checked",false);
	}
}


/**
 *
 * @param pMsgCd
 * @param pBindInfo
 * @return
 */
function gfn_GetMessage(pMsgCd,pBindInfo){
	var msgName;

	//메시지코드가 null이거나 ""이면 리턴
	if(pMsgCd != null && pMsgCd !="")
	{
		if(typeof(pMsgCd) == 'undifined')
		{
			msgName = "";
			retVal  = "";
		}
		else
		{
			msgName = eval(pMsgCd);
			retVal = msgName;
		}
	}

	if(pBindInfo != null && pBindInfo != "")
	{
		if(pBindInfo.length > 0)
		{
			var arrBind = pBindInfo.split(";");
			for(var i=0; i < arrBind.length; i++)
			{
				//retVal = msgName.replace("{" + i + "}",arrBind[i]);
				retVal = msgName.split("{" + i + "}").join(arrBind[i]);
				msgName = retVal;
			}
		}
	}

	return retVal;
}

 /**
  * 특수문자 체크
  * @param 검색어, 입력항목에 대한 특수문자 체크
  * @param
  * @return boolean
  */
 function gfn_isSpecial(param){
  	var pattern = /[\!@#$%^&*()]/gi;
  	return pattern.test(param);
 }

  /**
   * 널 체크
   * @param 검색어, 입력항목에 대한 널 체크
   * @param
   * @return boolean
   */
 function gfn_isNull(param){
 	if(param == null || param == ""){
 		return true;
 	}
 	return false;
 }

/******************************************************
 * Description : LPAD 함수
 * @param :  orgStr : 원본문자, cnt: 붙일 갯수,  appendStr: 붙일 문자열
 * @return:
*******************************************************/
function gfn_lpad(orgStr, cnt, appendStr)
{
	var strOrg = String(orgStr);
	var strCnt = strOrg.length;
	var result = "";

	if(strCnt < cnt) {
		for(var idx=0; idx<(cnt-strCnt); idx++) {
			result += appendStr;
		}
		result += orgStr;

	} else {
		result = strOrg;
	}

	return result;
};

/******************************************************
 * Description : 오늘날짜
 * @param :  
 * @return: "YYYYMMDD"
 * @author:
 * @since : 
*******************************************************/
function gfn_today(){
	var now = new Date();
	var year = now.getFullYear();
	var MM = now.getMonth()+1;
	if((MM+"").length < 2){
		MM = "0"+MM;
	}
	var dd = now.getDate();
	if((dd+"").length < 2){
		dd = "0"+dd;
	}

	var dt = year+""+MM+""+dd;
	return dt;
}

/******************************************************
 * Description : 현재시간
 * @param :  
 * @return: "20190314170805"
 * @author:
 * @since : 
*******************************************************/
function gfn_pad(n) { return n < 10 ? '0' + n : n }
function gfn_currentTime(){
	var date = new Date();
	var dt = date.getFullYear().toString()	+ gfn_pad(date.getMonth() + 1) 
			+ gfn_pad( date.getDate()) + gfn_pad( date.getHours() )
			+ gfn_pad( date.getMinutes() ) + gfn_pad( date.getSeconds() );
	return dt;
}

/******************************************************
 * Description : 이벤트 체크
 * @param : 시작일, 마감일+1  ('20190314170805','20190319170805')
 * @return: boolean
 * @author:
 * @since : 
*******************************************************/
function gfn_chkEventDate(evtStartDt,evtEndDt){
	var eventDtYn = false;
	var today = gfn_currentTime();
	if( evtStartDt <= today && today < evtEndDt){
		eventDtYn = true;
	}
	return 	eventDtYn;
}

/******************************************************
 * Description : 기간체크
 * @param :  시작일, 마감일+1 ('20190314170805','20190319170805')
 * @return: boolean
 * @author:
 * @since : 
*******************************************************/
function gfn_chkDueDate(startDt,endDt){
	var dueDtYn = false;
	var today = gfn_currentTime();
	if( startDt <= today && today < endDt){
		dueDtYn = true;
	}
	return 	dueDtYn;
}

/******************************************************
 * Description :   숫자체크
 * @param :  control : -
 * @param :  msg : -
 * @return:  boolean
 * @author:  -
 * @since : 2012. 07. 31
*******************************************************/
function gfn_isNumber(control) {
    var chkYn = true;
	var val = control;
    var Num = "1234567890";
    for (i=0; i<val.length; i++) {
        if(Num.indexOf(val.substring(i,i+1))<0) {
        	chkYn = false;
        }
    }
    return chkYn;
}


/******************************************************
 * Description :   콤마찍기
 * @param :  
 * @param :  
 * @return:  
 * @author:  
 * @since : 2019. 05. 20
*******************************************************/
function gfn_numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/******************************************************
 * Description :   랜덤숫자찍기
 * @param :  
 * @param :  
 * @return:  
 * @author:  
 * @since : 2019. 05. 20
*******************************************************/
function gfn_randomRange(n1, n2) {
	  return Math.floor( (Math.random() * (n2 - n1 + 1)) + n1 );
}

/**
 * 파일명에서 확장자명 추출
 * @param filename   파일명
 * @returns _fileExt 확장자명
 */
function getExtensionOfFilename(filename) {
    var _fileLen = filename.length;
    /** 
     * lastIndexOf('.')
	 * 뒤에서부터 '.'의 위치를 찾기위한 함수
	 * 검색 문자의 위치를 반환한다.
	 * 파일 이름에 '.'이 포함되는 경우가 있기 때문에 lastIndexOf() 사용
	 */
	var _lastDot = filename.lastIndexOf('.');
	// 확장자 명만 추출한 후 소문자로 변경
	var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();
	return _fileExt;
}

/**
 * 자동으로 콤마입력
 *  <input type="text" id="price" onkeyup="gfn_inputNumberFormat(this)"/>
 */
function gfn_inputNumberFormat(obj) {
	obj.value = gfn_comma(gfn_uncomma(obj.value));
}

function gfn_comma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function gfn_uncomma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}