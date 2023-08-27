var app = angular.module('myApp', []);
var departmentID = "";
var companyID = "";
var sorter;
var sorterSharedWithMe;
var sorterMyDocuments;
var myCompanyUrl = "";
var folderNameUsedInDesginPage = "";
var departmentPermissionEditDocument = false;
var checkDepartmentID = "";
var sharedUsersIdArrayListItemCollection = new Array();
var sharedUsersEmailIDsArrayListItemCollection = new Array();
function ShowUploadingButton(companyidd, departmentIDd) {
    var webPartCollection = new Array();
    webPartCollection.push("Documents");
    var users = UserExistInProcessApprover(companyID, departmentIDd, webPartCollection);
    //console.log(users);
    for (var collectionIndex = 0; collectionIndex < users.length; collectionIndex++) {
        if (users[collectionIndex].webPartName == "Documents") {
            $('#uploadDepartmentDocuments').show();
            departmentPermissionEditDocument = true;
        }
    }
}
function readTargetUrlCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function GenerateTable() {
    sorter = new TINY.table.sorter('sorter', 'tableTempEmpOffice365', {
        headclass: 'head',
        ascclass: 'asc',
        descclass: 'desc',
        evenclass: 'evenrow',
        oddclass: 'oddrow',
        evenselclass: 'evenselected',
        oddselclass: 'oddselected',
        paginate: true,
        size: 10,
        colddid: 'columns',
        currentid: 'currentpage',
        totalid: 'totalpages',
        startingrecid: 'startrecord',
        endingrecid: 'endrecord',
        totalrecid: 'totalrecords',
        hoverid: 'selectedrow',
        pageddid: 'pagedropdown',
        navid: 'tablenav',
        //sortcolumn: 1,//uncomment if you want to sorting on here on page loading by default on column based
        sortdir: 1,
        init: true
    });
}
function GenerateTableMyDocuments() {
    sorterMyDocuments = new TINY.table.sorter('sorterMyDocuments', 'tableTempMyDocuments', {
        headclass: 'head',
        ascclass: 'asc',
        descclass: 'desc',
        evenclass: 'evenrow',
        oddclass: 'oddrow',
        evenselclass: 'evenselected',
        oddselclass: 'oddselected',
        paginate: true,
        size: 10,
        colddid: 'columnsMyDocuments',
        currentid: 'currentpageMyDocuments',
        totalid: 'totalpagesMyDocuments',
        startingrecid: 'startrecordMyDocuments',
        endingrecid: 'endrecordMyDocuments',
        totalrecid: 'totalrecordsMyDocuments',
        hoverid: 'selectedrowMyDocuments',
        pageddid: 'pagedropdownMyDocuments',
        navid: 'tablenavMyDocuments',
        //sortcolumn: 1,//uncomment if you want to sorting on here on page loading by default on column based
        sortdir: 1,
        init: true
    });
}
function GenerateTableSharedWithMe() {
    sorterSharedWithMe = new TINY.table.sorter('sorterSharedWithMe', 'tableTempSharedWithMe', {
        headclass: 'head',
        ascclass: 'asc',
        descclass: 'desc',
        evenclass: 'evenrow',
        oddclass: 'oddrow',
        evenselclass: 'evenselected',
        oddselclass: 'oddselected',
        paginate: true,
        size: 10,
        colddid: 'columnsSharedWithMe',
        currentid: 'currentpageSharedWithMe',
        totalid: 'totalpagesSharedWithMe',
        startingrecid: 'startrecordSharedWithMe',
        endingrecid: 'endrecordSharedWithMe',
        totalrecid: 'totalrecordsSharedWithMe',
        hoverid: 'selectedrowSharedWithMe',
        pageddid: 'pagedropdownSharedWithMe',
        navid: 'tablenavSharedWithMe',
        //sortcolumn: 1,//uncomment if you want to sorting on here on page loading by default on column based
        sortdir: 1,
        init: true
    });
}
///////////////////////Right Click Event/////////////
var mouseX;
var mouseY;
$(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
$(document).bind("mousedown", function (e) {
    // If the clicked element is not the menu
    if (!$(e.target).parents(".context-menu").length > 0) {
        // Hide it
        $(".context-menu").hide(100);
    }
});

////////////////////////////////////////////////


function RightClickEvent() {
    $('.divMenuClick').unbind().click(function () {
        //event.preventDefault();
        var menuItemsHTML = $(this).closest("div").find('.menuListItems').html();
        $('#ulcontextMenuItems').html('');
        $('#ulcontextMenuItems').append(menuItemsHTML);
        $('#context-menu').show();
        $('#context-menu').offset({ 'top': mouseY, 'left': mouseX });
    });
}


function CallDragDropEventFunction() {
    var targeturl = myCompanyUrl;
    $(".dropzone2").dropzone({
        url: targeturl,
        margin:20,
        allowedFileTypes: 'image.*, pdf,doc,docx,xlsx,rar,zip,ppt,pptx,dotx,rtf,log,msg,txt,csv,dat,pps,xml,aif,iff,m3u,m4a,mid,mp3,wav,wma,3gp,xls,xlr,zipx',
        params: {
            'action': 'save'
        },
        uploadOnDrop: true,
        uploadOnPreview: false,
        success: function (res, index) {
            console.log(res, index);
        }
    });
}

function GetDocuments(query, siteURL) {
    var Ownurl = siteURL + "/_api/web/Lists/GetByTitle('DepartmentalDMS')/Items?$select=ID,File_x0020_Type,ServerRedirectedEmbedUri,Department,DocumentNo,DocumentType,Regarding,Details,DocumentWrittenBy,Title,SecurityLevel,AccessLevel,File/Name,File/ServerRelativeUrl&$orderby=Modified desc&$expand=File" + query;
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: true,
        success: function (data) {
            var items = data.d.results;
            var tableHeader = "";//"<div id='mainTablearea' class='table-responsive'><table cellpadding='0'  cellspacing='0' border='1' id='tableTempEmpOffice365' class='table-width tinytable table table-bordered table-striped table-hover js-basic-example dataTable no-footer mydptdoc_table'></div><thead class='panel-heading '><tr><th><h6>File Name</h6></th><th><h6>Title</h6></th><th><h6>Document#</h6></th><th><h6>Type</h6></th><th  ><h6>Author</h6></th><th><h6>Regarding</h6></th><th><h6>Details</h6></th><th class='nosort' style='max-width:80px;width:80px'><h6>Download</h6></th><th><h6>Edit</h6></th></tr></thead><tbody class='panel'>";
            var tr = "";
            for (var i = 0; i < items.length; i++) {
                if (i == 0) {
                    ShowUploadingButton(companyID, items[i].Department);
                }

                var DocumentNo = items[i].DocumentNo;
                if (DocumentNo == null) {
                    DocumentNo = "";
                }
                var DocumentType = items[i].DocumentType;
                if (DocumentType == null) {

                    DocumentType = "";
                }
                var Regarding = items[i].Regarding;
                if (Regarding == null) {
                    Regarding = "";
                }
                var Details = items[i].Details;
                if (Details == null) {
                    Details = "";
                }
                var DocumentWrittenBy = items[i].DocumentWrittenBy;
                if (DocumentWrittenBy == null) {
                    DocumentWrittenBy = "";
                }
                var Title = items[i].Title;
                if (Title == null) {
                    Title = "";
                }
                var SecurityLevel = items[i].SecurityLevel;
                if (SecurityLevel == null) {
                    SecurityLevel = "";
                }
                var AccessLevel = items[i].AccessLevel;
                if (AccessLevel == null) {
                    AccessLevel = "";
                }

                var sourcelocation = "";
                var FileName = items[i].File.Name;
                var Department = items[i].Department;
                var linkDepartment = "";
                if (checkDepartmentID == null || checkDepartmentID == "") {
                    sourcelocation = "&DepartmentId=" + Department + "&sourcelocation=../Pages/MyDocuments.aspx";
                    linkDepartment = "D";//D for dashboard
                }
                else {
                    sourcelocation = "&DepartmentId=" + Department + "&sourcelocation=../Pages/ViewAllDocuments.aspx";
                    linkDepartment = "E";//E for Everyone
                }

                var parameter = "&itemID=" + items[i].ID + "&fileName=" + FileName + sourcelocation;
                if (departmentPermissionEditDocument == true) {
                    AccessLevel = "<a href='../Pages/UploadDocuments.aspx?DMSType=" + linkDepartment + "&WebAppId=" + companyID + parameter + "'>Edit</a>";
                }
                else {
                    AccessLevel = "NA";
                }

                // var FileServerRelativeUrl=items[i].File.ServerRelativeUrl;
                //   var documentLink = FileServerRelativeUrl;
                //   var icon = GetDocumentTypeIcon(FileName);

                var FileServerRelativeUrl = items[i].ServerRedirectedEmbedUri;
                if (FileServerRelativeUrl == null || FileServerRelativeUrl == "") {
                    FileServerRelativeUrl = items[i].File.ServerRelativeUrl;
                }
                var documentLink = FileServerRelativeUrl;
                var icon = GetDocumentTypeIcon("." + items[i].File_x0020_Type);

                var downloadlink = "<a href='" + items[i].File.ServerRelativeUrl + "' target='_blank' download><span class='glyphicon glyphicon-download-alt'></span></a>";
                tr = tr + "<tr><td><a href='" + documentLink + "' class='doc_icon' target='_blank' >" + icon + FileName + "</a></td><td>" + Title + "</td><td>" + DocumentNo + "</td><td>" + DocumentType + "</td><td>" + DocumentWrittenBy + "</td><td>" + Regarding + "</td><td>" + Details + "</td><td style='text-align:center'>" + downloadlink + "</td><td>" + AccessLevel + "</td></tr>";

            }
         //   var completebody = tableHeader + tr + "</tbody></table>";
               var completebody =tr;
            var dvTable = $("#mainDivAreaOffice365");
            dvTable.html("");
            $('#norecordFoundMydepartment').hide();
            if (items.length == 0) {
                        $('#norecordFoundMydepartment').show();
            //    completebody = completebody + "<div style='text-align: center;font-size:14px'>No Record Found</div>"
            }
            dvTable.append(completebody);
            if (items.length > 0) {
                GenerateTable();
            }
        }, eror: function (data) {

            console.log('error');
        }
    });
}
function GenerateBradCumNavigation(surFoldersArray) {
    var braCummHtml = "";
    var targetServerRaltiveUrl = "";
    for (var index = 0; index < surFoldersArray.length; index++) {
        if (index != 0) {
            var targetUrl = "javascript:GetMyDocumentsWithFilesFolder('" + surFoldersArray[index].folderUrl + "')";
            if (index == 1) {
                braCummHtml += '<li title="My DMS" class="mybradcumb first"><a href="' + targetUrl + '">My DMS</a></li>';
            }
            else {
                var subfolderLengthCheck = surFoldersArray[index].folderName;
                if (subfolderLengthCheck.length > 15) {
                    subfolderLengthCheck = subfolderLengthCheck.substring(0, 14) + "...";
                }

                if (subfolderLengthCheck.length > 0) {
                    braCummHtml += '<li title="' + surFoldersArray[index].folderName + '" class="mybradcumb first"><a href="' + targetUrl + '">' + subfolderLengthCheck + '</a></li>';
                }
            }
            if (index == surFoldersArray.length - 1) {
                targetServerRaltiveUrl = surFoldersArray[index].folderUrl;
                GetMyDocumentsWithFilesFolder(targetServerRaltiveUrl);
            }
        }
    }
    var bradCumDiv = $("#generateBradCumbNew");
    bradCumDiv.html("");
    bradCumDiv.append(braCummHtml);
    ClickEventBradCumb();
}

