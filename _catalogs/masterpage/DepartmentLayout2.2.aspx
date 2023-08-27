<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>


<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
<PublishingWebControls:EditModePanel runat="server">
	<style type="text/css">
		.ms-webpart-cell-horizontal+div {
			display:block !Important;
		}
	</style> </PublishingWebControls:EditModePanel>
	<meta name="revisit-after" content="2 days" />
    <meta name="description" content="Intranet"/>
    <meta name="keywords" content="Intranet" />  
    <style type="text/css">
		.home-slider > .ms-webpart-zone {
			display: block !important; 
		}
		.home-slider > .ms-webpart-zone > .ms-webpart-cell-horizontal {
			display: block !important;
			margin: auto auto 0px !important;
		}
		.col-xs-1, 
		.col-sm-1, 
		.col-md-1, 
		.col-lg-1, 
		.col-xs-2, 
		.col-sm-2, 
		.col-md-2, 
		.col-lg-2, 
		.col-xs-3, 
		.col-sm-3, 
		.col-md-3, 
		.col-lg-3, 
		.col-xs-4, 
		.col-sm-4, 
		.col-md-4, 
		.col-lg-4, 
		.col-xs-5, 
		.col-sm-5, 
		.col-md-5, 
		.col-lg-5, 
		.col-xs-6, 
		.col-sm-6, 
		.col-md-6, 
		.col-lg-6, 
		.col-xs-7, 
		.col-sm-7, 
		.col-md-7, 
		.col-lg-7, 
		.col-xs-8, 
		.col-sm-8, 
		.col-md-8, 
		.col-lg-8, 
		.col-xs-9, 
		.col-sm-9, 
		.col-md-9, 
		.col-lg-9, 
		.col-xs-10, 
		.col-sm-10, 
		.col-md-10, 
		.col-lg-10, 
		.col-xs-11, 
		.col-sm-11, 
		.col-md-11, 
		.col-lg-11, 
		.col-xs-12, 
		.col-sm-12, 
		.col-md-12, 
		.col-lg-12 {
			padding-left: 10px;
			padding-right: 10px;
		}
		.row {
		margin-left: -10px;
		margin-right: -10px;
		}
		.container-fluid{
		padding-left:10px;
		padding-right:10px;
		}

	.header-container nav.container div.navbar-header div.navbar-brand{
		padding: 3px 5px !important;
	}
	.department-header .breadcrumb {
		margin-left: 0px;
	}
    </style>
       
</asp:Content>   

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	Digital Workplace
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
<style>
	.containerDepartment {
    margin-right: auto;
    margin-left: auto;
    /* padding-left: 15px; */
    padding-right: 15px;
}


</style>
<script src='../SiteAssets/EmployeeSynchronous/Permission/CheckUserAuthentication.js'></script>
<script type="text/javascript" src="../SiteAssets/MasterPageScripts/DepartmentPage.js"></script>

<h1 style="display:none">Intranet Department</h1>
<!-- header -->
<!-- Main -->
	<div class="col-md-12">
		<div class=" col-md-12 department-header"> 
			<ol class="breadcrumb">
				<li>      
					<h4>
						<nb data-localize="Department"><b>Department</b> </nb> : <label class="departmentName" style=" margin-bottom:3px;padding-bottom:0px;line-height:17px;"></label>
					</h4>
				</li>
			</ol>
		</div>
	</div>
