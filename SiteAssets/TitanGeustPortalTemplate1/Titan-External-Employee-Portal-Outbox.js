var a0_0x2b967a=a0_0x38e6;(function(_0x2108a4,_0x52fa83){var _0x27f847=a0_0x38e6,_0x37a41b=_0x2108a4();while(!![]){try{var _0x5ce8d9=parseInt(_0x27f847(0x1ff))/0x1+parseInt(_0x27f847(0x20a))/0x2*(-parseInt(_0x27f847(0x283))/0x3)+-parseInt(_0x27f847(0x2ba))/0x4*(parseInt(_0x27f847(0x2d9))/0x5)+parseInt(_0x27f847(0x20c))/0x6*(parseInt(_0x27f847(0x220))/0x7)+parseInt(_0x27f847(0x27c))/0x8*(-parseInt(_0x27f847(0x1f2))/0x9)+-parseInt(_0x27f847(0x242))/0xa+parseInt(_0x27f847(0x2b7))/0xb*(parseInt(_0x27f847(0x20e))/0xc);if(_0x5ce8d9===_0x52fa83)break;else _0x37a41b['push'](_0x37a41b['shift']());}catch(_0x3cdcd4){_0x37a41b['push'](_0x37a41b['shift']());}}}(a0_0x3881,0xa1a22));function a0_0x38e6(_0x1c66f0,_0x1b6233){var _0x388142=a0_0x3881();return a0_0x38e6=function(_0x38e6f3,_0x51634b){_0x38e6f3=_0x38e6f3-0x1ee;var _0x48a874=_0x388142[_0x38e6f3];return _0x48a874;},a0_0x38e6(_0x1c66f0,_0x1b6233);}var txtCompanyId='';$(document)[a0_0x2b967a(0x21d)](function(){var _0x381987=a0_0x2b967a;$(_0x381987(0x23e))[_0x381987(0x229)](function(){var _0x27510e=_0x381987;$('#project_tab')[_0x27510e(0x2c7)](),$(_0x27510e(0x28a))[_0x27510e(0x2c7)](),$(_0x27510e(0x222))[_0x27510e(0x22b)](),$(_0x27510e(0x263))[_0x27510e(0x2c7)]();}),GetExtrenalEmployees(),initializePeoplePicker(_0x381987(0x29e));var _0x124fe6=_0x381987(0x252);GetTasksOutboxTasks(_0x124fe6,_0x381987(0x29a)),$(_0x381987(0x26d))[_0x381987(0x210)]('disabled',!![]),$(_0x381987(0x271))[_0x381987(0x2ae)](function(){var _0x9dfaad=_0x381987,_0x339eab=this['value'];_0x339eab!='General\x20Task'&&_0x339eab!=_0x9dfaad(0x2be)?CurrentProjectModuleForOutBox(_0x339eab):($('#ProjectModuleTaskOutBox')[_0x9dfaad(0x210)](_0x9dfaad(0x255),!![]),$(_0x9dfaad(0x26d))[_0x9dfaad(0x282)](),$(_0x9dfaad(0x262))[_0x9dfaad(0x246)]('#ProjectModuleTaskOutBox'));}),$(_0x381987(0x25c))['click'](function(){var _0x49ae56=_0x381987;$('#Outbox')[_0x49ae56(0x201)](_0x49ae56(0x22b)),$(_0x49ae56(0x2a5))[_0x49ae56(0x272)]==0x0&&myAllProjectOutbox(),$(_0x49ae56(0x1f5))[_0x49ae56(0x272)]==0x0&&bindAllWorkType();}),$(_0x381987(0x2b2))[_0x381987(0x229)](function(){var _0x1cc34c=_0x381987,_0x572085=$(_0x1cc34c(0x274))[_0x1cc34c(0x214)]();GetTasksOutboxTasks(_0x1cc34c(0x252),''),$('#pageDropDownOutbox')['val'](_0x572085),$('#pageDropDownOutbox')[_0x1cc34c(0x284)]('change');}),$(_0x381987(0x232))['click'](function(){var _0x3f5f9c=_0x381987,_0x3dba54=$(_0x3f5f9c(0x274))[_0x3f5f9c(0x214)]();if(NextURLOutbox!=null)var _0x2761e4='?'+NextURLOutbox[_0x3f5f9c(0x280)]('?')[0x1];FilterTaskDataForOutBox(_0x2761e4,''),$(_0x3f5f9c(0x274))[_0x3f5f9c(0x214)](_0x3dba54),$(_0x3f5f9c(0x274))[_0x3f5f9c(0x284)]('change');}),$(_0x381987(0x227))[_0x381987(0x229)](function(){AddTaskIframe();});});function myAllProjectOutbox(){var _0x10215a=a0_0x2b967a;$('#UserAllProjectTaskOutBox')[_0x10215a(0x282)]();var _0x2dcd5d=[],_0x241b1d;$('<option\x20value=\x22All\x22>All</option>')[_0x10215a(0x246)](_0x10215a(0x271)),$(_0x10215a(0x2c1))[_0x10215a(0x246)]('#UserAllProjectTaskOutBox');var _0xa6beeb=_0x10215a(0x235),_0x1d8db2=_spPageContextInfo[_0x10215a(0x211)]+'/_api/web/lists/getbytitle(\x27'+_0xa6beeb+_0x10215a(0x2c3)+txtCompanyId+_0x10215a(0x2af)+_spPageContextInfo[_0x10215a(0x2d8)]+'\x27\x20and\x20Status\x20eq\x20\x27Active\x27';$[_0x10215a(0x237)]({'url':_0x1d8db2,'type':_0x10215a(0x22c),'headers':{'Accept':_0x10215a(0x267)},'success':function(_0x38e164){var _0x43b5a3=_0x10215a,_0x23887e='',_0x10a4f6=_0x38e164['d']['results'];$[_0x43b5a3(0x1f1)](_0x10a4f6,function(_0x4bcfe0,_0xd03b45){var _0x1d1cb9=_0x43b5a3;_0x2dcd5d[_0x1d1cb9(0x2b6)](_0xd03b45[_0x1d1cb9(0x27f)]['Id'])==-0x1&&(_0x2dcd5d['push'](_0xd03b45[_0x1d1cb9(0x27f)]['Id']),_0x23887e+=_0x1d1cb9(0x26e)+_0xd03b45[_0x1d1cb9(0x27f)]['Id']+'\x27>'+_0xd03b45[_0x1d1cb9(0x27f)][_0x1d1cb9(0x29c)]+_0x1d1cb9(0x20b));}),$(_0x43b5a3(0x271))[_0x43b5a3(0x22a)](_0x23887e);},'error':function(_0x1f683e){var _0x36aaae=_0x10215a;console['log'](_0x1f683e[_0x36aaae(0x254)]['error']);}});}var interval='';function AddTaskIframe(){var _0x484e7b=a0_0x2b967a;location[_0x484e7b(0x208)]=_spPageContextInfo[_0x484e7b(0x211)]+_0x484e7b(0x264)+txtCompanyId+_0x484e7b(0x218);}function PreviewDetails(_0x99a940){var _0x52a91b=a0_0x2b967a;location[_0x52a91b(0x208)]=_0x99a940[_0x52a91b(0x21c)]+_0x52a91b(0x2d5);}function GetExtrenalEmployees(){var _0x4cd658=a0_0x2b967a,_0x4cd13e=_spPageContextInfo['webAbsoluteUrl']+_0x4cd658(0x1fe)+_spPageContextInfo[_0x4cd658(0x257)]+'\x27\x20and\x20Status\x20eq\x20\x27Active\x27\x20',_0x567bbb=$[_0x4cd658(0x276)]();return $[_0x4cd658(0x237)]({'url':_0x4cd13e,'headers':{'Accept':_0x4cd658(0x267)},'async':![],'success':function(_0xf3f6a6){var _0x3c59ca=_0x4cd658;_0x567bbb[_0x3c59ca(0x223)](_0xf3f6a6['d']['results']),getCompanyId(_0xf3f6a6['d'][_0x3c59ca(0x294)][0x0][_0x3c59ca(0x2d1)][_0x3c59ca(0x28d)]);},'error':function(_0x1d3335){var _0x391d3c=_0x4cd658;console['log'](_0x1d3335),_0x567bbb[_0x391d3c(0x251)](_0x1d3335);}}),_0x567bbb[_0x4cd658(0x265)]();}function getCompanyId(_0x45adc8){var _0x1e1945=a0_0x2b967a,_0xe87ceb=_0x1e1945(0x200)+_0x45adc8+'\x27\x20';dfds=$[_0x1e1945(0x276)](),url=_spPageContextInfo[_0x1e1945(0x211)]+_0x1e1945(0x287)+_0xe87ceb,$['when'](getItems(url,dfds))['done'](function(_0x30311f){var _0x4f5310=_0x1e1945;response=[],txtCompanyId=_0x30311f[0x0][_0x4f5310(0x21f)]['Id'][_0x4f5310(0x269)]();});}function a0_0x3881(){var _0x1769fb=['btoa','General\x20Task','All','</p></div></td>','done','<option\x20value=\x22General\x20Task\x22>General\x20Task</option>','sorter','\x27)/items?$select=DocumentPermission,TeamMember/Id,Project/Id,Project/ProjectName&$expand=TeamMember,Project&$filter=CompanyId\x20eq\x20\x27','#SeeMoreFilterOutbox','round','#TotalItemscountfortaskOutBox','hide','log','\x27\x20onclick=\x27UpdatTaskDependency(this,','<div\x20class=\x27upload-chip\x27>','<p\x20class=\x27m-0\x20font-12\x27>Due:<span>','%\x27></div></div></td>','...','#ActionOutbox','oddselected','DeleteProcessedUser','Client_Name','<td>','GET','SearchPrincipalSource','&sourceLocation=../SitePages/Guestportal1.aspx','<p\x20class=\x27m-0\x20mt-4\x20ellipsis-1\x27>','tableTempTaskOutBox','userId','5aITvih','EmployeeTaskDetails','</h4>','\x27\x20and\x20CompanyId\x20eq\x20\x27','POST','each','28638aGRACb','#ShowItemsOutbox','and\x20Worktype\x20eq\x20\x27','#WorkTypeOfProjectOutbox\x20option','table','and\x20ProjectName\x20eq\x20\x27','#taskDependencyOutbox','</td>','Width','<h4\x20class=\x27m-0\x27>','totalpagesTaskOutBox','ProjectModules','/_api/web/lists/GetByTitle(\x27ExternalUsers\x27)/items?$top=1&$select=*,ID,LoginName/Title,Client_Name/Title,InternalStakeholders/Title,Supervisor/Title,AttachmentFiles\x20&$expand=LoginName,InternalStakeholders,Supervisor,AttachmentFiles,Client_Name&$filter=\x20email\x20eq\x20\x27','1285959mfnSGA','?$select=Id,Title,CompanyID/Id&$expand=CompanyID&$top=5000&$filter=Title\x20eq\x20\x27','modal','DueDate','<button\x20type=\x27button\x27\x20class=\x27btn\x20custom-btn\x20custom-btn-two\x20mt-16\x27\x20onclick=taskDependencyOutbox(\x27','CurrentPhase','</div></td>','HasResolvedUsers','CompletionDate','href','find','16ABfpWI','</option>','6ryKybE','stringify','204eVVWEk','AssignedTo','attr','webAbsoluteUrl','format','siteServerRelativeUrl','val','<label\x20class=\x27m-0\x20b-400\x27>Module:</label><span\x20class=\x27ml-4\x20my-task-names\x27>','</span>','#NoRecordFoundTaskOutBox','&IsModal=dHJ1ZQ==&sourceLocation=../SitePages/Guestportal1.aspx','getTime','#ProjectModuleTaskOutBox\x20option:selected','\x27)>Group</button>','name','ready','date','CompanyID','8694140BpUWGB','#__REQUESTDIGEST','#Task-Outbox','resolve','and\x20DueDate\x20le\x20\x27','#WorkTypeOfProjectOutbox','</b></a>','#addNewTaskoutbox','/_api/web/lists/getbytitle(\x27TaskDependencies\x27)/items?$top=5000&$select=ID,Title,Details,Status,AssignedTo/Title,TaskId/ID,TaskId/Title&$Expand=AssignedTo,TaskId&$filter=TaskId\x20eq\x27','click','append','show','get','PATCH','/_api/web/ensureuser','or\x20TaskAssignToId\x20eq\x20\x27','tablenavTaskOutBox','#titleForOutboxTask','#SeeMoreFilterInbox','Details','<td\x20class=\x27text-left\x27><div>','ProjectTeamDetails','Worktype','ajax','<p\x20class=\x27m-0\x20font-12\x27>Due:<span\x20style=\x27font-weight:\x20bold;color:\x20red;\x27>','<td\x20class=\x27text-center\x27>','SPClientPeoplePicker_InitStandaloneControlWrapper','location','TaskAssignTo','protocol','#TaskOutboxTab','<tr>','checked','<div\x20class=\x27\x27>','6126730TfaubG','Author','PrincipalAccountType','GetAllUserInfo','appendTo','\x27)/GetItemById(\x27','desc','and\x20CurrentPhase\x20eq\x20\x27','Filter','ClientID','&IsModal=dHJ1ZQ==\x27><b\x20class=\x27ellipsis-2\x27>','/_api/web/lists/getbytitle(\x27','endrecordTaskOutBox','N/A','concat','reject','Open','span[class=\x27sp-peoplepicker-userSpan\x27]','responseJSON','disabled','#myTaskOutboxChip','userEmail','sorterTaskOutBox','</span></p></td>','\x27\x20title=\x27','#UserAllProjectTaskOutBox\x20option:selected','#taskoutboxFilterModal','#txtPriorityOutBox','when','#tableTempTaskOutBox>tbody\x20tr',')\x27><span\x20class=\x27slider\x20round\x27></span></label></td>','substring','<option\x20value=\x22All\x22>All</option>','#document_tab','/Pages/TaskDetails.aspx?WebAppId=','promise','<p\x20class=\x27m-0\x20ellipsis-2\x27>','application/json;odata=verbose','<label\x20class=\x27m-0\x20b-400\x27>Project:</label><span\x20class=\x27ml-4\x20my-task-names\x27>','toString','_TopSpan','<div\x20class=\x27progress\x20custom-progress\x20progress-danger\x20m-0\x20mt-4\x27><div\x20class=\x27progress-bar\x20progress-bar-danger\x27\x20role=\x27progressbar\x27\x20aria-valuenow=\x2740\x27\x20aria-valuemin=\x270\x27\x20aria-valuemax=\x27100\x27\x20style=\x27width:','TaskType','#ProjectModuleTaskOutBox','<option\x20value=\x27','<div\x20class=\x27progress\x20custom-progress\x20progress-success\x20m-0\x20mt-4\x27><div\x20class=\x27progress-bar\x20progress-bar-success\x27\x20role=\x27progressbar\x27\x20aria-valuenow=\x2740\x27\x20aria-valuemin=\x270\x27\x20aria-valuemax=\x27100\x27\x20style=\x27width:','host','#UserAllProjectTaskOutBox','length','TaskDependencies','#pageDropDownOutbox','#txtFilterStatusOutbox','Deferred','SPClientPeoplePicker','<button\x20type=\x27button\x27\x20class=\x27btn\x20custom-btn\x20custom-btn-two\x27\x20onclick=taskAssignToUsersModal(\x27','startrecordTaskOutBox','#txtFilterStatusOutbox\x20option:selected','#ShowTotalItemsOutbox','3032MrQnxe','Error\x20occured','Module','Project','split','<p\x20class=\x27m-0\x20ellipsis-1\x27>','empty','212712NnnIxV','trigger','<td\x20class=\x27text-center\x20vertical-align-middle\x27>','type','/_api/web/lists/getbytitle(\x27ClientMaster\x27)/items/','ProjectFullName','SPClientPeoplePickerDict','#Task-Inbox','TaskId','<td\x20class=\x27text-center\x27><label\x20class=\x27switch\x27><input\x20type=\x27checkbox\x27\x20checked\x20id=\x27btnToggle','Title','&EditMode=','</span></p>','and\x20TaskPriority\x20eq\x20\x27','Completed','&TaskId=','Key','results','<div\x20class=\x27text-center\x20mt-4\x20position-relative\x27>','#mainDivAreaTaskOutBox','<p\x20class=\x27m-0\x20ellipsis-1\x20mt-29\x27>','</div>','text','PageLoad','html','ProjectName','Status','pplassignto','</tr>','#taskOut','#SeeMoreOutbox','<label\x20class=\x27m-0\x20b-400\x27>Client:</label><span\x20class=\x27ml-4\x20my-task-names\x27>','TaskPriority','?$top=100&$select=*,ClientID/ID,ClientID/Title,Module/Title,Author/Title,TaskAssignTo/Title,AttachmentFiles&$Expand=ClientID,Module,AttachmentFiles,Author,TaskAssignTo&$orderby=Modified\x20desc&$Filter=AuthorId\x20eq\x20\x27','#UserAllProjectTaskOutBox\x20option','and\x20Module/Id\x20eq\x20\x27','__next','\x27)>Action</button>','HasInputError','oddrow','\x27\x20and\x20CompanyId\x20\x20eq\x20\x27','True','#DiplayOutboxCount','change','\x27\x20and\x20TeamMemberId\x20eq\x20\x27','prop','AllowMultipleValues','#SeeMoreInbox','<p\x20class=\x27m-0\x20mb-10\x27>','Inactive','<a\x20class=\x27task-name-box\x27\x20onclick=\x27PreviewDetails(this);\x27\x20href=\x27javascript:void(0);\x27\x20name=\x27','indexOf','594143dDuJxt','CompletionPersent','DependencyCount','1593068ooGIEI','</p>'];a0_0x3881=function(){return _0x1769fb;};return a0_0x3881();}var response=response||[];function getItems(_0x873fa8,_0x586138){var _0x24017d=a0_0x2b967a;return $[_0x24017d(0x237)]({'url':_0x873fa8,'type':_0x24017d(0x2d3),'async':![],'headers':{'accept':_0x24017d(0x267)},'success':function(_0x384958){var _0x4bec84=_0x24017d;response=response[_0x4bec84(0x250)](_0x384958['d'][_0x4bec84(0x294)]),_0x384958['d'][_0x4bec84(0x2a7)]?(_0x873fa8=_0x384958['d']['__next'],getItems(_0x873fa8,_0x586138)):_0x586138['resolve'](response);},'error':function(_0x884ffd){var _0x30229d=_0x24017d;_0x586138[_0x30229d(0x251)](_0x884ffd),console[_0x30229d(0x2c8)](_0x884ffd);}}),_0x586138['promise']();}var NextURLOutbox='';function GetTasksOutboxTasks(_0x4d4296,_0x220204){var _0x498263=a0_0x2b967a,_0xd76783=window[_0x498263(0x23b)][_0x498263(0x23d)]+'//'+window['location'][_0x498263(0x270)]+_spPageContextInfo[_0x498263(0x213)];$(_0x498263(0x2c4))['hide']();if(_0x220204==_0x498263(0x29a)){$('#mainDivAreaTaskOutBox')['empty']();_0x4d4296==_0x498263(0x2be)?requestUri='?$top=100&$select=*,ClientID/ID,ClientID/Title,Author/Title,TaskAssignTo/Title,AttachmentFiles&$Expand=ClientID,Author,AttachmentFiles,TaskAssignTo&$OrderBy=Modified\x20desc&$Filter=AuthorId\x20eq\x20\x27'+_spPageContextInfo['userId']+_0x498263(0x1ef)+txtCompanyId+'\x27':requestUri=_0x498263(0x2a4)+_spPageContextInfo[_0x498263(0x2d8)]+'\x27\x20and\x20CompanyId\x20eq\x20\x27'+txtCompanyId+'\x27\x20and\x20CurrentPhase\x20eq\x20\x27'+_0x4d4296+'\x27';var _0x2d8eeb=requestUri;}else{if(NextURLOutbox!=null)var _0x2d8eeb='?'+NextURLOutbox[_0x498263(0x280)]('?')[0x1];else{$('#SeeMoreOutbox')[_0x498263(0x2c7)]();return;}}$['when'](getItemsWithQueryItem(_0x498263(0x2da),_0x2d8eeb,'TaskOutbox'))[_0x498263(0x2c0)](function(_0x4be8c3){var _0xce5dff=_0x498263,_0x384303='';_0x384303+=_0xce5dff(0x2ca)+_0x4d4296+_0xce5dff(0x298),$(_0xce5dff(0x256))[_0xce5dff(0x282)](),$(_0xce5dff(0x256))['append'](_0x384303);var _0xe9870e=_0x4be8c3['results'];(NextURLOutbox==null||NextURLOutbox=='')&&$(_0xce5dff(0x2a1))[_0xce5dff(0x2c7)]();var _0x4e9523='';for(var _0x188c15=0x0;_0x188c15<_0xe9870e[_0xce5dff(0x272)];_0x188c15++){var _0x26bd6d='',_0x3c1757='',_0x2e3731=_0xe9870e[_0x188c15][_0xce5dff(0x28d)],_0x155723=_0xe9870e[_0x188c15]['ID'],_0x5e6a48=_0xe9870e[_0x188c15][_0xce5dff(0x26c)],_0xd1eb3d=_0xe9870e[_0x188c15][_0xce5dff(0x243)][_0xce5dff(0x28d)],_0x38ae48=_0xe9870e[_0x188c15][_0xce5dff(0x2a3)],_0x4a77e0=_0xe9870e[_0x188c15]['ID'],_0x3917f5=_0xe9870e[_0x188c15][_0xce5dff(0x202)],_0x135ec8=new Date(_0x3917f5);_0x135ec8=new Date(_0x135ec8);var _0x473515=Math[_0xce5dff(0x2c5)](todayDate[_0xce5dff(0x219)]()-_0x135ec8[_0xce5dff(0x219)]())/one_day;_0x3917f5!=null?(_0x3917f5=new Date(_0x3917f5),_0x3917f5=ShowCommonStandardDateFormat(_0x3917f5)):_0x3917f5='N/A';var _0x2e9094=_0xe9870e[_0x188c15][_0xce5dff(0x23c)],_0x2fea04='';if(_0x2e9094['results'][_0xce5dff(0x272)]>0x0)var _0x2fea04=_0x2e9094[_0xce5dff(0x294)][0x0][_0xce5dff(0x28d)];var _0x5bad27=_0xe9870e[_0x188c15][_0xce5dff(0x2b8)],_0x2470d9=_0xe9870e[_0x188c15][_0xce5dff(0x204)];_0x2470d9==_0xce5dff(0x291)?(_0x26bd6d=new Date(_0xe9870e[_0x188c15]['CompletionDate']),_0x26bd6d=ShowCommonStandardDateFormat(_0x26bd6d)):_0x26bd6d=_0xce5dff(0x24f);var _0x279758=_0xe9870e[_0x188c15][_0xce5dff(0x288)];_0x279758==null&&(_0x279758=_0xce5dff(0x2bd));var _0x3e1ba9='';if(_0xe9870e[_0x188c15][_0xce5dff(0x27e)]!=0x0){var _0x3e1ba9=_0xe9870e[_0x188c15][_0xce5dff(0x27e)][_0xce5dff(0x28d)];_0x3e1ba9==null&&(_0x3e1ba9='');}var _0x2c617c='';if(_0xe9870e[_0x188c15][_0xce5dff(0x24b)]!=0x0){var _0x2c617c=_0xe9870e[_0x188c15]['ClientID'][_0xce5dff(0x28d)];_0x2c617c==null&&(_0x2c617c='');}var _0x1771af='';_0x5e6a48=='2'&&(_0x1771af=_0xce5dff(0x2a2)+_0x2c617c+_0xce5dff(0x216));_0x5e6a48=='1'&&(_0x1771af='<label\x20class=\x27m-0\x20b-400\x27>Module:</label><span\x20class=\x27ml-4\x20my-task-names\x27>'+_0x3e1ba9+_0xce5dff(0x216));var _0x285d69=_0xe9870e[_0x188c15][_0xce5dff(0x236)];_0x285d69==null&&(_0x285d69='');var _0x2f0f1e=_0xe9870e[_0x188c15][_0xce5dff(0x2b9)];(_0x2f0f1e==null||_0x2f0f1e==0x0)&&(_0x2f0f1e='');var _0x5a8cd1='';_0x2f0f1e>0x0&&(_0x5a8cd1=_0xce5dff(0x203)+_0x155723+_0xce5dff(0x2a8));var _0x597f89=_0xe9870e[_0x188c15]['StartDate'],_0x311196='';_0x2e9094[_0xce5dff(0x294)][_0xce5dff(0x272)]>0x1&&(_0x311196=_0xce5dff(0x278)+_0x155723+_0xce5dff(0x21b));var _0xca141c='<a\x20class=\x27task-name-box\x27\x20onclick=\x27PreviewDetails(this);\x27\x20href=\x27javascript:void(0);\x27\x20name=\x27'+_0xd76783+'/Pages/TaskDetails.aspx?WebAppId='+txtCompanyId+_0xce5dff(0x292)+window[_0xce5dff(0x2bc)](_0x155723)+_0xce5dff(0x28e)+window[_0xce5dff(0x2bc)](_0xce5dff(0x2ac))+_0xce5dff(0x24c)+_0x2e3731+'</b></a>';_0x473515>0x1&&_0x2470d9==_0xce5dff(0x252)?_0x4e9523+=_0xce5dff(0x23f)+'<td>'+_0xca141c+_0xce5dff(0x2d6)+_0xce5dff(0x268)+_0x279758+'</span></p></td>'+_0xce5dff(0x239)+_0xce5dff(0x241)+_0xce5dff(0x281)+_0x285d69+'</p>'+_0xce5dff(0x297)+_0x1771af+_0xce5dff(0x2bf)+_0xce5dff(0x239)+_0xce5dff(0x266)+_0x2fea04+_0xce5dff(0x2bb)+'<div\x20class=\x27text-center\x20mt-4\x20position-relative\x27>'+_0x311196+_0xce5dff(0x205)+_0xce5dff(0x239)+_0xce5dff(0x2b3)+_0x2470d9+'</p>'+_0xce5dff(0x238)+_0x3917f5+'</span></p>'+_0xce5dff(0x26b)+_0x5bad27+_0xce5dff(0x2cc)+'<td\x20class=\x27text-center\x27>'+_0xce5dff(0x1fb)+_0x2f0f1e+'</h4>'+_0x5a8cd1+_0xce5dff(0x1f9)+_0xce5dff(0x285)+_0x26bd6d+_0xce5dff(0x1f9)+_0xce5dff(0x29f):_0x4e9523+=_0xce5dff(0x23f)+_0xce5dff(0x2d2)+_0xca141c+_0xce5dff(0x2d6)+_0xce5dff(0x268)+_0x279758+'</span></p></td>'+_0xce5dff(0x239)+_0xce5dff(0x241)+_0xce5dff(0x281)+_0x285d69+_0xce5dff(0x2bb)+'<p\x20class=\x27m-0\x20ellipsis-1\x20mt-29\x27>'+_0x1771af+'</p></div></td>'+_0xce5dff(0x239)+_0xce5dff(0x266)+_0x2fea04+_0xce5dff(0x2bb)+_0xce5dff(0x295)+_0x311196+_0xce5dff(0x205)+_0xce5dff(0x239)+'<p\x20class=\x27m-0\x20mb-10\x27>'+_0x2470d9+_0xce5dff(0x2bb)+_0xce5dff(0x2cb)+_0x3917f5+_0xce5dff(0x28f)+'<div\x20class=\x27progress\x20custom-progress\x20progress-success\x20m-0\x20mt-4\x27><div\x20class=\x27progress-bar\x20progress-bar-success\x27\x20role=\x27progressbar\x27\x20aria-valuenow=\x2740\x27\x20aria-valuemin=\x270\x27\x20aria-valuemax=\x27100\x27\x20style=\x27width:'+_0x5bad27+_0xce5dff(0x2cc)+_0xce5dff(0x239)+'<h4\x20class=\x27m-0\x27>'+_0x2f0f1e+'</h4>'+_0x5a8cd1+'</td>'+'<td\x20class=\x27text-center\x20vertical-align-middle\x27>'+_0x26bd6d+'</td>'+_0xce5dff(0x29f);}_0xe9870e[_0xce5dff(0x272)]==0x0?$(_0xce5dff(0x217))[_0xce5dff(0x22b)]():$('#NoRecordFoundTaskOutBox')[_0xce5dff(0x2c7)](),$(_0xce5dff(0x296))['append'](_0x4e9523),NextURLOutbox!=null?($(_0xce5dff(0x27b))[_0xce5dff(0x2c7)](),$(_0xce5dff(0x1f3))[_0xce5dff(0x22b)](),$(_0xce5dff(0x2ad))['text']($(_0xce5dff(0x25f))[_0xce5dff(0x272)])):($(_0xce5dff(0x27b))[_0xce5dff(0x22b)](),$(_0xce5dff(0x1f3))[_0xce5dff(0x2c7)](),$('#TotalItemscountfortaskOutBox')[_0xce5dff(0x299)]($('#tableTempTaskOutBox>tbody\x20tr')[_0xce5dff(0x272)])),$(_0xce5dff(0x25f))[_0xce5dff(0x272)]==0x1388&&(NextURLOutbox=null,$(_0xce5dff(0x2a1))[_0xce5dff(0x2c7)]()),_0xe9870e['length']>0x0&&GenerateTableTaskOutBox();});}function GenerateTableTaskOutBox(){var _0x3aaad2=a0_0x2b967a;sorterTaskOutBox=new TINY[(_0x3aaad2(0x1f6))][(_0x3aaad2(0x2c2))](_0x3aaad2(0x258),_0x3aaad2(0x2d7),{'ascclass':'asc','descclass':_0x3aaad2(0x248),'evenclass':'evenrow','oddclass':_0x3aaad2(0x2aa),'evenselclass':'evenselected','oddselclass':_0x3aaad2(0x2cf),'paginate':!![],'size':0xa,'colddid':'columnsOutBox','currentid':'currentpageTaskOutBox','totalid':_0x3aaad2(0x1fc),'startingrecid':_0x3aaad2(0x279),'endingrecid':_0x3aaad2(0x24e),'totalrecid':'totalrecordsTaskOutBox','pageddid':'pagedropdownOutBox','navid':_0x3aaad2(0x230),'sortdir':0x1,'init':!![]});}function taskDependencyOutbox(_0x2b64c0){var _0x229119=a0_0x2b967a,_0x4738ff=_spPageContextInfo[_0x229119(0x211)]+_0x229119(0x228)+_0x2b64c0+'\x27';$[_0x229119(0x237)]({'url':_0x4738ff,'type':_0x229119(0x2d3),'headers':{'accept':_0x229119(0x267)},'success':function(_0x360489){var _0x592d08=_0x229119;$(_0x592d08(0x1f8))[_0x592d08(0x29b)](''),$(_0x592d08(0x2ce))[_0x592d08(0x201)](_0x592d08(0x22b));var _0x43805a=_0x360489['d'][_0x592d08(0x294)],_0x32993d='';if(_0x43805a[_0x592d08(0x272)]>0x0){for(var _0x13052f=0x0;_0x13052f<_0x43805a[_0x592d08(0x272)];_0x13052f++){var _0x53dbeb=_0x43805a[_0x13052f]['Title'],_0x68c925=_0x43805a[_0x13052f][_0x592d08(0x233)],_0x10826e=_0x43805a[_0x13052f][_0x592d08(0x29d)],_0x50e949=_0x43805a[_0x13052f]['ID'],_0x1c0a86=_0x43805a[_0x13052f][_0x592d08(0x28b)][_0x592d08(0x28d)],_0x34f076=_0x43805a[_0x13052f][_0x592d08(0x20f)],_0x32b91b='';if(_0x34f076[_0x592d08(0x294)]!=null)for(var _0x2a9845=0x0;_0x2a9845<_0x34f076['results'][_0x592d08(0x272)];_0x2a9845++){var _0x443b8c=_0x34f076['results'][_0x2a9845]['Title'];_0x32b91b+=_0x443b8c+';';}_0x32b91b[_0x592d08(0x272)]>0x0&&(_0x32b91b=_0x32b91b[_0x592d08(0x261)](0x0,_0x32b91b['length']-0x1)),_0x10826e=='Active'?_0x32993d+='<tr>'+_0x592d08(0x234)+_0x53dbeb+'</div></td>'+_0x592d08(0x239)+_0x32b91b+'</td>'+_0x592d08(0x28c)+_0x43805a[_0x13052f]['ID']+_0x592d08(0x2c9)+_0x43805a[_0x13052f]['ID']+_0x592d08(0x260)+'</tr>':_0x32993d+=_0x592d08(0x23f)+_0x592d08(0x234)+_0x53dbeb+'</div></td>'+'<td\x20class=\x27text-center\x27>'+_0x32b91b+_0x592d08(0x1f9)+'<td\x20class=\x27text-center\x27><div>\x20<label\x20class=\x27switch\x27><input\x20type=\x27checkbox\x27\x20id=\x27btnToggle'+_0x43805a[_0x13052f]['ID']+_0x592d08(0x2c9)+_0x43805a[_0x13052f]['ID']+_0x592d08(0x260)+'</tr>';}$(_0x592d08(0x1f8))[_0x592d08(0x22a)](_0x32993d),$(_0x592d08(0x231))[_0x592d08(0x299)](_0x1c0a86);}},'error':function(_0x23686d){var _0xd6a640=_0x229119;console['log'](_0xd6a640(0x27d));}});}function CurrentProjectModuleForOutBox(_0x19ae22){var _0x3a00b4=a0_0x2b967a;$(_0x3a00b4(0x26d))['attr'](_0x3a00b4(0x255),![]),$(_0x3a00b4(0x26d))[_0x3a00b4(0x282)](),$(_0x3a00b4(0x262))[_0x3a00b4(0x246)]('#ProjectModuleTaskOutBox');var _0x5e1995=_0x3a00b4(0x1fd),_0x2f93db=_spPageContextInfo[_0x3a00b4(0x211)]+_0x3a00b4(0x24d)+_0x5e1995+'\x27)/items?$select=ID,Title,Project/ID,Project/ProjectName&$expand=Project&$filter=\x20ProjectId\x20eq\x20\x27'+_0x19ae22+'\x27';$[_0x3a00b4(0x237)]({'url':_0x2f93db,'type':_0x3a00b4(0x22c),'headers':{'Accept':_0x3a00b4(0x267)},'success':function(_0x2d5d7f){var _0x1b366b=_0x3a00b4,_0x3a04b0='',_0x255fcf=_0x2d5d7f['d'][_0x1b366b(0x294)],_0x290f7f='';$[_0x1b366b(0x1f1)](_0x255fcf,function(_0x5805a6,_0x3fc715){var _0x333ae7=_0x1b366b;_0x3fc715[_0x333ae7(0x28d)][_0x333ae7(0x272)]>0x1e?_0x290f7f=_0x3fc715[_0x333ae7(0x28d)]['substring'](0x0,0x1e)+_0x333ae7(0x2cd):_0x290f7f=_0x3fc715[_0x333ae7(0x28d)],_0x3a04b0+=_0x333ae7(0x26e)+_0x3fc715['ID']+_0x333ae7(0x25a)+_0x3fc715['Title']+'\x27>'+_0x290f7f+_0x333ae7(0x20b);}),$('#ProjectModuleTaskOutBox')[_0x1b366b(0x22a)](_0x3a04b0);},'error':function(_0xddcdca){var _0x3c45cc=_0x3a00b4;console[_0x3c45cc(0x2c8)](_0xddcdca['responseJSON']['error']);}});}function MutipleBaseFilterOnOutBox(){var _0x4974c7=a0_0x2b967a;$(_0x4974c7(0x2a1))['hide'](),$(_0x4974c7(0x2c4))[_0x4974c7(0x22b)]();var _0x37784a='',_0x45d2b7='';$(_0x4974c7(0x271))['val']()!='All'&&($(_0x4974c7(0x271))['val']()=='General\x20Task'?(value=null,_0x37784a+='and\x20ProjectFullName\x20eq\x20'+value+'\x20',_0x45d2b7+='<div\x20class=\x27upload-chip\x27>General\x20Task</div>'):(_0x37784a+=_0x4974c7(0x1f7)+$(_0x4974c7(0x271))[_0x4974c7(0x214)]()+'\x27\x20',_0x45d2b7+=_0x4974c7(0x2ca)+$(_0x4974c7(0x25b))[_0x4974c7(0x299)]()+_0x4974c7(0x298)));$('#ProjectModuleTaskOutBox')[_0x4974c7(0x214)]()!=_0x4974c7(0x2be)&&(_0x37784a+=_0x4974c7(0x2a6)+$(_0x4974c7(0x26d))[_0x4974c7(0x214)]()+'\x27\x20',_0x45d2b7+=_0x4974c7(0x2ca)+$(_0x4974c7(0x21a))[_0x4974c7(0x299)]()+_0x4974c7(0x298));$(_0x4974c7(0x225))[_0x4974c7(0x214)]()!='All'&&(_0x37784a+=_0x4974c7(0x1f4)+$(_0x4974c7(0x225))[_0x4974c7(0x214)]()+'\x27\x20',_0x45d2b7+=_0x4974c7(0x2ca)+$('#WorkTypeOfProjectOutbox\x20option:selected')[_0x4974c7(0x299)]()+'</div>');$(_0x4974c7(0x25d))[_0x4974c7(0x214)]()!=_0x4974c7(0x2be)&&(_0x37784a+=_0x4974c7(0x290)+$(_0x4974c7(0x25d))[_0x4974c7(0x214)]()+'\x27\x20',_0x45d2b7+=_0x4974c7(0x2ca)+$('#txtPriorityOutBox\x20option:selected')[_0x4974c7(0x299)]()+'</div>');$(_0x4974c7(0x275))[_0x4974c7(0x214)]()!='All'&&(_0x37784a+=_0x4974c7(0x249)+$(_0x4974c7(0x275))['val']()+'\x27\x20',_0x45d2b7+=_0x4974c7(0x2ca)+$(_0x4974c7(0x27a))['text']()+_0x4974c7(0x298));if($('#pplassignto_TopSpan_ResolvedList')['text']()!=''){var _0x4ffa94=getUserInformation('pplassignto');if(_0x4ffa94[_0x4974c7(0x272)]>0x0){_0x37784a+='and\x20(TaskAssignToId\x20eq\x20\x27'+_0x4ffa94[0x0]+'\x27\x20';for(var _0x2cb5c=0x0;_0x2cb5c<_0x4ffa94['length'];_0x2cb5c++){_0x4ffa94[_0x2cb5c]!=_0x4ffa94[0x0]&&(_0x37784a+=_0x4974c7(0x22f)+_0x4ffa94[_0x2cb5c]+'\x27');}_0x37784a+=')';}}if($(_0x4974c7(0x2a0))[_0x4974c7(0x214)]()!=null&&$(_0x4974c7(0x2a0))[_0x4974c7(0x214)]()!=''){var _0x144750=$(_0x4974c7(0x2a0))[_0x4974c7(0x214)](),_0x1b96ef=moment($(_0x4974c7(0x2a0))['val']())[_0x4974c7(0x212)]('yy-MM-DD');_0x37784a+=_0x4974c7(0x224)+_0x1b96ef+'\x27\x20',_0x45d2b7+=_0x4974c7(0x2ca)+$('#taskOut')[_0x4974c7(0x214)]()+_0x4974c7(0x298);}$(_0x4974c7(0x256))[_0x4974c7(0x282)](),$(_0x4974c7(0x256))['append'](_0x45d2b7);var _0x516c4d='?$top=100&$select=*,ClientID/ID,ClientID/Title,Module/Title,Author/Title,TaskAssignTo/Title,AttachmentFiles&$Expand=ClientID,Module,AttachmentFiles,Author,TaskAssignTo&$orderby=Modified\x20desc&$filter=AuthorId\x20eq\x20\x27'+_spPageContextInfo[_0x4974c7(0x2d8)]+_0x4974c7(0x2ab)+txtCompanyId+'\x27'+_0x37784a;FilterTaskDataForOutBox(_0x516c4d,_0x4974c7(0x24a));}function FilterTaskDataForOutBox(_0x37018a,_0x5340a3){var _0x3caa66=a0_0x2b967a,_0x1791ac=window[_0x3caa66(0x23b)][_0x3caa66(0x23d)]+'//'+window['location'][_0x3caa66(0x270)]+_spPageContextInfo['siteServerRelativeUrl'];$[_0x3caa66(0x25e)](getItemsWithQueryItem(_0x3caa66(0x2da),_0x37018a,'TaskOutbox'))[_0x3caa66(0x2c0)](function(_0x5587ce){var _0x389bf5=_0x3caa66;_0x5340a3==_0x389bf5(0x24a)&&$('#mainDivAreaTaskOutBox')[_0x389bf5(0x282)]();NextURLOutbox==null||NextURLOutbox==''?$(_0x389bf5(0x2c4))['hide']():$(_0x389bf5(0x2c4))[_0x389bf5(0x22b)]();var _0x42f743=_0x5587ce[_0x389bf5(0x294)],_0x124420='';for(var _0x2744ff=0x0;_0x2744ff<_0x42f743[_0x389bf5(0x272)];_0x2744ff++){var _0x573b28='',_0x546a87='',_0xb0b40c=_0x42f743[_0x2744ff][_0x389bf5(0x28d)],_0x183e2c=_0x42f743[_0x2744ff]['ID'],_0xde926e=_0x42f743[_0x2744ff][_0x389bf5(0x26c)],_0x59b78f=_0x42f743[_0x2744ff][_0x389bf5(0x243)][_0x389bf5(0x28d)],_0x38ba3b=_0x42f743[_0x2744ff][_0x389bf5(0x2a3)],_0x1d5bb6=_0x42f743[_0x2744ff]['ID'],_0x4341e3=_0x42f743[_0x2744ff][_0x389bf5(0x202)],_0x5882aa=new Date(_0x4341e3);_0x5882aa=new Date(_0x5882aa);var _0x4141ad=Math[_0x389bf5(0x2c5)](todayDate[_0x389bf5(0x219)]()-_0x5882aa['getTime']())/one_day;_0x4341e3!=null?(_0x4341e3=new Date(_0x4341e3),_0x4341e3=ShowCommonStandardDateFormat(_0x4341e3)):_0x4341e3='N/A';var _0x2c9b4b=_0x42f743[_0x2744ff][_0x389bf5(0x23c)],_0x148ca4='';if(_0x2c9b4b['results']['length']>0x0)var _0x148ca4=_0x2c9b4b[_0x389bf5(0x294)][0x0][_0x389bf5(0x28d)];var _0x2d7a58=_0x42f743[_0x2744ff][_0x389bf5(0x2b8)],_0x1a67b3=_0x42f743[_0x2744ff][_0x389bf5(0x204)];_0x1a67b3==_0x389bf5(0x291)?(_0x573b28=new Date(_0x42f743[_0x2744ff][_0x389bf5(0x207)]),_0x573b28=ShowCommonStandardDateFormat(_0x573b28)):_0x573b28=_0x389bf5(0x24f);var _0x580908=_0x42f743[_0x2744ff][_0x389bf5(0x288)];_0x580908==null&&(_0x580908=_0x389bf5(0x2bd));var _0x2f5c43='';if(_0x42f743[_0x2744ff]['Module']!=0x0){var _0x2f5c43=_0x42f743[_0x2744ff][_0x389bf5(0x27e)]['Title'];_0x2f5c43==null&&(_0x2f5c43='');}var _0x205709='';if(_0x42f743[_0x2744ff][_0x389bf5(0x24b)]!=0x0){var _0x205709=_0x42f743[_0x2744ff]['ClientID']['Title'];_0x205709==null&&(_0x205709='');}var _0x3e2807='';_0xde926e=='2'&&(_0x3e2807=_0x389bf5(0x2a2)+_0x205709+_0x389bf5(0x216));_0xde926e=='1'&&(_0x3e2807=_0x389bf5(0x215)+_0x2f5c43+_0x389bf5(0x216));var _0xba4f5f=_0x42f743[_0x2744ff][_0x389bf5(0x236)];_0xba4f5f==null&&(_0xba4f5f='');var _0x2b8537=_0x42f743[_0x2744ff][_0x389bf5(0x2b9)];(_0x2b8537==null||_0x2b8537==0x0)&&(_0x2b8537='');var _0x10e9c1='';_0x2b8537>0x0&&(_0x10e9c1=_0x389bf5(0x203)+_0x183e2c+_0x389bf5(0x2a8));var _0x160936=_0x42f743[_0x2744ff]['StartDate'],_0x2a264f='';_0x2c9b4b[_0x389bf5(0x294)]['length']>0x1&&(_0x2a264f=_0x389bf5(0x278)+_0x183e2c+'\x27)>Group</button>');var _0x451ece=_0x389bf5(0x2b5)+_0x1791ac+_0x389bf5(0x264)+txtCompanyId+'&TaskId='+window['btoa'](_0x183e2c)+_0x389bf5(0x28e)+window[_0x389bf5(0x2bc)](_0x389bf5(0x2ac))+_0x389bf5(0x24c)+_0xb0b40c+_0x389bf5(0x226);_0x4141ad>0x1&&_0x1a67b3==_0x389bf5(0x252)?_0x124420+='<tr>'+_0x389bf5(0x2d2)+_0x451ece+_0x389bf5(0x2d6)+_0x389bf5(0x268)+_0x580908+_0x389bf5(0x259)+_0x389bf5(0x239)+_0x389bf5(0x241)+_0x389bf5(0x281)+_0xba4f5f+_0x389bf5(0x2bb)+_0x389bf5(0x297)+_0x3e2807+_0x389bf5(0x2bf)+_0x389bf5(0x239)+'<p\x20class=\x27m-0\x20ellipsis-2\x27>'+_0x148ca4+'</p>'+_0x389bf5(0x295)+_0x2a264f+_0x389bf5(0x205)+_0x389bf5(0x239)+_0x389bf5(0x2b3)+_0x1a67b3+_0x389bf5(0x2bb)+_0x389bf5(0x238)+_0x4341e3+_0x389bf5(0x28f)+_0x389bf5(0x26b)+_0x2d7a58+'%\x27></div></div></td>'+_0x389bf5(0x239)+_0x389bf5(0x1fb)+_0x2b8537+_0x389bf5(0x1ee)+_0x10e9c1+_0x389bf5(0x1f9)+'<td\x20class=\x27text-center\x20vertical-align-middle\x27>'+_0x573b28+_0x389bf5(0x1f9)+'</tr>':_0x124420+=_0x389bf5(0x23f)+_0x389bf5(0x2d2)+_0x451ece+'<p\x20class=\x27m-0\x20mt-4\x20ellipsis-1\x27>'+_0x389bf5(0x268)+_0x580908+_0x389bf5(0x259)+_0x389bf5(0x239)+_0x389bf5(0x241)+_0x389bf5(0x281)+_0xba4f5f+'</p>'+'<p\x20class=\x27m-0\x20ellipsis-1\x20mt-29\x27>'+_0x3e2807+_0x389bf5(0x2bf)+_0x389bf5(0x239)+_0x389bf5(0x266)+_0x148ca4+_0x389bf5(0x2bb)+_0x389bf5(0x295)+_0x2a264f+_0x389bf5(0x205)+'<td\x20class=\x27text-center\x27>'+_0x389bf5(0x2b3)+_0x1a67b3+_0x389bf5(0x2bb)+'<p\x20class=\x27m-0\x20font-12\x27>Due:<span>'+_0x4341e3+'</span></p>'+_0x389bf5(0x26f)+_0x2d7a58+_0x389bf5(0x2cc)+_0x389bf5(0x239)+'<h4\x20class=\x27m-0\x27>'+_0x2b8537+_0x389bf5(0x1ee)+_0x10e9c1+_0x389bf5(0x1f9)+_0x389bf5(0x285)+_0x573b28+'</td>'+_0x389bf5(0x29f);}_0x42f743[_0x389bf5(0x272)]==0x0?$('#NoRecordFoundTaskOutBox')[_0x389bf5(0x22b)]():$(_0x389bf5(0x217))[_0x389bf5(0x2c7)](),$(_0x389bf5(0x296))[_0x389bf5(0x22a)](_0x124420),$(_0x389bf5(0x25f))[_0x389bf5(0x272)]>0x64&&NextURLOutbox!=null?($(_0x389bf5(0x27b))[_0x389bf5(0x2c7)](),$(_0x389bf5(0x1f3))['show'](),$('#DiplayOutboxCount')[_0x389bf5(0x299)]($(_0x389bf5(0x25f))[_0x389bf5(0x272)])):($(_0x389bf5(0x27b))['show'](),$('#ShowItemsOutbox')[_0x389bf5(0x2c7)](),$(_0x389bf5(0x2c6))['text'](_0x42f743[_0x389bf5(0x272)])),$(_0x389bf5(0x25f))[_0x389bf5(0x272)]==0x1388&&(NextURLOutbox=null,$('#SeeMoreFilterOutbox')[_0x389bf5(0x2c7)]()),_0x42f743[_0x389bf5(0x272)]>0x0&&GenerateTableTaskOutBox();});}function ClearFilterForOutbox(){var _0x1c334b=a0_0x2b967a;$('#UserAllProjectTaskOutBox')[_0x1c334b(0x214)](_0x1c334b(0x2be)),$(_0x1c334b(0x26d))['val'](_0x1c334b(0x2be)),$(_0x1c334b(0x225))[_0x1c334b(0x214)](_0x1c334b(0x2be)),$(_0x1c334b(0x25d))[_0x1c334b(0x214)]('All'),$('#taskOut')[_0x1c334b(0x214)]('')[_0x1c334b(0x210)](_0x1c334b(0x286),_0x1c334b(0x299))['attr'](_0x1c334b(0x286),_0x1c334b(0x21e)),$(_0x1c334b(0x275))[_0x1c334b(0x214)](_0x1c334b(0x252)),clearPeoplePickerControl(_0x1c334b(0x29e)),$(_0x1c334b(0x256))['empty']();var _0x37d5d0=_0x1c334b(0x252);GetTasksOutboxTasks(_0x37d5d0,_0x1c334b(0x29a));}function initializePeoplePicker(_0x3fca3b){var _0x1fad55=a0_0x2b967a,_0x119c98={};_0x119c98[_0x1fad55(0x244)]='User,DL,SecGroup,SPGroup',_0x119c98[_0x1fad55(0x2d4)]=0xf,_0x119c98['ResolvePrincipalSource']=0xf,_0x119c98[_0x1fad55(0x2b1)]=!![],_0x119c98['MaximumEntitySuggestions']=0x32,_0x119c98[_0x1fad55(0x1fa)]='280px',this[_0x1fad55(0x23a)](_0x3fca3b,null,_0x119c98);}function getUserInformation(_0x489a2b){var _0xd69535=a0_0x2b967a,_0x2b91f8=[],_0x51235c=this[_0xd69535(0x277)][_0xd69535(0x289)][_0x489a2b+'_TopSpan'];if(!_0x51235c['IsEmpty']()){if(_0x51235c[_0xd69535(0x2a9)])return![];else{if(!_0x51235c[_0xd69535(0x206)]())return![];else{if(_0x51235c['TotalUserCount']>0x0){var _0x3d56cd=_0x51235c[_0xd69535(0x245)](),_0x55650d='',_0x216d34='',_0x150af2='';for(var _0xcb53d9=0x0;_0xcb53d9<_0x3d56cd[_0xd69535(0x272)];_0xcb53d9++){var _0x53693b=_0x3d56cd[_0xcb53d9][_0xd69535(0x293)],_0x2d95af=GetUserID(_0x53693b);_0x2d95af!=-0x1&&_0x2b91f8['push'](_0x2d95af);}return _0x2b91f8;}}}}else return _0x150af2;}function GetUserID(_0x11cef4){var _0x4dbf0f=a0_0x2b967a,_0x26f296={'logonName':_0x11cef4},_0x39ffc9=-0x1,_0x3865f8=$['ajax']({'url':_spPageContextInfo['siteAbsoluteUrl']+_0x4dbf0f(0x22e),'type':'POST','async':![],'contentType':'application/json;odata=verbose','data':JSON[_0x4dbf0f(0x20d)](_0x26f296),'headers':{'Accept':_0x4dbf0f(0x267),'X-RequestDigest':$(_0x4dbf0f(0x221))[_0x4dbf0f(0x214)]()},'success':function(_0x517ef6){_0x39ffc9=_0x517ef6['d']['Id'];},'error':function(_0x24a3b9){failure(_0x24a3b9);}});return _0x39ffc9;}function clearPeoplePickerControl(_0x81d663){var _0x26f050=a0_0x2b967a,_0x202d11=_0x81d663+_0x26f050(0x26a),_0x5b739e=null,_0x246b51=this['SPClientPeoplePicker'][_0x26f050(0x289)];for(var _0x5a6fb6 in _0x246b51){if(_0x5a6fb6==_0x202d11){_0x5b739e=_0x246b51[_0x5a6fb6];break;}}if(_0x5b739e){var _0x5aa43c=$(document['getElementById'](_0x5b739e['ResolvedListElementId']))[_0x26f050(0x209)](_0x26f050(0x253));$(_0x5aa43c)[_0x26f050(0x1f1)](function(_0x56da93){var _0x531c67=_0x26f050;_0x5b739e[_0x531c67(0x2d0)](this);});}}function UpdatTaskDependency(_0x4e766f,_0xb546b1){var _0x196a4e=a0_0x2b967a;currentrowid=$(_0x4e766f)['attr']('id');var _0x1be2b9=_0x196a4e(0x273),_0xae8118=$('#'+currentrowid)[_0x196a4e(0x2b0)](_0x196a4e(0x240));_0xae8118?_0xae8118='Active':_0xae8118=_0x196a4e(0x2b4);var _0x557988,_0x342e9b=GetItemTypeForListName(_0x1be2b9);_0x557988={'__metadata':{'type':_0x342e9b},'Status':_0xae8118};var _0x31991e=$[_0x196a4e(0x276)]();return $[_0x196a4e(0x237)]({'url':_spPageContextInfo[_0x196a4e(0x211)]+_0x196a4e(0x24d)+_0x1be2b9+_0x196a4e(0x247)+_0xb546b1+'\x27)','type':_0x196a4e(0x1f0),'async':![],'headers':{'accept':_0x196a4e(0x267),'X-RequestDigest':$(_0x196a4e(0x221))['val'](),'content-Type':'application/json;odata=verbose','X-Http-Method':_0x196a4e(0x22d),'If-Match':'*'},'data':JSON[_0x196a4e(0x20d)](_0x557988),'success':function(_0x2385e6){var _0x8ce42c=_0x196a4e;_0x31991e[_0x8ce42c(0x223)](_0x2385e6);},'error':function(_0x5605b2){var _0x39861c=_0x196a4e;alert(JSON[_0x39861c(0x20d)](_0x5605b2)),_0x31991e['reject'](_0x5605b2);}}),_0x31991e['promise']();}