function ClickEventBradCumb() {
    $(".mybradcumb ").unbind().click(function () {
        $(this).nextAll().remove(".mybradcumb ");
        //Create Cookies for Target Folder
    });
    //Create Cookies for Target Folder
    var cookiesName = "UploadedDocumentTargetFolderURl";
    var cookiesvalue = $('#currentSubFolder').val();

    createCookie(cookiesName, cookiesvalue, 7);
}
function GetMyDocumentsWithFilesFolder(targetServerRaltiveUrl) {
    $(".context-menu").hide(100);
    $('#currentSubFolder').val(targetServerRaltiveUrl);
    var cookiesName = "UploadedDocumentTargetFolderURl";
    var cookiesvalue = $('#currentSubFolder').val();
    createCookie(cookiesName, cookiesvalue, 7);
    var query = "";
    GetDocumentsMyDocuments(query, myCompanyUrl, targetServerRaltiveUrl);
}
function GetSubFolders(subFolderlLink) {
    var encodedeUrl = decodeURI(subFolderlLink)
    var surFoldersArray = new Array();
    var subFolders = encodedeUrl.split('/');
    var folderurls = "";
    for (var subFolderIndex = 0; subFolderIndex < subFolders.length; subFolderIndex++) {

        if (subFolders[subFolderIndex] == "DocumentManagementSystem" || surFoldersArray.length > 0) {
            folderurls += subFolders[subFolderIndex] + "/";
            if (subFolders[subFolderIndex] != null && subFolders[subFolderIndex] != "") {
                surFoldersArray.push(SubFolderProperties(folderurls, subFolders[subFolderIndex]));
            }
        }
    }
    GenerateBradCumNavigation(surFoldersArray);
    //   console.log(surFoldersArray);
}
function SubFolderProperties(folderUrl, folderName) {
    var folderProperties = [];
    folderProperties.folderUrl = folderUrl;
    folderProperties.folderName = folderName;
    return folderProperties;
}
function GetDocumentsMyDocuments(query, siteURL, folderUrl) {

  
    var Ownurl = siteURL + "/_api/Web/GetFolderByServerRelativeUrl('" + folderUrl + "')?$select=ID,File_x0020_Type&$expand=Folders,Files,Files/ListItemAllFields&$orderby=Modified desc" + query;
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: true,
        success: function (data) {
            var tableHeader ="";// "<div id='mainTablearea' class='table-responsive'><table cellpadding='0'  cellspacing='0' border='1' id='tableTempMyDocuments' class='table-width tinytable table table-bordered table-striped table-hover js-basic-example dataTable no-footer mydocuments_table'></div><thead class='panel-heading'><tr><th><h6 data-localize='File'>File</h6></th><th class='nosort' style='max-width:60px;width:60px'><h6 data-localize='Action'>Action</h6></th><th><h6 data-localize='Title'>Title</h6></th><th><h6 data-localize='DocumentNo'>Document#</h6></th><th ><h6 data-localize='Type'>Type</h6></th><th ><h6 data-localize='Author'>Author</h6></th><th><h6 data-localize='Details'>Details</h6></th><th><h6 data-localize='SharedWith'>Shared With</h6></th></tr></thead><tbody class='panel'>";
            var tr = "";
            var files = data.d.Files.results;
            var folders = data.d.Folders.results;
            var itemsCount = folders.length + files.length;
            for (var i = 0; i < folders.length; i++) {
                //  console.log(folders[i].Name);

                var encodeURILink = encodeURI(folders[i].ServerRelativeUrl)
                var documentLink = "javascript:GetSubFolders('" + encodeURILink + "')";
                var folderIcon = "<span class='glyphicon glyphicon-folder-open'></span>&nbsp;&nbsp;";
                var menuFolderHTML = "";
                menuFolderHTML += "<li><a href=" + documentLink + "><i class='fa fa-folder-open'></i> Open</a></li>";
                menuFolderHTML += "<li><a href=javascript:DeleteSelectedFolder('" + encodeURILink + "')><i class='fa fa-trash'></i> Delete</a></li>";
                var regardingContextMenuDIV = "<div class='divMenuClick'><i class='fa fa-cog' style='font-size:20px'></i><div class='menuListItems' style='display:none' >" + menuFolderHTML + "</div></div>";
                tr = tr + "<tr><td><a href=" + documentLink + ">" + folderIcon + folders[i].Name + "</a></td><td style='text-align: center'>" + regardingContextMenuDIV + "</td><td>" + folders[i].Name + "</td><td></td><td>Folder</td><td></td><td></td><td></td></tr>";
            }
            for (var i = 0; i < files.length; i++) {
                var icon = GetDocumentTypeIcon(files[i].Name);
                var propertiesServerRelativeUrl = files[i].ListItemAllFields.ServerRedirectedEmbedUri; //siteURL + "/_layouts/15/WopiFrame.aspx?sourcedoc={" + files[i].UniqueId + "}&action=view";
                var regardingContextMenuDIV = "";//"<div class='divMenuClick'><i class='fa fa-cog' style='font-size:36px'></i></div>";//files[i].ListItemAllFields.Regarding;
                var menuHTML = "";
                var sourcelocation = "&sourcelocation=../Pages/MyDocuments.aspx";
                var editPropertiesLink = "../Pages/UploadDocuments.aspx?DMSType=Company&WebAppId=" + companyID + "&itemID=" + files[i].ListItemAllFields.ID + "&fileName=" + files[i].Name + sourcelocation;
                if (propertiesServerRelativeUrl == null || propertiesServerRelativeUrl == "") {
                    //document  is not ediatable in browser
                    propertiesServerRelativeUrl = encodeURI(files[i].ServerRelativeUrl);
                    //Item menu list
                    menuHTML += "<li><a href=javascript:ViewinBrowser('" + propertiesServerRelativeUrl + "')><i class='fa fa-eye'></i> View</a></li>";
                    menuHTML += "<li><a href='" + editPropertiesLink + "'><i class='fa fa-edit'></i> Properties</a></li>";
                    menuHTML += "<li><a href=javascript:GetSharedDocumentProperties('" + files[i].ListItemAllFields.Id + "')><i class='fa fa-share-alt'></i> Share</a></li>";
                    menuHTML += "<li><a href=javascript:deleteMyDocuments(" + files[i].ListItemAllFields.Id + ")><i class='fa fa-trash'></i> Delete</a></li>";
                    menuHTML += "<li><a download href='" + encodeURI(files[i].ServerRelativeUrl) + "' onclick=javascript:DownloadFile('" + encodeURI(files[i].ServerRelativeUrl) + "')><i class='fa fa-download'></i> Download</a></li>";
                    menuHTML += "<li><a href=javascript:GetFileVersions('" + encodeURI(files[i].ServerRelativeUrl) + "')><i class='fa fa-files-o'></i> Versions</a></li>";
                    regardingContextMenuDIV = "<div class='divMenuClick'><i class='fa fa-cog' style='font-size:20px'></i><div class='menuListItems' style='display:none' >" + menuHTML + "</div></div>";
                }
                else {
                    //document  is ediatable in browser 
                    //Item menu list
                    var editDocumetnsInBrowser = siteURL + "/_layouts/15/WopiFrame.aspx?sourcedoc={" + files[i].UniqueId + "}&action=edit";

                    menuHTML += "<li><a href=javascript:ViewinBrowser('" + propertiesServerRelativeUrl + "')><i class='fa fa-eye'></i> View</a></li>";

                    var tempFIleName = files[i].Name.split('.');
                    var flgpdf = false;
                    for (var indexFile = 0; indexFile < tempFIleName.length; indexFile++) {
                        if (tempFIleName[indexFile].toLowerCase() == "pdf") {
                            flgpdf = true;
                        }
                    }
                    if (flgpdf == false) {
                        menuHTML += "<li><a href='" + editDocumetnsInBrowser + "'><i class='fa fa-edit'></i> Edit</a></li>";
                    }
                    menuHTML += "<li><a href='" + editPropertiesLink + "'><i class='fa fa-edit'></i> Properties</a></li>";
                    menuHTML += "<li><a href=javascript:GetSharedDocumentProperties('" + files[i].ListItemAllFields.Id + "')><i class='fa fa-share-alt'></i> Share</a></li>";
                    menuHTML += "<li><a href=javascript:deleteMyDocuments(" + files[i].ListItemAllFields.Id + ")><i class='fa fa-trash'></i> Delete</a></li>";
                    menuHTML += "<li><a href='" + encodeURI(files[i].ServerRelativeUrl) + "' onclick=javascript:DownloadFile('" + encodeURI(files[i].ServerRelativeUrl) + "') download><i class='fa fa-download'></i> Download</a></li>";
                    menuHTML += "<li><a href=javascript:GetFileVersions('" + encodeURI(files[i].ServerRelativeUrl) + "')><i class='fa fa-files-o'></i> Versions</a></li>";
                    regardingContextMenuDIV = "<div class='divMenuClick'><i class='fa fa-cog' style='font-size:20px'></i><div class='menuListItems' style='display:none' >" + menuHTML + "</div></div>";
                }
                if (files[i].Name != null) {
                    var DocumentNo = files[i].ListItemAllFields.DocumentNo;
                    if (DocumentNo == null) {
                        DocumentNo = "";
                    }
                    var DocumentType = files[i].ListItemAllFields.DocumentType;
                    if (DocumentType == null) {

                        DocumentType = "";
                    }

                    var Details = files[i].ListItemAllFields.Details;
                    if (Details == null) {
                        Details = "";
                    }
                    var DocumentWrittenBy = files[i].ListItemAllFields.DocumentWrittenBy;
                    if (DocumentWrittenBy == null) {
                        DocumentWrittenBy = "";
                    }
                    var Title = files[i].ListItemAllFields.Title;
                    if (Title == null) {
                        Title = "";
                    }
                    var SecurityLevel = files[i].ListItemAllFields.SecurityLevel;

                    if (SecurityLevel == null || SecurityLevel == "") {
                        BreakInheritePermissionOnItem(siteURL, files[i].ListItemAllFields.ID, files[i].ListItemAllFields.AuthorId);//Break Permission on current Undefined Document
                        SecurityLevel = "Private";
                    }
                    var FileName = files[i].Name;

                    var parameter = "&itemID=" + files[i].ListItemAllFields.ID + "&fileName=" + FileName + sourcelocation;
                    var parameterLink = SecurityLevel;// "<a href='../Pages/UploadDocuments.aspx?DMSType=Company&WebAppId=" + companyID + parameter + "'>" + SecurityLevel + "</a>";
                    var AccessLevel = files[i].ListItemAllFields.AccessLevel;
                    if (AccessLevel == null) {
                        AccessLevel = "";
                    }

                    var downloadlink = "<a href='" + files[i].ServerRelativeUrl + "' target='_blank'><span class='glyphicon glyphicon-download-alt'></span></a>";
                    tr = tr + "<tr><td><a href='" + propertiesServerRelativeUrl + "' class='doc_icon'' target='_blank' >" + icon + FileName + "</a></td><td style='text-align: center'>" + regardingContextMenuDIV + "</td><td>" + Title + "</td><td>" + DocumentNo + "</td><td>" + DocumentType + "</td><td>" + DocumentWrittenBy + "</td><td>" + Details + "</td><td>" + parameterLink + "</td></tr>";
                }

            }
        //    var completebody = tableHeader + tr + "</tbody></table>";
                var completebody =tr;
            var dvTable = $("#mainDivAreaMyDocuments");
            dvTable.html("");
              $('#mydmsNorecordFound').hide();
            if (itemsCount == 0) 
            {
            $('#mydmsNorecordFound').show();
              //  completebody = completebody + "<div style='text-align: center;font-size:14px'>No Record Found</div>"
            }
            dvTable.append(completebody);
            if (itemsCount > 0) {
                GenerateTableMyDocuments();
            }
            RightClickEvent();

        }, eror: function (data) {

            console.log('error');
        }
    });
}
function DownloadFile(itemURL) {

    $(".context-menu").hide();
    //var valFileDownloadPath = itemURL;
    //window.open(valFileDownloadPath, '_blank');
 }
