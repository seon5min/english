﻿///////////////////////////////////////////////////////////////////////////////////////////////////
if ( typeof(g_sAppScheme)           == "undefined" )      g_sAppScheme          = "";
if ( typeof(g_sAndroidPackageName)  == "undefined" )      g_sAndroidPackageName = "kr.imgtech.zoneplayer";
if ( typeof(g_sAppReqVerIOS)        == "undefined" )      g_sAppReqVerIOS       = "0";
if ( typeof(g_sAppReqVerAndroid)    == "undefined" )      g_sAppReqVerAndroid   = "0";

///////////////////////////////////////////////////////////////////////////////////////////////////
if ( typeof(ZONE_APP_TITLE)     == "undefined" )    ZONE_APP_TITLE      = "존플레이어";
if ( typeof(ZONE_APPSTORE_URL)  == "undefined" )    ZONE_APPSTORE_URL   = "https://itunes.apple.com/in/app/ibooks/id1026414449?mt=8";
if ( typeof(ZONE_APP_MSG_ANDROID_INSTALL_CONFIRM) == "undefined" )    ZONE_APP_MSG_ANDROID_INSTALL_CONFIRM  = (ZONE_APP_TITLE + "를 설치하시면 서비스를 이용할 수 있습니다.\n설치 하시겠습니까?");
ZONE_PLAYSTORE_URL  = "market://details?id=" + g_sAndroidPackageName;

///////////////////////////////////////////////////////////////////////////////////////////////////
if ( typeof(g_bHybridApp)   == "undefined" )         g_bHybridApp            = false;
if ( typeof(g_bCallToURLScheme)   == "undefined" )   g_bCallToURLScheme      = true;
if ( typeof(g_bCallToPostMsg)   == "undefined" )     g_bCallToPostMsg        = false;
if ( ! g_bHybridApp ){
    if ( ! g_bCallToURLScheme )   g_bCallToURLScheme = true;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
var g_ZP_IOS_bInstallCheck          = false;
var g_ZP_IOS_uInstallTimer          = 0;
var g_ZP_IOS_nInstallTimerInterval  = (1000 * 7);

///////////////////////////////////////////////////////////////////////////////////////////////////
var g_ZP_Android_nInstallTimerInterval  = 2500;

///////////////////////////////////////////////////////////////////////////////////////////////////
if ( typeof(g_bZonePlayerLogonUse) == "undefined" )   var g_bZonePlayerLogonUse = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////
var g_sOS     = "";
var g_IsIOS     = false;
var g_IsAndroid = false;
var g_IsWindows = false;
var g_IsOSX     = false;
var g_IsChrome  = false;

function ZoneBroswerChecker()
{
    g_IsIOS     = false;
    g_IsAndroid = false;
    g_IsWindows = false;
    g_IsOSX     = false;
    g_IsChrome  = false;

    g_sOS       = ZoneGetMobileOperatingSystem();
    switch(g_sOS)
    {
        case "WINDOWS":     g_IsWindows     = true;     break;
        case "ANDROID":     g_IsAndroid     = true;     break;
        case "IOS":         g_IsIOS         = true;     break;
        case "OSX":         g_IsOSX         = true;     break;
        default:    break;
    }

    var sUserAgent = navigator.userAgent;	
    sUserAgent  = sUserAgent.toLowerCase();

    if ( sUserAgent.indexOf("chrome") >= 0 ||
         sUserAgent.indexOf("crios")  >= 0 )
    {
        g_IsChrome  = true;
    }
}

////////////////////////////////////////////////////////////////////////////////
function ZoneGetMobileOperatingSystem() 
{
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows/i.test(userAgent)) {
        if (/windows phone/i.test(userAgent)) {
            return "WINDOWSPHONE";
        }
        return "WINDOWS";
    }

    if (/android/i.test(userAgent)) {
        return "ANDROID";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "IOS";
    }

    if (/OS X|Mac/.test(userAgent)) {
        if(navigator.maxTouchPoints>0) {
            return "IOS";
        }
        return "OSX";
    }

//iPadOS:
//Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)   AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0         Safari/605.1.15

//MacOS Catalina:
//Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36   (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
    return "";
}

///////////////////////////////////////////////////////////////////////////////////////
ZoneBroswerChecker();

