(function(_0x3df748,_0x5f0e51){var _0x2239fd=a0_0x8b97,_0x5b02b2=_0x3df748();while(!![]){try{var _0x2282bf=-parseInt(_0x2239fd(0x188))/0x1*(parseInt(_0x2239fd(0x189))/0x2)+-parseInt(_0x2239fd(0x18e))/0x3*(-parseInt(_0x2239fd(0x194))/0x4)+-parseInt(_0x2239fd(0x1ae))/0x5+parseInt(_0x2239fd(0x199))/0x6*(parseInt(_0x2239fd(0x19c))/0x7)+-parseInt(_0x2239fd(0x1c8))/0x8*(parseInt(_0x2239fd(0x19e))/0x9)+parseInt(_0x2239fd(0x1ba))/0xa*(parseInt(_0x2239fd(0x1b2))/0xb)+parseInt(_0x2239fd(0x1b3))/0xc*(parseInt(_0x2239fd(0x1a7))/0xd);if(_0x2282bf===_0x5f0e51)break;else _0x5b02b2['push'](_0x5b02b2['shift']());}catch(_0x5d51b1){_0x5b02b2['push'](_0x5b02b2['shift']());}}}(a0_0x215f,0x84698));function uploadFile(){var _0x30238f=a0_0x8b97,_0x583e2f=document[_0x30238f(0x183)](_0x30238f(0x1a0));file=_0x583e2f[_0x30238f(0x1a1)][0x0],initiateUpload(file,'DemoLibrary');}function a0_0x8b97(_0x343fc7,_0x526362){var _0x215fb8=a0_0x215f();return a0_0x8b97=function(_0x8b9726,_0x3c4143){_0x8b9726=_0x8b9726-0x17f;var _0x1ff58b=_0x215fb8[_0x8b9726];return _0x1ff58b;},a0_0x8b97(_0x343fc7,_0x526362);}function completeUpload(){var _0x259922=a0_0x8b97;$[_0x259922(0x182)]({'url':uploadUrl+'&uploadId='+uploadId+_0x259922(0x195),'type':_0x259922(0x1c2),'headers':{'Accept':_0x259922(0x1b1),'X-RequestDigest':$(_0x259922(0x180))[_0x259922(0x1ad)]()},'success':function(_0x5d40aa){var _0x56320d=_0x259922;console[_0x56320d(0x193)](_0x56320d(0x1c0)),progressBar[_0x56320d(0x1c1)](_0x56320d(0x19b),'100%'),progressText[_0x56320d(0x1a2)](_0x56320d(0x1b7));},'error':function(_0x1dca34){var _0x21ab60=_0x259922;console[_0x21ab60(0x193)](_0x1dca34);}});}function initiateUpload(_0x29816f,_0x39a0ad){var _0x2560fe=a0_0x8b97,_0x2b0171=_spPageContextInfo[_0x2560fe(0x1b5)]+_0x2560fe(0x190)+_0x39a0ad+_0x2560fe(0x18d)+_0x29816f[_0x2560fe(0x198)]+_0x2560fe(0x18b);$['ajax']({'url':_0x2b0171,'type':_0x2560fe(0x1c2),'headers':{'Accept':'application/json;\x20odata=verbose','X-RequestDigest':$(_0x2560fe(0x180))['val']()},'success':function(_0x3577ea){var _0x2ddee8=_0x2560fe;getUploadId(_0x3577ea['d']['ServerRelativeUrl'])[_0x2ddee8(0x1c5)](function(_0x47f1ea){uploadFiles(_0x29816f,_0x47f1ea);});},'error':function(_0x40fde4){var _0x1f05b8=_0x2560fe;console[_0x1f05b8(0x193)](_0x40fde4);}});}function getUploadId(_0x3f59ff){var _0x1e2df2=a0_0x8b97,_0x305f47=_spPageContextInfo[_0x1e2df2(0x1b5)]+_0x1e2df2(0x1b9)+_0x3f59ff+_0x1e2df2(0x1a6);return $['ajax']({'url':_0x305f47,'method':_0x1e2df2(0x1c2),'headers':{'Accept':'application/json;\x20odata=verbose','Content-Type':_0x1e2df2(0x1b1),'X-RequestDigest':$(_0x1e2df2(0x180))['val']()}})[_0x1e2df2(0x1c5)](function(_0x14de8e){var _0x1326b4=_0x1e2df2;return _0x14de8e['d'][_0x1326b4(0x192)];});}function a0_0x215f(){var _0x1f6452=['File\x20uploaded\x20successfully.','css','POST','value','promise','then','X-File-Size','\x27,overwrite=true)','8riZZTC','ceil','#__REQUESTDIGEST','innerHTML','ajax','getElementById','round','readAsArrayBuffer','X-RequestDigest','__REQUESTDIGEST','3217mfRJIY','538OoRSyF','Deferred','\x27,\x20overwrite=true)','onload','\x27)/Files/add(url=\x27','8961NuKNju','onerror','/_api/web/getfolderbyserverrelativeurl(\x27','onreadystatechange','UploadId','log','324MmZWaK','&@target=\x27fileUrl\x27','min','slice','name','900lHDJIn','bytes\x20','width','38185cuFSlY','onloadend','6961419YNsSbZ','open','fileInput','files','text','byteLength','max','Uploading...\x20','\x27)/createuploadsession','2483351cNKiig','result','target','status','application/octet-stream','Content-Type','val','4637835zVITcd','\x27)/startupload(uploadId=guid\x27','\x27)/finishupload(uploadId=guid\x27','application/json;\x20odata=verbose','2862079GRjTZO','96ofGzLE','size','webAbsoluteUrl','Failed\x20to\x20upload\x20file\x20chunk','100%','X-File-Chunk-End','/_api/web/getfilebyserverrelativeurl(\x27','20hdpfKA','progressLabel','/_api/web/GetFolderByServerRelativeUrl(\x27DemoLibrary\x27)/Files/Add(url=\x27','progressBar','DONE','setRequestHeader'];a0_0x215f=function(){return _0x1f6452;};return a0_0x215f();}function uploadFiles(_0x26dcd1,_0x37398a){var _0x15904f=a0_0x8b97,_0x69234d=_0x26dcd1['size'],_0x3ab2e3=0x400*0x400*0x2,_0x2ac7c5=Math[_0x15904f(0x17f)](_0x69234d/_0x3ab2e3),_0x2bb530=0x0,_0x1381cc=0x0,_0x15b46c=0x0,_0x1c6042=_spPageContextInfo[_0x15904f(0x1b5)]+_0x15904f(0x1b9)+_0x26dcd1[_0x15904f(0x198)]+_0x15904f(0x1af)+_0x37398a+'\x27)',_0x3e7334=document[_0x15904f(0x183)](_0x15904f(0x1bd));_0x3e7334[_0x15904f(0x1c3)]=0x0,_0x3e7334[_0x15904f(0x1a4)]=0x64;function _0x36f6f9(){var _0x3276b7=_0x15904f,_0x5481f9=_0x26dcd1[_0x3276b7(0x197)](_0x1381cc,_0x1381cc+_0x3ab2e3),_0x1a1e9a=new FileReader();_0x1a1e9a[_0x3276b7(0x18c)]=function(_0x228fa5){var _0x5c962d=_0x3276b7,_0x2be59e=_0x228fa5[_0x5c962d(0x1a9)][_0x5c962d(0x1a8)],_0x38f4ef=_0x2be59e[_0x5c962d(0x1a3)],_0x43c04e=_0x5c962d(0x19a)+_0x1381cc+'-'+(_0x1381cc+_0x38f4ef-0x1)+'/'+_0x69234d;$[_0x5c962d(0x182)]({'url':_0x1c6042+'&'+_0x43c04e,'type':_0x5c962d(0x1c2),'data':_0x2be59e,'processData':![],'headers':{'Accept':_0x5c962d(0x1b1),'Content-Length':_0x38f4ef,'Content-Range':_0x43c04e,'X-RequestDigest':$('#__REQUESTDIGEST')[_0x5c962d(0x1ad)]()},'success':function(_0x1fb28b){var _0x42d0dd=_0x5c962d;_0x2bb530++,_0x1381cc+=_0x3ab2e3,_0x15b46c=_0x1381cc/_0x69234d*0x64,_0x3e7334[_0x42d0dd(0x1c3)]=_0x15b46c,_0x2bb530<_0x2ac7c5?_0x36f6f9():finalizeUpload(_0x26dcd1,_0x37398a);},'error':function(_0x13eef1){console['log'](_0x13eef1);}});},_0x1a1e9a[_0x3276b7(0x185)](_0x5481f9);}_0x36f6f9();}function finalizeUpload(_0x4c5c97,_0x4dfa7e){var _0x4d84b6=a0_0x8b97,_0x3a491b=_spPageContextInfo[_0x4d84b6(0x1b5)]+_0x4d84b6(0x1b9)+_0x4c5c97[_0x4d84b6(0x198)]+_0x4d84b6(0x1b0)+_0x4dfa7e+'\x27)';$['ajax']({'url':_0x3a491b,'type':_0x4d84b6(0x1c2),'headers':{'Accept':_0x4d84b6(0x1b1),'X-RequestDigest':$(_0x4d84b6(0x180))[_0x4d84b6(0x1ad)]()},'success':function(_0x48a61b){},'error':function(_0x3594d1){var _0x1e42dc=_0x4d84b6;console[_0x1e42dc(0x193)](_0x3594d1);}});}function uploadFileToSharePoint(){var _0x10c46a=a0_0x8b97,_0x2e46f8=document['getElementById']('fileInput'),_0x3d715f=_0x2e46f8[_0x10c46a(0x1a1)][0x0],_0x516c98=_0x3d715f[_0x10c46a(0x1b4)],_0x49c36a=0x400*0x400*0x2,_0x4ec047=0x0,_0x2f1c63=document['getElementById']('progressBar'),_0x285ce8=function(_0x1b3699,_0x135034){var _0x2bd85e=_0x10c46a,_0x5c61f2=_0x3d715f[_0x2bd85e(0x197)](_0x1b3699,_0x135034),_0x50db71=_0x5c61f2[_0x2bd85e(0x1b4)],_0x4b5186=new FileReader();_0x4b5186['onload']=function(_0x280415){var _0x31dabf=_0x2bd85e,_0x1726e2=_0x280415['target']['result'],_0x2c3299=_spPageContextInfo[_0x31dabf(0x1b5)]+_0x31dabf(0x1bc)+_0x3d715f['name']+_0x31dabf(0x18b),_0x5b8e0f=new Uint8Array(_0x1726e2),_0x116f92=new XMLHttpRequest();_0x116f92[_0x31dabf(0x19f)]('POST',_0x2c3299,!![]),_0x116f92[_0x31dabf(0x1bf)](_0x31dabf(0x1ac),_0x31dabf(0x1ab)),_0x116f92[_0x31dabf(0x1bf)](_0x31dabf(0x186),document[_0x31dabf(0x183)](_0x31dabf(0x187))[_0x31dabf(0x1c3)]),_0x116f92[_0x31dabf(0x1bf)]('X-File-Name',_0x3d715f['name']),_0x116f92[_0x31dabf(0x1bf)](_0x31dabf(0x1c6),_0x3d715f['size']),_0x116f92['setRequestHeader']('X-File-Chunk-Size',_0x49c36a),_0x116f92['setRequestHeader']('X-File-Chunk-Start',_0x1b3699),_0x116f92[_0x31dabf(0x1bf)](_0x31dabf(0x1b8),_0x135034),_0x116f92[_0x31dabf(0x191)]=function(){var _0x37f14b=_0x31dabf;if(_0x116f92['readyState']==0x4&&_0x116f92[_0x37f14b(0x1aa)]==0xc8){_0x4ec047+=_0x50db71;var _0xb20a7d=Math[_0x37f14b(0x184)](_0x4ec047/_0x516c98*0x64);_0x2f1c63['value']=_0xb20a7d,document[_0x37f14b(0x183)](_0x37f14b(0x1bb))['innerHTML']=_0x37f14b(0x1a5)+_0xb20a7d+'%',_0x4ec047<_0x516c98?_0x285ce8(_0x4ec047,_0x4ec047+_0x49c36a):alert(_0x37f14b(0x1c0));}},_0x116f92['send'](_0x5b8e0f);},_0x4b5186[_0x2bd85e(0x185)](_0x5c61f2);};_0x285ce8(0x0,_0x49c36a);}function uploadFileToSharePoints(_0xc85851,_0x35103b,_0x3e16a7,_0x4bd283){var _0x5be628=a0_0x8b97,_0xb93d40=_0xc85851[_0x5be628(0x1b4)],_0x1a0ff5=0x0,_0x4bf1e3=0x0,_0x383df8=document[_0x5be628(0x183)](_0x5be628(0x1bd));_0x383df8['value']=0x0,_0x383df8[_0x5be628(0x1a4)]=0x64;var _0xfd9a72=function(_0x57f7e1,_0x46de4d){var _0x196360=_0x5be628,_0x2b0ce9=_0xc85851['slice'](_0x57f7e1,_0x46de4d),_0x2dd030=_0x2b0ce9['size'],_0x153efc=new FileReader();_0x153efc[_0x196360(0x19d)]=function(_0xfa3202){var _0xf2ad31=_0x196360;if(_0xfa3202[_0xf2ad31(0x1a9)]['readyState']!==FileReader[_0xf2ad31(0x1be)])return;var _0x5966f2=_0xfa3202[_0xf2ad31(0x1a9)][_0xf2ad31(0x1a8)],_0x47dfe7=_0x2dd030,_0x1a07c3={'X-RequestDigest':_0x3e16a7,'Content-Range':_0xf2ad31(0x19a)+_0x57f7e1+'-'+(_0x46de4d-0x1)+'/'+_0xb93d40};$[_0xf2ad31(0x182)]({'url':_0x35103b,'type':'POST','data':_0x5966f2,'headers':_0x1a07c3,'processData':![],'success':function(_0x52cc0c){var _0x581008=_0xf2ad31;_0x1a0ff5+=_0x2dd030,_0x4bf1e3=Math[_0x581008(0x184)](_0x1a0ff5/_0xb93d40*0x64),_0x383df8[_0x581008(0x1c3)]=_0x4bf1e3,document[_0x581008(0x183)](_0x581008(0x1bb))[_0x581008(0x181)]='Uploading...\x20'+_0x4bf1e3+'%',_0x1a0ff5==_0xb93d40?alert('File\x20uploaded\x20successfully'):_0xfd9a72(_0x46de4d,Math[_0x581008(0x196)](_0x46de4d+_0x4bd283,_0xb93d40));},'error':function(_0x47caee,_0x2e89f1,_0x3f3e80){var _0x5bf1bb=_0xf2ad31;alert(_0x5bf1bb(0x1b6));}});},_0x153efc['readAsArrayBuffer'](_0x2b0ce9);};_0xfd9a72(0x0,Math[_0x5be628(0x196)](_0x4bd283,_0xb93d40));}function getFileBuffer(_0x10ff35){var _0x5945e2=a0_0x8b97,_0x26e314=$[_0x5945e2(0x18a)](),_0x5c4c43=new FileReader();return _0x5c4c43['onloadend']=function(_0x30adc8){var _0x333d81=_0x5945e2;_0x26e314['resolve'](_0x30adc8[_0x333d81(0x1a9)][_0x333d81(0x1a8)]);},_0x5c4c43[_0x5945e2(0x18f)]=function(_0x58bb3c){var _0xe925c8=_0x5945e2;_0x26e314['reject'](_0x58bb3c[_0xe925c8(0x1a9)]['error']);},_0x5c4c43['readAsArrayBuffer'](_0x10ff35),_0x26e314[_0x5945e2(0x1c4)]();}function uploadFilessss(){var _0x214d1f=a0_0x8b97,_0xa6e493=document[_0x214d1f(0x183)]('fileInput'),_0x4285f1=_0xa6e493[_0x214d1f(0x1a1)][0x0],_0x511d53=_spPageContextInfo['webAbsoluteUrl']+'/_api/web/lists/getbytitle(\x27DemoLibrary\x27)/rootfolder/files/add(url=\x27'+_0x4285f1[_0x214d1f(0x198)]+_0x214d1f(0x1c7),_0x6a5f30=0xa00000,_0x129e0f=$(_0x214d1f(0x180))[_0x214d1f(0x1ad)]();getFileBuffer(_0x4285f1)[_0x214d1f(0x1c5)](function(_0x3bb36f){uploadFileToSharePoints(_0x4285f1,_0x511d53,_0x129e0f,_0x6a5f30);});}