function ViewinBrowser(itemURL) {
    $(".context-menu").hide();
    var valFileDownloadPath = itemURL;
    window.open(valFileDownloadPath, '_blank');
}

function BindMySharingGroups() {
    $(".context-menu").hide();
    var webURL = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('DocumentSharedGroups')/items?$select=ID,SharingLevel,SharedUsers/Title,SharedUsers/UserName,SharedUsers/ID,LogonUser/ID,LogonUser/UserName&$expand=SharedUsers,LogonUser&$filter=LogonUser/ID eq '" + _spPageContextInfo.userId + "'"
    $.ajax({
        url: webURL,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (response) {
            $('#shareingTypePermissionLevel').empty().append('<option value="0">-Select Sharing-</option>');
            $("#shareingTypePermissionLevel").append($("<option></option>").attr("value", "Private").text("Private"));
            $("#shareingTypePermissionLevel").append($("<option></option>").attr("value", "Selective").text("Selective"));
            for (var groupIndex = 0; groupIndex < response.d.results.length; groupIndex++) {
                $("#shareingTypePermissionLevel").append($("<option></option>").attr("value", response.d.results[groupIndex].SharingLevel).text(response.d.results[groupIndex].SharingLevel));
            }
        }, eror: function (response) {
            console.log('error');
        }
    });
}
$(document).ready(function () {
    $('#shareingTypePermissionLevel').change(function () {
        GetMyShareingGroupUsers($(this).val());
        ShowHidePeoplePickerControlAndOther($(this).val());
    });
    $('#btnShareDocumetns').click(function () {
        waitingDialog.show();
        var txtDocshareingTypePermissionLevel = $('#shareingTypePermissionLevel').val();
        var txttsharedWithPermission = $('#sharedWithPermission').val();
        if (txtDocshareingTypePermissionLevel == "0" || txtDocshareingTypePermissionLevel == null || txtDocshareingTypePermissionLevel == "") {
            waitingDialog.hide();
            alert('Please select sharing type.');
            return false;
        }
        if (txtDocshareingTypePermissionLevel == "Private") {
            $('#chekedSendEmail').attr('checked', false);//Don't send email if document sharing type is private
        }
        if (txtDocshareingTypePermissionLevel == "Selective")
        {
            sharedUsersIdArrayListItemCollection = [];
            sharedUsersEmailIDsArrayListItemCollection = [];
            if (getUserInfoFromPeoplePicker('customShareingPoplePicker')) {
                if (sharedUsersIdArrayListItemCollection != null) {
                    if (sharedUsersIdArrayListItemCollection.length == 0) {
                        waitingDialog.hide();
                        alert("Please enter sharing users.");
                        return false;
                    }
                }
                else {
                    waitingDialog.hide();
                    alert("Please enter sharing users.");
                    return false;
                }
            }
            else {
                waitingDialog.hide();
                alert("Please enter sharing users.");
                return false;
            }
            if (txttsharedWithPermission == null || txttsharedWithPermission == "" || txttsharedWithPermission == "--select--")
            {
                waitingDialog.hide();
                alert("Please select permission type.");
                return false;
            }

        }
        if (txtDocshareingTypePermissionLevel != "Selective" && txtDocshareingTypePermissionLevel != "Private") {
            if (txttsharedWithPermission == null || txttsharedWithPermission == "" || txttsharedWithPermission == "--select--") {
                waitingDialog.hide();
                alert("Please select permission type.");
                return false;
            }
        }
        var txtSharedDocumetnOnDemandId = $('#txtSharedDocumetnOnDemandId').val();
        var serverRelativeFileUrl=GetFileServerRelativeUrlById(txtSharedDocumetnOnDemandId); 
        $.when(BreakInheritePermissionOnItemSharing(myCompanyUrl,serverRelativeFileUrl, txtSharedDocumetnOnDemandId, _spPageContextInfo.userId, sharedUsersIdArrayListItemCollection)).done(function (MainExamListItemTemp) {

        });


    });
        $('#sharedWithPermission').change(function () {
        getTargetRoleDefinitionIdOnDemand();
    });
    $('#btnCancelShareDocumetns').click(function () {

        $('#myModalDocumentSharing').modal('hide');
    });

});
function GetFileServerRelativeUrlById(shareDocumentitemIdd) 
{

    var fileurlserverrelative = "";
    var resturl = _spPageContextInfo.webAbsoluteUrl+"/_api/web/Lists/GetByTitle('DocumentManagementSystem')/getItemById(" + shareDocumentitemIdd + ")?$select=File/ServerRelativeUrl&$expand=File"
    $.ajax({
        url: resturl,
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        async: false,
        success: function (data) {
            fileurlserverrelative = data.d.File.ServerRelativeUrl;
           

        }, eror: function (data) {

            console.log('error');
        }
    });
    return fileurlserverrelative;
}
function getUserInfoFromPeoplePicker(pickerPickerControlId) {
    var pickerDiv = $("[id^='" + pickerPickerControlId + "']");
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[pickerDiv[1].id];
    var users = peoplePicker.GetAllUserInfo();
    if (users.length > 0) {
        // var allUsersID = new Array();
        // var usersEmailIDs = new Array();
        for (var i = 0; i < users.length; i++) {
            sharedUsersIdArrayListItemCollection.push(GetUserIdFromPeoplePicker(users[i].Key));
            if (users[i].EntityData.Email.length > 0) {
                if (sharedUsersEmailIDsArrayListItemCollection.indexOf(users[i].EntityData.Email) == -1) {
                    sharedUsersEmailIDsArrayListItemCollection.push(users[i].EntityData.Email);
                }
            }
        }
        // $scope.groupuserIds = allUsersID;
        // $scope.usersEmailIDs = usersEmailIDs;
        return true;
    }
    return false;
}

