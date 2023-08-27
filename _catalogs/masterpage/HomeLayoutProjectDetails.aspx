<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>




<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<meta name="revisit-after" content="2 days" />
    <meta name="description" content="Intranet"/>
    <meta name="keywords" content="Intranet" />    
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	Intranet
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<h1 style="display:none">Intranet</h1>
	<div id="page-wrapper" class="paddtop0" style="margin:0; padding:0px 30px 0px 30px"  >
		<div id="page-inner">
			<div class="col-md-12 top15" >
			<!--row div start-->
				<div class="row">			
					<ul id="myTab" class="nav nav-tabs nav-justified shadow3" style="margin-bottom: 0px; margin-top:0px">
						<li class="active">
							<a href="#home" data-toggle="tab" class="js-tabcollapse-panel-heading" data-parent="" data-localize="ProjectDetails"></a>
						</li>
						<li class="">
							<a href="#Approvals" data-toggle="tab" class="js-tabcollapse-panel-heading" data-parent="" data-localize="ProjectDocuments"></a>
						</li>
						<li class="">
							<a href="#Tasks" data-toggle="tab" style="background-image: none;"class="js-tabcollapse-panel-heading" data-parent="" data-localize="Tasks"></a>
						</li> 
					</ul>
					<div id="myTabContent" class="tab-content">
						<div>
						<div class="tab-pane fade active in" id="home">
						<div class="row top15">
						<div class="col-md-6 ">
						<div class="panel panel-default shadow2">
						<div class="panel-heading  panel-head-4">
						<div class="panel-title">
						<h4 class="h4-color"><label data-localize="ProjectDetails"></label><span class="link-color"></span>
						</h4>
						</div>
						</div>
						<div class="panel-body project-details" >                       
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone1"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                       				
						</div>
						<!--/panel content-->
						</div>
						</div>
						<div class="col-md-6  margin20">
						<div class="panel panel-default project-dashboard shadow2">
						<div class="panel-heading  panel-head-4">
						<div class="panel-title">
						<h4 class="h4-color"><label data-localize="ProjectDashboard"></label><span class="link-color">
						</span>
						</h4>
						</div>
						</div>
						<div class="panel-body">                       
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone18"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                       				
						</div>
						<!--/panel content-->
						</div>
						</div>
						<div class="col-md-6  margin20">
						<div class="panel panel-default project-documents shadow2">
						<div class="panel-heading  panel-head-4">
						<div class="panel-title">
						<h4 class="h4-color"><label data-localize="ProjectTeam"></label><span class="link-color">
						</span>
						<!--<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl1" runat="server"  
						AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All">  
						-->
						<span class="pull-right ">
						Total Active User: <span style="margin-right: 37px;" id="totalcount"></span>
						<a class="pull-right" id="btnAddNewTeamMember" style="display:none;"><span class="glyphicon glyphicon-plus-sign text-size"></span></a>						<!--<SharePoint:SPLinkButton runat="server" class="glyphicon glyphicon-plus-sign aVisited addProjectDocument link-color"  id="nav4" target="_blank"  Text="" />-->
						</span>   					
						<!--</SharePoint:SPSecurityTrimmedControl>-->
						</h4>
						</div>
						</div>
						<div class="panel-body" >                       
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone2"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                       				
						</div>
						<div class="container">
							<div class="row view-all-3">
								<div class="col-md-12">
									<span class=" pull-right ">
								<!--	<SharePoint:SPLinkButton runat="server" class="viewProjectDocument"  id="nav5" target="_blank"  Text="View All" />-->
									<a onclick="GetAllTeamMemberDetailsByProjectId()">
									View All</a>
									</span>
								</div>
							</div>
						</div>							
						<!--/panel content-->
						</div></div>
						<div class="col-md-6">
						</div>
						</div>
						</div>
						<!--2nd Tab Details-->
						<div class="tab-pane fade" id="Approvals">       
						<div class="top15">
						<div class="row">
						<div>   
						<!-- Filter End-->
						<div class="clearfix"></div>
						<div class="col-md-12">
						<div class="panel panel-default panel-height-3 shadow2">
						<div class="panel-heading  panel-head-4 Project-Team">
						<div class="col-md-10 panel-title">
						<h4 class="h4-color">
							<span data-localize="ProjectDocuments"></span>
							<label id="lblProjectTeamMember" style="display:none;"></label>
							<span class="link-color">
							</span>
						</h4>
						</div>
						  <div class="col-md-2">
						  <!-- <button type="button"class="btn btn-outline-success" id='btnFullViewMyDocumens' value='View Full Mode'>View Full Mode</button>-->
						    <a class="refresh" style="font-size:19px;float:right;color:white"><strong><i class="fa fa-refresh" id="btnMyDOcumentReload" aria-hidden="true"></i></strong></a>
							</div>	
										
						</div>
						<div class="panel-body">                       
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone15"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                       				
						</div>
						<!--/panel content-->
						</div></div></div>
						</div>
						</div>
						</div>
						<!--End of 2nd Tab-->
						<!--3rd Tab Details-->
							<div class="row tab-pane fade" id="Tasks">       
								<div class="col-lg-12">
									<div class="col-lg-12 panel panel-default" style="background-color:#fff">   
									<!-- Filter End-->
									<div class="clearfix"></div>
										<div class="row panel-heading  panel-head-4 project-task-detail">
											<div class="panel-title">
												<h4 class="h4-color"><span class="glyphicon glyphicon-save"></span>
													<span data-localize="ProjectTaskDetail"></span> 
													<label id="lblProjectTaskDetails"></label>
												</h4>
											</div>
										</div>
									<!-- TASK-->
									<WebPartPages:WebPartZone id="WebPartZone12" runat="server" title="Zone12"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
									</div>
								</div>
							</div>
						</div>
					<!--End of 3rd Tab-->
					</div>
				</div>
			<!--end row div start-->
			</div>
		</div>
	</div>
	
	
	
	
	<script type="text/javascript">

