var a0_0xea0b57=a0_0x2651;(function(_0x3f4b7a,_0x50c578){var _0x10c30d=a0_0x2651,_0x43e10c=_0x3f4b7a();while(!![]){try{var _0x4ca417=parseInt(_0x10c30d(0x167))/0x1*(parseInt(_0x10c30d(0x1a4))/0x2)+-parseInt(_0x10c30d(0x1b6))/0x3*(parseInt(_0x10c30d(0x175))/0x4)+-parseInt(_0x10c30d(0x184))/0x5*(parseInt(_0x10c30d(0x196))/0x6)+-parseInt(_0x10c30d(0x10f))/0x7+-parseInt(_0x10c30d(0x100))/0x8+parseInt(_0x10c30d(0x19a))/0x9*(parseInt(_0x10c30d(0x1b2))/0xa)+parseInt(_0x10c30d(0x11f))/0xb*(parseInt(_0x10c30d(0x1a6))/0xc);if(_0x4ca417===_0x50c578)break;else _0x43e10c['push'](_0x43e10c['shift']());}catch(_0x10daf4){_0x43e10c['push'](_0x43e10c['shift']());}}}(a0_0x1d26,0x660ff));var Totaldays=0x0,CompanyID='',GstartDate='',GEmpID=0x0;$(document)['ready'](function(){var _0x110a75=a0_0x2651;ValidateHrAdmin(),initializePeoplePicker('EmployeeName'),CompanyID=titanForWork[_0x110a75(0x101)](_0x110a75(0x14b));var _0x5f09ad=$['urlParam'](_0x110a75(0x18c)),_0x4671e6=$[_0x110a75(0x124)](_0x110a75(0x13f)),_0x4e6094=$[_0x110a75(0x124)](_0x110a75(0x114));if(_0x5f09ad!=null){GEmpID=_0x5f09ad;var _0x23464a=_0x4671e6[_0x110a75(0x14c)](0x0,0x4)+'-'+_0x4671e6[_0x110a75(0x14c)](0x4,0x6)+'-'+_0x4671e6['slice'](0x6,0x8),_0x107a1f=_0x4e6094[_0x110a75(0x14c)](0x0,0x4)+'-'+_0x4e6094[_0x110a75(0x14c)](0x4,0x6)+'-'+_0x4e6094[_0x110a75(0x14c)](0x6,0x8),_0x214118=new Date(_0x107a1f);_0x214118[_0x110a75(0x1b4)](_0x214118['getDate']()+0x1);var _0x266fc6=_0x214118[_0x110a75(0x16b)](),_0x5128eb=_0x266fc6[_0x110a75(0x103)]('T');GstartDate=_0x23464a,$(_0x110a75(0x180))[_0x110a75(0x1ba)]({'dateFormat':_0x110a75(0x16e),'maxDate':new Date()})[_0x110a75(0x1ba)](_0x110a75(0x1b4),new Date(_0x23464a)),$(_0x110a75(0x145))[_0x110a75(0x1ba)]({'dateFormat':'dd/mm/yy','maxDate':new Date()})[_0x110a75(0x1ba)]('setDate',new Date(_0x107a1f));var _0xe77598=$(_0x110a75(0x180))[_0x110a75(0x1ba)](_0x110a75(0x12e)),_0x1b53e4=$(_0x110a75(0x145))[_0x110a75(0x1ba)](_0x110a75(0x12e));days=(_0x1b53e4-_0xe77598)/(0x3e8*0x3c*0x3c*0x18),Totaldays=Math['round'](days)+0x1,$(_0x110a75(0x16d))[_0x110a75(0x13b)](formatDateReportEmp(ConvertDateTimeFormat($(_0x110a75(0x180))[_0x110a75(0xea)](),'/'))),$('#EndDate')[_0x110a75(0x13b)](formatDateReportEmp(ConvertDateTimeFormat($(_0x110a75(0x145))['val'](),'/')));var _0x25056a=_spPageContextInfo[_0x110a75(0x199)]+'/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=LogonName\x20eq\x20\x27'+_0x5f09ad+_0x110a75(0x15a)+CompanyID+'\x27';EmployeeListDat(_0x25056a),LoadAllHolidays();var _0x44b4a2=_spPageContextInfo[_0x110a75(0x199)]+_0x110a75(0x151)+_0x23464a+_0x110a75(0x10c)+_0x5128eb+_0x110a75(0x149)+_0x5f09ad+'\x27\x20';EmpReportUsageUrl=_0x44b4a2,getFileData();var _0x25056a=_spPageContextInfo[_0x110a75(0x199)]+'/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=LogonName\x20eq\x20\x27'+_0x5f09ad+_0x110a75(0x15a)+CompanyID+'\x27';EmployeeListDat(_0x25056a),LoadAllHolidays();}});var EmployeeID='',ItemID='',SelectedDate='',TDID='';function attendanceEditModal(_0x260a94,_0x49be61,_0x472110){var _0x52bb5d=a0_0x2651;EmployeeID=0x0,ItemID=0x0,SelectedDate='',TDID=_0x472110,EmployeeID=_0x260a94,ItemID=_0x49be61;var _0xf6ec93=_0x472110[_0x52bb5d(0x159)](),_0x329948=_0xf6ec93[_0x52bb5d(0x14c)](0x0,0x4)+'-'+_0xf6ec93['slice'](0x4,0x6)+'-'+_0xf6ec93[_0x52bb5d(0x14c)](0x6,0x8),_0x532798=new Date(_0x329948);SelectedDate=_0x532798[_0x52bb5d(0x16b)]()['split']('T')[0x0];var _0x369cce=formatDateReportEmp(_0x532798);$(_0x52bb5d(0x139))[_0x52bb5d(0x13b)](_0x369cce),GetHolidays(_0x329948);}function UpdateAttendance(){var _0x246050=a0_0x2651;ItemID==0x0?(G_Validateholiday==!![]?confirm(_0x246050(0xf0))&&PushNewAttendance():PushNewAttendance(),Applyfilter(),LoadAllHolidays()):(G_Validateholiday==!![]?confirm(_0x246050(0xf0))&&ModifyAttendance():ModifyAttendance(),Applyfilter(),LoadAllHolidays());}function PushNewAttendance(){var _0x15d78e=a0_0x2651;$(_0x15d78e(0x1b0))[_0x15d78e(0xea)]()!=_0x15d78e(0x138)||G_Validateholiday==!![]?$[_0x15d78e(0x15c)]({'url':_spPageContextInfo[_0x15d78e(0x199)]+'/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items','type':_0x15d78e(0x17d),'async':![],'data':JSON['stringify']({'__metadata':{'type':_0x15d78e(0x10b)},'AttendanceDate':SelectedDate,'EmployeeId':EmployeeID,'AttendanceType':$(_0x15d78e(0x1b0))[_0x15d78e(0xea)]()}),'headers':{'Accept':_0x15d78e(0x119),'Content-Type':_0x15d78e(0x119),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x15d78e(0xea)](),'X-HTTP-Method':'POST'},'success':function(_0x26fbdf,_0x37220d,_0x15664d){var _0x37b715=_0x15d78e;$(_0x37b715(0x18b)+TDID)['text']($(_0x37b715(0x1b0))[_0x37b715(0xea)]()),alert('Data\x20has\x20been\x20saved.'),$(_0x37b715(0xf6))['modal'](_0x37b715(0x129)),GetAttendanceorLeaves();},'error':function(_0xde4f3,_0x2c9f97,_0x1c47e2){var _0x302997=_0x15d78e;alert(_0x302997(0x137));}}):alert(_0x15d78e(0x156));}function ModifyAttendance(){var _0x356e18=a0_0x2651;$(_0x356e18(0x1b0))[_0x356e18(0xea)]()!='Holiday'||G_Validateholiday==!![]?$['ajax']({'url':_spPageContextInfo['webAbsoluteUrl']+_0x356e18(0x17e)+ItemID+')','type':'POST','async':![],'data':JSON[_0x356e18(0x132)]({'__metadata':{'type':_0x356e18(0x10b)},'AttendanceType':$(_0x356e18(0x1b0))['val']()}),'headers':{'Accept':_0x356e18(0x119),'Content-Type':_0x356e18(0x119),'X-RequestDigest':$(_0x356e18(0x182))[_0x356e18(0xea)](),'IF-MATCH':'*','X-HTTP-Method':'MERGE'},'success':function(_0x37fdd5,_0x579ef1,_0x6de835){var _0x33faf4=_0x356e18;$(_0x33faf4(0x18b)+TDID)['text']($(_0x33faf4(0x1b0))[_0x33faf4(0xea)]()),$(_0x33faf4(0x130)+TDID)[_0x33faf4(0x13b)](_0x33faf4(0x153)),alert('Data\x20has\x20been\x20saved.'),$(_0x33faf4(0xf6))[_0x33faf4(0x128)]('hide'),GetAttendanceorLeaves();},'error':function(_0x448f60,_0x49f0e7,_0x38cf3e){var _0x16585a=_0x356e18;alert(_0x16585a(0x137));}}):alert(_0x356e18(0x156));}function initializePeoplePicker(_0x1cc686){var _0x476de6=a0_0x2651,_0x4a74da={};_0x4a74da['PrincipalAccountType']=_0x476de6(0x16a),_0x4a74da[_0x476de6(0x198)]=0xf,_0x4a74da['ResolvePrincipalSource']=0xf,_0x4a74da[_0x476de6(0x1c2)]=![],_0x4a74da[_0x476de6(0x155)]=0x32,_0x4a74da[_0x476de6(0x165)]=_0x476de6(0x12c),this['SPClientPeoplePicker_InitStandaloneControlWrapper'](_0x1cc686,null,_0x4a74da);}function Applyfilter(){var _0x4760e8=a0_0x2651;OpenMyCustomLoader(),EmpReportData=[];var _0x342749=$['urlParam'](_0x4760e8(0x18c)),_0x333f7d=$(_0x4760e8(0x180))[_0x4760e8(0x1ba)](_0x4760e8(0x12e)),_0x1dd927=$(_0x4760e8(0x145))[_0x4760e8(0x1ba)]('getDate');days=(_0x1dd927-_0x333f7d)/(0x3e8*0x3c*0x3c*0x18),Totaldays=Math[_0x4760e8(0x1b9)](days)+0x1,$(_0x4760e8(0x16d))[_0x4760e8(0x13b)](formatDateReportEmp(ConvertDateTimeFormat($(_0x4760e8(0x180))['val'](),'/'))),$(_0x4760e8(0x11b))['text'](formatDateReportEmp(ConvertDateTimeFormat($(_0x4760e8(0x145))['val'](),'/')));var _0x25ee43=moment($('#EmpreportFrom')[_0x4760e8(0xea)](),_0x4760e8(0xed))[_0x4760e8(0x193)](_0x4760e8(0x168)),_0xce9034=moment($(_0x4760e8(0x145))[_0x4760e8(0xea)](),_0x4760e8(0xed))[_0x4760e8(0x193)](_0x4760e8(0x168)),_0x2a048f=new Date(_0xce9034);_0x2a048f['setDate'](_0x2a048f['getDate']()+0x1);var _0x1e7c4f=_0x2a048f['toISOString'](),_0x498f27=_0x1e7c4f[_0x4760e8(0x103)]('T');GstartDate=_0x25ee43;var _0x3aeaff=ensureUser($(_0x4760e8(0x1a9))[_0x4760e8(0x195)]()['children']()[_0x4760e8(0x112)]('id'));if(_0x3aeaff==0x0){_0x342749=_0x342749,GEmpID=_0x342749;var _0x1471d5=_spPageContextInfo[_0x4760e8(0x199)]+'/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$orderby\x20=\x20AttendanceDate\x20asc&$filter=AttendanceDate\x20ge\x20\x27'+_0x25ee43+_0x4760e8(0x10c)+_0x498f27+_0x4760e8(0x149)+_0x342749+'\x27\x20';EmpReportUsageUrl=_0x1471d5,getFileData();var _0xdd2783=_spPageContextInfo['webAbsoluteUrl']+_0x4760e8(0x104)+_0x342749+_0x4760e8(0x15a)+CompanyID+'\x27';EmployeeListDat(_0xdd2783);}else{if(ISHRADMIN==!![]){_0x342749=_0x3aeaff,GEmpID=_0x3aeaff;var _0x1471d5=_spPageContextInfo['webAbsoluteUrl']+_0x4760e8(0x1ad)+_0x25ee43+_0x4760e8(0x10c)+_0x498f27+_0x4760e8(0x149)+_0x342749+'\x27\x20';EmpReportUsageUrl=_0x1471d5,getFileData();var _0xdd2783=_spPageContextInfo[_0x4760e8(0x199)]+_0x4760e8(0x104)+_0x342749+_0x4760e8(0x15a)+CompanyID+'\x27';EmployeeListDat(_0xdd2783);}else alert(_0x4760e8(0x109));}LoadAllHolidays();}var DataIdList=[],EmpAttendanceData=[],TotalLeavesorAbsent=[],EmpReportUsageUrl='',EmpReportData=EmpReportData||[];function getFileData(){var _0x21c4e0=a0_0x2651;jQuery[_0x21c4e0(0x15c)]({'url':EmpReportUsageUrl,'headers':{'Accept':_0x21c4e0(0x119)},'async':!![],'success':function(_0x30bae1){var _0x561358=_0x21c4e0;EmpReportData=EmpReportData[_0x561358(0x19f)](_0x30bae1['d'][_0x561358(0x18a)]);if(_0x30bae1['d'][_0x561358(0x1bd)])EmpReportUsageUrl=_0x30bae1['d'][_0x561358(0x1bd)],getFileData();else{if(EmpReportData[_0x561358(0x171)]>0x0){var _0x5d3fea=ensureUser($(_0x561358(0x1a9))[_0x561358(0x195)]()[_0x561358(0x195)]()['attr']('id')),_0x1fb383=$[_0x561358(0x124)](_0x561358(0x18c));_0x5d3fea!=0x0?EmpReportData=$[_0x561358(0x15e)](EmpReportData,function(_0xd2acb7){var _0x10833d=_0x561358;return _0xd2acb7[_0x10833d(0x14d)]['ID']==_0x5d3fea;}):EmpReportData=$[_0x561358(0x15e)](EmpReportData,function(_0x17041f){return _0x17041f['Employee']['ID']==_0x1fb383;});var _0x1458d5=moment(ConvertDateTimeFormat($(_0x561358(0x180))['val'](),'/'))[_0x561358(0x193)]('MM/DD/YYYY'),_0x4ab6a6=moment(ConvertDateTimeFormat($(_0x561358(0x145))[_0x561358(0xea)](),'/'))[_0x561358(0x193)]('MM/DD/YYYY'),_0x5d96c4=EmpReportData[_0x561358(0x172)](function(_0x354398){var _0x525d5f=_0x561358;return Created=moment(_0x354398['AttendanceDate'])[_0x525d5f(0x193)](_0x525d5f(0x1bf)),(_0x1458d5==''?Created!='':Created>=_0x1458d5)&&(_0x4ab6a6==''?Created!='':Created<=_0x4ab6a6);});GenerateEmpReport(_0x5d96c4);}else{var _0x5d96c4=[];GenerateEmpReport(_0x5d96c4);}CloseMyCustomLoader();}},'error':function(_0x18d3e3,_0x8b58f8,_0x1c0d21){var _0x3ed5c9=_0x21c4e0;console['log'](_0x3ed5c9(0x190)),console[_0x3ed5c9(0x160)](_0x18d3e3[_0x3ed5c9(0x148)][_0x3ed5c9(0x173)][_0x3ed5c9(0x179)][_0x3ed5c9(0x181)]);var _0x165b2d=_0x18d3e3[_0x3ed5c9(0x148)][_0x3ed5c9(0x173)]['message'][_0x3ed5c9(0x181)],_0x205319=_0x165b2d[_0x3ed5c9(0x1be)](_0x3ed5c9(0x131));if(_0x205319==!![]){EmpReportData=[];var _0x8eb124=_spPageContextInfo[_0x3ed5c9(0x199)]+'/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=2000';EmpReportUsageUrl=_0x8eb124,getFileData();}}});}function GenerateEmpReport(_0x4f0e99){var _0x1ee55f=a0_0x2651;EmpAttendanceData=[],DataIdList=[];var _0x645976=[];TotalLeavesorAbsent=[];for(var _0x5499df=0x0;_0x5499df<_0x4f0e99[_0x1ee55f(0x171)];_0x5499df++){if(_0x4f0e99[_0x5499df][_0x1ee55f(0x183)]!=_0x1ee55f(0x1bc)&&_0x4f0e99[_0x5499df][_0x1ee55f(0x183)]!=_0x1ee55f(0x138))_0x645976[_0x1ee55f(0x154)](_0x4f0e99[_0x5499df][_0x1ee55f(0x183)]);else{if(_0x4f0e99[_0x5499df][_0x1ee55f(0x183)]=='On-Leave')TotalLeavesorAbsent[_0x1ee55f(0x154)](_0x4f0e99[_0x5499df][_0x1ee55f(0x183)]);else _0x4f0e99[_0x5499df]['AttendanceType']==_0x1ee55f(0x138)&&TotalLeavesorAbsent['push'](_0x4f0e99[_0x5499df][_0x1ee55f(0x183)]);}var _0x1d5615=_0x4f0e99[_0x5499df]['ID'],_0x1344db=_0x4f0e99[_0x5499df][_0x1ee55f(0x14d)][_0x1ee55f(0x115)],_0x9e9542=_0x4f0e99[_0x5499df]['Employee']['ID'],_0x399c89=formatDateReportEmp(_0x4f0e99[_0x5499df][_0x1ee55f(0x102)]),_0x2e0d70=_0x4f0e99[_0x5499df][_0x1ee55f(0x183)],_0x32024d=_0x4f0e99[_0x5499df][_0x1ee55f(0x19d)],_0x11efd1=_0x4f0e99[_0x5499df]['HrAction'];EmpAttendanceData['push']({'UserId':_0x9e9542,'EmpName':_0x1344db,'AttendanceDate':_0x399c89,'AttendanceType':_0x2e0d70,'AttendanceItemId':_0x1d5615,'EmpWorkHours':_0x32024d,'HrAction':_0x11efd1});}var _0x480474='';$(_0x1ee55f(0xf1))[_0x1ee55f(0x12f)]();var _0x4a83c3=0x0,_0x4ec227=0x0;for(var _0x174ebb=0x0;_0x174ebb<Totaldays;_0x174ebb++){var _0x9e999c=new Date(GstartDate);_0x9e999c['setDate'](_0x9e999c[_0x1ee55f(0x12e)]()+_0x174ebb);var _0x1aadab=moment(_0x9e999c,_0x1ee55f(0xed))[_0x1ee55f(0x193)]('YYYY-MM-DD'),_0x1aadab=_0x1aadab['split']('-')['join']('');DataIdList['push'](_0x1aadab);var _0xa195d9=formatDateReportEmp(_0x9e999c),_0x107c8e=EmpAttendanceData[_0x1ee55f(0x116)](function(_0x5ba914){var _0x19e701=_0x1ee55f;return _0x5ba914[_0x19e701(0x102)];})[_0x1ee55f(0x126)](_0xa195d9);if(_0x107c8e!=-0x1){var _0x432a5b=EmpAttendanceData[_0x107c8e][_0x1ee55f(0x183)],_0x311525=EmpAttendanceData[_0x107c8e]['EmpWorkHours'],_0x11efd1=EmpAttendanceData[_0x107c8e][_0x1ee55f(0xeb)],_0x10db34=EmpAttendanceData[_0x107c8e]['UserId'],_0x44305=EmpAttendanceData[_0x107c8e][_0x1ee55f(0x1a8)],_0x395558='none',_0x406863=_0x1ee55f(0x13c);_0x11efd1==!![]&&(_0x395558='block',_0x406863=_0x1ee55f(0x169));if(_0x432a5b!=_0x1ee55f(0x1bc)&&_0x432a5b!=_0x1ee55f(0x138)){if(_0x311525==null)var _0x4ec9f2=_0x1ee55f(0x10d)+_spPageContextInfo[_0x1ee55f(0x199)]+_0x1ee55f(0x125)+_0x1aadab+'&Mode='+window[_0x1ee55f(0x1b5)](_0x1ee55f(0x1c0))+_0x1ee55f(0xf3)+_0x1aadab+_0x1ee55f(0x1a3);else var _0x4ec9f2=_0x1ee55f(0x14f)+_spPageContextInfo[_0x1ee55f(0x199)]+_0x1ee55f(0x125)+_0x1aadab+_0x1ee55f(0x147)+window[_0x1ee55f(0x1b5)](_0x1ee55f(0x1c0))+_0x1ee55f(0x170)+ConvertHHMM(_0x311525)+'</a>';}else var _0x4ec9f2='';_0x4ec227=_0x4ec227+0x1,_0x480474+=_0x1ee55f(0x146),_0x480474+=_0x1ee55f(0x12d)+_0x1aadab+'><span>'+formatDateReportEmp(_0x9e999c)+_0x1ee55f(0xef)+_0x1aadab+_0x1ee55f(0x13d),_0x480474+='<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=Att'+_0x1aadab+'>'+_0x432a5b+_0x1ee55f(0xec),_0x480474+=_0x1ee55f(0x17f)+_0x1aadab+'>'+_0x4ec9f2+_0x1ee55f(0xec),_0x480474+=_0x1ee55f(0xf7)+_0x395558+_0x1ee55f(0x120),_0x480474+=_0x1ee55f(0x188)+_0x406863+_0x1ee55f(0xee)+GEmpID+','+_0x44305+','+_0x1aadab+_0x1ee55f(0xf4),_0x480474+='</tr>';}else{_0x4a83c3=_0x4a83c3+0x1;var _0x38f531=_0x1ee55f(0x10d)+_spPageContextInfo['webAbsoluteUrl']+'/Pages/TimeSheetEntry.aspx?WebAppId=2&Recall='+_0x1aadab+_0x1ee55f(0x147)+window[_0x1ee55f(0x1b5)](_0x1ee55f(0x1c0))+_0x1ee55f(0xf3)+_0x1aadab+_0x1ee55f(0x1a3);_0x480474+='<tr\x20class=\x27text-center\x27\x20>',_0x480474+=_0x1ee55f(0x12d)+_0x1aadab+'><span>'+formatDateReportEmp(_0x9e999c)+_0x1ee55f(0xef)+_0x1aadab+_0x1ee55f(0x13d),_0x480474+=_0x1ee55f(0x1b7)+_0x1aadab+_0x1ee55f(0x158),_0x480474+=_0x1ee55f(0x17f)+_0x1aadab+'></div></td>',_0x480474+=_0x1ee55f(0x140),_0x480474+=_0x1ee55f(0x1b8)+GEmpID+_0x1ee55f(0x191)+_0x1aadab+_0x1ee55f(0xf4),_0x480474+=_0x1ee55f(0x10e);}}var _0x5c8c65=parseInt(TotalLeavesorAbsent[_0x1ee55f(0x171)])+parseInt(_0x4a83c3)-parseInt($(_0x1ee55f(0x163))[_0x1ee55f(0x13b)]());_0x5c8c65<0x0&&(_0x5c8c65=0x0);$(_0x1ee55f(0x157))[_0x1ee55f(0x129)](),$('#EmpTotalItemscount')[_0x1ee55f(0x13b)](Totaldays);var _0x4a724c=parseInt(_0x4ec227)-parseInt(TotalLeavesorAbsent[_0x1ee55f(0x171)]);$(_0x1ee55f(0x1bb))['text'](Math[_0x1ee55f(0xff)](_0x4a724c)),$(_0x1ee55f(0xf1))[_0x1ee55f(0x121)](_0x480474),EmpTableConfiguration();}function ConvertDateTimeFormat(_0x2233e4,_0x47902a){var _0x53ad6a=a0_0x2651;return _0x2233e4[_0x53ad6a(0x103)](_0x47902a)[0x1]+''+_0x47902a+''+_0x2233e4[_0x53ad6a(0x103)](_0x47902a)[0x0]+''+_0x47902a+''+_0x2233e4[_0x53ad6a(0x103)](_0x47902a)[0x2];}var GEmployeeID=0x0,LocID=0x0;function EmployeeListDat(_0x406a1f){var _0x43555d=a0_0x2651;GEmployeeID=0x0,$[_0x43555d(0x15c)]({'url':_0x406a1f,'headers':{'Accept':_0x43555d(0x119)},'async':![],'success':function(_0x5daa16){var _0x4ccab7=_0x43555d,_0x4f5398=_0x5daa16['d'][_0x4ccab7(0x18a)];_0x4f5398['length']>0x0?($(_0x4ccab7(0x15f))[_0x4ccab7(0x13b)](_0x4f5398[0x0]['LogonName'][_0x4ccab7(0x115)]),GEmployeeID=_0x4f5398[0x0][_0x4ccab7(0x1ab)]['ID'],$('#EmpTitle')['text'](_0x4f5398[0x0][_0x4ccab7(0x1ab)]['Title']),$('#OfficeLoc')['text'](_0x4f5398[0x0][_0x4ccab7(0xf8)][_0x4ccab7(0x1a7)]),$(_0x4ccab7(0x10a))[_0x4ccab7(0x13b)](_0x4f5398[0x0][_0x4ccab7(0xf8)][_0x4ccab7(0x1a7)]),LocID=_0x4f5398[0x0]['OfficeLocation']['ID']):($(_0x4ccab7(0x15f))[_0x4ccab7(0x13b)](''),$('#OfficeLoc')[_0x4ccab7(0x13b)](''),LocID=0x0);},'error':function(_0x548ed5){var _0x578552=_0x43555d;console[_0x578552(0x160)](_0x548ed5);}});}function EmpTableConfiguration(){var _0x393e01=a0_0x2651;sorter=new TINY[(_0x393e01(0x110))]['sorter'](_0x393e01(0x11d),_0x393e01(0x15b),{'ascclass':_0x393e01(0xf5),'descclass':_0x393e01(0x1a0),'evenclass':_0x393e01(0xfd),'oddclass':_0x393e01(0x118),'evenselclass':_0x393e01(0xe9),'oddselclass':_0x393e01(0x136),'paginate':!![],'size':0xa,'colddid':_0x393e01(0x14e),'currentid':_0x393e01(0x18e),'totalid':_0x393e01(0x17a),'startingrecid':_0x393e01(0x150),'endingrecid':'Empendrecord','totalrecid':_0x393e01(0x186),'hoverid':_0x393e01(0x185),'pageddid':_0x393e01(0x176),'navid':_0x393e01(0x1a1),'sortdir':0x1,'init':!![]});}$[a0_0xea0b57(0x124)]=function(_0xfb1280){var _0x55a1cd=a0_0xea0b57,_0xc287d7=new RegExp(_0x55a1cd(0x15d)+_0xfb1280+_0x55a1cd(0x192))[_0x55a1cd(0x11c)](window[_0x55a1cd(0x117)][_0x55a1cd(0x133)]);if(_0xc287d7==null)return null;return decodeURI(_0xc287d7[0x1])||0x0;};function formatDateReportEmp(_0x501b1c){var _0x520399=a0_0xea0b57,_0x13cd38=['Sunday',_0x520399(0x164),'Tuesday',_0x520399(0x16c),_0x520399(0x122),_0x520399(0x1ae),_0x520399(0x127)],_0x55cfab=new Date(_0x501b1c);if(isNaN(_0x55cfab[_0x520399(0x19e)]()))return _0x501b1c;else{var _0x1347e5=new Array();return _0x1347e5[0x0]=_0x520399(0xfb),_0x1347e5[0x1]=_0x520399(0x178),_0x1347e5[0x2]=_0x520399(0x1b1),_0x1347e5[0x3]='Apr',_0x1347e5[0x4]='May',_0x1347e5[0x5]=_0x520399(0x106),_0x1347e5[0x6]=_0x520399(0x134),_0x1347e5[0x7]=_0x520399(0x11a),_0x1347e5[0x8]=_0x520399(0x12b),_0x1347e5[0x9]=_0x520399(0x14a),_0x1347e5[0xa]=_0x520399(0x13e),_0x1347e5[0xb]=_0x520399(0xf9),day=_0x55cfab[_0x520399(0x12e)](),day<0xa&&(day='0'+day),day+'\x20'+_0x1347e5[_0x55cfab[_0x520399(0x1a5)]()]+'\x20'+_0x55cfab['getFullYear']()+',\x20'+_0x13cd38[_0x55cfab[_0x520399(0x189)]()];}}function ConvertHHMM(_0x19c457){var _0x5bc1f5=a0_0xea0b57;if(_0x19c457!=null){var _0x5701e0=Math[_0x5bc1f5(0x142)](_0x19c457/0x3c),_0x39868f=_0x19c457%0x3c;_0x5701e0<0xa&&(_0x5701e0='0'+_0x5701e0);_0x39868f<0xa&&(_0x39868f='0'+_0x39868f);var _0x28f9bc=_0x5701e0+':'+_0x39868f;}else var _0x28f9bc='';return _0x28f9bc;}var AttandenceOnHolidays=0x0,HolidaysListDTL=[];function LoadAllHolidays(){var _0x15c941=a0_0xea0b57;TotalOfficeDays=0x0,HolidaysListDTL=[];var _0x2d5b1e=new Date(ConvertDateTimeFormat($(_0x15c941(0x180))[_0x15c941(0xea)](),'/')),_0xc858c6=_0x2d5b1e['getFullYear']()+'-'+(_0x2d5b1e[_0x15c941(0x1a5)]()+0x1)+'-'+_0x2d5b1e[_0x15c941(0x12e)](),_0x269887=new Date(ConvertDateTimeFormat($('#EmpreportTo')['val'](),'/')),_0x15404e=_0x269887[_0x15c941(0x141)]()+'-'+(_0x269887[_0x15c941(0x1a5)]()+0x1)+'-'+_0x269887['getDate'](),_0x2a760f=_spPageContextInfo[_0x15c941(0x199)]+'/_api/web/lists/getbytitle(\x27CompanyHoliday\x27)/items?select=*,ID,Title&$filter=OfficeLocationID\x20eq\x20\x27'+LocID+_0x15c941(0x1ac)+CompanyID+_0x15c941(0x16f)+_0xc858c6+_0x15c941(0x197)+_0x15404e+'\x27';$[_0x15c941(0x15c)]({'url':_0x2a760f,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x1829e7){var _0x5555f8=_0x15c941,_0x56a3fc=_0x1829e7['d'][_0x5555f8(0x18a)][_0x5555f8(0x171)],_0x1a9c64=0x0;for(var _0x19d123=0x0;_0x19d123<_0x56a3fc;_0x19d123++){var _0x24b5ad=new Date(_0x1829e7['d'][_0x5555f8(0x18a)][_0x19d123][_0x5555f8(0x113)]),_0x224553=moment(_0x24b5ad,_0x5555f8(0xed))[_0x5555f8(0x193)](_0x5555f8(0x168)),_0x224553=_0x224553[_0x5555f8(0x103)]('-')[_0x5555f8(0x162)](''),_0x59326d=_0x1829e7['d'][_0x5555f8(0x18a)][_0x19d123][_0x5555f8(0x115)];HolidaysListDTL['push']({'Hdate':_0x224553,'Title':_0x59326d}),$('#'+_0x224553)[_0x5555f8(0x13a)]('color',_0x5555f8(0x19b)),$('#H'+_0x224553)[_0x5555f8(0x13b)](_0x59326d),$('#Att'+_0x224553)[_0x5555f8(0x13b)]()!=''&&(_0x1a9c64=_0x1a9c64+0x1);}AttandenceOnHolidays=0x0;for(var _0x5479ea=0x0;_0x5479ea<HolidaysListDTL[_0x5555f8(0x171)];_0x5479ea++){var _0x1e3164=$(_0x5555f8(0x18b)+HolidaysListDTL[_0x5479ea]['Hdate'])[_0x5555f8(0x13b)]();_0x1e3164!=''&&_0x1e3164!=_0x5555f8(0x1bc)&&_0x1e3164!=_0x5555f8(0x138)&&(AttandenceOnHolidays=AttandenceOnHolidays+0x1);}var _0x4f91e3=0x0,_0x12d067=0x0,_0x7b8db7=0x0;for(var _0x4a211b=0x0;_0x4a211b<DataIdList[_0x5555f8(0x171)];_0x4a211b++){var _0x284047=$('#Att'+DataIdList[_0x4a211b])[_0x5555f8(0x13b)]();(_0x284047==''||_0x284047==_0x5555f8(0x1bc))&&(_0x12d067=_0x12d067+0x1),_0x284047==_0x5555f8(0x1bc)&&(_0x7b8db7=_0x7b8db7+0x1),_0x284047==_0x5555f8(0x138)&&(_0x4f91e3=_0x4f91e3+0x1);}var _0x1d1ebb=_0x12d067+AttandenceOnHolidays-(_0x56a3fc-_0x4f91e3);_0x1d1ebb<0x0&&(_0x1d1ebb=0x0),_0x1d1ebb!='0'?$(_0x5555f8(0x19c))[_0x5555f8(0x13b)](_0x1d1ebb):_0x7b8db7>0x0&&$(_0x5555f8(0x19c))[_0x5555f8(0x13b)](_0x7b8db7),$(_0x5555f8(0x163))[_0x5555f8(0x13b)](_0x56a3fc),$('#Workingdays')[_0x5555f8(0x13b)](parseInt(Totaldays)-parseInt(_0x56a3fc)),$(_0x5555f8(0x152))['text'](formatDateReportEmp(ConvertDateTimeFormat($('#EmpreportFrom')[_0x5555f8(0xea)](),'/'))),$('#EdateTH')[_0x5555f8(0x13b)](formatDateReportEmp(ConvertDateTimeFormat($(_0x5555f8(0x145))['val'](),'/'))),$(_0x5555f8(0x11e))[_0x5555f8(0x13b)](parseInt(Totaldays)-parseInt(_0x56a3fc)),$(_0x5555f8(0x17b))[_0x5555f8(0x13b)](_0x56a3fc);},'myError':function(_0x4cb472){}});}function ensureUser(_0x1fd679){var _0x31638d=a0_0xea0b57,_0x5625c2=0x0,_0x58e066=_0x1fd679,_0x3db44d=this['SPClientPeoplePicker'][_0x31638d(0x17c)][_0x58e066],_0x55be7f=_0x3db44d[_0x31638d(0x12a)](),_0x497b4f=_0x55be7f[0x0];if(_0x497b4f){var _0x39d389={'logonName':_0x497b4f[_0x31638d(0x143)]};$['ajax']({'url':_spPageContextInfo[_0x31638d(0x199)]+'/_api/web/ensureuser','type':_0x31638d(0x17d),'async':![],'contentType':_0x31638d(0x119),'data':JSON[_0x31638d(0x132)](_0x39d389),'headers':{'X-RequestDigest':$('#__REQUESTDIGEST')['val'](),'accept':'application/json;odata=verbose'},'success':function(_0x408ae5,_0x1502b,_0x289a89){_0x5625c2=_0x408ae5['d']['Id'];},'error':function(_0x4924ca,_0x548da9,_0x36dab1){}});}else _0x5625c2=0x0;return _0x5625c2;}var tableToExcel=(function(){var _0x5a62c8=a0_0xea0b57,_0x28c003=_0x5a62c8(0x161),_0x4a6c5a=_0x5a62c8(0xf2),_0x5903fd=function(_0x4f55da){var _0x42f861=_0x5a62c8;return window[_0x42f861(0x1b5)](unescape(encodeURIComponent(_0x4f55da)));},_0xe2c1d4=function(_0x431648,_0x2b7e6e){var _0x1784bb=_0x5a62c8;return _0x431648[_0x1784bb(0x111)](/{(\w+)}/g,function(_0x28fae2,_0x399de5){return _0x2b7e6e[_0x399de5];});};return function(_0x2f3e36,_0x44bbb3){var _0x2fb1ac=_0x5a62c8;if(!_0x2f3e36[_0x2fb1ac(0x123)])_0x2f3e36=document[_0x2fb1ac(0x108)](_0x2f3e36);var _0x46ab10={'worksheet':_0x44bbb3||_0x2fb1ac(0x135),'table':_0x2f3e36[_0x2fb1ac(0x194)]};window[_0x2fb1ac(0x117)][_0x2fb1ac(0x133)]=_0x28c003+_0x5903fd(_0xe2c1d4(_0x4a6c5a,_0x46ab10));};}()),ISHRADMIN=![];function a0_0x1d26(){var _0x222a49=['#Timeview','it\x20exceeds\x20the\x20list\x20view','stringify','href','Jul','Worksheet','oddselected','Error!\x20Something\x20went\x20wrong.','Holiday','#SelDate','css','text','block','\x27\x20class=\x27employee-report-holiday\x27></span></div></td>','Nov','start','<td><div\x20class=\x27checkbox\x20m-0\x27></div></td>','getFullYear','floor','Key','#HolidayMessage','#EmpreportTo','<tr\x20class=\x27text-center\x27\x20>','&Mode=','responseJSON','\x27\x20and\x20Employee\x20eq\x20\x27','Oct','CompanyId','slice','Employee','columns','<a\x20href=\x27','Empstartrecord','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20ge\x20\x27','#FdateTH','00:00','push','MaximumEntitySuggestions','Plese\x20select\x20proper\x20attandence.','.NoRecordFound','></div></td>','toString','\x27\x20and\x20Company/ID\x20\x20eq\x20\x27','EmpReportTableData','ajax','[?&]','grep','#EmpName','log','data:application/vnd.ms-excel;base64,','join','#HoliaysTotal','Monday','Width','/_api/web/lists/getbytitle(\x27CompanyHoliday\x27)/items?$filter=OfficeLocationID\x20eq\x20(\x27','2ieqOak','YYYY-MM-DD','none','User,DL,SecGroup,SPGroup','toISOString','Wednesday','#StartDate','dd/mm/yy','\x27\x20and\x20Holiday_start\x20ge\x20\x27','&sourcelocation=../Pages/Myworkplace.aspx\x27>','length','filter','error','ModalDialog','3952pFOiPl','Emppagedropdown','showWaitScreenWithNoClose','Feb','message','Emptotalpages','#HolidaysTH','SPClientPeoplePickerDict','POST','/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items(','<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=Time','#EmpreportFrom','value','#__REQUESTDIGEST','AttendanceType','892455SBErka','selectedrow','Emptotalrecords','userId','<td><div\x20class=\x27attendance-report-edit-lock-btn-box\x20text-center\x27\x20style=\x27display:\x20','getDay','results','#Att','EID','#HolidayMessagediv','Empcurrentpage','display','Error\x20in\x20getFileData.',',0,','=([^&#]*)','format','innerHTML','children','18gSnsgk','\x27\x20and\x20Holiday_start\x20le\x20\x27','SearchPrincipalSource','webAbsoluteUrl','15669gtfcZU','red','#Total-Leave-Absent','WorkHours','getTime','concat','desc','tablenav','\x27)/items?$select=*,Department/DepartmentName,Department/ID&$expand=Department&$filter=CompanyId\x20eq\x20\x27','\x27>Fill</span></a>','86902rZjAwe','getMonth','12vWbgLs','OfficeName','AttendanceItemId','#EmployeeName','An\x20error\x20occurred.\x20Please\x20try\x20again.','LogonName','\x27\x20and\x20CompanyID\x20eq\x20\x27','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$orderby\x20=\x20AttendanceDate\x20asc&$filter=AttendanceDate\x20ge\x20\x27','Friday','EmpWorkHours','#AttendanceDDL','Mar','3290JxsgKs','<br\x20/>Please\x20wait!!','setDate','btoa','2163rtSFwh','<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=Att','<td><div\x20class=\x27attendance-report-edit-lock-btn-box\x20text-center\x27><a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20data-toggle=\x27modal\x27\x20data-target=\x27#attendance-reportEdit\x27\x20onclick=\x27attendanceEditModal(','round','datepicker','#Total-Attendance','On-Leave','__next','includes','MM/DD/YYYY','View','UserId','AllowMultipleValues','evenselected','val','HrAction','</div></td>','DD/MM/YYYY','\x20\x27><a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20data-toggle=\x27modal\x27\x20data-target=\x27#attendance-reportEdit\x27\x20onclick=\x27attendanceEditModal(','</span><span\x20id=\x27H','This\x20is\x20a\x20Holiday,\x20are\x20you\x20sure\x20to\x20submit\x20your\x20attendance.','#EmpReportTable','<html\x20xmlns:o=\x22urn:schemas-microsoft-com:office:office\x22\x20xmlns:x=\x22urn:schemas-microsoft-com:office:excel\x22\x20xmlns=\x22http://www.w3.org/TR/REC-html40\x22><head><!--[if\x20gte\x20mso\x209]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>','&sourcelocation=../Pages/Myworkplace.aspx\x27\x20><span\x20id=\x27Timeview',')\x27><i\x20class=\x27fa\x20fa-pencil\x27></i></a></div></td>','asc','#attendance-reportEdit','<td><div\x20class=\x27checkbox\x20m-0\x27\x20style=\x27display:\x20','OfficeLocation','Dec','#EmpRow','Jan','Loading...','evenrow','\x27\x20and\x20(WebPartName\x20eq\x20\x27HR\x20Admin\x27)','abs','6366520puOiqI','getQueryStringParameter','AttendanceDate','split','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=LogonName\x20eq\x20\x27','/_api/web/lists/getbytitle(\x27','Jun','\x27)and\x20Holiday_start\x20eq\x20\x27','getElementById','Unauthorized\x20access!','#officeLocTH','SP.Data.EmpAttendanceListItem','\x27\x20and\x20AttendanceDate\x20le\x20\x27','<a\x20class=\x27LinkBtn\x27\x20href=\x27','</tr>','5592531FwIHlR','table','replace','attr','Holiday_start','end','Title','map','location','oddrow','application/json;odata=verbose','Aug','#EndDate','exec','sorter','#TotalWorkdayTH','28610175aUKZTJ','\x20\x27><label><i\x20class=\x27fa\x20fa-check\x27\x20aria-hidden=\x27true\x27\x20style=\x27color:\x20red;\x27></i></label></div></td>','append','Thursday','nodeType','urlParam','/Pages/TimeSheetEntry.aspx?WebAppId=2&Recall=','indexOf','Saturday','modal','hide','GetAllUserInfo','Sept','280px','<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=','getDate','empty'];a0_0x1d26=function(){return _0x222a49;};return a0_0x1d26();}function ValidateHrAdmin(){var _0x520cb2=a0_0xea0b57,_0x24c403='ProcessApprovers',_0x1e7531=_spPageContextInfo['webAbsoluteUrl']+_0x520cb2(0x105)+_0x24c403+_0x520cb2(0x1a2)+titanForWork[_0x520cb2(0x101)]('CompanyId')+'\x27\x20and\x20ContributorsId\x20eq\x20\x27'+_spPageContextInfo[_0x520cb2(0x187)]+_0x520cb2(0xfe);$[_0x520cb2(0x15c)]({'url':_0x1e7531,'async':![],'type':'get','headers':{'Accept':_0x520cb2(0x119)},'success':function(_0x2d299c){var _0xeb2201=_0x520cb2,_0x39d80d=_0x2d299c['d']['results'];_0x39d80d[_0xeb2201(0x171)]>0x0?($('#EmpRow')[_0xeb2201(0x13a)]('display',_0xeb2201(0x13c)),ISHRADMIN=!![]):(ISHRADMIN=![],$(_0xeb2201(0xfa))['hide']());},'error':function(_0x4f3289){var _0x2689b1=_0x520cb2;console[_0x2689b1(0x160)](_0x4f3289['responseJSON'][_0x2689b1(0x173)]);}});}function GetAttendanceorLeaves(){var _0x547d4f=a0_0xea0b57,_0x4bc0b9=$['urlParam'](_0x547d4f(0x18c)),_0xe74fc8=$(_0x547d4f(0x180))['datepicker'](_0x547d4f(0x12e)),_0x8aba86=$(_0x547d4f(0x145))['datepicker'](_0x547d4f(0x12e));days=(_0x8aba86-_0xe74fc8)/(0x3e8*0x3c*0x3c*0x18),Totaldays=Math[_0x547d4f(0x1b9)](days)+0x1,$('#StartDate')['text'](formatDateReportEmp(ConvertDateTimeFormat($(_0x547d4f(0x180))[_0x547d4f(0xea)](),'/'))),$(_0x547d4f(0x11b))['text'](formatDateReportEmp(ConvertDateTimeFormat($(_0x547d4f(0x145))['val'](),'/')));var _0x2bf23b=moment($(_0x547d4f(0x180))[_0x547d4f(0xea)](),_0x547d4f(0xed))[_0x547d4f(0x193)](_0x547d4f(0x168)),_0x169c13=moment($('#EmpreportTo')['val'](),'DD/MM/YYYY')[_0x547d4f(0x193)]('YYYY-MM-DD'),_0x346d41=new Date(_0x169c13);_0x346d41[_0x547d4f(0x1b4)](_0x346d41[_0x547d4f(0x12e)]()+0x1);var _0x487841=_0x346d41[_0x547d4f(0x16b)](),_0xa9985a=_0x487841['split']('T');GstartDate=_0x2bf23b;var _0x23df6f=ensureUser($(_0x547d4f(0x1a9))[_0x547d4f(0x195)]()[_0x547d4f(0x195)]()[_0x547d4f(0x112)]('id'));if(_0x23df6f==0x0){var _0xc88828=_spPageContextInfo[_0x547d4f(0x199)]+_0x547d4f(0x104)+_0x4bc0b9+_0x547d4f(0x15a)+CompanyID+'\x27';EmployeeListDat(_0xc88828),LoadAllHolidays(),_0x4bc0b9=_0x4bc0b9,GEmpID=_0x4bc0b9;var _0xf802e1=_spPageContextInfo['webAbsoluteUrl']+'/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20ge\x20\x27'+_0x2bf23b+'\x27\x20and\x20AttendanceDate\x20le\x20\x27'+_0xa9985a+_0x547d4f(0x149)+_0x4bc0b9+'\x27\x20';UpdateHeaderfields(_0xf802e1);}else{if(ISHRADMIN==!![]){_0x4bc0b9=_0x23df6f,GEmpID=_0x23df6f;var _0xc88828=_spPageContextInfo[_0x547d4f(0x199)]+_0x547d4f(0x104)+_0x4bc0b9+_0x547d4f(0x15a)+CompanyID+'\x27';EmployeeListDat(_0xc88828),LoadAllHolidays();var _0xf802e1=_spPageContextInfo['webAbsoluteUrl']+'/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20ge\x20\x27'+_0x2bf23b+'\x27\x20and\x20AttendanceDate\x20le\x20\x27'+_0xa9985a+_0x547d4f(0x149)+_0x4bc0b9+'\x27\x20';UpdateHeaderfields(_0xf802e1);var _0xc88828=_spPageContextInfo[_0x547d4f(0x199)]+'/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=LogonName\x20eq\x20\x27'+_0x4bc0b9+'\x27\x20and\x20Company/ID\x20\x20eq\x20\x27'+CompanyID+'\x27';}else alert(_0x547d4f(0x109));}LoadAllHolidays();}function GetFilterData(_0x54b87a){var _0x422b73=a0_0xea0b57;jQuery[_0x422b73(0x15c)]({'url':_0x54b87a,'headers':{'Accept':_0x422b73(0x119)},'async':![],'success':function(_0x5cfcab){var _0x39c792=_0x422b73,_0x4df9da=_0x5cfcab['d'][_0x39c792(0x18a)],_0xfa4e04=[];TotalLeavesorAbsent=[];for(var _0x2ee92c=0x0;_0x2ee92c<_0x4df9da[_0x39c792(0x171)];_0x2ee92c++){if(_0x4df9da[_0x2ee92c]['AttendanceType']!='On-Leave'&&_0x4df9da[_0x2ee92c][_0x39c792(0x183)]!=_0x39c792(0x138))_0xfa4e04[_0x39c792(0x154)](_0x4df9da[_0x2ee92c][_0x39c792(0x183)]);else _0x4df9da[_0x2ee92c][_0x39c792(0x183)]==_0x39c792(0x1bc)&&TotalLeavesorAbsent[_0x39c792(0x154)](_0x4df9da[_0x2ee92c][_0x39c792(0x183)]);}$(_0x39c792(0x1bb))['text'](_0xfa4e04[_0x39c792(0x171)]);},'error':function(_0x39009f,_0x1ac8bb){var _0x298ed5=_0x422b73;console[_0x298ed5(0x160)](JSON[_0x298ed5(0x132)](_0x39009f));}});}var G_Validateholiday=![];function GetHolidays(_0x11d887){var _0x48a5b2=a0_0xea0b57,_0x1637ad=_spPageContextInfo[_0x48a5b2(0x199)]+_0x48a5b2(0x166)+LocID+_0x48a5b2(0x107)+_0x11d887+_0x48a5b2(0x1ac)+titanForWork['getQueryStringParameter']('CompanyId')+'\x27&$top=200&$orderby=Holiday_start\x20asc';$[_0x48a5b2(0x15c)]({'url':_0x1637ad,'headers':{'Accept':_0x48a5b2(0x119)},'async':![],'success':function(_0x41caf2){var _0x271109=_0x48a5b2,_0x2937fc=_0x41caf2['d'][_0x271109(0x18a)];_0x2937fc[_0x271109(0x171)]>0x0?($(_0x271109(0x18d))['text'](_0x2937fc[0x0][_0x271109(0x115)]),$('#HolidayMessage')[_0x271109(0x13a)](_0x271109(0x18f),_0x271109(0x13c)),G_Validateholiday=!![]):($(_0x271109(0x18d))[_0x271109(0x13b)](''),$(_0x271109(0x144))[_0x271109(0x13a)](_0x271109(0x18f),_0x271109(0x169)),G_Validateholiday=![]);},'error':function(_0x28974f){var _0x55e041=_0x48a5b2;alert(_0x55e041(0x1aa));}});}var EmpAttendanceData=[],TotalLeavesorAbsent=[];function UpdateHeaderfields(_0x469ac3){var _0x564dc9=a0_0xea0b57;jQuery['ajax']({'url':_0x469ac3,'headers':{'Accept':_0x564dc9(0x119)},'async':!![],'success':function(_0x1eb5e6){var _0x451b1e=_0x564dc9;EmpAttendanceData=[];var _0x3f9324=_0x1eb5e6['d'][_0x451b1e(0x18a)],_0x3a5269=[];TotalLeavesorAbsent=[];for(var _0x13b0b6=0x0;_0x13b0b6<_0x3f9324[_0x451b1e(0x171)];_0x13b0b6++){if(_0x3f9324[_0x13b0b6]['AttendanceType']!=_0x451b1e(0x1bc)&&_0x3f9324[_0x13b0b6][_0x451b1e(0x183)]!=_0x451b1e(0x138))_0x3a5269[_0x451b1e(0x154)](_0x3f9324[_0x13b0b6][_0x451b1e(0x183)]);else{if(_0x3f9324[_0x13b0b6][_0x451b1e(0x183)]==_0x451b1e(0x1bc))TotalLeavesorAbsent['push'](_0x3f9324[_0x13b0b6][_0x451b1e(0x183)]);else _0x3f9324[_0x13b0b6][_0x451b1e(0x183)]==_0x451b1e(0x138)&&TotalLeavesorAbsent[_0x451b1e(0x154)](_0x3f9324[_0x13b0b6]['AttendanceType']);}var _0x5e4856=_0x3f9324[_0x13b0b6]['ID'],_0x2fc9a0=_0x3f9324[_0x13b0b6][_0x451b1e(0x14d)]['Title'],_0x44ee50=_0x3f9324[_0x13b0b6][_0x451b1e(0x14d)]['ID'],_0x8f5fa3=formatDateReportEmp(_0x3f9324[_0x13b0b6][_0x451b1e(0x102)]),_0x3ae06e=_0x3f9324[_0x13b0b6]['AttendanceType'],_0x4d6323=_0x3f9324[_0x13b0b6][_0x451b1e(0x19d)],_0x21a651=_0x3f9324[_0x13b0b6]['HrAction'];EmpAttendanceData[_0x451b1e(0x154)]({'UserId':_0x44ee50,'EmpName':_0x2fc9a0,'AttendanceDate':_0x8f5fa3,'AttendanceType':_0x3ae06e,'AttendanceItemId':_0x5e4856,'EmpWorkHours':_0x4d6323,'HrAction':_0x21a651});}var _0x1316d1='',_0x4157a0=0x0,_0x87d7a0=0x0;for(var _0x26c3dd=0x0;_0x26c3dd<Totaldays;_0x26c3dd++){var _0x17ba2c=new Date(GstartDate);_0x17ba2c[_0x451b1e(0x1b4)](_0x17ba2c[_0x451b1e(0x12e)]()+_0x26c3dd);var _0x42c9b5=moment(_0x17ba2c,'DD/MM/YYYY')[_0x451b1e(0x193)](_0x451b1e(0x168)),_0x42c9b5=_0x42c9b5[_0x451b1e(0x103)]('-')[_0x451b1e(0x162)](''),_0x36d934=formatDateReportEmp(_0x17ba2c),_0x1689df=EmpAttendanceData[_0x451b1e(0x116)](function(_0x30e9ac){var _0x1ae69c=_0x451b1e;return _0x30e9ac[_0x1ae69c(0x102)];})['indexOf'](_0x36d934);if(_0x1689df!=-0x1){var _0x32259d=EmpAttendanceData[_0x1689df][_0x451b1e(0x183)],_0x1600e6=EmpAttendanceData[_0x1689df][_0x451b1e(0x1af)],_0x21a651=EmpAttendanceData[_0x1689df]['HrAction'],_0x138b75=EmpAttendanceData[_0x1689df][_0x451b1e(0x1c1)],_0x4b8e24=EmpAttendanceData[_0x1689df][_0x451b1e(0x1a8)];_0x87d7a0=_0x87d7a0+0x1;}else _0x4157a0=_0x4157a0+0x1;}var _0x2fcdd0=parseInt(TotalLeavesorAbsent[_0x451b1e(0x171)])+parseInt(_0x4157a0)-parseInt($(_0x451b1e(0x163))[_0x451b1e(0x13b)]());_0x2fcdd0<0x0&&(_0x2fcdd0=0x0);$('#EmpTotalItemscount')[_0x451b1e(0x13b)](Totaldays);var _0x3a52df=parseInt(_0x87d7a0)-parseInt(TotalLeavesorAbsent[_0x451b1e(0x171)]);$(_0x451b1e(0x1bb))[_0x451b1e(0x13b)](Math[_0x451b1e(0xff)](_0x3a52df));},'error':function(_0x55c0c5,_0x2837ca){var _0x38642e=_0x564dc9;console[_0x38642e(0x160)](JSON[_0x38642e(0x132)](_0x55c0c5));}});}function a0_0x2651(_0x5da16d,_0x103fe7){var _0x1d26e7=a0_0x1d26();return a0_0x2651=function(_0x26517d,_0x306723){_0x26517d=_0x26517d-0xe9;var _0x395b60=_0x1d26e7[_0x26517d];return _0x395b60;},a0_0x2651(_0x5da16d,_0x103fe7);}function OpenMyCustomLoader(){var _0x553c64=a0_0xea0b57,_0x8f8aeb=_0x553c64(0xfc),_0x41091e=_0x553c64(0x1b3),_0x78c23f=0xc8,_0xc4d0dc=0x190;currentDlg=SP['UI'][_0x553c64(0x174)][_0x553c64(0x177)](_0x8f8aeb,_0x41091e,_0x78c23f,_0xc4d0dc);}function CloseMyCustomLoader(){currentDlg['close']();}