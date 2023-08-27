//var app = angular.module('myApp', []);
var departmentID = "";
var companyID = "";
var sorter;
var sorterSharedWithMe;
var sorterMyDocuments;
var myCompanyUrl = "";
var folderNameUsedInDesginPage = "";
//var departmentPermissionEditDocument = false;
var checkDepartmentID = "";
var commonUsedFolderSharingId = "";
var shredLinkFolderName = "";
var shredLinkFileName = "";
var commonserverRedirectedEmbedUri = "";
var sharedUsersIdArrayListItemCollection = new Array();
var sharedUsersEmailIDsArrayListItemCollection = new Array();
var selectedHistoryDoc = new Array();
var commonMydepartmentWebUrl = "";
var sharedUsersNameToolTip = "";
var departmenalDocumentsView = "";
/*******************************Document Metadata**********************************************/
var selectedDocumentListItem = new Array();
var selectedDocumentserverrelativeurl = new Array();
var EmailFileArray = [];
var arrSharedUserIds = [];
var departmenalDocumentsView = "";

/*****************Shared Documents properties***************************/

var globalsharingDocumentDetails = "";
var globalSharingDocumentDocumentType = "";
/***********************************************************************/
var arrSharedOrgUsers = [];
var arrUserClientWise = [];
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


function editdocumentt(DMSType, deptid, itemID, fileName) {

    $("#myModalupload").modal("show");
    EmptyPeoplePicker("newEmployeePicker");
    myFunc(DMSType, deptid, itemID, fileName);
    GetSiteUrlf(DMSType, deptid, itemID, fileName);
    $("#AttachmentUploadField").val("");
    $("#file2").val("");
    $("#filename").empty();
    $("#ulcontextMenuItems").hide();
    finalFiles = [];
    FinalFiles4Upload = [];
    Tcounter = 0;
    RemoveDuplicate = [];


}


function RightClickEvent() {
    $('.divMenuClick').unbind().click(function () {
        //event.preventDefault();
        $('#ulcontextMenuItems').show();
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
        margin: 20,
        allowedFileTypes: 'image.*, pdf,doc,docx,xlsx,rar,zip,ppt,pptx,dotx,rtf,log,msg,txt,csv,dat,pps,xml,aif,iff,m3u,m4a,mid,mp3,wav,wma,3gp,xls,xlr,zipx,js,html,htm,css,ps1,asp,aspx,cs',
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

function selectedDocumentsEvent() {

    $('.docid').change(function () {
        selectedDocumentListItem = [];
        selectedDocumentserverrelativeurl = [];
        EmailFileArray = [];
        $('.docid').each(function () {
            if ($(this).prop("checked") == true) {
                selectedDocumentListItem.push($(this).val());

                selectedDocumentserverrelativeurl.push($(this).attr("title"));
                var currentRow = $(this).closest("tr");

                var col1 = currentRow.find("td:eq(1)").text(); // get current row 1st TD value
                var col2 = currentRow.find("td:eq(3)").text(); // get current row 2nd TD
                var col3 = currentRow.find("td:eq(4)").text(); // get current row 2nd TD
                var col4 = currentRow.find("td:eq(5)").text(); // get current row 3rd TD
                var col5 = currentRow.find(".docid").attr('title'); // get current row 3rd TD

                EmailFileArray.push({ File: col1, Title: col2, Reference: col3, Type: col4, serverUrl: col5 });
            }
        });

        console.log(selectedDocumentListItem);
    });
}

function GetDocumentsMyDocuments(query, siteURL, folderUrl) {
    var Ownurl = siteURL + "/_api/Web/GetFolderByServerRelativeUrl('" + folderUrl + "')?$select=ID,EncodedAbsUrl,File_x0020_Type&$expand=Folders,Folders/ListItemAllFields,Files,Files/ListItemAllFields&$orderby=Modified desc" + query;
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: true,
        success: function (data) {
            var tableHeader = "";// "<div id='mainTablearea' class='table-responsive'><table cellpadding='0'  cellspacing='0' border='1' id='tableTempMyDocuments' class='table-width tinytable table table-bordered table-striped table-hover js-basic-example dataTable no-footer mydocuments_table'></div><thead class='panel-heading'><tr><th><h6 data-localize='File'>File</h6></th><th class='nosort' style='max-width:60px;width:60px'><h6 data-localize='Action'>Action</h6></th><th><h6 data-localize='Title'>Title</h6></th><th><h6 data-localize='DocumentNo'>Document#</h6></th><th ><h6 data-localize='Type'>Type</h6></th><th ><h6 data-localize='Author'>Author</h6></th><th><h6 data-localize='Details'>Details</h6></th><th><h6 data-localize='SharedWith'>Shared With</h6></th></tr></thead><tbody class='panel'>";
            var tr = "";
            var files = data.d.Files.results;
            var folders = data.d.Folders.results;
            var itemsCount = folders.length + files.length;
            $('#lblMYDocumentCount').text(itemsCount);

            folders.sort(function (a, b) {
                var dateA = new Date(a.TimeLastModified), dateB = new Date(b.TimeLastModified);
                return dateB - dateA;
            });
            for (var i = 0; i < folders.length; i++) {
                sharedUsersNameToolTip = "";//Clear tool tip before adding
                var encodeURILink = encodeURI(folders[i].ServerRelativeUrl)
                var documentLink = "javascript:GetSubFolders('" + encodeURILink + "')";
                var folderIcon = "<span class='glyphicon glyphicon-folder-open'></span>&nbsp;&nbsp;";
                var menuFolderHTML = "";
                menuFolderHTML += "<li><a href=" + documentLink + "><i class='fa fa-folder-open'></i> Open</a></li>";
                menuFolderHTML += "<li><a href=javascript:DeleteSelectedFolder('" + encodeURILink + "','" + folders[i].ListItemAllFields.Id + "')><i class='fa fa-trash'></i> Delete</a></li>";
                menuFolderHTML += "<li><a href=javascript:GetSharedFolderProperties('" + folders[i].ListItemAllFields.Id + "','" + encodeURI(folders[i].Name) + "')><i class='fa fa-share-alt'></i> Share</a></li>";
                var regardingContextMenuDIV = "<div class='divMenuClick'><i class='fa fa-cog' style='font-size:20px'></i><div class='menuListItems' style='display:none' >" + menuFolderHTML + "</div></div>";
                tr = tr + "<tr><td></td><td><a href=" + documentLink + ">" + folderIcon + folders[i].Name + "</a></td><td style='text-align: center'>" + regardingContextMenuDIV + "</td><td>" + folders[i].Name + "</td><td></td><td>Folder</td><td></td><td></td><td></td>";
                if (folders[i].ListItemAllFields.SecurityLevel != "Private" && folders[i].ListItemAllFields.SecurityLevel != null) {

                    tr = tr + "<td><a href=javascript:GetSharedHistory('" + folders[i].ListItemAllFields.ID + "','" + encodeURI(folders[i].ServerRelativeUrl) + "','" + escape(folders[i].ListItemAllFields.Title) + "','" + escape(folders[i].ListItemAllFields.DocumentNo) + "','" + escape(folders[i].Name) + "','Folder')><i class='fa fa-users' style='font-size: 17px;'></i></a></td></tr>";
                }
                else {
                    tr = tr + "<td></td></tr>";
                }
            }

            files.sort(function (a, b) {
                var dateA = new Date(a.TimeLastModified), dateB = new Date(b.TimeLastModified);
                return dateB - dateA;
            });

            for (var i = 0; i < files.length; i++) {
                var icon = GetDocumentTypeIcon(files[i].Name);
                var propertiesServerRelativeUrl = files[i].ListItemAllFields.ServerRedirectedEmbedUri; //siteURL + "/_layouts/15/WopiFrame.aspx?sourcedoc={" + files[i].UniqueId + "}&action=view";
                var regardingContextMenuDIV = "";//"<div class='divMenuClick'><i class='fa fa-cog' style='font-size:36px'></i></div>";//files[i].ListItemAllFields.Regarding;
                var menuHTML = "";
                var sourcelocation = "&sourcelocation=../Pages/MyDocuments.aspx";
                var editPropertiesLink = "DMSType=Company&WebAppId=" + companyID + "&itemID=" + files[i].ListItemAllFields.ID + "&fileName=" + files[i].Name;
                if (propertiesServerRelativeUrl == null || propertiesServerRelativeUrl == "") {
                    //document  is not ediatable in browser
                    propertiesServerRelativeUrl = siteURL + "/DocumentManagementSystem/Forms/AllItems.aspx?id=" + encodeURIComponent(files[i].ServerRelativeUrl) + "&parent=" + encodeURIComponent(files[i].ServerRelativeUrl.substr(0, files[i].ServerRelativeUrl.lastIndexOf("/") + 0));
                    //encodeURI(files[i].ServerRelativeUrl);
                    //Item menu list
                    menuHTML += "<li><a href=javascript:ViewinBrowser('" + propertiesServerRelativeUrl + "')><i class='fa fa-eye'></i><span data-localize='View'>View</span></a></li>";
                    menuHTML += "<li><a  id='editt' onclick=editdocumentt('Company','','" + files[i].ListItemAllFields.ID + "','" + escape(files[i].Name) + "')><i class='fa fa-edit'></i><span data-localize='Properties'>Properties</span></a></li>";
                    menuHTML += "<li><a href=javascript:deleteMyDocuments(" + files[i].ListItemAllFields.Id + ")><i class='fa fa-trash'></i><span data-localize='Delete'>Delete</span></a></li>";
                    menuHTML += "<li><a download href='" + encodeURI(files[i].ServerRelativeUrl) + "' onclick=javascript:DownloadFile('" + encodeURI(files[i].ServerRelativeUrl) + "')><i class='fa fa-download'></i><span data-localize='Download'>Download</span></a></li>";
                    menuHTML += "<li><a href=javascript:GetFileVersions('" + encodeURI(files[i].ServerRelativeUrl) + "','" + files[i].ListItemAllFields.Created + "','" + files[i].ListItemAllFields.ID + "','" + escape(files[i].ListItemAllFields.Title) + "','" + files[i].ListItemAllFields.DocumentNo + "','" + escape(files[i].Name) + "')><i class='fa fa-files-o'></i><span data-localize='Versions'>File Versions</span></a></li>";
                    menuHTML += "<li><a href=javascript:GetSharedHistory('" + files[i].ListItemAllFields.ID + "','" + encodeURI(files[i].ServerRelativeUrl) + "','" + escape(files[i].ListItemAllFields.Title) + "','" + escape(files[i].ListItemAllFields.DocumentNo) + "','" + escape(files[i].Name) + "','File')><i class='fa fa-files-o'></i><span data-localize='Versions'>Shared History</span></a></li>";

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
                    menuHTML += "<li><a  id='editt' onclick=editdocumentt('Company','','" + files[i].ListItemAllFields.ID + "','" + escape(files[i].Name) + "')><i class='fa fa-edit'></i><span data-localize='Properties'>Properties</span></a></li>";
                    //  menuHTML += "<li><a href='" + editPropertiesLink + "'><i class='fa fa-edit'></i> Properties</a></li>";
                    //  menuHTML += "<li><a href=javascript:GetSharedDocumentProperties('" + files[i].ListItemAllFields.Id + "')><i class='fa fa-share-alt'></i> Share</a></li>";
                    menuHTML += "<li><a href=javascript:deleteMyDocuments(" + files[i].ListItemAllFields.Id + ")><i class='fa fa-trash'></i> Delete</a></li>";
                    menuHTML += "<li><a href='" + encodeURI(files[i].ServerRelativeUrl) + "' onclick=javascript:DownloadFile('" + encodeURI(files[i].ServerRelativeUrl) + "') download><i class='fa fa-download'></i> Download</a></li>";
                    menuHTML += "<li><a href=javascript:GetFileVersions('" + encodeURI(files[i].ServerRelativeUrl) + "','" + files[i].ListItemAllFields.Created + "','" + files[i].ListItemAllFields.ID + "','" + escape(files[i].ListItemAllFields.Title) + "','" + files[i].ListItemAllFields.DocumentNo + "','" + escape(files[i].Name) + "')><i class='fa fa-files-o'></i>File Versions</a></li>";
                    menuHTML += "<li><a href=javascript:GetSharedHistory('" + files[i].ListItemAllFields.ID + "','" + encodeURI(files[i].ServerRelativeUrl) + "','" + escape(files[i].ListItemAllFields.Title) + "','" + escape(files[i].ListItemAllFields.DocumentNo) + "','" + escape(files[i].Name) + "','File')><i class='fa fa-files-o'></i><span data-localize='Versions'>Shared History</span></a></li>";

                    regardingContextMenuDIV = "<div class='divMenuClick'><i class='fa fa-cog' style='font-size:20px'></i><div class='menuListItems' style='display:none' >" + menuHTML + "</div></div>";
                }
                if (files[i].Name != null) {
                    var DocumentNo = files[i].ListItemAllFields.DocumentNo;
                    if (DocumentNo == null) {
                        DocumentNo = "";
                    }
                    var DocumentType = files[i].ListItemAllFields.DocumentType;
                    if (DocumentType == null || DocumentType == "--select--") {

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
                    var FileName = files[i].Name;
                    var Title = files[i].ListItemAllFields.Title;
                    if (Title == null) {
                        Title = "";// FileName;
                    }
                    var SecurityLevel = files[i].ListItemAllFields.SecurityLevel;
                    sharedUsersNameToolTip = "";//Clear tool tip before adding
                    var SharedWIthFolders = "";
                    var sharingiconlink = "";
                    if (SecurityLevel != "Private" && SecurityLevel != null) {
                        sharingiconlink = "<li style='margin-left: 26px;'><a title='Shared with users' href=javascript:GetSharedHistory('" + files[i].ListItemAllFields.ID + "','" + encodeURI(files[i].ServerRelativeUrl) + "','" + escape(files[i].ListItemAllFields.Title) + "','" + escape(files[i].ListItemAllFields.DocumentNo) + "','" + escape(files[i].Name) + "','File')><i  class='fa fa-users' style='font-size: 17px;'></i> </a></li>";
                    }

                    var lastModifiedDate = titanForWork.convertJSONDateAMPMWithDate(files[i].ListItemAllFields.Modified);

                    var parameter = "&itemID=" + files[i].ListItemAllFields.ID + "&fileName=" + FileName + sourcelocation;
                    // var parameterLink =sharedtooltip;// SecurityLevel;// "<a href='../Pages/UploadDocuments.aspx?DMSType=Company&WebAppId=" + companyID + parameter + "'>" + SecurityLevel + "</a>";
                    var AccessLevel = files[i].ListItemAllFields.AccessLevel;
                    if (AccessLevel == null) {
                        AccessLevel = "";
                    }

                    var downloadlink = "<a href='" + files[i].ServerRelativeUrl + "' target='_blank'><span class='glyphicon glyphicon-download-alt'></span></a>";
                    if (files[i].Name.includes(".pdf") == false) {//to check if it's PDF
                        propertiesServerRelativeUrl = propertiesServerRelativeUrl.replace("interactivepreview", "default&mobileredirect=true");
                    }
                    tr = tr + "<tr><td><input type='checkbox' class='docid'  value='" + files[i].ListItemAllFields.ID + "' title='" + propertiesServerRelativeUrl + "'></td><td><a onclick='priviewfile(this);' name='" + propertiesServerRelativeUrl + "' href='javascript:void(0)' class='doc_icon' >" + icon + FileName + "</a></td><td style='text-align: center'>" + regardingContextMenuDIV + "</td><td>" + Title + "</td><td>" + DocumentNo + "</td><td>" + DocumentType + "</td><td>" + DocumentWrittenBy + "</td><td>" + lastModifiedDate + "</td><td>" + Details + "</td><td>" + sharingiconlink + "</td></tr>";
                    //tr = tr + "<tr><td><input type='checkbox' class='docid'  value='"+files[i].ListItemAllFields.ID+"' title='" + files[i].ServerRelativeUrl + "'></td><td><a name='" + propertiesServerRelativeUrl + "' href='" + propertiesServerRelativeUrl + "' class='doc_icon' target='_blank' >" + icon + FileName + "</a></td><td style='text-align: center'>" + regardingContextMenuDIV + "</td><td>" + Title + "</td><td>" + DocumentNo + "</td><td>" + DocumentType + "</td><td>" + DocumentWrittenBy + "</td><td>" + lastModifiedDate + "</td><td>" + Details + "</td><td>" + sharingiconlink + "</td></tr>";

                }

            }
            //    var completebody = tableHeader + tr + "</tbody></table>";
            var completebody = tr;
            var dvTable = $("#mainDivAreaMyDocuments");
            dvTable.html("");
            $('#mydmsNorecordFound').hide();
            if (itemsCount == 0) {
                $('#mydmsNorecordFound').show();
                //  completebody = completebody + "<div style='text-align: center;font-size:14px'>No Record Found</div>"
            }
            dvTable.append(completebody);
            if (itemsCount > 0) {
                GenerateTableMyDocuments();
                $('.mydocumentsPagingValue').prop('selectedIndex', 1);
                $("#columnsMyDocuments").empty();
                $("#columnsMyDocuments").append('<option value="-1">All Columns</option>');
                $("#columnsMyDocuments").append('<option value="1">File</option>');
                $("#columnsMyDocuments").append('<option value="3">Title</option>');
                $("#columnsMyDocuments").append('<option value="4">Reference#</option>');
                $("#columnsMyDocuments").append('<option value="5">Type</option>');
                $("#columnsMyDocuments").append('<option value="6">Author</option>');
                $("#columnsMyDocuments").append('<option value="7">Modified Date</option>');
                $("#columnsMyDocuments").append('<option value="8">Details</option>');
            }
            RightClickEvent();
            selectedDocumentsEvent()//Checkbox Selection to update metadata
            $('[data-toggle="popover"]').popover();


        }, eror: function (data) {

            console.log('error');
        }
    });
}

//open files of 'My documents' in Iframe
function priviewfile(Action) {
    //$("#Iframeview").attr("src", Action.href);
    src = Action.name;
    var container = $("#doc-viewer").empty();
    $('<iframe>', {
        src: src,
        id: 'iframe-viewer',
        frameborder: 0,
        scrolling: 'yes',
        width: '100%',
        height: '98%'
    }).appendTo(container);
    $("#AttachmentView").modal("show");
}

function removeLastComma(str) {
    return str.replace(/,(\s+)?$/, '');
};

function GetSharedFolderProperties(folderItemId, folderNameParam) {
    //Load Shared Folder Properties
    BindMySharingGroups();
    commonUsedFolderSharingId = folderItemId;
    $('#chekedFolderSendEmail').attr('checked', false);//Don't send email if document sharing type is private 
    sharedUsersIdArrayListItemCollection = [];
    arrUserClientWise = [];
    $(".mulinput").prop("checked", false);
    $(".multiBox").text("Select");
    sharedUsersEmailIDsArrayListItemCollection = [];
    clearPeoplePickerControl("customShareingFolderPoplePicker");
    waitingDialog.show();
    var Ownurl = myCompanyUrl + "/_api/web/lists/GetByTitle('SharedDocument')/items?$select=ID,Title,DocumentURL,DocumentID,DocumentType,SharedGroup,PermissionType,SharedUsers/ID,SharedUsers/Title,SharedUsers/UserName&$expand=SharedUsers&$filter=DocumentID  eq '" + commonUsedFolderSharingId + "'"
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: true,
        success: function (response) {
            $('#myModalFolderSharing').modal('show');
            $('#lblFolderTiltle').html(folderNameParam);
            if (response.d.results.length > 0) {
                $('#shareingTypeFolderPermissionLevel').val(response.d.results[0].SharedGroup);
                if (response.d.results[0].SharedGroup != null && response.d.results[0].SharedGroup != "") {
                    ShowHideFolderPeoplePickerControlAndOther(response.d.results[0].SharedGroup)
                }
                if (response.d.results[0].SharedGroup != "Private") {
                    $("#shareingTypeFolderPermissionLevel").val('0');
                }
            }
            waitingDialog.hide();

        }, myError: function (response) {
            waitingDialog.hide();
        }
    });
}

