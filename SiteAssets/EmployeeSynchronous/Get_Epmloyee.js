var a0_0x3a4364=a0_0x9dfa;(function(_0x52f3fa,_0x4bac91){var _0x1f015e=a0_0x9dfa,_0x3d3fba=_0x52f3fa();while(!![]){try{var _0x3f6e38=parseInt(_0x1f015e(0x162))/0x1+parseInt(_0x1f015e(0x1ef))/0x2+parseInt(_0x1f015e(0x1a3))/0x3+parseInt(_0x1f015e(0x1a8))/0x4+-parseInt(_0x1f015e(0x14f))/0x5+-parseInt(_0x1f015e(0x191))/0x6*(parseInt(_0x1f015e(0x1de))/0x7)+parseInt(_0x1f015e(0x1b3))/0x8*(parseInt(_0x1f015e(0x1d5))/0x9);if(_0x3f6e38===_0x4bac91)break;else _0x3d3fba['push'](_0x3d3fba['shift']());}catch(_0x550f86){_0x3d3fba['push'](_0x3d3fba['shift']());}}}(a0_0x19d3,0xca90a));var currentCompanyid='';$(document)['ready'](function(){var _0x48cd3f=a0_0x9dfa;UserAuthorization(),WaitMessage(),currentCompanyid=titanForWork[_0x48cd3f(0x1e7)]('CompanyId'),currentCompanyid!=null&&currentCompanyid!=''&&(currentCompanyid[_0x48cd3f(0x18a)]('#')!=-0x1&&(currentCompanyid=currentCompanyid[_0x48cd3f(0x1dd)]('#')[0x0]),currentCompanyid=currentCompanyid),$(_0x48cd3f(0x1c8))['prop'](_0x48cd3f(0x1b2),_0x48cd3f(0x15f)+currentCompanyid),CheckUserPermission(currentCompanyid),GetTempEmployeeList(currentCompanyid),keyWordSearch(),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),FilterByDropDownList(),CopyEmployeeToAnotherCompany(),$('#ddlTempCompany')['change'](function(){var _0x543978=_0x48cd3f;GetDepartment($(this)[_0x543978(0x163)]()),GetOfficeLocation($(this)[_0x543978(0x163)]());});});function UserAuthorization(){var _0x525776=a0_0x9dfa,_0x11f58c=titanForWork[_0x525776(0x1e7)]('CompanyId');titanForWork['PageAuthorization'](_0x525776(0x1fb),_0x11f58c)[_0x525776(0x217)](function(_0x201c00,_0x4563ea){var _0x267787=_0x525776;if(_0x201c00[_0x267787(0x167)]>0x0){if(_0x201c00[0x0][_0x267787(0x1b6)]==_0x267787(0x1b6)||_0x201c00[0x0][_0x267787(0x190)]==_0x267787(0x190)){}else alert(_0x4563ea),window[_0x267787(0x1fc)][_0x267787(0x1b2)]=_spPageContextInfo['webAbsoluteUrl'];}});}function keyWordSearch(){var _0x517196=a0_0x9dfa;$(_0x517196(0x1d0))['on'](_0x517196(0x1c4),function(){var _0x183f0a=_0x517196,_0xa19b47=$(this)[_0x183f0a(0x163)](),_0x37f265=new RegExp(_0xa19b47,'i');$(_0x183f0a(0x19d))[_0x183f0a(0x174)]('tr')['each'](function(){var _0xcd0547=_0x183f0a;!($(this)['find']('td')['text']()['search'](_0x37f265)>=0x0)&&$(this)[_0xcd0547(0x20b)](_0xcd0547(0x1d7))[_0xcd0547(0x19c)](),$(this)[_0xcd0547(0x174)]('td')[_0xcd0547(0x178)]()['search'](_0x37f265)>=0x0&&$(this)['show']();});});}function FilterByDropDownList(){var _0x43034c=a0_0x9dfa;$(_0x43034c(0x1cd))['change'](function(){var _0x2e8a33=_0x43034c;$(_0x2e8a33(0x1cd))['val']()!='0'?($(_0x2e8a33(0x1fd))[_0x2e8a33(0x163)](0x4),$(_0x2e8a33(0x1ee))['val']($(this)[_0x2e8a33(0x163)]()),$('#ddlTempManagerFilter')['val'](0x0)):($('#query')[_0x2e8a33(0x163)](''),$(_0x2e8a33(0x1fd))['val'](-0x1)),sorter[_0x2e8a33(0x1b1)](_0x2e8a33(0x18f));}),$(_0x43034c(0x16f))[_0x43034c(0x1f0)](function(){var _0x1ee56e=_0x43034c;$(_0x1ee56e(0x16f))[_0x1ee56e(0x163)]()!='0'?($(_0x1ee56e(0x1fd))[_0x1ee56e(0x163)](0x7),$(_0x1ee56e(0x1ee))[_0x1ee56e(0x163)]($(this)[_0x1ee56e(0x163)]()),$(_0x1ee56e(0x1cd))['val'](0x0)):($(_0x1ee56e(0x1ee))[_0x1ee56e(0x163)](''),$(_0x1ee56e(0x1fd))[_0x1ee56e(0x163)](-0x1)),sorter[_0x1ee56e(0x1b1)](_0x1ee56e(0x18f));}),$(_0x43034c(0x1ee))[_0x43034c(0x1c4)](function(){var _0x35ae67=_0x43034c;$('#columns')[_0x35ae67(0x163)](-0x1),$(_0x35ae67(0x1cd))[_0x35ae67(0x163)](0x0),$('#ddlTempManagerFilter')['val'](0x0);});}function a0_0x9dfa(_0x22c57b,_0x4ab8f4){var _0x19d3cc=a0_0x19d3();return a0_0x9dfa=function(_0x9dfac,_0x2b404e){_0x9dfac=_0x9dfac-0x14f;var _0x51bfac=_0x19d3cc[_0x9dfac];return _0x51bfac;},a0_0x9dfa(_0x22c57b,_0x4ab8f4);}function EmployeeCheckListValidation(_0x278e75,_0x1a498e){var _0x117115=a0_0x9dfa,_0x44f975=![];try{var _0x206424=_spPageContextInfo[_0x117115(0x161)]+_0x117115(0x1f4)+_0x278e75+_0x117115(0x156)+_0x1a498e+'\x27';$[_0x117115(0x193)]({'url':_0x206424,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x5226b4){var _0x2cef3d=_0x117115,_0x57e87c=_0x5226b4['d'][_0x2cef3d(0x16b)];_0x57e87c['length']>0x0&&(_0x44f975=!![]);},'eror':function(_0x382719){var _0x132b92=_0x117115;CloseWaitDialog(),console[_0x132b92(0x1a0)]('error');}});}catch(_0x324894){alert(_0x117115(0x20a));}return _0x44f975;}function CopyEmployeeToAnotherCompany(){var _0x5140d0=a0_0x9dfa;$('#btnCopy')[_0x5140d0(0x200)](function(){var _0x1656c7=_0x5140d0;parseInt($('#ddlTempCompany')[_0x1656c7(0x163)]())==0x0||parseInt($('#ddlTempDepartment')[_0x1656c7(0x163)]())==0x0||parseInt($('#ddlTempOfficeLocation')['val']())==0x0?alert(_0x1656c7(0x15a)):ValidationCheckBox()==!![]?(WaitMessage(),$[_0x1656c7(0x214)](AddEmployeeDataAllocated())['done'](function(_0xc5e2db){var _0x364490=_0x1656c7;GetTempEmployeeList(currentCompanyid),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),$('#query')[_0x364490(0x163)]('');})):alert(_0x1656c7(0x1ce));});}function GetDateStandardFormat(_0x3f68e4){var _0x58f260=ConvertDateFormatToddMMyyyy(_0x3f68e4),_0x2fbb39=new Date(_0x58f260),_0x21d6f9=0x3c*0x3c*0x18*0x3e8,_0x46c93f=new Date(_0x2fbb39['getTime']()),_0x162622=_0x46c93f['toISOString']();return _0x162622;}function ConvertDateFormatToddMMyyyy(_0x325e97){var _0x1a8796=stringToDate(_0x325e97,'dd/MM/yyyy','/');return _0x1a8796;}function stringToDate(_0x7a0a68,_0x12e382,_0x47e76a){var _0x3f9f0a=a0_0x9dfa,_0x417c5d=_0x12e382[_0x3f9f0a(0x1ed)](),_0x2af6e6=_0x417c5d[_0x3f9f0a(0x1dd)](_0x47e76a),_0x119e5b=_0x7a0a68['split'](_0x47e76a),_0x4128dc=_0x2af6e6['indexOf']('mm'),_0x514d3e=_0x2af6e6[_0x3f9f0a(0x18a)]('dd'),_0x19d550=_0x2af6e6['indexOf'](_0x3f9f0a(0x1c1)),_0x4aeb3d=parseInt(_0x119e5b[_0x4128dc]);_0x4aeb3d-=0x1;var _0x414bd3=new Date(_0x119e5b[_0x19d550],_0x4aeb3d,_0x119e5b[_0x514d3e]);return _0x414bd3;}function AddEmployeeDataAllocated(){var _0x2a2a11=a0_0x9dfa,_0xe2ff16=$(_0x2a2a11(0x208))[_0x2a2a11(0x167)];return $(_0x2a2a11(0x208))[_0x2a2a11(0x213)](function(_0x2a140b){var _0x3214a0=_0x2a2a11,_0x3c6f30=$(this)['is'](_0x3214a0(0x211));if(_0x3c6f30==!![]){var _0x5e6043=$(this)['find'](_0x3214a0(0x1d3))[_0x3214a0(0x1bd)](_0x3214a0(0x20c));if(_0x5e6043==!![]){var _0xd4d94=$(this)[_0x3214a0(0x174)]('td')[0x1]['innerText'],_0x31c0cd=$(this)[_0x3214a0(0x174)]('td')[0x2][_0x3214a0(0x1ad)],_0x15d84d=$(this)[_0x3214a0(0x174)]('td')[0x3][_0x3214a0(0x1ad)],_0x130e29='',_0x49cf8e=$(this)[_0x3214a0(0x174)]('td')[0x6][_0x3214a0(0x1ad)],_0x9c3031=$(this)[_0x3214a0(0x174)]('td')[0x7][_0x3214a0(0x1ad)],_0x5638a3=$(this)['find']('td')[0x8][_0x3214a0(0x1ad)],_0x5722ea=$(this)[_0x3214a0(0x174)]('td')[0x9][_0x3214a0(0x1ad)],_0x1a17bf=$(this)[_0x3214a0(0x174)]('td')[0xa][_0x3214a0(0x1ad)],_0x348c7e=$(this)[_0x3214a0(0x174)]('td')[0xb][_0x3214a0(0x1ad)],_0x3af35b='';_0x5722ea!=null&&_0x5722ea!=''&&(_0x3af35b=GetDateStandardFormat(_0x5722ea));var _0x553564='';_0x1a17bf!=null&&_0x1a17bf!=''&&(_0x553564=GetDateStandardFormat(_0x1a17bf));var _0x280f1a='';_0x348c7e!=null&&_0x348c7e!=''&&(_0x280f1a=GetDateStandardFormat(_0x348c7e));(_0x15d84d==null||_0x15d84d=='')&&(_0x15d84d=_0x31c0cd);var _0x272845=parseInt($('#ddlTempCompany')[_0x3214a0(0x163)]()),_0x21177a=parseInt($(_0x3214a0(0x16e))['val']());EmployeeCheckListValidation(_0x31c0cd,_0x272845)==![]?AddNewEmployeeAllocated(_0x3214a0(0x1d4),_0xd4d94,_0x15d84d,_0x31c0cd,_0x49cf8e,_0x9c3031,_0x9c3031,_0x5638a3,_0x3af35b,_0x553564,_0x280f1a):alert(_0x3214a0(0x1f1)+_0x31c0cd);}}}),!![];}function AddNewEmployeeAllocated(_0x2f53d0,_0x2c719d,_0x4af303,_0x5611fb,_0x45b3b9,_0x4a8c32,_0x21103d,_0x10cde3,_0x2cd306,_0xeb98d6,_0x1499a3){var _0x584248=a0_0x9dfa;try{var _0x2155d9=GetUserId(_0x5611fb);if(_0x2155d9==''||_0x2155d9==null)alert(_0x584248(0x16a)+_0x5611fb+_0x584248(0x18c));else{var _0xd5dad5=parseInt($(_0x584248(0x1c5))['val']()),_0x34f1a5=parseInt($('#ddlTempDepartment')[_0x584248(0x163)]()),_0xa9c55a=parseInt($(_0x584248(0x1b7))[_0x584248(0x163)]()),_0xd979fd,_0x28b2ad=GetItemTypeForListName(_0x2f53d0);_0xd979fd={'__metadata':{'type':_0x28b2ad},'CompanyId':_0xd5dad5,'DepartmentId':_0x34f1a5,'FullName':_0x2c719d,'ParentId':'-1','Email':_0x4af303,'LogonNameId':_0x2155d9,'Manager':'','OfficeLocationId':_0xa9c55a,'MobileNumber':_0x10cde3,'DateOfBirth':_0x2cd306,'DateOfAnniversary':_0xeb98d6,'JoiningDate':_0x1499a3,'Designation':_0x45b3b9,'PrimaryCompany':'','Status':_0x584248(0x18b)},(_0xa9c55a==''||_0xa9c55a==null||_0xa9c55a==0x0)&&delete _0xd979fd[_0x584248(0x182)],(_0x2155d9==''||_0x2155d9==null)&&delete _0xd979fd[_0x584248(0x1a1)],(_0x2cd306==null||_0x2cd306=='')&&delete _0xd979fd[_0x584248(0x169)],(_0xeb98d6==null||_0xeb98d6=='')&&delete _0xd979fd[_0x584248(0x1c0)],(_0x1499a3==null||_0x1499a3=='')&&delete _0xd979fd['JoiningDate'],AddItemToList(_0x2f53d0,_0xd979fd);}}catch(_0x31e9df){console[_0x584248(0x1a0)](_0x31e9df[_0x584248(0x1a9)]);}}function AddItemToList(_0x2794e1,_0x4ff7ca){var _0x1aad8e=a0_0x9dfa,_0x196833=$[_0x1aad8e(0x197)]();return $[_0x1aad8e(0x193)]({'url':_spPageContextInfo[_0x1aad8e(0x161)]+_0x1aad8e(0x159)+_0x2794e1+_0x1aad8e(0x189),'type':'POST','async':![],'headers':{'accept':_0x1aad8e(0x185),'X-RequestDigest':$(_0x1aad8e(0x1df))['val'](),'content-Type':_0x1aad8e(0x185)},'data':JSON[_0x1aad8e(0x195)](_0x4ff7ca),'success':function(_0x674860){var _0x143b46=_0x1aad8e;_0x196833[_0x143b46(0x20f)](_0x674860);},'error':function(_0x4dc6b0){var _0x3cd504=_0x1aad8e;alert(JSON[_0x3cd504(0x195)](_0x4dc6b0)),_0x196833[_0x3cd504(0x17a)](_0x4dc6b0);}}),_0x196833[_0x1aad8e(0x204)]();}function a0_0x19d3(){var _0x962e94=['charAt','ListItem','\x27)/GetItemById(\x27','text','<table\x20id=\x27tableCompanyChange\x27\x20border=\x271\x27><thead><tr><td\x20style=\x27padding:\x205px;\x27>Company</td><td\x20style=\x27padding:\x205px;\x27>Department</td><td\x20style=\x27padding:\x205px;\x27>Primary\x20Company</td></tr></thead>','reject','append','</td><td><a\x20href=','<option></option>','table','oddrow','totalpages','totalrecords','OfficeLocationId','get','attr','application/json;odata=verbose','<div\x20class=\x27row\x27\x20style=\x27text-align:center\x27><div\x20class=\x27col-md-12\x27><input\x20type=\x27button\x27\x20id=\x27changePrimaryCompanyButton\x27\x20class=\x27btn\x20\x20btn-outline-success\x27\x20value=\x27Change\x20Primary\x20Company\x27></div></div>','ParentId','endrecord','\x27)/items','indexOf','Active','\x20is\x20not\x20valid\x20user\x20!','tablenav','LogonName','query','TechAdmin','7446954jOvjFP','window.waitDialog\x20=\x20SP.UI.ModalDialog.showWaitScreenWithNoClose(\x27Wait\x20a\x20moment,Processing..\x27,\x20\x27\x27,\x2090,\x20450);','ajax','frameElement','stringify','../Pages/AdminPortal.aspx?WebAppId=','Deferred','Please\x20select\x20any\x20value\x20from\x20dropdownlist\x20.','pagedropdown','push','#btnDepartment','hide','#tableTempEmp\x20tbody','></td><td><a\x20href=\x27','OfficeLocation','log','CompanyId','</td><td\x20style=\x27padding:\x205px;\x27>','3295440glFZRV','</a></td><td>','&sourcelocation=../Pages/Show_Employee.aspx?WebAppId=','columns','javascript:GetAllocatedEmployeesCompanies(\x27','385288vRNMij','message','value','</td></tr>','Department','innerText','Manager','notManager','#btnCompany','search','href','8OTMXAT','PrimaryCompany','toString','SiteAdmin','#ddlTempOfficeLocation','manageronly','01/01/1970','.companycheckbox','error','/_api/web/lists/getbytitle(\x27Companies\x27)/items?$select=ID,CompanyName','prop','MobileNumber','close','DateOfAnniversary','yyyy','</td><td\x20style=\x27padding:\x205px;text-align:center;\x27>','</td><td>','keyup','#ddlTempCompany','Please\x20select\x20company\x20.','.companychnageid','#idsynch','/_api/web/lists/getbytitle(\x27Departments\x27)/items?$select=ID,CompanyIDId/ID,DepartmentName&$filter=CompanyIDId\x20\x20eq\x20\x27','checked=\x27true\x27','modal','DepartmentName','#ddlTempDepartmentFilter','Please\x20select\x20at\x20least\x20one\x20record\x20from\x20list.','waitDialog','#search_field','evenrow','Please\x20select\x20one\x20company\x20as\x20a\x20primary.','.empidchk','Employees','2123991UrTGzo','#ddlTempManager','.myHead','<input\x20type=\x27checkbox\x27\x20class=\x27companycheckbox\x27\x20id=\x27myCheck\x27>','html','userId','DepartmentId','>Companies</a></td></tr>','split','7yhmeAi','#__REQUESTDIGEST','#btnManager','oddselected','tableTempEmp','<option\x20value=\x220\x22>-Select\x20Company-</option>','Please\x20select\x20manager\x20name\x20.','PATCH','remove','getQueryStringParameter','UserName','empty','\x27\x20and\x20(WebPartName\x20eq\x20\x27HR\x20Admin\x27\x20or\x20WebPartName\x20\x20eq\x20\x27Tech\x20Admin\x27)','sorter','<option\x20value=\x220\x22>-All\x20Manager-</option>','toLowerCase','#query','904034fvQnAT','change','User\x20is\x20already\x20added\x20in\x20this\x20company\x20,','OfficeName','evenselected','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$top=5000&$select=ID,DepartmentId,LogonName/UserName,Company/ID&$expand=LogonName,Company&$filter=LogonName/UserName\x20\x20eq\x20\x27','\x27)/items?$select=*,Department/DepartmentName,Department/ID&$expand=Department&$filter=CompanyId\x20eq\x20\x27','<div\x20class=\x27row\x27\x20style=\x27text-align:center\x27><div\x20class=\x27col-md-12\x27><input\x20type=\x27button\x27\x20class=\x27btn\x20\x20btn-outline-success\x27\x20id=\x27changePrimaryCompanyButton\x27\x20value=\x27Change\x20Primary\x20Company\x27></div></div>','ShowCommonStandardDateFormat','#mainDivArea','#modalTitanPreview','#btnUpdateManager','ManageCompany','location','#columns','SP.Data.','<option\x20value=\x220\x22>-Select\x20Manager-</option>','click','parent','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$top=5000&$select=ID,Status,JoiningDate,DateOfAnniversary,FullName,DateOfBirth,LogonName/UserName,OfficeLocation/OfficeName,Email,Department/DepartmentName,Designation,Company/CompanyName,Company/ID,Manager,MobileNumber&$expand=LogonName,Company,Department,OfficeLocation&$filter=CompanyId\x20\x20eq\x20\x27','<option\x20value=\x22-1\x22>Top\x20Leader</option>','promise','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,PrimaryCompany,LogonName/UserName,Department/DepartmentName,Company/CompanyName,Company/ID&$expand=LogonName,Company,Department&$filter=LogonName/UserName\x20\x20eq\x20\x27','i:0#.f|membership|','<div\x20style=\x27width:100%;text-align:\x20center;font-size:14px\x27>No\x20Record\x20Found</div>','#tableTempEmp\x20tbody\x20tr','application/json;\x20odata=verbose','LogonName\x20is\x20not\x20in\x20valid\x20format\x20!','not','checked','<tbody>','join','resolve','CompanyName',':visible','<tr\x20style=\x27','each','when','#tableCompanyChange\x20tbody\x20tr','</tbody></table>','done','<div\x20style=\x27width:100%;text-align:\x20center;font-size:14px\x27>Not\x20Defined\x20Yet</div>','/_api/web/siteusers(@v)?@v=\x27','218515UlsXsn','Designation','/_api/web/lists/GetByTitle(\x27OfficeLocation\x27)/items?$select=ID,OfficeName,CompanyID/ID&$expand=CompanyID&$filter=OfficeLocationId\x20eq\x20\x270\x27\x20and\x20CompanyID/ID\x20eq\x20\x27','ready','eval','responseJSON','GET','\x27\x20and\x20CompanyId\x20eq\x20\x27','</tbody>','Please\x20select\x20department\x20.','/_api/web/lists/getbytitle(\x27','Please\x20select\x20company,department\x20and\x20office\x20location.','siteAbsoluteUrl','JoiningDate','POST','Company','../Pages/EmployeeSynchronous.aspx?WebAppId=','slice','webAbsoluteUrl','231750UDXmcw','val','\x27\x20><td\x20style=\x27text-align:center;\x27><input\x20type=\x27checkbox\x27\x20\x20class=\x27empidchk\x27\x20name=\x27empid\x27\x20value=','getMonth','Unauthorized\x20access','length','#columns\x20option[value=\x220\x22]','DateOfBirth','User\x20:','results','.ddlpaging','selectedIndex','#ddlTempDepartment','#ddlTempManagerFilter','#ddlTempManager\x20option:selected','background-color:\x20#fff;','desc','show','find'];a0_0x19d3=function(){return _0x962e94;};return a0_0x19d3();}function GetUserId(_0x49e5ff){var _0x2f69f0=a0_0x9dfa,_0x2342c2='',_0x2d0f4b=_0x2f69f0(0x206),_0x305290=_spPageContextInfo[_0x2f69f0(0x15b)],_0xb25eb5=_0x2d0f4b+_0x49e5ff;return $[_0x2f69f0(0x193)]({'url':_0x305290+_0x2f69f0(0x219)+encodeURIComponent(_0xb25eb5)+'\x27','method':_0x2f69f0(0x155),'headers':{'Accept':_0x2f69f0(0x209)},'async':![],'success':function(_0x13fc7b){_0x2342c2=_0x13fc7b['d']['Id'];},'error':function(_0x1201af){var _0x4f902e=_0x2f69f0;console[_0x4f902e(0x1a0)](JSON[_0x4f902e(0x195)](_0x1201af));}}),_0x2342c2;}function GetCompanies(){var _0x2aa260=a0_0x9dfa;$('#ddlTempCompany')[_0x2aa260(0x1e9)]()['append'](_0x2aa260(0x1e3));var _0x51a17f=_spPageContextInfo[_0x2aa260(0x161)]+_0x2aa260(0x1bc);$['ajax']({'url':_0x51a17f,'headers':{'Accept':_0x2aa260(0x185)},'async':![],'success':function(_0x52735a){var _0x2d9b7b=_0x2aa260,_0x524f4e=_0x52735a['d'][_0x2d9b7b(0x16b)];for(var _0x45abca=0x0;_0x45abca<_0x524f4e[_0x2d9b7b(0x167)];_0x45abca++){$(_0x2d9b7b(0x1c5))[_0x2d9b7b(0x17b)]($(_0x2d9b7b(0x17d))[_0x2d9b7b(0x184)](_0x2d9b7b(0x1aa),_0x52735a['d'][_0x2d9b7b(0x16b)][_0x45abca]['ID'])[_0x2d9b7b(0x178)](_0x52735a['d'][_0x2d9b7b(0x16b)][_0x45abca][_0x2d9b7b(0x210)]));}},'eror':function(_0x495c17){var _0xd594b5=_0x2aa260;console[_0xd594b5(0x1a0)](_0xd594b5(0x1bb));}});}function GetOfficeLocation(_0x414c27){var _0x219bd3=a0_0x9dfa;$(_0x219bd3(0x1b7))[_0x219bd3(0x1e9)]()['append']('<option\x20value=\x220\x22>-Select\x20Office\x20Location-</option>');var _0x1655f5=_spPageContextInfo['webAbsoluteUrl']+_0x219bd3(0x151)+_0x414c27+'\x27';$[_0x219bd3(0x193)]({'url':_0x1655f5,'headers':{'Accept':_0x219bd3(0x185)},'async':![],'success':function(_0x2de504){var _0x5b86c1=_0x219bd3,_0x3dda13=_0x2de504['d']['results'];for(var _0x27941f=0x0;_0x27941f<_0x3dda13[_0x5b86c1(0x167)];_0x27941f++){$(_0x5b86c1(0x1b7))['append']($('<option></option>')[_0x5b86c1(0x184)](_0x5b86c1(0x1aa),_0x2de504['d'][_0x5b86c1(0x16b)][_0x27941f]['ID'])[_0x5b86c1(0x178)](_0x2de504['d'][_0x5b86c1(0x16b)][_0x27941f][_0x5b86c1(0x1f2)]));}},'eror':function(_0x8a8286){var _0x59dee5=_0x219bd3;console[_0x59dee5(0x1a0)]('error');}});}function GetDepartment(_0x157bb1){var _0x789965=a0_0x9dfa;$(_0x789965(0x16e))['empty']()[_0x789965(0x17b)]('<option\x20value=\x220\x22>-Select\x20Department-</option>');var _0x538bd4=_spPageContextInfo['webAbsoluteUrl']+_0x789965(0x1c9)+_0x157bb1+'\x27';$[_0x789965(0x193)]({'url':_0x538bd4,'headers':{'Accept':_0x789965(0x185)},'async':![],'success':function(_0x174627){var _0x1fe916=_0x789965,_0x5272ba=_0x174627['d']['results'];for(var _0x520f4b=0x0;_0x520f4b<_0x5272ba[_0x1fe916(0x167)];_0x520f4b++){$('#ddlTempDepartment')[_0x1fe916(0x17b)]($(_0x1fe916(0x17d))[_0x1fe916(0x184)](_0x1fe916(0x1aa),_0x174627['d'][_0x1fe916(0x16b)][_0x520f4b]['ID'])[_0x1fe916(0x178)](_0x174627['d'][_0x1fe916(0x16b)][_0x520f4b]['DepartmentName']));}},'eror':function(_0xb1a738){var _0x3ab107=_0x789965;console[_0x3ab107(0x1a0)](_0x3ab107(0x1bb));}});}function GetTempEmployeeList(_0x1a97df){var _0x38fda5=a0_0x9dfa,_0x34c26b=new Array(),_0x20b5fe=new Array();$(_0x38fda5(0x1d6))[_0x38fda5(0x1e9)]()['append'](_0x38fda5(0x1ff)),$('#ddlTempManager')[_0x38fda5(0x17b)](_0x38fda5(0x203)),$(_0x38fda5(0x1cd))[_0x38fda5(0x1e9)]()[_0x38fda5(0x17b)]('<option\x20value=\x220\x22>-All\x20Department-</option>'),$(_0x38fda5(0x16f))[_0x38fda5(0x1e9)]()[_0x38fda5(0x17b)](_0x38fda5(0x1ec));var _0x108fce=_spPageContextInfo['webAbsoluteUrl']+_0x38fda5(0x202)+_0x1a97df+'\x27';$[_0x38fda5(0x193)]({'url':_0x108fce,'headers':{'Accept':_0x38fda5(0x185)},'async':!![],'success':function(_0x534376){var _0x5aa8d2=_0x38fda5,_0x5ec477=_0x534376['d'][_0x5aa8d2(0x16b)],_0xb99a22='<div\x20id=\x27mainTablearea\x27\x20class=\x27table-responsive\x27><table\x20cellpadding=\x270\x27\x20style=\x27\x27\x20cellspacing=\x270\x27\x20border=\x271\x27\x20id=\x27tableTempEmp\x27\x20class=\x27tinytable\x20employee-table-responsiv\x27></div><thead\x20class=\x27panel-heading\x27><tr><th\x20class=\x27nosort\x27\x20style=\x27width:40px;text-align:center;\x27><h6></h6></th><th><h6\x20data-localize=\x27Name\x27></h6></th><th><h6\x20data-localize=\x27Login\x27></h6></th><th><h6\x20data-localize=\x27Email\x27></h6></th><th><h6\x20data-localize=\x27Department\x27></h6></th><th><h6\x20data-localize=\x27OfficeLocation\x27></h6></th><th><h6\x20data-localize=\x27Designation\x27></h6></th><th><h6\x20data-localize=\x27Manager\x27></h6></th><th><h6\x20data-localize=\x27MobileNo\x27></h6></th><th><h6\x20data-localize=\x27DOB\x27></h6></th><th><h6\x20data-localize=\x27Anniversary\x27></h6></th><th><h6\x20data-localize=\x27DateOfJoining\x27></h6></th><th\x20class=\x27nosort\x27><h6\x20data-localize=\x27AllocatedCompanies\x27></h6></th></tr></thead><tbody\x20class=\x27panel\x27>',_0x26ffa4='';for(var _0x1d4a32=0x0;_0x1d4a32<_0x5ec477[_0x5aa8d2(0x167)];_0x1d4a32++){var _0x34a709=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x18e)][_0x5aa8d2(0x1e8)],_0x2f6ef7=GetUserFullName(_0x5ec477[_0x1d4a32]['LogonName'][_0x5aa8d2(0x1e8)]);_0x2f6ef7==null||_0x2f6ef7==''?_0x2f6ef7='':_0x34c26b[_0x5aa8d2(0x18a)](_0x2f6ef7['toLowerCase']())==-0x1&&($(_0x5aa8d2(0x1d6))[_0x5aa8d2(0x17b)]($(_0x5aa8d2(0x17d))[_0x5aa8d2(0x184)](_0x5aa8d2(0x1aa),_0x5ec477[_0x1d4a32]['ID'])[_0x5aa8d2(0x178)](_0x2f6ef7)),$(_0x5aa8d2(0x16f))['append']($('<option></option>')[_0x5aa8d2(0x184)](_0x5aa8d2(0x1aa),_0x2f6ef7)[_0x5aa8d2(0x178)](_0x2f6ef7)),_0x34c26b['push'](_0x2f6ef7[_0x5aa8d2(0x1ed)]()));var _0x1152d9=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x18e)][_0x5aa8d2(0x1e8)];(_0x1152d9==null||_0x1152d9=='')&&(_0x1152d9='');var _0x408e03=_0x5ec477[_0x1d4a32]['Email'];(_0x408e03==null||_0x408e03=='')&&(_0x408e03='');var _0x103115=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x1ac)]['DepartmentName'];if(_0x103115==null||_0x103115=='')_0x103115='';else{var _0x225d73=_0x103115;_0x20b5fe[_0x5aa8d2(0x18a)](_0x225d73[_0x5aa8d2(0x1ed)]())==-0x1&&($(_0x5aa8d2(0x1cd))[_0x5aa8d2(0x17b)]($(_0x5aa8d2(0x17d))[_0x5aa8d2(0x184)](_0x5aa8d2(0x1aa),_0x103115)['text'](_0x103115)),_0x20b5fe[_0x5aa8d2(0x19a)](_0x225d73[_0x5aa8d2(0x1ed)]()));}var _0x5b7289=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x150)];(_0x5b7289==null||_0x5b7289=='')&&(_0x5b7289='');var _0x22a722=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x15e)][_0x5aa8d2(0x210)];(_0x22a722==null||_0x22a722=='')&&(_0x22a722='');var _0x1620a0=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x1ae)];(_0x1620a0==null||_0x1620a0=='')&&(_0x1620a0='');var _0x5dfbf7=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x1be)];(_0x5dfbf7==null||_0x5dfbf7=='')&&(_0x5dfbf7='');var _0x14103c=getFormattedDate(_0x5ec477[_0x1d4a32][_0x5aa8d2(0x169)]);_0x14103c==_0x5aa8d2(0x1b9)?_0x14103c='':_0x14103c=titanForWork[_0x5aa8d2(0x1f7)](new Date(_0x5ec477[_0x1d4a32][_0x5aa8d2(0x169)]));var _0x4c577c=getFormattedDate(_0x5ec477[_0x1d4a32][_0x5aa8d2(0x15c)]);_0x4c577c==_0x5aa8d2(0x1b9)?_0x4c577c='':_0x4c577c=titanForWork[_0x5aa8d2(0x1f7)](new Date(_0x5ec477[_0x1d4a32][_0x5aa8d2(0x15c)]));var _0x2683bd=getFormattedDate(_0x5ec477[_0x1d4a32][_0x5aa8d2(0x1c0)]);_0x2683bd==_0x5aa8d2(0x1b9)?_0x2683bd='':_0x2683bd=titanForWork[_0x5aa8d2(0x1f7)](new Date(_0x5ec477[_0x1d4a32][_0x5aa8d2(0x1c0)]));var _0x33de4e=_0x5ec477[_0x1d4a32][_0x5aa8d2(0x19f)][_0x5aa8d2(0x1f2)];(_0x33de4e==null||_0x33de4e=='')&&(_0x33de4e='');var _0x27cad7=_0x5aa8d2(0x171);_0x5ec477[_0x1d4a32]['Status']!=_0x5aa8d2(0x18b)&&(_0x27cad7='background-color:\x20#ffdcdc;');var _0x40a90f=_0x5aa8d2(0x1a7)+_0x1152d9+'\x27)',_0xad312e='../Pages/EmployeeDetails.aspx?WebAppId='+currentCompanyid+'&mode=edit&department=&employeedIddetails='+_0x5ec477[_0x1d4a32]['ID']+_0x5aa8d2(0x1a5)+currentCompanyid;_0x26ffa4=_0x26ffa4+_0x5aa8d2(0x212)+_0x27cad7+_0x5aa8d2(0x164)+_0x5ec477[_0x1d4a32]['ID']+_0x5aa8d2(0x19e)+_0xad312e+'\x27>'+_0x2f6ef7+_0x5aa8d2(0x1a4)+_0x1152d9+_0x5aa8d2(0x1c3)+_0x408e03+'</td><td>'+_0x103115+'</td><td>'+_0x33de4e+_0x5aa8d2(0x1c3)+_0x5b7289+_0x5aa8d2(0x1c3)+_0x1620a0+_0x5aa8d2(0x1c3)+_0x5dfbf7+'</td><td>'+_0x14103c+_0x5aa8d2(0x1c3)+_0x2683bd+_0x5aa8d2(0x1c3)+_0x4c577c+_0x5aa8d2(0x17c)+_0x40a90f+_0x5aa8d2(0x1dc);}var _0x51837a=_0xb99a22+_0x26ffa4+_0x5aa8d2(0x216),_0xca15ee=$(_0x5aa8d2(0x1f8));_0xca15ee[_0x5aa8d2(0x1d9)](''),_0x5ec477['length']==0x0&&(_0x51837a=_0x51837a+_0x5aa8d2(0x207)),_0xca15ee[_0x5aa8d2(0x17b)](_0x51837a),LableLoad(),GenerateTable(),$(_0x5aa8d2(0x16c))[_0x5aa8d2(0x1bd)](_0x5aa8d2(0x16d),0x1),$(_0x5aa8d2(0x168))[_0x5aa8d2(0x1e6)](),CloseWaitDialog();},'eror':function(_0x24b721){var _0x422864=_0x38fda5;CloseWaitDialog(),console[_0x422864(0x1a0)](_0x422864(0x1bb));}});}var sorter;function GenerateTable(){var _0x1001f3=a0_0x9dfa;sorter=new TINY[(_0x1001f3(0x17e))][(_0x1001f3(0x1eb))](_0x1001f3(0x1eb),_0x1001f3(0x1e2),{'headclass':'head','ascclass':'asc','descclass':_0x1001f3(0x172),'evenclass':_0x1001f3(0x1d1),'oddclass':_0x1001f3(0x17f),'evenselclass':_0x1001f3(0x1f3),'oddselclass':_0x1001f3(0x1e1),'paginate':!![],'size':0xa,'colddid':_0x1001f3(0x1a6),'currentid':'currentpage','totalid':_0x1001f3(0x180),'startingrecid':'startrecord','endingrecid':_0x1001f3(0x188),'totalrecid':_0x1001f3(0x181),'hoverid':'selectedrow','pageddid':_0x1001f3(0x199),'navid':_0x1001f3(0x18d),'sortdir':0x1,'init':!![]});}function GetUserFullName(_0x2270e5){var _0x2d0d4a=a0_0x9dfa,_0x2d0253='',_0x56bdd5='i:0#.f|membership|',_0x14078f=_spPageContextInfo['siteAbsoluteUrl'],_0x417a55=_0x56bdd5+_0x2270e5;return $[_0x2d0d4a(0x193)]({'url':_0x14078f+_0x2d0d4a(0x219)+encodeURIComponent(_0x417a55)+'\x27','method':'GET','headers':{'Accept':_0x2d0d4a(0x209)},'async':![],'success':function(_0x18a5d9){_0x2d0253=_0x18a5d9['d']['Title'];},'error':function(_0x291dbf){var _0x1c0b5c=_0x2d0d4a;console[_0x1c0b5c(0x1a0)](JSON[_0x1c0b5c(0x195)](_0x291dbf));}}),_0x2d0253;}function getFormattedDate(_0x1080f4){var _0x11b94c=a0_0x9dfa,_0x495e07=new Date(_0x1080f4),_0x2acf4b=_0x495e07['getFullYear'](),_0x38f9b2=(0x1+_0x495e07[_0x11b94c(0x165)]())[_0x11b94c(0x1b5)]();_0x38f9b2=_0x38f9b2[_0x11b94c(0x167)]>0x1?_0x38f9b2:'0'+_0x38f9b2;var _0x15f77d=_0x495e07['getDate']()[_0x11b94c(0x1b5)]();return _0x15f77d=_0x15f77d[_0x11b94c(0x167)]>0x1?_0x15f77d:'0'+_0x15f77d,_0x15f77d+'/'+_0x38f9b2+'/'+_0x2acf4b;}$(document)[a0_0x3a4364(0x152)](function(){var _0x340ecd=a0_0x3a4364;$(_0x340ecd(0x1b0))[_0x340ecd(0x200)](function(){var _0x444875=_0x340ecd,_0x33b166=$(_0x444875(0x1c5))[_0x444875(0x163)]();_0x33b166!='0'?ValidationCheckBox()==!![]?(WaitMessage(),$['when'](getUserOutputCompany())['done'](function(_0x12d2eb){GetTempEmployeeList(currentCompanyid);})):alert(_0x444875(0x1ce)):alert(_0x444875(0x1c6));}),$(_0x340ecd(0x19b))[_0x340ecd(0x200)](function(){var _0x5c0049=_0x340ecd,_0x337678=$(_0x5c0049(0x16e))[_0x5c0049(0x163)]();_0x337678!='0'?ValidationCheckBox()==!![]?(WaitMessage(),$[_0x5c0049(0x214)](getUserOutputDepartment())['done'](function(_0x329cde){GetTempEmployeeList(currentCompanyid);})):alert(_0x5c0049(0x1ce)):alert(_0x5c0049(0x158));}),$(_0x340ecd(0x1e0))[_0x340ecd(0x200)](function(){var _0xf0d67e=_0x340ecd;validationDropDownSelecttion()==0x0?ValidationCheckBox()==!![]?(WaitMessage(),$[_0xf0d67e(0x214)](getUserOutputManager(_0xf0d67e(0x1af)))['done'](function(_0x26e34e){var _0x249e27=_0xf0d67e;GetTempEmployeeList(currentCompanyid),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),$(_0x249e27(0x1ee))[_0x249e27(0x163)]('');})):alert(_0xf0d67e(0x1ce)):validationDropDownSelecttion()==0x1?alert(_0xf0d67e(0x198)):alert('If\x20you\x20have\x20selected\x20company\x20then\x20department\x20is\x20mandatory\x20to\x20select\x20.\x20');}),$(_0x340ecd(0x1fa))[_0x340ecd(0x200)](function(){var _0x5496d3=_0x340ecd,_0x27b310=$('#ddlTempManager')[_0x5496d3(0x163)]();_0x27b310!='0'?ValidationCheckBox()==!![]?(WaitMessage(),$[_0x5496d3(0x214)](getUserOutputManager(_0x5496d3(0x1b8)))[_0x5496d3(0x217)](function(_0x3d9289){GetTempEmployeeList(currentCompanyid),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),$('#query')['val']('');})):alert('Please\x20select\x20at\x20least\x20one\x20record\x20from\x20list.'):alert(_0x5496d3(0x1e4));});});function validationDropDownSelecttion(){var _0x31b908=a0_0x3a4364,_0x4cffa0=0x0,_0x2363ee=$('#ddlTempDepartment')[_0x31b908(0x163)](),_0x1e079d=$(_0x31b908(0x1c5))['val'](),_0x1e5405=$(_0x31b908(0x1d6))[_0x31b908(0x163)](),_0x2e853a=$(_0x31b908(0x1b7))[_0x31b908(0x163)]();if(_0x1e079d=='0'&&_0x2363ee=='0'&&_0x1e5405=='0'&&_0x2e853a=='0')_0x4cffa0=0x1;else _0x1e079d!='0'&&_0x2363ee=='0'&&(_0x4cffa0=0x2);return _0x4cffa0;}function getUserOutputCompany(){var _0x44bff4=a0_0x3a4364,_0x165278=$(_0x44bff4(0x1c5))[_0x44bff4(0x163)]();$(_0x44bff4(0x208))[_0x44bff4(0x213)](function(_0x1b236f){var _0x2a3d4d=_0x44bff4,_0x2270d5=$(this)['is'](_0x2a3d4d(0x211));if(_0x2270d5==!![]){var _0x32e229=$(this)[_0x2a3d4d(0x174)](_0x2a3d4d(0x1d3))[_0x2a3d4d(0x1bd)](_0x2a3d4d(0x20c));if(_0x32e229==!![]){var _0x17c32c=$(this)[_0x2a3d4d(0x174)]('.empidchk')[_0x2a3d4d(0x163)]();updateCompany('Employees',_0x165278,_0x17c32c);}}});}function getUserOutputDepartment(){var _0xe94141=a0_0x3a4364,_0x4f6cc6=$(_0xe94141(0x16e))[_0xe94141(0x163)]();$(_0xe94141(0x208))['each'](function(_0x5d448d){var _0xd7e5d6=_0xe94141,_0x4b683b=$(this)['is'](_0xd7e5d6(0x211));if(_0x4b683b==!![]){var _0x44103b=$(this)[_0xd7e5d6(0x174)](_0xd7e5d6(0x1d3))['prop'](_0xd7e5d6(0x20c));if(_0x44103b==!![]){var _0x22fabc=$(this)[_0xd7e5d6(0x174)](_0xd7e5d6(0x1d3))[_0xd7e5d6(0x163)]();updateDepartment(_0xd7e5d6(0x1d4),_0x4f6cc6,_0x22fabc);}}});}function getUserOutputManager(_0x249281){var _0x15e1b8=a0_0x3a4364;ValidationCheckBox()==!![]?$('#tableTempEmp\x20tbody\x20tr')[_0x15e1b8(0x213)](function(_0x457761){var _0x2640e0=_0x15e1b8,_0x212e29=$(this)['is'](_0x2640e0(0x211));if(_0x212e29==!![]){var _0x8fa124=$(this)[_0x2640e0(0x174)](_0x2640e0(0x1d3))['prop'](_0x2640e0(0x20c));if(_0x8fa124==!![]){var _0x404469=$(_0x2640e0(0x16e))[_0x2640e0(0x163)](),_0x28cce8=$(_0x2640e0(0x1c5))[_0x2640e0(0x163)](),_0x1cc228=$(this)[_0x2640e0(0x174)]('.empidchk')['val'](),_0x2e6d09=$(_0x2640e0(0x170))[_0x2640e0(0x178)](),_0xf52791=$(_0x2640e0(0x1d6))['val'](),_0x3c0e04=$('#ddlTempOfficeLocation')[_0x2640e0(0x163)]();if(_0x249281==_0x2640e0(0x1b8))updateManager(_0x2640e0(0x1d4),'','',_0x2e6d09,_0xf52791,'',_0x1cc228);else{if(_0x28cce8==currentCompanyid)updateManager(_0x2640e0(0x1d4),_0x28cce8,_0x404469,'','',_0x3c0e04,_0x1cc228);else{var _0x3ff61e=$(this)[_0x2640e0(0x174)]('td')[0x2][_0x2640e0(0x1ad)];EmployeeCheckListValidation(_0x3ff61e,_0x28cce8)==![]?updateManager(_0x2640e0(0x1d4),_0x28cce8,_0x404469,'','',_0x3c0e04,_0x1cc228):alert('User\x20is\x20already\x20added\x20in\x20this\x20company\x20,'+_0x3ff61e);}}}}}):alert(_0x15e1b8(0x1ce));}function ValidationCheckBox(){var _0x1d9a4f=a0_0x3a4364,_0x81be29=![];return $('#tableTempEmp\x20tbody\x20tr')[_0x1d9a4f(0x213)](function(_0x310d26){var _0x25ebd7=_0x1d9a4f,_0x140b22=$(this)['is'](':visible');if(_0x140b22==!![]){var _0x373198=$(this)['find'](_0x25ebd7(0x1d3))[_0x25ebd7(0x1bd)](_0x25ebd7(0x20c));_0x373198==!![]&&(_0x81be29=!![]);}}),_0x81be29;}function WaitMessage(){var _0x382e3a=a0_0x3a4364;waitingDialog[_0x382e3a(0x173)]();}function WaitMessage2(){var _0x119059=a0_0x3a4364;window[_0x119059(0x201)][_0x119059(0x153)](_0x119059(0x192));}function CloseWaitDialog(){var _0x594d08=a0_0x3a4364;waitingDialog[_0x594d08(0x19c)]();}function CloseWaitDialog2(){var _0x4bc435=a0_0x3a4364;window[_0x4bc435(0x194)]!=null?window[_0x4bc435(0x201)][_0x4bc435(0x1cf)]!=null&&window[_0x4bc435(0x201)][_0x4bc435(0x1cf)]['close']():window[_0x4bc435(0x201)][_0x4bc435(0x1cf)]!=null&&window[_0x4bc435(0x201)]['waitDialog'][_0x4bc435(0x1bf)]();}function updateCompany(_0x915cba,_0x170919,_0x34ce8e){var _0x12ae07=a0_0x3a4364;try{var _0x24e6d5,_0x1e1a00=GetItemTypeForListName(_0x915cba);_0x24e6d5={'__metadata':{'type':_0x1e1a00},'CompanyId':_0x170919},$[_0x12ae07(0x214)](updateItemWithID(_0x915cba,_0x24e6d5,_0x34ce8e))[_0x12ae07(0x217)](function(_0x124228){});}catch(_0x4dc2ba){console[_0x12ae07(0x1a0)](_0x4dc2ba[_0x12ae07(0x1a9)]);}}function updateDepartment(_0x1b5791,_0x2c674f,_0x55f440){var _0xc961ab=a0_0x3a4364;try{var _0x3db782,_0x21305a=GetItemTypeForListName(_0x1b5791);_0x3db782={'__metadata':{'type':_0x21305a},'DepartmentId':_0x2c674f},$[_0xc961ab(0x214)](updateItemWithID(_0x1b5791,_0x3db782,_0x55f440))[_0xc961ab(0x217)](function(_0x3c40a1){});}catch(_0x3ca5fa){console[_0xc961ab(0x1a0)](_0x3ca5fa[_0xc961ab(0x1a9)]);}}function updateManager(_0x2c18fb,_0x5f527b,_0x525bb9,_0x4464ba,_0x390a7e,_0x411a15,_0x3b6c73){var _0x48d51d=a0_0x3a4364;try{var _0x4351dc,_0x4e7b8d=GetItemTypeForListName(_0x2c18fb);_0x4351dc={'__metadata':{'type':_0x4e7b8d},'Manager':_0x4464ba,'ParentId':_0x390a7e,'DepartmentId':_0x525bb9,'CompanyId':_0x5f527b,'OfficeLocationId':_0x411a15},(_0x411a15==''||_0x411a15==null||_0x411a15=='0')&&delete _0x4351dc[_0x48d51d(0x182)],(_0x390a7e==''||_0x390a7e==null)&&delete _0x4351dc[_0x48d51d(0x187)],(_0x5f527b==''||_0x5f527b==null||_0x5f527b=='0')&&delete _0x4351dc[_0x48d51d(0x1a1)],(_0x525bb9==null||_0x525bb9==''||_0x525bb9=='0')&&delete _0x4351dc[_0x48d51d(0x1db)],(_0x4464ba==null||_0x4464ba==''||_0x4464ba=='0')&&delete _0x4351dc[_0x48d51d(0x1ae)],$[_0x48d51d(0x214)](updateItemWithID(_0x2c18fb,_0x4351dc,_0x3b6c73))[_0x48d51d(0x217)](function(_0x2c7d2a){});}catch(_0x5d219b){console[_0x48d51d(0x1a0)](_0x5d219b[_0x48d51d(0x1a9)]);}}function GetItemTypeForListName(_0x44b4d0){var _0x360124=a0_0x3a4364;return _0x360124(0x1fe)+_0x44b4d0[_0x360124(0x175)](0x0)['toUpperCase']()+_0x44b4d0[_0x360124(0x1dd)]('\x20')[_0x360124(0x20e)]('')[_0x360124(0x160)](0x1)+_0x360124(0x176);}function updateItemWithID(_0x149b09,_0x4e4254,_0x2166b3){var _0x38a5d4=a0_0x3a4364,_0x247078=$[_0x38a5d4(0x197)]();return $[_0x38a5d4(0x193)]({'url':_spPageContextInfo[_0x38a5d4(0x161)]+_0x38a5d4(0x159)+_0x149b09+_0x38a5d4(0x177)+_0x2166b3+'\x27)','type':_0x38a5d4(0x15d),'headers':{'accept':_0x38a5d4(0x185),'X-RequestDigest':$(_0x38a5d4(0x1df))[_0x38a5d4(0x163)](),'content-Type':_0x38a5d4(0x185),'X-Http-Method':_0x38a5d4(0x1e5),'If-Match':'*'},'data':JSON['stringify'](_0x4e4254),'async':![],'success':function(_0x2c0344){var _0x4ad47f=_0x38a5d4;_0x247078[_0x4ad47f(0x20f)](!![]);},'error':function(_0x3b4d37){var _0x24cf0b=_0x38a5d4;CloseWaitDialog(),alert(JSON[_0x24cf0b(0x195)](_0x3b4d37)),_0x247078[_0x24cf0b(0x17a)](_0x3b4d37);}}),_0x247078[_0x38a5d4(0x204)]();}function ChangePrimaryCompany(){var _0x295b2c=a0_0x3a4364,_0x7ff5a4=0x0;return $('.companycheckbox')[_0x295b2c(0x213)](function(_0x2accb8){var _0x213adb=_0x295b2c;$(this)[_0x213adb(0x1bd)]('checked')&&_0x7ff5a4++;}),_0x7ff5a4;}function SubmitPrimaryCompany(){var _0x35acf1=a0_0x3a4364;$('#changePrimaryCompanyButton')[_0x35acf1(0x200)](function(){var _0x5b7353=_0x35acf1;ChangePrimaryCompany()==0x1?($(_0x5b7353(0x215))[_0x5b7353(0x213)](function(_0x5b7cf3){var _0x259222=_0x5b7353,_0x236e2f=$(this)[_0x259222(0x174)](_0x259222(0x1ba))['prop'](_0x259222(0x20c)),_0x49e853=$(this)[_0x259222(0x174)](_0x259222(0x1c7))[_0x259222(0x163)]();_0x236e2f==!![]?UpdatePrimaryCompany(_0x259222(0x1d4),'Primary',_0x49e853):UpdatePrimaryCompany(_0x259222(0x1d4),'',_0x49e853);}),alert('Primary\x20Company\x20has\x20been\x20changed.')):alert(_0x5b7353(0x1d2));});}function UpdatePrimaryCompany(_0x3ed16d,_0x1ffa5f,_0x37e337){var _0x13c2b0=a0_0x3a4364;try{var _0x29eb11,_0x9ce36a=GetItemTypeForListName(_0x3ed16d);_0x29eb11={'__metadata':{'type':_0x9ce36a},'PrimaryCompany':_0x1ffa5f},$[_0x13c2b0(0x214)](updateItemWithID(_0x3ed16d,_0x29eb11,_0x37e337))[_0x13c2b0(0x217)](function(_0x48b255){});}catch(_0x335cd7){console['log'](_0x335cd7[_0x13c2b0(0x1a9)]);}}function GetAllocatedEmployeesCompanies(_0x3304d2){var _0x10c248=a0_0x3a4364;try{var _0x49f6fe=_spPageContextInfo[_0x10c248(0x161)]+_0x10c248(0x205)+_0x3304d2+'\x27';$['ajax']({'url':_0x49f6fe,'headers':{'Accept':_0x10c248(0x185)},'async':!![],'success':function(_0x2499f0){var _0x11bfbf=_0x10c248,_0x4796e6=_0x2499f0['d'][_0x11bfbf(0x16b)],_0x162c16=_0x11bfbf(0x179),_0x52371a='',_0x38d55f=![];for(var _0x8ff41e=0x0;_0x8ff41e<_0x4796e6[_0x11bfbf(0x167)];_0x8ff41e++){var _0x45cda1=_0x4796e6[_0x8ff41e]['ID'],_0x961c85=_0x4796e6[_0x8ff41e][_0x11bfbf(0x18e)][_0x11bfbf(0x1e8)];(_0x961c85==null||_0x961c85=='')&&(_0x961c85='');var _0x23e36e=_0x4796e6[_0x8ff41e][_0x11bfbf(0x15e)]['CompanyName'];(_0x23e36e==null||_0x23e36e=='')&&(_0x23e36e='');var _0x158a28=_0x4796e6[_0x8ff41e][_0x11bfbf(0x1ac)][_0x11bfbf(0x1cc)];(_0x158a28==null||_0x158a28=='')&&(_0x158a28='');var _0x42da39=_0x4796e6[_0x8ff41e][_0x11bfbf(0x1b4)],_0x186021='',_0x4bf382=_0x11bfbf(0x1ca);_0x42da39==null||_0x42da39==''?(_0x186021=_0x11bfbf(0x1d8),_0x38d55f=!![]):_0x186021='<input\x20type=\x27checkbox\x27\x20class=\x27companycheckbox\x27\x20\x20'+_0x4bf382+'\x20\x20id=\x27myCheck\x27>',_0x52371a=_0x52371a+'<tr><td\x20style=\x27padding:\x205px;\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27companychnageid\x27\x20value=\x27'+_0x45cda1+'\x27>'+_0x23e36e+_0x11bfbf(0x1a2)+_0x158a28+_0x11bfbf(0x1c2)+_0x186021+_0x11bfbf(0x1ab);}var _0x2ae99d='';if(_0x4796e6[_0x11bfbf(0x167)]==0x1&&_0x38d55f==!![])_0x2ae99d=_0x11bfbf(0x1f6);else _0x4796e6['length']>0x1&&(_0x2ae99d=_0x11bfbf(0x186));var _0x1d7678=_0x162c16+_0x11bfbf(0x20d)+_0x52371a+_0x11bfbf(0x157)+'</table>'+_0x2ae99d+'',_0x28a225=$('#mainDivCompanies');_0x28a225[_0x11bfbf(0x1d9)](''),_0x4796e6[_0x11bfbf(0x167)]==0x0&&(_0x1d7678=_0x1d7678+_0x11bfbf(0x218)),_0x28a225[_0x11bfbf(0x17b)](_0x1d7678),CloseWaitDialog(),$(_0x11bfbf(0x1f9))[_0x11bfbf(0x1cb)](_0x11bfbf(0x173)),ChangePrimaryCompany(),SubmitPrimaryCompany();},'eror':function(_0x146753){var _0x132d8e=_0x10c248;CloseWaitDialog(),console['log'](_0x132d8e(0x1bb));}});}catch(_0x3bb03b){CloseWaitDialog(),alert(_0x10c248(0x20a));}}function CheckUserPermission(_0x4d91f9){var _0x19bf24=a0_0x3a4364,_0x3d68df='ProcessApprovers',_0x359684=_spPageContextInfo[_0x19bf24(0x161)]+_0x19bf24(0x159)+_0x3d68df+_0x19bf24(0x1f5)+_0x4d91f9+'\x27\x20and\x20ContributorsId\x20eq\x20\x27'+_spPageContextInfo[_0x19bf24(0x1da)]+_0x19bf24(0x1ea);$[_0x19bf24(0x193)]({'url':_0x359684,'type':_0x19bf24(0x183),'headers':{'Accept':_0x19bf24(0x185)},'success':function(_0x26b49e){var _0x2f1b09=_0x19bf24,_0x431578='',_0x481f93=_0x26b49e['d'][_0x2f1b09(0x16b)];if(_0x481f93[_0x2f1b09(0x167)]>0x0){}else window[_0x2f1b09(0x1fc)][_0x2f1b09(0x1b2)]=_0x2f1b09(0x196)+_0x4d91f9+'',alert(_0x2f1b09(0x166));},'error':function(_0x2620ac){var _0x4df277=_0x19bf24;console[_0x4df277(0x1a0)](_0x2620ac[_0x4df277(0x154)][_0x4df277(0x1bb)]);}});}