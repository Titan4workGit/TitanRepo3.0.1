(function(_0x58e077,_0x405d0b){var _0x44a6ad=a0_0x459e,_0x597c20=_0x58e077();while(!![]){try{var _0x36ef71=-parseInt(_0x44a6ad(0x1d0))/0x1+-parseInt(_0x44a6ad(0x1d9))/0x2+-parseInt(_0x44a6ad(0x1e0))/0x3*(-parseInt(_0x44a6ad(0x1d7))/0x4)+parseInt(_0x44a6ad(0x1d5))/0x5+-parseInt(_0x44a6ad(0x1e3))/0x6+-parseInt(_0x44a6ad(0x1df))/0x7+parseInt(_0x44a6ad(0x1cb))/0x8*(parseInt(_0x44a6ad(0x1d8))/0x9);if(_0x36ef71===_0x405d0b)break;else _0x597c20['push'](_0x597c20['shift']());}catch(_0x5d1ef7){_0x597c20['push'](_0x597c20['shift']());}}}(a0_0x48d6,0xb0b00),$(window)['ready'](function(){GetLoginUserClients(),setInterval(function(){GetLoginUserClients();},0x30d40);}));function GetLoginUserClients(){var _0x31189a=a0_0x459e,_0x355a4e=_spPageContextInfo['webAbsoluteUrl']+_0x31189a(0x1cd)+Logged_CompanyId+_0x31189a(0x1da)+_spPageContextInfo[_0x31189a(0x1dc)]+_0x31189a(0x1d4)+_spPageContextInfo[_0x31189a(0x1dc)]+_0x31189a(0x1d2);$['ajax']({'url':_0x355a4e,'headers':{'Accept':_0x31189a(0x1d3)},'async':!![],'success':function(_0x5772f1){var _0x567e0e=_0x31189a,_0x113b5e=[],_0x160db6=_0x5772f1['d']['results'],_0x45ddd3='';if(_0x160db6[_0x567e0e(0x1e2)]>0x0)for(i=0x0;i<_0x160db6['length'];i++){_0x113b5e[_0x567e0e(0x1c8)](_0x160db6[i]['ID']);}GetUnreadmsgCounts(_0x113b5e);},'error':function(_0x4f6c4e){var _0x2a1ef2=_0x31189a;console['log']('Error\x20in\x20AllActiveClients.'),console[_0x2a1ef2(0x1dd)](_0x4f6c4e);}});}var TotalNotification=0x0;function GetUnreadmsgCounts(_0x297e2b){var _0x4d985b=a0_0x459e;if(_0x297e2b[_0x4d985b(0x1e2)]>0x0){TotalNotification=0x0;for(var _0x14935a=0x0;_0x14935a<_0x297e2b[_0x4d985b(0x1e2)];_0x14935a++){dfds=$[_0x4d985b(0x1c6)](),NewQuery=_0x4d985b(0x1db)+_0x297e2b[_0x14935a]+_0x4d985b(0x1ca)+_spPageContextInfo[_0x4d985b(0x1dc)]+'\x27',url=_spPageContextInfo['webAbsoluteUrl']+_0x4d985b(0x1d6)+NewQuery,FilterRequestQueryData(url,_0x297e2b[_0x14935a],dfds);}}TotalNotification!=0x0&&($(_0x4d985b(0x1cf))['text'](TotalNotification),$(_0x4d985b(0x1cf))[_0x4d985b(0x1e1)](_0x4d985b(0x1de),_0x4d985b(0x1d1)));}function a0_0x459e(_0x5e8d39,_0x41c243){var _0x48d62d=a0_0x48d6();return a0_0x459e=function(_0x459e8e,_0x5419f7){_0x459e8e=_0x459e8e-0x1c6;var _0x5924e9=_0x48d62d[_0x459e8e];return _0x5924e9;},a0_0x459e(_0x5e8d39,_0x41c243);}function FilterRequestQueryData(_0x4fb484,_0xc35697){var _0xf59d2f=a0_0x459e,_0x35b2ea=[],_0x334029=_0x4fb484;return $[_0xf59d2f(0x1c7)]({'url':_0x334029,'headers':{'Accept':_0xf59d2f(0x1d3)},'async':![],'success':function(_0x5c0853){var _0x336921=_0xf59d2f,_0x1442d5=_0x5c0853['d']['results'],_0x11d2bf='';if(_0x1442d5[_0x336921(0x1e2)]>0x0)dfds=$[_0x336921(0x1c6)](),NewQuery='?$top=5000&$orderby=ID\x20asc&$select=ID,AuthorId&$skipToken=Paged=TRUE%26p_ID='+_0x1442d5[0x0]['LastMessageRead']+_0x336921(0x1ce)+_0xc35697+'\x27\x20and\x20AuthorId\x20ne\x20\x27'+_spPageContextInfo[_0x336921(0x1dc)]+_0x336921(0x1e4);else{}if(_0x1442d5[_0x336921(0x1e2)]>0x0){var _0x1f7bea=_spPageContextInfo['webAbsoluteUrl']+_0x336921(0x1c9)+NewQuery;$['ajax']({'url':_0x1f7bea,'headers':{'Accept':_0x336921(0x1d3)},'async':![],'success':function(_0x4fe6c8){var _0x20b1e9=_0x336921;_0x11d2bf=_0x4fe6c8['d']['results'],_0x11d2bf['length']>0x0&&(_0x11d2bf[_0x11d2bf['length']-0x1]['AuthorId']!=_spPageContextInfo[_0x20b1e9(0x1dc)]&&(TotalNotification=TotalNotification+_0x11d2bf['length']));},'error':function(_0x85d7f8){var _0x6b6a48=_0x336921;console['log'](_0x6b6a48(0x1cc)),console['log'](_0x85d7f8);}});}},'error':function(_0x1ec138){var _0x135c8c=_0xf59d2f;console[_0x135c8c(0x1dd)](_0x135c8c(0x1cc)),console[_0x135c8c(0x1dd)](_0x1ec138);}}),_0x35b2ea;}function a0_0x48d6(){var _0x2699d1=['7867962WgAQCk','\x27\x20and\x20(Initials\x20eq\x20\x27Parent\x27\x20or\x20Initials\x20eq\x20\x27Reply\x27))','Deferred','ajax','push','/_api/web/lists/getbytitle(\x27ContactCenter\x27)/items/','\x27\x20and\x20User/Id\x20eq\x20\x27','159440QkWnZa','Error\x20in\x20FilterRequestQueryData.','/_api/web/lists/getbytitle(\x27ClientMaster\x27)/items?$filter=CompanyID/Id\x20eq\x20\x27','&$filter=(WebPartName\x20eq\x20\x27ContactCenter\x27\x20and\x20Customer/Id\x20eq\x20\x27','#TotalNotifications','1384460onWftw','block','\x27)&$top=5000&$orderby=Title\x20asc','application/json;odata=verbose','\x27\x20or\x20InternalSupervisor/Id\x20eq\x20\x27','7158585qANfie','/_api/web/lists/getbytitle(\x27ContactCenterMsgCounts\x27)/items/','29188fMTegu','1629RYCMkj','2300968IWtvmJ','\x27\x20and\x20(InternalMembers/Id\x20eq\x20\x27','?$top=5000&$select=*,Client/MaxMsgID&$expand=Client&$filter=Client/Id\x20eq\x20\x27','userId','log','display','8544585VFcFZv','309kCeVfb','css','length'];a0_0x48d6=function(){return _0x2699d1;};return a0_0x48d6();}