function GetUserIdFromPeoplePicker(userName) {
    var userID = "";
    var prefix = "i:0#.f|membership|";
    var siteUrl = _spPageContextInfo.siteAbsoluteUrl;
    var accountName = userName;// prefix+userName;       
    $.ajax({
        url: siteUrl + "/_api/web/siteusers(@v)?@v='" +
            encodeURIComponent(accountName) + "'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        async: false,
        success: function (data) {
            userID = data.d.Id;
            //   $scope.UserInfoFullName = data.d.Title;
            // alert("Received UserId" + data.d.Id);
            // alert(JSON.stringify(data));
        },
        error: function (data) {
            console.log(JSON.stringify(data));
        }
    });
    return userID;
}

function getTargetRoleDefinitionIdOnDemand() {

    var permissioLevelName = $('#sharedWithPermission').val();
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + '/_api/web/roledefinitions/getbyname(\'' + permissioLevelName + '\')/id',
        type: 'GET',
        headers: { 'accept': 'application/json;odata=verbose' },
        success: function (responseData) {
            $('#txtPermissionLevelId').val(responseData.d.Id);
        },
        error: function (errorMessage) {
            console.log('error permissionLevel.');
        }
    });
}
function ShowHidePeoplePickerControlAndOther(inputValue) {
    if (inputValue == "Selective") {
        $('.peoplepickerdivshowhide').show();
        $('.peoplepickerdivshowhidesharedUsersLists').hide();
        $('#sharedWithPermission').show();
        $('.sendEmailClassHide').show();
    }
    else {
        if (inputValue == "0" || inputValue == "Private") {
            $('.peoplepickerdivshowhidesharedUsersLists').hide();
            $('#sharedWithPermission').hide();
            $('.sendEmailClassHide').hide();
        }
        else {
            $('.peoplepickerdivshowhidesharedUsersLists').show();
            $('#sharedWithPermission').show();
            $('.sendEmailClassHide').show();
        }
        $('.peoplepickerdivshowhide').hide();
    }
}
function GetMyShareingGroupUsers(secirityLevelForUsers) {
    sharedUsersIdArrayListItemCollection = [];
    sharedUsersEmailIDsArrayListItemCollection = [];
    var Ownurl = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('DocumentSharedGroups')/items?$select=ID,SharingLevel,SharedUsers/Title,SharedUsers/UserName,SharedUsers/ID,LogonUser/ID,LogonUser/UserName&$expand=SharedUsers,LogonUser&$filter=SharingLevel eq '" + secirityLevelForUsers + "' and LogonUser/ID eq '" + _spPageContextInfo.userId + "'"
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (response) {
            var usersDisplayName = "";
            for (var groupIndex = 0; groupIndex < response.d.results.length; groupIndex++) {
                for (var subGroupIndex = 0; subGroupIndex < response.d.results[groupIndex].SharedUsers.results.length; subGroupIndex++) {

                    if (sharedUsersIdArrayListItemCollection.indexOf(response.d.results[groupIndex].SharedUsers.results[subGroupIndex].ID) == -1) {
                        sharedUsersIdArrayListItemCollection.push(response.d.results[groupIndex].SharedUsers.results[subGroupIndex].ID);
                        sharedUsersEmailIDsArrayListItemCollection.push(response.d.results[groupIndex].SharedUsers.results[subGroupIndex].UserName)
                        usersDisplayName = response.d.results[groupIndex].SharedUsers.results[subGroupIndex].Title + ";  " + usersDisplayName;
                    }
                }
            }
            if (usersDisplayName.length > 0) {
                $('#sharedUsersLists').text(usersDisplayName);
            }
            else {
                $('#sharedUsersLists').text("No User Found .");
            }

        }, eror: function (response) {
            console.log('error');
        }
    });
}
function GetSharedDocumentProperties(currentDocumentId) {
    $('#chekedSendEmail').attr('checked', false);//Don't send email if document sharing type is private
    $('#txtSharedDocumetnOnDemandId').val(currentDocumentId);
    sharedUsersIdArrayListItemCollection = [];
    sharedUsersEmailIDsArrayListItemCollection = [];
    clearPeoplePickerControl("customShareingPoplePicker");
    $('#myModalDocumentSharing').modal('show');
    waitingDialog.show();
    var Ownurl = myCompanyUrl + "/_api/web/lists/GetByTitle('DocumentManagementSystem')/items?$select=ID,PermissionLevelId,PermissionLevel,Department,Shared/ID,Shared/Title,Shared/UserName,Author/Title,Author/EMail,Title,DocumentNo,DocumentType,Regarding,Details,AccessLevel,SecurityLevel,DocumentWrittenBy,File/Name,File/ServerRelativeUrl&$expand=Shared,File,Author&$filter=ID  eq '" + currentDocumentId + "'"
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (response) {
            if (response.d.results.length > 0) {
                BindMySharingGroups();
                $('#lblFileName').html(response.d.results[0].File.Name);
                $('#lblDocTiltle').html(response.d.results[0].Title);
                $('#lblDocNumber').html(response.d.results[0].DocumentNo);
                if(response.d.results[0].PermissionLevelId==null || response.d.results[0].PermissionLevelId=="")
                {
                     $('#txtPermissionLevelId').val(1073741826);
                     $('#sharedWithPermission').val("Read");
                }
                else
                {
                 $('#txtPermissionLevelId').val(response.d.results[0].PermissionLevelId);
                   $('#sharedWithPermission').val(response.d.results[0].PermissionLevel);
                }
              
                $('#shareingTypePermissionLevel').val(response.d.results[0].SecurityLevel);
                $('#lblSelectedFileUrl').html(response.d.results[0].File.ServerRelativeUrl);
                $('#lblSelectedCurrentUserDisplayName').html(response.d.results[0].Author.Title);
                $('#lblSelectedCurrentEmail').html(response.d.results[0].Author.EMail);
                if (response.d.results[0].SecurityLevel != null && response.d.results[0].SecurityLevel != "") {
                    ShowHidePeoplePickerControlAndOther(response.d.results[0].SecurityLevel)
                }
                if (response.d.results[0].SecurityLevel != "Private") {
                    if (response.d.results[0].Shared.results != null) {


                        var usersDisplayName = "";
                        for (var subGrroupIndex = 0; subGrroupIndex < response.d.results[0].Shared.results.length; subGrroupIndex++) {
                            var userNamecurretn = response.d.results[0].Shared.results[subGrroupIndex].UserName;
                            if (response.d.results[0].SecurityLevel == "Selective") {
                                setPeoplePickerUsersInfoCurrentInformation("customShareingPoplePicker", userNamecurretn);
                            }
                            else {
                                sharedUsersIdArrayListItemCollection.push(response.d.results[0].Shared.results[subGrroupIndex].ID);
                                sharedUsersEmailIDsArrayListItemCollection.push(response.d.results[0].Shared.results[subGrroupIndex].UserName);
                            }
                            usersDisplayName = response.d.results[0].Shared.results[subGrroupIndex].Title + ";  " + usersDisplayName;
                        }
                        if (response.d.results[0].SecurityLevel != "Selective") {
                            $('#sharedUsersLists').text(usersDisplayName);
                        }
                    }
                }
            }
            waitingDialog.hide();

        }, myError: function (response) {
            waitingDialog.hide();
        }
    });
}
setPeoplePickerUsersInfoCurrentInformation = function (controlNameID, LoginNameOrEmail) {
    //var fieldName = id + '_TopSpan';
    var peoplePickerDiv = $("[id^='" + controlNameID + "']");
    // Get the people picker object from the page.
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerDiv[1].id];
    peoplePicker.AddUserKeys(LoginNameOrEmail, false);
}
function EmailSharedProperties(toUsers) {
    var ccUsers = [];
    ccUsers.push($('#lblSelectedCurrentEmail').html());
    var sharedWithTitle = $('#shareingTypePermissionLevel').val();
    var msg = "Dear User,<br/><br/>" + $('#lblSelectedCurrentUserDisplayName').html() + ", shared the following document with you.<br />To open document, please <a href='" + document.location.origin + $('#lblSelectedFileUrl').html() + "'>click here</a> .<br/><br/>Title: " + $('#lblDocTiltle').html() + "<br/>File Name: " + $('#lblFileName').html() + "<br/>Shared With :" + sharedWithTitle + "<br/><br/><br/><br/>Thanks & Regards,<br/>Adapt IT Support Team<br/><br/><br/>This is an auto generated email from TITAN. Please don’t reply.";
    var from = $('#lblSelectedCurrentEmail').html();
    var Metadata;
    Metadata = {
        'properties': {
            '__metadata': { 'type': 'SP.Utilities.EmailProperties' },
            'From': from,
            'To': { 'results': toUsers },
            'CC': { 'results': ccUsers },
            'Body': msg,
            'Subject': 'Document Shared'
        }
    };
    SendEmailSharedNotification(Metadata);
}
function SendEmailSharedNotification(emailProperties) {
    var sitetemplateurl = _spPageContextInfo.webServerRelativeUrl + "/_api/SP.Utilities.Utility.SendEmail";
    $.ajax({
        contentType: 'application/json',
        url: sitetemplateurl,
        type: "POST",
        data: JSON.stringify(emailProperties),
        headers: {
            "Accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            waitingDialog.hide();
        },
        error: function (err) {
            waitingDialog.hide();
            alert(JSON.stringify(err));
        }
    });
}
function clearPeoplePickerControl(pickerId) {
    var toSpanKey = pickerId + "_TopSpan";
    var peoplePicker = null;

    // Get the people picker object from the page.
    var ClientPickerDict = this.SPClientPeoplePicker.SPClientPeoplePickerDict;
    // Get the people picker object from the page.
    for (var propertyName in ClientPickerDict) {
        if (propertyName == toSpanKey) {
            peoplePicker = ClientPickerDict[propertyName];
            break;
        }
    }

    if (peoplePicker) {
        var ResolvedUsersList = $(document.getElementById(peoplePicker.ResolvedListElementId)).find("span[class='sp-peoplepicker-userSpan']");
        $(ResolvedUsersList).each(function (index) {
            peoplePicker.DeleteProcessedUser(this);
        });
    }
}
function GetFileVersions(itemURL) {
    $(".context-menu").hide();
    var webURL = myCompanyUrl + "/_api/Web/GetFileByServerRelativeUrl('" + itemURL + "')/Versions";
    $.ajax({
        url: webURL,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (data) {
            $('#myModalVersions').modal('show');
            var itemsVersion = data.d.results;
            var versionTR = "";//"<tr><td style='padding: 5px;'>Version</td><td style='padding: 5px;'>Created On</td><td style='padding: 5px;'>Download</td></tr>"
            for (var index = 0; index < itemsVersion.length; index++) {
                // var itemCreatedOn=  itemsVersion[index].Created;
                var labelVersion = itemsVersion[index].VersionLabel;
                var thisVersionUrl = itemsVersion[index].Url;
                // var itemCreatedOn = new Date(itemsVersion[index].Created);
                var formatedDate = ConvertJSONDateFormatToDaysFormat(itemsVersion[index].Created);//itemCreatedOn.toLocaleString([], { hour12: true });

                versionTR += "<tr><td style='padding: 5px;'>" + labelVersion + "</td><td style='padding: 5px;'>" + formatedDate + "</td><td style='padding: 5px;'><a download href='" + myCompanyUrl + "/" + thisVersionUrl + "' target='_blank'><i class='fa fa-download'></i> Download</a></td></tr>";
            }
            var completeVersionHTMLTable = versionTR;//"<table border='1' style='width:100%'> <tr><td style='padding: 5px;'>Version</td><td style='padding: 5px;'>Created On</td><td style='padding: 5px;'>Download</td></tr>" + versionTR + "</table>";
            $('#allVersionList').html('');
            $('#allVersionList').append(completeVersionHTMLTable);
            console.log(itemsVersion);
        }, eror: function (data) {
            console.log('error');
        }
    });
}
function ConvertJSONDateFormatToDaysFormat(inputDate) {
    var d = new Date(inputDate);
    var hours = d.getHours() % 12;
    hours = hours ? hours : 12;
    var formatedDateWithTime = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][(d.getMonth())] + " " +
    ("00" + d.getDate()).slice(-2) + " " +
    d.getFullYear() + " " +
    ("00" + hours).slice(-2) + ":" +
    ("00" + d.getMinutes()).slice(-2) + ":" +
    ("00" + d.getSeconds()).slice(-2) + ' ' + (d.getHours() >= 12 ? 'PM' : 'AM');

    return formatedDateWithTime;
}
function DeleteSelectedFolder(folderServerRelativeUrl) {
    var webURL = myCompanyUrl;
    var confirmmessage = confirm("Are you sure,you want to delete this folder ?")
    if (confirmmessage == true) {

        $.ajax({
            url: webURL + "/_api/web/GetFolderByServerRelativeUrl('" + folderServerRelativeUrl + "')",
            method: "POST",
            headers: {
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "IF-MATCH": "*",
                "X-HTTP-Method": "DELETE"
            },
            success: function (data) {
                $(".context-menu").hide(100);
                var folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");
                GetMyDocumentsWithFilesFolder(folderUrl);
                alert("Folder Deleted successfully.");
            },
            error: function (data) {
                alert("Error occured in folder deleting ." + data.responseText);
            }
        });
    }
}
function deleteMyDocuments(deletingItemId) {
    var confirmmessage = confirm("Are you sure,you want to delete this file ?")
    if (confirmmessage == true) {
        $.ajax({
            url: myCompanyUrl + "/_api/web/lists/GetByTitle('DocumentManagementSystem')/items('" + deletingItemId + "')",
            type: "POST",
            headers:
            {
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "IF-MATCH": "*",
                "X-HTTP-Method": "DELETE"
            },
            success: function (data, status, xhr) {
                $(".context-menu").hide(100);
                var folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");
                GetMyDocumentsWithFilesFolder(folderUrl);
                alert("File Deleted successfully.");
            },
            error: function (xhr, status, error) {
                console.log(data.responseJSON.error);
            }
        });
    }
}
var arrayLinksDoctype = new Array();
function GetDocumentTypeIcon(FileName) {
    //  var status = checkValue(FileName.split('.')[1], arrayLinksDoctype);
    var urlLink = "";

    for (var index = 0; index < arrayLinksDoctype.length; index++) {
        if (arrayLinksDoctype[index].iconType.split('.')[0].indexOf(FileName.split('.')[1]) != -1) {
            urlLink = arrayLinksDoctype[index].image;
        }

    }


    if (urlLink.length == 0) {

        var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/maptoicon(filename='" + FileName + "',progid='',size=0)";
        $.ajax({
            url: url,
            headers: { Accept: "application/json;odata=verbose" },
            async: false,
            success: function (data) {
                var icon = "<img src='" + _spPageContextInfo.webAbsoluteUrl + "/_layouts/15/images/" + data.d.MapToIcon + "'/>";
                urlLink = icon;
                arrayLinksDoctype.push(IconProperties(data.d.MapToIcon, icon));//Add new document type url
            }, eror: function (data) {
                console.log('error');
            }
        });
    }
    //else
    //{
    //    urlLink = arrayLinksDoctype[status];//get the document type image url
    //}
    return urlLink;
}
function IconProperties(iconType, imagePath) {
    var icoProp = [];
    icoProp.iconType = iconType;
    icoProp.image = imagePath;
    return icoProp;
}
function checkValue(value, arr) {
    var status = -1;
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name.indexOf(value) != -1) {
            status = i;
            break;
        }
    }
    return status;
}
function GetDocumentsSharedWithMe(query, siteURL) {
    var Ownurl = siteURL + "/_api/web/Lists/GetByTitle('DocumentManagementSystem')/Items?$select=ID,ServerRedirectedEmbedUri,File_x0020_Type,DocumentNo,DocumentType,Regarding,Details,DocumentWrittenBy,Title,SecurityLevel,AccessLevel,File/Name,File/ServerRelativeUrl,Author/Title,Author/ID,Editor/ID&$orderby=Modified desc&$expand=File,Editor,Author" + query;
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (data) {
            var items = data.d.results;
            var tableHeader ="";// "<div id='mainTablearea' class='table-responsive'><table cellpadding='0' cellspacing='0' border='1' id='tableTempSharedWithMe' class='table-width tinytable table table-bordered table-striped table-hover js-basic-example dataTable no-footer sharedwithme_table'></div><thead class='panel-heading '><tr><th><h6>File Name</h6></th><th><h6>Title</h6></th><th><h6>Document#</h6></th><th ><h6>Type</h6></th><th ><h6>Author</h6></th><th><h6>Regarding</h6></th><th><h6>Details</h6></th><th class='nosort' style='max-width:80px;width:80px'><h6>Download</h6></th><th><h6>Shared By</h6></th></tr></thead><tbody class='panel'>";
            var sharedWithMeTR = "";
            for (var i = 0; i < items.length; i++) {
                var DocumentNo = items[i].DocumentNo;
                if (DocumentNo == null) {
                    DocumentNo = "";
                }
                var DocumentType = items[i].DocumentType;
                if (DocumentType == null) {

                    DocumentType = "";
                }
                var Regarding = items[i].Regarding;
                if (Regarding == null) {
                    Regarding = "";
                }
                var Details = items[i].Details;
                if (Details == null) {
                    Details = "";
                }
                var DocumentWrittenBy = items[i].DocumentWrittenBy;
                if (DocumentWrittenBy == null) {
                    DocumentWrittenBy = "";
                }
                var Title = items[i].Title;
                if (Title == null) {
                    Title = "";
                }
                var SecurityLevel = items[i].SecurityLevel;
                if (SecurityLevel == null) {
                    SecurityLevel = "";
                }
                var AccessLevel = items[i].AccessLevel;
                if (AccessLevel == null) {
                    AccessLevel = "";
                }
                var sharedBy = items[i].Author.Title
                var FileName = items[i].File.Name;

                var FileServerRelativeUrl = items[i].ServerRedirectedEmbedUri;
                if (FileServerRelativeUrl == null || FileServerRelativeUrl == "") {
                    FileServerRelativeUrl = items[i].File.ServerRelativeUrl;
                }
                var documentLink = FileServerRelativeUrl;
                var icon = GetDocumentTypeIcon("." + items[i].File_x0020_Type);

                var downloadlink = "<a href='" + items[i].File.ServerRelativeUrl + "' target='_blank' download><span class='glyphicon glyphicon-download-alt'></span></a>";
                sharedWithMeTR = sharedWithMeTR + "<tr><td><a href='" + documentLink + " ' class='doc_icon' ' target='_blank' >" + icon + FileName + "</a></td><td>" + Title + "</td><td>" + DocumentNo + "</td><td>" + DocumentType + "</td><td>" + DocumentWrittenBy + "</td><td>" + Regarding + "</td><td>" + Details + "</td><td class='dwnld_cell' style='text-align:center'>" + downloadlink + "</td><td>" + sharedBy + "</td></tr>";
            }
           // var completebody = tableHeader + sharedWithMeTR + "</tbody></table>";
              var completebody =sharedWithMeTR ;
            var dvTable = $("#mainDivAreaSharedWithMe");
            dvTable.html("");
$('#documentShareWithmeNoRecordFound').hide();
            if (items.length == 0) {
            $('#documentShareWithmeNoRecordFound').show();
            //    completebody = completebody + "<div style='text-align: center;font-size:14px'>No Record Found</div>"
            }
            dvTable.append(completebody);
            if (items.length > 0) {
                GenerateTableSharedWithMe();
            }
            CommonSharedDocument();


        }, eror: function (data) {

            console.log('error');
        }
    });
}
function CommonSharedDocument() {


}