<!--<div class="col-md-12">-->
		<div class="container-fluid res-container-div">
			<div class="col-md-12">
				<div class="row"><!--Start Row one-->
					<div class="col-md-8">
						<div class="department-slider">													
							<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone1"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
							<div class="container">
								<div class="row view-all-3">
									<div class="col-sm-12">
										<span class="pull-right">
										<!--<nb data-localize="ViewAll">-->										
										<a class="viewBanner link-color-white" id="nav18"><span class="glyphicon glyphicon-arrow-right"></span></a>
										<!--</nb>-->
										</span>
									</div>
								</div>
							</div>														
						</div>
					</div>
					<div class="col-md-4">
						<div class="panel-heading  panel-head-4 panel-head-new">
							<div class="panel-title">
								<h4 class="h4-color">
									<div class="head-bg head-back-color">
										<span class="pull-left" style="margin-right:10px;">
											<i class="fa fa-university head-icon headicon"></i>
										</span>
									</div>
									<span class="head-text">
										<nb data-localize="Knowledge"> </nb>
									</span>							
								</h4>
							</div>
						</div>
						<div class="panel panel-default panel-default-new shadow2 shadow2-new">
							<div class="panel-body panel-height-new over-flow-y pdng-zero">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="EventsZone"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>		
							</div>
							<div class="container">
								<div class="row view-all-3">
									<div class="col-sm-12">
										<span class="pull-right">
										<!--	<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl11" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All">	 -->	
													<!--<a class="Events_Add glyphicon glyphicon-plus-sign link-color-new padding-right-10 link-color" id="nav4" style="display:none;"></a>  -->
												<a class="NewKnowledgeAdd glyphicon glyphicon-plus-sign link-color link-color-new padding-right-10" style="cursor:pointer;" id="nav4"></a> 
											<!--</SharePoint:SPSecurityTrimmedControl>	 -->
											<a class="ViewAllKnowledge link-color-new link-color" id="nav18" style="cursor:pointer;"><span class="glyphicon glyphicon-arrow-right"></span></a>
										</span>
									</div>
								</div>
							</div>
						</div>				
					</div>
				</div>
			</div><!--End Row One--> 				
			<!-- End Documents WebPart -->
			<!-- Start Second Row -->
			<div class="col-md-12">
				<div class="row"><!--Start Row Two-->
					<div class="col-md-4">
						<div class="panel-heading  panel-head-4 panel-head-new ">
							<div class="panel-title">
								<h4 class="h4-color">             
									<div class="head-bg head-back-color">
										<span class="pull-left "><i class="fa fa-file-text head-icon headicon"></i></span>
									</div>  	
									<span class="head-text"><nb data-localize="Documents"></nb></span>
								</h4>
							</div>
						</div>
						<div class="panel panel-default panel-default-new shadow2 shadow2-new department-documents-zone">
							<div class="panel-body panel-height-new-2 over-flow-y pdng-zero">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="DocumentsZone"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
							</div>
							<div class="container">
								<div class="row view-all-3">
									<div class="col-sm-12">	
										<span class="pull-right">									
												<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl1" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All">		
														<a class="Documents_Add glyphicon glyphicon-plus-sign link-color-new padding-right-10 link-color" id="nav4" style="display:none;"></a>  
												</SharePoint:SPSecurityTrimmedControl>									
												<a class="Documents_View link-color-new" id="nav5" Target="_blank" >
													<span class="glyphicon glyphicon-arrow-right"></span>
												</a>											
										</span>																		
									</div>
								</div>
							</div>
						</div>					
					</div>
					<div class="col-md-4">
						<div class="panel-heading panel-head-4 panel-head-new ">
							<div class="panel-title">
								<h4 class="h4-color">              
									<div class="head-bg head-back-color">
										<span class="pull-left "><i class="fa fa-archive head-icon headicon"></i></span>
									</div>  	
									<span class="head-text"><nb data-localize="Suggestions"></nb></span>
								</h4>
							</div>
						</div>
						<div class="panel panel-default panel-default-new shadow2 shadow2-new">							
							<div class="panel-body panel-height-new-2 over-flow-y pt-10">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="SuggestionsZone"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
							</div>
							<div class="container">
								<div class="row view-all-3">
									<div class="col-sm-12">	
										<span class="pull-right">									
												<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControlSuggestions" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All">		
														<a class="Suggestions_Add glyphicon glyphicon-plus-sign link-color-new padding-right-10 link-color" id="nav4" style="display:none; cursor:pointer;"></a>  
												</SharePoint:SPSecurityTrimmedControl>									
												<a class="Suggestions_View link-color-new" id="nav5" >
													<span class="glyphicon glyphicon-arrow-right"></span>
												</a>											
										</span>																		
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="panel-heading panel-head-4 panel-head-new ">
							<div class="panel-title">
								<h4 class="h4-color">              
									<div class="head-bg head-back-color">
										<!-- <span class="pull-left "><i class="fa fa-lightbulb-o head-icon headicon"></i></span> -->
										<span class="pull-left "><i class="fa fa-handshake-o head-icon headicon"></i></span>
									</div>  	
									<span class="head-text"><nb data-localize="NewInitiative"></nb></span>
								</h4>
							</div>
						</div>
						<div class="panel panel-default panel-default-new shadow2 shadow2-new">							
							<div class="panel-body panel-height-new-2 over-flow-y pt-10">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="NewInitiative"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
							</div>
							<div class="container">
								<div class="row view-all-3">
									<div class="col-sm-12">	
										<span class="pull-right">									
												<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControlNewInititative" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All">		
														<a class="Inititative_Add glyphicon glyphicon-plus-sign link-color-new padding-right-10 link-color" id="nav4" style="display:none; cursor:pointer;"></a>  
												</SharePoint:SPSecurityTrimmedControl>									
												<a class="Inititative_View link-color-new" id="nav5">
													<span class="glyphicon glyphicon-arrow-right"></span>
												</a>											
										</span>																		
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
			<!-- End Second Row -->
			<div class="clearfix"></div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-6">
							<div class="panel-heading  panel-head-4 panel-head-new">
								<div class="panel-title">
									<h4 class="h4-color">
										<div class="head-bg head-back-color">
											<span class="pull-left" style="margin-right:10px;"><i class="fa fa-file-image-o head-icon headicon"></i></span>
										</div>
										<span class="head-text">
											<nb data-localize="MediaGallery">
											</nb>
										</span>																				
									</h4>
								</div>
							</div>
							<div class="panel panel-default panel-default-new panel-height-new-2 shadow2 shadow2-new">			
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone5"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                                                 
							</div>
						</div>
						<div class="col-md-6">
							<div class="panel-heading panel-head-4 panel-head-new ">
								<div class="panel-title">
									<h4 class="h4-color">              
										<div class="head-bg head-back-color">
											<span class="pull-left "><i class="fa fa-comments head-icon headicon"></i></span>
										</div>  	
										<span class="head-text"><nb data-localize="Discussions"></nb></span>
									</h4>
								</div>
							</div>
							<div class="panel panel-default panel-default-new shadow2 shadow2-new">							
								<div class="panel-body panel-height-new-2 over-flow-y pt-10">
									<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="Discussions"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
								</div>
								<div class="container">
									<div class="row view-all-3">
										<div class="col-sm-12">	
											<span class="pull-right">									
													<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControlDiscussions" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All">		
															<a class="Discussions_Add glyphicon glyphicon-plus-sign link-color-new padding-right-10 link-color" id="nav4" style="display:none; cursor:pointer;"></a>  
													</SharePoint:SPSecurityTrimmedControl>									
													<a class="Discussions_View link-color-new" id="nav5" Target="_blank" >
														<span class="glyphicon glyphicon-arrow-right"></span>
													</a>											
											</span>																		
										</div>
									</div>
								</div>
							</div>
					  </div>
				   </div>
				</div>
		</div>
<!--</div>-->
</asp:Content>