function DownloadFile(itemURL) {
    $(".context-menu").hide();
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
            //dropdown for Document permission level
            $('#shareingTypePermissionLevel').empty().append('<option value="0">-Select Sharing-</option>');
            $("#shareingTypePermissionLevel").append($("<option></option>").attr("value", "Selective").text("Selective"));
            $("#shareingTypePermissionLevel").append($("<option></option>").attr("value", "Organization").text("Organization"));
            for (var groupIndex = 0; groupIndex < response.d.results.length; groupIndex++) {
                $("#shareingTypePermissionLevel").append($("<option></option>").attr("value", response.d.results[groupIndex].SharingLevel).text(response.d.results[groupIndex].SharingLevel));
            }
            //dropdown for folder permission level
            $('#shareingTypeFolderPermissionLevel').empty().append('<option value="0">-Select Sharing-</option>');
            $("#shareingTypeFolderPermissionLevel").append($("<option></option>").attr("value", "Private").text("Private"));
            $("#shareingTypeFolderPermissionLevel").append($("<option></option>").attr("value", "Selective").text("Selective"));
            $("#shareingTypeFolderPermissionLevel").append($("<option></option>").attr("value", "Organization").text("Organization"));
            for (var groupIndex = 0; groupIndex < response.d.results.length; groupIndex++) {
                $("#shareingTypeFolderPermissionLevel").append($("<option></option>").attr("value", response.d.results[groupIndex].SharingLevel).text(response.d.results[groupIndex].SharingLevel));
            }




        }, eror: function (response) {
            console.log('error');
        }
    });
}

function UpdateMultipleItemsMetadat() {

    var itemUpdated = 1;
    for (var index = 0; index < selectedDocumentListItem.length; index++) {
        var ListName = "DocumentManagementSystem";
        var Metadata;
        var ItemType = GetItemTypeForListNamee(ListName);
        var txtMyDocumentPropertiesTitle = $("#txtMyDocumentPropertiesTitle").val();
        if (txtMyDocumentPropertiesTitle.trim().length == 0) {
            txtMyDocumentPropertiesTitle = "";
        }
        var txtMyDocumentPropertiesReferenceNo = $("#txtMyDocumentPropertiesReferenceNo").val();
        if (txtMyDocumentPropertiesReferenceNo.trim().length == 0) {
            txtMyDocumentPropertiesReferenceNo = "";
        }
        var txtMyDocumentPropertiesAuthor = $("#txtMyDocumentPropertiesAuthor").val();
        if (txtMyDocumentPropertiesAuthor.trim().length == 0) {
            txtMyDocumentPropertiesAuthor = "";
        }
        var ddlMyDocumentPropertiesDetails = $("#ddlMyDocumentPropertiesDetails").val();
        if (ddlMyDocumentPropertiesDetails.trim().length == 0) {
            ddlMyDocumentPropertiesDetails = "";
        }
        var ddlMyDocumentPropertiesType = $("#ddlMyDocumentPropertiesType").val();
        if (ddlMyDocumentPropertiesType == null) {
            ddlMyDocumentPropertiesType = "";
        }
        Metadata = {
            __metadata: {
                'type': ItemType
            },
            Title: txtMyDocumentPropertiesTitle,
            DocumentNo: txtMyDocumentPropertiesReferenceNo,
            DocumentType: ddlMyDocumentPropertiesType,
            DocumentWrittenBy: txtMyDocumentPropertiesAuthor,
            Details: ddlMyDocumentPropertiesDetails
        };

        if ($("#txtMyDocumentPropertiesTitleCHK").prop("checked") == false) {
            delete Metadata["Title"];
        }
        if ($("#txtMyDocumentPropertiesReferenceNoCHK").prop("checked") == false) {
            delete Metadata["DocumentNo"];
        }
        if ($("#ddlMyDocumentPropertiesTypeCHK").prop("checked") == false) {
            delete Metadata["DocumentType"];
        }
        if ($("#txtMyDocumentPropertiesAuthorCHK").prop("checked") == false) {
            delete Metadata["DocumentWrittenBy"];
        }
        if ($("#ddlMyDocumentPropertiesDetailsCHK").prop("checked") == false) {
            delete Metadata["Details"];
        }

        var webUrl = _spPageContextInfo.webAbsoluteUrl;
        $.when(updateItemWithIDItemListDocuments(ListName, Metadata, selectedDocumentListItem[index], webUrl, false)).done(function (response) {
            console.log(response + " :  Item Updated !");
            if (itemUpdated == selectedDocumentListItem.length) {
                //Reload documents
                var folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");
                GetMyDocumentsWithFilesFolder(folderUrl);
                $('#modalMyDocumentProperties').modal('hide');
                waitingDialog.hide();
                alert("Metadata updated successfully.");
                ClearAllMetadatControl();
                selectedDocumentListItem = [];
                selectedDocumentserverrelativeurl = [];
            }
            itemUpdated++;
        });
        waitingDialog.hide();
    }
}

function ClearAllMetadatControl() {
    $("#txtMyDocumentPropertiesTitle").val("");
    $("#txtMyDocumentPropertiesReferenceNo").val("");
    $("#txtMyDocumentPropertiesAuthor").val("");
    $("#ddlMyDocumentPropertiesDetails").val("");

    $("#txtMyDocumentPropertiesTitleCHK").prop("checked", false);
    $("#txtMyDocumentPropertiesReferenceNoCHK").prop("checked", false);
    $("#ddlMyDocumentPropertiesTypeCHK").prop("checked", false);
    $("#txtMyDocumentPropertiesAuthorCHK").prop("checked", false);
    $("#ddlMyDocumentPropertiesDetailsCHK").prop("checked", false);

    //$("#ddlMyDocumentPropertiesType").val("");
}

function BindDMSDocumentType() {
    var Ownurl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('CategoryMaster')/items?$select=CategoryType,CatogeryName&$filter=CategoryType eq 'Document'";
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: true,
        success: function (response) {

            for (var index = 0; index < response.d.results.length; index++) {
                $("#ddlMyDocumentPropertiesType").append('<option value="' + response.d.results[index].CatogeryName + '">' + response.d.results[index].CatogeryName + '</option>');
            }
        }, myError: function (response) {
            waitingDialog.hide();
        }
    });
}


