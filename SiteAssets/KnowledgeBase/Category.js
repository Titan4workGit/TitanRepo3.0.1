var a0_0x5820b4=a0_0x3e56;(function(_0x493521,_0x5386b1){var _0xf7f083=a0_0x3e56,_0x443600=_0x493521();while(!![]){try{var _0x37a3a3=parseInt(_0xf7f083(0x85))/0x1*(-parseInt(_0xf7f083(0xaf))/0x2)+parseInt(_0xf7f083(0xcc))/0x3*(parseInt(_0xf7f083(0xa1))/0x4)+parseInt(_0xf7f083(0x88))/0x5*(parseInt(_0xf7f083(0xe7))/0x6)+parseInt(_0xf7f083(0x90))/0x7+-parseInt(_0xf7f083(0xc3))/0x8+-parseInt(_0xf7f083(0xca))/0x9*(-parseInt(_0xf7f083(0x9a))/0xa)+-parseInt(_0xf7f083(0xdd))/0xb*(-parseInt(_0xf7f083(0xc6))/0xc);if(_0x37a3a3===_0x5386b1)break;else _0x443600['push'](_0x443600['shift']());}catch(_0x3b14bb){_0x443600['push'](_0x443600['shift']());}}}(a0_0x4ab0,0xe5589));var currentDepartnemtUrls='',categoryId='',departmentID='',isCurrentUserAuthorizedtoKnowledgeAdmin=![];$(document)[a0_0x5820b4(0x9b)](function(){var _0x1a72ab=a0_0x5820b4;userActivityNotificationEntry(_spPageContextInfo[_0x1a72ab(0xd5)],window[_0x1a72ab(0x7e)]),$[_0x1a72ab(0x8b)]({'cache':![]}),departmentID=GetParameterValues(_0x1a72ab(0xb2));Logged_DepartmentId==departmentID?$(_0x1a72ab(0x8a))[_0x1a72ab(0xce)]():$('#btnAddNewTopic')[_0x1a72ab(0xb7)]();var _0x6ef9c2=titanForWork['getQueryStringParameter'](_0x1a72ab(0x92)),_0x33c545=new Array();_0x33c545[_0x1a72ab(0xa4)]('Knowledge');var _0x312819=UserExistInProcessApprover(_0x6ef9c2,departmentID,_0x33c545);for(var _0x3f4c4f=0x0;_0x3f4c4f<_0x312819[_0x1a72ab(0xa3)];_0x3f4c4f++){_0x312819[_0x3f4c4f][_0x1a72ab(0xc7)]==_0x1a72ab(0x9f)&&(isCurrentUserAuthorizedtoKnowledgeAdmin=!![]);}InitializationComponents(),$(_0x1a72ab(0xa8))[_0x1a72ab(0xb1)](function(){var _0x769c6d=_0x1a72ab;$('#txtCategory')['val'](''),$(_0x769c6d(0x99))[_0x769c6d(0x9c)](_0x769c6d(0xce));}),$(_0x1a72ab(0xc1))[_0x1a72ab(0xb1)](function(){var _0x543326=_0x1a72ab,_0x39e235=$(_0x543326(0xd0))[_0x543326(0x82)]()[_0x543326(0xa9)]();if(_0x39e235!=''&&_0x39e235!=null){var _0x1b64c0=categoryId;CategoryNameValidation(_0x39e235,_0x1b64c0)==0x0?_0x1b64c0==''||_0x1b64c0==null?AddNewCategory():UpdateCategory(_0x1b64c0):alert(_0x543326(0x96));}else alert(_0x543326(0xa5));}),$(_0x1a72ab(0x8a))[_0x1a72ab(0xb1)](function(){var _0x3e4ead=_0x1a72ab;departmentID>0x0&&(document['location']['href']=_0x3e4ead(0xac)+departmentID+_0x3e4ead(0xd6));}),isCurrentUserAuthorizedtoKnowledgeAdmin==![]&&$(_0x1a72ab(0xa8))[_0x1a72ab(0x79)]();});function InitializationComponents(){var _0x2fb34f=a0_0x5820b4;departmentID>0x0&&GetDepartmentUrl(_0x2fb34f(0x9e),departmentID);}function BindStatusChangeEvent(){var _0x3f5c01=a0_0x5820b4;$(_0x3f5c01(0x9d))[_0x3f5c01(0xcf)]()[_0x3f5c01(0xd4)](function(){var _0x550047=_0x3f5c01,_0xb67978=$(this)[_0x550047(0xad)]('id'),_0x353ff4=_0xb67978[_0x550047(0xd9)]('_')[0x1];$(this)['prop']('checked')?UpdateCategoryStatus(_0x353ff4,!![]):UpdateCategoryStatus(_0x353ff4,![]);});}function AddNewCategory(_0x2d0c2e){var _0x5704e7=a0_0x5820b4,_0x4f687d='KnowledgeBaseCategory',_0x327579=GetItemTypeForListName(_0x4f687d),_0x215ede;_0x215ede={'__metadata':{'type':_0x327579},'Status':!![],'Title':$('#txtCategory')['val']()[_0x5704e7(0xa9)](),'PublishedCounter':'0','PendingCounter':'0','DraftCounter':'0'},$[_0x5704e7(0xa0)](AddItemToList(_0x4f687d,_0x215ede))[_0x5704e7(0xb3)](function(_0x5200fb){var _0x329fb7=_0x5704e7;$(_0x329fb7(0x99))['modal'](_0x329fb7(0xb7)),$('#txtCategory')[_0x329fb7(0x82)](''),GetAllCategory(currentDepartnemtUrls),alert(_0x329fb7(0xbe));})[_0x5704e7(0xc0)](function(){var _0x35561d=_0x5704e7;console[_0x35561d(0x8f)](_0x35561d(0xe6));});;}function UpdateCategory(_0x4e0447){var _0x2e3076=a0_0x5820b4,_0x1f6e7a=_0x2e3076(0xbb),_0x64721=GetItemTypeForListName(_0x1f6e7a),_0x3b1d5e;_0x3b1d5e={'__metadata':{'type':_0x64721},'Title':$(_0x2e3076(0xd0))[_0x2e3076(0x82)]()[_0x2e3076(0xa9)]()},$[_0x2e3076(0xa0)](updateItemWithID(_0x1f6e7a,_0x3b1d5e,_0x4e0447))[_0x2e3076(0xb3)](function(_0x5a7a1e){var _0x2ff5e7=_0x2e3076;$(_0x2ff5e7(0x99))[_0x2ff5e7(0x9c)](_0x2ff5e7(0xb7)),$(_0x2ff5e7(0xd0))[_0x2ff5e7(0x82)](''),GetAllCategory(currentDepartnemtUrls),alert('Category\x20has\x20been\x20updated\x20successfully.');})[_0x2e3076(0xc0)](function(){var _0x363976=_0x2e3076;console[_0x363976(0x8f)](_0x363976(0xe6));});;}function UpdateCategoryStatus(_0x64d24a,_0x360cb3){var _0x5d4174=a0_0x5820b4,_0x40e409='KnowledgeBaseCategory',_0x4c4d3b=GetItemTypeForListName(_0x40e409),_0x3df7b0;_0x3df7b0={'__metadata':{'type':_0x4c4d3b},'Status':_0x360cb3},$['when'](updateItemWithID(_0x40e409,_0x3df7b0,_0x64d24a))[_0x5d4174(0xb3)](function(_0x2671f2){})[_0x5d4174(0xc0)](function(){var _0x2e87d7=_0x5d4174;console[_0x2e87d7(0x8f)](_0x2e87d7(0xe6));});;}function CategoryNameValidation(_0x4498c7,_0x2a592a){var _0x48839d=a0_0x5820b4,_0x56aa25=0x0,_0xc9343b='';_0x2a592a==''||_0x2a592a==null?_0xc9343b=_0x48839d(0xa6)+_0x4498c7+'\x27':_0xc9343b='ID,Modified,Status,Title&$filter=Title\x20eq\x20\x27'+_0x4498c7+_0x48839d(0xc9)+_0x2a592a+'\x27';var _0x5c61ba=currentDepartnemtUrls+_0x48839d(0x8c)+_0xc9343b;return $[_0x48839d(0x81)]({'url':_0x5c61ba,'headers':{'Accept':_0x48839d(0xc8)},'async':![],'success':function(_0x491c3e){var _0x2f5789=_0x48839d,_0x26250e=_0x491c3e['d'][_0x2f5789(0xc4)];_0x56aa25=_0x26250e[_0x2f5789(0xa3)];},'eror':function(_0x2541d6){var _0x589fbe=_0x48839d;console[_0x589fbe(0x8f)](_0x589fbe(0xbd));}}),_0x56aa25;}function GetAllCategory(_0x1b9667){var _0x34c001=a0_0x5820b4,_0x540f96=_0x34c001(0xb9);isCurrentUserAuthorizedtoKnowledgeAdmin!=!![]&&(_0x540f96=_0x540f96+_0x34c001(0xe0));var _0xb492ca=_0x1b9667+_0x34c001(0x8c)+_0x540f96;$['ajax']({'url':_0xb492ca,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x1a17e7){var _0xff8289=_0x34c001,_0x3efe65=_0x1a17e7['d']['results'],_0x14275e='';_0x14275e+=_0xff8289(0x87),_0x14275e+=_0xff8289(0x89),_0x14275e+='<tr>',_0x14275e+=_0xff8289(0xba),_0x14275e+=_0xff8289(0xd3),_0x14275e+='<th\x20bgcolor=\x22efefef\x22\x20data-localize=\x22Draft\x22>Draft</th>',_0x14275e+=_0xff8289(0xb6);isCurrentUserAuthorizedtoKnowledgeAdmin==!![]&&(_0x14275e+='<th\x20bgcolor=\x22efefef\x22\x20data-localize=\x22Status\x22>Status</th>',_0x14275e+=_0xff8289(0x7c));_0x14275e+='</tr>',_0x14275e+='</thead>',_0x14275e+=_0xff8289(0xa2);for(var _0x54c728=0x0;_0x54c728<_0x3efe65[_0xff8289(0xa3)];_0x54c728++){var _0x436686=_0x3efe65[_0x54c728][_0xff8289(0xdc)],_0x30415f=_0x3efe65[_0x54c728][_0xff8289(0x93)],_0x16c3b2='';_0x30415f==!![]&&(_0x16c3b2='checked');var _0x4697bc=new Date(_0x3efe65[_0x54c728][_0xff8289(0x8d)]),_0x24b158=_0x3efe65[_0x54c728]['PublishedCounter'];_0x24b158==null&&(_0x24b158=0x0);var _0x16cde0=_0x3efe65[_0x54c728][_0xff8289(0xdf)];_0x16cde0==null&&(_0x16cde0=0x0);var _0x5ba5c1=_0x3efe65[_0x54c728][_0xff8289(0xe8)];_0x5ba5c1==null&&(_0x5ba5c1=0x0);var _0x48985e=_0x3efe65[_0x54c728]['Description'];_0x14275e+=_0xff8289(0xa7),_0x14275e+=_0xff8289(0xbf)+_0x3efe65[_0x54c728]['ID']+_0xff8289(0xdb)+_0x436686+_0xff8289(0xe4),_0x14275e+='<td>'+_0x24b158+_0xff8289(0x78),_0x14275e+=_0xff8289(0x83)+_0x16cde0+'</td>',_0x24b158+_0x16cde0+_0x5ba5c1==0x0?_0x14275e+=_0xff8289(0x86):_0x14275e+='<td>'+ShowCommonDateFormat(_0x4697bc)+_0xff8289(0x78),isCurrentUserAuthorizedtoKnowledgeAdmin==!![]&&(_0x14275e+=_0xff8289(0x83),_0x14275e+=_0xff8289(0x97),_0x14275e+=_0xff8289(0xd1)+_0x3efe65[_0x54c728]['ID']+'\x22\x20type=\x22checkbox\x22\x20'+_0x16c3b2+'>',_0x14275e+='<span\x20class=\x22slider\x20round\x22></span></label></td>',_0x14275e+=_0xff8289(0x8e)+_0x3efe65[_0x54c728]['ID']+_0xff8289(0xbc)+escape(_0x436686)+_0xff8289(0xe2),_0x24b158+_0x16cde0+_0x5ba5c1==0x0&&(_0x14275e+='<span\x20class=\x22action-delete-button\x22><a\x20onclick=DeleteItemCategory(\x22'+_0x3efe65[_0x54c728]['ID']+_0xff8289(0xb8)),_0x14275e+=_0xff8289(0x78)),_0x14275e+=_0xff8289(0xab);}_0x14275e+=_0xff8289(0x94),_0x14275e+='</table>',$(_0xff8289(0x7d))[_0xff8289(0xc5)](''),$(_0xff8289(0x7d))[_0xff8289(0xd2)](_0x14275e),BindStatusChangeEvent();},'eror':function(_0x3952f3){var _0x2981c1=_0x34c001;console[_0x2981c1(0x8f)](_0x2981c1(0xbd));}});}function GetDepartmentUrl(_0x433286,_0x5e050f){var _0x4996f7=a0_0x5820b4,_0x2e5e4a=_spPageContextInfo[_0x4996f7(0xda)]+_0x4996f7(0xd8)+_0x5e050f+'\x27';$[_0x4996f7(0x81)]({'url':_0x2e5e4a,'headers':{'Accept':_0x4996f7(0xc8)},'async':!![],'success':function(_0x543971){var _0x474c7c=_0x4996f7,_0x39a034=_0x543971['d'][_0x474c7c(0xc4)];if(_0x39a034[_0x474c7c(0xa3)]>0x0){currentDepartnemtUrls=_0x39a034[0x0]['SiteURL'];var _0xdf727d=_0x39a034[0x0][_0x474c7c(0xaa)];$(_0x474c7c(0xc2))[_0x474c7c(0xc5)](_0xdf727d),GetAllCategory(currentDepartnemtUrls);}},'eror':function(_0x5a06e0){var _0x142745=_0x4996f7;console[_0x142745(0x8f)]($(_0x142745(0xb4))[_0x142745(0x82)]());}});}function updateItemWithID(_0xfa659a,_0x1fdc8e,_0xc108db){var _0x7a7466=a0_0x5820b4,_0x4adc2=$[_0x7a7466(0xcd)]();return $[_0x7a7466(0x81)]({'url':currentDepartnemtUrls+_0x7a7466(0x84)+_0xfa659a+_0x7a7466(0xcb)+_0xc108db+'\x27)','type':'POST','headers':{'accept':_0x7a7466(0xc8),'X-RequestDigest':$(_0x7a7466(0x95))['val'](),'content-Type':'application/json;odata=verbose','X-Http-Method':_0x7a7466(0x80),'If-Match':'*'},'data':JSON[_0x7a7466(0x7f)](_0x1fdc8e),'async':![],'success':function(_0x1a3fb6){var _0x208025=_0x7a7466;_0x4adc2[_0x208025(0x91)](!![]);},'error':function(_0x1ebc38){var _0x35a121=_0x7a7466;alert(JSON['stringify'](_0x1ebc38)),_0x4adc2[_0x35a121(0xe3)](_0x1ebc38);}}),_0x4adc2['promise']();}function a0_0x4ab0(){var _0x3f6711=['hide','\x22)><i\x20class=\x22fa\x20fa-trash\x22></i></a></span>','ID,Modified,Status,Title,PublishedCounter,PendingCounter,DraftCounter&$top=5000&$orderby=Modified\x20desc','<th\x20bgcolor=\x22efefef\x22\x20data-localize=\x22Category\x22>Category</th>','KnowledgeBaseCategory','\x22,\x22','error','Category\x20has\x20been\x20added\x20successfully.','<td><a\x20style=\x22cursor:pointer\x22\x20onclick=\x22RedirectOnCategoryTopics(','fail','#btnAddUpdateCategory','#deptName','12574776AOdLSs','results','html','12FALLlH','webPartName','application/json;odata=verbose','\x27\x20and\x20ID\x20ne\x20\x27','9FhdAHI','\x27)/GetItemById(\x27','1966881lopmjl','Deferred','show','unbind','#txtCategory','<input\x20id=\x22chkItemStatus_','append','<th\x20bgcolor=\x22efefef\x22\x20data-localize=\x22Published\x22>Published</th>','change','userId','&undefined=undefined','DELETE','/_api/web/lists/getbytitle(\x27Departments\x27)/items?$select=ID,SiteURL,DepartmentName&$filter=ID\x20eq\x20\x27','split','webAbsoluteUrl',')\x22>','Title','3365813qzGAXw','SP.Data.','DraftCounter','&$filter=Status\x20eq\x20\x271\x27','Are\x20you\x20sure,You\x20want\x20to\x20delete\x20this\x20category\x20?','\x22)><i\x20class=\x22fa\x20fa-edit\x22></i></a></span>','reject','<a></td>','&topiccategoryid=','Error\x20in\x20Category\x20Topic.','6215070QqWknD','PendingCounter','</td>','remove','charAt','href','<th\x20bgcolor=\x22efefef\x22\x20data-localize=\x22Action\x22>Action</th>','#categoryListItems','location','stringify','PATCH','ajax','val','<td>','/_api/web/lists/getbytitle(\x27','14DnEoaR','<td></td>','<table\x20class=\x22table\x20table2\x22>','5sYqpnM','<thead>','#btnAddNewTopic','ajaxSetup','/_api/web/lists/getbytitle(\x27KnowledgeBaseCategory\x27)/items?$select=','Modified','<td><span\x20class=\x22action-edit-button\x22><a\x20onclick=OpenUpdateModalPopup(\x22','log','4514734mtwcUF','resolve','CompanyId','Status','</tbody>','#__REQUESTDIGEST','Category\x20name\x20is\x20already\x20exist.','<label\x20class=\x22switch\x22>','indexOf','#myModal','15838730fXJzOQ','ready','modal','input[id^=\x27chkItemStatus_\x27]','Departments','Knowledge','when','4TcqmHX','<tbody\x20id=\x22listCollection\x22>','length','push','Please\x20enter\x20category.','ID,Modified,Status,Title&$filter=Title\x20eq\x20\x27','<tr>','#btnAddCateg','trim','DepartmentName','</tr>','../Pages/AddKnowledge.aspx?WebAppId=232&DepartmentId=','attr','toUpperCase','245006dvGYdn','slice','click','DepartmentId','done','#txtSomethingWentWrong','join','<th\x20bgcolor=\x22efefef\x22\x20data-localize=\x22LastUpdated\x22>Last\x20Updated</th>'];a0_0x4ab0=function(){return _0x3f6711;};return a0_0x4ab0();}function GetItemTypeForListName(_0x35552b){var _0x2265ff=a0_0x5820b4;return _0x2265ff(0xde)+_0x35552b[_0x2265ff(0x7a)](0x0)[_0x2265ff(0xae)]()+_0x35552b[_0x2265ff(0xd9)]('\x20')[_0x2265ff(0xb5)]('')[_0x2265ff(0xb0)](0x1)+'ListItem';}function a0_0x3e56(_0x44fa82,_0x3e451e){var _0x4ab082=a0_0x4ab0();return a0_0x3e56=function(_0x3e5678,_0x3494f5){_0x3e5678=_0x3e5678-0x78;var _0x59c501=_0x4ab082[_0x3e5678];return _0x59c501;},a0_0x3e56(_0x44fa82,_0x3e451e);}function AddItemToList(_0x2aacba,_0x21629d){var _0x553b0f=a0_0x5820b4,_0x212544=$[_0x553b0f(0xcd)]();restQuery='ID';var _0x4f03d8=currentDepartnemtUrls+_0x553b0f(0x84)+_0x2aacba+'\x27)/items?$select='+restQuery;return $[_0x553b0f(0x81)]({'url':_0x4f03d8,'type':'POST','async':![],'headers':{'accept':'application/json;odata=verbose','X-RequestDigest':$(_0x553b0f(0x95))[_0x553b0f(0x82)](),'content-Type':'application/json;odata=verbose'},'data':JSON[_0x553b0f(0x7f)](_0x21629d),'success':function(_0x47387d){var _0x1ffcd6=_0x553b0f,_0x2a24e8=_0x47387d['d']['ID'];_0x212544[_0x1ffcd6(0x91)](_0x47387d);},'error':function(_0x54b075){var _0x4655b0=_0x553b0f;alert(JSON[_0x4655b0(0x7f)](_0x54b075)),_0x212544[_0x4655b0(0xe3)](_0x54b075);}}),_0x212544['promise']();}function DeleteItemCategory(_0x4d32ba){var _0x4a02fc=a0_0x5820b4,_0x5104b5=confirm(_0x4a02fc(0xe1));if(_0x5104b5==!![]){var _0x3b0ddb=$[_0x4a02fc(0xcd)](),_0x332f74=currentDepartnemtUrls+'/_api/web/lists/getbytitle(\x27KnowledgeBaseCategory\x27)/items('+_0x4d32ba+')';return $['ajax']({'url':_0x332f74,'type':_0x4a02fc(0xd7),'contentType':_0x4a02fc(0xc8),'headers':{'Accept':_0x4a02fc(0xc8),'X-RequestDigest':$(_0x4a02fc(0x95))['val'](),'IF-MATCH':'*','X-HTTP-Method':_0x4a02fc(0xd7)},'success':function(_0x37c4db){var _0x2bb853=_0x4a02fc;GetAllCategory(currentDepartnemtUrls),_0x3b0ddb[_0x2bb853(0x91)](_0x37c4db);},'error':function(_0x524eac){var _0x22cbe8=_0x4a02fc;_0x3b0ddb[_0x22cbe8(0xe3)](JSON[_0x22cbe8(0x7f)](_0x524eac));}}),_0x3b0ddb['promise']();}}function OpenUpdateModalPopup(_0x32557f,_0x3e0efd){var _0x352653=a0_0x5820b4;categoryId=_0x32557f,_0x3e0efd=unescape(_0x3e0efd),$(_0x352653(0xd0))['val'](_0x3e0efd),$(_0x352653(0x99))[_0x352653(0x9c)](_0x352653(0xce));}function RedirectOnCategoryTopics(_0x128e17){var _0x127801=a0_0x5820b4;departmentID>0x0&&(document['location']['href']='../Pages/Topics.aspx?WebAppId=232&DepartmentId='+departmentID+_0x127801(0xe5)+_0x128e17+'&undefined=undefined');}function GetParameterValues(_0x2cfe27){var _0x1d0b8f=a0_0x5820b4,_0x3ea336=window[_0x1d0b8f(0x7e)]['href']['slice'](window['location'][_0x1d0b8f(0x7b)][_0x1d0b8f(0x98)]('?')+0x1)[_0x1d0b8f(0xd9)]('&');for(var _0x5e5f37=0x0;_0x5e5f37<_0x3ea336['length'];_0x5e5f37++){var _0x54a134=_0x3ea336[_0x5e5f37][_0x1d0b8f(0xd9)]('=');if(_0x54a134[0x0]==_0x2cfe27)return _0x54a134[0x1];}}