function updateDocumentProperties(undefineditemID, webUrl, asyncCall) {
    var ListName = "DocumentManagementSystem";
    var Metadata;
    var ItemType = GetItemTypeForListNamee(ListName);

    Metadata = {
        __metadata: {
            'type': ItemType
        },
        SecurityLevel: 'Private'
    };
    updateItemWithIDItemListDocuments(ListName, Metadata, undefineditemID, webUrl, asyncCall);
}
function GetItemTypeForListNamee(ListName) {
    return "SP.Data." + ListName.charAt(0).toUpperCase() + ListName.split(" ").join("").slice(1) + "Item";//"SP.Data." + ListName.charAt(0).toUpperCase() + ListName.split(" ").join("").slice(1) + "ListItem";
}
function updateItemWithIDItemListDocuments(ListName, Metadata, undefineditemID, webUrl, asyncCall) {

    var dfd = $.Deferred();
    var oweburl = webUrl + "/_api/Web/Lists/getByTitle('" + ListName + "')/Items(" + undefineditemID + ")";
    $.ajax({
        url: oweburl,
        type: "POST",
        async: asyncCall,
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose",
            "X-Http-Method": "PATCH",
            "If-Match": '*'
        },
        data: JSON.stringify(Metadata),
        success: function (RESULT) {
            console.log(undefineditemID + ': Item is set permission');
            dfd.resolve(true);

        },
        error: function (error) {
            dfd.reject(error);
            waitingDialog.hide();
        }
    });
    return dfd.promise();
}