$(document).ready(function () {
    ///////////////////////Properies form metadat//////////////
    userActivityNotificationEntry(_spPageContextInfo.userId, window.location);
    BindDMSDocumentType();
    $('#EditMetadata').click(function () {

        if (selectedDocumentListItem.length > 0) {
            //set current user author in metadat form
            $("#txtMyDocumentPropertiesAuthor").val(_spPageContextInfo.userDisplayName);

            $('#btnSubmitFormProperties2').hide();
            $('#btnSubmitFormProperties').show();

            $('#modalMyDocumentProperties').modal('show');
        }
        else {
            alert("Please select one or more documents.");
        }
    });

    $('#btnCancelFormProperties').click(function () {
        $('#modalMyDocumentProperties').modal('hide');
        ClearAllMetadatControl();

    });

    $('#btnSubmitFormProperties').click(function () {
        if ($("#txtMyDocumentPropertiesTitleCHK").prop("checked") == true) {
            if ($("#txtMyDocumentPropertiesTitle").val().trim().length == 0) {
                alert("Please enter Title.")
                return false;
            }
        }
        if ($("#txtMyDocumentPropertiesReferenceNoCHK").prop("checked") == true) {
            if ($("#txtMyDocumentPropertiesReferenceNo").val().trim().length == 0) {
                alert("Please enter Reference number.")
                return false;
            }
        }
        if ($("#ddlMyDocumentPropertiesTypeCHK").prop("checked") == true) {
            if ($("#ddlMyDocumentPropertiesType").val() == null) {
                alert("Please select Type.")
                return false;
            }
        }
        if ($("#txtMyDocumentPropertiesAuthorCHK").prop("checked") == true) {
            if ($("#txtMyDocumentPropertiesAuthor").val().trim().length == 0) {
                alert("Please enter Author name.")
                return false;
            }
        }
        if ($("#ddlMyDocumentPropertiesDetailsCHK").prop("checked") == true) {
            if ($("#ddlMyDocumentPropertiesDetails").val().trim().length == 0) {
                alert("Please enter Details.")
                return false;
            }
        }


        if ($("#txtMyDocumentPropertiesTitleCHK").prop("checked") == false &&
        $("#txtMyDocumentPropertiesReferenceNoCHK").prop("checked") == false &&
        $("#ddlMyDocumentPropertiesTypeCHK").prop("checked") == false &&
        $("#txtMyDocumentPropertiesAuthorCHK").prop("checked") == false &&
        $("#ddlMyDocumentPropertiesDetailsCHK").prop("checked") == false) {
            alert("Please select any option,to update the metadata.");
            return;
        }
        waitingDialog.show();
        setTimeout(function () { UpdateMultipleItemsMetadat() }, 2000);
    });

    //---------------------------Load Email Template------------------------------
    GetEmailTemplate();

    //---------------------File Sharing----------------------
    $('#shareingTypePermissionLevel').change(function () {
        clearPeoplePickerControl("customShareingPoplePicker");
        $(".peoplepickerdivshowhide").show();
        if ($(this).val() == "Organization") {
            $(".orgDropdowndiv").show();
            $(".peoplepickerdivshowhide").hide();
            if ($("#ddlOrgName").val() == null) {
                getGuestClients('ddlOrgName');
            }
            else {
                $(".mulinput").prop("checked", false);
                $(".multiBox").text("Select");
            }
        }
        else if ($(this).val() == '0') {
            $(".orgDropdowndiv").hide();
            $(".peoplepickerdivshowhide").hide();
        }
        else if ($(this).val() != "Selective" && $(this).val() != "0") {
            $(".orgDropdowndiv").hide();
            GetMySharingGroupEmps($(this).val(), "File");
        }
        else {
            $(".orgDropdowndiv").hide();
        }
        $("#sharedUsersLists").hide();
        //ShowHidePeoplePickerControlAndOther($(this).val());
    });

    /*$('#ddlOrgName').change(function () {
        getOrgEmps($('#ddlOrgName :selected').text()); //get the employees for the selected Organization
    });*/
    /*$('#ddlOrgNameUpload').change(function () {
        getOrgEmps($('#ddlOrgNameUpload :selected').text()); //get the employees for the selected Organization when upload
    });*/
    /*$('#ddlOrgNameFolder').change(function () {
        getOrgEmps($('#ddlOrgNameFolder :selected').text()); //get the employees for the selected Organization - Folder Sharing
    });*/

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
        if (txtDocshareingTypePermissionLevel == "Selective") {
            sharedUsersIdArrayListItemCollection = [];
            arrUserClientWise = [];
            $(".mulinput").prop("checked", false);
            $(".multiBox").text("Select");
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
            if (txttsharedWithPermission == null || txttsharedWithPermission == "" || txttsharedWithPermission == "--select--") {
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
        var serverRelativeFileUrl = GetFileServerRelativeUrlById(txtSharedDocumetnOnDemandId, "File");
        if (txtDocshareingTypePermissionLevel == "Private") {
            $.when(BreakInheritePermissionOnItemSharing(myCompanyUrl, serverRelativeFileUrl, txtSharedDocumetnOnDemandId, _spPageContextInfo.userId, sharedUsersIdArrayListItemCollection)).done(function (MainExamListItemTemp) {
                DeleteSharedLink(txtSharedDocumetnOnDemandId);//Delete already shared link
            });
        }
        else {
            var fileFolderSharedWith = $('#shareingTypePermissionLevel').val();
            var sharedWithFileFolderPermission = $('#sharedWithPermission').val();
            ShareFilesFolder(serverRelativeFileUrl, "File", '');
            //  DeleteSharedLink(txtSharedDocumetnOnDemandId);//Delete already shared link
            if (sharedUsersIdArrayListItemCollection.length > 0) {
                var securityLeveltext = $('#shareingTypePermissionLevel').val();//Update Document Properties
                updateDocumentPropertiesOnItemSharing(txtSharedDocumetnOnDemandId, serverRelativeFileUrl, securityLeveltext, sharedUsersIdArrayListItemCollection, myCompanyUrl, false);
                AddSharedLinkToList22(shredLinkFileName, serverRelativeFileUrl, sharedUsersIdArrayListItemCollection, txtSharedDocumetnOnDemandId, "File", fileFolderSharedWith, sharedWithFileFolderPermission, 'ShareOnly');
            }
        }

    });

    $('#sharedWithPermission').change(function () {
        getTargetRoleDefinitionIdOnDemand();
    });

    $('#btnCancelShareDocumetns, #btnCloseShare').click(function () {
        $(".mulinput").prop("checked", false);
        $(".multiBox").text("Select");
        $('#myModalDocumentSharing').modal('hide');
        $('.peoplepickerdivshowhide').modal('hide');
        $("#sharedUsersLists").html("");
        $(".orgDropdowndiv").hide();
        sharedUsersEmailIDsArrayListItemCollection = [];
        sharedUsersIdArrayListItemCollection = [];
        arrUserClientWise = [];
    });
    //---------------------End File Sharing----------------------

    //-----------------------Folder Sharing----------------------
    $('#shareingTypeFolderPermissionLevel').change(function () {
        clearPeoplePickerControl("customShareingFolderPoplePicker");
        $(".folderpeoplepickerdivshowhide").show();
        if ($(this).val() == "Organization") {
            $(".orgDropdowndivFolder").show();
            $(".folderpeoplepickerdivshowhide").hide();
            if ($("#ddlOrgNameFolder").val() == null) {
                getGuestClients('ddlOrgNameFolder');
            }
            else {
                $(".mulinput").prop("checked", false);
                $(".multiBox").text("Select");
            }
        }
        else if ($(this).val() == '0' || $(this).val() == 'Private') {
            $(".orgDropdowndivFolder").hide();
            $(".folderpeoplepickerdivshowhide").hide();
        }
        else if ($(this).val() != "Selective" && $(this).val() != "0") {
            $(".orgDropdowndivFolder").hide();
            GetMyShareingGroupUsers($(this).val(), "Folder");
        }
        else {
            $(".orgDropdowndivFolder").hide();
        }
        $("#sharedUsersLists").hide();
    });

    $('.btnCancelShareFolder').click(function () {
        $('#myModalFolderSharing').modal('hide');
        $("#sharedFolderUsersLists").html("");
        $(".mulinput").prop("checked", false);
        $(".multiBox").text("Select");
        $(".orgDropdowndivFolder").hide();
        $("#sharedWithFolderPermission").val("--select--");
        sharedUsersEmailIDsArrayListItemCollection = [];
        sharedUsersIdArrayListItemCollection = [];
        arrUserClientWise = [];
    });
    $('.uploadAttachmentCancel').click(function () {
        $('#myModalupload').modal('hide');
        $(".mulinput").prop("checked", false);
        $(".multiBox").text("Select");
        sharedUsersEmailIDsArrayListItemCollection = [];
        sharedUsersIdArrayListItemCollection = [];
        arrUserClientWise = [];
    });

    $('#btnShareFolder').click(function () {
        var dlgTitle = 'Sharing folder...';
        var dlgMsg = '<br />Please wait!!';
        var dlgHeight = 200;
        var dlgWidth = 400;
        SP.SOD.loadMultiple(['strings.js', 'sp.ui.dialog.js'], function () {
            currentDlgShare = SP.UI.ModalDialog.showWaitScreenWithNoClose(dlgTitle, dlgMsg, dlgHeight, dlgWidth);
        });
        setTimeout(function () {
            AddFolderPermission();
        }, 100);
    });

    //-----------------------End Folder Sharing----------------------

    //change dropdown to checkable dropdown starts-------------------
    $(document).on("click", ".MultiCheckBox", function () {
        var detail = $(this).next();
        detail.show();
    });

    $(document).on("click", ".MultiCheckBoxDetailHeader input", function (e) {
        e.stopPropagation();
        var hc = $(this).prop("checked");
        $(this).closest(".MultiCheckBoxDetail").find(".MultiCheckBoxDetailBody input").prop("checked", hc);
        $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();
    });

    $(document).on("click", ".MultiCheckBoxDetailHeader", function (e) {
        var inp = $(this).find("input");
        var chk = inp.prop("checked");
        inp.prop("checked", !chk);
        $(this).closest(".MultiCheckBoxDetail").find(".MultiCheckBoxDetailBody input").prop("checked", !chk);
        $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();
    });

    $(document).on("click", ".MultiCheckBoxDetail .cont input", function (e) {
        e.stopPropagation();
        $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();

        var val = ($(".MultiCheckBoxDetailBody input:checked").length == $(".MultiCheckBoxDetailBody input").length)
        $(".MultiCheckBoxDetailHeader input").prop("checked", val);
    });

    $(document).on("click", ".MultiCheckBoxDetail .cont", function (e) {
        var inp = $(this).find("input");
        var chk = inp.prop("checked");
        inp.prop("checked", !chk);

        var multiCheckBoxDetail = $(this).closest(".MultiCheckBoxDetail");
        var multiCheckBoxDetailBody = $(this).closest(".MultiCheckBoxDetailBody");
        multiCheckBoxDetail.next().UpdateSelect();

        var val = ($(".MultiCheckBoxDetailBody input:checked").length == $(".MultiCheckBoxDetailBody input").length)
        $(".MultiCheckBoxDetailHeader input").prop("checked", val);
    });

    $(document).mouseup(function (e) {
        var container = $(".MultiCheckBoxDetail");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
    //change dropdown to checkable dropdown ends-------------------

    $("#permissionStatus").change(function () {
        permissionStaus = $("#permissionStatus").val();
        CurrentPermissionStatus(permissionStaus);
    });

    $("#selectAll").click(function () {
        $(".historydocid").prop("checked", $(this).prop("checked"));
        selectedHistoryDoc = [];
        selectedHistoryDocrelativeurl = [];
        $('.historydocid').each(function () {
            if ($(this).prop("checked") == true) {
                selectedHistoryDoc.push($(this).val());
                $("#revokebtn").show();
            }
            else {
                $("#revokebtn").hide();
            }
        });
    });

    try {
        departmentID = titanForWork.GetValueFromQueryString("DepartmentId"); //titanForWork.getQueryStringParameter("DepartmentId");
    }
    catch (e) {

    }
    if (departmentID != null && departmentID != "") {
        departmenalDocumentsView = "Yes";
        if (departmentID.indexOf("#") != -1) {
            departmentID = departmentID.split('#')[0];
        }
    }
    else {
        departmenalDocumentsView = "DashBoard";
        departmentID = "";
    }
    companyID = titanForWork.getQueryStringParameter("CompanyId");
    if (companyID.indexOf("#") != -1) {
        companyID = companyID.split('#')[0];
    }

    checkDepartmentID = departmentID;
    PageLoad();
    $("#permissionStatus").trigger("change");
});


//Add permission to folder
function AddFolderPermission() {
    //waitingDialog.show();
    var txtFoldershareingTypePermissionLevel = $('#shareingTypeFolderPermissionLevel').val();
    var txttsharedWithPermission = $('#sharedWithFolderPermission').val();
    if (txtFoldershareingTypePermissionLevel == "0" || txtFoldershareingTypePermissionLevel == null || txtFoldershareingTypePermissionLevel == "") {
        //waitingDialog.hide();
        currentDlgShare.close();
        alert('Please select sharing type.');
        return false;
    }
    if (txtFoldershareingTypePermissionLevel == "Private") {
        $('#chekedSendEmail').attr('checked', false);//Don't send email if document sharing type is private
    }
    else if (txtFoldershareingTypePermissionLevel == "Organization") {
        sharedHistoryUser = sharedUsersIdArrayListItemCollection;
        if ($(".multiBox").text().indexOf("Select") == 0) {
            currentDlgShare.close();
            //waitingDialog.hide();
            alert("Kindly select any organization.");
            return false;
        }
        if (sharedUsersIdArrayListItemCollection.length == 0) {
            currentDlgShare.close();
            //waitingDialog.hide();
            alert("Guest users are not available in selected organization(s).");
            return false;
        }
    }
    else if (txttsharedWithPermission == null || txttsharedWithPermission == "" || txttsharedWithPermission == "--select--") {
        currentDlgShare.close();
        alert("Please select permission type.");
        return false;
    }

    else //if (txtFoldershareingTypePermissionLevel != "Private" && txtFoldershareingTypePermissionLevel != "0" && txtFoldershareingTypePermissionLevel != "Organization") 
        //means Selective and other Group
    {
        sharedUsersIdArrayListItemCollection = [];
        arrUserClientWise = [];
        $(".mulinput").prop("checked", false);
        $(".multiBox").text("Select");
        sharedUsersEmailIDsArrayListItemCollection = [];
        if (getUserInfoFromPeoplePicker('customShareingFolderPoplePicker')) {
            if (sharedUsersIdArrayListItemCollection != null) {
                if (sharedUsersIdArrayListItemCollection.length == 0) {
                    currentDlgShare.close();
                    //waitingDialog.hide();
                    alert("Please enter sharing users.");
                    return false;
                }
            }
            else {
                currentDlgShare.close();
                //waitingDialog.hide();
                alert("Please enter sharing users.");
                return false;
            }
        }
        else {
            //waitingDialog.hide();
            currentDlgShare.close();
            alert("Please enter sharing users.");
            return false;
        }
    }
    var serverfolderRelativeUrl = GetFileServerRelativeUrlById(commonUsedFolderSharingId, "Folder");
    if (txtFoldershareingTypePermissionLevel == "Private") {
        updateFolderProperties(commonUsedFolderSharingId, _spPageContextInfo.webAbsoluteUrl, false, "DocumentManagementSystem", "Private");
        $.when(GetAllFolderUsersSharedPrincipleId(commonUsedFolderSharingId)).done(function (response) {
            DeleteSharedLink(commonUsedFolderSharingId);//Delete already shared link

            //To Fetch Document
            var folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");//get current folder path from cookies
            GetMyDocumentsWithFilesFolder(folderUrl);//Reload the documents from cuurent folder

            alert("Folder's permission has been set private.");
            $('#myModalFolderSharing').modal('hide');
            $("#sharedWithFolderPermission").val("--select--");
            currentDlgShare.close();
            //waitingDialog.hide();
        });
    }
    else {
        updateFolderProperties(commonUsedFolderSharingId, _spPageContextInfo.webAbsoluteUrl, false, "DocumentManagementSystem", txtFoldershareingTypePermissionLevel);
        ShareFilesFolder(serverfolderRelativeUrl, "Folder", txtFoldershareingTypePermissionLevel);      //If only sharing folder/documents with other users  
    }
}

//------------------Remove Folder Permission-------------------------
function GetAllFolderUsersSharedPrincipleId(docitemid) {
    var dfd = $.Deferred();
    var currentdate = new Date();
    var msec = Date.parse(currentdate);
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getByTitle('DocumentManagementSystem')/Items(" + docitemid + ")?$expand=RoleAssignments/Member/Users" + msec,
        method: "GET",
        async: false,
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            dfd.resolve(data.d.results);
            for (var i = 0; i < data.d.RoleAssignments.results.length; i++) {
                if (data.d.RoleAssignments.results[i].PrincipalId != _spPageContextInfo.userId) {
                    var principleId = data.d.RoleAssignments.results[i].PrincipalId;
                    DeleteFolderPrinciple(docitemid, principleId);//delete all users except current user
                }
            }
        },
        error: function (errorMessage) {
            dfd.reject(errorMessage);
            console.log('error not found users');
            waitingDialog.hide();
        }
    });
    return dfd.promise();
}

function DeleteFolderPrinciple(docitemid, principleId) {
    var dfd = $.Deferred();
    var headers = {
        'X-RequestDigest': $('#__REQUESTDIGEST').val(),
        'X-HTTP-Method': 'DELETE'
    }
    var endPointUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('DocumentManagementSystem')/getItemById(" + docitemid + ")/roleassignments/getbyprincipalid(" + principleId + ")";
    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        async: false,
        dataType: 'json', success: function (data) {
            dfd.resolve(data.d.results);
            console.log(principleId + ' Successfully removed Permission !');
        },
        error: function (error) {
            dfd.reject(error);
            console.log(JSON.stringify(error));
        }
    });
    return dfd.promise();
}

function ShareFilesFolder(sharingLink, typeOfFileFolder, permissionTo) {
    var UsersId = [];
    var userRole = 1;

    if (typeOfFileFolder == "Folder") {

        if ($('#sharedWithFolderPermission').val() == "Read") {
            userRole = 1;
        }
        else if ($('#sharedWithFolderPermission').val() == "Restricted View") {
            userRole = 4;
        }
        else {
            userRole = 2;
        }

        //userRole = 1;//$('#sharedWithFolderPermission').val();		
    }
    else {
        if ($('#sharedWithPermission').val() == "Read") {
            userRole = 1;
        }
        else if ($('#sharedWithPermission').val() == "Restricted View") {
            userRole = 4;
        }
        else {
            userRole = 2;
        }
    }

    var userRoleAssignments = createJSONMetadata(sharedUsersEmailIDsArrayListItemCollection, userRole);
    var restSource = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.Sharing.DocumentSharingManager.UpdateDocumentSharingInfo";
    $.ajax(
    {
        'url': restSource,
        'method': 'POST',
        async: false,
        'data': JSON.stringify({
            'resourceAddress': document.location.origin + sharingLink,
            'userRoleAssignments': userRoleAssignments,
            'validateExistingPermissions': false,
            'additiveMode': false,
            'sendServerManagedNotification': false,
            'customMessage': "Please look at the following File/Folder.",
            'includeAnonymousLinksInNotification': false
        }),
        'headers': {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        'success': function (data) {
            var fileFolderSharedWith = $('#shareingTypeFolderPermissionLevel').val();
            var sharedWithFolderPermission = "";//$('#sharedWithFolderPermission').val();
            if (typeOfFileFolder == "Folder") {
                //DeleteSharedLink(commonUsedFolderSharingId);//Delete already shared link
                GetDocumentsRevoke(sharedUsersIdArrayListItemCollection, commonUsedFolderSharingId);
                if (permissionTo == "Organization" && typeOfFileFolder == "Folder") {
                    AddSharedLinkToListOrg(shredLinkFolderName, sharingLink, arrUserClientWise, commonUsedFolderSharingId, "Folder", fileFolderSharedWith, $('#sharedWithFolderPermission').val(), "Personal");
                }
                else {
                    AddSharedLinkToList22(shredLinkFolderName, sharingLink, sharedUsersIdArrayListItemCollection, commonUsedFolderSharingId, "Folder", fileFolderSharedWith, $('#sharedWithFolderPermission').val(), "Personal");
                }
                //alert("Folder has been shared successfully.");
                if ($('#chekedFolderSendEmail').prop('checked') == true) {
                    EmailSharedProperties(sharedUsersEmailIDsArrayListItemCollection, typeOfFileFolder);
                }

                var folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");//get current folder path from cookies
                GetMyDocumentsWithFilesFolder(folderUrl);//Reload the documents from cuurent folder
            }
            else {

            }
            $('#myModalDocumentSharing').modal('hide');
            $('#myModalFolderSharing').modal('hide');
            $("#sharedWithFolderPermission").val("--select--");
            if(typeOfFileFolder == "Folder"){
            	alert("Folder has been shared.");
            }
            else {
            	alert("File(s) has been shared.");
            }
            
            if (currentDlgShare != "") {
                currentDlgShare.close();
            }
            waitingDialog.hide();
        },
        'error': function (err) {
            alert("ShareFilesFolder " + JSON.stringify(err));
            if (currentDlgShare != "") {
                currentDlgShare.close();
            }
            waitingDialog.hide();
        }
    });
    //}
}

function createJSONMetadata(emailIdCollection, roleId) {
    var jsonObj = [];
    var commonObj = {};
    commonObj['type'] = 'SP.Sharing.UserRoleAssignment';
    for (var index = 0; index < emailIdCollection.length; index++) {
        var item = {}
        item['__metadata'] = commonObj;
        item['Role'] = parseInt(roleId);
        item['UserId'] = emailIdCollection[index];
        jsonObj.push(item);
    }
    return jsonObj;
}

function AddSharedLinkToList(title, documentURL, sharedUsersId, documentId, documentType, sharedGroup, permissionType) {
    var sharingLinkDocumentNo = $('#lblDocNumber').text();
    if (sharingLinkDocumentNo == "" || sharingLinkDocumentNo == null) {
        sharingLinkDocumentNo = "";
    }
    if (globalsharingDocumentDetails == "" || globalsharingDocumentDetails == null) {
        globalsharingDocumentDetails = "";
    }
    if (documentType == "Folder") {
        sharingLinkDocumentNo = "";
        globalsharingDocumentDetails = "";
    }
    else {
        if (globalSharingDocumentDocumentType != null && globalSharingDocumentDocumentType != "") {
            documentType = globalSharingDocumentDocumentType;
        }
    }

    var ListName = "SharedDocument";
    var Metadata;
    var ItemType = GetItemTypeForListNameDetailsGroups(ListName);
    Metadata = {
        __metadata: {
            'type': ItemType
        },
        Title: title,//File/Folder name
        DocumentURL: documentURL,//File/Folder url
        SharedUsersId: { 'results': sharedUsersId },//Shared users
        DocumentID: documentId,//Shared file/folder id
        DOC_IDId: documentId,  //Shared file/folder id Lookupvalue
        DocumentType: documentType,// File/Folder
        SharedGroup: sharedGroup,//shared goupname or any label
        PermissionType: permissionType,//1 for readonly 2 for editor,
        ServerRedirectedEmbedURL: commonserverRedirectedEmbedUri,
        DocumentNo: sharingLinkDocumentNo,
        Details: globalsharingDocumentDetails

    };

    $.when(AddItemToListGroups(ListName, Metadata)).done(function (response) {
        alert("Successfully shared.");
    });
}

function DeleteSharedLink(filesFolderId) {

    var resturl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('SharedDocument')/Items?$select=ID,DocumentID&$filter=DocumentID eq '" + filesFolderId + "'"
    $.ajax({
        url: resturl,
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        async: false,
        success: function (data) {
            var items = data.d.results;
            for (var index = 0; index < items.length; index++) {
                DeleteSharedLinks(items[index].ID);//delete link
            }
        }, eror: function (data) {
            console.log('error');
        }
    });
}

function DeleteSharedLinks(filesFolderId) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('SharedDocument')/items('" + filesFolderId + "')",
        type: "POST",
        async: false,
        headers:
        {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "DELETE"
        },
        success: function (data, status, xhr) {
            console.log("Shared link has been removed.");
        },
        error: function (xhr, status, error) {
            console.log(data.responseJSON.error);
        }
    });
}
//------------------End Remove Folder Permission--------------------->