///////////////////////////////////////////////////////////////////////////////////////
function ZoneGetDevice()
{
    return g_sOS;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// IOS
///////////////////////////////////////////////////////////////////////////////////////////////////
var g_fIOSVersion = null;

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneGetIOSVersion()
{
    if ( g_fIOSVersion == null )
    {
        try {
            var v=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            g_fIOSVersion=(isNaN(parseInt(v[1],10))? 0:parseInt(v[1],10));
            g_fIOSVersion+=(isNaN(parseInt(v[2],10))? 0:parseInt(v[2],10)*0.1);
            g_fIOSVersion+=(isNaN(parseInt(v[3],10))? 0:parseInt(v[3],10)*0.01);
        }
        catch(e) {
            g_fIOSVersion = 10.3;
        }
    }
    return g_fIOSVersion;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
var g_dateIOSExecute = new Date();

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneIOSExecute(sURL)
{
    if ( ! g_bHybridApp ) {
        g_dateIOSExecute = new Date();
        if ( g_ZP_IOS_uInstallTimer != 0 )
        {
            clearTimeout(g_ZP_IOS_uInstallTimer);
            g_ZP_IOS_uInstallTimer = 0;
        }
        g_ZP_IOS_bInstallCheck = false;
        g_ZP_IOS_uInstallTimer = setTimeout(function()
        {
            var date = new Date();
            var nGap = date - g_dateIOSExecute;
        
            if ( nGap > ( g_ZP_IOS_nInstallTimerInterval + 1000 * 3) )
                return;

            if (!g_ZP_IOS_bInstallCheck)
            {
                top.window.location = ZONE_APPSTORE_URL;
            }
        }, g_ZP_IOS_nInstallTimerInterval);
    }

    ZoneIOSAppOpen(sURL);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneIOSAppOpen(sURL)
{
    //top.window.location = sURL;
    top.window.document.location.href = sURL;
    
    //var fIOSVersion = ZoneGetIOSVersion();
    //if      ( fIOSVersion >= 9.2) 
    //{
    //    top.window.open('http://.../index.html?' + sURL.replace('zoneplayer', ''));
    //}
    //else if ( fIOSVersion >= 9) 
    //	top.window.location.href = 'http://.../index.html?' + sURL.replace('zoneplayer', '');
	//else
    //    top.window.location = sURL;
}

function ZoneIsIOS() 
{
    var ua = navigator.userAgent.toLowerCase();

    if (/os x|mac/.test(ua)) {
        if(navigator.maxTouchPoints>0) {
            return true;
        }
    }

    var regExp = /ipad|iphone|ipod/i;
    return (!!ua.match(regExp));
}

function ZoneIsSafari() 
{
     var ua = navigator.userAgent.toLowerCase();
     return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
window.onblur = function()
{
    if(ZoneIsIOS()) {
        if(ZoneIsSafari()) {
            if(window.document.visibilityState == "hidden"){
                g_ZP_IOS_bInstallCheck = true;
                clearTimeout(g_ZP_IOS_uInstallTimer);
            }
            return;
        }
    }

    g_ZP_IOS_bInstallCheck = true;
    clearTimeout(g_ZP_IOS_uInstallTimer);
}

function queryStringToJSONString(qs) {
    qs = qs || location.search.slice(1);

    var pairs = qs.split('&');
    var result = {};
    pairs.forEach(function(p) {
        var pair = p.split('=');
        var key = pair[0];
        var value = decodeURIComponent(pair[1] || '');

        if( result[key] ) {
            if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
                result[key].push( value );
            } else {
                result[key] = [ result[key], value ];
            }
        } else {
            result[key] = value;
        }
    });

    return JSON.stringify(result);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function queryStringToJSON(qs) {
    return JSON.parse(queryStringToJSONString(qs));
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Android
///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneAndroidExecute(sURL)
{
    document.ZoneFrameAppIns.location = sURL;
    if ( ! g_bHybridApp ) {
        setTimeout("ZoneAndroidInstall()", g_ZP_Android_nInstallTimerInterval);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneChromeExecute(sURL)
{
    top.window.location = sURL;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Android
///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneAndroidInstall() 
{
    try 
    {
        var objZonePlayerFrameAppIns = document.ZoneFrameAppIns.document.body;
        var objZonePlayerDivAppIns   = document.getElementById("ZoneDivAppIns");
    } 
    catch (e) 
    {
        if ( confirm(ZONE_APP_MSG_ANDROID_INSTALL_CONFIRM) ) 
        {
            location.href = ZONE_PLAYSTORE_URL;
            return false;
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Common Utils
///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneGetChromeVersion()
{
    var sVersion = "0.0.0.0";
    var bChrome  = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if (bChrome)
    {
        sVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
    } 
    return sVersion;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
var g_theZoneAPP = null;
function theZoneAPP()
{
    if ( g_theZoneAPP != null ){
        return g_theZoneAPP;
    }
    if ( g_IsIOS ){
        try{
            if ( typeof(window.webkit.messageHandlers[g_sAppPostName]) != "undefined" ){
                g_theZoneAPP = window.webkit.messageHandlers[g_sAppPostName];
                return g_theZoneAPP;
            }
            if ( typeof(window.webkit.messageHandlers[g_sAppScheme]) != "undefined" ){
                g_theZoneAPP = window.webkit.messageHandlers[g_sAppScheme];
                return g_theZoneAPP;
            }
        }
        catch(e){
        }
        return null;
    }
    else {
        try{
            if ( typeof(window[g_sAppPostName]) != "undefined" ){
                g_theZoneAPP = window[g_sAppPostName];
                return g_theZoneAPP;
            }
            if ( typeof(window[g_sAppScheme]) != "undefined" ){
                g_theZoneAPP = window[g_sAppScheme];
                return g_theZoneAPP;
            }
        }
        catch(e){
        }
        return null;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneAPPCommand(bIOS, bChrome, sURL, bCallToURLScheme, bCallToPostMsg)
{
    if ( typeof(bCallToURLScheme) == "undefined" )  bCallToURLScheme = g_bCallToURLScheme;
    if ( typeof(bCallToPostMsg) == "undefined" )  bCallToPostMsg = g_bCallToPostMsg;
    if ( bCallToPostMsg ){
        if ( theZoneAPP() == null ){
            bCallToPostMsg = false;
        }
        
        if ( bCallToPostMsg ){
            return ZoneNativePostMessage(sURL);
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( bCallToURLScheme ) {
        if ( bIOS ){
            ZoneIOSExecute(sURL);
        }
        else
        {
            if ( bChrome ){
                ZoneChromeExecute(sURL);
            }
            else {
                ZoneAndroidExecute(sURL);
            }
        }
    }
    else{
        return ZoneNativeCommand("Execute", 0, 0, 0, sURL, "", "");
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneNativePostMessage(sURL)
{
    theZoneAPP().postMessage( g_IsIOS ? JSON.parse(sURL) : sURL);
    return "";
}


///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneNativeCommand(sCommand, nParam1, nParam2, nParam3, sParam1, sParam2, sParam3)
{
    var sResult = "";
    sResult = ZoneApp.Command(sCommand, nParam1, nParam2, nParam3, sParam1, sParam2, sParam3);
    return sResult;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneGenAppCommand(sCommand, sParam, bCallToURLScheme, bCallToPostMsg, bParamURLEncode)
{
    if ( typeof(bCallToURLScheme) == "undefined" )  bCallToURLScheme = g_bCallToURLScheme;
    if ( typeof(bCallToPostMsg) == "undefined" )    bCallToPostMsg = g_bCallToPostMsg;
    if ( typeof(bParamURLEncode) == "undefined" )   bParamURLEncode = true;

    if ( bCallToURLScheme ) {
        if (g_sAppScheme.length == 0) {
		    alert("App Scheme 정의를 먼저 합니다.");
		    return "";
	    }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    var sNewURLScheme = "";
    if ( bCallToPostMsg ){
        if ( theZoneAPP() == null ){
            bCallToPostMsg = false;
        }
        
        if ( bCallToPostMsg ){
            sParam = queryStringToJSONString(sParam);

            sNewURLScheme =  
            "{" + 
                "\"version\" : \"" + (g_IsIOS ? g_sAppReqVerIOS : g_sAppReqVerAndroid) + "\"," + 
                "\"action\" : \"" + sCommand + "\"," + 
                "\"cmdKey\" : \"\"," +
                "\"param\"  : " + sParam + 
            "}";

            return sNewURLScheme;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( sParam != "" ){
        sParam += "&";
    }
    sParam += "req-version=";
    sParam += g_IsIOS ? g_sAppReqVerIOS : g_sAppReqVerAndroid;
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    sNewURLScheme = ZoneURLSchemeCommand(sCommand, sParam, bCallToURLScheme, bParamURLEncode);
    return sNewURLScheme;
}

///////////////////////////////////////////////////////////////////////////////////////////
function ZoneURLSchemeCommand(sCommand, sParam, bCallToURLScheme)
{
    if ( typeof(bCallToURLScheme) == "undefined" )  bCallToURLScheme = true;
    if ( typeof(bParamURLEncode) == "undefined" )  bParamURLEncode = false;
    
    if ( bParamURLEncode ) sParam = encodeURIComponent(sParam);

    var sNewURLScheme;
    if ( bCallToURLScheme ) {
        if (g_IsChrome) {
    	    sNewURLScheme = "intent://" + sCommand + "?"  + sParam +  "#Intent;scheme="  + g_sAppScheme +  ";package=" + g_sAndroidPackageName + ";end";
        } else {
            sNewURLScheme = g_sAppScheme + "://" + sCommand + "?" + sParam;
        }
    }
    else{
        sNewURLScheme = g_sAppScheme + "://" +  sCommand + "?" + sParam;
    }

    return sNewURLScheme;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneAppExecute(sCommand, sParam, bCallToURLScheme, bCallToPostMsg)
{
    sCmd = ZoneGenAppCommand(sCommand, sParam, bCallToURLScheme, bCallToPostMsg);
    return ZoneAPPCommand(g_IsIOS, g_IsChrome, sCmd, bCallToURLScheme, bCallToPostMsg);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZongOnPageLoad(){
    var sEle =  "<div style=\"position:fixed;bottom:0px;right:-10px\">" + 
                    "<iframe id=\"ZoneFrameAppIns\" name=\"ZoneFrameAppIns\" width=\"0\" height=\"0\"></iframe>" + 
                    "<div id=\"ZoneDivAppIns\"></div>" +
                "</div>";
    document.body.insertAdjacentHTML('beforeend', sEle);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
if ( g_IsAndroid ){
    if(window.addEventListener){
        window.addEventListener('load', ZongOnPageLoad);
    }
    else{
        window.attachEvent('onload', ZongOnPageLoad)
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function OnZoneApp(json)
{
    if ( typeof(OnPageZoneApp) != "undefined" ){
        OnPageZoneApp(JSON.parse(decodeURIComponent(json)));
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////﻿/////////////////////////////////////////////////////////////////////////////////////////
// CZoneSystem
/////////////////////////////////////////////////////////////////////////////////////////
var g_sMacAppVer        = "2.0.3";
var g_sMacAppUpdateURL  = "http://home.imgtech.co.kr/ZoneMediaPlayer/Install/mac.html";

/////////////////////////////////////////////////////////////////////////////////////////
var g_ZoneSystem = new CZoneSystem();

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem()
{
    /////////////////////////////////////////////////////////////////////////////////////
    this.IsBroswerIE           = function(){ return this.m_bIE;         };
    this.IsBroswerChrome       = function(){ return this.m_bChrome;     };
    this.IsBroswerSafari       = function(){ return this.m_bSafari;     };
    this.IsBroswerFireFox      = function(){ return this.m_bFireFox;    };
    this.IsBroswerOpera        = function(){ return this.m_bOpera;      };
    this.IsBroswerEdge         = function(){ return this.m_bEdge;       };
    this.GetBroswerVersion     = function(){ return this.m_sBroswerVersion;    };
    this.GetBroswerMajorVersion = function(){ return this.m_sBroswerMajorVersion;    };

    /////////////////////////////////////////////////////////////////////////////////////
    this.m_sBroswerVersion      = "";
    this.m_sBroswerMajorVersion = "";
    
    /////////////////////////////////////////////////////////////////////////////////////
    this.IsOSWindows           = function(){ return this.m_bWindows;    };
    this.IsOSOSX               = function(){ return this.m_bOSX;        };
    this.IsOSAndroid           = function(){ return this.m_bAndroid;    };
    this.IsOSIOS               = function(){ return this.m_bIOS;        };
    this.IsMobile              = function(){ return this.IsOSAndroid() || this.IsOSIOS();        };

    /////////////////////////////////////////////////////////////////////////////////////
    this.GetOS                 = function(){ return this.m_sOS;         };
        
    /////////////////////////////////////////////////////////////////////////////////////
    this.m_bIE          = false;
    this.m_bChrome      = false;
    this.m_bSafari      = false;
    this.m_bFireFox     = false;
    this.m_bOpera       = false;
    this.m_bEdge        = false;
                
    /////////////////////////////////////////////////////////////////////////////////////
    this.m_bIOS         = false;
    this.m_bAndroid     = false;
    this.m_bWindows     = false;
    this.m_bOSX         = false;

    /////////////////////////////////////////////////////////////////////////////////////
    this.m_sOS          = "";

    /////////////////////////////////////////////////////////////////////////////////////
    this.CheckOS        = CZoneSystem_CheckOS;
    this.CheckBroswer   = CZoneSystem_CheckBroswer;
    this.FindUserAgent  = CZoneSystem_FindUserAgent;
    
    /////////////////////////////////////////////////////////////////////////////////////
    this.CheckBroswerIE      = CZoneSystem_CheckBroswerIE;
    this.CheckBroswerChrome  = CZoneSystem_CheckBroswerChrome;

    this.URLParse           = CZoneSystem_URLParse;
    this.AbsoluteURL        = CZoneSystem_AbsoluteURL;
    this.ParseQueryString   = CZoneSystem_ParseQueryString;

    /////////////////////////////////////////////////////////////////////////////////////
    this.IsUpdateVersion    = CZoneSystem_IsUpdateVersion;

    /////////////////////////////////////////////////////////////////////////////////////
    this.Init           = CZoneSystem_Init;
    this.Init();
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_Init()
{
    /////////////////////////////////////////////////////////////////////////////////////
    this.m_sOS          = this.CheckOS()

    /////////////////////////////////////////////////////////////////////////////////////
    switch(this.m_sOS)
    {
        case "WINDOWS":     this.m_bWindows     = true;     break;
        case "ANDROID":     this.m_bAndroid     = true;     break;
        case "IOS":         this.m_bIOS         = true;     break;
        case "OSX":         this.m_bOSX         = true;     break;
        default:    break;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    this.CheckBroswer();
        
    /////////////////////////////////////////////////////////////////////////////////////
    //alert("this.IsBroswerIE       ==> " + this.IsBroswerIE() + "\n" + 
    //      "this.IsBroswerChrome     ==> " + this.IsBroswerChrome() + "\n" + 
    //      "this.IsBroswerSafari     ==> " + this.IsBroswerSafari() + "\n" + 
    //      "this.IsBroswerFireFox    ==> " + this.IsBroswerFireFox() + "\n" + 
    //      "this.IsBroswerOpera      ==> " + this.IsBroswerOpera() + "\n" + 
    //      "this.IsBroswerEdge       ==> " + this.IsBroswerEdge() + "\n" + 
    //      "this.IsOSWindows         ==> " + this.IsOSWindows() + "\n" + 
    //      "this.IsOSOSX             ==> " + this.IsOSOSX() + "\n" + 
    //      "this.IsOSAndroid         ==> " + this.IsOSAndroid() + "\n" + 
    //      "this.IsOSIOS             ==> " + this.IsOSIOS());
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_IsUpdateVersion(sOrgVer, sReqVer)
{
    sOrgVer = sOrgVer.replace(/,/gi, ".");
    sReqVer = sReqVer.replace(/,/gi, ".");
    
    var arOrgVer = sOrgVer.split(".");
    var arReqVer = sReqVer.split(".");

    var nGap  = arOrgVer.length  - arReqVer.length;
    var arVer = arOrgVer;
    if ( nGap > 0 ) 
        arVer = arReqVer;

    for ( nF = 0 ; nF < nGap ; nF ++ )
        arVer[arVer.length] = "0";

    var bUpdate = false;
    for ( nF = 0 ; nF < arOrgVer.length ; nF ++ )
    {
        if ( parseInt(arOrgVer[nF]) < parseInt(arReqVer[nF]) ){
            bUpdate = true;
            break;
        }
        else if ( parseInt(arOrgVer[nF]) > parseInt(arReqVer[nF]) ){
            break;
        }
    }
    return bUpdate;
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_CheckOS()
{
    /////////////////////////////////////////////////////////////////////////////////////
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows/i.test(userAgent)) {
        if (/windows phone/i.test(userAgent))
            return "WINDOWSPHONE";
        return "WINDOWS";
    }

    if (/android/i.test(userAgent))
        return "ANDROID";

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        return "IOS";

    if (/OS X|Mac/.test(userAgent)) {
        if(navigator.maxTouchPoints>0) {
            return "IOS";
        }
        return "OSX";
    }

    return "";
}

///////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_FindUserAgent(sFind)
{
	sFind = sFind.toUpperCase();
	var userAgent = navigator.userAgent;
    userAgent = userAgent.toUpperCase();
    
    if ( userAgent.indexOf(sFind) >= 0 )
        return true;
    
    return false;
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_CheckBroswer()
{
    this.m_bIE          = this.CheckBroswerIE();
    // Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.44 Safari/534.7
    this.m_bChrome      = this.CheckBroswerChrome();
    // Mozilla/5.0 (Windows; U; Windows NT 6.1; ko-KR) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5
    this.m_bSafari      = this.FindUserAgent("SAFARI") && (!this.FindUserAgent("CHROME"));
    // Mozilla/5.0 (Windows; U; Windows NT 6.1; ko; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 IPMS/A640400A-14D460801A1-000000426571
    this.m_bFireFox     = this.FindUserAgent("FIREFOX");
    // Opera/9.80 (Windows NT 6.1; U; ko) Presto/2.6.30 Version/10.62 // Or  OPR
    this.m_bOpera       = this.FindUserAgent("OPR");        
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.<OS build 
    this.m_bEdge        = this.FindUserAgent("Edge"); 
    if ( ! this.m_bEdge )
        this.m_bEdge    = this.FindUserAgent("Edg"); 
    if ( this.m_bEdge )
        this.m_bChrome = false;
    
    var nVer         = navigator.appVersion;
    var nAgt         = navigator.userAgent;

    this.m_sBroswerMajorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;

    this.m_sBroswerVersion  = "" + parseFloat(navigator.appVersion); 

    // In Opera, the true version is after "Opera" or after "Version"
    if (this.m_bOpera) {
        this.m_sBroswerVersion = nAgt.substring(verOffset+6);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            this.m_sBroswerVersion = nAgt.substring(verOffset+8);
    }
    else if (this.m_bIE) {
        this.m_sBroswerVersion = "" + CZoneSystem_GetIEVersion();
    }
    else if (this.m_bChrome) {
        this.m_sBroswerVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Chrome/"))!=-1) 
            this.m_sBroswerVersion = nAgt.substring(verOffset+7);
    }
    else if (this.m_bSafari) {
        this.m_sBroswerVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            this.m_sBroswerVersion = nAgt.substring(verOffset+8);
    }
    else if (this.m_bFireFox) {
        this.m_sBroswerVersion = nAgt.substring(verOffset+8);
    }
    else if (this.m_bEdge) {
        this.m_sBroswerVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Edge/"))!=-1||(verOffset=nAgt.indexOf("Edg/"))!=-1) 
            this.m_sBroswerVersion = nAgt.substring(verOffset+3);
    }
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
              (verOffset=nAgt.lastIndexOf('/')) ) 
    {
        this.m_sBroswerVersion = nAgt.substring(verOffset+1);
    }

    // trim the this.m_sBroswerVersion string at semicolon/space if present
    if ((ix=this.m_sBroswerVersion.indexOf(";"))!=-1)
       this.m_sBroswerVersion=this.m_sBroswerVersion.substring(0,ix);
    if ((ix=this.m_sBroswerVersion.indexOf(" "))!=-1)
       this.m_sBroswerVersion=this.m_sBroswerVersion.substring(0,ix);

    this.m_sBroswerMajorVersion = parseInt(''+this.m_sBroswerVersion,10);
    if (isNaN(this.m_sBroswerMajorVersion)) {
        this.m_sBroswerVersion  = ''+parseFloat(navigator.appVersion); 
        this.m_sBroswerMajorVersion = parseInt(navigator.appVersion,10);
    }
    /*
    document.write(''
    +'Full version  = '+this.m_sBroswerVersion+'<br>'
    +'Major version = '+this.m_sBroswerMajorVersion+'<br>'
    +'navigator.appName = '+navigator.appName+'<br>'
    +'navigator.userAgent = '+navigator.userAgent+'<br>'
    )
    */
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_CheckBroswerIE()
{
    var appVersion = navigator.appVersion;
    
    if ( appVersion.indexOf("MSIE") < 0 ){
        if (appVersion.indexOf("Windows NT 6.3") >= 0 && appVersion.indexOf("rv:11.0") >= 0 ) 
            return true;
        
        if (appVersion.indexOf("rv:11.0") >= 0) 
            return true;
        
        return false;
    }
    return true;
}

function CZoneSystem_GetIEVersion()
{
    var appVersion = navigator.appVersion;
 
    var szIE       = "MSIE";
    var nIEPos     = appVersion.indexOf(szIE);
    var fIEVer     = 0.0;
    
    if (nIEPos < 0) 
    {
        if (appVersion.indexOf("Windows NT 6.3") >= 0 && appVersion.indexOf("rv:11.0")) 
        {
            fIEVer = 11.0;
        }

	    if (appVersion.indexOf("rv:11.0")) 
        {
            fIEVer = 11.0;
        }

        return fIEVer;
    }
    
    var szIEVer = appVersion.substr(nIEPos + szIE.length, appVersion.length - nIEPos + szIE.length);
    fIEVer = parseFloat(szIEVer);
    
    return fIEVer;
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_CheckBroswerChrome() 
{
    // <== ie 해킹된 버젼에서 chromeframe이라는 문자가 있어 IE가 크롬으로 해석되어 우회코드 처리
    if ( this.CheckBroswerIE() ) {
        if ( this.FindUserAgent("CHROMEFRAME") )
            return false;
    }

    if ( this.FindUserAgent("CRIOS") )
        return true;
    
    return this.FindUserAgent("CHROME") && (!( this.FindUserAgent("OPR") || this.FindUserAgent("Edge") ));
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_URLParse(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: typeof (match[4]) == "undefined" ? "" : match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
// <== 상대 또는 절대(루트경로) 경로를 프로토콜이 포함된 경로로 만든다.
function CZoneSystem_AbsoluteURL(sURL) 
{
    if ( sURL == "" )   return sURL;
    var arParseURL = this.URLParse(sURL);
    if (arParseURL == null) 
    {
        arParseURL = this.URLParse(window.location.href);
        var sAbsPath;
        sAbsPath = arParseURL.protocol + "//";
        sAbsPath += arParseURL.host;
        //sAbsPath += (arParseURL.port == "" ? "" : (":" + arParseURL.port));

        if ( sURL.indexOf("/") != 0 )
        {
            var pathArray = arParseURL.pathname.split('/');

            for (nF = 0; nF < pathArray.length - 1; nF++)
            {
                sAbsPath += (pathArray[nF] + "/");
            }
        }

        sURL = (sAbsPath + sURL);
    }

    return sURL;
}

///////////////////////////////////////////////////////////////////////////////////////
function CZoneSystem_ParseQueryString(sQueryString, sName, sDefaultValue)
{
	var arInfoSplit = sQueryString.split('?');
	if ( arInfoSplit.length == 2 )    
	{
		sQueryString = arInfoSplit[1];
	}

	//sQueryString = decodeURIComponent(sQueryString);
	var arItem = sQueryString.split('&');
	
	var sLower = "";
	sName = sName.toLowerCase() + "=";
	
	for ( var nF = 0 ; nF < arItem.length ; nF++ )
	{
		sLower = arItem[nF].toLowerCase();
		
		if ( sLower.indexOf(sName) == 0 )
		{ 
			if ( sLower.length == sName.length ) 
			{ 
				return sDefaultValue;
			}
			else
			{
				return decodeURIComponent(arItem[nF]).substr(sName.length, arItem[nF].length - sName.length);
			}
		}
	}

    return sDefaultValue;
}

/////////////////////////////////////////////////////////////////////////////////////////
// CZoneLoader
/////////////////////////////////////////////////////////////////////////////////////////
function CZoneLoader(path, scr, context, sID) 
{
    /////////////////////////////////////////////////////////////////////////////////////
    var ZoneLoader           = this;
    this.done                = false;

    /////////////////////////////////////////////////////////////////////////////////////
    var manager              = context;

    /////////////////////////////////////////////////////////////////////////////////////
    scr.onload              = handleLoad;
    scr.onreadystatechange  = handleReadyStateChange;
    scr.onerror             = handleError;
    if ( typeof(sID) != "undefined" ){
        if ( sID != "" )    scr.id = sID;
    }
    
    /////////////////////////////////////////////////////////////////////////////////////
    document.body.appendChild(scr);

    /////////////////////////////////////////////////////////////////////////////////////
    function handleLoad() {
        if (!ZoneLoader.done) {
            ZoneLoader.done = true;
            manager.OnResultCallback(path, "ok");
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////
    function handleReadyStateChange() {
        var state;
        if (!ZoneLoader.done) {
            state = scr.readyState;
            if (state === "complete") {
                manager.OnResultCallback();
            }
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////
    function handleError() {
        if (!ZoneLoader.done) {
            ZoneLoader.done = true;
            manager.OnResultCallback(path, "error");
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
// CZoneScriptLoader
/////////////////////////////////////////////////////////////////////////////////////////
function CZoneScriptLoader(path, manager, sID, sCharset) 
{
    /////////////////////////////////////////////////////////////////////////////////////
    var scr                  = document.createElement('script');
    scr.src                  = path;
	scr.type				 = "text/javascript";
	scr.charset				 = typeof(sCharset) == "undefined" ? "utf-8" : sCharset;
    this.m_ZoneLoader        = new CZoneLoader(path, scr, manager, sID);
}

/////////////////////////////////////////////////////////////////////////////////////////
// CZoneCSSLoader
/////////////////////////////////////////////////////////////////////////////////////////
function CZoneCSSLoader(path, manager, sID) 
{
    var scr                 = document.createElement('link');
    scr.rel                 = 'stylesheet';
    scr.type                = 'text/css';
    scr.href                = path;
    scr.media               = 'all';
    this.m_ZoneLoader       = new CZoneLoader(path, scr, manager, sID);
}

/////////////////////////////////////////////////////////////////////////////////////////
// CZoneLoaderManager
/////////////////////////////////////////////////////////////////////////////////////////
function CZoneLoaderManager(Param, fnResultCallback)
{
    /////////////////////////////////////////////////////////////////////////////////////
    this.m_dicZoneLoader      = {};
    this.m_dicZoneLoaderID    = {};
    this.m_dicZoneLoaderType  = {};
    this.m_Param              = Param;
    this.m_fnResultCallback   = fnResultCallback;
    
    /////////////////////////////////////////////////////////////////////////////////////
    this.Add                    = CZoneLoaderManager_Add;
    this.Start                  = CZoneLoaderManager_Start;

    this.OnResultCallback       = CZoneLoaderManager_OnResultCallback;
    this.IsComplectedAll        = CZoneLoaderManager_IsComplectedAll;

    /////////////////////////////////////////////////////////////////////////////////////
    this.m_bAsync               = false;
    this.m_nReqIdx              = 0;
    this.m_arZoneLoader         = null;
    this.SyncNext               = CZoneLoaderManager_SyncNext;
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneLoaderManager_Add(sType, sURL, sID)
{
    this.m_dicZoneLoader[sURL]      = null;
    if ( typeof(sID) == "undefined" )   sID = "";
    this.m_dicZoneLoaderID[sURL]    = sID;
    this.m_dicZoneLoaderType[sURL]  = sType;
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneLoaderManager_Start(bAsync)
{
    if ( typeof(bAsync) == "undefined" )   bAsync = false;
    this.m_bAsync = bAsync;

    if ( this.m_bAsync )
    {
        for( var key in this.m_dicZoneLoader ) {
            if      ( this.m_dicZoneLoaderType[key] == "script" )
                this.m_dicZoneLoader[key] = new CZoneScriptLoader(key, this, this.m_dicZoneLoaderID[key]);
            else if ( this.m_dicZoneLoaderType[key] == "css" )
                this.m_dicZoneLoader[key] = new CZoneCSSLoader(key, this, this.m_dicZoneLoaderID[key]);
        }
    }
    else 
    {
        this.m_arZoneLoader         = new Array();
        for( var key in this.m_dicZoneLoader ) {
            this.m_arZoneLoader[this.m_arZoneLoader.length] = key;
        }
        this.m_nReqIdx              = 0;
        this.SyncNext();
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneLoaderManager_SyncNext()
{
    if ( this.m_arZoneLoader.length > this.m_nReqIdx )  {
        var key = this.m_arZoneLoader[this.m_nReqIdx];
        if      ( this.m_dicZoneLoaderType[key] == "script" )
            this.m_dicZoneLoader[key] = new CZoneScriptLoader(key, this, this.m_dicZoneLoaderID[key]);
        else if ( this.m_dicZoneLoaderType[key] == "css" )
            this.m_dicZoneLoader[key] = new CZoneCSSLoader(key, this, this.m_dicZoneLoaderID[key]);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneLoaderManager_OnResultCallback(sURL, sResult)
{
    if ( sResult == "ok" ){
        if ( this.IsComplectedAll() ){
            this.m_fnResultCallback(this.m_Param);
        }
        else if ( ! this.m_bAsync ){
            this.m_nReqIdx++;
            this.SyncNext();
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneLoaderManager_IsComplectedAll()
{
    for( var key in this.m_dicZoneLoader ) {
        if ( this.m_dicZoneLoader[key] == null )
            return false;

        if ( ! this.m_dicZoneLoader[key].m_ZoneLoader.done )
            return false;
    }
    return true;
}

/////////////////////////////////////////////////////////////////////////////////////////
// CZoneAppChecker
/////////////////////////////////////////////////////////////////////////////////////////
var g_arZoneAppChecker = {};

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker(sAppName, sAppScheme, sPackageNameIOS, sPackageNameAndroid, sAppStoreURL, bURLEncode)
{
    /////////////////////////////////////////////////////////////////////////////////////
    this.m_dateIOSExecute                   = null;
    this.m_bIOSInstallCheck                 = false;
    this.m_uIOSInstallTimerID               = 0;
    this.m_nIOSInstallTimerInterval         = (1000 * 3);
    
    /////////////////////////////////////////////////////////////////////////////////////
    this.m_nAndroidInstallTimerInterval     = 2500;

    /////////////////////////////////////////////////////////////////////////////////////
    this.m_sAppName             = sAppName;
    this.m_sAppScheme           = sAppScheme;
    this.m_sPackageNameIOS      = sPackageNameIOS;
    this.m_sPackageNameAndroid  = sPackageNameAndroid;
    this.m_sAppStoreURL         = sAppStoreURL; 
    this.m_sPlayStoreURL        = "market://details?id=" + this.m_sPackageNameAndroid;
    this.m_bURLEncode           = typeof(bURLEncode) != "undefined" ? bURLEncode : g_ZoneSystem.IsOSOSX() ? true : false;
        
    /////////////////////////////////////////////////////////////////////////////////////
    this.TimeExecute        = CZoneAppChecker_TimeExecute;
    this.IOSExecute         = CZoneAppChecker_IOSExecute;
    this.AndroidExecute     = CZoneAppChecker_AndroidExecute;
    this.ChromeExecute      = CZoneAppChecker_ChromeExecute;
    this.OSXSafariExecute   = CZoneAppChecker_OSXSafariExecute;
    this.OSXChromeExecute   = CZoneAppChecker_OSXChromeExecute;

    /////////////////////////////////////////////////////////////////////////////////////
    this.Execute            = CZoneAppChecker_Execute;
    
    /////////////////////////////////////////////////////////////////////////////////////
    this.GenURLScheme       = CZoneAppChecker_GenURLScheme;
    
    /////////////////////////////////////////////////////////////////////////////////////
    g_arZoneAppChecker[sAppName] = this;
    
    /////////////////////////////////////////////////////////////////////////////////////
    this.Init               = CZoneAppChecker_Init;
    this.UnInit             = CZoneAppChecker_UnInit;

    this.m_iframe           = null;
    
    /////////////////////////////////////////////////////////////////////////////////////
    this.Init();
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_Init()
{
    this.UnInit();

    if (g_ZoneSystem.IsOSAndroid() ||
        (g_ZoneSystem.IsOSOSX() && g_ZoneSystem.IsBroswerSafari()) ) {
        var divParent = document.createElement('div');
        divParent.style.position  = "fixed";
        divParent.style.bottom    = "0px";
        divParent.style.right     = "-10px";

        this.m_iframe = document.createElement("iframe");
        this.m_iframe.id  = this.m_iframe.name = "ZoneAppCheckerFrameAppIns";
        this.m_iframe.style.width  = "0px";
        this.m_iframe.style.height = "0px";
        divParent.appendChild(this.m_iframe);

        document.body.appendChild(divParent);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_UnInit()
{
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_GenURLScheme(sCommand)
{
    var sNewURLScheme = "";
    
    if ( this.m_bURLEncode )
        sCommand = encodeURIComponent(sCommand);

    if (g_ZoneSystem.IsOSAndroid() && g_ZoneSystem.IsBroswerChrome()) {
    	sNewURLScheme = "intent://" + sCommand + "#Intent;scheme="  + this.m_sAppScheme +  ";package=" + this.m_sPackageNameAndroid + ";end";
    } else {
        sNewURLScheme = this.m_sAppScheme + "://" + sCommand;
    }

    return sNewURLScheme;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Android
/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_AndroidExecute(sURL)
{
    /////////////////////////////////////////////////////////////////////////////////////
    this.m_iframe.location = sURL;
    var pThis = this;

    /////////////////////////////////////////////////////////////////////////////////////
    setTimeout(function()
    { 
        try {
            var objZoneAppCheckerFrameAppIns = this.m_iframe.document.body;
        } 
        catch (e) {
            if ( confirm(pThis.m_sAppName + "를 설치하시면 서비스를 이용할 수 있습니다.\n설치 하시겠습니까?") ) {
                location.href = pThis.m_sPlayStoreURL;
                return false;
            }
        }
    }, 
    this.m_nAndroidInstallTimerInterval);
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_ChromeExecute(sURL)
{
    top.window.location = sURL;
}

/////////////////////////////////////////////////////////////////////////////////////////
function InstallZoneUtilsOnBlurTimeout()
{
    setTimeout(function(){window.focus(); InstallZoneUtilsOnBlur();}, 1);
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_TimeExecute(sURL, loc, sAppStore)
{
    /////////////////////////////////////////////////////////////////////////////////////
    setTimeout(function(){window.focus(); InstallZoneUtilsOnBlurTimeout();}, 1);

    /////////////////////////////////////////////////////////////////////////////////////
    this.m_dateIOSExecute = new Date();
    if ( this.m_uIOSInstallTimerID != 0 ){
        clearTimeout(this.m_uIOSInstallTimerID);
        this.m_uIOSInstallTimerID = 0;
    }
    this.m_bIOSInstallCheck = false;
    var pThis = this;
    this.m_uIOSInstallTimerID = setTimeout(function()
    {
        var date = new Date();
        var nGap = date - pThis.m_dateIOSExecute;
        if ( nGap > ( pThis.m_nIOSInstallTimerInterval + 1000 * 3) )
            return;

        if (!pThis.m_bIOSInstallCheck){
            top.window.location = sAppStore;
        }
    }, this.m_nIOSInstallTimerInterval);

    if ( typeof(loc.tagName) != "undefined" ){
        if ( loc.tagName.toUpperCase() == "IFRAME" ){
            loc.src = sURL;
            return;
        }
    }

    loc.href = sURL;
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_IOSExecute(sURL)
{
    this.TimeExecute(sURL, top.window.document.location, this.m_sAppStoreURL);
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_OSXSafariExecute(sURL)
{
    this.TimeExecute(sURL, this.m_iframe, this.m_sAppStoreURL);
}

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_OSXChromeExecute(sURL)
{
    this.TimeExecute(sURL, top.window.document.location, this.m_sAppStoreURL);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAppChecker_Execute(sCommand)
{
    sCommand += ("&BROSWER=" + getBroswerName());
    sCommand = this.GenURLScheme(sCommand);
    
    if (g_ZoneSystem.IsOSIOS()) {
        this.IOSExecute(sCommand);
    }
    else if (g_ZoneSystem.IsOSAndroid()) {
        if (g_ZoneSystem.IsBroswerChrome()) {
            this.ChromeExecute(sCommand);
        }
        else {
            this.AndroidExecute(sCommand);
        }
    }
    else if (g_ZoneSystem.IsOSOSX() ) {
        sCommand = sCommand + "&VERSION=" + g_sMacAppVer + "&SETUP=" + encodeURIComponent(g_sMacAppUpdateURL);
        if ( g_ZoneSystem.IsBroswerChrome() )
            this.OSXChromeExecute(sCommand);            
        else
            this.OSXSafariExecute(sCommand);
    }
    else {
        this.IOSExecute(sCommand);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
var oldZoneUtilsOnBlur = window.onblur;
var g_bInstallZoneUtilsOnBlur = false;
function InstallZoneUtilsOnBlur()
{
    if ( g_bInstallZoneUtilsOnBlur )
        return;
    g_bInstallZoneUtilsOnBlur = true;

    window.onblur = function()
    {
        for( var Key in g_arZoneAppChecker ) {
            g_arZoneAppChecker[Key].m_bIOSInstallCheck = true;
            clearTimeout(g_arZoneAppChecker[Key].m_uIOSInstallTimerID);
        }

        if ( oldZoneUtilsOnBlur == null ){
            return;
        }

        if ( oldZoneUtilsOnBlur === window.onblur ){
            return;
        }
        oldZoneUtilsOnBlur(); 
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
// CZoneDateTime
/////////////////////////////////////////////////////////////////////////////////////////
var g_ZoneDateTime = new CZoneDateTime();

/////////////////////////////////////////////////////////////////////////////////////////
function CZoneDateTime()
{
    this.SecondToHHMMSS = function(nSecond){ 
        nSecond = Number(nSecond);
        var h = Math.floor(nSecond / 3600);
        var m = Math.floor(nSecond % 3600 / 60);
        var s = Math.floor(nSecond % 3600 % 60);

        var hDisplay = h > 0 ? ((h < 10 ? "0" : "") + h + ":") : "";
        var mDisplay = (m < 10 ? "0" : "") + m + ":";
        var sDisplay = (s < 10 ? "0" : "") + s;
        return hDisplay + mDisplay + sDisplay; 
    };
}

﻿///////////////////////////////////////////////////////////////////////////////////////////
// http://118.217.19.195/EBS/computerliteracy/default.html
///////////////////////////////////////////////////////////////////////////////////////////
// 하이브리드 앱인 경우 : 웹=>앱 호출방식 postMessage 인가 ?
var ZONE_APP_TITLE          = "EBS English";
var g_bCallToPostMsg        = true; 
var g_sAppScheme            = "ebs-english";
var g_sAppPostName          = "ebse";
        
///////////////////////////////////////////////////////////////////////////////////////////
// Android 설정
///////////////////////////////////////////////////////////////////////////////////////////
// 패키지명
var g_sAndroidPackageName   = "kr.co.ebse.player";

///////////////////////////////////////////////////////////////////////////////////////////
// iOS 설정
///////////////////////////////////////////////////////////////////////////////////////////
// 스토어
var ZONE_APPSTORE_URL       = "https://apps.apple.com/us/app/ebs-english/id1225130608";

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneGenAppCommand(sCommand, sParam, bCallToURLScheme, bCallToPostMsg, bParamURLEncode)
{
    if ( typeof(bCallToURLScheme) == "undefined" )  bCallToURLScheme = g_bCallToURLScheme;
    if ( typeof(bCallToPostMsg) == "undefined" )    bCallToPostMsg = g_bCallToPostMsg;
    if ( typeof(bParamURLEncode) == "undefined" )   bParamURLEncode = true;

    if ( bCallToURLScheme ) {
        if (g_sAppScheme.length == 0) {
		    alert("App Scheme 정의를 먼저 합니다.");
		    return "";
	    }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    var sNewURLScheme = "";

    if ( bCallToPostMsg ){
        if ( theZoneAPP() == null ){
            bCallToPostMsg = false;
        }
        
        if ( bCallToPostMsg ){
            sParam = queryStringToJSONString(sParam);

            sNewURLScheme =  
            "{" + 
                "\"version\" : \"" + (g_IsIOS ? g_sAppReqVerIOS : g_sAppReqVerAndroid) + "\"," + 
                "\"cmdKey\" : \"\"," +
                "\"fnName\" : \"" + sCommand + "\"," + 
                "\"fnBody\"  : " + sParam + 
            "}";

            return sNewURLScheme;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( sParam != "" ){
        sParam += "&";
    }
    sParam += "req-version=";
    sParam += g_IsIOS ? g_sAppReqVerIOS : g_sAppReqVerAndroid;
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    sNewURLScheme = ZoneURLSchemeCommand(sCommand, sParam, bCallToURLScheme, bParamURLEncode);
    return sNewURLScheme;
}

///////////////////////////////////////////////////////////////////////////////////////////
function ZoneURLSchemeCommand(sCommand, sParam, bCallToURLScheme, bParamURLEncode)
{
    if ( typeof(bCallToURLScheme) == "undefined" )  bCallToURLScheme = true;
    if ( typeof(bParamURLEncode) == "undefined" )  bParamURLEncode = false;
    
    if ( bParamURLEncode ) sParam = encodeURIComponent(sParam);

    var sNewURLScheme;
    if ( bCallToURLScheme ) {
        if (g_IsChrome) {
    	    sNewURLScheme = "intent://" + sCommand + "?"  + sParam +  "#Intent;scheme="  + g_sAppScheme +  ";package=" + g_sAndroidPackageName + ";end";
        } else {
            sNewURLScheme = g_sAppScheme + "://" + sCommand + "?" + sParam;
        }
    }
    else{
        sNewURLScheme = g_sAppScheme + "://" +  sCommand + "?" + sParam;
    }

    return sNewURLScheme;
}

///////////////////////////////////////////////////////////////////////////////////////////
// WEB TO APP
///////////////////////////////////////////////////////////////////////////////////////////
function ZoneAppSetAutoLogin(bAutoLogin)
{
    var sCmd    = "PutAutoLogin";
    var sParam  = "auto_login=" + encodeURIComponent(bAutoLogin);

    ZoneAppExecute(sCmd, sParam);
}

///////////////////////////////////////////////////////////////////////////////////////////
function ZoneAppGetAutoLogin()
{
    var sCmd    = "GetAutoLogin";
    ZoneAppExecute(sCmd, "");
}

///////////////////////////////////////////////////////////////////////////////////////////
function ZoneAppSetToken(sToken)
{
    var sCmd    = "PutToken";
    var sParam  = "token=" + encodeURIComponent(sToken);

    ZoneAppExecute(sCmd, sParam);
}

///////////////////////////////////////////////////////////////////////////////////////////
function ZoneAppGetToken()
{
    var sCmd    = "GetToken";
    ZoneAppExecute(sCmd, "");
}

///////////////////////////////////////////////////////////////////////////////////////////
function ZoneDownload(sDataValue, sInfoURL)
{
    if ( typeof(sInfoURL)  == "undefined" )      sInfoURL          = "https://m.ebsmath.co.kr/resource/apiDown";
    var sParam         = "info-url=" + encodeURIComponent(sInfoURL) + "&data=" + encodeURIComponent(sDataValue);
    ZoneAppExecute("download", sParam, true, false);
}

///////////////////////////////////////////////////////////////////////////////////////////
// WEB TO APP
///////////////////////////////////////////////////////////////////////////////////////////
function ZoneAppRotateScreen(Rotate)
{
    var sCmd    = "ZoneAppRotateScreen";
    var sParam  = "Rotate=" + encodeURIComponent(Rotate);

    ZoneAppExecute(sCmd, sParam);
}

///////////////////////////////////////////////////////////////////////////////////////////
function ZoneAppEnableRotateScreen(Enable)
{
    var sCmd    = "ZoneAppEnableRotateScreen";
    var sParam  = "Enable=" + encodeURIComponent(Enable ? "true" : "false");
    ZoneAppExecute(sCmd, sParam);
}

////////////////////////////////////////////////////////////////////////////////////////////
function OnPageZoneApp(object)
{
    ////////////////////////////////////////////////////////////////////////////////////////
    var action  = object["action"];
    var param   = object["param"];
    if ( action == null || param == null )
        return;

    ////////////////////////////////////////////////////////////////////////////////////////
    switch(action)
    {
        case "ZoneAppReadINI":
            var Name = param["Name"];
            var Result = param["Result"];
            if ( Name == null || Result == null )
                return;
            if ( typeof(OnZoneAppReadINI) != "undefined" )
                OnZoneAppReadINI(Name, Result);
            break;
        default:
            break;
    }
}﻿///////////////////////////////////////////////////////////////////////////////////////////////////
var g_ZoneAuthGate  = new CZoneAuthGate("");
var g_ZoneAuthGateCommand_bIOS      = false;
var g_ZoneAuthGateCommand_bChrome   = false;
var g_ZoneAuthGateCommand_sURL      = "";
var g_ZoneAuthGateCommand_sVOD      = "";

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZonePlayerGetDecodeURL(sURL)
{
    var nFirstFind = sURL.indexOf("$", 0);
    if ( nFirstFind >= 0 )
    {
        var nLastFind = sURL.indexOf("$", nFirstFind + 1);
        if ( nLastFind > 0 )
        {
            var sEncURL = sURL.substring(nFirstFind + 1, nLastFind);
            var sDecURL = ZoneCrypto.Base64Decode(sEncURL);
            sURL        = sURL.replace("$" + sEncURL + "$", sDecURL);
        }
    }
    return sURL;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function OnZonePlayerStreamming(bIOS, bChrome, sURL)
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( typeof(OnZonePlayerBeforeStreamming) != "undefined" )
    {
        if ( ! OnZonePlayerBeforeStreamming(g_sOS, bIOS, bChrome, sURL) )
        {
            return;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    sURL = ZonePlayerGetDecodeURL(sURL);
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( g_ZoneAuthGate.m_sURL != "" )
    {
        sVOD        = ParseQueryString(sURL, "VODURL", "");
        sSiteCode   = ParseQueryString(sURL, "SiteID", "");
        sUserID     = ParseQueryString(sURL, "UserID", "");

        g_ZoneAuthGateCommand_sVOD      = sVOD;
        g_ZoneAuthGateCommand_bIOS      = bIOS;
        g_ZoneAuthGateCommand_bChrome   = bChrome;
        g_ZoneAuthGateCommand_sURL      = sURL;

        g_ZoneAuthGate.Install("", sSiteCode, sUserID, sVOD);
        return;
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ZoneAPPCommand(bIOS, bChrome, sURL);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function OnZoneAuthGate(pParam, sVODApp, sVODPath, sKey)
{
    g_ZoneAuthGateCommand_sURL = ChangeQueryString(g_ZoneAuthGateCommand_sURL, "VODURL", g_ZoneAuthGateCommand_sVOD + "?" + sKey);
    ZoneAPPCommand(g_ZoneAuthGateCommand_bIOS, g_ZoneAuthGateCommand_bChrome, g_ZoneAuthGateCommand_sURL);
    // 획득 후 플레이어에 전달하여 동영상 재생을 진행하십시요
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function OnZonePlayerDownload(bIOS, bChrome, sURL)
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( typeof(OnZonePlayerBeforeDownload) != "undefined" )
    {
        if ( ! OnZonePlayerBeforeDownload(ZoneGetDevice(), bIOS, bChrome, sURL) )
        {
            return;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //if ( typeof(g_sServerScript) != "undefined" )
    //{
        //if ( g_sServerScript == "ASP" || g_sServerScript == "JSP" )
        //{
            var nFirstFind = sURL.indexOf("$", 0);
            if ( nFirstFind > 0 )
            {
                var nLastFind = sURL.indexOf("$", nFirstFind + 1);
                if ( nLastFind > 0 )
                {
                    var sEncURL = sURL.substring(nFirstFind + 1, nLastFind);
                    var sDecURL = ZoneCrypto.Base64Decode(sEncURL);
                    sDecURL     = ZoneCrypto.Base64Encode(sDecURL);
                    sURL        = sURL.replace("$" + sEncURL + "$", sDecURL);
                }
            }
        //}
    //}

    ZoneAPPCommand(bIOS, bChrome, sURL);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function OnZonePlayerCommand(bIOS, bChrome, sURL)
{
	ZoneAPPCommand(bIOS, bChrome, sURL);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// ZoneCrypto
///////////////////////////////////////////////////////////////////////////////////////////////////
var ZoneCrypto =
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // private property
    ///////////////////////////////////////////////////////////////////////////////////////////////
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // GetQueryString
    ///////////////////////////////////////////////////////////////////////////////////////////////
    GetQueryString: function (sQueryString, sName, sDefaultValue) {
        var arInfoSplit = sQueryString.split('?');
        if (arInfoSplit.length == 2) {
            sQueryString = arInfoSplit[1];
        }

        //sQueryString = decodeURIComponent(sQueryString);
        var arItem = sQueryString.split('&');

        var sLower = "";
        sName = sName.toLowerCase() + "=";

        for (var nF = 0 ; nF < arItem.length ; nF++) {
            sLower = arItem[nF].toLowerCase();

            if (sLower.indexOf(sName) == 0) {
                if (sLower.length == sName.length) {
                    return sDefaultValue;
                }
                else {
                    return decodeURIComponent(arItem[nF]).substr(sName.length, arItem[nF].length - sName.length);
                }
            }
        }

        return sDefaultValue;
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // public method for encoding
    ///////////////////////////////////////////////////////////////////////////////////////////////
    Base64Encode: function (input, bUTF8Encode) {
        ///////////////////////////////////////////////////////////////////////////////////////////
        if (typeof (bUTF8Encode) == "undefined")
            bUTF8Encode = true;

        ///////////////////////////////////////////////////////////////////////////////////////////
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        ///////////////////////////////////////////////////////////////////////////////////////////
        if (bUTF8Encode)
            input = ZoneCrypto.UTF8Encode(input);

        ///////////////////////////////////////////////////////////////////////////////////////////
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                     this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                     this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        return output;
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // public method for decoding
    ///////////////////////////////////////////////////////////////////////////////////////////////
    Base64Decode: function (input, bUTF8Decode) {
        try{    var s = atob(input);    }
        catch(e){   return input;       }

        if (typeof (bUTF8Decode) == "undefined")
            bUTF8Decode = true;

        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        if (bUTF8Decode)
            output = ZoneCrypto.UTF8Decode(output);

        ///////////////////////////////////////////////////////////////////////////////////////////
        if ( typeof(g_sServerScript) != "undefined" )
        {
            if ( g_sServerScript == "ASP" || g_sServerScript == "JSP" )
            {
                output = decodeURIComponent(output);
            }
        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        return output;
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // private method for UTF-8 encoding
    ///////////////////////////////////////////////////////////////////////////////////////////////
    UTF8Encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        return utftext;
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // private method for UTF-8 decoding
    ///////////////////////////////////////////////////////////////////////////////////////////////
    UTF8Decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////
    ZoenDecode: function (sChipperText) {
        ///////////////////////////////////////////////////////////////////////////////////////////
        var sResult = "";

        ///////////////////////////////////////////////////////////////////////////////////////////
        var sPlainText = ZoneCrypto.Base64Decode(sChipperText, false);
        if (sPlainText.length == 0)
            return sResult;

        ///////////////////////////////////////////////////////////////////////////////////////////
        var nKeyMaxLen = parseInt(sPlainText.charCodeAt(sPlainText.length - 1) - 'A'.charCodeAt(0));

        ///////////////////////////////////////////////////////////////////////////////////////////
        var nF = 0;
        var nKey = 0;
        var nVal = 0;

        ///////////////////////////////////////////////////////////////////////////////////////////
        for (nF = 0 ; nF < nKeyMaxLen ; nF++) {
            nVal = sPlainText.charCodeAt(nF) - (nKeyMaxLen - nF);
            sResult += String.fromCharCode(nVal);
            nKey += nVal;
        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        for (nF = nKeyMaxLen ; nF < sPlainText.length - 1; nF++) {
            nVal = sPlainText.charCodeAt(nF) - nKey;

            if (nVal < 0) {
                while (nVal < 0) {
                    nVal = 256 + nVal;
                }
            }

            sResult += String.fromCharCode(nVal);
        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        sResult = ZoneCrypto.UTF8Decode(sResult);

        ///////////////////////////////////////////////////////////////////////////////////////////
        return sResult.substring(nKeyMaxLen, sResult.length - 1);
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////
    ZoenAuthDecode: function (sChipperText) {
        ///////////////////////////////////////////////////////////////////////////////////////////
        var sPlanText = ZoneCrypto.ZoenDecode(sChipperText);
        var sVOD = ZoneCrypto.GetQueryString(sPlanText, "VOD", sPlanText);

        ///////////////////////////////////////////////////////////////////////////////////////////
        if (sPlanText == sVOD) {
            return sChipperText;
        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        return sVOD + "?" + sChipperText;
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// ZoneAuthGate.js
///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAuthGate(sURL)
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    this.m_sURL                 = "";
    if ( typeof(sURL)  == "undefined" )
        this.m_sURL                 = "../ZoneAuthGate.asp";
    else 
        this.m_sURL                 = sURL;

    ///////////////////////////////////////////////////////////////////////////////////////////////
    this.m_ZoneAJAX             = null;

    ///////////////////////////////////////////////////////////////////////////////////////////////
    this.m_pParam               = null;
    this.m_sVODApp              = "";
    this.m_sVODPath             = "";
        
    this.Install                = CZoneAuthGate_Install;
    this.UnInstall              = CZoneAuthGate_UnInstall;
    this.OnZoneAuthGate         = CZoneAuthGate_OnZoneAuthGate;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAuthGate_Install(pParam, sSite, sID, sVODURL, sVODPath, sCMode, sPlayer)
{
    this.UnInstall();

    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( typeof(pParam)     == "undefined" )     pParam   = null;
    if ( typeof(sSite)      == "undefined" )     sSite    = "";
    if ( typeof(sID)        == "undefined" )     sID      = "";
    if ( typeof(sVODURL)    == "undefined" )     sVODURL  = "";
    if ( typeof(sVODPath)   == "undefined" )     sVODPath = "";
    if ( typeof(sCMode)     == "undefined" )     sCMode   = "S";
    if ( typeof(sPlayer)    == "undefined" )     sPlayer  = "ZPlayer";

    this.m_pParam           = pParam;
    this.m_sVODApp          = sVODURL;
    this.m_sVODPath         = sVODPath;

    sSite       = encodeURIComponent(sSite);
    sID         = encodeURIComponent(sID);
    sVODURL     = encodeURIComponent(sVODURL);

    this.m_ZoneAJAX  = new CZoneAJAX();
    this.m_ZoneAJAX.Install(this.OnZoneAuthGate, this, this.m_sURL, "CMODE=" + sCMode + "&PLAYER=" + sPlayer + "&SITECODE=" + sSite + "&UID=" + sID + "&VOD=" + sVODURL + "");
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAuthGate_UnInstall()
{
    if ( this.m_ZoneAJAX != null )
    {
        this.m_ZoneAJAX.UnInstall();
        this.m_ZoneAJAX = null;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAuthGate_OnZoneAuthGate(pParam, sStatus, nParam, sParam)
{
    if (sStatus == "recv") 
    {
        if ( nParam == 200 )
        {
            if ( typeof(OnZoneAuthGate) != "undefined" )
            {
                OnZoneAuthGate(pParam.m_pParam, pParam.m_sVODApp, pParam.m_sVODPath, sParam);
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// ZoneAJAX.js
///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAJAX()
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    this.m_XMLHTTP                  = null;
    this.m_cbZoneAJAXResultFunParam = null;
    this.m_cbZoneAJAXResultFun      = null;

    ///////////////////////////////////////////////////////////////////////////////////////////////
    this.Install                    = CZoneAJAX_Install;
    this.Open                       = CZoneAJAX_Open;
    this.UnInstall                  = CZoneAJAX_UnInstall;
    this.OnReadyStateChange         = CZoneAJAX_OnReadyStateChange;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAJAX_Install(cbZoneAJAXResultFun, cbZoneAJAXResultFunParam, sURL, sParam, sMode, bAsync)
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    this.UnInstall();

    ///////////////////////////////////////////////////////////////////////////////////////////////
    this.m_cbZoneAJAXResultFunParam = cbZoneAJAXResultFunParam;
    this.m_cbZoneAJAXResultFun      = cbZoneAJAXResultFun;
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    var self = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // IE7+, Chrome, Sapari, Firefox, Opera
    if (window.XMLHttpRequest)  this.m_XMLHTTP = new XMLHttpRequest();
    // IE6, IE5
    else                        this.m_XMLHTTP = new ActiveXObject('Microsoft.XMLHTTP');

    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( this.m_XMLHTTP == null )
        this.m_cbZoneAJAXResultFun(this.m_cbZoneAJAXResultFunParam, "install", false);

    // XMLHttpRequest 상태가 변경될 경우 실행할 이벤트리스너 등록
    this.m_XMLHTTP.onreadystatechange = function(eve) 
    {
        try
        {
            self.OnReadyStateChange.call(self, eve);
        }
        catch(e)
        {
            self.OnReadyStateChange.apply(self, eve);
        }
    }

    this.Open(sURL, sParam, sMode);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAJAX_UnInstall()
{
    if ( this.m_XMLHTTP != null )
    {
        this.m_XMLHTTP = null;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAJAX_Open(sURL, sParam, sMode, bAsync)
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( this.m_XMLHTTP == null )
        return;

    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( typeof(sMode)  == "undefined" )     sMode  = "GET";        sMode = sMode.toUpperCase();
    if ( typeof(bAsync) == "undefined" )     bAsync = true;
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    try
    {
        if ( sMode == "GET" )
        {
            this.m_XMLHTTP.open('GET', sURL + "?" + sParam, bAsync);
            this.m_XMLHTTP.send();
        }
        else
        {
            this.m_XMLHTTP.open('POST', sURL, bAsync);
	        this.m_XMLHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	        this.m_XMLHTTP.setRequestHeader("Cache-Control","no-cache, must-revalidate");
	        this.m_XMLHTTP.setRequestHeader("Pragma","no-cache");
            this.m_XMLHTTP.send(sParam);	
        }
    }
    catch(e) 
    {
        this.m_cbZoneAJAXResultFun(this.m_cbZoneAJAXResultFunParam, "connect", false);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function CZoneAJAX_OnReadyStateChange(eve)
{
    // XMLHttpRequest 상태에 따른 처리
    switch (this.m_XMLHTTP.readyState) 
    {
        // 초기화 되지 않은 상태
        case 0 :    break;
        // 서버가 연결된 상태
        case 1 :    break;
        // 요청이 수신된 상태
        case 2 :    break;
        // 처리를 요청한 상태
        case 3 :    break;
        // 요청이 완료되고 응답이 준비된 상태
        case 4 :
            // HTTP 상태에 따른 분기
            switch (this.m_XMLHTTP.status) 
            {
                // 성공
                case 200 :
                    this.m_cbZoneAJAXResultFun(this.m_cbZoneAJAXResultFunParam, "recv", this.m_XMLHTTP.status, this.m_XMLHTTP.responseText);
                    // 로드 성공
                    break;
                default :
                    this.m_cbZoneAJAXResultFun(this.m_cbZoneAJAXResultFunParam, "recv", this.m_XMLHTTP.status);
                    break;
            }
            break;
        // 기타
        default :
            break;
    }
}

///////////////////////////////////////////////////////////////////////////////////////
function ParseQueryString(sQueryString, sName, sDefaultValue)
{
	var arInfoSplit = sQueryString.split('?');
	if ( arInfoSplit.length == 2 )    
	{
		sQueryString = arInfoSplit[1];
	}

	//sQueryString = decodeURIComponent(sQueryString);
	var arItem = sQueryString.split('&');
	
	var sLower = "";
	sName = sName.toLowerCase() + "=";
	
	for ( var nF = 0 ; nF < arItem.length ; nF++ )
	{
		sLower = arItem[nF].toLowerCase();
		
		if ( sLower.indexOf(sName) == 0 )
		{ 
			if ( sLower.length == sName.length ) 
			{ 
				return sDefaultValue;
			}
			else
			{
				return decodeURIComponent(arItem[nF]).substr(sName.length, arItem[nF].length - sName.length);
			}
		}
	}

    return sDefaultValue;
}

///////////////////////////////////////////////////////////////////////////////////////
function ChangeQueryString(sQueryString, sName, sValue)
{
	var arInfoSplit = sQueryString.split('?');
	if ( arInfoSplit.length == 2 )    
	{
		sQueryString = arInfoSplit[1];
	}

	//sQueryString = decodeURIComponent(sQueryString);
	var arItem = sQueryString.split('&');
	
	var sLower = "";
    sName += "=";
    var sNameLower = sName;
	sNameLower     = sNameLower.toLowerCase();
	
	for ( var nF = 0 ; nF < arItem.length ; nF++ )
	{
		sLower = arItem[nF].toLowerCase();
		
		if ( sLower.indexOf(sNameLower) == 0 )
		{ 
			if ( sLower.length == sNameLower.length ) 
			{ 
				//arItem[nF] += encodeURIComponent(sValue);
                arItem[nF] += sValue;
			}
			else
			{
                arItem[nF]  = sName;
                //arItem[nF] += encodeURIComponent(sValue);
                arItem[nF] += sValue;
			}
            break;
		}
	}

    var sResult = "";
    if ( arInfoSplit.length == 2 )    
	{
		sResult = arInfoSplit[0];
        sResult += "?";
	}

    for ( var nF = 0 ; nF < arItem.length ; nF++ )
	{
		sResult += arItem[nF];
        if ( (nF + 1) != arItem.length )
            sResult += "&";
	};

    return sResult;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
if ( typeof(g_sSiteID)              == "undefined" )      g_sSiteID             = "";
if ( typeof(g_sUserID)              == "undefined" )      g_sUserID             = "";
if ( typeof(g_sInfoURL)             == "undefined" )      g_sInfoURL            = "";

function GenInfoURLCommand(sMode, sCourseID, sLectureIDs, sData)
{
    var sURL = "";
    if ( typeof(sData) != "undefined" ){
        if ( sData != "" ){
            sURL = sData;
            sURL += "&";
        }
    }

    sURL += "mode=" + sMode + "&";
    sURL += GenZonePlayerCommand(sCourseID, sLectureIDs);
    sURL = "info-url=" + g_sInfoURL + "&data=" + encodeURIComponent(sURL);

    return sURL;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function APPStreaming(sData)
{
    return ZoneAPPStreaming("", "", sData);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneAPPStreaming(sCourseID, sLectureIDs, sData)
{
    var sURL = GenZonePlayerCommand(sCourseID, sLectureIDs);
    sURL += ("&" + GenInfoURLCommand("play", sCourseID, sLectureIDs, sData));
    sURL = ZoneGenAppCommand("player", sURL, true, false, false);

    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( typeof(OnZonePlayerBeforeStreaming) != "undefined" )
    {
        if ( ! OnZonePlayerBeforeStreaming(g_sOS, bIOS, bChrome, sURL) )
        {
            return;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    sURL = ZonePlayerGetDecodeURL(sURL);
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( g_ZoneAuthGate.m_sURL != "" )
    {
        sVOD        = ParseQueryString(sURL, "VODURL", "");
        sSiteCode   = ParseQueryString(sURL, "SiteID", "");
        sUserID     = ParseQueryString(sURL, "UserID", "");

        g_ZoneAuthGateCommand_sVOD      = sVOD;
        g_ZoneAuthGateCommand_bIOS      = bIOS;
        g_ZoneAuthGateCommand_bChrome   = bChrome;
        g_ZoneAuthGateCommand_sURL      = sURL;

        g_ZoneAuthGate.Install("", sSiteCode, sUserID, sVOD);
        return;
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ZoneAPPCommand(g_IsIOS, g_IsChrome, sURL, true, false);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function APPDownload(sData)
{
    return ZoneAPPDownload("", "", sData)
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function ZoneAPPDownload(sCourseID, sLectureIDs, sData)
{
    ///////////////////////////////////////////////////////////////////////////////////////////////
    var sURL = GenZonePlayerCommand(sCourseID, sLectureIDs);
    sURL += ("&" + GenInfoURLCommand("download", sCourseID, sLectureIDs, sData));
    sURL = ZoneGenAppCommand("download", sURL, true, false, false);
        
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if ( typeof(OnZonePlayerBeforeDownload) != "undefined" )
    {
        if ( ! OnZonePlayerBeforeDownload(g_sOS, bIOS, bChrome, sURL) )
        {
            return;
        }
    }

    var nFirstFind = sURL.indexOf("$", 0);
    if ( nFirstFind > 0 )
    {
        var nLastFind = sURL.indexOf("$", nFirstFind + 1);
        if ( nLastFind > 0 )
        {
            var sEncURL = sURL.substring(nFirstFind + 1, nLastFind);
            var sDecURL = ZoneCrypto.Base64Decode(sEncURL);
            sDecURL     = ZoneCrypto.Base64Encode(sDecURL);
            sURL        = sURL.replace("$" + sEncURL + "$", sDecURL);
        }
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ZoneAPPCommand(g_IsIOS, g_IsChrome, sURL, true, false);
}

function GenZonePlayerCommand(sCourseID, sLectureIDs)
{
    var sURL = "";
    sURL =  "site-id=" + g_sSiteID + "&user-id=" + g_sUserID;
    if ( typeof(sCourseID) != "undefined" ){
        if ( sCourseID != "" ){
            sURL +=  "&course-id=" + sCourseID;
        }
    }
    if ( typeof(sLectureIDs) != "undefined" ){
        if ( sLectureIDs != "" ){
            sURL +=  "&lecture-id=" + sLectureIDs;
        }
    }
    return sURL;
}

function ZonePlayerAPPCommand(sCommand, sCourseID, sLectureIDs)
{
    var sURL = GenZonePlayerCommand(sCourseID, sLectureIDs);
    sURL = ZoneGenAppCommand(sCommand, sURL);
    return ZoneAPPCommand(g_IsIOS, g_IsChrome, sURL);
}

function ZoneAPPDownloadBoxShow(sCourseID)
{
    return ZonePlayerAPPCommand("download-box", sCourseID);
}

function ZoneAPPDownloadPlay(sCourseID, sLectureIDs)
{
    return ZonePlayerAPPCommand("download-play", sCourseID, sLectureIDs);
}

function ZoneAPPDownloadDelete(sCourseID, sLectureIDs)
{
    return ZonePlayerAPPCommand("download-delete", sCourseID, sLectureIDs);
}

function ZoneAPPDownloadDeleteAll()
{
    return ZonePlayerAPPCommand("download-delete-all");
}

function ZoneAPPDownloadDeleteCourse(sCourseID)
{
    return ZonePlayerAPPCommand("download-delete-course", sCourseID);
}

function ZoneAPPIsDownload(sCourseID, sLectureIDs)
{
    return ZonePlayerAPPCommand("is-download", sCourseID, sLectureIDs);
}

function ZoneAPPDownloadItemsStatus(sCourseID, sLectureIDs)
{
    return ZonePlayerAPPCommand("download-item-status", sCourseID, sLectureIDs);
}

function GetDownloadItemsFromStatus(sResult)
{
    var arItems = sResult.split('&');
    if ( arItems.length <= 0 )
        return -2;

    var nDownloading        = 0;
    var nDownloadComplected = 0;
    var nDownload           = 0;

    for(var nF = 0 ; nF < arItems.length ; nF++)
    {
        var arLecture = arItems[nF].split('=');
        if      ( arLecture[1] == "1" )     nDownloading++;
        else if ( arLecture[1] == "0" )     nDownloadComplected++;
        else if ( arLecture[1] == "-1" )    nDownload++;
    }
    
    if ( nDownload > 0 )
        return -1;

    if ( nDownloading > 0 )
        return 1;

    return 0;
}

function GetRequestDownloadItemsFromStatus(sResult)
{
    var arItems = sResult.split('&');
    if ( arItems.length <= 0 )
        return "";

    var sResult = "";
    for(var nF = 0 ; nF < arItems.length ; nF++)
    {
        var arLecture = arItems[nF].split('=');
        if ( arLecture[1] == "-1" )
        {
            sResult += arLecture[0];
            sResult += "|";
        }
    }
    
    if ( sResult.charAt(sResult.length - 1) == '|' )
        sResult = sResult.substring(0, sResult.length - 1);

    return sResult;
}