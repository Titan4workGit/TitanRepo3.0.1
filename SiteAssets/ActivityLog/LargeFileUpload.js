(function(_0x5506e2,_0xcec069){var _0x100dd8=a0_0x62d0,_0x110417=_0x5506e2();while(!![]){try{var _0x2e2ccb=-parseInt(_0x100dd8(0x11e))/0x1*(parseInt(_0x100dd8(0xf7))/0x2)+parseInt(_0x100dd8(0xeb))/0x3*(-parseInt(_0x100dd8(0xfb))/0x4)+-parseInt(_0x100dd8(0x104))/0x5+-parseInt(_0x100dd8(0x11b))/0x6+-parseInt(_0x100dd8(0x106))/0x7+parseInt(_0x100dd8(0x119))/0x8*(parseInt(_0x100dd8(0xe6))/0x9)+parseInt(_0x100dd8(0xfc))/0xa;if(_0x2e2ccb===_0xcec069)break;else _0x110417['push'](_0x110417['shift']());}catch(_0x20c108){_0x110417['push'](_0x110417['shift']());}}}(a0_0x3266,0xb1ddc));var libraryNametr='DemoLibrary',fileName='',fileSize=0x0,chunkSize=0xa00000,totalChunks=0x0,currentChunk=0x0,uploadId='',fileBuffer=null;function uploadFile(){$['ajax']({'cache':![],'beforeSend':function(){var _0x1e0c1c=a0_0x62d0;$(_0x1e0c1c(0xee))[_0x1e0c1c(0xe7)]();},'success':function(_0x2b62cb){var _0x1963bd=a0_0x62d0,_0x31561b=document[_0x1963bd(0x130)](_0x1963bd(0xf1)),_0x1afbda=_0x31561b[_0x1963bd(0xe4)][0x0];fileName=_0x1afbda[_0x1963bd(0xe9)],fileSize=_0x1afbda[_0x1963bd(0x112)],totalChunks=Math[_0x1963bd(0x123)](fileSize/chunkSize),currentChunk=0x0,uploadId='',SP[_0x1963bd(0x121)][_0x1963bd(0x127)]('sp.js',_0x1963bd(0x111),function(){var _0x24c4ac=_0x1963bd;SP[_0x24c4ac(0x121)]['executeFunc']('sp.requestexecutor.js','SP.RequestExecutor',function(){uploadLargeFileToSharePoint();});});}});}function a0_0x3266(){var _0x30eb6c=['fadeOut','val','8BSzgaB','28817490ISRKuP','X-RequestDigest','byteLength','https://<your_sharepoint_site>/_api/web/GetFolderByServerRelativeUrl(\x27','padStart','X-File-Total-Chunks','application/json;odata=verbose','css','1478015tzerQN','/_api/web/GetFolderByServerRelativeUrl(\x27','1795689moqBPO','round','open','RequestExecutor','File\x20upload\x20failed.','parse','Accept','ajax','readAsArrayBuffer','text','Content-Type','SP.ClientContext','size','getMinutes','getSeconds','application/json;\x20odata=verbose','X-File-Name','innerHTML','slice','66320ypvJOL','webAbsoluteUrl','6153150enQnFb','error','Upload\x20complete','22160VTORZo','Failed\x20to\x20upload\x20chunk:\x20','X-File-Chunk','SOD','bytes\x20','ceil','type','#__REQUESTDIGEST','send','executeFunc','progressBar','X-File-Size','POST','X-File-Type','application/octet-stream','attr','#progressBar','result','getElementById','min','Upload\x20failed','setRequestHeader','target','\x27,\x20overwrite=true)?@target=new&contentclass=STS_ListItem_DocumentLibrary','responseText','files','/_api/web/lists/getByTitle(\x27DemoLibrary\x27)/RootFolder/Files/add(url=\x27','612Xxdfgd','fadeIn','time','name','onload','1476231UuXWDn','aria-valuenow','Uploading...\x20','#overlaysearch','value','progressLabel','fileInput','\x27,\x20overwrite=true)','onerror','\x27)/Files/Add(url=\x27','getHours','toString','14VJieec','executeAsync'];a0_0x3266=function(){return _0x30eb6c;};return a0_0x3266();}function uploadLargeFile(_0x38acc5){var _0x34d451=a0_0x62d0,_0x1d6245=_0x38acc5[_0x34d451(0x112)],_0x58f949=0xc0000000,_0x33e1a2=0x0,_0x4ad3f6=this,_0x48e9be=new FileReader();_0x48e9be[_0x34d451(0xea)]=function(){var _0x2bcecb=_0x34d451;if(_0x33e1a2>=_0x1d6245)return;var _0x32ae11=_0x48e9be[_0x2bcecb(0x12f)],_0x77fb7d=_0x2bcecb(0xff)+libraryNametr+_0x2bcecb(0xf4)+_0x38acc5[_0x2bcecb(0xe9)]+_0x2bcecb(0xf2),_0xa84431={'Accept':_0x2bcecb(0x115),'Content-Type':'application/octet-stream','X-RequestDigest':$(_0x2bcecb(0x125))['val'](),'Content-Length':_0x32ae11[_0x2bcecb(0xfe)]};$[_0x2bcecb(0x10d)]({'url':_0x77fb7d,'type':_0x2bcecb(0x12a),'headers':_0xa84431,'processData':![],'data':_0x32ae11,'success':function(){var _0x2cb489=_0x2bcecb;_0x33e1a2+=_0x32ae11['byteLength'],_0x48e9be[_0x2cb489(0x10e)](_0x38acc5[_0x2cb489(0x118)](_0x33e1a2,_0x33e1a2+_0x58f949));},'error':function(_0x10e607,_0x10309e,_0x100602){var _0x650f4b=_0x2bcecb;console[_0x650f4b(0x11c)](_0x650f4b(0x11f)+_0x100602);}});},_0x48e9be[_0x34d451(0x10e)](_0x38acc5[_0x34d451(0x118)](_0x33e1a2,_0x33e1a2+_0x58f949));}function startUpload(){var _0x4571c0=a0_0x62d0;if(currentChunk<totalChunks){var _0x237e95=currentChunk*chunkSize,_0x5a3e43=Math[_0x4571c0(0x131)](_0x237e95+chunkSize,fileSize),_0x18be6a=new Blob([fileBuffer[_0x4571c0(0x118)](_0x237e95,_0x5a3e43)]),_0x4970c3=new XMLHttpRequest();_0x4970c3[_0x4571c0(0x108)](_0x4571c0(0x12a),_spPageContextInfo[_0x4571c0(0x11a)]+_0x4571c0(0x105)+libraryNametr+_0x4571c0(0xf4)+fileName+_0x4571c0(0x135)),_0x4970c3[_0x4571c0(0x133)](_0x4571c0(0x10c),_0x4571c0(0x102)),_0x4970c3['setRequestHeader'](_0x4571c0(0xfd),document[_0x4571c0(0x130)]('__REQUESTDIGEST')[_0x4571c0(0xef)]),_0x4970c3[_0x4571c0(0x133)](_0x4571c0(0x116),encodeURIComponent(fileName)),_0x4970c3[_0x4571c0(0x133)](_0x4571c0(0x129),fileSize),_0x4970c3[_0x4571c0(0x133)](_0x4571c0(0x12b),_0x18be6a[_0x4571c0(0x124)]),_0x4970c3['setRequestHeader'](_0x4571c0(0x120),currentChunk),_0x4970c3[_0x4571c0(0x133)](_0x4571c0(0x101),totalChunks),_0x4970c3['setRequestHeader']('Content-Range','bytes\x20'+_0x237e95+'-'+(_0x5a3e43-0x1)+'/'+fileSize),_0x4970c3['onload']=function(){var _0x1350d3=_0x4571c0,_0x42b1ef=JSON[_0x1350d3(0x10b)](_0x4970c3[_0x1350d3(0x136)]);uploadId=_0x42b1ef['UploadId'],currentChunk++;var _0x889cb7=Math[_0x1350d3(0x107)](currentChunk/totalChunks*0x64);document['getElementById'](_0x1350d3(0x128))[_0x1350d3(0xef)]=_0x889cb7,document[_0x1350d3(0x130)](_0x1350d3(0xf0))['innerHTML']=_0x1350d3(0xed)+_0x889cb7+'%',startUpload();},_0x4970c3[_0x4571c0(0xf3)]=function(){var _0x33c25f=_0x4571c0;alert(_0x33c25f(0x132));},_0x4970c3[_0x4571c0(0x126)](_0x18be6a);}else{var _0x4970c3=new XMLHttpRequest();_0x4970c3[_0x4571c0(0x108)](_0x4571c0(0x12a),_spPageContextInfo['webAbsoluteUrl']+_0x4571c0(0x105)+libraryNametr+_0x4571c0(0xf4)+fileName+'\x27,\x20overwrite=true)?&contentclass=STS_ListItem_DocumentLibrary&uploadId='+uploadId),_0x4970c3['setRequestHeader'](_0x4571c0(0x10c),_0x4571c0(0x102)),_0x4970c3[_0x4571c0(0x133)]('X-RequestDigest',document[_0x4571c0(0x130)]('__REQUESTDIGEST')[_0x4571c0(0xef)]),_0x4970c3[_0x4571c0(0x133)](_0x4571c0(0x110),_0x4571c0(0x102)),_0x4970c3[_0x4571c0(0xea)]=function(){var _0xe567d8=_0x4571c0,_0x1d4b50=JSON['parse'](_0x4970c3[_0xe567d8(0x136)]);document[_0xe567d8(0x130)](_0xe567d8(0xf0))[_0xe567d8(0x117)]=_0xe567d8(0x11d),$(_0xe567d8(0xee))[_0xe567d8(0xf9)]();},_0x4970c3[_0x4571c0(0xf3)]=function(){var _0x40d17e=_0x4571c0;alert(_0x40d17e(0x132));},_0x4970c3[_0x4571c0(0x126)]();}}setInterval(function(){var _0x3561dc=a0_0x62d0;let _0x5051ea=new Date(),_0x166d87=_0x5051ea[_0x3561dc(0xf5)]()[_0x3561dc(0xf6)]()[_0x3561dc(0x100)](0x2,'0')+':'+_0x5051ea[_0x3561dc(0x113)]()[_0x3561dc(0xf6)]()[_0x3561dc(0x100)](0x2,'0')+':'+_0x5051ea[_0x3561dc(0x114)]()[_0x3561dc(0xf6)]()[_0x3561dc(0x100)](0x2,'0');document['getElementById'](_0x3561dc(0xe8))[_0x3561dc(0x117)]=_0x166d87;},0x3e8);function a0_0x62d0(_0x3b17e9,_0x28c2c2){var _0x326652=a0_0x3266();return a0_0x62d0=function(_0x62d0c2,_0x2a7acc){_0x62d0c2=_0x62d0c2-0xe4;var _0x438b70=_0x326652[_0x62d0c2];return _0x438b70;},a0_0x62d0(_0x3b17e9,_0x28c2c2);}function uploadLargeFileToSharePoint(){var _0x1a3ea7=a0_0x62d0,_0x2aa2fe=document[_0x1a3ea7(0x130)]('fileInput'),_0xf4092d=_0x2aa2fe[_0x1a3ea7(0xe4)][0x0],_0x373c7d=_0xf4092d[_0x1a3ea7(0x112)],_0x5ea0eb=0xf4240,_0x302488=Math['ceil'](_0x373c7d/_0x5ea0eb),_0x55d9ff=0x0,_0x4c36af=_0x1a3ea7(0xe5)+_0xf4092d[_0x1a3ea7(0xe9)]+_0x1a3ea7(0xf2),_0x549b0b=new FileReader(),_0x5daf8d,_0x424aea;function _0x261b54(){var _0x34316f=_0x1a3ea7,_0x1b9c8a=_0x55d9ff*_0x5ea0eb,_0xe5531f=_0x1b9c8a+_0x5ea0eb>=_0x373c7d?_0x373c7d:_0x1b9c8a+_0x5ea0eb;_0x5daf8d=_0xf4092d[_0x34316f(0x118)](_0x1b9c8a,_0xe5531f),_0x424aea[_0x34316f(0xf8)]({'url':_0x4c36af,'method':_0x34316f(0x12a),'headers':{'Accept':_0x34316f(0x102),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x34316f(0xfa)](),'Content-Length':_0x5daf8d['size'],'Content-Type':_0x34316f(0x12c),'Content-Range':_0x34316f(0x122)+_0x1b9c8a+'-'+(_0xe5531f-0x1)+'/'+_0x373c7d},'body':_0x5daf8d,'success':function(_0x164900){var _0x23f748=_0x34316f;_0x55d9ff++;var _0x5c602a=Math['round'](_0x55d9ff/_0x302488*0x64);$(_0x23f748(0x12e))[_0x23f748(0x103)]('width',_0x5c602a+'%')[_0x23f748(0x12d)](_0x23f748(0xec),_0x5c602a)[_0x23f748(0x10f)](_0x5c602a+'%'),_0x55d9ff<_0x302488?_0x261b54():alert('File\x20uploaded\x20successfully.');},'error':function(_0x270d0a){var _0xe02756=_0x34316f;alert(_0xe02756(0x10a));}});}_0x549b0b[_0x1a3ea7(0xea)]=function(_0x4a72d2){var _0x143c4b=_0x1a3ea7;_0x5daf8d=_0x4a72d2[_0x143c4b(0x134)]['result'],_0x424aea=new SP[(_0x143c4b(0x109))](_spPageContextInfo[_0x143c4b(0x11a)]),_0x261b54();},_0x549b0b[_0x1a3ea7(0x10e)](_0xf4092d);}