function GetFolderServerRelativeUrlByIdd(shareDocumentitemIdd) {

    var fileurlserverrelative = "";
    var resturl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('DocumentManagementSystem')/getItemById(" + shareDocumentitemIdd + ")?$select=Folder/ServerRelativeUrl&$expand=Folder"
    $.ajax({
        url: resturl,
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        async: false,
        success: function (data) {
            fileurlserverrelative = data.d.Folder.ServerRelativeUrl;
        }, eror: function (data) {

            console.log('error');
        }
    });
    console.log(fileurlserverrelative);
    return fileurlserverrelative;
}
var sharefileuser = [];

function GetFileServerRelativeUrlById(shareDocumentitemIdd, fileFolder) {

    var fileurlserverrelative = "";
    var resturl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('DocumentManagementSystem')/getItemById(" + shareDocumentitemIdd + ")?$select=ServerRedirectedEmbedUri,File/Name,File/ServerRelativeUrl,Folder/Name,Folder/ServerRelativeUrl,Shared/Title,SharedId&$expand=File,Folder,SharedId"
    $.ajax({
        url: resturl,
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        async: false,
        success: function (data) {
            if (fileFolder == "File") {
                fileurlserverrelative = data.d.File.ServerRelativeUrl;
                shredLinkFileName = data.d.File.Name;
                commonserverRedirectedEmbedUri = data.d.ServerRedirectedEmbedUri;

                if (data.d.SharedId != null) {

                    for (var m = 0; m < data.d.SharedId.results.length; m++) {

                        var sharefileuserid = data.d.SharedId.results[m];
                        sharefileuser.push(sharefileuserid);
                    }
                }
                if (commonserverRedirectedEmbedUri == null || commonserverRedirectedEmbedUri == "") {
                    commonserverRedirectedEmbedUri = "";
                }
            }
            else {
                fileurlserverrelative = data.d.Folder.ServerRelativeUrl;
                shredLinkFolderName = data.d.Folder.Name;
                commonserverRedirectedEmbedUri = "";
            }

        }, eror: function (data) {

            console.log('error');
        }
    });
    return fileurlserverrelative;
}

function GetFileURL(shareDocumentitemIdd, fileFolder) {

    var fileurlserverrelative = "";
    var resturl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('DocumentManagementSystem')/getItemById(" + shareDocumentitemIdd + ")?$select=ServerRedirectedEmbedUri,File/Name,File/ServerRelativeUrl,Folder/Name,Folder/ServerRelativeUrl,Shared/Title,SharedId&$expand=File,Folder,SharedId"
    $.ajax({
        url: resturl,
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        async: false,
        success: function (data) {
            if (fileFolder == "File") {
                fileurlserverrelative = data.d.File.ServerRelativeUrl;
            }
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
        for (var i = 0; i < users.length; i++) {
            sharedUsersIdArrayListItemCollection.push(GetUserIdFromPeoplePicker(users[i].Key));
            if (users[i].EntityData.Email.length > 0) {
                if (sharedUsersEmailIDsArrayListItemCollection.indexOf(users[i].EntityData.Email) == -1) {
                    sharedUsersEmailIDsArrayListItemCollection.push(users[i].EntityData.Email);
                }
            }
        }
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

function ShowHideFolderPeoplePickerControlAndOther(inputValue) {
    if (inputValue == "Selective") {
        $('.folderpeoplepickerdivshowhide').show();
        $('.folderpeoplepickerdivshowhidesharedUsersLists').hide();
        //  $('#sharedWithFolderPermission').show();
        $('.sendEmailClassHideFolder').show();
    }
    else {
        if (inputValue == "0" || inputValue == "Private") {
            $('.folderpeoplepickerdivshowhidesharedUsersLists').hide();
            //  $('#sharedWithFolderPermission').hide();
            $('.sendEmailClassHideFolder').hide();
        }
        else {
            $('.folderpeoplepickerdivshowhidesharedUsersLists').show();
            // $('#sharedWithFolderPermission').show();
            $('.sendEmailClassHideFolder').show();
        }
        $('.folderpeoplepickerdivshowhide').hide();
    }
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

function GetMyShareingGroupUsers(secirityLevelForUsers, fileFolder) {
    sharedUsersIdArrayListItemCollection = [];
    arrUserClientWise = [];
    $(".mulinput").prop("checked", false);
    $(".multiBox").text("Select");
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
                        SetAndResolvePeoplePicker('customShareingFolderPoplePicker', response.d.results[groupIndex].SharedUsers.results[subGroupIndex].UserName, false);
                    }
                }
            }
        }, eror: function (response) {
            console.log('error');
        }
    });
}


//get group members from SP group and bind into people picker
function GetMySharingGroupEmps(secirityLevelForUsers, fileFolder) {
    //clearPeoplePickerControl("customShareingPoplePicker");
    sharedUsersIdArrayListItemCollection = [];
    arrUserClientWise = [];
    $(".mulinput").prop("checked", false);
    $(".multiBox").text("Select");
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
                        SetAndResolvePeoplePicker('customShareingPoplePicker', response.d.results[groupIndex].SharedUsers.results[subGroupIndex].UserName, false);
                    }
                }
            }
        }, eror: function (response) {
            console.log('error');
        }
    });
}

function GetSharedDocumentProperties(currentDocumentId) {
    $('#btnShareDocumetns').show();
    $('#mutiplesharefile').hide();

    globalsharingDocumentDetails = "";
    globalSharingDocumentDocumentType = "";
    $('#chekedSendEmail').attr('checked', false);//Don't send email if document sharing type is private
    $('#txtSharedDocumetnOnDemandId').val(currentDocumentId);
    sharedUsersIdArrayListItemCollection = [];
    arrUserClientWise = [];
    $(".mulinput").prop("checked", false);
    $(".multiBox").text("Select");
    sharedUsersEmailIDsArrayListItemCollection = [];
    clearPeoplePickerControl("customShareingPoplePicker");
    $('#myModalDocumentSharing').modal('show');
    waitingDialog.show();

    $('#sharefilename').show();
    $('#sharefiletilte').show();
    $('#filedocumentname').show();

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

                globalsharingDocumentDetails = response.d.results[0].Details;
                globalSharingDocumentDocumentType = response.d.results[0].DocumentType

                if (response.d.results[0].PermissionLevelId == null || response.d.results[0].PermissionLevelId == "") {
                    $('#txtPermissionLevelId').val(1073741826);
                    $('#sharedWithPermission').val("Read");
                }
                else {
                    $('#txtPermissionLevelId').val(response.d.results[0].PermissionLevelId);
                    $('#sharedWithPermission').val(response.d.results[0].PermissionLevel);
                }
                if (response.d.results[0].SecurityLevel == null) {

                    $('#shareingTypePermissionLevel').val(0);
                }
                else {
                    $('#shareingTypePermissionLevel').val(response.d.results[0].SecurityLevel);
                }
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
    var peoplePickerDiv = $("[id^='" + controlNameID + "']");
    // Get the people picker object from the page.
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerDiv[1].id];
    peoplePicker.AddUserKeys(LoginNameOrEmail, false);
}

