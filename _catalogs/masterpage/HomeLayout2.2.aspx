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
    <meta name="description" content="Digital Workplace"/>
    <meta name="keywords" content="Digital Workplace" /> 
    <style type="text/css">
	.home-slider > .ms-webpart-zone {
		    display: block !important;
	}
	.home-slider > .ms-webpart-zone > .ms-webpart-cell-horizontal {
		    display: block !important;
		    margin: auto auto 0px !important;
	}
	/**************************New css************/	
	.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3, 
	.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6, 
	.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10, 
	.col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{
		padding-left:10px;
    	padding-right:10px;
	}
	.header-container nav.container div.navbar-header div.navbar-brand{
	    padding: 3px 5px !important;
	}
	.pdng-5{
		padding-left:5px;
		padding-right:5px;
	}
	.row {
	margin-left: -10px;
	margin-right: -10px;
	}
	.container-fluid{
		padding-left:10px;
		padding-right:10px;
	}
	/**************************End new css************/
		
    </style>   
    
    <link rel="stylesheet" type="text/css" href="../_catalogs/masterpage/Titan2/Styles/new_panel_tabs.css">
    
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	Digital Workplace
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">

<script type="text/javascript" src="https://c64.assets-yammer.com/assets/platform_embed.js"></script>	
<script src='../SiteAssets/EmployeeSynchronous/Permission/CheckUserAuthentication.js'></script>
<script type="text/javascript" src="../SiteAssets/MasterPageScripts/CompanyPage.js"></script>