function BreakInheritePermissionOnItemSharing(myDocumentsiteURL,serverRelativeFileUrl, undefineditemID, currentMyDocumentItemId, groupuserIdsArray) {
    var headers = {
        "Accept": "application/json;odata=verbose",
        "content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
    var endPointUrl = myDocumentsiteURL + "/_api/web/lists/getByTitle('DocumentManagementSystem')/getItemById(" + undefineditemID + ")/breakroleinheritance(copyRoleAssignments=false, clearSubscopes=true)";
    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        dataType: 'json', success: function (data) {
            var securityLeveltext = $('#shareingTypePermissionLevel').val();//Update Document Properties
            updateDocumentPropertiesOnItemSharing(undefineditemID,serverRelativeFileUrl, securityLeveltext, groupuserIdsArray, myDocumentsiteURL, false);

            $.when(GetAllSharedDocumetnsGroupsID(myDocumentsiteURL, undefineditemID, currentMyDocumentItemId)).done(function (MainExamListItemTemp) {
             

                if ($('#shareingTypePermissionLevel').val() != "Private") {
                    if (groupuserIdsArray != null) {
                        for (var itemIndex = 0; itemIndex < groupuserIdsArray.length; itemIndex++) {
                            //Assign permission to other users
                            var permissionLevelId = $('#txtPermissionLevelId').val();
                            AssignPermissionOnItemSharing(myDocumentsiteURL, undefineditemID, groupuserIdsArray[itemIndex], permissionLevelId);//permission for other users 
                        }
                    }
                    //Send Email Notification for shared document
                    if ($('#chekedSendEmail').prop('checked') == true) {
                        EmailSharedProperties(sharedUsersEmailIDsArrayListItemCollection);
                    }
                }

                $('#myModalDocumentSharing').modal('hide');
                alert('File has been shared.');

            });
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });

}
function AssignPermissionOnItemSharing(myDocumentsiteURL, undefineditemID, userPrincpleId, permissionLevel) {
    var headers = {
        "Accept": "application/json;odata=verbose",
        "content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
    var webUrl = myDocumentsiteURL + "/_api/web/lists/getByTitle('DocumentManagementSystem')/getItemById(" + undefineditemID + ")/roleassignments/addroleassignment(principalid=" + userPrincpleId + ",roleDefId=" + permissionLevel + ")";
    $.ajax(
    {
        url: webUrl,
        type: "POST",
        headers: headers,
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log("User has been assigned permission .");
        },
        error: function (error) {
            console.log(JSON.stringify(error));
            waitingDialog.hide();
        }
    });
}
function updateDocumentPropertiesOnItemSharing(undefineditemID,serverRelativeFileUrl, securityLeveltext, sharedUserArrayListss, webUrl, asyncCall) {

    var divsharedWithPermission = $('#sharedWithPermission').val();
    var divtxtPermissionLevelId = $('#txtPermissionLevelId').val();

    if ($('#shareingTypePermissionLevel').val() == "Private") {
        divtxtPermissionLevelId = "";
        divsharedWithPermission = "";
    }

    if (divsharedWithPermission == "--select--" || divsharedWithPermission == null || divsharedWithPermission == "") {
        divtxtPermissionLevelId = "";
        divsharedWithPermission = "";
    }

    var ListName = "DocumentManagementSystem";
    var Metadata;
    var ItemType = GetItemTypeForListNamee(ListName);
    Metadata = {
        __metadata: {
            'type': ItemType
        },
        SecurityLevel: securityLeveltext,
        PermissionLevel: divsharedWithPermission,
        PermissionLevelId: divtxtPermissionLevelId,
        SharedId: { 'results': sharedUserArrayListss }
    };
      // update metadat without new version
      
        checkoutMyDocument(serverRelativeFileUrl).done(function () {
        updateItemWithIDItemListDocuments(ListName, Metadata, undefineditemID, webUrl, asyncCall).done(function ()
        {
            checkInMyDocument(serverRelativeFileUrl).done(function () {
               var folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");//get current folder path from cookies
                GetMyDocumentsWithFilesFolder(folderUrl);//Reload the documents from cuurent folder
             });
        })
        }).fail(function (err) {
              console.log(err);
        });
      
      
      
      
      
      
    //  updateItemWithIDItemListDocuments(ListName, Metadata, undefineditemID, webUrl, asyncCall);
}