function EmailSharedProperties(toUsers, sharedtypeOfDouments) {
    var ccUsers = [];
    ccUsers.push($('#lblSelectedCurrentEmail').html());
    var sharedWithTitle = $('#shareingTypePermissionLevel').val();
    var msg = "";//"Dear User,<br/><br/>" + _spPageContextInfo.userDisplayName + ", shared the following document with you.<br />To open document, please <a href='" + _spPageContextInfo.siteAbsoluteUrl + "/Pages/MyDocuments.aspx?WebAppId=1'>click here</a> .<br/><br/><br/><br/>Thanks & Regards,<br/>Adapt IT Support Team<br/><br/><br/>This is an auto generated email from TITAN. Please don't reply.";
    //<br/>Title: " + $('#lblDocTiltle').html() + "<br/>File Name: " + $('#lblFileName').html() + "<br/>Shared With :" + sharedWithTitle + "<br/>;

    var commonBodyContentsNotification = emailBodyContent;
    if (sharedtypeOfDouments == "Folder") {
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{filename}}", $('#lblFolderTiltle').text());
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{fileype}}", "Folder");
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{details}}", "");
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{doclink}}", _spPageContextInfo.siteAbsoluteUrl + "/Pages/MyDocuments.aspx?WebAppId=1");
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{Permission}}", $("#sharedWithFolderPermission :selected").text());
    }
    else {
        if (globalSharingDocumentDocumentType == null) {
            globalSharingDocumentDocumentType = "";
        }
        if (globalsharingDocumentDetails == null) {
            globalsharingDocumentDetails = "";
        }
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{filename}}", $('#lblFileName').html());
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{fileype}}", globalSharingDocumentDocumentType);
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{details}}", globalsharingDocumentDetails);
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{doclink}}", encodeURI(document.location.origin + "/" + $('#lblSelectedFileUrl').text()));
        commonBodyContentsNotification = commonBodyContentsNotification.replace("{{Permission}}", $("#sharedWithPermission :selected").text());
    }

    commonBodyContentsNotification = commonBodyContentsNotification.replace("{{sharedby}}", _spPageContextInfo.userDisplayName);
    msg = commonBodyContentsNotification;



    var from = $('#lblSelectedCurrentEmail').html();
    var Metadata;
    Metadata = {
        'properties': {
            '__metadata': { 'type': 'SP.Utilities.EmailProperties' },
            'From': from,
            'To': { 'results': toUsers },
            'CC': { 'results': ccUsers },
            'Body': msg,
            'Subject': sharedEmailSubject
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
            alert("SendEmailSharedNotification  " + JSON.stringify(err));
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

function GetFileVersions(itemURL, datecreated, itemid, vertitle, verrefno, verfilename) {
    $(".context-menu").hide();
    $("#VisionFileName").html(verfilename);
    if (vertitle == "null")
    { $("#VisionTitleName").html(''); }
    else
    { $("#VisionTitleName").html(vertitle); }
    if (verrefno == "null")
    { $("#VersionreferNo").html(''); }
    else
    { $("#VersionreferNo").html(verrefno); }

    // var webURL = myCompanyUrl + "/_api/Web/GetFileByServerRelativeUrl('" + itemURL + "')/Versions";
    var webURL = myCompanyUrl + "/_api/Web/GetFileByServerRelativeUrl('" + itemURL + "')/Versions?$select=Title,VersionLabel,Created,Url,CreatedBy/Title&$expand=CreatedBy";
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
                var ModifiedBy = itemsVersion[index].CreatedBy.Title;

                versionTR += "<tr><td style='padding: 5px;'>" + labelVersion + "</td><td style='padding: 5px;'>" + formatedDate + "</td><td style='padding: 5px;'>" + ModifiedBy + "</td><td style='padding: 5px;'><a download href='" + myCompanyUrl + "/" + thisVersionUrl + "' target='_blank'><i class='fa fa-download'></i>Download</a></td></tr>";
            }
            var formatedDate = ConvertJSONDateFormatToDaysFormat(datecreated);
            if (itemsVersion.length == 0) {
                if (ModifiedBy == undefined) {
                    ModifiedBy = ''
                }

                versionTR += "<tr><td style='padding: 5px;'>1.0</td><td style='padding: 5px;'>" + formatedDate + "</td><td style='padding: 5px;'>" + ModifiedBy + "</td><td style='padding: 5px;'><a download href='" + itemURL + "' target='_blank'><i class='fa fa-download'></i>Download</a></td></tr>";
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
    var formatedDateWithTime = ("00" + d.getDate()).slice(-2) + "-" +
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][(d.getMonth())] + "-" +

    d.getFullYear() + " " +
    ("00" + hours).slice(-2) + ":" +
    ("00" + d.getMinutes()).slice(-2) + ":" +
    ("00" + d.getSeconds()).slice(-2) + ' ' + (d.getHours() >= 12 ? 'PM' : 'AM');

    return formatedDateWithTime;
}

function DeleteSelectedFolder(folderServerRelativeUrl, folderId) {
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
                DeleteSharedLink(folderId);
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
                UpdatedSharedLink(deletingItemId);
                // DeleteSharedLink(deletingItemId);
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
    return urlLink;
}

function IconProperties(iconType, imagePath) {
    var icoProp = [];
    icoProp.iconType = iconType;
    icoProp.image = imagePath;
    return icoProp;
}

function GetDocumentsSharedWithMe(queryFilter) {
    if (queryFilter == undefined) {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and (PermissionType eq 'Read' or PermissionType eq 'Contribute' or PermissionType eq 'Restricted View') and (PermissionStatus ne 'Deleted' and PermissionStatus ne 'Revoked') and Author/ID ne '" + _spPageContextInfo.userId + "'";
    }
    //  var queryFilter="&$filter=SharedUsers/ID eq '"+_spPageContextInfo.userId+"' and (PermissionType eq 'Read' or PermissionType eq 'Contribute') and (PermissionStatus ne 'Deleted' and PermissionStatus ne 'Revoked') and Author/ID ne '"+_spPageContextInfo.userId+"'";
    var Ownurl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('SharedDocument')/Items?$select=ID,SharedFrom,SharedType,DocumentNo,IsBlock,Details,ServerRedirectedEmbedURL,Title,DocumentURL,DocumentID,DocumentType,SharedGroup,PermissionStatus,PermissionType,SharedUsers/Title,SharedUsers/ID,Author/Title,Author/ID,DOC_ID/ID,DOC_ID/Title,DOC_ID/DocumentNo,DOC_ID/DocumentType&$orderby=Modified desc&$expand=DOC_ID,SharedUsers,Author" + queryFilter;
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (data) {
            var items = data.d.results;
            var tableHeader = "";
            var sharedWithMeTR = "";
            for (var i = 0; i < items.length; i++) {
                var DocumentNo = items[i].DOC_ID.DocumentNo;
                if (DocumentNo == null) {
                    DocumentNo = "";
                }
                var DocumentType = items[i].DocumentType;
                if (DocumentType == null) {

                    DocumentType = "";
                }
                var Regarding = ""//items[i].Regarding;
                if (Regarding == null) {
                    Regarding = "";
                }
                var Details = items[i].Details;
                if (Details == null) {
                    Details = "";
                }
                var sourceDocType = items[i].DOC_ID.DocumentType;
                if (sourceDocType == null || sourceDocType == "--select--") {
                    sourceDocType = "";
                }

                var PermissionType = items[i].PermissionType;
                if (PermissionType == null) {
                    PermissionType = "";
                }

                var PermissionStatus = items[i].PermissionStatus;
                if (PermissionStatus != "Revoked" && PermissionStatus != "Deleted") {
                    PermissionStatus = PermissionType;
                }
                else {

                    PermissionStatus = PermissionStatus.fontcolor("Red");
                }

                var DocumentWrittenBy = ""// items[i].DocumentWrittenBy;
                if (DocumentWrittenBy == null) {
                    DocumentWrittenBy = "";
                }
                var Title = items[i].Title;
                if (Title == null) {
                    Title = "";
                }
                var SourceDocTitle = items[i].DOC_ID.Title;
                if (SourceDocTitle == null) {
                    SourceDocTitle = "";
                }

                var SecurityLevel = ""//items[i].SecurityLevel;
                if (SecurityLevel == null) {
                    SecurityLevel = "";
                }
                var AccessLevel = ""// items[i].AccessLevel;
                if (AccessLevel == null) {
                    AccessLevel = "";
                }
                var sharedBy = items[i].Author.Title
                var FileName = Title;//; items[i].File.Name;

                var FileServerRelativeUrl = items[i].ServerRedirectedEmbedURL;
                if (FileServerRelativeUrl == null || FileServerRelativeUrl == "") {
                    FileServerRelativeUrl = items[i].DocumentURL;//items[i].File.ServerRelativeUrl;
                }
                FileServerRelativeUrl = FileServerRelativeUrl.replace("interactivepreview", "default&mobileredirect=true");
                var documentLink = "";
                var splitDocTypeLink = "";
                var icon = "<span class='glyphicon glyphicon-folder-open'></span>&nbsp;&nbsp;";
                var downloadlink = "";
                if (DocumentType != "Folder") {
                    //  splitDocTypeLink=Title.split('.')[1];
                    // icon = GetDocumentTypeIcon("." + splitDocTypeLink);
                    //                splitDocTypeLink=Title.split('.')[1];
                    icon = GetDocumentTypeIcon(Title);
                    if (items[i].PermissionStatus != "Revoked" && items[i].PermissionStatus != "Deleted") {

                        downloadlink = "<a href='" + encodeURI(items[i].DocumentURL) + "' target='_blank' download><span class='glyphicon glyphicon-download-alt'></span></a>";
                        if (FileName.includes(".pdf") == true) {
                            FileServerRelativeUrl = FileServerRelativeUrl.replace("default&mobileredirect=true", "interactivepreview");
                        }
                        documentLink = "<a href=" + encodeURI(FileServerRelativeUrl) + " class='doc_icon' target='_blank' >" + icon + FileName + "</a>";;
                    }
                    else {
                        documentLink = "<a href='#' class='doc_icon' >" + icon + FileName + "</a>"
                    }
                }
                else {
                    documentLink = '<a onclick="OpenFolderWithAllFileFolder(\'' + encodeURI(items[i].DocumentURL) + '\', \'' + PermissionStatus + '\')" class="doc_icon" >' + icon + FileName + '</a>';
                    SourceDocTitle = Title;   //Title For Folder
                    sourceDocType = "Folder"
                }
                sharedFrom = getSharedFromValue(items[i].SharedType, items[i].SharedFrom);
                if (items[i].SharedType == null) {
                    items[i].SharedType = "Personal";
                }
                // sharedWithMeTR = sharedWithMeTR + "<tr><td><a href=" + documentLink + " class='doc_icon' target='_blank' >" + icon + FileName + "</a></td><td>" + Title + "</td><td>" + DocumentNo + "</td><td>" + DocumentType + "</td><td>" + DocumentWrittenBy + "</td><td>" + Regarding + "</td><td>" + Details + "</td><td class='dwnld_cell' style='text-align:center'>" + downloadlink + "</td><td>" + sharedBy + "</td></tr>";
                if (items[i].IsBlock == "Yes") {
                    sharedWithMeTR = sharedWithMeTR + "<tr><td>" + documentLink + "</td><td>" + SourceDocTitle + "</td><td>" + DocumentNo + "</td><td>" + sourceDocType + "</td><td>" + sharedBy + "</td><td style='display:none'>" + items[i].SharedType + "</td><td>" + sharedFrom + "</td><td>" + PermissionStatus + "</td><td class='dwnld_cell' style='text-align:center'></td></tr>";
                }
                else {
                    sharedWithMeTR = sharedWithMeTR + "<tr><td>" + documentLink + "</td><td>" + SourceDocTitle + "</td><td>" + DocumentNo + "</td><td>" + sourceDocType + "</td><td>" + sharedBy + "</td><td style='display:none'>" + items[i].SharedType + "</td><td>" + sharedFrom + "</td><td>" + PermissionStatus + "</td><td class='dwnld_cell' style='text-align:center'>" + downloadlink + "</td></tr>";
                }
            }
            // var completebody = tableHeader + sharedWithMeTR + "</tbody></table>";
            var completebody = sharedWithMeTR;
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

                $("#columnsSharedWithMe").empty();
                $("#columnsSharedWithMe").append('<option value="-1">All Columns</option>');
                $("#columnsSharedWithMe").append('<option value="0">File</option>');
                $("#columnsSharedWithMe").append('<option value="1">Title</option>');
                $("#columnsSharedWithMe").append('<option value="2">Reference#</option>');
                // $("#columnsSharedWithMe").append('<option value="3">Type</option>');
                $("#columnsSharedWithMe").append('<option value="3">Type</option>');
                $("#columnsSharedWithMe").append('<option value="4">Shared By</option>');
                //$("#columnsSharedWithMe").append('<option value="5">Shared type</option>');
                $("#columnsSharedWithMe").append('<option value="6">Shared from</option>');

            }

        }, eror: function (data) {

            console.log('error');
        }
    });
}

//to find the Shared_From value
function getSharedFromValue(SharedType, SharedFrom) {
    if (SharedType == "Personal" || SharedType == null || SharedType == "null") {
        return (SharedType = "Personal");
    }
    else if (SharedType == "Department") {
        return (SharedType + ": " + SharedFrom);
    }
}

function OpenFolderWithAllFileFolder(folderUrlLink, Permission) {
    $('#mainDivAreaSharedFolderDocuments').html('');
    GetSharedFolderDocuments(folderUrlLink, Permission);
    //alert(folderUrlLink);
}

function GetSharedFolderDocuments(folderUrl, PermissionType) {
    if (folderUrl.indexOf("DepartmentalDMS") != -1) {
        var siteURL = window.location.origin + folderUrl.split('DepartmentalDMS')[0];
    }
    else {
        var siteURL = _spPageContextInfo.webAbsoluteUrl;
    }
    var Ownurl = siteURL + "/_api/Web/GetFolderByServerRelativeUrl('" + folderUrl + "')?$select=ID,File_x0020_Type&$expand=Folders,Folders/ListItemAllFields,Files,Files/ListItemAllFields&$orderby=Modified desc";
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: true,
        success: function (data) {
            $('#myModalGetSharedFilesFolder').modal('show');
            var tableHeader = "";
            var tr = "";
            var files = data.d.Files.results;
            var folders = data.d.Folders.results;
            var itemsCount = folders.length + files.length;
            for (var i = 0; i < folders.length; i++) {

                var encodeURILink = encodeURI(folders[i].ServerRelativeUrl)
                var documentLink = "javascript:OpenFolderWithAllFileFolder('" + encodeURILink + "')";
                var folderIcon = "<span class='glyphicon glyphicon-folder-open'></span>&nbsp;&nbsp;";
                tr = tr + "<tr><td><a href=" + documentLink + ">" + folderIcon + folders[i].Name + "</a></td><td></td><td></td><td></td><td></td></tr>";
            }
            for (var i = 0; i < files.length; i++) {
                var icon = GetDocumentTypeIcon(files[i].Name);
                var propertiesServerRelativeUrl = files[i].ListItemAllFields.ServerRedirectedEmbedUri;
                if (propertiesServerRelativeUrl == null || propertiesServerRelativeUrl == "") {
                    //document  is not ediatable in browser
                    propertiesServerRelativeUrl = encodeURI(files[i].ServerRelativeUrl);
                }
                if (files[i].Name != null) {
                    var DocumentNo = files[i].ListItemAllFields.DocumentNo;
                    if (DocumentNo == null) {
                        DocumentNo = "";
                    }
                    var DocumentType = files[i].ListItemAllFields.DocumentType;
                    if (DocumentType == null || DocumentType == "--select--") {
                        DocumentType = "";
                    }
                    var Details = files[i].ListItemAllFields.Details;
                    if (Details == null) {
                        Details = "";
                    }
                    var DocumentWrittenBy = "";// files[i].ListItemAllFields.DocumentWrittenBy;
                    if (DocumentWrittenBy == null) {
                        DocumentWrittenBy = "";
                    }
                    var FileName = files[i].Name;
                    var Title = files[i].ListItemAllFields.Title;
                    if (Title == null) {
                        Title = FileName;
                    }
                    var SecurityLevel = files[i].ListItemAllFields.SecurityLevel;
                    if (SecurityLevel == null || SecurityLevel == "") {
                        SecurityLevel = "Default";
                    }
                    var lastModifiedDate = titanForWork.convertJSONDateAMPMWithDate(files[i].ListItemAllFields.Modified);
                    // var parameterLink = SecurityLevel;
                    var AccessLevel = files[i].ListItemAllFields.AccessLevel;
                    if (AccessLevel == null) {
                        AccessLevel = "";
                    }
                    var downloadlink = "<a href='" + files[i].ServerRelativeUrl + "' target='_blank' download><span class='glyphicon glyphicon-download-alt'></span></a>";

                    if (FileName.includes(".pdf") == false) {//to check if it's PDF
                        propertiesServerRelativeUrl = propertiesServerRelativeUrl.replace("interactivepreview", "default&mobileredirect=true");
                    }
                    if (PermissionType == "Restricted View") {
                        tr = tr + "<tr><td><a onclick='priviewfile(this);' href='javascript:void(0)' name='" + propertiesServerRelativeUrl + "' class='doc_icon' >" + icon + FileName + "</a></td><td>" + DocumentNo + "</td><td>" + lastModifiedDate + "</td><td>" + Details + "</td><td class='dwnld_cell' style='text-align:center'></td></tr>";
                    }
                    else {
                        tr = tr + "<tr><td><a onclick='priviewfile(this);' href='javascript:void(0)' name='" + propertiesServerRelativeUrl + "' class='doc_icon' >" + icon + FileName + "</a></td><td>" + DocumentNo + "</td><td>" + lastModifiedDate + "</td><td>" + Details + "</td><td class='dwnld_cell' style='text-align:center'>" + downloadlink + "</td></tr>";
                    }
                }
            }
            var completebody = tr;
            var dvTable = $("#mainDivAreaSharedFolderDocuments");
            dvTable.html("");
            $('#mydmsNorecordFoundSharedFolder').hide();
            if (itemsCount == 0) {
                $('#mydmsNorecordFoundSharedFolder').show();
            }
            dvTable.append(completebody);

        }, eror: function (data) {

            console.log('error');
        }
    });
}

//update Folder properties
function updateFolderProperties(itemID, webUrl, asyncCall, ListName, Security) {
    var Metadata;
    var ItemType = GetItemTypeForListNamee(ListName);

    Metadata = {
        __metadata: {
            'type': ItemType
        },
        SecurityLevel: Security
    };
    updateItemWithIDItemListDocuments(ListName, Metadata, itemID, webUrl, asyncCall);
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

function BreakInheritePermissionOnItemSharing(myDocumentsiteURL, serverRelativeFileUrl, undefineditemID, currentMyDocumentItemId, groupuserIdsArray) {
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
            updateDocumentPropertiesOnItemSharing(undefineditemID, serverRelativeFileUrl, securityLeveltext, groupuserIdsArray, myDocumentsiteURL, false);

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
                        EmailSharedProperties(sharedUsersEmailIDsArrayListItemCollection, "File");
                    }
                }

                var fileFolderSharedWith = $('#shareingTypePermissionLevel').val();
                var sharedWithFileFolderPermission = $('#sharedWithPermission').val();
                DeleteSharedLink(undefineditemID);//Delete already shared link
                if (sharedUsersIdArrayListItemCollection.length > 0) {
                    AddSharedLinkToList(shredLinkFileName, serverRelativeFileUrl, sharedUsersIdArrayListItemCollection, undefineditemID, "File", fileFolderSharedWith, sharedWithFileFolderPermission);
                }
                $('#myModalDocumentSharing').modal('hide');
                //  alert('File has been shared.');

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