<h1 style="display:none">Intranet</h1>
<div class="container-fluid res-container-div">
	<div class="col-md-12">
		<div class="row top15">
			<div class="col-md-8">
				<div class="home-slider"> 
					<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone1" FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
					<div class="container">
						<div class=" view-all-slider row view-all-3">
							<div class="col-md-12">
								<span class=" pull-right ">
									<!--<nb data-localize="ViewAll"> -->
									<!--	<SharePoint:SPLinkButton runat="server" class="viewBanner"  id="nav18" target="_blank"  Text="View All" />-->
										<a class="viewBanner link-color-white" id="nav18"  class="text-3">
											<span class="glyphicon glyphicon-arrow-right"></span>
										</a>
									<!--</nb>-->
								</span>
							</div>
						</div>
					</div>
				</div>	
			</div>
			<div class="col-md-4 margin20">
				<div class="panel-heading  panel-head-4 panel-head-new">
					<div class="panel-title">
						<h4 class="h4-color">
							<div class="head-bg head-back-color">
								<span class="pull-left" style="margin-right:10px;"><i class="fa fa-bullhorn head-icon headicon"></i></span>
							</div>
							<span class="head-text">
								<nb data-localize="Announcements"><label></label></nb>
							</span>
							<span class="link-color">
							</span>
							<!--add new item-->
							<!--end add new item-->
														
						</h4>
					</div>
				</div>				
				<div class="panel panel-default panel-default-new shadow2 shadow2-new my_announce_content_box">									
					<div class="panel-body panel-height-new  pt-5" >                       
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone2"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                       				
					</div>
					<div class="container">
						<div class="row view-all-3">
							<div class="col-sm-12">
								<span class=" pull-right ">
									<!--add new item-->
									<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl1" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All"><!--<SharePoint:SPLinkButton runat="server" class="addAnnouncement glyphicon glyphicon-plus-sign pull-right link-color" id="nav4" target="_blank" style="display:none"   />--><a class="addAnnouncement glyphicon glyphicon-plus-sign  link-color link-color-new padding-right-10" id="nav4" style="display:none"  class="text-3"></a><!--<a class="aVisited" target="_blank" href="../Lists/Announcements/NewForm.aspx?Source=/sites/TITAN2-DEV">+ Add New</a>--></SharePoint:SPSecurityTrimmedControl>
									<!--end add new item-->
				
									<!--view all-->
										<!--<nb data-localize="ViewAll">-->
											<a class="viewAnnouncment link-color-new" id="nav5" class="text-3">
												<span class="glyphicon glyphicon-arrow-right"></span>
											</a>
											<!-- <SharePoint:SPLinkButton runat="server" class="viewAnnouncment"  id="nav5" target="_blank"  Text="View All" />-->
										<!--</nb>-->
									<!--end view all-->	
								</span>
							</div>
						</div>
					</div>	
				<!--/panel content-->
				</div>
			</div>
		</div>
		
	</div>
	<!--part 1 end -->
	<!--part 2-->
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-6 promoted-div">
					<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone3"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone> 
				</div>
				<div class="col-md-6 news-box padd-left-2 mrg-btm20">
					<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone4"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
				</div>
			</div>
		</div>	
	<!--end part 2-->

	<!--part 3 -->
	<div class="col-md-12">
		<div class="row">
			<div class="col-md-4">
				<div class="panel-heading  panel-head-4 panel-head-new">
					<div class="panel-title">
						<h4 class="h4-color">							
							<div class="head-bg head-back-color">
								<span class="pull-left" style="margin-right:10px;">
									<i class="fa fa-bar-chart head-icon headicon"></i>
								</span>
							</div>
							<span class="head-text">
								<nb data-localize="Surveys">Surveys
									<label></label>
								</nb>
							</span>
							<span class="link-color"></span>
							<!--add new item-->
							<!--add new item-->
						</h4>
					</div>
				</div>				
				<div class="panel panel-default panel-default-new shadow2 shadow2-new">										
					<div class="panel-body panel-height-new-2">				
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone7"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                              				               
					</div>
					<div class="container">
						<div class="row  view-all-3">
							<div class="col-sm-12">
								<span class="pull-right">
									<!--add new item-->
										<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl10" runat="server"	AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentSite"><a class="glyphicon glyphicon-plus-sign link-color link-color-new padding-right-10 Poll_Add" id="nav10" style="display:none"  class="text-3"></a><!--<SharePoint:SPLinkButton runat="server" class="glyphicon glyphicon-plus-sign pull-right link-color Poll_Add"   id="nav10" target="_blank" style="display:none" />--></SharePoint:SPSecurityTrimmedControl>
									<!--end new item-->
									<!--<nb data-localize="ViewAll">-->
									<!--<SharePoint:SPLinkButton runat="server"  class="Poll_View" id="nav3" target="_blank"  Text="View All" />-->
										<a class="Poll_View link-color-new" id="nav3"  class="text-3">
											<span class="glyphicon glyphicon-arrow-right"></span>
										</a>
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
										<i class="fa fa-calendar head-icon headicon"></i>
									</span>
								</div>
								<span class="head-text">
									<nb data-localize="Events"><label></label></nb>
								</span>
								<span class="link-color"></span>									
							</h4>
						</div>
					</div>
					<div class="panel panel-default panel-default-new shadow2 shadow2-new">						
						<div class="panel-body panel-height-new-2">
							<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone9"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
						</div>
						<div class="container">
							<div class="row  view-all-3">
								<div class="col-sm-12">
									<span class=" pull-right">
										<!--add new item-->
										<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl3" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentSite"><!--<SharePoint:SPLinkButton runat="server" class="aVisited"  NavigateUrl="~site/Medgulf/Lists/Event/NewForm.aspx?Source=/sites/TITAN2-DEV" id="nav8" target="_blank"  Text="+ Add New" />--><a class="glyphicon glyphicon-plus-sign  link-color link-color-new padding-right-10 EventAdd"  class="text-3" style="display:none;cursor:pointer;"></a></SharePoint:SPSecurityTrimmedControl>
										<!--end add new item-->									
										<!--<SharePoint:SPLinkButton runat="server"  NavigateUrl="~site/Blogs/Lists/Posts/AllPosts.aspx?Source=/sites/Titan-dev" id="nav9" target="_blank"  Text="View All" />-->
										<!--<nb data-localize="ViewAll">-->
											<a class="Events_View link-color-new" >
												<label class="View_All_label" style="margin-bottom:0px !important; font-weight:500">
												</label>
												<span class="glyphicon glyphicon-arrow-right"></span>
											</a>
										<!--</nb>-->
									</span> 
								</div>
							</div>
						</div>
						
					<!--/panel content-->
					</div>
				</div>
		
				<div class="col-md-4">
					<div class="panel-heading my_custm_head_panel_animatn panel-head-4 panel-head-new">
						<div class="panel-title">
							<h4 class="h4-color">

								<ul class="my_hori_acord">

								  <li>
								    <label id="rad1">
								      <div><i class="fa fa-trophy headicon" aria-hidden="true"></i></div>
								    </label>
								    <div class="accslide">
								      <div class="content">
								        <h1 class="my_content_heading">
								        	<span class="head-text spotlight-txt" data-localize="Spotlight" style="padding-top:0px;"><label></label>
								        	</span>
								        </h1>
								      </div>
								    </div>
								  </li>

								  <li>
								    <label id="rad2">
								      <div><i class="fa fa-user-plus headicon" aria-hidden="true"></i></div>
								    </label>
								    <div class="accslide">
								      <div class="content">
								        <h1 class="my_content_heading">
								        	<span class="head-text new-joinee-txt" data-localize="NewJoinee" style="padding-top:0px;"><label></label>
								        	</span>
								        </h1>
								      </div>
								    </div>
								  </li>

								  <li>
								    <label id="rad3">
								      <div><i class="fa fa-address-book headicon" aria-hidden="true"></i></div>
								    </label>
								    <div class="accslide">
								      <div class="content">
								        <h1 class="my_content_heading">
								        	<span class="head-text biography-txt" data-localize="Biography" style="padding-top:0px;"><label></label>
								        	</span>
								        </h1>
								      </div>
								    </div>
								  </li>

								  <!-- <li>
								    <label id="rad4">
								      <div><i class="fa fa-trophy" aria-hidden="true"></i></div>
								    </label>
								    <div class="accslide">
								      <div class="content">
								        <h1 class="my_content_heading">Biography</h1>
								      </div>
								    </div>
								  </li> -->

								</ul>

								<!-- 
								<div class="pull-left Spot-New-Biography">
									<div class="head-bg Spotlight-left head-back-color">
										<span class="pull-right">
											<i class="fa fa-trophy head-icon"></i>
										</span>
										<span class="head-text spotlight-txt" data-localize="Spotlight" style="padding-top:0px;"><label></label></span>
									</div>

									<div class="head-bg NewJoinee-left head-back-color">
										<span class=" pull-right">
											<i class="fa fa-user-plus head-icon"></i>
										</span>
										<span class="head-text new-joinee-txt" data-localize="NewJoinee" style="padding-top:0px;"><label></label></span>
									</div>

									<div class="head-bg Biography-left head-back-color">
										<span class=" pull-right">
											<i class="fa fa-address-book head-icon"></i>
										</span>
										<span class="head-text biography-txt" data-localize="Biography" style="padding-top:0px;"><label></label></span>
									</div>

								</div>
								<div class="pull-right Spotlight-NewJoinee-Biography">
									<div class="head-bg2 Spotlight">
										<span class="pull-right">
											<i class="fa fa-trophy head-icon2"></i>
										</span>										
									</div>
									<div class="head-bg2 NewJoinee">
										<span class=" pull-right">
											<i class="fa fa-user-plus head-icon2"></i>
										</span>										
									</div>
									<div class="head-bg2 Biography">
										<span class=" pull-right">
											<i class="fa fa-address-book head-icon2"></i>
										</span>										
									</div>
								</div>																			-->																																												
							</h4>
						</div>
					</div>
					<div class="panel panel-default panel-default-new shadow2 shadow2-new">						
							<div class="panel-body panel-height-new-2">
								<div id="AllSlider">								
									<div>
										<div id="spotlight" class="item-zone-one">
											<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone10"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>												                               			                                        
										</div>
										<div id="newjoinee" class="item-zone-two" style="display:none">
											<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone11"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
										</div>
										<div id="biography" class="item-zone-three" style="display:none">
											<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone12"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
										</div>
									</div>														
								</div>
							</div>
							<div class="container item-spotlight"> 
								<div class="row view-all-3">
									<div class="col-sm-12 ">
										<span class=" pull-right">	
									    <a style="display:none;" class="glyphicon glyphicon-plus-sign link-color link-color-new padding-right-10 EmployeeAward_Add" target="_blank"  class="text-3"></a>
										<a class="EmployeeAward_View link-color-new" target="_blank"   class="text-3" >
											<span class="glyphicon glyphicon-arrow-right"></span>
										</a>							
										</span>
									</div>
								</div>
							</div>
							
							<div class="container item-newjoinee"> 
								<div class="row view-all-3">
									<div class="col-sm-12 ">
										<span class=" pull-right">	
									    <a style="display:none;" class="glyphicon glyphicon-plus-sign link-color link-color-new padding-right-10 NewJoinee_Add" target="_blank"  class="text-3"></a>
										<a class="NewJoinee_View link-color-new" href="../Pages/EmployeeDirectory.aspx?WebAppId=2" target="_blank"   class="text-3" >
											<span class="glyphicon glyphicon-arrow-right"></span>
										</a>							
										</span>
									</div>
								</div>
							</div>

							<div class="container item-biography"> 
								<div class="row view-all-3">
									<div class="col-sm-12 ">
										<span class=" pull-right">	
									    <a style="display:none;" class="glyphicon glyphicon-plus-sign link-color link-color-new padding-right-10 addNewBioGraphy" target="_blank"  class="text-3"></a>
										<a class="ViewAllBioGraphy link-color-new" target="_blank"  href="../Pages/BioView.aspx?WebAppId=1"  class="text-3" >
											<span class="glyphicon glyphicon-arrow-right"></span>
										</a>							
										</span>
									</div>
								</div>
							</div>
								<!--/panel content-->
							</div>
					</div>                                        						
				</div>	
		</div>
			<!--</div>-->
	<!--part 3 end-->	
	<!--part-4-->
	<div class="col-md-12">	
		<div class="row">
			<div class="col-md-6">
				<div class="panel-heading  panel-head-4 panel-head-new my_custm_head_panel_animatn">
					<div class="panel-title">
						<h4 class="h4-color">
							
							<ul class="my_hori_acord_media">

							  <li>
							    <label id="rad1_media">
							      <!--  fa fa-leanpub -->
							      <div><i class="fa fa-picture-o headicon" aria-hidden="true"></i></div>
							    </label>
							    <div class="accslide">
							      <div class="content">
							        <h1 class="my_content_heading">
							        	<span class="head-text mediaGalleryText" style="padding-top: 0px;" data-localize="MediaGallery">
										<label></label>
										</span>
									</h1>
							      </div>
							    </div>
							  </li>

							  <li>
							    <label id="rad2_media">
							      <!--  fa fa-file-image-o or fa fa-newspaper-o -->
							      <div><i class="fa fa-leanpub headicon" aria-hidden="true"></i></div>
							    </label>
							    <div class="accslide">
							      <div class="content">
							        <h1 class="my_content_heading">
							        	<span class="head-text magzineGalleryText" style="padding-top: 0px;" data-localize="MagazineGallery">
										<label></label>
										</span>
									</h1>
							      </div>
							    </div>
							  </li>

							</ul>

							<!--
							<div class="pull-left Media-magzine">
								<div class="head-bg pull-left Media-left">
									<span class="pull-left">
										  <i class="fa fa-file-image-o head-icon"></i>
									</span>
									<span class="head-text mediaGalleryText" style="padding-top: 0px;" data-localize="MediaGallery">
										<label></label>
									</span>
								</div>

								<div class="head-bg pull-left Magazine-left">
									<span class="pull-left">
										   <i class="fa fa-leanpub head-icon"></i>
									</span>
									<span class="head-text magzineGalleryText" style="padding-top: 0px;" data-localize="MagazineGallery">
										<label></label>
									</span>
								</div>															
							</div>
							<div class="pull-right Media-magzine-right">
								<div class="head-bg2 pull-right Media-right">
									<span class="pull-right">
										<i class="fa fa-leanpub head-icon2"></i>
									</span>									
								</div>
								<div class="head-bg2 pull-right Magazine-right">
									<span class="pull-right">
										<i class="fa fa-file-image-o head-icon2"></i>
									</span>									
								</div>							
								
							</div> 
							-->		
																	
							<span class="link-color"></span>								
						</h4>
					</div>
				</div>
				<div class="panel panel-default panel-default-new panel-height-new-2 shadow2 shadow2-new">					
					<div class="mediagallery-magazine">
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone5"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                                                 
					</div>
					<div class="container">
						<div class="row view-all-3">
							<div class="col-md-12">
								<span class=" pull-right">
									<!--add new item-->
										<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl2" runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentSite"><!--<SharePoint:SPLinkButton runat="server" class="glyphicon glyphicon-plus-sign pull-right MediaGallery_Add link-color"   id="nav1" target="_blank" style="display:none" />-->
										
									<!--	<a class="glyphicon glyphicon-plus-sign link-color-new padding-right-10 MediaGallery_Add link-color" target="_blank"  class="text-3" style="display:none"></a>-->
										
										</SharePoint:SPSecurityTrimmedControl>
									<!--end add new item-->
									<!--<nb data-localize="ViewAll"> -->
									<!--<SharePoint:SPLinkButton runat="server"  class="Mediagallery_View" id="nav2" target="_blank"  Text="View All" />-->
									<!--	<a class="Mediagallery_View link-color-new" target="_blank" id="nav2"  class="text-3">
											<span class="glyphicon glyphicon-arrow-right"></span>
										</a>-->
									<!--</nb>-->
								</span>
							</div>        
						</div>
					</div>	
				<!--/panel content-->
				</div>
			</div>	
			<div class="col-md-6">
				<div class="panel-heading panel-head-4 panel-head-new">
					<div class="panel-title">
						<h4 class="h4-color">
							<div class="pull-left soc-tab-div-left">
								<div class="head-bg pull-left yammer-left">
								    <!-- headicon -->
									<span class="pull-left"><i id="tabyammer"></i><h1 class="my_content_heading"><span id="media1"></span></h1></span>	
							        								
								</div>
								<div class="head-bg pull-left twitter-left">
								    <!-- headicon -->
									<span class="pull-left"><i id="tabtwitter"></i> <span id="media2"></span></span>
							        										
								</div>
								<div class="head-bg pull-left facebook-left">
								    <!-- headicon -->
									<span class="pull-left"><i id="tabfacebook"></i><span id="media3"></span></span>
							        	
								</div>
								<div class="head-bg pull-left linkedin-left">
								    <!-- headicon -->
									<span class="pull-left "><i id="tablinkedin"></i><span id="media4"></span></span>
								</div>															
							</div>
							<span class="soc-tab-div-right">
								<ul class="nav nav-tabs" id="tabdata">
									<li style="display:none;" class="tab-yammer head-bg3"><a href="#tab-yammer" data-toggle="tab" class="top-margin" ><span class="pull-right"><i id="tabyammer1"></i></span></a>
									</li>
									<li style="display:none;" class="tab-tweeter head-bg3"><a href="#tab-tweeter" data-toggle="tab" class="top-margin" ><span class="pull-right"><i id="tabtwitter1"></i></span></a>
									</li>
									<li style="display:none;" class="tab-facebook head-bg3"><a href="#tab-facebook" data-toggle="tab" class="top-margin" ><span class="pull-right"><i id="tabfacebook1"></i></span></a>
									</li>
									<li style="display:none;" class="tab-linkdin head-bg3"><a href="#tab-linkdin" data-toggle="tab" class="top-margin" >	<span class="pull-right "><i id="tablinkedin1"></i></span></a>
									</li>						
								</ul>
							</span>
						</h4>
					</div>	
				</div>
				<div class="panel panel-default panel-default-new panel-height-new-2 shadow2 shadow2-new">											 				
					<div class="tabbable full-width-tabs social-webpart">																	
						<div class="panel-body panel-height-new" style="padding:0px;">															
							<div class="carousel-inner">
								<div class="tab-content find-active-tab">
									<div class="tab-pane" id="tab-yammer">  
										<!--script type="text/javascript" src="https://s0.assets-yammer.com/assets/platform_embed.js"></script-->			
										<div id="embedded-feed" style="height:263px;width:99.8%;"></div>
										<div id="socialMediaYammer">
										</div>
									</div>						
									<div class="tab-pane" id="tab-tweeter">
										<div id="socialMediaTwitter"></div>
									</div>  
									<div class="tab-pane" id="tab-facebook">
										<div id="socialMediaFacebook"></div>
									</div>  
									<div class="tab-pane" id="tab-linkdin">
										<div id="socialMediaLinkdin"></div>
									</div>  						
								</div>
							</div>																			 
						</div>
					</div> 					                   
				</div>
			</div>
		</div>
	</div>
	<!--part 4 end-->	
</div>
</span>
</asp:Content>