function checkoutMyDocument(filechkouturl) {
  
    var dfd = $.Deferred();
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/getfilebyserverrelativeurl('" + filechkouturl + "')/checkout",
        method: "POST",
        headers:
        {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        success: function (data) {
            var d = data;
            dfd.resolve(data.d);
            console.log("success:File Checked out ");
        },
        error: function (err) {
            console.log("error: " + JSON.stringify(err));
        }
    });
    return dfd;
}

function checkInMyDocument(filechkouturl) {
    var restSource = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getfilebyserverrelativeurl('" + filechkouturl + "')/checkin";
    var dfd = $.Deferred();
    $.ajax(
    {
        'url': restSource,
        'method': 'POST',
        data: JSON.stringify({
            'checkInType': 2,
            'comment': 'whatever'
        }),
        'headers': {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        'success': function (data) {
            var d = data;
            dfd.resolve(data.d);
            console.log('file chekin');
        },
        'error': function (err) {
            dfd.reject(err);
        }
    }
   );
    return dfd;
}

function BreakInheritePermissionOnItem(myDocumentsiteURL, undefineditemID, currentMyDocumentItemId) {
    var headers = {
        "Accept": "application/json;odata=verbose",
        "content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
    var endPointUrl = myDocumentsiteURL + "/_api/web/lists/getByTitle('DocumentManagementSystem')/getItemById(" + undefineditemID + ")/breakroleinheritance(copyRoleAssignments=false, clearSubscopes=true)";
    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        dataType: 'json', success: function (data) {
            $.when(GetAllGroupsID(myDocumentsiteURL, undefineditemID, currentMyDocumentItemId)).done(function (MainExamListItemTemp) {

            });
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });

}
function GetAllSharedDocumetnsGroupsID(myDocumentsiteURL, undefineditemID, currentMyDocumentItemId) {
    var currentdate = new Date();
    var msec = Date.parse(currentdate);
    $.ajax({
        url: myDocumentsiteURL + "/_api/Web/Lists/getByTitle('DocumentManagementSystem')/Items(" + undefineditemID + ")?$expand=RoleAssignments/Member/Users" + msec,
        method: "GET",
        async: false,
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            AssignPermissionOnItemSharing(myDocumentsiteURL, undefineditemID, currentMyDocumentItemId, "1073741829");//Full permission for Current User 
            for (var i = 0; i < data.d.RoleAssignments.results.length; i++) {
                if (data.d.RoleAssignments.results[i].PrincipalId != currentMyDocumentItemId) {
                    DeletePrinciple(myDocumentsiteURL, undefineditemID, data.d.RoleAssignments.results[i].PrincipalId);
                }
            }
            waitingDialog.hide();
        },
        error: function (errorMessage) {
            console.log('error not found users');
            waitingDialog.hide();
        }
    });
}
function GetAllGroupsID(myDocumentsiteURL, undefineditemID, currentMyDocumentItemId) {
    var currentdate = new Date();
    var msec = Date.parse(currentdate);
    $.ajax({
        url: myDocumentsiteURL + "/_api/Web/Lists/getByTitle('DocumentManagementSystem')/Items(" + undefineditemID + ")?$expand=RoleAssignments/Member/Users" + msec,
        method: "GET",
        async: false,
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            AssignPermission(myDocumentsiteURL, undefineditemID, currentMyDocumentItemId, "1073741829");//Full permission for Current User 
            for (var i = 0; i < data.d.RoleAssignments.results.length; i++) {
                if (data.d.RoleAssignments.results[i].PrincipalId != currentMyDocumentItemId) {
                    DeletePrinciple(myDocumentsiteURL, undefineditemID, data.d.RoleAssignments.results[i].PrincipalId);
                }
            }
        },
        error: function (errorMessage) {
            console.log('error not found users');
        }
    });
}
function DeletePrinciple(myDocumentsiteURL, undefineditemID, groupID) {
    var headers = {
        'X-RequestDigest': $('#__REQUESTDIGEST').val(),
        'X-HTTP-Method': 'DELETE'
    }
    var endPointUrl = myDocumentsiteURL + "/_api/web/lists/getByTitle('DocumentManagementSystem')/getItemById(" + undefineditemID + ")/roleassignments/getbyprincipalid(" + groupID + ")";
    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        async: false,
        dataType: 'json', success: function (data) {
            console.log(groupID + ' Successfully removed Permission !');
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });

}
function AssignPermission(myDocumentsiteURL, undefineditemID, userPrincpleId, permissionLevel) {
    var headers = {
        "Accept": "application/json;odata=verbose",
        "content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
    var webUrl = myDocumentsiteURL + "/_api/web/lists/getByTitle('DocumentManagementSystem')/getItemById(" + undefineditemID + ")/roleassignments/addroleassignment(principalid=" + userPrincpleId + ",roleDefId=" + permissionLevel + ")";
    $.ajax(
    {
        url: webUrl,
        type: "POST",
        headers: headers,
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log("User has been assigned permission .");
            updateDocumentProperties(undefineditemID, myDocumentsiteURL, true);
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
app.controller('myCtrl', function ($scope, $http) {

    try 
    {
        departmentID = titanForWork.getQueryStringParameter("DepartmentId");
    }
    catch (e) 
    {

    }

    if (departmentID != null && departmentID != "") 
    {
        $scope.departmenalDocuments = "Yes";

        if (departmentID.indexOf("#") != -1) 
        {
            departmentID = departmentID.split('#')[0];
        }
        
        $scope.departmentID = departmentID;
    }
    else 
    {
        $scope.departmenalDocuments = "DashBoard";
        $scope.departmentID = "";
    }
    companyID = titanForWork.getQueryStringParameter("CompanyId");
    if (companyID.indexOf("#") != -1) {
        companyID = companyID.split('#')[0];
    }
    $scope.companyID = companyID;
    checkDepartmentID = departmentID;
    ShowUploadingButton(companyID, departmentID);
    $scope.PageLoad = function () {
        if ($scope.departmenalDocuments == "DashBoard") {
            $scope.GetCurrentUserID();
        }
        else {
            $scope.GetSiteUrl('Yes');
        }
    }
    $scope.UploadDocuments = function () {
        var sourcelocation = "&sourcelocation=../Pages/ViewAllDocuments.aspx";
        var urllink = "../Pages/UploadDocuments.aspx";
        var departmentLink = "";
        if ($scope.departmenalDocuments == "Yes") {
            departmentLink = "&DepartmentId=" + $scope.departmentID;
        }
        var url = urllink + "?WebAppId=" + $scope.companyID + departmentLink + sourcelocation;
        $(location).attr('href', url);
    }
    $scope.UploadDocumentsDashBoard = function () {
        //Create Cookies for Target Folder
        var cookiesName = "UploadedDocumentTargetFolderURl";
        var cookiesvalue = $('#currentSubFolder').val();

        createCookie(cookiesName, cookiesvalue, 7);
        var sourcelocation = "&sourcelocation=../Pages/MyDocuments.aspx";
        var urllink = "../Pages/UploadDocuments.aspx";
        var departmentLink = "";
        if ($scope.departmenalDocuments == "Yes") {
            departmentLink = "&DepartmentId=" + $scope.departmentID;
        }
        var url = urllink + "?WebAppId=" + $scope.companyID + departmentLink + sourcelocation;
        $(location).attr('href', url);
    }
    $scope.GetSiteUrl = function (departmenalDocuments) {  
           var Ownurl = "";
        if (departmenalDocuments == "Yes" || departmenalDocuments == "No") 
        {
            Ownurl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Departments')/items?$select=ID,CompanyIDId/ID,SiteURL&$filter=ID eq '" + $scope.departmentID + "' and CompanyIDId eq '" + $scope.companyID + "'"
        }
        else 
        {
            Ownurl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Companies')/items?$select=ID,SiteURL&$filter=ID eq '" + $scope.companyID + "'"
        }
        $http({
            url: Ownurl,
            method: "GET",
            async: false,
            headers: { "Accept": "application/json;odata=verbose" }
        }).then(function mySuccess(response)
        {
        
            if (response.data.d.results.length > 0)
            {
                $scope.siteURL = response.data.d.results[0].SiteURL;

                if (departmenalDocuments == "Yes" || departmenalDocuments == "No")
                {
                    if (departmenalDocuments == "Yes")
                    {
                        var query = "&$filter=AccessLevel eq 'Everyone'";
                        GetDocuments(query, $scope.siteURL);
                    }
                    if (departmenalDocuments == "No")
                    {
                        var query = "&$filter=AccessLevel eq 'Department Only'";
                        GetDocuments(query, $scope.siteURL);
                    }
                }
                if (departmenalDocuments != "Yes" && departmenalDocuments != "No")
                {
                    myCompanyUrl = _spPageContextInfo.webAbsoluteUrl; //$scope.siteURL;
                    //Drag Drop Event handler
                    CallDragDropEventFunction();
                    //  var query = "&$filter=(SecurityLevel eq 'Private' or SecurityLevel eq null )  and (Author/ID eq '" + $scope.currentUserId + "' or Editor/ID eq '" + $scope.currentUserId + "')";
                    //   var query = "&$filter=(SecurityLevel eq 'Private' or SecurityLevel eq null )  and Author/ID eq '" + $scope.currentUserId + "'";
                    var query = "&$filter=Author/ID eq '" + $scope.currentUserId + "'";
                    var calBaclCloseQueryString = titanForWork.getQueryStringParameter("closedaction");
                    if (calBaclCloseQueryString == null || calBaclCloseQueryString == "") {
                        calBaclCloseQueryString = "";
                    }
                    var folderUrl = "";
                    if (calBaclCloseQueryString == "close") {
                        folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");
                        if (folderUrl == null || folderUrl == "") {
                            folderUrl = "DocumentManagementSystem/" + folderNameUsedInDesginPage;
                        }
                    }
                    else {
                        folderUrl = "DocumentManagementSystem/" + folderNameUsedInDesginPage;

                    }
                    $('#currentSubFolder').val(folderUrl);
                    GetSubFolders(folderUrl);
                    GetDocumentsMyDocuments(query, myCompanyUrl, folderUrl);
                    //Loop for All companies where DMS is Exist
                   // for (var index = 0; index < response.data.d.results.length; index++)
                   // {
                        //ExtractAllDocuments From All Companies
                        //query = "&$filter=SecurityLevel ne 'Private' and SecurityLevel ne null and (Author/ID ne '" + $scope.currentUserId + "' ne Editor/ID eq '" + $scope.currentUserId + "')";
                        query = "&$filter=SecurityLevel ne 'Private' and SecurityLevel ne null and Author/ID ne '" + $scope.currentUserId + "'";
                        GetDocumentsSharedWithMe(query, myCompanyUrl);//response.data.d.results[index].SiteURL);
                   // }

                }
            }
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }
    $scope.GetMyDepartment = function () {
        var Ownurl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Employees')/items?$select=ID,DepartmentId,LogonName/ID,LogonName/Title,LogonName/UserName,Company/ID&$expand=LogonName,Company&$filter=CompanyId eq '" + $scope.companyID + "' and LogonName/ID eq '" + $scope.currentUserId + "'";
        $http({
            url: Ownurl,
            method: "GET",
            async: false,
            headers: { "Accept": "application/json;odata=verbose" }
        }).then(function mySuccess(response) {
            $scope.departmentID = response.data.d.results[0].DepartmentId;
            $scope.GetSiteUrl('No');
            $scope.GetSiteUrl('DashBoard');

        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }
    $scope.GetCurrentUserID = function () {

        $.ajax({
            url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/currentUser",
            method: "GET",
            headers: {
                "Accept": "application/json; odata=verbose"
            },
            success: function (data) {
                $scope.currentUserId = data.d.Id; //Assigning UserId Variable
                if (data.d.Email != "" && data.d.Email != null) {
                    $scope.currentUserEmailID = data.d.Email;
                    folderNameUsedInDesginPage = $scope.currentUserEmailID.toLowerCase();
                    folderNameUsedInDesginPage = folderNameUsedInDesginPage.replace(/\s/g, '');
                }
                else {
                    $scope.currentUserEmailID = "";
                }

                $scope.GetMyDepartment();
            },
            error: function (data) { }
        });

    }
});