function a0_0x6a66(_0x1879ea,_0x17061e){var _0x42c3de=a0_0x42c3();return a0_0x6a66=function(_0x6a6687,_0x299b54){_0x6a6687=_0x6a6687-0x135;var _0x2c6aee=_0x42c3de[_0x6a6687];return _0x2c6aee;},a0_0x6a66(_0x1879ea,_0x17061e);}var a0_0x17144c=a0_0x6a66;(function(_0x56a44e,_0x35b652){var _0x2cf09e=a0_0x6a66,_0x4907e6=_0x56a44e();while(!![]){try{var _0x1c7fcb=-parseInt(_0x2cf09e(0x15a))/0x1*(parseInt(_0x2cf09e(0x15d))/0x2)+parseInt(_0x2cf09e(0x138))/0x3*(parseInt(_0x2cf09e(0x159))/0x4)+parseInt(_0x2cf09e(0x15e))/0x5+parseInt(_0x2cf09e(0x160))/0x6*(parseInt(_0x2cf09e(0x137))/0x7)+parseInt(_0x2cf09e(0x136))/0x8+parseInt(_0x2cf09e(0x14e))/0x9*(-parseInt(_0x2cf09e(0x148))/0xa)+-parseInt(_0x2cf09e(0x158))/0xb;if(_0x1c7fcb===_0x35b652)break;else _0x4907e6['push'](_0x4907e6['shift']());}catch(_0x2a0ec4){_0x4907e6['push'](_0x4907e6['shift']());}}}(a0_0x42c3,0x804c3));const siteUrl=_spPageContextInfo[a0_0x17144c(0x154)],selectedFolders=[];var zip=new JSZip(),listName=a0_0x17144c(0x14f);function downloadSelectedFilesAsZip(){var _0x4c66a9=a0_0x17144c,_0x4339a5=document['getElementsByName'](_0x4c66a9(0x149)),_0x18b50f=[];_0x4339a5[_0x4c66a9(0x13d)](function(_0x4fbf02){var _0x4d3ce0=_0x4c66a9;_0x4fbf02[_0x4d3ce0(0x161)]&&_0x18b50f[_0x4d3ce0(0x164)](_0x4fbf02[_0x4d3ce0(0x144)]);});var _0x48ceff=[],_0x211366=_0x18b50f['map'](function(_0x5c5159){return getFolderFilesAndSubFolders(_0x5c5159,_0x48ceff);});Promise['all'](_0x211366)[_0x4c66a9(0x155)](function(){var _0x1ff829=_0x4c66a9;zip=new JSZip();var _0x1fea0=_0x48ceff[_0x1ff829(0x153)](function(_0x595288){var _0x563aa8=_0x1ff829,_0x3dbecf=_spPageContextInfo[_0x563aa8(0x156)]+_0x595288;return fetch(_0x3dbecf)[_0x563aa8(0x155)](function(_0x2e45fe){var _0x3828cd=_0x563aa8;return _0x2e45fe[_0x3828cd(0x15c)]();})[_0x563aa8(0x155)](function(_0x31f0c6){var _0x1ccdb4=_0x563aa8,_0x6f5c47=_0x595288[_0x1ccdb4(0x135)](_0x595288['indexOf'](listName)+listName['length']+0x1);zip['file'](_0x6f5c47,_0x31f0c6);});});Promise[_0x1ff829(0x14c)](_0x1fea0)[_0x1ff829(0x155)](function(){dowloadZip();});});}function dowloadZip(){var _0x5be5c6=a0_0x17144c;zip[_0x5be5c6(0x142)]({'type':_0x5be5c6(0x15c)})[_0x5be5c6(0x155)](function(_0x208019){var _0x4b7ff8=_0x5be5c6,_0xf48ea7=document[_0x4b7ff8(0x150)]('a');_0xf48ea7[_0x4b7ff8(0x157)]=URL[_0x4b7ff8(0x13f)](_0x208019),_0xf48ea7[_0x4b7ff8(0x14a)]='files_'+new Date()['toJSON']()[_0x4b7ff8(0x140)](0x0,0x14)+_0x4b7ff8(0x152),_0xf48ea7[_0x4b7ff8(0x145)]();});}function getFilesFromLibrary(_0x12cae5){var _0x3896d5=a0_0x17144c,_0x54463c=_0x12cae5+_0x3896d5(0x163);$[_0x3896d5(0x13c)]({'url':_0x54463c,'type':_0x3896d5(0x13a),'headers':{'Accept':_0x3896d5(0x141)},'success':function(_0x34a847){var _0x1c4016=_0x3896d5,_0x8ff0b3=_0x34a847['d'][_0x1c4016(0x15b)],_0x1e65c8=[];_0x8ff0b3[_0x1c4016(0x13d)](function(_0x10a462){var _0xc4f236=_0x1c4016,_0x581aeb=_0x10a462[_0xc4f236(0x13e)][_0xc4f236(0x135)](_0x10a462[_0xc4f236(0x13e)]['lastIndexOf']('/')+0x1),_0x35507e={'name':_0x581aeb,'url':_0x10a462[_0xc4f236(0x13e)],'checkbox':_0xc4f236(0x14d)+_0x10a462[_0xc4f236(0x13e)]+'\x27>'};_0x1e65c8[_0xc4f236(0x164)](_0x35507e);});var _0x2e653e=_0x1c4016(0x146);_0x2e653e+='<tr><th>Select</th><th>Name</th></tr>',_0x1e65c8[_0x1c4016(0x13d)](function(_0x50afbd){var _0x193dae=_0x1c4016;_0x2e653e+='<tr><td>'+_0x50afbd['checkbox']+_0x193dae(0x162)+_0x50afbd[_0x193dae(0x14b)]+_0x193dae(0x139);}),_0x2e653e+=_0x1c4016(0x143),$(_0x1c4016(0x13b))['html'](_0x2e653e);},'error':function(_0x3849b9){console['log'](_0x3849b9);}});}function a0_0x42c3(){var _0x5768fc=['#fileList','ajax','forEach','FileRef','createObjectURL','slice','application/json;odata=verbose','generateAsync','</table>','value','click','<table>','Files','454890kBmovg','files','download','name','all','<input\x20type=\x27checkbox\x27\x20name=\x27files\x27\x20value=\x27','27LkVdhN','DemoLibrary','createElement','ServerRelativeUrl','.zip','map','webAbsoluteUrl','then','portalUrl','href','12441176mYPOtN','898516FTgClZ','930OqVxNC','results','blob','672kdycXb','1874355cDgIze','json','19746qGIVKJ','checked','</td><td>','/_api/web/lists/getByTitle(\x27DemoLibrary\x27)/items?$select=FileRef&$orderby=FileLeafRef&$filter=FSObjType\x20eq\x201','push','/_api/web/GetFolderByServerRelativeUrl(\x27','substring','1687400bsMNMm','1799CjUNhs','9iJKEoS','</td></tr>','GET'];a0_0x42c3=function(){return _0x5768fc;};return a0_0x42c3();}getFilesFromLibrary(siteUrl);async function getFolderFilesAndSubFolders(_0x52c8c2,_0x10a9e0){var _0x4cbf4b=a0_0x17144c,_0xaa9514=siteUrl+_0x4cbf4b(0x165)+_0x52c8c2+'\x27)?$expand=Folders,Files&$select=Name,ServerRelativeUrl,Folders,Files';return fetch(_0xaa9514,{'headers':{'Accept':_0x4cbf4b(0x141)}})[_0x4cbf4b(0x155)](function(_0x526ac9){var _0xfc8e8e=_0x4cbf4b;return _0x526ac9[_0xfc8e8e(0x15f)]();})['then'](function(_0x4ea336){var _0x498fc4=_0x4cbf4b,_0x22ac0d=_0x4ea336['d'][_0x498fc4(0x147)]['results'];_0x22ac0d['forEach'](function(_0x4eab02){var _0x198895=_0x498fc4;_0x10a9e0[_0x198895(0x164)](_0x4eab02[_0x198895(0x151)]);});var _0x44b574=_0x4ea336['d']['Folders'][_0x498fc4(0x15b)],_0x3cbc75=_0x44b574['map'](function(_0x27f77f){return getFolderFilesAndSubFolders(_0x27f77f['ServerRelativeUrl'],_0x10a9e0);});return Promise['all'](_0x3cbc75);});}