$(document).ready(function () {
	//SP.SOD.executeOrDelayUntilScriptLoaded(getCurrentURL,"sp.js");
	SP.SOD.executeFunc('sp.js', 'SP.ClientContext', getCurrentURL_Link); 
}); 


function getCurrentURL_Link()
{
	var listName='ProjectDetails';
	var txtProjectID =  titanForWork.getQueryStringParameter("ProjectID");
    var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('"+listName+"')/items?$select=ID,ProjectSiteURL&$filter=ID eq '" + txtProjectID + "'";
    $.ajax({
        url: siteURL,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (data)
        {
            var items = data.d.results;
            
            if (items.length>0)
            {
                        
                var siteURL = items[0].ProjectSiteURL;
                setURL(siteURL);
                //
				
				
				
				
			}
		}, eror: function (data)
        {
            alert($('#txtSomethingWentWrong').val());
        }
    });
}

function setURL(siteURL)
{
	var txtProjectID =  titanForWork.getQueryStringParameter("ProjectID");
	var txtCompanyId =  titanForWork.getQueryStringParameter("CompanyId");
	var txtProjectName =  titanForWork.getQueryStringParameter("ProjectName");
	

	//Add and View For Announcement web part
	$(".addProjectDocument").attr("href", ""+siteURL+"/Shared%20Documents/Forms/AllItems.aspx");
	$(".viewProjectDocument").attr("href", ""+siteURL+"/Shared%20Documents/Forms/AllItems.aspx");
	$(".addTransmittalIn").attr("href", "http://203.122.28.220:8080/DMS/Pages/TransmittalIn.aspx?CompanyId="+txtCompanyId+"&ProjectID="+txtProjectID +"&ProjectName="+txtProjectName +"");
	$(".addTransmittalOut").attr("href", "http://203.122.28.220:8080/DMS/Pages/TransmittalOut.aspx?CompanyId="+txtCompanyId+"&ProjectID="+txtProjectID +"&ProjectName="+txtProjectName +"");
	$(".addCorrespondenceIn").attr("href", "http://203.122.28.220:8080/DMS/Pages/CorresIn.aspx?CompanyId="+txtCompanyId+"&ProjectID="+txtProjectID +"&ProjectName="+txtProjectName +"");
	$(".addCorrespondenceOut").attr("href", "http://203.122.28.220:8080/DMS/Pages/CorresOut.aspx?CompanyId="+txtCompanyId+"&ProjectID="+txtProjectID +"&ProjectName="+txtProjectName +"");

}

</script>


</asp:Content>