function updateDocumentPropertiesOnItemSharing(undefineditemID, serverRelativeFileUrl, securityLeveltext, sharedUserArrayListss, webUrl, asyncCall) {

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
        updateItemWithIDItemListDocuments(ListName, Metadata, undefineditemID, webUrl, asyncCall).done(function () {
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


function PageLoad() {
    if (_spPageContextInfo.userEmail != "" && _spPageContextInfo.userEmail != null) {
        folderNameUsedInDesginPage = _spPageContextInfo.userEmail.toLowerCase();
        folderNameUsedInDesginPage = folderNameUsedInDesginPage.replace(/\s/g, '');
    }
    else {
        folderNameUsedInDesginPage = _spPageContextInfo.userLoginName.toLowerCase();
        folderNameUsedInDesginPage = folderNameUsedInDesginPage.replace(/\s/g, '');
    }

    GetSiteUrl();
}
function UploadDocuments() {
    var sourcelocation = "&sourcelocation=../Pages/ViewAllDocuments.aspx";
    var urllink = "../Pages/UploadDocuments.aspx";
    var departmentLink = "";
    if (departmenalDocumentsView == "Yes") {
        departmentLink = "&DepartmentId=" + departmentID;
    }
    var url = urllink + "?WebAppId=" + companyID + departmentLink + sourcelocation;
    $(location).attr('href', url);
}
function UploadDocumentsDashBoard() {

    $("#myModalupload").modal("show");
    EmptyPeoplePicker("newEmployeePicker");
    $("#AttachmentUploadField").val("");
    $("#file2").val("");
    $("#filename").empty();
    finalFiles = [];
    FinalFiles4Upload = [];
    Tcounter = 0;
    RemoveDuplicate = [];

    //Create Cookies for Target Folder
    var cookiesName = "UploadedDocumentTargetFolderURl";
    var cookiesvalue = $('#currentSubFolder').val();

    createCookie(cookiesName, cookiesvalue, 7);
    var sourcelocation = "&sourcelocation=../Pages/MyDocuments.aspx";
    var urllink = "../Pages/UploadDocuments.aspx";
    var departmentLink = "";
    if (departmenalDocumentsView == "Yes") {
        departmentLink = "&DepartmentId=" + departmentID;
    }
    myFunc();
    GetSiteUrlf();

}
function GetSiteUrl() {
    var Ownurl = "";
    Ownurl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Companies')/items?$select=ID,SiteURL&$filter=ID eq '" + companyID + "'"
    //}
    $.ajax({
        url: Ownurl,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (response) {
            myCompanyUrl = _spPageContextInfo.webAbsoluteUrl;
            if (response.d.results.length > 0) {
                {
                    myCompanyUrl = _spPageContextInfo.webAbsoluteUrl;
                    //Drag Drop Event handler
                    CallDragDropEventFunction();

                    var query = "&$filter=Author/ID eq '" + _spPageContextInfo.userId + "'";
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
                    query = "&$filter=SecurityLevel ne 'Private' and SecurityLevel ne null and Author/ID ne '" + _spPageContextInfo.userId + "'";

                    GetDocumentsSharedWithMe();
                }
            }

        }, eror: function (data) {
            console.log('error');
        }
    });
}

GetUsersFromSharepointGroup = function (GroupName) {
    var dfd = $.Deferred()
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getbyname('" + GroupName + "')/users",
        type: 'GET',
        async: false,
        headers: {
            'accept': 'application/json;odata=verbose'
        },
        success: function (data) {
            dfd.resolve(data.d.results)
        },
        error: function (error) {
            dfd.reject(error)
        }
    })
    return dfd.promise()
}

function deleteMutipleDocuments() {

    if (selectedDocumentListItem.length > 0) {
        var confirmmessage = confirm("Are you sure,you want to delete this file ?")
        if (confirmmessage == true) {
            var itemUpdated = 1;
            for (var index = 0; index < selectedDocumentListItem.length; index++) {
                var deletingItemId = selectedDocumentListItem[index];
                $.ajax({
                    url: myCompanyUrl + "/_api/web/lists/GetByTitle('DocumentManagementSystem')/items('" + deletingItemId + "')",
                    type: "POST",
                    async: false,
                    headers:
                    {
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                        "IF-MATCH": "*",
                        "X-HTTP-Method": "DELETE"
                    },
                    success: function (data, status, xhr) {
                        UpdatedSharedLink(deletingItemId);
                        //  DeleteSharedLink(deletingItemId);
                        // $(".context-menu").hide(100);
                        if (itemUpdated == selectedDocumentListItem.length) {
                            var folderUrl = readTargetUrlCookie("UploadedDocumentTargetFolderURl");
                            GetMyDocumentsWithFilesFolder(folderUrl);
                            alert("Files are deleted successfully.");
                            selectedDocumentListItem = [];
                            selectedDocumentserverrelativeurl = [];
                        }
                        itemUpdated++;
                    },
                    error: function (xhr, status, error) {
                        console.log(data.responseJSON.error);
                    }
                });
            }
        }

    }
    else {
        alert("Please select some file ");
    }
}

function mutiplefiledownload() {

    if (selectedDocumentserverrelativeurl.length > 0) {

        var filesdownload = 1;
        for (var index = 0; index < selectedDocumentserverrelativeurl.length; index++) {
            var url = selectedDocumentserverrelativeurl[index];

            var a = document.createElement("a");
            a.setAttribute('href', url);
            a.setAttribute('download', '');
            a.setAttribute('target', '_blank');
            a.click();

            if (filesdownload == selectedDocumentserverrelativeurl.length) {
                alert("Files are downloaded successfully.");
                $(".docid").prop("checked", false);
                selectedDocumentserverrelativeurl = [];
                selectedDocumentListItem = [];
            }
            filesdownload++;
        }
    }
    else {
        alert("Please select file");
    }
}

function mutiplefileshare() {
    $(".orgDropdowndiv").hide();
    $("#Deptmutiplesharefile").hide();
    if (selectedDocumentListItem.length > 0) {

        globalsharingDocumentDetails = "";
        globalSharingDocumentDocumentType = "";
        //  $('#chekedSendEmail').attr('checked', false);//Don't send email if document sharing type is private
        $('#chekedSendEmail').attr('checked', true);
        //$('#chkBlockDownload').prop('checked', false);
        $('#txtSharedDocumetnOnDemandId').val("");
        $('#lblFileName').html("");
        $('#lblDocNumber').html("");
        $('#lblDocTiltle').html("");
        $('#sharedWithPermission').val("--select--");
        $('#shareingTypePermissionLevel').val("0");
        $("#shareingTypePermissionLevel").trigger("change");
        //$('.peoplepickerdivshowhide').hide();
        $("#sharedUsersLists").html('');

        $('#sharefilename').hide();
        $('#sharefiletilte').hide();
        $('#filedocumentname').hide();
        $('#btnShareDocumetns').hide();
        sharedUsersIdArrayListItemCollection = [];
        arrUserClientWise = [];
        $(".mulinput").prop("checked", false);
        $(".multiBox").text("Select");
        sharedUsersEmailIDsArrayListItemCollection = [];
        clearPeoplePickerControl("customShareingPoplePicker");

        $('#myModalDocumentSharing').modal('show');
        $('#mutiplesharefile').show();
        BindMySharingGroups();
    }
    else {
        alert("Please select one or more file");
    }


}

function sharmutiplefile() {
    if (selectedDocumentListItem.length > 0) {
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
        else if (txtDocshareingTypePermissionLevel == "Organization") {
            sharedHistoryUser = sharedUsersIdArrayListItemCollection;
            if ($(".multiBox").text().indexOf("Select") == 0) {//if ($("#ddlOrgName").val() == '0') {
                waitingDialog.hide();
                alert("Kindly select any organization.");
                return false;
            }
            if (sharedUsersIdArrayListItemCollection.length == 0) {
                waitingDialog.hide();
                alert("Guest users are not available in selected organization(s).");
                return false;
            }
        }
        else //if (txtDocshareingTypePermissionLevel != "0")
        {
            sharedHistoryUser = [];
            sharedUsersIdArrayListItemCollection = [];
            arrUserClientWise = [];
            $(".mulinput").prop("checked", false);
            $(".multiBox").text("Select");
            sharedUsersEmailIDsArrayListItemCollection = [];
            if (getUserInfoFromPeoplePicker('customShareingPoplePicker')) {
                if (sharedUsersIdArrayListItemCollection != null) {
                    sharedHistoryUser = sharedUsersIdArrayListItemCollection;
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
            if (txttsharedWithPermission == null || txttsharedWithPermission == "" || txttsharedWithPermission == "--select--") {
                waitingDialog.hide();
                alert("Please select permission type.");
                return false;
            }

        }

        for (var index = 0; index < selectedDocumentListItem.length; index++) {
            var txtSharedDocumetnOnDemandId = selectedDocumentListItem[index];
            var serverRelativeFileUrl = GetFileServerRelativeUrlById(txtSharedDocumetnOnDemandId, "File");
            arrSharedUserIds = [];
            var loopCount = -1;
            while (++loopCount < sharedUsersIdArrayListItemCollection.length) {
                arrSharedUserIds[loopCount] = sharedUsersIdArrayListItemCollection[loopCount];
            }
            sharedUsersIdArrayListItemCollection = sharedUsersIdArrayListItemCollection.concat(sharefileuser);
            if (txtDocshareingTypePermissionLevel == "Private") {
                sharedUsersIdArrayListItemCollection = [];
                arrUserClientWise = [];
                $(".mulinput").prop("checked", false);
                $(".multiBox").text("Select");
                $.when(BreakInheritePermissionOnItemSharing(myCompanyUrl, serverRelativeFileUrl, txtSharedDocumetnOnDemandId, _spPageContextInfo.userId, sharedUsersIdArrayListItemCollection)).done(function (MainExamListItemTemp) {
                    DeleteSharedLink(txtSharedDocumetnOnDemandId);//Delete already shared link
                });
            }
            else {
                var fileFolderSharedWith = $('#shareingTypePermissionLevel').val();
                var sharedWithFileFolderPermission = $('#sharedWithPermission').val();
                ShareFilesFolder(serverRelativeFileUrl, "File", '');
                // DeleteSharedLink(txtSharedDocumetnOnDemandId);//Delete already shared link
                if (sharedUsersIdArrayListItemCollection.length > 0) {
                    var securityLeveltext = $('#shareingTypePermissionLevel').val();//Update Document Properties
                    updateDocumentPropertiesOnItemSharing(txtSharedDocumetnOnDemandId, serverRelativeFileUrl, securityLeveltext, sharedUsersIdArrayListItemCollection, myCompanyUrl, false);
                    GetDocumentsRevoke(sharedHistoryUser, txtSharedDocumetnOnDemandId);
                    if (txtDocshareingTypePermissionLevel == "Organization") {
                        AddSharedLinkToListOrg(shredLinkFileName, serverRelativeFileUrl, arrUserClientWise, txtSharedDocumetnOnDemandId, "File", fileFolderSharedWith, sharedWithFileFolderPermission, "Personal");
                    }
                    else {
                        AddSharedLinkToList22(shredLinkFileName, serverRelativeFileUrl, sharedHistoryUser, txtSharedDocumetnOnDemandId, "File", fileFolderSharedWith, sharedWithFileFolderPermission, "Personal");
                    }

                }

                sharedUsersIdArrayListItemCollection = sharedHistoryUser;
            }
            sharefileuser = [];


        }
        selectedDocumentserverrelativeurl = [];
        selectedDocumentListItem = [];

        $(".mulinput").prop("checked", false);
        $(".multiBox").text("Select");

        if ($('#chekedSendEmail').prop('checked') == true)    //If SendMail Checkbox check for file
        {
        	var Permission = $("#sharedWithPermission :selected").text();
        	if(Permission == "--select--"){
				Permission = "";
			}

            if (EmailFileArray.length > 0) {
                var EmailDesign = '';
                EmailDesign = "Dear User,<br/><br/>" + _spPageContextInfo.userDisplayName + ", shared the following document with you.<br/><br/>";
                for (i = 0; i < EmailFileArray.length; i++) {
                
                	if (EmailFileArray[i].File.indexOf("xml") != -1 || EmailFileArray[i].File.indexOf("rar") != -1 || EmailFileArray[i].File.indexOf("png") != -1 || EmailFileArray[i].File.indexOf("jpg") != -1 || EmailFileArray[i].File.indexOf("jpeg") != -1) {
					    var MailLink = '';
					    var FileServerURL = EmailFileArray[i].serverUrl;
					    if (FileServerURL.includes("DocumentManagementSystem") == true || FileServerURL.includes("DepartmentalDMS") == true) {
					        if (FileServerURL.includes("DocumentManagementSystem") == true) {
					            MailLink = siteURL + "/DocumentManagementSystem/Forms/AllItems.aspx?id=" + encodeURIComponent(FileServerURL) + "&parent=" + encodeURIComponent(FileServerURL.substr(0, FileServerURL.lastIndexOf("/") + 0));
					        } else {
					            MailLink = siteURL + "/DepartmentalDMS/Forms/AllItems.aspx?id=" + encodeURIComponent(FileServerURL) + "&parent=" + encodeURIComponent(FileServerURL.substr(0, FileServerURL.lastIndexOf("/") + 0));
					        }
					    } else {
					        var HostName = window.location.origin + FileServerURL.substr(0, FileServerURL.lastIndexOf("/") + 0);
					        MailLink = HostName + "/Forms/AllItems.aspx?id=" + encodeURIComponent(FileServerURL) + "&parent=" + encodeURIComponent(FileServerURL.substr(0, FileServerURL.lastIndexOf("/") + 0));
					    }
					}
					else {
					    MailLink = encodeURI(EmailFileArray[i].serverUrl);
					}
                    EmailDesign = EmailDesign + "<div><strong>File Name :</strong>" + EmailFileArray[i].File + "</div>" +
                                            "<div><strong>Reference No :</strong> " + EmailFileArray[i].Reference + "</div>" +
                                            "<div><strong>Title:</strong> " + EmailFileArray[i].Title + "</div>" +
                                             "<div><strong>Type:</strong> " + EmailFileArray[i].Type + "</div>" +
                                             "<div><strong>Permission:</strong> " + Permission + "</div>" + //$("#sharedWithPermission").val();
                                             //"<div><a href="+encodeURI(document.location.origin+"/"+EmailFileArray[i].serverUrl)+">Click here</a> to open the document.</div>" +"<br/><br/>"; 
		                                	"<div><a href=" + MailLink + ">Click here</a> to open the document.</div>" + "<br/><br/>";
                }

                EmailDesign += "This is an auto generated email. Please don't reply.";

            }
            EmailFileArray = [];   //Empty Array


            var ccUsers = [];
            ccUsers.push($('#lblSelectedCurrentEmail').html());
            var sharedWithTitle = $('#shareingTypePermissionLevel').val();

            var from = $('#lblSelectedCurrentEmail').html();
            var Metadata;
            Metadata = {
                'properties': {
                    '__metadata': { 'type': 'SP.Utilities.EmailProperties' },
                    'From': from,
                    'To': { 'results': sharedUsersEmailIDsArrayListItemCollection },
                    'CC': { 'results': ccUsers },
                    'Body': EmailDesign,
                    'Subject': sharedEmailSubject
                }
            };
            SendEmailSharedNotification(Metadata);
			alert("File(s) has been shared.");
            //EmailSharedProperties(sharedUsersEmailIDsArrayListItemCollection,"File",EmailFileArray);
        }
        else {
        	alert("File(s) has been shared.");
        }

    }
    else {
        alert("Please select one or more file");
    }
}

//get shared History of File/Folder with 'Revoke' option
function GetSharedHistory(documentid, itemurl, title, documentno, fileName, type) {
    selectedHistoryDoc = [];
    arrSharedOrgUsers = [];
    var option = "",
    uniqueValues = [],
	arrduplicateClient = [],
	arrduplcteRevokdClient = [],
	arrduplcteRevokdTime = [],
	arrDuplicateSharedTo = [];
    var Doc_Type = 'My_Doc';
    $(".select_all").prop("checked", false);          //For all Checkbox
    $("#revokebtn").hide();
    $(".context-menu").hide();
    $('#sharedHistoryList').html('');
    $('#shreduser').html('');
    $('#myModalShareHistory').modal('show');
    var webURL = myCompanyUrl + "/_api/web/lists/getbytitle('SharedDocument')/items?$select=*,SharedUsers/Id,SharedUsers/Title,SharedClient/Title&$expand=SharedUsers,SharedClient&$Filter=DocumentID eq '" + documentid + "'&$orderby=Created desc";
    $.ajax({
        url: webURL,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (data) {

            var itemsSharedHistory = data.d.results;

            $("#filenamee").html(fileName);
            if (title == "null") {
                $("#filetitle").html('');
            }
            else {
                $("#filetitle").html(title);
            }
            if (documentno == "null") {
                $("#referNo").html('');
            }
            else {
                $("#referNo").html(documentno);
            }

            if (itemsSharedHistory.length > 0) {
                var sharedHistory = "";
                $("#shreduser").append('<option value="">All</option>');
                for (var index = 0; index < itemsSharedHistory.length; index++) {

                    var fileTitle = itemsSharedHistory[index].Title;
                    var PermissionType = itemsSharedHistory[index].PermissionType;
                    var SharedToName = itemsSharedHistory[index].SharedUsers.Title;
                    var currentItemId = itemsSharedHistory[index].ID;
                    var PermissionStatus = itemsSharedHistory[index].PermissionStatus;
                    var userNamecurretn = "";
                    var userId = "";
                    var SharedOn = titanForWork.convertJSONDateAMPMWithDate(itemsSharedHistory[index].Created);

                    for (var j = 0; j < itemsSharedHistory[index].SharedUsers.results.length; j++) {
                        var myarray = [];
                        if (uniqueValues.indexOf(itemsSharedHistory[index].SharedUsers.results[j].Title) == -1) {
                            uniqueValues.push(itemsSharedHistory[index].SharedUsers.results[j].Title);
                            if (itemsSharedHistory[index].SharedGroup != "Organization") {
                                option += "<option value='" + itemsSharedHistory[index].SharedUsers.results[j].Title + "'title='" + itemsSharedHistory[index].SharedUsers.results[j].Title + "'>" + itemsSharedHistory[index].SharedUsers.results[j].Title + "</option>";
                            }
                            else {
                                if (jQuery.inArray(itemsSharedHistory[index].SharedClient.Title, arrDuplicateSharedTo) == '-1') {
                                    option += "<option value='" + itemsSharedHistory[index].SharedClient.Title + "'title='" + itemsSharedHistory[index].SharedClient.Title + "'>" + itemsSharedHistory[index].SharedClient.Title + "</option>";
                                    arrDuplicateSharedTo.push(itemsSharedHistory[index].SharedClient.Title);
                                }
                            }
                        }
                        // userNamecurretn += itemsSharedHistory[index].SharedTo.results[j].Title+ ", ";
                        userNamecurretn = itemsSharedHistory[index].SharedUsers.results[j].Title
                        userId = itemsSharedHistory[index].SharedUsers.results[j].Id;
                    }

                    if (itemsSharedHistory[index].SharedGroup != "Organization") {
                        if (PermissionStatus == "Revoked") {
                            sharedHistory += "<tr><td></td>><td>" + userNamecurretn + "</td><td>" + PermissionType + "</td><td>" + SharedOn + "</td><td><a style='cursor: not-allowed;color: Red;'>Revoked</a></td></tr>";
                        }
                        else {
                            if (type == "Folder") {
                                sharedHistory += "<tr><td><input type='checkbox' class='historydocid' value=" + documentid + ',' + encodeURI(itemurl) + ',' + userId + ',' + currentItemId + ',' + Doc_Type + ',' + type + " title='" + userId + "''></td><td>" + userNamecurretn + "</td><td>" + PermissionType + "</td><td>" + SharedOn + "</td><td><a style='cursor: pointer;' onclick=BreakInheritePermissionFolderSharing('" + documentid + "','" + encodeURI(itemurl) + "','" + userId + "','" + currentItemId + "')>Revoke</a></td></tr>";
                            }
                            else {
                                sharedHistory += "<tr><td><input type='checkbox' class='historydocid' value=" + documentid + ',' + encodeURI(itemurl) + ',' + userId + ',' + currentItemId + ',' + Doc_Type + ',' + type + " title='" + userId + "''></td><td>" + userNamecurretn + "</td><td>" + PermissionType + "</td><td>" + SharedOn + "</td><td><a style='cursor: pointer;' onclick=BreakInheritePermissionOnItemSharing222('" + documentid + "','" + encodeURI(itemurl) + "','" + userId + "','" + currentItemId + "')>Revoke</a></td></tr>";
                            }
                        }
                    }
                    else { //to bind all the external users sharing in one table row [Organizations wise]
                        arrSharedOrgUsers.push({
                            userId: userId,
                            Organization: itemsSharedHistory[index].SharedClient.Title,
                            ItemId: currentItemId
                        });
                        if (PermissionStatus == "Revoked") {
                            if (jQuery.inArray(itemsSharedHistory[index].SharedClient.Title, arrduplcteRevokdClient) != '-1') {
                                //Do Nothing. Elements contains this already
                                if (jQuery.inArray(SharedOn, arrduplcteRevokdTime) != '-1') {

                                }
                                else {
                                    sharedHistory += "<tr><td></td>><td>" + itemsSharedHistory[index].SharedClient.Title + "</td><td>" + PermissionType + "</td><td>" + SharedOn + "</td><td><a style='cursor: not-allowed;color: Red;'>Revoked</a></td></tr>";
                                    arrduplcteRevokdTime.push(SharedOn);
                                }
                            }
                            else {
                                sharedHistory += "<tr><td></td>><td>" + itemsSharedHistory[index].SharedClient.Title + "</td><td>" + PermissionType + "</td><td>" + SharedOn + "</td><td><a style='cursor: not-allowed;color: Red;'>Revoked</a></td></tr>";
                                arrduplcteRevokdClient.push(itemsSharedHistory[index].SharedClient.Title);
                                arrduplcteRevokdTime.push(SharedOn);
                            }
                        }
                        else {
                            if (jQuery.inArray(itemsSharedHistory[index].SharedClient.Title, arrduplicateClient) != '-1') {
                                //Do Nothing. Elements contains this already
                            }
                            else {
                                currentItemId = '';
                                if (type == "Folder") {
                                    sharedHistory += "<tr><td><input type='checkbox' class='historydocid' value=" + documentid + ',' + encodeURI(itemurl) + ',' + encodeURI(itemsSharedHistory[index].SharedClient.Title) + ',' + currentItemId + ',' + Doc_Type + ',' + type + "></td><td>" + itemsSharedHistory[index].SharedClient.Title + "</td><td>" + PermissionType + "</td><td>" + SharedOn + "</td><td><a style='cursor: pointer;' onclick=BreakInheritePermissionFolderSharing('" + documentid + "','" + encodeURI(itemurl) + "','" + encodeURI(itemsSharedHistory[index].SharedClient.Title) + "','')>Revoke</a></td></tr>";
                                }
                                else {
                                    sharedHistory += "<tr><td><input type='checkbox' class='historydocid' value=" + documentid + ',' + encodeURI(itemurl) + ',' + encodeURI(itemsSharedHistory[index].SharedClient.Title) + ',' + currentItemId + ',' + Doc_Type + ',' + type + "></td><td>" + itemsSharedHistory[index].SharedClient.Title + "</td><td>" + PermissionType + "</td><td>" + SharedOn + "</td><td><a style='cursor: pointer;' onclick=BreakInheritePermissionOnItemSharing222('" + documentid + "','" + encodeURI(itemurl) + "','" + encodeURI(itemsSharedHistory[index].SharedClient.Title) + "','')>Revoke</a></td></tr>";
                                }
                                arrduplicateClient.push(itemsSharedHistory[index].SharedClient.Title);
                            }
                        }

                    }
                }

                if (itemsSharedHistory.length == 0) {
                    $(".NoRecordFound").show();
                }
                else {
                    $(".NoRecordFound").hide();
                }

                $("#sharedHistoryList").append(sharedHistory);
                $("#TotalItemscount").text(itemsSharedHistory.length);
                if (itemsSharedHistory.length > 0) {
                    $("#shreduser").append(option);
                    TableConfiguration();	     // GenerateTable();
                    selectedHistoryDocEvent();
                }
            }
            else {
                $(".NoRecordFound").show();
                $("#TotalItemscount").text('0');
            }
        }, error: function (data) {
            console.log('error');
        }
    });
}

function TableConfiguration() {
    sorter = new TINY.table.sorter('sorter', 'sharedHistoryTable', {
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
        //sortcolumn: 3,//uncomment if you want to sorting on here on page loading by default on column based
        sortdir: 1,
        init: true

    });
}

//Delete permissions of Folder
function DeleateUserPermissionFolder(userPrincipleId, itemurl, undefineditemID, currentItemId, userType, currentItem, TotalLength) {
    var headers = {
        'X-RequestDigest': $('#__REQUESTDIGEST').val(),
        'X-HTTP-Method': 'DELETE'
    }
    var endPointUrl = myCompanyUrl + "/_api/web/GetFolderByServerRelativeUrl('" + itemurl + "')/ListItemAllFields/roleassignments/getbyprincipalid(" + userPrincipleId + ")";
    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        async: false,
        success: function (data) {
            var ListName = "SharedDocument";
            var Metadata;
            var ItemType = GetItemTypeForListNameDetailsGroups(ListName);
            Metadata = {
                __metadata: {
                    'type': ItemType
                },
                PermissionStatus: "Revoked",
            }
            $.when(updateItemWithIDItemListDocuments(ListName, Metadata, currentItemId, myCompanyUrl)).done(function (Result) {
                if (userType == "Organization") {
                    if ((currentItem + 1) == TotalLength) {
                        alert("permission deleted sucessfully.");
                    }
                }
                else {
                    alert("permission deleted sucessfully.");
                }
                $('#myModalShareHistory').modal('hide');
            });
            console.log(userPrincipleId + ' Successfully removed Permission !');
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}

//Delete permissions of Files
function DeleateUserPermission(userPrincipleId, itemurl, undefineditemID, currentItemId, userType, currentItem, TotalLength) {
    var headers = {
        'X-RequestDigest': $('#__REQUESTDIGEST').val(),
        'X-HTTP-Method': 'DELETE'
    }
    var endPointUrl = myCompanyUrl + "/_api/web/GetFileByServerRelativeUrl('" + itemurl + "')/ListItemAllFields/roleassignments/getbyprincipalid(" + userPrincipleId + ")";
    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        async: false,
        success: function (data) {
            var ListName = "SharedDocument";
            var Metadata;
            var ItemType = GetItemTypeForListNameDetailsGroups(ListName);
            Metadata = {
                __metadata: {
                    'type': ItemType
                },
                PermissionStatus: "Revoked",
            }
            $.when(updateItemWithIDItemListDocuments(ListName, Metadata, currentItemId, myCompanyUrl)).done(function (Result) {
                if (userType == "Organization") {
                    if ((currentItem + 1) == TotalLength) {
                        alert("permission deleted sucessfully.");
                    }
                }
                else {
                    alert("permission deleted sucessfully.");
                }
                $('#myModalShareHistory').modal('hide');
            });
            console.log(userPrincipleId + ' Successfully removed Permission !');
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}

function BreakInheritePermissionFolderSharing(undefineditemID, itemurl, userId, currentItemId) {
    var headers = {
        "Accept": "application/json;odata=verbose",
        "content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
    var endPointUrl = myCompanyUrl + "/_api/web/GetFolderByServerRelativeUrl('" + itemurl + "')/ListItemAllFields/breakroleinheritance(true)";
    if (currentItemId != '') {
        $.ajax({
            url: endPointUrl,
            type: "POST",
            headers: headers,
            dataType: 'json', success: function (data) {
                DeleateUserPermissionFolder(userId, itemurl, undefineditemID, currentItemId, "Selective", 0, 0);
            },
            error: function (error) {
                console.log(JSON.stringify(error));
            }
        });
    }
    else { //For organizations
        userId = decodeURI(userId);
        var arrOrgWise = arrSharedOrgUsers.filter(function (data) {
            return userId == data.Organization; //here "userId" is Organization Name.
        });

        $.ajax({
            url: endPointUrl,
            type: "POST",
            headers: headers,
            dataType: 'json', success: function (data) {
                for (k = 0; k < arrOrgWise.length; k++) {
                    DeleateUserPermissionFolder(arrOrgWise[k].userId, itemurl, undefineditemID, arrOrgWise[k].ItemId, 'Organization', k, arrOrgWise.length);
                }
            },
            error: function (error) {
                console.log(JSON.stringify(error));
            }
        });
    }
}

function BreakInheritePermissionOnItemSharing222(undefineditemID, itemurl, userId, currentItemId) {
    var headers = {
        "Accept": "application/json;odata=verbose",
        "content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
    var endPointUrl = myCompanyUrl + "/_api/web/GetFileByServerRelativeUrl('" + itemurl + "')/ListItemAllFields/breakroleinheritance(true)";
    if (currentItemId != '') {
        $.ajax({
            url: endPointUrl,
            type: "POST",
            headers: headers,
            dataType: 'json', success: function (data) {
                DeleateUserPermission(userId, itemurl, undefineditemID, currentItemId, "Selective", 0, 0);
            },
            error: function (error) {
                console.log(JSON.stringify(error));
            }
        });
    }
    else { //For organizations
        userId = decodeURI(userId);
        var arrOrgWise = arrSharedOrgUsers.filter(function (data) {
            return userId == data.Organization; //here "userId" is Organization Name.
        });

        $.ajax({
            url: endPointUrl,
            type: "POST",
            headers: headers,
            dataType: 'json', success: function (data) {
                for (k = 0; k < arrOrgWise.length; k++) {
                    DeleateUserPermission(arrOrgWise[k].userId, itemurl, undefineditemID, arrOrgWise[k].ItemId, 'Organization', k, arrOrgWise.length);
                }
            },
            error: function (error) {
                console.log(JSON.stringify(error));
            }
        });
    }
}


//Add shared history for Organization sharing
function AddSharedLinkToListOrg(title, documentURL, sharedUsersId, documentId, documentType, sharedGroup, permissionType, Shared_Type) {
    IsBlock = "No";
    var SharedClient = '';
    var sharingLinkDocumentNo = $('#lblDocNumber').text();
    if (sharingLinkDocumentNo == "" || sharingLinkDocumentNo == null) {
        sharingLinkDocumentNo = "";
    }
    if (globalsharingDocumentDetails == "" || globalsharingDocumentDetails == null) {
        globalsharingDocumentDetails = "";
    }
    if (documentType == "Folder") {
        sharingLinkDocumentNo = "";
        globalsharingDocumentDetails = "";
    }
    else {
        if (globalSharingDocumentDocumentType != null && globalSharingDocumentDocumentType != "") {
            documentType = globalSharingDocumentDocumentType;
        }
    }
    /*if (documentType == "Folder") {
        permissionType = "Read";
        if (Action == "NewUpload") {
            SharedClient = $("#ddlOrgNameUpload").val();
        }
        else {
            SharedClient = $("#ddlOrgNameFolder").val();
        }
    }
    else {
        if (Action == "NewUpload") {
            SharedClient = $("#ddlOrgNameUpload").val();
        }
        else {
            SharedClient = $("#ddlOrgName").val();
        }
    }*/

    for (k = 0; k < sharedUsersId.length; k++) {
        var shareduserid = [];
        //var SharedClient = '';
        shareduserid.push(sharedUsersId[k].userId);
        var ListName = "SharedDocument";
        var Metadata;
        var ItemType = GetItemTypeForListNameDetailsGroups(ListName);
        //for block download coding
        if ($('#sharedWithPermission').val() == "Restricted View" || permissionType == "Restricted View") {
            IsBlock = "Yes";
        }

        Metadata = {
            __metadata: {
                'type': ItemType
            },
            Title: title,//File/Folder name
            DocumentURL: documentURL,//File/Folder url
            SharedUsersId: { 'results': shareduserid },//Shared users
            DocumentID: documentId,//Shared file/folder id
            DOC_IDId: documentId,  //Shared file/folder id Lookupvalue
            DocumentType: documentType,// File/Folder
            SharedGroup: sharedGroup,//shared goupname or any label
            PermissionType: permissionType,//1 for readonly 2 for editor,
            ServerRedirectedEmbedURL: commonserverRedirectedEmbedUri,
            DocumentNo: sharingLinkDocumentNo,
            Details: globalsharingDocumentDetails,
            IsBlock: IsBlock,
            SharedClientId: parseInt(sharedUsersId[k].clientId),
            SharedType: Shared_Type,
            SharedFrom: $("#alldepartment :selected").text()
        };

        if (Shared_Type != "Department") {
            delete Metadata["SharedFrom"];
        }

        $.when(AddItemToListGroups(ListName, Metadata)).done(function (response) {
            //alert("Successfully shared.");   
        });
    }
}

function AddSharedLinkToList22(title, documentURL, sharedUsersId, documentId, documentType, sharedGroup, permissionType, Shared_Type) {
    IsBlock = "No";
    var sharingLinkDocumentNo = $('#lblDocNumber').text();
    if (sharingLinkDocumentNo == "" || sharingLinkDocumentNo == null) {
        sharingLinkDocumentNo = "";
    }
    if (globalsharingDocumentDetails == "" || globalsharingDocumentDetails == null) {
        globalsharingDocumentDetails = "";
    }
    if (documentType == "Folder") {
        sharingLinkDocumentNo = "";
        globalsharingDocumentDetails = "";
    }
    else {
        if (globalSharingDocumentDocumentType != null && globalSharingDocumentDocumentType != "") {
            documentType = globalSharingDocumentDocumentType;
        }
    }

    for (k = 0; k < sharedUsersId.length; k++) {
        var shareduserid = [];
        shareduserid.push(sharedUsersId[k]);
        var ListName = "SharedDocument";
        var Metadata;
        var ItemType = GetItemTypeForListNameDetailsGroups(ListName);
        //for block download coding
        if ($('#sharedWithPermission').val() == "Restricted View" || permissionType == "Restricted View") {
            IsBlock = "Yes";
        }

        Metadata = {
            __metadata: {
                'type': ItemType
            },
            Title: title,//File/Folder name
            DocumentURL: documentURL,//File/Folder url
            SharedUsersId: { 'results': shareduserid },//Shared users
            DocumentID: documentId,//Shared file/folder id
            DOC_IDId: documentId,  //Shared file/folder id Lookupvalue
            DocumentType: documentType,// File/Folder
            SharedGroup: sharedGroup,//shared goupname or any label
            PermissionType: permissionType,//1 for readonly 2 for editor,
            ServerRedirectedEmbedURL: commonserverRedirectedEmbedUri,
            DocumentNo: sharingLinkDocumentNo,
            Details: globalsharingDocumentDetails,
            IsBlock: IsBlock,
            SharedType: Shared_Type,
            SharedFrom: $("#alldepartment :selected").text()
        };
        if (Shared_Type != "Department") {
            delete Metadata["SharedFrom"];
        }

        $.when(AddItemToListGroups(ListName, Metadata)).done(function (response) {
            //alert("Successfully shared.");   
        });
    }
}

function EmptyPeoplePicker(peoplePickerId) {
    var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerId + "_TopSpan"];
    var usersobject = peoplePicker.GetAllUserInfo();
    usersobject.forEach(function (index) {
        peoplePicker.DeleteProcessedUser(usersobject[index]);
    });
}

function selectedHistoryDocEvent() {
    $('.historydocid').change(function () {
        selectedHistoryDoc = [];
        selectedHistoryDocrelativeurl = [];
        $('.historydocid').each(function () {
            if ($(this).prop("checked") == true) {
                //var nameArr = ($(this).val()).split(',');
                selectedHistoryDoc.push($(this).val());
                //selectedHistoryDocrelativeurl.push($(this).attr("title"));
            }

        });
        if (selectedHistoryDoc.length == 0) {
            $("#revokebtn").hide();
        }
        else {
            $("#revokebtn").show();
        }
        if ($('.historydocid:checked').length == $('.historydocid').length) {
            $('.select_all').prop('checked', true);
        } else {
            $('.select_all').prop('checked', false);
        }
    });
}

//Multiple revoke for My documents
function RevokeOnCheckBox() {
    if (selectedHistoryDoc.length > 0) {
        var filesHistory = 1;
        for (var index = 0; index < selectedHistoryDoc.length; index++) {
            var value = selectedHistoryDoc[index];
            var arraycureent = [];
            arraycureent = value.split(",");

            //First check if it is of Dept_Doc or My_Doc
            if (arraycureent[4] == "Dept_Doc") {
                //check if it's a file or Folder
                if (arraycureent[5] == "File") {
                    RevokeDepartmntPermission(arraycureent[0], arraycureent[1], arraycureent[2], arraycureent[3]);
                }
                else { //Folder
                    BreakPermissionDeptDocFolder(arraycureent[0], arraycureent[1], arraycureent[2], arraycureent[3]);
                }
            }
            else { //My_Doc
                //check if it's a file or Folder
                if (arraycureent[5] == "File") {
                    BreakInheritePermissionOnItemSharing222(arraycureent[0], arraycureent[1], arraycureent[2], arraycureent[3]);
                }
                else { //Folder
                    BreakInheritePermissionFolderSharing(arraycureent[0], arraycureent[1], arraycureent[2], arraycureent[3]);
                }
            }
        }
    }
    else {
        alert("Please select one or more history for revoke.");
    }
}


//Multiple revoke for departmental documents
function MultipleRevoke() {
    if (selectedHistoryDoc.length > 0) {
        var filesHistory = 1;
        for (var index = 0; index < selectedHistoryDoc.length; index++) {
            var value = selectedHistoryDoc[index];
            var arraycureent = [];
            arraycureent = value.split(",");
            RevokeDepartmntPermission(arraycureent[0], arraycureent[1], arraycureent[2], arraycureent[3])
        }
    }
    else {
        alert("Please select one or more history for revoke")
    }
}


function GetDocumentsRevoke(sharedHistoryUser, undefineditemID) {
    for (k = 0; k < sharedHistoryUser.length; k++) {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + sharedHistoryUser[k] + "' and DocumentID eq '" + undefineditemID + "' and PermissionStatus ne 'Revoked'";
        var Ownurl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('SharedDocument')/Items?$select=ID,DocumentNo,Details,ServerRedirectedEmbedURL,Title,DocumentURL,DocumentID,DocumentType,SharedGroup,PermissionStatus,PermissionType,SharedUsers/Title,SharedUsers/ID,Author/Title,Author/ID&$expand=SharedUsers,Author" + queryFilter;
        $.ajax({
            url: Ownurl,
            headers: { Accept: "application/json;odata=verbose" },
            async: false,
            success: function (data) {
                var items = data.d.results;
                for (var i = 0; i < items.length; i++) {
                    currentItemId = items[i].ID;
                    var ListName = "SharedDocument";
                    var Metadata;
                    var ItemType = GetItemTypeForListNameDetailsGroups(ListName);
                    Metadata = {
                        __metadata: {
                            'type': ItemType
                        },
                        PermissionStatus: "Revoked",
                        share_remarks: "Revoked due to re-share",
                    }
                    $.when(updateItemWithIDItemListDocuments(ListName, Metadata, currentItemId, myCompanyUrl)).done(function (Result) {
                        console.log("sucessfully revoke");
                    });
                }
            },
            eror: function (data) {

                console.log('error');
            }
        });
    }
}

function UpdatedSharedLink(filesFolderId) {

    var resturl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('SharedDocument')/Items?$select=ID,DocumentID&$filter=DocumentID eq '" + filesFolderId + "'"
    $.ajax({
        url: resturl,
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': $('#__REQUESTDIGEST').val()
        },
        async: false,
        success: function (data) {
            var items = data.d.results;
            for (var index = 0; index < items.length; index++) {

                var ListName = "SharedDocument";
                var Metadata;
                var ItemType = GetItemTypeForListNameDetailsGroups(ListName);
                Metadata = {
                    __metadata: {
                        'type': ItemType
                    },
                    PermissionStatus: "Deleted",
                }
                var webUrl = _spPageContextInfo.webAbsoluteUrl;


                $.when(updateItemWithIDItemListDocuments(ListName, Metadata, items[index].ID, webUrl)).done(function (Result) {
                });
                //  UpdatedSharedLinks(items[index].ID);//update link
            }
        }, error: function (data) {
            console.log('error');
        }
    });
}

function CurrentPermissionStatus(permissionStaus) {
    if (permissionStaus == "permited") {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and (PermissionType eq 'Read' or PermissionType eq 'Contribute') and (PermissionStatus ne 'Deleted' and PermissionStatus ne 'Revoked') and Author/ID ne '" + _spPageContextInfo.userId + "'";
        GetDocumentsSharedWithMe(queryFilter);
    }
    else if (permissionStaus == "Read") {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and (PermissionType eq 'Read') and (PermissionStatus ne 'Deleted' and PermissionStatus ne 'Revoked') and Author/ID ne '" + _spPageContextInfo.userId + "'";
        GetDocumentsSharedWithMe(queryFilter);

    }
    else if (permissionStaus == "Contribute") {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and (PermissionType eq 'Contribute') and (PermissionStatus ne 'Deleted' and PermissionStatus ne 'Revoked') and Author/ID ne '" + _spPageContextInfo.userId + "'";
        GetDocumentsSharedWithMe(queryFilter);

    }
    else if (permissionStaus == "Restricted View") {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and (PermissionType eq 'Restricted View') and (PermissionStatus ne 'Deleted' and PermissionStatus ne 'Revoked') and Author/ID ne '" + _spPageContextInfo.userId + "'";
        GetDocumentsSharedWithMe(queryFilter);
    }
    else if (permissionStaus == "Revoked") {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and (PermissionStatus eq 'Revoked') and Author/ID ne '" + _spPageContextInfo.userId + "'";
        GetDocumentsSharedWithMe(queryFilter);
    }

    else if (permissionStaus == "Deleted") {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and (PermissionStatus eq 'Deleted') and Author/ID ne '" + _spPageContextInfo.userId + "'";
        GetDocumentsSharedWithMe(queryFilter);
    }
    else if (permissionStaus == "All") {
        var queryFilter = "&$filter=SharedUsers/ID eq '" + _spPageContextInfo.userId + "' and Author/ID ne '" + _spPageContextInfo.userId + "'";
        GetDocumentsSharedWithMe(queryFilter);
    }
}

function BreakInheritePermission(itemurl, userPrincipleId) {
    var headers = {
        "Accept": "application/json;odata=verbose",
        "content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
    //var endPointUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('" + LibraryName + "')/getItemById(" + itemID + ")/breakroleinheritance(copyRoleAssignments=false, clearSubscopes=true)";
    var endPointUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFileByServerRelativeUrl('" + itemurl + "')/ListItemAllFields/breakroleinheritance(true)";
    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        async: false,
        cache: false,
        dataType: 'json', success: function (data) {
            DeleateUserPermissionFiles(userPrincipleId, itemurl);
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}

function DeleateUserPermissionFiles(userPrincipleId, itemurl) {
    var headers = {
        'X-RequestDigest': $('#__REQUESTDIGEST').val(),
        'X-HTTP-Method': 'DELETE'
    }
    var endPointUrl = myCompanyUrl + "/_api/web/GetFileByServerRelativeUrl('" + itemurl + "')/ListItemAllFields/roleassignments/getbyprincipalid(" + userPrincipleId + ")";
    //  var endPointUrl = myCompanyUrl+ "/_api/web/lists/getByTitle('DocumentManagementSystem')/getItemById(" + undefineditemID + ")/ListItemAllFields/roleassignments/getbyprincipalid(" + userPrincipleId + ")";

    $.ajax({
        url: endPointUrl,
        type: "POST",
        headers: headers,
        async: false,
        success: function (data) {
            console.log(userPrincipleId + ' Successfully removed Permission !');
        },
        error: function (error) {
            //console.log(JSON.stringify(error));
        }
    });
}

//set people picker values
function SetAndResolvePeoplePicker(controlNameID, LoginNameOrEmail, peoplePickerDisable) {
    var peoplePickerDiv = $("[id^='" + controlNameID + "']");
    // Get the people picker object from the page.
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerDiv[1].id];
    peoplePicker.AddUserKeys(LoginNameOrEmail);
    if (peoplePickerDisable == true) {
        $('#' + controlNameID + '_TopSpan_EditorInput').attr('disabled', true);
        $('.sp-peoplepicker-delImage').hide();
    }
}

//get Guest-clients in which logged_In user is either InternalStakeHolder or Internal_Supervisior 
function getGuestClients(HTMLId) {
    var Query = "?$select=Id,Title,IsActive,DocumentLibrary,CompanyID/Id,DocumentLibrary,InternalMembers/EMail,InternalSupervisor/EMail&$orderby=Title asc&$expand=CompanyID,InternalMembers,InternalSupervisor&$top=5000&$filter=IsActive eq '1' and InternalMembers/EMail eq '" + _spPageContextInfo.userEmail + "' or InternalSupervisor/EMail eq '" + _spPageContextInfo.userEmail + "' ";
    dfds = $.Deferred();
    url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('ClientMaster')/items/" + Query;
    $.when(getItems(url, dfds)).done(function (Clients) {
        response = [];
        if (Clients.length > 0) {
            //$("<option value='0'>--Select--</option>").appendTo("#"+HTMLId);
            for (var i = 0; i < Clients.length; i++) {
                var value = Clients[i];
                if (value.DocumentLibrary != null) {
                    $("<option value='" + value.Id + "'>" + value.Title + "</option>").appendTo("#" + HTMLId);
                }
            }
            $("#" + HTMLId).CreateMultiCheckBox({
                width: '389px', height: '32.5px',
                defaultText: 'Select', height: '250px'
            });
        }
        else {
            $("<option value='No organization found!!'>No organization found!!</option>").appendTo("#" + HTMLId);
        }
    });
}

//get the employees for the selected Organization
function getOrgEmps(ClientName) {
    var Query = "?$select=Id,Title,Status,LoginName/EMail,LoginName/Id,Client_Name/Title,Client_Name/Id&$expand=LoginName,Client_Name&$top=5000&$filter=Client_Name/Title eq '" + ClientName + "' and Status eq 'Active' ";
    dfds = $.Deferred();
    url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('ExternalUsers')/items/" + Query;
    $.when(getItems(url, dfds)).done(function (ExtEmployees) {
        response = [];
        if (ExtEmployees.length > 0) {
            for (var i = 0; i < ExtEmployees.length; i++) {
                var value = ExtEmployees[i];
                sharedUsersEmailIDsArrayListItemCollection.push(value.LoginName.EMail);
                arrUserClientWise.push({
                    userId: value.LoginName.Id,
                    ClientName: ClientName,
                    clientId: value.Client_Name.Id
                });
                sharedUsersIdArrayListItemCollection.push(value.LoginName.Id);
            }
        }
    });
}


//to set css of cheackable dropdown
var defaultMultiCheckBoxOption = { width: '220px', defaultText: 'Select Below', height: '200px' };

jQuery.fn.extend({
    CreateMultiCheckBox: function (options) {

        var localOption = {};
        localOption.width = (options != null && options.width != null && options.width != undefined) ? options.width : defaultMultiCheckBoxOption.width;
        localOption.defaultText = (options != null && options.defaultText != null && options.defaultText != undefined) ? options.defaultText : defaultMultiCheckBoxOption.defaultText;
        localOption.height = (options != null && options.height != null && options.height != undefined) ? options.height : defaultMultiCheckBoxOption.height;

        this.hide();
        this.attr("multiple", "multiple");
        var divSel = $("<div class='MultiCheckBox multiBox'>" + localOption.defaultText + "<span class='k-icon k-i-arrow-60-down'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='sort-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' class='svg-inline--fa fa-sort-down fa-w-10 fa-2x'><path fill='currentColor' d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z' class=''></path></svg></span></div>").insertBefore(this);
        divSel.css({ "width": localOption.width });

        var detail = $("<div class='MultiCheckBoxDetail'><div class='MultiCheckBoxDetailBody'></div></div>").insertAfter(divSel);
        detail.css({ "width": parseInt(options.width), "max-height": localOption.height });
        var multiCheckBoxDetailBody = detail.find(".MultiCheckBoxDetailBody");

        this.find("option").each(function () {
            var val = $(this).prop("text");//$(this).attr("value");

            if (val == undefined)
                val = '';

            multiCheckBoxDetailBody.append("<div class='cont'><div><input type='checkbox' class='mulinput' value='" + val + "' /></div><div>" + $(this).text() + "</div></div>");
        });

        multiCheckBoxDetailBody.css("max-height", (parseInt($(".MultiCheckBoxDetail").css("max-height")) - 28) + "px");
    },
    UpdateSelect: function () {
        //var arr = [];
        sharedUsersEmailIDsArrayListItemCollection = [];
        sharedUsersIdArrayListItemCollection = [];
        arrUserClientWise = [];
        var selectedClientName = [];
        this.prev().find(".mulinput:checked").each(function () {
            getOrgEmps($(this).val());
            selectedClientName.push($(this).val());
            //arr.push($(this).val());
        });
        $(".multiBox").text(selectedClientName.join(', '));
        if (selectedClientName.length == 0) {
            $(".multiBox").text("Select");
        }
        //this.val(arr);
    },
});