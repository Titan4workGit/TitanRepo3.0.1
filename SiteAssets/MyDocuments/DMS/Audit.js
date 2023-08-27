var envrnmt="Unknown";
 if (navigator.platform.startsWith('Win')) {
  envrnmt='Windows';
} else if (navigator.platform.startsWith('Mac')) {
  envrnmt='macOS';
} else if (navigator.platform.startsWith('Linux')) {
  envrnmt='Linux';
} else if (navigator.platform.startsWith('iPhone') || navigator.platform.startsWith('iPad') || navigator.platform.startsWith('iPod')) {
  envrnmt='iOS';
} else if (navigator.platform.startsWith('Android')) {
  envrnmt='Android';
}
crrntFile=arrFileFolder[0];
type: Properties[0].trim(),
                ServerURL: decodeURIComponent(Properties[1].trim()),
                DocumentId: Properties[2].trim(),
                SiteURL: Properties[3].trim(),
                fileserverrelativeurl:this.dataset.fileserverrelativeurl,
                SelectedLibrary: Properties[4].trim(),
                FileFolderName: decodeURIComponent(Properties[5].trim()),
                CopyFileLink: decodeURIComponent(Properties[6].trim()),
                FileTitle: Properties[7].trim(),
                FileRef: Properties[8].trim(),
                FileType: Properties[9].trim(),
                DocType: Properties[10].trim(),
                fileFilderInheritance: $(this).data('inherit'),
                SubCategory: Properties[11].trim()
function Add(documentURL, documentId, documentType, sharedGroup, permissionType, Shared_Type, DocType, SharedFrom, SubDocType,DocRefNo) {
    I
            Metadata = {
                __metadata: {
                    'type': ItemType
                },
                
				//Common attributes
                UserIDId: _spPageContextInfo.userId,
                CompanyIDId:CompanyId, 
                DepartmentIDId:Department,
                OfficeLocationIDId: OfficeLocation,
                Designation:Designation, 
				WebpartName:'DMS',
				Application:'Web Browser',
                Environment:navigator.userAgentData.platform, 
                AppVersion:'3.0', 
				
                GuestClientId:
				
				//Attributes depend on file/folder
				Title:crrntFile.FileFolderName,
				FileType:crrntFile.type,
                DocumentID:crrntFile.DocumentId, 
                DocumentTitle:crrntFile.FileTitle,
                FileCategory:crrntFile.FileType/ 
                FileSubCategory: crrntFile.SubCategory,
                FileReferenceNumber:crrntFile.FileRef/DocType,
                LibraryURL:crrntFile.fileserverrelativeurl, 
                LibraryName: crrntFile.SelectedLibrary,
                ServerSiteURL: crrntFile.ServerURL,
				LibraryType:crrntFile.SelectedLibrary,
				FileValidity:'',
                FileVersion:'',
				FileDetails:'',
				
				//Attribute depends on USer Action

                UserAction:'Rename','Copy','Move','Download','View','online editor'    
                ActivityDetails:crrntFile,                                
                ActionDate:new Date(),
				
                
				
            };
            
            $.when(AddItemToListGroups(ListName, Metadata)).done(function (response) {
                //if((k+1) == sharedUsersId.length) {
                //}
            });
        }
    }
}


Rename

	NewName
	OldNAme
Copy
	SourceUrl
	DestinationUrl
Move 
	SourceUrl
	DestinationUrl
Download
View
Online View
				